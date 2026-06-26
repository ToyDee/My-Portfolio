import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { Reveal } from "@/components/reveal"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-12">
      <Reveal className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-neutral-400 text-sm text-center md:text-left">
          © {currentYear} Aung Thu Htet. All rights reserved.
        </div>

        <div className="flex gap-6">
          <Link
            href="https://github.com/ToyDee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-teal-400 transition-all duration-300 hover:scale-110 hover:-rotate-6"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/aung-thu-htet-660360226/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-teal-400 transition-all duration-300 hover:scale-110 hover:rotate-6"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </Reveal>
    </footer>
  )
}
