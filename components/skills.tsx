import { Code2, Database, Layout, Smartphone, Terminal, Users, Globe, Brain } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { LanguageBar } from "@/components/language-bar"

export default function Skills() {
  const softSkills = ["Problem-solving & Critical Thinking", "Teamwork & Collaboration", "Time Management", "Communication", "User Research & Usability Testing", "Wireframing & Prototyping"]

  const techStack = {
    frontend: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind"],
    mobile: ["Flutter", "Dart"],
    backend: ["Java", "Python", "Laravel", "Node.js"],
    database: ["MySQL", "MariaDB", "MongoDB", "PhpMyAdmin"],
    tools: ["Git/GitHub", "Figma", "VS Code", "Android Studio", "Eclipse"],
  }

  return (
    <section id="skills" className="py-20 bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-2">
            Skills <span className="w-full h-px bg-neutral-800 ml-4"></span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {/* Main Tech Stack - Large Card */}
          <Reveal className="md:col-span-2 lg:col-span-2 row-span-2 glass-card rounded-3xl p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Languages & Frameworks</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-neutral-400 font-medium">
                  <Layout className="w-4 h-4" /> Frontend
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack.frontend.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-300 border border-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-neutral-400 font-medium mt-4">
                  <Smartphone className="w-4 h-4" /> Mobile
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack.mobile.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-neutral-400 font-medium">
                  <Terminal className="w-4 h-4" /> Backend
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack.backend.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-300 border border-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-neutral-400 font-medium mt-4">
                  <Database className="w-4 h-4" /> Database
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack.database.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-300 border border-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Soft Skills */}
          <Reveal delay={100} className="md:col-span-1 lg:col-span-1 glass-card rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Soft Skills</h3>
            </div>
            <ul className="space-y-3">
              {softSkills.map((skill, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Languages */}
          <Reveal delay={200} className="md:col-span-1 lg:col-span-1 glass-card rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Languages</h3>
            </div>
            <div className="space-y-4">
              <LanguageBar lang="Burmese" level="Native" percent={100} color="bg-teal-400" />
              <LanguageBar lang="English" level="Proficient" percent={85} color="bg-blue-400" />
              <LanguageBar lang="Thai" level="Basic" percent={40} color="bg-yellow-400" />
              <LanguageBar lang="Russian" level="Basic" percent={30} color="bg-red-400" />
            </div>
          </Reveal>

          {/* Tools */}
          <Reveal delay={300} className="md:col-span-2 lg:col-span-2 glass-card rounded-3xl p-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-neutral-800 rounded-lg text-white">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Tools & Collaboration</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.tools.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 bg-neutral-800 rounded-lg text-sm text-neutral-300 border border-neutral-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

