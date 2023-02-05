import { Router } from 'express'
import { validate } from '../../middlewares/validation'
import { GetTipsSchema } from '../../middlewares/validation/schemas/tips'
import { getTips } from '../../controllers/tips'

const tipsRoutes = Router()

tipsRoutes.get('/', validate(GetTipsSchema), getTips)

export { tipsRoutes }
