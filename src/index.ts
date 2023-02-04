import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config()

const SERVER_PORT = process.env.SERVER_PORT ?? 3000

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (_, res) => {
  res.send('Hello World!')
})

app.listen(SERVER_PORT, () => {
  console.log(`Server started on port ${SERVER_PORT} 🤠👍`)
})
