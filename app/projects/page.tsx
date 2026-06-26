import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Sparkles, Youtube } from "lucide-react"
import { Reveal } from "@/components/reveal"

export const metadata = {
  title: "Projects | Aung Thu Htet",
  description: "Showcase of my development work across mobile apps, full-stack web, design, research, and game dev.",
}

const allProjects = [
  {
    title: "Golf Tee Time Booking App",
    category: "Mobile App",
    desc: "A Flutter mobile app for booking golf tee times, built for the CIMSO Hackathon 2025.",
    details: [
      "Full auth flow: register, login, OTP verification, password reset",
      "Location-based course search with live map integration",
      "Tee time booking with confirmation & booking history",
      "Profile management with photo upload and phone input formatting",
    ],
    tags: ["Flutter", "Dart", "Maps", "Hackathon"],
    link: "https://github.com/ToyDee/CimsoHackathonGolfBooking",
  },
  {
    title: "RSU Executive Portfolio App",
    category: "Cross-Platform App",
    desc: "A Flutter app for Rangsit University combining an executive directory with live weather data.",
    details: [
      "Local login & sign-up authentication",
      "Searchable RSU executive directory",
      "Live Bangkok weather & AQI breakdown via OpenWeatherMap",
      "Runs on Android, iOS, and Web from a single codebase",
    ],
    tags: ["Flutter", "Dart", "OpenWeatherMap API", "Cross-Platform"],
    link: "https://github.com/ToyDee/RSU-Executive-Portfolio-Weather-App",
  },
  {
    title: "Attendance Tracker App",
    category: "Full-Stack App",
    desc: "A full-stack attendance system with GPS location verification and selfie capture on clock in/out.",
    details: [
      "JWT-based register & login",
      "Clock in/out restricted to an authorized GPS radius",
      "Selfie capture saved with each attendance record",
      "Morning / lunch / afternoon / evening sessions with history view",
    ],
    tags: ["Next.js", "TypeScript", "Express", "MongoDB"],
    link: "https://github.com/ToyDee/attendance-app",
  },
  {
    title: "Hotel Booking Interface",
    category: "UI/UX Design",
    desc: "A UI/UX design system for a hotel booking platform, designed end-to-end in Figma.",
    details: [
      "Full hotel booking flow, from search to confirmation",
      "Clean, modern visual hierarchy and component system",
      "Figma prototype showcasing the UI/UX design process",
    ],
    tags: ["Figma", "UI/UX", "Design"],
    link: "https://github.com/ToyDee/hotel-interface",
  },
  {
    title: "IoT-Based Situational Awareness Model",
    category: "Research",
    desc: "Undergraduate research extending Arbaoui et al. (2022) with real-time IoT sensor data for workplace situational awareness.",
    details: [
      "Agent-based model with Relaxed, Focused, High Alertness & Tuned-Out states",
      "IoT-enhanced model reaches High Alertness ~2x faster than baseline",
      "Simulated in Python (NumPy) over 800 time steps under fire/smoke/gas hazard input",
      "Co-authored with Thi Ha La Min and Htet Myat Tun — Rangsit University",
    ],
    tags: ["Python", "NumPy", "Agent-Based Modeling", "Research"],
    link: "https://github.com/ToyDee/Situational-Awareness-IoT-Model-Rangsit",
  },
  {
    title: "This Portfolio",
    category: "Web App",
    desc: "The personal site you're looking at right now — built from the ground up with a fully animated, responsive dark UI.",
    details: [
      "Built with Next.js 16, React 19, and TypeScript",
      "Styled with Tailwind CSS v4 and shadcn/ui components",
      "Scroll-triggered reveal animations and a dynamic QR code linking to itself",
      "Fully responsive across Home, Projects, and Resume pages",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    link: "https://github.com/ToyDee/My-Portfolio",
  },
  {
    title: "E2-Escape",
    category: "Game Development",
    desc: "A puzzle game prototype built in Unity, with escape-room style mechanics.",
    details: ["Puzzle-based gameplay with escape-room mechanics", "Built in Unity"],
    tags: ["Unity", "C#", "Game Design"],
    link: "https://github.com/ToyDee/E2escape",
    youtube: "https://youtu.be/pUcQqyTbC00?si=m0GAZk9BbatLxgRj",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">All Projects</h1>
          <p className="text-neutral-400 max-w-2xl text-lg">
            A deeper dive into my development work, ranging from mobile applications to full-stack web, UI/UX design,
            and research.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, i) => (
            <Reveal key={i} delay={(i % 3) * 100} className="glass-card rounded-3xl overflow-hidden flex flex-col h-full group">
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono text-teal-400 uppercase tracking-wider bg-teal-950/30 border border-teal-900 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.youtube && (
                      <Link
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-neutral-800 text-white hover:bg-red-500 transition-colors"
                        aria-label="Watch demo on YouTube"
                      >
                        <Youtube className="w-4 h-4" />
                      </Link>
                    )}
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-neutral-800 text-white hover:bg-teal-400 hover:text-black transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">{project.desc}</p>

                <div className="space-y-2 mb-8 flex-1">
                  {project.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-neutral-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 mt-1.5 shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-neutral-800">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-neutral-800 rounded text-[10px] text-neutral-400 border border-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          {/* Reserved slot for the next project */}
          <Reveal delay={(allProjects.length % 3) * 100} className="rounded-3xl border border-dashed border-neutral-800 flex flex-col items-center justify-center text-center gap-3 p-8 min-h-[280px] text-neutral-600 transition-colors duration-300 hover:border-neutral-700">
            <Sparkles className="w-6 h-6" />
            <p className="text-sm font-medium text-neutral-500">One more project is on the way</p>
            <p className="text-xs text-neutral-600 max-w-[220px]">
              Check back soon, or follow{" "}
              <Link
                href="https://github.com/ToyDee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:text-teal-400 transition-colors"
              >
                @ToyDee
              </Link>{" "}
              on GitHub for updates.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  )
}