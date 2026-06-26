"use client"

import type React from "react"

/**
 * Next.js re-mounts `template.tsx` on every navigation (unlike layout.tsx),
 * so it's a lightweight way to get a consistent page-enter transition
 * across routes without a client-side animation library.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-page-in">{children}</div>
}
