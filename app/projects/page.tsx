import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

import { cn } from '../_lib/utils'
import HeroSection from './_components/HeroSection'

const ProjectPage = () => {
  return (
    <main className='mx-auto w-full max-w-7xl grow space-y-30 px-6 py-12 md:px-20 md:py-24'>
      <HeroSection />

      <section className='mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <div className='glass-card group relative flex flex-col overflow-hidden rounded-xl'>
          <div
            className={cn(
              'bg-surface-container-low/80 border-secondary/30 absolute top-4 right-4',
              'glow-shadow-secondary z-10 flex items-center gap-2 rounded-full',
              'border px-3 py-1 backdrop-blur-md',
            )}
          >
            <span className='relative flex h-2 w-2'>
              <span className='bg-secondary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75'></span>
              <span className='bg-secondary relative inline-flex h-2 w-2 rounded-full'></span>
            </span>
            <span className='font-jetbrains text-secondary text-[10px] font-bold uppercase'>
              Live
            </span>
          </div>
          <div className='bg-surface-container-high relative h-48 w-full overflow-hidden'>
            <Image
              src='https://lh3.googleusercontent.com/aida-public/AB6AXuD6KE_ifmdEuEfYj4jvCY-72IneI2w_R8PN20FkJER729bsrQS9wMSDMvKuO5HuRcFvf52Kd4yekJmGLvnYXbjgJYbWBGFZE-nOd5PKa2fBelTVy4VQg9gICkCol9qGGEbdeBAMbETXW3x31FoSj_NZJ_6vBSXXlEDAkZx1PFGdfj6S8Aq7h1iaOA1VIkyqi1CIzuGyk7KShI2ETfA0gn8nM7mDUbr5Qhle5AU0x4aaOQI1nEfdcdsoWhngHnvyXKn1G_wmOS2RNLY'
              alt='Cypress E2E Framework'
              fill
              className='object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100'
              referrerPolicy='no-referrer'
            />
            <div className='from-surface absolute inset-0 bg-linear-to-t to-transparent'></div>
          </div>
          <div className='relative flex grow flex-col bg-[rgba(26,18,37,0.1)] p-6'>
            <h3 className='font-jakarta text-on-surface group-hover:text-primary mb-3 text-2xl font-bold transition-colors'>
              Cypress E2E Framework
            </h3>
            <p className='font-inter text-on-surface-variant mb-6 grow text-base'>
              Framework completo para testes ponta a ponta com Cypress,
              integrando relatórios avançados em Allure e execução paralela em
              CI/CD.
            </p>
            <div className='mb-6 flex flex-wrap gap-2'>
              <span className='font-jetbrains bg-primary-container/20 text-primary border-primary/30 rounded-full border px-3 py-1 text-[12px]'>
                Cypress
              </span>
              <span className='font-jetbrains bg-tertiary-container/20 text-tertiary border-tertiary/30 rounded-full border px-3 py-1 text-[12px]'>
                JavaScript
              </span>
              <span
                className={cn(
                  'font-jetbrains bg-surface-container-highest',
                  'text-on-surface-variant border-outline-variant rounded-full',
                  'border px-3 py-1 text-[12px]',
                )}
              >
                GitHub Actions
              </span>
            </div>
            <button
              className={cn(
                'border-primary text-primary font-jetbrains hover:bg-primary/10 flex',
                'w-full items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm',
                'transition-colors duration-300',
              )}
            >
              Ver Detalhes
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className='glass-card group relative flex flex-col overflow-hidden rounded-xl'>
          <div
            className={cn(
              'bg-surface-container-low/80 border-secondary/30 absolute top-4 right-4',
              'glow-shadow-secondary z-10 flex items-center gap-2 rounded-full',
              'border px-3 py-1 backdrop-blur-md',
            )}
          >
            <span className='relative flex h-2 w-2'>
              <span className='bg-secondary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75'></span>
              <span className='bg-secondary relative inline-flex h-2 w-2 rounded-full'></span>
            </span>
            <span className='font-jetbrains text-secondary text-[10px] font-bold uppercase'>
              Live
            </span>
          </div>
          <div className='bg-surface-container-high relative h-48 w-full overflow-hidden'>
            <Image
              src='https://lh3.googleusercontent.com/aida-public/AB6AXuD6KE_ifmdEuEfYj4jvCY-72IneI2w_R8PN20FkJER729bsrQS9wMSDMvKuO5HuRcFvf52Kd4yekJmGLvnYXbjgJYbWBGFZE-nOd5PKa2fBelTVy4VQg9gICkCol9qGGEbdeBAMbETXW3x31FoSj_NZJ_6vBSXXlEDAkZx1PFGdfj6S8Aq7h1iaOA1VIkyqi1CIzuGyk7KShI2ETfA0gn8nM7mDUbr5Qhle5AU0x4aaOQI1nEfdcdsoWhngHnvyXKn1G_wmOS2RNLY'
              alt='Cypress E2E Framework'
              fill
              className='object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100'
              referrerPolicy='no-referrer'
            />
            <div className='from-surface absolute inset-0 bg-linear-to-t to-transparent'></div>
          </div>
          <div className='relative flex grow flex-col bg-[rgba(26,18,37,0.1)] p-6'>
            <h3 className='font-jakarta text-on-surface group-hover:text-primary mb-3 text-2xl font-bold transition-colors'>
              Cypress E2E Framework
            </h3>
            <p className='font-inter text-on-surface-variant mb-6 grow text-base'>
              Framework completo para testes ponta a ponta com Cypress,
              integrando relatórios avançados em Allure e execução paralela em
              CI/CD.
            </p>
            <div className='mb-6 flex flex-wrap gap-2'>
              <span className='font-jetbrains bg-primary-container/20 text-primary border-primary/30 rounded-full border px-3 py-1 text-[12px]'>
                Cypress
              </span>
              <span className='font-jetbrains bg-tertiary-container/20 text-tertiary border-tertiary/30 rounded-full border px-3 py-1 text-[12px]'>
                JavaScript
              </span>
              <span
                className={cn(
                  'font-jetbrains bg-surface-container-highest',
                  'text-on-surface-variant border-outline-variant rounded-full',
                  'border px-3 py-1 text-[12px]',
                )}
              >
                GitHub Actions
              </span>
            </div>
            <button
              className={cn(
                'border-primary text-primary font-jetbrains hover:bg-primary/10 flex',
                'w-full items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm',
                'transition-colors duration-300',
              )}
            >
              Ver Detalhes
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className='glass-card group relative flex flex-col overflow-hidden rounded-xl'>
          <div
            className={cn(
              'bg-surface-container-low/80 border-secondary/30 absolute top-4 right-4',
              'glow-shadow-secondary z-10 flex items-center gap-2 rounded-full',
              'border px-3 py-1 backdrop-blur-md',
            )}
          >
            <span className='relative flex h-2 w-2'>
              <span className='bg-secondary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75'></span>
              <span className='bg-secondary relative inline-flex h-2 w-2 rounded-full'></span>
            </span>
            <span className='font-jetbrains text-secondary text-[10px] font-bold uppercase'>
              Live
            </span>
          </div>
          <div className='bg-surface-container-high relative h-48 w-full overflow-hidden'>
            <Image
              src='https://lh3.googleusercontent.com/aida-public/AB6AXuD6KE_ifmdEuEfYj4jvCY-72IneI2w_R8PN20FkJER729bsrQS9wMSDMvKuO5HuRcFvf52Kd4yekJmGLvnYXbjgJYbWBGFZE-nOd5PKa2fBelTVy4VQg9gICkCol9qGGEbdeBAMbETXW3x31FoSj_NZJ_6vBSXXlEDAkZx1PFGdfj6S8Aq7h1iaOA1VIkyqi1CIzuGyk7KShI2ETfA0gn8nM7mDUbr5Qhle5AU0x4aaOQI1nEfdcdsoWhngHnvyXKn1G_wmOS2RNLY'
              alt='Cypress E2E Framework'
              fill
              className='object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100'
              referrerPolicy='no-referrer'
            />
            <div className='from-surface absolute inset-0 bg-linear-to-t to-transparent'></div>
          </div>
          <div className='relative flex grow flex-col bg-[rgba(26,18,37,0.1)] p-6'>
            <h3 className='font-jakarta text-on-surface group-hover:text-primary mb-3 text-2xl font-bold transition-colors'>
              Cypress E2E Framework
            </h3>
            <p className='font-inter text-on-surface-variant mb-6 grow text-base'>
              Framework completo para testes ponta a ponta com Cypress,
              integrando relatórios avançados em Allure e execução paralela em
              CI/CD.
            </p>
            <div className='mb-6 flex flex-wrap gap-2'>
              <span className='font-jetbrains bg-primary-container/20 text-primary border-primary/30 rounded-full border px-3 py-1 text-[12px]'>
                Cypress
              </span>
              <span className='font-jetbrains bg-tertiary-container/20 text-tertiary border-tertiary/30 rounded-full border px-3 py-1 text-[12px]'>
                JavaScript
              </span>
              <span
                className={cn(
                  'font-jetbrains bg-surface-container-highest',
                  'text-on-surface-variant border-outline-variant rounded-full',
                  'border px-3 py-1 text-[12px]',
                )}
              >
                GitHub Actions
              </span>
            </div>
            <button
              className={cn(
                'border-primary text-primary font-jetbrains hover:bg-primary/10 flex',
                'w-full items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm',
                'transition-colors duration-300',
              )}
            >
              Ver Detalhes
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className='glass-card group relative flex flex-col overflow-hidden rounded-xl'>
          <div
            className={cn(
              'bg-surface-container-low/80 border-secondary/30 absolute top-4 right-4',
              'glow-shadow-secondary z-10 flex items-center gap-2 rounded-full',
              'border px-3 py-1 backdrop-blur-md',
            )}
          >
            <span className='relative flex h-2 w-2'>
              <span className='bg-secondary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75'></span>
              <span className='bg-secondary relative inline-flex h-2 w-2 rounded-full'></span>
            </span>
            <span className='font-jetbrains text-secondary text-[10px] font-bold uppercase'>
              Live
            </span>
          </div>
          <div className='bg-surface-container-high relative h-48 w-full overflow-hidden'>
            <Image
              src='https://lh3.googleusercontent.com/aida-public/AB6AXuD6KE_ifmdEuEfYj4jvCY-72IneI2w_R8PN20FkJER729bsrQS9wMSDMvKuO5HuRcFvf52Kd4yekJmGLvnYXbjgJYbWBGFZE-nOd5PKa2fBelTVy4VQg9gICkCol9qGGEbdeBAMbETXW3x31FoSj_NZJ_6vBSXXlEDAkZx1PFGdfj6S8Aq7h1iaOA1VIkyqi1CIzuGyk7KShI2ETfA0gn8nM7mDUbr5Qhle5AU0x4aaOQI1nEfdcdsoWhngHnvyXKn1G_wmOS2RNLY'
              alt='Cypress E2E Framework'
              fill
              className='object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100'
              referrerPolicy='no-referrer'
            />
            <div className='from-surface absolute inset-0 bg-linear-to-t to-transparent'></div>
          </div>
          <div className='relative flex grow flex-col bg-[rgba(26,18,37,0.1)] p-6'>
            <h3 className='font-jakarta text-on-surface group-hover:text-primary mb-3 text-2xl font-bold transition-colors'>
              Cypress E2E Framework
            </h3>
            <p className='font-inter text-on-surface-variant mb-6 grow text-base'>
              Framework completo para testes ponta a ponta com Cypress,
              integrando relatórios avançados em Allure e execução paralela em
              CI/CD.
            </p>
            <div className='mb-6 flex flex-wrap gap-2'>
              <span className='font-jetbrains bg-primary-container/20 text-primary border-primary/30 rounded-full border px-3 py-1 text-[12px]'>
                Cypress
              </span>
              <span className='font-jetbrains bg-tertiary-container/20 text-tertiary border-tertiary/30 rounded-full border px-3 py-1 text-[12px]'>
                JavaScript
              </span>
              <span
                className={cn(
                  'font-jetbrains bg-surface-container-highest',
                  'text-on-surface-variant border-outline-variant rounded-full',
                  'border px-3 py-1 text-[12px]',
                )}
              >
                GitHub Actions
              </span>
            </div>
            <button
              className={cn(
                'border-primary text-primary font-jetbrains hover:bg-primary/10 flex',
                'w-full items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm',
                'transition-colors duration-300',
              )}
            >
              Ver Detalhes
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className='glass-card group relative flex flex-col overflow-hidden rounded-xl'>
          <div
            className={cn(
              'bg-surface-container-low/80 border-secondary/30 absolute top-4 right-4',
              'glow-shadow-secondary z-10 flex items-center gap-2 rounded-full',
              'border px-3 py-1 backdrop-blur-md',
            )}
          >
            <span className='relative flex h-2 w-2'>
              <span className='bg-secondary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75'></span>
              <span className='bg-secondary relative inline-flex h-2 w-2 rounded-full'></span>
            </span>
            <span className='font-jetbrains text-secondary text-[10px] font-bold uppercase'>
              Live
            </span>
          </div>
          <div className='bg-surface-container-high relative h-48 w-full overflow-hidden'>
            <Image
              src='https://lh3.googleusercontent.com/aida-public/AB6AXuD6KE_ifmdEuEfYj4jvCY-72IneI2w_R8PN20FkJER729bsrQS9wMSDMvKuO5HuRcFvf52Kd4yekJmGLvnYXbjgJYbWBGFZE-nOd5PKa2fBelTVy4VQg9gICkCol9qGGEbdeBAMbETXW3x31FoSj_NZJ_6vBSXXlEDAkZx1PFGdfj6S8Aq7h1iaOA1VIkyqi1CIzuGyk7KShI2ETfA0gn8nM7mDUbr5Qhle5AU0x4aaOQI1nEfdcdsoWhngHnvyXKn1G_wmOS2RNLY'
              alt='Cypress E2E Framework'
              fill
              className='object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100'
              referrerPolicy='no-referrer'
            />
            <div className='from-surface absolute inset-0 bg-linear-to-t to-transparent'></div>
          </div>
          <div className='relative flex grow flex-col bg-[rgba(26,18,37,0.1)] p-6'>
            <h3 className='font-jakarta text-on-surface group-hover:text-primary mb-3 text-2xl font-bold transition-colors'>
              Cypress E2E Framework
            </h3>
            <p className='font-inter text-on-surface-variant mb-6 grow text-base'>
              Framework completo para testes ponta a ponta com Cypress,
              integrando relatórios avançados em Allure e execução paralela em
              CI/CD.
            </p>
            <div className='mb-6 flex flex-wrap gap-2'>
              <span className='font-jetbrains bg-primary-container/20 text-primary border-primary/30 rounded-full border px-3 py-1 text-[12px]'>
                Cypress
              </span>
              <span className='font-jetbrains bg-tertiary-container/20 text-tertiary border-tertiary/30 rounded-full border px-3 py-1 text-[12px]'>
                JavaScript
              </span>
              <span
                className={cn(
                  'font-jetbrains bg-surface-container-highest',
                  'text-on-surface-variant border-outline-variant rounded-full',
                  'border px-3 py-1 text-[12px]',
                )}
              >
                GitHub Actions
              </span>
            </div>
            <button
              className={cn(
                'border-primary text-primary font-jetbrains hover:bg-primary/10 flex',
                'w-full items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm',
                'transition-colors duration-300',
              )}
            >
              Ver Detalhes
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className='glass-card group relative flex flex-col overflow-hidden rounded-xl'>
          <div
            className={cn(
              'bg-surface-container-low/80 border-secondary/30 absolute top-4 right-4',
              'glow-shadow-secondary z-10 flex items-center gap-2 rounded-full',
              'border px-3 py-1 backdrop-blur-md',
            )}
          >
            <span className='relative flex h-2 w-2'>
              <span className='bg-secondary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75'></span>
              <span className='bg-secondary relative inline-flex h-2 w-2 rounded-full'></span>
            </span>
            <span className='font-jetbrains text-secondary text-[10px] font-bold uppercase'>
              Live
            </span>
          </div>
          <div className='bg-surface-container-high relative h-48 w-full overflow-hidden'>
            <Image
              src='https://lh3.googleusercontent.com/aida-public/AB6AXuD6KE_ifmdEuEfYj4jvCY-72IneI2w_R8PN20FkJER729bsrQS9wMSDMvKuO5HuRcFvf52Kd4yekJmGLvnYXbjgJYbWBGFZE-nOd5PKa2fBelTVy4VQg9gICkCol9qGGEbdeBAMbETXW3x31FoSj_NZJ_6vBSXXlEDAkZx1PFGdfj6S8Aq7h1iaOA1VIkyqi1CIzuGyk7KShI2ETfA0gn8nM7mDUbr5Qhle5AU0x4aaOQI1nEfdcdsoWhngHnvyXKn1G_wmOS2RNLY'
              alt='Cypress E2E Framework'
              fill
              className='object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100'
              referrerPolicy='no-referrer'
            />
            <div className='from-surface absolute inset-0 bg-linear-to-t to-transparent'></div>
          </div>
          <div className='relative flex grow flex-col bg-[rgba(26,18,37,0.1)] p-6'>
            <h3 className='font-jakarta text-on-surface group-hover:text-primary mb-3 text-2xl font-bold transition-colors'>
              Cypress E2E Framework
            </h3>
            <p className='font-inter text-on-surface-variant mb-6 grow text-base'>
              Framework completo para testes ponta a ponta com Cypress,
              integrando relatórios avançados em Allure e execução paralela em
              CI/CD.
            </p>
            <div className='mb-6 flex flex-wrap gap-2'>
              <span className='font-jetbrains bg-primary-container/20 text-primary border-primary/30 rounded-full border px-3 py-1 text-[12px]'>
                Cypress
              </span>
              <span className='font-jetbrains bg-tertiary-container/20 text-tertiary border-tertiary/30 rounded-full border px-3 py-1 text-[12px]'>
                JavaScript
              </span>
              <span
                className={cn(
                  'font-jetbrains bg-surface-container-highest',
                  'text-on-surface-variant border-outline-variant rounded-full',
                  'border px-3 py-1 text-[12px]',
                )}
              >
                GitHub Actions
              </span>
            </div>
            <button
              className={cn(
                'border-primary text-primary font-jetbrains hover:bg-primary/10 flex',
                'w-full items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm',
                'transition-colors duration-300',
              )}
            >
              Ver Detalhes
              <ArrowRight />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProjectPage
