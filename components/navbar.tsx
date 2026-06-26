"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, FileText } from "lucide-react"

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Education", href: "/#education" },
  { name: "Contact", href: "/#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-teal-400 transition-colors">
          AUNG THU HTET
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={isHome ? link.href : `/${link.href}`}
              className="text-sm font-medium text-neutral-400 hover:text-white relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/resume"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 text-neutral-900 text-sm font-semibold hover:bg-teal-400 hover:text-black transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            CV <FileText className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-neutral-300 hover:text-white transition-transform duration-300 active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`inline-flex transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}>
            {isOpen ? <X /> : <Menu />}
          </span>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-neutral-950 border-b border-neutral-800 p-4 shadow-2xl animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={isHome ? link.href : `/${link.href}`}
                className="text-neutral-300 hover:text-teal-400 hover:translate-x-1 font-medium py-2 transition-all duration-200 animate-in fade-in slide-in-from-left-3"
                style={{ animationDelay: `${i * 60}ms`, animationDuration: "300ms" }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/resume"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-teal-400 text-black font-bold mt-2 transition-transform duration-200 hover:scale-[1.02] active:scale-95 animate-in fade-in slide-in-from-left-3"
              style={{ animationDelay: `${navLinks.length * 60}ms`, animationDuration: "300ms" }}
              onClick={() => setIsOpen(false)}
            >
              CV <FileText className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
