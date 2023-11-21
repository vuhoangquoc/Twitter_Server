import { Request, Response } from 'express'
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
