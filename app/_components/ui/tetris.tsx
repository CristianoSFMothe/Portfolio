'use client'

import {
  type CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { cn } from '@/app/_lib/utils'

interface TetrisProps {
  className?: string
  base?: number
  borderColor?: string
  fillColor?: string
  hoverColor?: string
  intervalMs?: number
}

type Cell = boolean | null
type Grid = Cell[][]

const buildGrid = (rows: number, cols: number): Grid => {
  const grid: Grid = []
  for (let r = 0; r < rows; r++) {
    const row: Cell[] = []
    for (let c = 0; c < cols; c++) {
      row.push(null)
    }
    grid.push(row)
  }
  return grid
}

const cloneGrid = (grid: Grid): Grid => grid.map((row) => row.slice())

const Tetris = ({
  className,
  base = 10,
  borderColor = 'rgba(255, 255, 255, 0.06)',
  fillColor = 'rgba(174, 198, 255, 0.45)',
  hoverColor = 'rgba(174, 198, 255, 0.8)',
  intervalMs = 1000,
}: TetrisProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })
  const [grid, setGrid] = useState<Grid>([])
  const [dims, setDims] = useState({ rows: 0, cols: 0 })

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (!entry) return
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      })
    })

    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [])

  const cellSize = size.width > 0 ? size.width / base : 0
  const cols = cellSize > 0 ? Math.floor(size.width / cellSize) : 0
  const rows = cellSize > 0 ? Math.floor(size.height / cellSize) : 0

  if (dims.rows !== rows || dims.cols !== cols) {
    setDims({ rows, cols })
    setGrid(rows > 0 && cols > 0 ? buildGrid(rows, cols) : [])
  }

  useEffect(() => {
    if (rows === 0 || cols === 0) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) return

    const interval = setInterval(() => {
      setGrid((current) => {
        if (current.length === 0) return current

        const next = cloneGrid(current)

        const lastRow = next[rows - 1]
        if (lastRow) {
          let isFilled = true
          for (let col = 0; col < cols; col++) {
            if (lastRow[col] === null) {
              isFilled = false
              break
            }
          }
          if (isFilled) {
            for (let col = 0; col < cols; col++) lastRow[col] = null
          }
        }

        for (let row = rows - 1; row >= 0; row--) {
          const nextRow = next[row + 1]
          const currentRow = next[row]
          if (!nextRow || !currentRow) continue
          for (let col = 0; col < cols; col++) {
            const value = currentRow[col]
            if (value !== null && nextRow[col] === null) {
              nextRow[col] = value
              currentRow[col] = null
            }
          }
        }

        const topRow = next[0]
        if (topRow) {
          const x = Math.floor(Math.random() * cols)
          topRow[x] = true
        }

        return next
      })
    }, intervalMs)

    return () => {
      clearInterval(interval)
    }
  }, [rows, cols, intervalMs])

  const removeCell = useCallback((rowIndex: number, colIndex: number) => {
    setGrid((current) => {
      const targetRow = current[rowIndex]
      if (!targetRow || targetRow[colIndex] === null) {
        return current
      }
      const next = cloneGrid(current)
      const nextTargetRow = next[rowIndex]
      if (nextTargetRow) {
        nextTargetRow[colIndex] = null
      }
      return next
    })
  }, [])

  const wrapperStyle = useMemo(
    () =>
      ({
        '--cell-size': `${cellSize}px`,
        '--grid-rows': Math.max(rows - 1, 0),
        '--tetris-border': borderColor,
        '--tetris-fill': fillColor,
        '--tetris-hover': hoverColor,
      }) as CSSProperties,
    [cellSize, rows, borderColor, fillColor, hoverColor],
  )

  return (
    <div
      className={cn('pointer-events-none relative w-full', className)}
      style={wrapperStyle}
    >
      <div
        ref={containerRef}
        className='absolute inset-0 grid justify-center -space-y-px'
        style={{
          gridTemplateRows: 'repeat(var(--grid-rows), var(--cell-size))',
        }}
      >
        {grid.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className='grid flex-1 grid-flow-col -space-x-px'
            style={{
              gridTemplateColumns: `repeat(${cols}, var(--cell-size))`,
            }}
          >
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className='relative border border-(--tetris-border)'
              >
                <button
                  type='button'
                  tabIndex={-1}
                  aria-hidden={!cell}
                  onClick={() =>
                    cell ? removeCell(rowIndex, colIndex) : undefined
                  }
                  className={cn(
                    'tetris-cell absolute inset-0 opacity-0',
                    'bg-(--tetris-fill) transition-opacity duration-1000 will-change-[opacity]',
                    'hover:bg-(--tetris-hover)',
                    cell && 'pointer-events-auto cursor-pointer opacity-60',
                  )}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tetris
