import Link from "next/link"
import { ArrowLeft, FileText, Mail } from "lucide-react"
import { Reveal } from "@/components/reveal"

export const metadata = {
  title: "Resume | Aung Thu Htet",
  description: "View my CV and professional background.",
}

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Reveal className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </Reveal>

        <Reveal delay={100} className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] -z-10" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-neutral-800 pb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-teal-400 text-xs font-mono font-medium">
                <FileText className="w-4 h-4" /> CV
              </div>
              <h1 className="text-4xl font-bold text-white">Aung Thu Htet</h1>
              <p className="text-xl text-neutral-400">Developer | UI/UX & Software</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <Reveal delay={150}>
                <section>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-teal-400" /> Professional Summary
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Full-stack developer with hands-on industry experience in front-end and back-end web development,
                    mobile application development, and IoT research. Proficient in JavaScript, TypeScript, Python,
                    Vue.js, React, Next.js, Node.js, and Flutter, with practical experience in REST API integration,
                    MySQL database design, JWT authentication, and agile development workflows. Published research
                    co-author with a strong foundation in responsive UI/UX design and user-centered development.
                    Currently pursuing a Bachelor of ICT at Rangsit University, and adaptable across front-end,
                    back-end, and full-stack roles in fast-paced, collaborative environments.
                  </p>
                </section>
              </Reveal>

              <Reveal delay={200}>
                <section>
                  <h3 className="text-lg font-bold text-white mb-4">Education</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-1">
                        <h4 className="font-semibold text-white">
                          Bachelor of Information and Communications Technology
                        </h4>
                        <span className="text-sm text-neutral-500">2023 - Present</span>
                      </div>
                      <div className="text-teal-400 text-sm mb-2">Rangsit University</div>
                      <p className="text-sm text-neutral-400">Focus on UI/UX, Software Development, Data Analytics</p>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <h4 className="font-semibold text-white">Bachelor of Arts, Russian Specialized</h4>
                        <span className="text-sm text-neutral-500">2016 - 2020</span>
                      </div>
                      <div className="text-teal-400 text-sm">University of Foreign Language</div>
                    </div>
                  </div>
                </section>
              </Reveal>

              <Reveal delay={250}>
                <section>
                  <h3 className="text-lg font-bold text-white mb-4">Experience</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-1">
                        <h4 className="font-semibold text-white">Research Intern – IoT & Intelligent Systems</h4>
                        <span className="text-sm text-neutral-500">Jun - Dec 2025</span>
                      </div>
                      <div className="text-teal-400 text-sm mb-3">Rangsit University</div>
                      <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
                        <li>Researched IoT-based agent models for workplace situational awareness under Prof. Billel Arbaoui</li>
                        <li>Built temporal-causal simulations in Python/NumPy, improving high-alert accuracy by up to 40%</li>
                        <li>Co-authored a peer-reviewed paper published in the Journal of Robotics and Control (JRC)</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <h4 className="font-semibold text-white">Junior Software Developer</h4>
                        <span className="text-sm text-neutral-500">Apr - Dec 2022</span>
                      </div>
                      <div className="text-teal-400 text-sm mb-3">P & Y Palace Co., Ltd. (Citiwide Logistics)</div>
                      <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
                        <li>Built an internal Shipment Tracking & Management System with Vue.js, Node.js, and MySQL</li>
                        <li>Implemented role-based access control with JWT authentication and session management</li>
                        <li>Designed real-time shipment dashboards and logistics reporting views</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <h4 className="font-semibold text-white">Software Developer Intern</h4>
                        <span className="text-sm text-neutral-500">Oct 2021 - Apr 2022</span>
                      </div>
                      <div className="text-teal-400 text-sm mb-3">P & Y Palace Co., Ltd. (Citiwide Logistics)</div>
                      <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
                        <li>Maintained and debugged the company's internal web platform (Vue.js, Node.js)</li>
                        <li>Improved cross-browser compatibility, mobile responsiveness, and form validation logic</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </Reveal>
            </div>

            <div className="space-y-8">
              <Reveal delay={150}>
                <section>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">
                    Contact
                  </h3>
                  <ul className="space-y-3 text-sm text-neutral-400">
                    <li className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-teal-400" /> aungthuhtet31@gmail.com
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 text-teal-400 font-bold flex items-center justify-center text-xs border border-teal-400 rounded-full">
                        L
                      </span>{" "}
                      Bangkapi, Bangkok, Thailand
                    </li>
                  </ul>
                </section>
              </Reveal>

              <Reveal delay={200}>
                <section>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "JavaScript",
                      "TypeScript",
                      "Vue.js",
                      "React",
                      "Next.js",
                      "Node.js",
                      "Flutter",
                      "Dart",
                      "Python",
                      "MySQL",
                      "MongoDB",
                      "Git",
                      "Figma",
                    ].map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded border border-neutral-700 transition-colors duration-300 hover:bg-teal-500/10 hover:text-teal-400 hover:border-teal-500/30"
                        >
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </section>
              </Reveal>

              <Reveal delay={250}>
                <section>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">
                    Languages
                  </h3>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex justify-between">
                      <span>Burmese</span> <span className="text-white">Native</span>
                    </li>
                    <li className="flex justify-between">
                      <span>English</span> <span className="text-white">Proficient</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Thai</span> <span className="text-white">Basic</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Russian</span> <span className="text-white">Basic</span>
                    </li>
                  </ul>
                </section>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}