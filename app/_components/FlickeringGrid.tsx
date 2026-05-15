'use client'

import { useEffect, useRef } from 'react'

import { cn } from '@/app/_lib/utils'

export type FlickeringGridProps = {
  squareSize?: number
  gridGap?: number
  flickerChance?: number
  color?: string
  width?: number
  height?: number
  maxOpacity?: number
  className?: string
}

type GridConfig = {
  columns: number
  rows: number
  squares: Float32Array
  width: number
  height: number
}

const hexToRgb = (value: string) => {
  const normalized = value.replace('#', '')
  const hex =
    normalized.length === 3
      ? normalized
          .split('')
          .map((character) => `${character}${character}`)
          .join('')
      : normalized

  if (hex.length !== 6) {
    return { red: 255, green: 255, blue: 255 }
  }

  const red = Number.parseInt(hex.slice(0, 2), 16)
  const green = Number.parseInt(hex.slice(2, 4), 16)
  const blue = Number.parseInt(hex.slice(4, 6), 16)

  return { red, green, blue }
}

const FlickeringGrid = ({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = '#000000',
  width,
  height,
  maxOpacity = 0.3,
  className,
}: FlickeringGridProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current

    if (!container || !canvas) {
      return
    }

    const context = canvas.getContext('2d')
    if (!context) {
      return
    }

    const { red, green, blue } = hexToRgb(color)
    let grid: GridConfig | null = null
    let resizeObserver: ResizeObserver | null = null
    let intersectionObserver: IntersectionObserver | null = null
    let animationFrameId = 0
    let isInView = false
    let lastTime = 0

    const createGrid = (gridWidth: number, gridHeight: number) => {
      const columns = Math.floor(gridWidth / (squareSize + gridGap))
      const rows = Math.floor(gridHeight / (squareSize + gridGap))
      const squares = new Float32Array(columns * rows)

      for (let index = 0; index < squares.length; index += 1) {
        squares[index] = Math.random() * maxOpacity
      }

      grid = {
        columns,
        rows,
        squares,
        width: gridWidth,
        height: gridHeight,
      }
    }

    const resizeCanvas = () => {
      const nextWidth = width ?? container.clientWidth
      const nextHeight = height ?? container.clientHeight
      const dpr = window.devicePixelRatio || 1

      canvas.width = nextWidth * dpr
      canvas.height = nextHeight * dpr
      canvas.style.width = `${nextWidth}px`
      canvas.style.height = `${nextHeight}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)

      createGrid(nextWidth, nextHeight)
    }

    const updateSquares = (deltaTime: number) => {
      if (!grid) {
        return
      }

      for (let index = 0; index < grid.squares.length; index += 1) {
        if (Math.random() < flickerChance * deltaTime) {
          grid.squares[index] = Math.random() * maxOpacity
        }
      }
    }

    const drawGrid = () => {
      if (!grid) {
        return
      }

      context.clearRect(0, 0, grid.width, grid.height)

      for (let column = 0; column < grid.columns; column += 1) {
        for (let row = 0; row < grid.rows; row += 1) {
          const opacity = grid.squares[column * grid.rows + row]

          context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${opacity})`
          context.fillRect(
            column * (squareSize + gridGap),
            row * (squareSize + gridGap),
            squareSize,
            squareSize,
          )
        }
      }
    }

    const animate = (time: number) => {
      if (!isInView) {
        return
      }

      const deltaTime = (time - lastTime) / 1000
      lastTime = time

      updateSquares(deltaTime)
      drawGrid()
      animationFrameId = window.requestAnimationFrame(animate)
    }

    resizeCanvas()
    drawGrid()

    resizeObserver = new ResizeObserver(() => {
      resizeCanvas()
      drawGrid()
    })

    intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting

        if (isInView) {
          lastTime = performance.now()
          animationFrameId = window.requestAnimationFrame(animate)
          return
        }

        window.cancelAnimationFrame(animationFrameId)
      },
      { threshold: 0 },
    )

    resizeObserver.observe(container)
    intersectionObserver.observe(container)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      resizeObserver?.disconnect()
      intersectionObserver?.disconnect()
    }
  }, [color, flickerChance, gridGap, height, maxOpacity, squareSize, width])

  return (
    <div ref={containerRef} className={cn('h-full w-full', className)}>
      <canvas
        ref={canvasRef}
        aria-hidden='true'
        className='pointer-events-none'
      />
    </div>
  )
}

export default FlickeringGrid
