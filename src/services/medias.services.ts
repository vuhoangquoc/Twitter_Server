import { Request } from 'express'
import { getNameFromFullname, handleUploadSingleImage } from '~/utils/files'
import sharp from 'sharp'
import { UPLOAD_DIR } from '~/constants/dir'
import path from 'path'
import fs from 'fs'

class MediasService {
  async handleUploadSingleImage(req: Request) {
    const file = await handleUploadSingleImage(req)
    const newName = getNameFromFullname(file.newFilename)
    const newPath = path.resolve(UPLOAD_DIR, `${newName}.jpg`)
    await sharp(file.filepath).jpeg().toFile(newPath)
    console.log(
      '🚀 ~ file: medias.services.ts:15 ~ MediasService ~ handleUploadSingleImage ~ file.filepath:',
      file.filepath
    )
    fs.unlinkSync(file.filepath)
    return `http://localhost:3000/uploads/${newName}.jpg`
  }
}
const mediasService = new MediasService()
export default mediasService
