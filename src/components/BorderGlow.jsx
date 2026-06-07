import { useCallback, useState } from 'react'

export function BorderGlow({
  edgeSensitivity = 30,
  glowColor = '40 80 80',
  backgroundColor = 'transparent',
  borderRadius = 8,
  glowRadius = 40,
  glowIntensity = 1,
  coneSpread = 25,
  animated = false,
  colors = ['#c084fc', '#f472b6', '#38bdf8'],
  className = '',
  children,
}) {
  const [glow, setGlow] = useState({ x: '50%', y: '50%', opacity: 0 })

  const handlePointerMove = useCallback(
    (event) => {
      const rect = event.currentTarget.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const distanceToEdge = Math.min(x, y, rect.width - x, rect.height - y)
      const edgeProgress = Math.max(
        0,
        1 - distanceToEdge / Math.max(edgeSensitivity, 1),
      )

      setGlow({
        x: `${x}px`,
        y: `${y}px`,
        opacity: edgeProgress * glowIntensity,
      })
    },
    [edgeSensitivity, glowIntensity],
  )

  const handlePointerLeave = useCallback(() => {
    setGlow((current) => ({ ...current, opacity: 0 }))
  }, [])

  return (
    <div
      className={`border-glow ${animated ? 'border-glow-animated' : ''} ${className}`}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      style={{
        '--border-glow-bg': backgroundColor,
        '--border-glow-color': glowColor,
        '--border-glow-color-1': colors[0],
        '--border-glow-color-2': colors[1] || colors[0],
        '--border-glow-color-3': colors[2] || colors[0],
        '--border-glow-cone': `${coneSpread}deg`,
        '--border-glow-opacity': glow.opacity,
        '--border-glow-radius': `${borderRadius}px`,
        '--border-glow-size': `${glowRadius}px`,
        '--border-glow-x': glow.x,
        '--border-glow-y': glow.y,
      }}
    >
      {children}
    </div>
  )
}
