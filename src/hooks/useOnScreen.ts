import { useState, useEffect, RefObject } from 'react'

export function useOnScreen(ref: RefObject<Element>, rootMargin = '0px'): boolean {
   const [isIntersecting, setIntersecting] = useState(false)

   useEffect(() => {
      if (!ref.current) return

      const observer = new IntersectionObserver(
         ([entry]) => {
            setIntersecting(entry.isIntersecting)
         },
         { rootMargin }
      )

      observer.observe(ref.current)

      return () => {
         observer.disconnect()
      }
   }, [ref, rootMargin])

   return isIntersecting
}
