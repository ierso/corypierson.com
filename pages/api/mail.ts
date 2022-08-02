import mail from '@sendgrid/mail'
import type { NextApiRequest, NextApiResponse } from 'next'

type DataProps = {
  status: string
}

type BodyProps = {
  name: string
  email: string
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataProps>
) {
  const body: BodyProps = JSON.parse(req.body)

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `

  const formData = {
    to: 'coryierso@gmail.com',
    from: 'hello@corypierson.com',
    subject: 'Hello from corypierson.com',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  }

  mail.setApiKey(process.env.SENDGRID_API_KEY)

  mail.send(formData)

  res.status(200).json({ status: 'Ok' })
}
