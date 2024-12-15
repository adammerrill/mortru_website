import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'

type ButtonSize = 'default' | 'sm' | 'lg' | 'xs'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
  children: ReactNode
}

const Slot = ({ children }: { children: ReactNode }) => children

const buttonVariants = ({
  variant = 'default',
  size = 'default',
  className,
}: Pick<ButtonProps, 'variant' | 'size' | 'className'>) => {
  return cn(
    className,
    {
      'rounded-md': size !== 'xs',
      'rounded-sm': size === 'xs',
    },
    {
      'text-sm': size === 'sm',
      'text-base': size === 'default',
      'text-lg': size === 'lg',
      'text-xs': size === 'xs',
    },
    {
      'disabled:cursor-not-allowed': true,
      'disabled:opacity-50': true,
    },
    {
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        xs: "h-8 px-2 rounded-sm text-xs", // New extra small variant
      }[size],
    },
    {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/95",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/95",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground active:bg-accent/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/85",
        ghost: "hover:bg-accent hover:text-accent-foreground active:bg-accent/90",
        link: "underline-offset-4 hover:underline text-primary active:text-primary/90",
      }[variant],
    },
    {
      elevated: "bg-background text-foreground shadow-md hover:shadow-lg transition-shadow",
    }[variant]
  )
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      />
    )
  }
)

export default Button

