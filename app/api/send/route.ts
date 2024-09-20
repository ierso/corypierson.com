import { EmailTemplate } from '@components/Email'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    const data = await resend.emails.send({
      from: `${name}, corypierson.com`,
      to: ['delivered@resend.dev'],
      subject: 'New Contact Form Submission',
      react: EmailTemplate({ name, email, message }) as React.ReactElement,
    })

    return NextResponse.json({ message: 'Email sent successfully', data })
  } catch (error) {
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 })
  }
}
