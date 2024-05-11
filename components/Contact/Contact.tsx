import { Input, TextArea } from '@components/UI'
import { SubmitHandler, useForm } from 'react-hook-form'

import React from 'react'
import { formSchema } from '@lib/schema'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'

type FormProps = {
  name: string
  email: string
  message: string
}

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({ resolver: zodResolver(formSchema) })

  const fetcher = async (formData: FormProps) => {
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

  const onSubmit: SubmitHandler<FormProps> = (data) => {
    mutateAsync(data)
  }

  return (
    <>
      <h2 className="text-2xl font-bold">Contact me</h2>
      <div className="mt-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <Input
                {...register('name')}
                placeholder="Name*"
                error={Boolean(errors?.name)}
              />
            </div>
            <div className="col-span-1">
              <Input
                {...register('email')}
                placeholder="Email*"
                type="email"
                error={Boolean(errors?.email)}
              />
            </div>
            <div className="col-span-2">
              <TextArea
                rows={4}
                {...register('message')}
                placeholder="Write something..."
                error={Boolean(errors?.message)}
              />
            </div>
            <div className="col-span-2">
              <input
                className="ease-out duration-200 h-10 dark:hover:bg-gray-200 hover:bg-gray-700 border-gray-200 text-center dark:text-black dark:bg-white text-white bg-black px-3.5 rounded-lg cursor-pointer"
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
