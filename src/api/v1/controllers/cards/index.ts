import { z } from 'zod'
import type { NextFunction, Request, Response } from 'express'
import { pokemonTCGAPI } from '../../services/pokemonTCGAPI'
import { GetCardsPokemonTCGAPIResponse } from '../../services/pokemonTCGAPI/types'
import {
  GetCardsQuerySchema,
  GetCardsParamsSchema,
  GetCardsSchema,
} from '../../middlewares/validation/schemas/cards'
import { CardsNotFoundError } from '../../errors/CardsNotFound'

type GetCardsQuery = z.infer<typeof GetCardsQuerySchema>
type GetCardsParams = z.infer<typeof GetCardsParamsSchema>

export const getCards = async (
  req: Request<GetCardsParams, any, any, GetCardsQuery>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { query, params } = GetCardsSchema.parse(req)
    const { name } = params
    const { page, pageSize } = query

    const { data } = await pokemonTCGAPI<GetCardsPokemonTCGAPIResponse>('/cards', {
      params: {
        q: `name:${name}`,
        page,
        pageSize,
      },
    })

    const { data: cards, totalCount } = data

    const hasCards = cards.length > 0

    if (!hasCards) {
      throw new CardsNotFoundError()
    }

    const totalPages = Math.ceil(totalCount / pageSize)

    res.status(200).send({ cards, totalPages })
  } catch (error) {
    next(error)
  }
}
