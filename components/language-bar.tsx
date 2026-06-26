"use client"

import { useEffect, useRef, useState } from "react"

interface LanguageBarProps {
  lang: string
  level: string
  percent: number
  color: string
}

/** Proficiency bar that animates from 0 to its target width once it scrolls into view. */
export function LanguageBar({ lang, level, percent, color }: LanguageBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [filled, setFilled] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === "undefined") {
      setFilled(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="space-y-1" ref={ref}>
      <div className="flex justify-between text-xs font-medium">
        <span className="text-white">{lang}</span>
        <span className="text-neutral-500">{level}</span>
      </div>
      <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-[1100ms] ease-out`}
          style={{ width: filled ? `${percent}%` : "0%" }}
        />
      </div>
    </div>
  )
}
