import express from 'express'
import usersRouter from './routes/users.routes'
import databaseService from './services/database.services'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import mediasRouter from './routes/medias.routers'
import { initFolder } from './utils/files'
// connect DB
databaseService.connect()

const app = express()
const port = 4000

initFolder()

app.use(express.json()) // phải parse thông tin người dùng gửi lên thành object mới có thể xử lý

app.use('/users', usersRouter)
app.use('/medias', mediasRouter)

// Tất cả lỗi sẽ chạy vào đây
app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
