"use client"

import * as React from "react"

interface ToastProps {
  title?: string
  description?: string
  duration?: number
  onClose?: () => void
}

export function Toast({ title, description, duration = 5000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = React.useState(true)

  React.useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        onClose?.()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  if (!isVisible) return null

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm bg-white rounded-lg shadow-lg p-4">
      {title && <h3 className="text-sm font-semibold">{title}</h3>}
      {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
      <button
        onClick={() => {
          setIsVisible(false)
          onClose?.()
        }}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-500"
      >
        ×
      </button>
    </div>
  )
} 