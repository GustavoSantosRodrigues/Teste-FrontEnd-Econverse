import type { ReactNode } from 'react'
import './Button.scss'

type ButtonProps = {
  children: ReactNode
  type?: 'button' | 'submit'
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  type = 'button',
  className = '',
  onClick,
}: ButtonProps) {
  return (
    <button type={type} className={`button ${className}`.trim()} onClick={onClick}>
      <span>{children}</span>
    </button>
  )
}