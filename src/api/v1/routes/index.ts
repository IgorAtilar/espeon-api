import { Router } from 'express'
import { cardsRoutes } from './cards'
import { tipsRoutes } from './tips'

const routes = Router()

routes.use('/cards', cardsRoutes)
routes.use('/tips', tipsRoutes)

export { routes }
