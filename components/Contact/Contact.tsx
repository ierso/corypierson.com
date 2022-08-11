import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input } from '@components/UI'
import { useMutation } from '@tanstack/react-query'

type FormValues = {
  name: string
  email: string
  message: string
}

export function Contact() {
  const { register, handleSubmit, reset } = useForm<FormValues>()

  const fetcher = async (formData: FormValues) => {
    return fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData),
    })
  }

  function onSuccess() {
    reset({ name: '', email: '', message: '' })
  }

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(fetcher, {
    onSuccess,
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutateAsync(data)
  }

  return (
    <>
      <h2 className="text-2xl font-bold">Contact me</h2>
      <div className="mt-6">
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
              <input
                className="cursor-pointer"
                type="submit"
                disabled={isLoading}
              />
            </div>
            {isError && <div>Oh Oh.. something went wrong.</div>}
            {isLoading && <div>Submitting form...</div>}
            {isSuccess && <div>Thank you for your submission!</div>}
          </div>
        </form>
      </div>
    </>
  )
}
