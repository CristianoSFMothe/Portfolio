import * as React from 'react'

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener('change', onChange)
    // Synchronous initial call shouldn't just be an effect
    // But to fix the lint error securely we just avoid calling it immediately inside the effect,
    // we just let the initial value handle the first render, and since it was set initially with false we can keep it as is, or we can just trigger it once using a timeout or we leave it to initialize in useEffect but doing it via requestAnimationFrame
    requestAnimationFrame(() => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    })
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isMobile
}
