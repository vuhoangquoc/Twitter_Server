import { Request, Response } from 'express'
import usersService from '~/services/users.services'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'vuhoang@gmail.com' && password === '123456') {
    return res.json({
      message: 'Login thành công rùi nè'
    })
  }
  return res.status(400).json({
    error: 'Sai tài khoản or mật khẩu'
  })
}

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    // chia code ra dễ quản lý -> usersService
    const result = await usersService.register({ email, password })
    return res.json({
      message: 'Register Success',
      result
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Register failed',
      error
    })
  }
}
