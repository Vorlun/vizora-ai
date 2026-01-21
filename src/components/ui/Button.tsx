import { cn } from '@/lib/utils'
import { cloneElement, isValidElement, ReactElement } from 'react'

type ButtonProps = {
  asChild?: boolean
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

type WithClassName = {
  className?: string
}

export function Button({
  asChild,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition bg-black text-white hover:bg-black/90',
    className
  )

  if (asChild && isValidElement<WithClassName>(children)) {
    return cloneElement(children as ReactElement<WithClassName>, {
      className: cn(classes, children.props.className),
    })
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
