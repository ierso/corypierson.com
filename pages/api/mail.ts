import mail from '@sendgrid/mail'
import type { NextApiRequest, NextApiResponse } from 'next'
import { formSchema } from '@lib/schema'

type DataProps = {
  status: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataProps>
) {
  const body = formSchema.safeParse(JSON.parse(req.body))

  if (!body.success) {
    return res.status(400).json({ status: 'Error' })
  }

  const message = `
    Name: ${body.data.name}\r\n
    Email: ${body.data.email}\r\n
    Message: ${body.data.message}
  `

  const formData = {
    to: process.env.MY_EMAIL,
    from: 'hello@corypierson.com',
    subject: 'Hello from corypierson.com',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  }

  mail.setApiKey(process.env.SENDGRID_API_KEY)

  mail.send(formData)

  res.status(200).json({ status: 'Ok' })
}
