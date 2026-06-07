import { useEffect, useRef, useState } from 'react'

const interactiveSelector = 'a, button, [role="button"], input, textarea, select'
const textSelector = 'p, h1, h2, h3, h4, h5, h6, span, small, figcaption, li'

export function CustomCursor() {
  const cursorRef = useRef(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const renderedRef = useRef({ x: 0, y: 0 })
  const stateRef = useRef('hidden')
  const [state, setState] = useState('hidden')

  const updateState = (nextState) => {
    stateRef.current = nextState
    setState(nextState)
  }

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!finePointer || reducedMotion) {
      return undefined
    }

    let animationId

    const updateCursor = () => {
      renderedRef.current.x += (positionRef.current.x - renderedRef.current.x) * 0.22
      renderedRef.current.y += (positionRef.current.y - renderedRef.current.y) * 0.22

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${renderedRef.current.x}px, ${renderedRef.current.y}px, 0)`
      }

      animationId = window.requestAnimationFrame(updateCursor)
    }

    const handlePointerMove = (event) => {
      positionRef.current = { x: event.clientX, y: event.clientY }

      if (stateRef.current === 'hidden') {
        renderedRef.current = { x: event.clientX, y: event.clientY }
      }

      const target = event.target
      const isInteractive = target.closest(interactiveSelector)
      const isText = target.closest(textSelector)

      updateState(isInteractive ? 'active' : isText ? 'text' : 'idle')
    }

    const handlePointerDown = () => {
      updateState('pressed')
    }

    const handlePointerUp = (event) => {
      const target = event.target
      updateState(target.closest(interactiveSelector) ? 'active' : 'idle')
    }

    const handlePointerLeave = () => {
      updateState('hidden')
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', handlePointerUp)
    document.documentElement.addEventListener('mouseleave', handlePointerLeave)
    animationId = window.requestAnimationFrame(updateCursor)

    return () => {
      window.cancelAnimationFrame(animationId)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
      document.documentElement.removeEventListener('mouseleave', handlePointerLeave)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className={`custom-cursor custom-cursor-${state}`}
      ref={cursorRef}
    >
      <span className="custom-cursor-ring" />
      <span className="custom-cursor-dot" />
    </div>
  )
}
