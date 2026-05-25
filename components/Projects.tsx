'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Clock, Briefcase, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/components/ui/LanguageContext'
import SectionHeading from '@/components/ui/SectionHeading'
import { projects } from '@/lib/data'
import type { Lang, Translations } from '@/lib/translations'

type StatusKey = 'in-progress' | 'planned' | 'live' | 'professional'

interface StatusConfig {
  label: (t: Translations) => string
  color: string
  Icon: React.ElementType
}

const statusConfig: Record<StatusKey, StatusConfig> = {
  'in-progress': {
    label: (t) => t.projects.inProgress,
    color: 'text-amber-400 bg-amber-400/10 border-amber-400/25',
    Icon: Clock,
  },
  'planned': {
    label: (t) => t.projects.planned,
    color: 'text-slate-400 bg-slate-800 border-slate-700',
    Icon: Clock,
  },
  'live': {
    label: () => 'Live',
    color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/25',
    Icon: ExternalLink,
  },
  'professional': {
    label: (t) => t.projects.professional,
    color: 'text-blue-400 bg-blue-400/10 border-blue-400/25',
    Icon: Briefcase,
  },
}

const projectGradients = [
  'from-blue-900/40 to-cyan-900/20',
  'from-violet-900/40 to-purple-900/20',
  'from-emerald-900/40 to-teal-900/20',
  'from-orange-900/40 to-amber-900/20',
  'from-pink-900/40 to-rose-900/20',
]

export default function Projects() {
  const { t, lang } = useLanguage()
  const l = lang as Lang

  return (
    <section id="projects" className="section bg-[#050B14]" aria-labelledby="projects-heading">
      <div className="container-xl">
        <SectionHeading
          title={t.projects.title}
          subtitle={t.projects.subtitle}
          accent="05. Projects"
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const status = statusConfig[project.status as StatusKey]
            const gradient = projectGradients[i % projectGradients.length]

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl bg-slate-900/60 border border-slate-800/60 overflow-hidden
                  hover:border-slate-700 hover:shadow-xl hover:shadow-black/30
                  transition-all duration-300 flex flex-col cursor-default"
              >
                {/* Card header gradient */}
                <div className={`h-2 w-full bg-gradient-to-r ${gradient}`} aria-hidden="true" />

                {/* Top glow */}
                <div className="absolute inset-x-0 top-2 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/40 transition-all duration-300" />

                <div className="p-6 flex flex-col gap-4 flex-1">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-lg text-slate-100 group-hover:text-white transition-colors mb-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">{project.type[l]}</p>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold border whitespace-nowrap shrink-0 ${status.color}`}
                    >
                      <status.Icon className="w-3 h-3" aria-hidden="true" />
                      {status.label(t)}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">
                    {project.description[l]}
                  </p>

                  {/* Demonstrates */}
                  <div>
                    <p className="text-[11px] text-slate-600 uppercase tracking-wide font-semibold mb-2">
                      {t.projects.demonstrates}
                    </p>
                    <ul className="flex flex-col gap-1.5" role="list">
                      {project.demonstrates.slice(0, 3).map((item, di) => (
                        <li key={di} className="flex items-center gap-2 text-xs text-slate-400">
                          <ChevronRight className="w-3 h-3 text-blue-500 shrink-0" aria-hidden="true" />
                          {item[l]}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-1.5" aria-label="Technologies">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-800 border border-slate-700/60 text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 5 && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-medium text-slate-600">
                        +{project.stack.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-2 pt-1 mt-auto border-t border-slate-800/60">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-300 transition-colors py-1 px-2 rounded-lg hover:bg-slate-800/60"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-3.5 h-3.5" aria-hidden="true" />
                        {t.projects.viewGithub}
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-300 transition-colors py-1 px-2 rounded-lg hover:bg-slate-800/60"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        {t.projects.liveDemo}
                      </a>
                    )}
                    {!project.githubUrl && !project.liveUrl && (
                      <span className="text-xs text-slate-700 py-1 px-2">
                        {project.status === 'professional'
                          ? (lang === 'en' ? 'Client work' : 'Trabalho para clientes')
                          : (lang === 'en' ? 'Coming soon' : 'Em breve')}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
