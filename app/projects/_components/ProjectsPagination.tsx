'use client'

import { cva } from 'class-variance-authority'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/app/_components/ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from '@/app/_components/ui/pagination'
import { cn } from '@/app/_lib/utils'

/**
 * Estilo de cada célula da paginação, mantendo o visual do design:
 * - inativa: borda/texto suaves com hover em primary
 * - ativa: destaque em secondary
 *
 * Aplicado sobre o `Button` (variant `ghost`), por isso os estados de
 * hover sobrescrevem explicitamente os do ghost (inclusive no dark).
 */
const cellVariants = cva(
  'font-jetbrains size-10 rounded-lg border text-sm transition-all',
  {
    variants: {
      active: {
        true: 'border-secondary bg-secondary/10 text-secondary glow-shadow-secondary font-bold hover:bg-secondary/10 hover:text-secondary dark:hover:bg-secondary/10',
        false:
          'border-outline-variant text-on-surface-variant hover:border-primary hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/10',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
)

type PaginationCell = number | 'ellipsis-left' | 'ellipsis-right'

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index)

/**
 * Calcula os itens visíveis da paginação com reticências.
 * Sempre mantém a primeira e a última página visíveis.
 */
const getPaginationCells = (
  currentPage: number,
  totalPages: number,
  siblingCount = 1,
): PaginationCell[] => {
  const totalVisible = siblingCount * 2 + 5

  if (totalPages <= totalVisible) {
    return range(1, totalPages)
  }

  const leftSibling = Math.max(currentPage - siblingCount, 1)
  const rightSibling = Math.min(currentPage + siblingCount, totalPages)
  const showLeftEllipsis = leftSibling > 2
  const showRightEllipsis = rightSibling < totalPages - 1

  if (!showLeftEllipsis && showRightEllipsis) {
    return [...range(1, 3 + siblingCount * 2), 'ellipsis-right', totalPages]
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    return [
      1,
      'ellipsis-left',
      ...range(totalPages - (2 + siblingCount * 2), totalPages),
    ]
  }

  return [
    1,
    'ellipsis-left',
    ...range(leftSibling, rightSibling),
    'ellipsis-right',
    totalPages,
  ]
}

export type ProjectsPaginationProps = {
  totalPages: number
  initialPage?: number
  onPageChange?: (page: number) => void
  className?: string
}

const ProjectsPagination = ({
  totalPages,
  initialPage = 1,
  onPageChange,
  className,
}: ProjectsPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage)

  if (totalPages <= 1) {
    return null
  }

  const goToPage = (page: number) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages)

    if (nextPage === currentPage) {
      return
    }

    setCurrentPage(nextPage)
    onPageChange?.(nextPage)
  }

  const cells = getPaginationCells(currentPage, totalPages)

  return (
    <Pagination
      className={cn('mt-12', className)}
      data-qa='projects-pagination'
    >
      <PaginationContent className='gap-2'>
        <PaginationItem>
          <Button
            aria-label='Página anterior'
            className={cn(cellVariants({ active: false }))}
            data-qa='projects-pagination-previous'
            disabled={currentPage === 1}
            onClick={() => goToPage(currentPage - 1)}
            size='icon'
            variant='ghost'
          >
            <ChevronLeft aria-hidden='true' />
          </Button>
        </PaginationItem>

        {cells.map((cell) => {
          if (cell === 'ellipsis-left' || cell === 'ellipsis-right') {
            return (
              <PaginationItem key={cell}>
                <PaginationEllipsis className='text-on-surface-variant font-jetbrains size-10' />
              </PaginationItem>
            )
          }

          const isActive = cell === currentPage

          return (
            <PaginationItem key={cell}>
              <Button
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Página ${cell}`}
                className={cn(cellVariants({ active: isActive }))}
                data-qa={`projects-pagination-page-${cell}`}
                onClick={() => goToPage(cell)}
                size='icon'
                variant='ghost'
              >
                {cell}
              </Button>
            </PaginationItem>
          )
        })}

        <PaginationItem>
          <Button
            aria-label='Próxima página'
            className={cn(cellVariants({ active: false }))}
            data-qa='projects-pagination-next'
            disabled={currentPage === totalPages}
            onClick={() => goToPage(currentPage + 1)}
            size='icon'
            variant='ghost'
          >
            <ChevronRight aria-hidden='true' />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default ProjectsPagination
