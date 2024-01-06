import express from 'express'
import usersRouter from './routes/users.routes'
import databaseService from './services/database.services'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import mediasRouter from './routes/medias.routers'
import { initFolder } from './utils/files'
import { config } from 'dotenv'
import { UPLOAD_IMAGE_DIR, UPLOAD_VIDEO_DIR } from './constants/dir'
import staticRouter from './routes/static.routes'

config()

// connect DB
databaseService.connect()

const app = express()
const port = process.env.PORT || 4000

console.log(process.argv)

initFolder()

app.use(express.json()) // phải parse thông tin người dùng gửi lên thành object mới có thể xử lý

app.use('/users', usersRouter)
app.use('/medias', mediasRouter)
app.use('/static/video', express.static(UPLOAD_VIDEO_DIR))
app.use('/static', staticRouter)

// Tất cả lỗi sẽ chạy vào đây
app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
