import { NextFunction, Request, Response } from 'express'
import formidable from 'formidable'
import path from 'path'

// console.log(__dirname)
// console.log(path.resolve('uploads'))

export const uploadSingleImage = async (req: Request, res: Response, next: NextFunction) => {
  // const formidable = (await import("formidable")).default -- fix ES Module CommonJS khi dùng formidable v2
  const form = formidable({
    uploadDir: path.resolve('uploads'),
    maxFiles: 1,
    keepExtensions: true,
    maxFieldsSize: 300 * 1024 // 300kb
  })
  form.parse(req, (err, fields, files) => {
    if (err) {
      throw err
    }
    res.json({
      message: 'Upload image success'
    })
  })
}
