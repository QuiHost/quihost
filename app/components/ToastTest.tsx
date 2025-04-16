"use client"

import { useToast } from "@/components/ui/use-toast"

export function ToastTest() {
  const { toast } = useToast()

  return (
    <button
      onClick={() => {
        toast({
          title: "Test Toast",
          description: "Questo è un toast di test",
          duration: 3000,
        })
      }}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      Mostra Toast
    </button>
  )
} 