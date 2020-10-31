import { Response, Request } from 'express'

import { createTransport, createMessage } from '../mail/mail.services'

const pushMail = async (req: Request, res: Response) => {
  const { email, password, receiver, subject, content } = req.body

  const transporter = createTransport(email, password)

  const message = await createMessage(receiver, subject, content)

  const info = await transporter.sendMail(message)

  return res.send(info)
}

export { pushMail }
