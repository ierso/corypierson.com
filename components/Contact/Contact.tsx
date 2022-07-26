import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type InputProps =
  | ({ type: 'textarea' } & JSX.IntrinsicElements['textarea'])
  | JSX.IntrinsicElements['input']

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  ref
) {
  const className =
    'block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100'

  if (props.type === 'textarea') {
    return (
      <textarea
        {...(props as JSX.IntrinsicElements['textarea'])}
        className={className}
        ref={ref}
      />
    )
  }

  return (
    <input
      {...(props as JSX.IntrinsicElements['input'])}
      className={className}
      ref={ref}
    />
  )
})

type FormValues = {
  name: string
  email: string
  message: string
}

export function Contact() {
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(data),
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <Input {...register('name')} placeholder="First Name" />
        </div>
        <div className="col-span-1">
          <Input {...register('email')} type="email" placeholder="Email" />
        </div>
        <div className="col-span-2">
          <Input
            type="textarea"
            rows={4}
            {...register('message')}
            placeholder="Write something..."
          />
        </div>
        <div className="col-span-2">
          <input type="submit" />
        </div>
      </div>
    </form>
  )
}
