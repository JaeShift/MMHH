'use client'

import clsx from 'clsx'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  helperText?: string
}

export default function Input({ label, helperText, className, id, ...props }: InputProps) {
  const inputId = id || props.name || Math.random().toString(36).slice(2)
  return (
    <div>
      {label && (
        <label htmlFor={inputId} className="form-label">
          {label}
        </label>
      )}
      <input id={inputId} className={clsx('form-input', className)} {...props} />
      {helperText && <p className="form-helper mt-1">{helperText}</p>}
    </div>
  )
}



