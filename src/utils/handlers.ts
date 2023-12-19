import { Request, Response, NextFunction, RequestHandler } from 'express'

export const wrapRequestHandler = <P>(func: RequestHandler<P>) => {
  return async (req: Request<P>, res: Response, next: NextFunction) => {
    // cách 1
    // Promise.resolve(func(req, res, next)).catch(next)
    // cách 2
    try {
      await func(req, res, next) // function ở đây là các controller
    } catch (error) {
      next(error)
    }
  }
}
