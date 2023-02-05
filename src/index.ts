import 'dotenv/config'
import { app } from './app'

const SERVER_PORT = process.env.SERVER_PORT ?? 3000

app.listen(SERVER_PORT, () => {
  console.log(`Server started on port ${SERVER_PORT} 🤠👍`)
})
