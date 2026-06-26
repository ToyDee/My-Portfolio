"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type Direction = "up" | "down" | "left" | "right" | "none"

interface RevealProps {
  children: ReactNode
  className?: string
  /** Delay in milliseconds before the entrance animation starts, once visible. */
  delay?: number
  /** Direction the content travels in from. */
  direction?: Direction
  /** Re-trigger the animation every time it enters the viewport. */
  once?: boolean
}

const offsetClass: Record<Direction, string> = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
  none: "",
}

/**
 * Wraps children and fades/slides them into place the first time they
 * scroll into the viewport. Falls back to fully visible immediately if
 * IntersectionObserver isn't available.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) observer.unobserve(el)
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${offsetClass[direction]}`
      } ${className}`}
    >
      {children}
    </div>
  )
}
