import { Router } from 'express'
import { validate } from '@/api/v1/middlewares/validation'
import { GetCardsSchema } from '@/api/v1/middlewares/validation/schemas/cards'
import { getCards } from '@/api/v1/controllers/cards'

const cardsRoutes = Router()

cardsRoutes.get('/:name', validate(GetCardsSchema), getCards)

export { cardsRoutes }
