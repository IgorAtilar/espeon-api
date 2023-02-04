import { app } from '@/app'
import * as dotenv from 'dotenv'
dotenv.config()

const SERVER_PORT = process.env.SERVER_PORT ?? 3000

app.listen(SERVER_PORT, () => {
  console.log(`Server started on port ${SERVER_PORT} 🤠👍`)
})
