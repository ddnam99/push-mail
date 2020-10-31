import fs from 'fs'
import nodemailer from 'nodemailer'

const createTransport = (email: string, password: string) => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: password,
    },
  })
}

const createMessage = async (receiver: string, subject: string, content: string) => {
  const signature = await fs.readFileSync('signature.html', 'utf8')

  const message = {
    from: `CLB Tin học sinh viên - Student Informatic Club 👻 <no-reply@student-informatic.club>`,
    to: receiver,
    subject: subject,
    html: `<div>${content}</div>${signature}`,
  }

  return message
}

export { createTransport, createMessage }
