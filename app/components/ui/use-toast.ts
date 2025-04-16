"use client"

import * as React from "react"

interface Toast {
  id: string
  title?: string
  description?: string
  duration?: number
}

interface State {
  toasts: Toast[]
}

const TOAST_LIMIT = 3
const TOAST_REMOVE_DELAY = 5000

let count = 0
function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

const listeners: Array<(state: State) => void> = []
let memoryState: State = { toasts: [] }

function dispatch(nextState: State) {
  memoryState = nextState
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

function addToast(toast: Omit<Toast, "id">) {
  const id = genId()
  const nextState = {
    toasts: [
      { ...toast, id },
      ...memoryState.toasts,
    ].slice(0, TOAST_LIMIT),
  }
  dispatch(nextState)

  setTimeout(() => {
    dispatch({
      toasts: memoryState.toasts.filter((t) => t.id !== id),
    })
  }, TOAST_REMOVE_DELAY)

  return id
}

export function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    toasts: state.toasts,
    toast: (props: Omit<Toast, "id">) => addToast(props),
  }
} 