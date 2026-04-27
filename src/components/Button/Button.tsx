import './Button.scss'

type ButtonProps = {
  children: React.ReactNode
  type?: 'button' | 'submit'
  className?: string
}

export default function Button({
  children,
  type = 'button',
  className = '',
}: ButtonProps) {
  return (
    <button type={type} className={`button ${className}`.trim()}>
      <span>{children}</span>
    </button>
  )
}