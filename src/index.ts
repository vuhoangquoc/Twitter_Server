import express from 'express'
import usersRouter from './routes/users.routes'
import databaseService from './services/database.services'
const app = express()
const port = 3000

app.use(express.json()) // phải parse thông tin người dùng gửi lên thành object mới có thể xử lý

app.use('/users', usersRouter)

// connect DB
databaseService.connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
