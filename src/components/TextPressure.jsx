import { useCallback, useRef, useState } from 'react'

export function TextPressure({
  text,
  className = '',
  flex = true,
  alpha = false,
  stroke = false,
  width = true,
  weight = true,
  italic = true,
  textColor = 'currentColor',
  strokeColor = 'currentColor',
  minFontSize = 36,
}) {
  const containerRef = useRef(null)
  const [pointer, setPointer] = useState(null)

  const handlePointerMove = useCallback((event) => {
    const rect = event.currentTarget.getBoundingClientRect()

    setPointer({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }, [])

  const handlePointerLeave = useCallback(() => {
    setPointer(null)
  }, [])

  return (
    <span
      className={`text-pressure ${flex ? 'text-pressure-flex' : ''} ${className}`}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      ref={containerRef}
      style={{
        '--text-pressure-color': textColor,
        '--text-pressure-min': `${minFontSize}px`,
        '--text-pressure-stroke': stroke ? strokeColor : 'transparent',
      }}
    >
      {text.split('').map((character, index) => {
        const pressure = getCharacterPressure(containerRef.current, pointer, index)
        const characterStyle = {
          '--pressure-alpha': alpha ? 0.42 + pressure * 0.58 : 1,
          '--pressure-italic': italic ? `${(pressure - 0.35) * -10}deg` : '0deg',
          '--pressure-scale': width ? 0.86 + pressure * 0.32 : 1,
          '--pressure-weight': weight ? 360 + pressure * 260 : 620,
        }

        return (
          <span
            aria-hidden="true"
            className="text-pressure-char"
            key={`${character}-${index}`}
            style={characterStyle}
          >
            {character === ' ' ? '\u00a0' : character}
          </span>
        )
      })}
      <span className="sr-only">{text}</span>
    </span>
  )
}

function getCharacterPressure(element, pointer, index) {
  if (!element || !pointer) {
    return 0.5
  }

  const character = element.querySelectorAll('.text-pressure-char')[index]

  if (!character) {
    return 0.5
  }

  const containerRect = element.getBoundingClientRect()
  const characterRect = character.getBoundingClientRect()
  const x = characterRect.left - containerRect.left + characterRect.width / 2
  const y = characterRect.top - containerRect.top + characterRect.height / 2
  const distance = Math.hypot(pointer.x - x, pointer.y - y)
  const maxDistance = Math.max(containerRect.width * 0.22, 120)

  return Math.max(0, Math.min(1, 1 - distance / maxDistance))
}
