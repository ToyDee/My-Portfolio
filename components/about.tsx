import { MapPin, Briefcase, Heart, GraduationCap } from "lucide-react"
import { Reveal } from "@/components/reveal"

const facts = [
  { icon: MapPin, label: "Location", value: "Bangkapi, Bangkok, Thailand" },
  { icon: Briefcase, label: "Role", value: "Junior Full-Stack Developer / UI/UX Designer" },
  { icon: Heart, label: "Interests", value: "UI/UX | Flutter | Full-Stack | IoT & AI" },
  { icon: GraduationCap, label: "Education", value: "BSc.ICT at Rangsit University" },
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white flex flex-wrap items-center gap-3">
            About <span className="flex-1 h-px bg-neutral-800 min-w-[120px] hidden sm:block"></span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Bio */}
          <Reveal direction="right" className="md:col-span-2 glass-card p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl -z-10 group-hover:bg-teal-500/10 transition-colors duration-500" />

            <h3 className="text-xl font-bold text-white mb-4">Hello, I&apos;m Aung Thu Htet.</h3>
            <div className="space-y-4 text-neutral-400 leading-relaxed">
              <p>
                I'm a full-stack developer with hands-on industry experience across{" "}
                <span className="text-teal-400 font-medium">front-end, back-end, and mobile development</span>,
                currently pursuing a Bachelor of ICT at Rangsit University. I've shipped production features with
                Vue.js, Node.js, and MySQL — including JWT-based access control and real-time dashboards — and I
                build cross-platform apps with Flutter on the side.
              </p>
              <p>
                Published research co-author with hands-on experience in IoT intelligent systems, REST API
                integration, and user-centered design. I value clean interfaces, thoughtful interaction design,
                and collaborative problem-solving — whether shipping a production feature or designing a complex
                system, I aim for efficiency and user delight.
              </p>
            </div>
          </Reveal>

          {/* Quick Facts */}
          <Reveal direction="left" delay={100} className="glass-card p-8 rounded-3xl flex flex-col justify-center gap-6">
            {facts.map((fact, i) => {
              const Icon = fact.icon
              return (
                <div
                  key={fact.label}
                  className="group flex items-start gap-4 transition-transform duration-300 hover:translate-x-1"
                >
                  <div className="p-3 rounded-xl bg-neutral-800 text-teal-400 transition-colors duration-300 group-hover:bg-teal-400 group-hover:text-black">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{fact.label}</h4>
                    <p className="text-sm text-neutral-400">{fact.value}</p>
                  </div>
                </div>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}