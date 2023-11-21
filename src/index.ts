import express from 'express'
import usersRouter from './routes/users.routes'
const app = express()
const port = 3000

app.use(express.json()) // phải parse thông tin người dùng gửi lên thành object mới có thể xử lý

app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
