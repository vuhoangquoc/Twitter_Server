import { Router } from 'express'
import { serveImageController, serveVideoSteamController } from '~/controllers/medias.controllers'
const staticRouter = Router()

staticRouter.get('/image/:name', serveImageController)
staticRouter.get('/video-stream/:name', serveVideoSteamController)

export default staticRouter
