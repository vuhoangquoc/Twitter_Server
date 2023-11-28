import { Router } from 'express'
import { loginController, registerController } from '~/controllers/users.controllers'
import { loginValidator } from '~/middlewares/users.middlewares'

const usersRouter = Router()

usersRouter.post('/login', loginValidator, loginController) // cái gì liên quan kết quả trả về, xử lý logic thì đưa vào controller
usersRouter.post('/register', registerController)

export default usersRouter
