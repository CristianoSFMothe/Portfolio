'use client'

import { useEffect, useRef } from 'react'

import { cn } from '@/app/_lib/utils'

export type SleekLineCursorProps = {
  friction?: number
  trails?: number
  size?: number
  dampening?: number
  tension?: number
  className?: string
}

type CursorNode = {
  x: number
  y: number
  vx: number
  vy: number
}

type WaveOptions = {
  phase?: number
  offset?: number
  frequency?: number
  amplitude?: number
}

class Wave {
  phase = 0
  offset = 0
  frequency = 0.001
  amplitude = 1
  private valueCache = 0

  constructor(options: WaveOptions = {}) {
    this.phase = options.phase ?? 0
    this.offset = options.offset ?? 0
    this.frequency = options.frequency ?? 0.001
    this.amplitude = options.amplitude ?? 1
  }

  update() {
    this.phase += this.frequency
    this.valueCache = this.offset + Math.sin(this.phase) * this.amplitude

    return this.valueCache
  }
}

type CursorEnvironment = {
  friction: number
  trails: number
  size: number
  dampening: number
  tension: number
}

class Line {
  spring: number
  friction: number
  nodes: CursorNode[]

  constructor(
    spring: number,
    environment: CursorEnvironment,
    position: Pick<CursorNode, 'x' | 'y'>,
  ) {
    this.spring = spring + 0.1 * Math.random() - 0.02
    this.friction = environment.friction + 0.01 * Math.random() - 0.002
    this.nodes = Array.from({ length: environment.size }, () => ({
      x: position.x,
      y: position.y,
      vx: 0,
      vy: 0,
    }))
  }

  update(
    environment: CursorEnvironment,
    position: Pick<CursorNode, 'x' | 'y'>,
  ) {
    let spring = this.spring
    let currentNode = this.nodes[0]

    currentNode.vx += (position.x - currentNode.x) * spring
    currentNode.vy += (position.y - currentNode.y) * spring

    for (let index = 0; index < this.nodes.length; index += 1) {
      currentNode = this.nodes[index]

      if (index > 0) {
        const previousNode = this.nodes[index - 1]

        currentNode.vx += (previousNode.x - currentNode.x) * spring
        currentNode.vy += (previousNode.y - currentNode.y) * spring
        currentNode.vx += previousNode.vx * environment.dampening
        currentNode.vy += previousNode.vy * environment.dampening
      }

      currentNode.vx *= this.friction
      currentNode.vy *= this.friction
      currentNode.x += currentNode.vx
      currentNode.y += currentNode.vy
      spring *= environment.tension
    }
  }

  draw(context: CanvasRenderingContext2D) {
    let currentX = this.nodes[0].x
    let currentY = this.nodes[0].y

    context.beginPath()
    context.moveTo(currentX, currentY)

    for (let index = 1; index < this.nodes.length - 2; index += 1) {
      const currentNode = this.nodes[index]
      const nextNode = this.nodes[index + 1]

      currentX = 0.5 * (currentNode.x + nextNode.x)
      currentY = 0.5 * (currentNode.y + nextNode.y)
      context.quadraticCurveTo(currentNode.x, currentNode.y, currentX, currentY)
    }

    const penultimateNode = this.nodes[this.nodes.length - 2]
    const lastNode = this.nodes[this.nodes.length - 1]

    context.quadraticCurveTo(
      penultimateNode.x,
      penultimateNode.y,
      lastNode.x,
      lastNode.y,
    )
    context.stroke()
    context.closePath()
  }
}

const SleekLineCursor = ({
  friction = 0.5,
  trails = 20,
  size = 50,
  dampening = 0.25,
  tension = 0.98,
  className,
}: SleekLineCursorProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches

    if (prefersReducedMotion || !hasFinePointer) {
      return
    }

    const context = canvas.getContext('2d')
    if (!context) {
      return
    }

    const environment: CursorEnvironment = {
      friction,
      trails,
      size,
      dampening,
      tension,
    }

    const position = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }

    const hueWave = new Wave({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    })

    let lines: Line[] = []
    let frameId = 0
    let hasStarted = false
    let isRunning = false

    const createLines = () => {
      lines = Array.from({ length: environment.trails }, (_, index) => {
        return new Line(
          0.4 + (index / environment.trails) * 0.025,
          environment,
          position,
        )
      })
    }

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1

      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const render = () => {
      if (!isRunning) {
        return
      }

      context.globalCompositeOperation = 'source-over'
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)
      context.globalCompositeOperation = 'lighter'
      context.strokeStyle = `hsla(${Math.round(hueWave.update())},50%,50%,0.2)`
      context.lineWidth = 1

      for (const line of lines) {
        line.update(environment, position)
        line.draw(context)
      }

      frameId = window.requestAnimationFrame(render)
    }

    const start = () => {
      if (hasStarted) {
        return
      }

      createLines()
      hasStarted = true
      isRunning = true
      render()
    }

    const handlePointerMove = (event: PointerEvent) => {
      position.x = event.clientX
      position.y = event.clientY

      start()
    }

    const handleFocus = () => {
      if (!hasStarted || isRunning) {
        return
      }

      isRunning = true
      render()
    }

    const handleBlur = () => {
      isRunning = false
      window.cancelAnimationFrame(frameId)
    }

    resizeCanvas()

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('orientationchange', resizeCanvas)
    window.addEventListener('focus', handleFocus)
    window.addEventListener('blur', handleBlur)

    return () => {
      isRunning = false
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('orientationchange', resizeCanvas)
      window.removeEventListener('focus', handleFocus)
      window.removeEventListener('blur', handleBlur)
    }
  }, [dampening, friction, size, tension, trails])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden='true'
      className={cn('pointer-events-none fixed inset-0 z-40', className)}
    />
  )
}

export default SleekLineCursor
