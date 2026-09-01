import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    let baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
    
    let variantStyles = "bg-[#607F6D] text-white hover:bg-[#314B3F]";
    if (variant === "outline") variantStyles = "border border-[#BDB8B8]/50 bg-white text-[#314B3F] hover:bg-[#F5F3F6]";
    if (variant === "secondary") variantStyles = "bg-[#DCB2A6] text-[#314B3F] hover:bg-[#c99f93]";
    if (variant === "ghost") variantStyles = "hover:bg-[#F5F3F6] text-[#314B3F]";
    if (variant === "link") variantStyles = "text-[#607F6D] underline-offset-4 hover:underline";

    let sizeStyles = "h-10 px-4 py-2";
    if (size === "sm") sizeStyles = "h-8 rounded-md px-3 text-xs";
    if (size === "lg") sizeStyles = "h-12 rounded-full px-8 text-base font-bold";
    if (size === "icon") sizeStyles = "h-10 w-10";

    return (
      <button
        className={cn(baseStyles, variantStyles, sizeStyles, className)}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button }
