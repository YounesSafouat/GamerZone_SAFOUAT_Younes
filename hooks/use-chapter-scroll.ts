"use client"

import { useEffect, useState, useRef, type RefObject } from "react"

export function useChapterScroll<T extends HTMLElement>(): [RefObject<T>, boolean, number] {
  const ref = useRef<T>(null!)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)

        // Calculate scroll progress within the section
        if (entry.isIntersecting) {
          const rect = entry.boundingClientRect
          const windowHeight = window.innerHeight
          const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight))
          setScrollProgress(progress)
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: "-10% 0px -10% 0px",
      },
    )

    // Use a function to always get the latest ref.current
    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
      observer.disconnect()
    }
  }, [ref])

  return [ref, isVisible, scrollProgress]
}
