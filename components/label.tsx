import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cva, VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import * as LabelPrimitive from "@radix-ui/react-label"
import React from "react"

const labelVariants = cva(
  "font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      required: {
        true: "after:content-['*'] after:ml-0.5 after:text-destructive",
      },
      size: {
        default: "text-sm",
        large: "text-base",
        small: "text-xs",
      },
      tooltip: {
        true: "cursor-help underline underline-offset-2 decoration-dotted",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants> & {
      required?: boolean
      tooltip?: string
    }
>(({ className, required, size, tooltip, children, ...props }, ref) => {
  const labelContent = (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants({ required, size, tooltip: !!tooltip }), className)}
      {...props}
    >
      {children}
    </LabelPrimitive.Root>
  )

  if (tooltip) {
    return (
      <TooltipPrimitive.Provider>
        <TooltipPrimitive.Root>
          <TooltipPrimitive.Trigger asChild>
            {labelContent}
          </TooltipPrimitive.Trigger>
          <TooltipPrimitive.Content
            className="bg-popover text-popover-foreground px-3 py-1.5 text-sm rounded-md shadow-md"
            sideOffset={5}
          >
            {tooltip}
            <TooltipPrimitive.Arrow className="fill-popover" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Root>
      </TooltipPrimitive.Provider>
    )
  }

  return labelContent
})

export default Label

