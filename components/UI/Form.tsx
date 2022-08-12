import React from 'react'
import clsx from 'clsx'

type InputProps =
  | ({ type: 'textarea' } & JSX.IntrinsicElements['textarea'])
  | JSX.IntrinsicElements['input']

type TestInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { error: undefined | boolean }

const inputStyles =
  'block w-full px-4 py-2 text-gray-900 bg-white border rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100'

export const TestInput = React.forwardRef<HTMLInputElement, TestInputProps>(
  function Input(props, ref) {
    const { name, placeholder, type, onChange, onBlur, error } = props
    console.log(name, error)
    return (
      <input
        ref={ref}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        className={clsx(
          error ? 'border-red-600' : 'border-gray-200 dark:border-gray-900',
          inputStyles
        )}
      />
    )
  }
)

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    const className =
      'block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100'

    if (props.type === 'textarea') {
      return (
        <textarea
          {...(props as JSX.IntrinsicElements['textarea'])}
          className={clsx('min-h-[100px] max-h-[250px]', className)}
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
  }
)
