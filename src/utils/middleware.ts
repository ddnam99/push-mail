import { Request, Response, NextFunction } from 'express'
import log from '$utils/log'

const logger = log('REQUEST')
export function loggerMiddleware(request: Request, response: Response, next: NextFunction) {
  logger.info(`${request.method} ${request.path}`)
  next()
}
