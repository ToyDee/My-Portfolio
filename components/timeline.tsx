import type React from "react"
import { Briefcase, GraduationCap } from "lucide-react"
import { Reveal } from "@/components/reveal"

type TimelineEntry = {
  title: string
  subtitle: string
  period: string
  details?: string
  points?: string[]
  accent: "teal" | "blue" | "neutral"
}

const experience: TimelineEntry[] = [
  {
    title: "Research Intern – IoT & Intelligent Systems",
    subtitle: "Rangsit University (under Prof. Billel Arbaoui)",
    period: "Jun – Dec 2025",
    points: [
      "Conducted research on IoT-based agent models for workplace situational awareness",
      "Designed a temporal-causal, agent-based model integrating real-time IoT sensors (fire, gas, smoke)",
      "Implemented simulations using Python and NumPy to analyze cognitive state transitions",
      "Achieved up to 40% improvement in high-alert state accuracy over the baseline model",
      "Co-authored a peer-reviewed paper published in the Journal of Robotics and Control (JRC)",
    ],
    accent: "teal",
  },
  {
    title: "Junior Software Developer",
    subtitle: "P & Y Palace Co., Ltd. (Citiwide Logistics)",
    period: "Apr – Dec 2022",
    points: [
      "Developed an internal Shipment Tracking and Management System using Vue.js, Node.js, and MySQL",
      "Implemented role-based access control (admin, staff, driver) with JWT authentication and session management",
      "Designed and built real-time shipment dashboards and logistics reporting views for the operations team",
      "Optimized MySQL queries and resolved production bugs to improve system stability and performance",
    ],
    accent: "neutral",
  },
  {
    title: "Software Developer Intern",
    subtitle: "P & Y Palace Co., Ltd. (Citiwide Logistics)",
    period: "Oct 2021 – Apr 2022",
    points: [
      "Maintained and debugged the company's internal web platform built with Vue.js and Node.js",
      "Resolved UI inconsistencies and improved cross-browser compatibility and mobile responsiveness",
      "Fixed backend API bugs and improved form validation logic across client-facing pages",
    ],
    accent: "neutral",
  },
]

const education: TimelineEntry[] = [
  {
    title: "BSc. Information and Communications Technology",
    subtitle: "Rangsit University, Bangkok, Thailand",
    period: "2023 – Present",
    details: "Focus: UI/UX Design, Software Development, Data Analytics, IoT Systems",
    accent: "blue",
  },
  {
    title: "Bachelor of Arts, Russian Language (Specialized)",
    subtitle: "University of Foreign Language",
    period: "2016 – 2020",
    accent: "neutral",
  },
]

const accentDot: Record<TimelineEntry["accent"], string> = {
  teal: "bg-teal-400 border-teal-300 shadow-teal-500/30",
  blue: "bg-blue-400 border-blue-300 shadow-blue-500/30",
  neutral: "bg-neutral-400 border-neutral-300 shadow-neutral-400/20",
}

const accentChip: Record<TimelineEntry["accent"], string> = {
  teal: "bg-teal-500/15 text-teal-200 border-teal-400/40",
  blue: "bg-blue-500/15 text-blue-200 border-blue-400/40",
  neutral: "bg-neutral-700/60 text-neutral-300 border-neutral-600/60",
}

export default function Timeline() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <TimelineColumn icon={<Briefcase className="text-teal-400" />} title="Experience" entries={experience} />
          <TimelineColumn
            id="education"
            icon={<GraduationCap className="text-blue-400" />}
            title="Education"
            entries={education}
          />
        </div>
      </div>
    </section>
  )
}

function TimelineColumn({
  id,
  title,
  icon,
  entries,
}: {
  id?: string
  title: string
  icon: React.ReactNode
  entries: TimelineEntry[]
}) {
  return (
    <div className="h-full" id={id}>
      <Reveal className="flex items-center gap-3 mb-6">
        {icon}
        <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      </Reveal>

      <div className="relative pl-12">
        <div className="absolute left-4 top-3 bottom-3 w-px bg-gradient-to-b from-neutral-800 via-neutral-800/70 to-neutral-900" />
        <div className="space-y-8">
          {entries.map((entry, idx) => (
            <Reveal key={idx} delay={idx * 120}>
              <TimelineCard entry={entry} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

function TimelineCard({ entry }: { entry: TimelineEntry }) {
  const dotClass = accentDot[entry.accent]
  const chipClass = accentChip[entry.accent]

  return (
    <div className="relative pl-12">
      <span
        className={`absolute left-4 -translate-x-1/2 top-6 h-3.5 w-3.5 rounded-full border shadow-[0_0_0_6px_rgba(15,15,15,0.7)] ${dotClass} ${
          entry.accent === "teal" ? "animate-glow-pulse" : ""
        }`}
      />
      <div className="rounded-2xl p-5 bg-neutral-900/70 border border-neutral-800/80 shadow-lg shadow-black/30 transition-all duration-300 hover:border-neutral-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1">
            <p className={`text-[11px] font-semibold uppercase tracking-wide inline-flex px-2 py-1 rounded-full border ${chipClass}`}>
              {entry.period}
            </p>
            <h3 className="text-lg font-semibold text-white">{entry.title}</h3>
            <p className="text-sm text-neutral-400">{entry.subtitle}</p>
          </div>
        </div>
        {entry.details && <p className="text-sm text-neutral-500 mt-3">{entry.details}</p>}
        {entry.points && (
          <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1 mt-3">
            {entry.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}