'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Building2, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/components/ui/LanguageContext'
import SectionHeading from '@/components/ui/SectionHeading'
import { experiences } from '@/lib/data'
import type { Lang } from '@/lib/translations'

export default function Experience() {
  const { t, lang } = useLanguage()
  const l = lang as Lang

  return (
    <section id="experience" className="section section-base" aria-labelledby="experience-heading">
      <div className="container-xl">
        <SectionHeading
          title={t.experience.title}
          subtitle={t.experience.subtitle}
          accent="03. Experience"
        />

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 sm:left-6 top-0 bottom-0 w-px timeline-line" aria-hidden="true" />

          <div className="flex flex-col gap-12 pl-8 sm:pl-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-8 sm:-left-[52px] top-6 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#050B14] z-10"
                  style={{ boxShadow: '0 0 10px rgba(59,130,246,0.7), 0 0 20px rgba(59,130,246,0.3)' }}
                  aria-hidden="true"
                />

                {/* Card */}
                <div className="card-glow">
                <div className="card-inner group relative p-6 sm:p-8">
                  {/* Top accent on hover */}
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all duration-300 rounded-t-2xl" />

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-heading font-bold text-xl text-slate-100">
                          {exp.role[l]}
                        </h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold font-mono bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                            {t.experience.present}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-blue-400 font-semibold text-base">
                        <Building2 className="w-4 h-4" aria-hidden="true" />
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 sm:text-right shrink-0">
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs sm:justify-end">
                        <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{exp.period[l]}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs sm:justify-end">
                        <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{exp.location[l]}</span>
                      </div>
                      <span className="text-xs text-slate-600 border border-slate-800 px-2 py-0.5 rounded-full text-center">
                        {exp.type[l]}
                      </span>
                    </div>
                  </div>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5" aria-label="Technologies used">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-500/8 border border-blue-500/20 text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-2.5" role="list">
                    {exp.bullets.map((bullet, bi) => (
                      <motion.li
                        key={bi}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + bi * 0.05 }}
                        className="flex items-start gap-2 text-sm text-slate-400 leading-relaxed group/item"
                      >
                        <ChevronRight
                          className="w-3.5 h-3.5 text-blue-500/60 mt-[3px] shrink-0 group-hover/item:text-blue-400 transition-colors"
                          aria-hidden="true"
                        />
                        <span className="group-hover/item:text-slate-300 transition-colors">{bullet[l]}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
