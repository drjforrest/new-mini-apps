"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle as AlertIcon, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { cn } from "@lib/utils/cn";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 transition-colors duration-200 [&>svg~*]:pl-7 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-surface dark:bg-surface-elevated border-border text-foreground",
        destructive:
          "border-danger/20 bg-danger/10 dark:bg-danger/5 text-danger [&>svg]:text-danger",
        success:
          "border-success/20 bg-success/10 dark:bg-success/5 text-success [&>svg]:text-success",
        warning:
          "border-accent/20 bg-accent/10 dark:bg-accent/5 text-accent [&>svg]:text-accent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const alertIcons = {
  default: AlertIcon,
  destructive: XCircle,
  success: CheckCircle,
  warning: AlertTriangle,
} as const;

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant = "default", children, ...props }, ref) => {
  const Icon = alertIcons[variant || "default"];
  return (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      <Icon className="h-4 w-4" />
      {children}
    </div>
  );
});
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium text-foreground leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-foreground/80 [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
