import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

export const Card = ({ children, className, ...props }) => (
  <div className={`bg-white shadow-md rounded-lg ${className}`} {...props}>{children}</div>
)

export const CardHeader = ({ children, className, ...props }) => (
  <div className={`px-6 py-4 border-b ${className}`} {...props}>{children}</div>
)

export const CardContent = ({ children, className, ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props}>{children}</div>
)

export const CardTitle = ({ children, className, ...props }) => (
  <h3 className={`text-lg font-semibold ${className}`} {...props}>{children}</h3>
)

export const Tabs = TabsPrimitive.Root
export const TabsList = TabsPrimitive.List
export const TabsTrigger = TabsPrimitive.Trigger
export const TabsContent = TabsPrimitive.Content