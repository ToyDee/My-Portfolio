"use client"

import { ArrowRight, Download, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Reveal } from "@/components/reveal"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-10 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] -z-10 animate-float-slow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10 animate-float-slower" />

      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
          <Reveal direction="down" className="flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-teal-400 text-xs font-mono font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Available for work
            </div>
          </Reveal>

          <Reveal delay={100} className="space-y-2">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              Aung Thu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-teal-400 animate-gradient-pan">
                Htet
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 font-medium">Junior Full-Stack Developer | UI/UX Designer</p>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-neutral-400 max-w-xl mx-auto lg:mx-0 leading-relaxed text-lg">
              Full-stack developer and ICT student at Rangsit University, graduating December 2026. Published
              research co-author with hands-on industry experience in front-end, back-end, and mobile development.
            </p>
          </Reveal>

          <Reveal delay={300} className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <Link
              href="https://github.com/ToyDee"
              target="_blank"
              rel="noopener noreferrer"
              className="shine-hover group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-teal-400 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              View Projects <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/Aung_Thu_Htet_CV.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-white font-semibold hover:border-teal-400 hover:text-teal-400 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Download Resume <Download className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        {/* Right Content - Lanyard Badge */}
        <Reveal direction="left" delay={150} className="flex justify-center">
          <LanyardBadge />
        </Reveal>
      </div>
    </section>
  )
}

function LanyardBadge() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [qrSrc, setQrSrc] = useState<string | null>(null)

  useEffect(() => {
    // Points the QR at whatever domain the site is actually running on —
    // so it works automatically once deployed, with no hardcoded URL to update.
    const portfolioUrl = window.location.origin
    setQrSrc(
      `https://api.qrserver.com/v1/create-qr-code/?size=160x160&margin=0&data=${encodeURIComponent(portfolioUrl)}`,
    )
  }, [])

  return (
    <div
      className="relative w-72 h-[420px] group cursor-pointer animate-float-slow"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* String */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-48 h-32 border-x-2 border-neutral-700/50 rounded-b-full z-0" />
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-neutral-800 rounded-full z-10 flex items-center justify-center border border-neutral-700">
        <div className="w-16 h-1 bg-neutral-600 rounded-full" />
      </div>

      {/* Card Container */}
      <div
        className={`relative w-full h-full duration-500 transition-transform ${isFlipped ? "rotate-y-180" : ""}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col items-center justify-between shadow-2xl shadow-black/50 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-teal-500/20 to-blue-500/20 -z-10" />
          <div className="absolute top-0 right-0 p-4">
            <div className="w-3 h-3 rounded-full bg-neutral-700 border border-neutral-600" />
          </div>

          <div className="mt-8 relative">
            <div className="w-32 h-32 rounded-full border-4 border-neutral-900 overflow-hidden bg-neutral-800 relative">
              <Image src="/aung-thu-htet-avatar.jpg" alt="Profile" fill className="object-cover" />
            </div>
            <div className="absolute bottom-1 right-1 w-6 h-6 bg-teal-400 rounded-full border-4 border-neutral-900 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </div>

          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl font-bold text-white">Aung Thu Htet</h2>
            <div className="px-3 py-1 bg-neutral-800 rounded-full inline-block">
              <span className="text-sm font-mono text-teal-400">Developer</span>
            </div>
            <p className="text-xs text-neutral-400 max-w-[200px] mx-auto pt-2">ICT Student @ Rangsit University</p>
          </div>

          <div className="w-full flex justify-between text-xs text-neutral-500 font-mono border-t border-neutral-800 pt-4">
            <span>ID: RSU-2023</span>
            <span>EXP: 2027</span>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden bg-neutral-800 border border-neutral-700 rounded-2xl p-6 flex flex-col rotate-y-180 shadow-2xl overflow-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />

          <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-lg font-bold text-white mb-6 border-b border-neutral-600 pb-2">Contact Info</h3>

            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <div className="w-8 h-8 rounded-lg bg-neutral-700 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-teal-400" />
                </div>
                <div className="overflow-hidden">
                  <div className="font-semibold text-white">Email</div>
                  <div className="truncate text-xs">aungthuhtet31@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <div className="w-8 h-8 rounded-lg bg-neutral-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Location</div>
                  <div className="text-xs">Bangkok, Thailand</div>
                </div>
              </div>

              <div className="mt-6">
                <div className="font-semibold text-white mb-2 text-sm">Core Tech</div>
                <div className="flex flex-wrap gap-1.5">
                  {["Flutter", "React", "Next.js", "Python", "TypeScript"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-neutral-900 rounded text-[10px] text-teal-400 border border-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto text-center pt-4">
              <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest mb-2">Scan for Portfolio</p>
              <div className="mx-auto h-20 w-20 bg-white rounded-md p-1 flex items-center justify-center overflow-hidden">
                {qrSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={qrSrc} alt="QR code linking to this portfolio" className="h-full w-full object-contain" />
                ) : (
                  <div className="h-full w-full bg-neutral-200 rounded-sm animate-pulse" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}