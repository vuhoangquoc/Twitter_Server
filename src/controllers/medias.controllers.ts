import { NextFunction, Request, Response } from 'express'
import formidable from 'formidable'
import { result } from 'lodash'
import path from 'path'
import mediasService from '~/services/medias.services'
import { handleUploadSingleImage } from '~/utils/files'

// console.log(__dirname)
// console.log(path.resolve('uploads'))

export const uploadSingleImage = async (req: Request, res: Response, next: NextFunction) => {
  const result = await mediasService.handleUploadSingleImage(req)
  return res.json({
    result: result
  })
}
