import { Request, Response, NextFunction } from 'express' // interface
import { pick } from 'lodash'

type FilterKeys<T> = Array<keyof T> // tạo ra 1 mảng mà mảng này lấy các item thuộc T
// để gợi ý và check param sai

export const filterMiddleware =
  <T>(filterKeys: FilterKeys<T>) =>
  (req: Request, res: Response, next: NextFunction) => {
    req.body = pick(req.body, filterKeys)
    next()
  }
