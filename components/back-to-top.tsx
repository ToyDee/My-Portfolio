"use client"

import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

/** Floating button that appears after scrolling and smooth-scrolls back to top. */
export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/80 text-teal-400 backdrop-blur-md shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/50 hover:text-white ${
        show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
