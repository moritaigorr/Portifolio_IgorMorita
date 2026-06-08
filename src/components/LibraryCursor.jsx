import { useEffect, useRef, useState } from 'react'

export function LibraryCursor({
  targets = [],
  customClass = 'custom-cursor',
  dimensions = 30,
  fill = '#fff',
  smoothness = { movement: 0.2, scale: 0.1, opacity: 0.2 },
  opacity = 1,
  targetOpacity = 0.5,
  targetScale = 4,
}) {
  const cursorRef = useRef(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const renderedRef = useRef({ x: 0, y: 0, opacity: 0, scale: 1 })
  const activeRef = useRef(false)
  const [, setActive] = useState(false)

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(any-pointer: fine)').matches

    if (!hasFinePointer) {
      return undefined
    }

    const movementSmoothness = getSmoothnessValue(smoothness, 'movement')
    const opacitySmoothness = getSmoothnessValue(smoothness, 'opacity')
    const scaleSmoothness = getSmoothnessValue(smoothness, 'scale')
    const targetList = Array.isArray(targets) ? targets : [targets]
    let animationId

    const updateCursor = () => {
      const targetOpacityValue = activeRef.current ? targetOpacity : opacity
      const targetScaleValue = activeRef.current ? targetScale : 1

      renderedRef.current.x += (positionRef.current.x - renderedRef.current.x) * movementSmoothness
      renderedRef.current.y += (positionRef.current.y - renderedRef.current.y) * movementSmoothness
      renderedRef.current.opacity +=
        (targetOpacityValue - renderedRef.current.opacity) * opacitySmoothness
      renderedRef.current.scale +=
        (targetScaleValue - renderedRef.current.scale) * scaleSmoothness

      if (cursorRef.current) {
        cursorRef.current.style.opacity = String(renderedRef.current.opacity)
        cursorRef.current.style.transform = `translate3d(${renderedRef.current.x}px, ${renderedRef.current.y}px, 0) translate(-50%, -50%) scale(${renderedRef.current.scale})`
      }

      animationId = window.requestAnimationFrame(updateCursor)
    }

    const handleMouseMove = (event) => {
      positionRef.current = { x: event.clientX, y: event.clientY }

      if (renderedRef.current.opacity === 0) {
        renderedRef.current.x = event.clientX
        renderedRef.current.y = event.clientY
      }

      const target = event.target
      const isTarget =
        target instanceof Element &&
        targetList.some((selector) => selector && target.closest(selector))

      activeRef.current = isTarget
      setActive(isTarget)
    }

    const handleMouseLeave = () => {
      renderedRef.current.opacity = 0
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)
    animationId = window.requestAnimationFrame(updateCursor)

    return () => {
      window.cancelAnimationFrame(animationId)
      window.removeEventListener('mousemove', handleMouseMove)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [opacity, smoothness, targetOpacity, targetScale, targets])

  return (
    <span
      aria-hidden="true"
      className={`library-cursor ${customClass}`}
      ref={cursorRef}
      style={{
        '--library-cursor-fill': fill,
        '--library-cursor-size': `${dimensions}px`,
      }}
    />
  )
}

function getSmoothnessValue(smoothness, key) {
  if (typeof smoothness === 'number') {
    return smoothness
  }

  return smoothness[key] ?? 0.2
}
