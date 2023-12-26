import { NextFunction, Request, Response } from 'express'
import formidable from 'formidable'
import { result } from 'lodash'
import path from 'path'
import { handleUploadSingleImage } from '~/utils/files'

// console.log(__dirname)
// console.log(path.resolve('uploads'))

export const uploadSingleImage = async (req: Request, res: Response, next: NextFunction) => {
  const data = await handleUploadSingleImage(req)
  return res.json({
    result: data
  })
}
