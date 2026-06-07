import { useCallback, useEffect, useRef } from 'react'

export function ClickSpark({
  sparkColor = 'currentColor',
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = 'ease-out',
  extraScale = 1,
  children,
}) {
  const canvasRef = useRef(null)
  const sparksRef = useRef([])

  const getCanvasSize = useCallback((canvas) => {
    const rect = canvas.getBoundingClientRect()

    return {
      width: rect.width || window.innerWidth,
      height: rect.height || window.innerHeight,
    }
  }, [])

  const getSparkColor = useCallback(() => {
    if (sparkColor !== 'currentColor') {
      return sparkColor
    }

    return (
      window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('--text')
        .trim() || '#ffffff'
    )
  }, [sparkColor])

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return undefined
    }

    let resizeTimeout

    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1
      const { width, height } = getCanvasSize(canvas)
      const nextWidth = Math.max(1, Math.round(width * pixelRatio))
      const nextHeight = Math.max(1, Math.round(height * pixelRatio))

      if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
        canvas.width = nextWidth
        canvas.height = nextHeight
      }
    }

    const handleResize = () => {
      window.clearTimeout(resizeTimeout)
      resizeTimeout = window.setTimeout(resizeCanvas, 100)
    }

    window.addEventListener('resize', handleResize)
    resizeCanvas()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.clearTimeout(resizeTimeout)
    }
  }, [getCanvasSize])

  const easeFunc = useCallback(
    (progress) => {
      switch (easing) {
        case 'linear':
          return progress
        case 'ease-in':
          return progress * progress
        case 'ease-in-out':
          return progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress
        default:
          return progress * (2 - progress)
      }
    },
    [easing],
  )

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return undefined
    }

    const context = canvas.getContext('2d')
    let animationId

    const draw = (timestamp) => {
      const pixelRatio = window.devicePixelRatio || 1
      const { width, height } = getCanvasSize(canvas)

      context.setTransform(1, 0, 0, 1, 0, 0)
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      context.clearRect(0, 0, width, height)

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime

        if (elapsed >= duration) {
          return false
        }

        const progress = elapsed / duration
        const easedProgress = easeFunc(progress)
        const distance = easedProgress * sparkRadius * extraScale
        const lineLength = sparkSize * (1 - easedProgress)
        const x1 = spark.x + distance * Math.cos(spark.angle)
        const y1 = spark.y + distance * Math.sin(spark.angle)
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle)
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle)

        context.strokeStyle = getSparkColor()
        context.lineWidth = 2
        context.lineCap = 'round'
        context.beginPath()
        context.moveTo(x1, y1)
        context.lineTo(x2, y2)
        context.stroke()

        return true
      })

      animationId = window.requestAnimationFrame(draw)
    }

    animationId = window.requestAnimationFrame(draw)

    return () => {
      window.cancelAnimationFrame(animationId)
    }
  }, [duration, easeFunc, extraScale, getCanvasSize, getSparkColor, sparkRadius, sparkSize])

  const createSparks = useCallback((clientX, clientY) => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    const rect = canvas.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top
    const now = performance.now()
    const newSparks = Array.from({ length: sparkCount }, (_, index) => ({
      x,
      y,
      angle: (2 * Math.PI * index) / sparkCount,
      startTime: now,
    }))

    sparksRef.current.push(...newSparks)
  }, [sparkCount])

  useEffect(() => {
    const handlePointerDown = (event) => {
      createSparks(event.clientX, event.clientY)
    }

    window.addEventListener('pointerdown', handlePointerDown, { passive: true })

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [createSparks])

  return (
    <div className="click-spark-root">
      <canvas className="click-spark-canvas" ref={canvasRef} />
      {children}
    </div>
  )
}
