import { ArrowUpRight, Github, Smartphone } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/reveal"

const projects = [
  {
    title: "Golf Tee Time Booking App",
    desc: "Flutter mobile app for booking golf tee times, built for the CIMSO Hackathon 2025 — full auth flow with OTP verification, map-based course search, and booking history.",
    tags: ["Flutter", "Dart", "Maps", "Mobile"],
    link: "https://github.com/ToyDee/CimsoHackathonGolfBooking",
  },
  {
    title: "RSU Executive Portfolio App",
    desc: "Cross-platform Flutter app for Rangsit University with a searchable executive directory, local authentication, and live Bangkok weather & AQI via OpenWeatherMap.",
    tags: ["Flutter", "Dart", "API", "Mobile"],
    link: "https://github.com/ToyDee/RSU-Executive-Portfolio-Weather-App",
  },
  {
    title: "Attendance Tracker App",
    desc: "Full-stack attendance system with GPS-verified clock in/out and selfie capture per record, plus session-based history tracking.",
    tags: ["Next.js", "TypeScript", "Express", "MongoDB"],
    link: "https://github.com/ToyDee/attendance-app",
  },
  {
    title: "Hotel Booking Interface",
    desc: "UI/UX design system for a hotel booking platform — clean, modern booking-flow pages designed end-to-end in Figma.",
    tags: ["Figma", "UI/UX", "Design"],
    link: "https://github.com/ToyDee/hotel-interface",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-2">
            Selected Projects <span className="w-12 h-px bg-neutral-800 ml-4 hidden md:block"></span>
          </h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-teal-400 hover:text-white flex items-center gap-1 transition-colors self-start sm:self-auto"
          >
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={i} delay={i * 100} className="glass-card p-6 rounded-3xl group flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-neutral-800 rounded-md text-xs font-medium text-neutral-300 border border-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-neutral-800 text-white hover:bg-teal-400 hover:text-black transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed mb-6 flex-1">{project.desc}</p>

              <div className="pt-4 border-t border-neutral-800 flex items-center gap-4 text-sm text-neutral-500">
                {project.tags.includes("Mobile") ? <Smartphone className="w-4 h-4" /> : <Github className="w-4 h-4" />}
                <span>View Details</span>
              </div>
            </Reveal>
          ))}

          {/* This Portfolio */}
          <Reveal delay={400} className="md:col-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-900/20 to-blue-900/20 border border-neutral-800 p-8 flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-violet-500/30 transition-all">
            <div className="space-y-2 z-10">
              <div className="text-xs font-mono text-violet-400 uppercase tracking-wider">You Are Here</div>
              <h3 className="text-2xl font-bold text-white">This Portfolio</h3>
              <p className="text-neutral-400 max-w-xl">
                The site you're looking at right now — a fully animated, responsive personal site built with
                Next.js 16, React 19, and Tailwind CSS v4, with scroll-triggered reveal animations throughout.
              </p>
            </div>
            <div className="z-10">
              <Link
                href="https://github.com/ToyDee/My-Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-violet-400 transition-colors"
              >
                View Source
              </Link>
            </div>

            {/* Abstract Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </Reveal>

          {/* Research Highlight */}
          <Reveal delay={500} className="md:col-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-900/20 to-blue-900/20 border border-neutral-800 p-8 flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-teal-500/30 transition-all">
            <div className="space-y-2 z-10">
              <div className="text-xs font-mono text-teal-400 uppercase tracking-wider">Research Highlight</div>
              <h3 className="text-2xl font-bold text-white">IoT-Based Situational Awareness Model</h3>
              <p className="text-neutral-400 max-w-xl">
                Agent-based model extending Arbaoui et al. (2022) with real-time IoT sensor data (fire, smoke, gas) to
                drive transitions between Relaxed, Focused, High Alertness, and Tuned-Out states — simulated in Python
                over 800 time steps. Co-authored with Thi Ha La Min and Htet Myat Tun.
              </p>
            </div>
            <div className="z-10">
              <Link
                href="https://github.com/ToyDee/Situational-Awareness-IoT-Model-Rangsit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-teal-400 transition-colors"
              >
                Read Paper
              </Link>
            </div>

            {/* Abstract Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}