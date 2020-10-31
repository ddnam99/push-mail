import express from 'express'
import 'module-alias/register'
import 'express-async-errors'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { loggerMiddleware } from '$utils/middleware'
import { createServer } from 'http'
import { routes } from './modules'
import dotenv from 'dotenv'

dotenv.config()

import log from '$utils/log'
const logger = log('Index')
const app = express()
const http = createServer(app)

function init() {
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(loggerMiddleware)
  app.use(cors())
  routes.forEach(route => app.use(route))
  http.listen(4000, () => {
    logger.info(
      `Express server started on port ${process.env.PORT || 4000}. Environment: ${process.env.NODE_ENV || 'dev'}`
    )
  })
}

init()
