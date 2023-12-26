import fs from 'fs'
import path, { resolve } from 'path'
import formidable from 'formidable'
import { Request } from 'express'
import { reject } from 'lodash'

export const initFolder = () => {
  const uploadFolderPath = path.resolve('uploads')
  if (!fs.existsSync(uploadFolderPath)) {
    fs.mkdirSync(uploadFolderPath, {
      recursive: true // Mục đích là tạo folder nested
    })
  }
}

export const handleUploadSingleImage = async (req: Request) => {
  // const formidable = (await import("formidable")).default -- fix ES Module CommonJS khi dùng formidable v2
  const form = formidable({
    uploadDir: path.resolve('uploads'),
    maxFiles: 1,
    keepExtensions: true,
    maxFieldsSize: 300 * 1024, // 300kb
    filter: function ({ name, originalFilename, mimetype }) {
      console.log('🚀 ~ file: files.ts:31 ~ handleUploadSingleImage ~ mimetype:', mimetype)
      const valid = name === 'image' && Boolean(mimetype?.includes('image/'))
      if (!valid) {
        form.emit('error' as any, new Error('File type is not valid') as any)
      }
      return valid
    }
  })
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err)
      }
      // eslint-disable-next-line no-extra-boolean-cast
      if (!Boolean(files.image)) {
        return reject(new Error('File is empty'))
      }
      resolve(files)
    })
  })
}
