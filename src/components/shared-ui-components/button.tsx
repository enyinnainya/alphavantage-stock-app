import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/helpers/utils.ts'

/**
 * Styles for different button variants.
 */
const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Default button style
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        // Button with destructive intent
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        // Outline button
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        // Secondary button style
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        // Ghost button style
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        // Link button style
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        // Default button size
        default: 'h-10 px-4 py-2',
        // Small button size
        sm: 'h-9 rounded-md px-3',
        // Large button size
        lg: 'h-11 rounded-md px-8',
        // Icon button size
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

/**
 * Props for the Button component.
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Indicates if the button should be rendered as a child component
   * instead of a button element.
   * @default false
   */
  asChild?: boolean
}

/**
 * The Button component.
 *
 * @param props - The button props.
 * @returns The rendered button.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Choose the component to render based on the asChild prop
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
