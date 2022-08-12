import React from 'react'
import clsx from 'clsx'

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { error: undefined | boolean }

type TextAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & { error: undefined | boolean }

const inputStyles =
  'block w-full px-4 py-2 text-gray-900 bg-white border rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100'

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    const { name, placeholder, type, onChange, onBlur, error } = props

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

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function Input(props, ref) {
    const { name, placeholder, rows, onChange, onBlur, error } = props

    return (
      <textarea
        ref={ref}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        rows={rows}
        className={clsx(
          error ? 'border-red-600' : 'border-gray-200 dark:border-gray-900',
          inputStyles
        )}
      />
    )
  }
)
