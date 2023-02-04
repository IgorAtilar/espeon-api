import { Router } from 'express'
import { cardsRoutes } from './cards'

const routes = Router()

routes.use('/cards', cardsRoutes)

export { routes }
