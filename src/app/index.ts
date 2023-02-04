import express from 'express'
import cors from 'cors'
import { errorHandler } from '@/api/v1/middlewares/error'
import { routes } from '@/api/v1/routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/v1', routes)
app.use(errorHandler)

export { app }
