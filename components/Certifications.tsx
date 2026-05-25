'use client'

import { motion } from 'framer-motion'
import { BookOpen, Clock, CheckCircle2, Rocket } from 'lucide-react'
import { useLanguage } from '@/components/ui/LanguageContext'
import SectionHeading from '@/components/ui/SectionHeading'
import { certifications } from '@/lib/data'
import type { Lang } from '@/lib/translations'

const statusConfig = {
  'in-progress': {
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/25',
    Icon: Clock,
    barColor: 'bg-blue-500',
    barWidth: '60%',
  },
  'planned': {
    color: 'text-slate-400 bg-slate-800 border-slate-700',
    Icon: Rocket,
    barColor: 'bg-slate-700',
    barWidth: '10%',
  },
  'completed': {
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
    Icon: CheckCircle2,
    barColor: 'bg-emerald-500',
    barWidth: '100%',
  },
}

export default function Certifications() {
  const { t, lang } = useLanguage()
  const l = lang as Lang

  const getStatusLabel = (status: 'in-progress' | 'planned' | 'completed') => {
    if (status === 'in-progress') return t.certifications.inProgress
    if (status === 'planned') return t.certifications.planned
    return t.certifications.completed
  }

  return (
    <section
      id="certifications"
      className="section section-grad-bs"
      aria-labelledby="certifications-heading"
    >
      <div className="container-xl">
        <SectionHeading
          title={t.certifications.title}
          subtitle={t.certifications.subtitle}
          accent="08. Learning"
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {certifications.map((cert, i) => {
            const status = statusConfig[cert.status]

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group rounded-2xl bg-slate-900/60 border border-slate-800/60 p-6 hover:border-slate-700 transition-all duration-300"
              >
                {/* Icon + status */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-blue-400" aria-hidden="true" />
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold border ${status.color}`}
                  >
                    <status.Icon className="w-3 h-3" aria-hidden="true" />
                    {getStatusLabel(cert.status)}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-slate-100 text-sm sm:text-base mb-1">
                  {cert.title[l]}
                </h3>
                <p className="text-blue-400 text-xs font-medium mb-3">{cert.provider[l]}</p>
                <p className="text-slate-500 text-xs leading-relaxed mb-5">{cert.description[l]}</p>

                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-slate-600 uppercase tracking-wide font-semibold">
                      {cert.status === 'completed' ? '100%' : cert.status === 'in-progress' ? '~60%' : '0%'}
                    </span>
                  </div>
                  <div className="h-1 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: status.barWidth }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                      className={`h-full rounded-full ${status.barColor}`}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
