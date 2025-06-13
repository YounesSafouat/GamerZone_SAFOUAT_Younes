"use client"

import { useEffect, useState, useRef, type RefObject } from "react"

type AnimationOptions = {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useScrollAnimation<T extends HTMLElement>(options: AnimationOptions = {}): [RefObject<T | null>, boolean] {
  const { threshold = 0.1, rootMargin = "0px", once = true } = options
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, once])

  return [ref, isVisible]
}
