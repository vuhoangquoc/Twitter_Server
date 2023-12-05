import express, { Request, Response, NextFunction } from 'express'
import usersRouter from './routes/users.routes'
import databaseService from './services/database.services'
const app = express()
const port = 3000

app.use(express.json()) // phải parse thông tin người dùng gửi lên thành object mới có thể xử lý

app.use('/users', usersRouter)

// connect DB
databaseService.connect()

// Tất cả lỗi sẽ chạy vào đây
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // console.log('Lỗi: ', err.message)
  res.status(400).json({
    error: err.message
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
