import { Router } from 'express'
import { validate } from '../../middlewares/validation'
import { GetCardsSchema } from '../../middlewares/validation/schemas/cards'
import { getCards } from '../../controllers/cards'

const cardsRoutes = Router()

cardsRoutes.get('/:name', validate(GetCardsSchema), getCards)

export { cardsRoutes }
