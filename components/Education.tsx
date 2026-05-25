'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, CheckCircle2, BookOpen } from 'lucide-react'
import { useLanguage } from '@/components/ui/LanguageContext'
import SectionHeading from '@/components/ui/SectionHeading'
import { educationItems } from '@/lib/data'
import type { Lang } from '@/lib/translations'

export default function Education() {
  const { t, lang } = useLanguage()
  const l = lang as Lang

  return (
    <section id="education" className="section section-base" aria-labelledby="education-heading">
      <div className="container-xl">
        <SectionHeading
          title={t.education.title}
          subtitle={t.education.subtitle}
          accent="07. Education"
        />

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {educationItems.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group relative rounded-2xl bg-slate-900/60 border border-slate-800/60 p-7 hover:border-blue-500/30 hover:bg-slate-900/80 transition-all duration-300"
            >
              {/* Top accent */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all duration-300 rounded-t-2xl" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
                <GraduationCap className="w-6 h-6 text-blue-400" aria-hidden="true" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-bold text-lg text-slate-100 mb-2">
                {edu.degree[l]}
              </h3>
              <p className="text-blue-400 font-semibold text-sm mb-4">{edu.institution}</p>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{edu.period}</span>
                </div>

                <div>
                  {edu.status === 'completed' ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                      {t.education.completed}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-500/10 border border-blue-500/25 text-blue-400">
                      <BookOpen className="w-3 h-3" aria-hidden="true" />
                      {t.education.inProgress}
                    </span>
                  )}
                </div>
              </div>

              {edu.status === 'in-progress' && edu.expectedYear && (
                <p className="mt-3 text-xs text-slate-600">
                  {t.education.expected}: {edu.expectedYear}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
