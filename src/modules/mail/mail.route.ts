import { pushMail } from './mail.controller'
import { Router } from 'express'

const route = Router()

route.post('/api/v1/push-mail', pushMail)

export default route
