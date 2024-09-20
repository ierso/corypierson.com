import { EmailTemplate } from '@components/Email'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const from = process.env.RESEND_FROM || ''
const to = process.env.RESEND_TO || ''

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    const data = await resend.emails.send({
      from,
      to: [to],
      subject: 'New Contact Form Submission',
      react: EmailTemplate({ name, email, message }) as React.ReactElement,
    })

    return NextResponse.json({ message: 'Email sent successfully', data })
  } catch (error) {
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 })
  }
}
