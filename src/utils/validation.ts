import express from 'express'
import { validationResult, ValidationChain } from 'express-validator'
import { RunnableValidationChains } from 'express-validator/src/middlewares/schema'
import HTTP_STATUS from '~/constants/httpStatus'
import { EntityError, ErrorWithStatus } from '~/models/errors'
// can be reused by many routes

// sequential processing, stops running validations chain if the previous one fails.
export const validate = (validation: RunnableValidationChains<ValidationChain>) => {
  //
  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    await validation.run(req) //
    const errors = validationResult(req)
    // Không có lỗi thì next tiếp tục request
    if (errors.isEmpty()) {
      return next()
    }

    const errorObject = errors.mapped()
    const entityError = new EntityError({ errors: {} })
    for (const key in errorObject) {
      const { msg } = errorObject[key]
      // Trả về lỗi không phải là lỗi do validate
      if (msg instanceof ErrorWithStatus && msg.status !== HTTP_STATUS.UNPROCESSABLE_ENTITY) {
        return next(msg)
      }
      entityError.errors[key] = errorObject[key]
    }

    // res.status(422).json({ errors: errorObject }) // mapped xuất lỗi thành 1 {}
    next(entityError)
  }
}
// lấy từ docs xuống, sửa lại
