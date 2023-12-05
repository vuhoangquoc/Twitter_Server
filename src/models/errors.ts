import HTTP_STATUS from '~/constants/httpStatus'
import { USERS_MESSAGES } from '~/constants/messages'

type ErrorsType = Record<
  string,
  {
    msg: string
    [key: string]: any // ngoài những cái trên thì còn có những cái này
  }
> // {[key: string]: string}

export class ErrorWithStatus {
  message: string
  status: number
  constructor({ message, status }: { message: string; status: number }) {
    this.message = message
    this.status = status
  }
}

export class EntityError extends ErrorWithStatus {
  errors: ErrorsType
  constructor({ errors }: { errors: ErrorsType }) {
    // khỏi truyền vào stutus vì EntityError luôn có status 422
    super({ message: USERS_MESSAGES.VALIDATION_ERROR, status: HTTP_STATUS.UNPROCESSABLE_ENTITY })
    this.errors = errors
  }
}
