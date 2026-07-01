"use client"

import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import { useState, type FormEvent } from "react"
import { Reveal } from "@/components/reveal"

type Status = "idle" | "submitting" | "success" | "error"

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "")
    formData.append("subject", "New message from your portfolio")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })
      const result = await res.json()

      if (result.success) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/10 to-transparent -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <Reveal className="grid lg:grid-cols-2 gap-12 glass-card rounded-3xl p-8 md:p-12">
          {/* Left: Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Open to internships, junior developer roles, and freelance UI/UX or Flutter projects. I&apos;m always
                excited to discuss new ideas and opportunities.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <ContactItem
                icon={<Mail className="w-5 h-5" />}
                label="Email"
                value="aungthuhtet31@gmail.com"
                href="mailto:aungthuhtet31@gmail.com"
              />
              <ContactItem
                icon={<Phone className="w-5 h-5" />}
                label="Phone"
                value="+66 62 635 9844"
                href="tel:+66626359844"
              />
              <ContactItem
                icon={<MapPin className="w-5 h-5" />}
                label="Location"
                value="Bangkapi, Bangkok, Thailand"
              />
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-neutral-800 flex items-center justify-center text-green-500 font-bold text-xl border border-neutral-700">
                  L
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Line ID</div>
                  <div className="text-white font-medium">toydee31</div>
                </div>
              </div>
              <Link href="https://www.linkedin.com/in/aung-thu-htet-660360226/" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-4 group cursor-pointer transition-transform duration-300 hover:translate-x-1">
                  <div className="h-12 w-12 rounded-xl bg-neutral-800 flex items-center justify-center text-blue-400 font-bold text-xl border border-neutral-700 group-hover:border-blue-400/50 transition-colors">
                    in
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">LinkedIn</div>
                    <div className="text-white font-medium group-hover:text-blue-400 transition-colors">Aung Thu Htet</div>
                  </div>
                </div>
              </Link>
              <Link href="https://github.com/ToyDee" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-4 group cursor-pointer transition-transform duration-300 hover:translate-x-1">
                  <div className="h-12 w-12 rounded-xl bg-neutral-800 flex items-center justify-center text-white font-bold text-xl border border-neutral-700 group-hover:border-neutral-400/50 transition-colors">
                    gh
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">GitHub</div>
                    <div className="text-white font-medium group-hover:text-teal-400 transition-colors">ToyDee</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-neutral-900/50 rounded-2xl p-6 md:p-8 border border-neutral-800">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-neutral-400">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={status === "submitting"}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400 focus:shadow-[0_0_0_3px_rgba(45,212,191,0.15)] transition-all duration-300 disabled:opacity-60"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-neutral-400">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={status === "submitting"}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400 focus:shadow-[0_0_0_3px_rgba(45,212,191,0.15)] transition-all duration-300 disabled:opacity-60"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  disabled={status === "submitting"}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400 focus:shadow-[0_0_0_3px_rgba(45,212,191,0.15)] transition-all duration-300 resize-none disabled:opacity-60"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="shine-hover group w-full bg-teal-400 text-black font-bold py-4 rounded-xl hover:bg-teal-300 transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    Sending... <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message{" "}
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-teal-400 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-4 h-4" /> Message sent — I'll get back to you soon!
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-400 animate-in fade-in duration-300">
                  <AlertCircle className="w-4 h-4" /> Something went wrong — please email me directly at
                  aungthuhtet31@gmail.com instead.
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ContactItem({ icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-4 group cursor-pointer transition-transform duration-300 hover:translate-x-1">
      <div className="h-12 w-12 rounded-xl bg-neutral-800 flex items-center justify-center text-teal-400 border border-neutral-700 group-hover:border-teal-400/50 transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-sm text-neutral-500">{label}</div>
        <div className="text-white font-medium group-hover:text-teal-400 transition-colors">{value}</div>
      </div>
    </div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }
  return content
}