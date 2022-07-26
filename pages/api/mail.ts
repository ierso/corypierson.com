import mail from '@sendgrid/mail'
import type { NextApiRequest, NextApiResponse } from 'next'

mail.setApiKey(process.env.SENDGRID_API_KEY)

type Data = {
  status: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body)
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `
  const data = {
    to: 'coryierso@gmail.com',
    from: 'hello@corypierson.com',
    subject: 'Hello from corypierson.com',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  }

  mail.send(data)

  res.status(200).json({ status: 'Ok' })
}
