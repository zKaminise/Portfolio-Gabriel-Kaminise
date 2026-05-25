'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Braces, Activity, Cloud, Database, Globe, Terminal, Languages,
} from 'lucide-react'
import { useLanguage } from '@/components/ui/LanguageContext'
import SectionHeading from '@/components/ui/SectionHeading'
import { skillCategories } from '@/lib/data'

const categoryMeta = [
  {
    id: 'backend',
    Icon: Braces,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    titleKey: 'backendTitle' as const,
    descKey: 'backendDesc' as const,
  },
  {
    id: 'sre',
    Icon: Activity,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    titleKey: 'sreTitle' as const,
    descKey: 'sreDesc' as const,
  },
  {
    id: 'cloud',
    Icon: Cloud,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    titleKey: 'cloudTitle' as const,
    descKey: 'cloudDesc' as const,
  },
  {
    id: 'databases',
    Icon: Database,
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/20',
    titleKey: 'dbTitle' as const,
    descKey: 'dbDesc' as const,
  },
  {
    id: 'frontend',
    Icon: Globe,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    titleKey: 'frontendTitle' as const,
    descKey: 'frontendDesc' as const,
  },
  {
    id: 'tools',
    Icon: Terminal,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/20',
    titleKey: 'toolsTitle' as const,
    descKey: 'toolsDesc' as const,
  },
  {
    id: 'languages',
    Icon: Languages,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
    titleKey: 'languagesTitle' as const,
    descKey: 'languagesDesc' as const,
  },
]

export default function Skills() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('backend')

  const activeMeta = categoryMeta.find((m) => m.id === activeTab)!
  const activeCategory = skillCategories.find((c) => c.id === activeTab)!
  const title = t.skills[activeMeta.titleKey]
  const desc = t.skills[activeMeta.descKey]

  return (
    <section
      id="skills"
      className="section section-grad-sb"
      aria-labelledby="skills-heading"
    >
      <div className="container-xl">
        <SectionHeading
          title={t.skills.title}
          subtitle={t.skills.subtitle}
          accent="04. Skills"
        />

        {/* Tab strip */}
        <div
          className="flex flex-wrap gap-2 mb-8"
          role="tablist"
          aria-label="Skill categories"
        >
          {categoryMeta.map((meta) => {
            const isActive = activeTab === meta.id
            const tabTitle = t.skills[meta.titleKey]

            return (
              <motion.button
                key={meta.id}
                onClick={() => setActiveTab(meta.id)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                role="tab"
                aria-selected={isActive}
                aria-controls="skills-panel"
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold
                  transition-colors duration-200 outline-none
                  focus-visible:ring-2 focus-visible:ring-blue-500/50
                  ${isActive
                    ? `${meta.color} border ${meta.borderColor}`
                    : 'text-slate-500 hover:text-slate-200 border border-transparent hover:border-slate-700/50'
                  }`}
              >
                {/* Sliding background indicator */}
                {isActive && (
                  <motion.span
                    layoutId="skill-tab-bg"
                    className={`absolute inset-0 rounded-xl ${meta.bgColor} -z-10`}
                    transition={{ type: 'spring', stiffness: 380, damping: 38 }}
                  />
                )}
                <meta.Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{tabTitle}</span>
              </motion.button>
            )
          })}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id="skills-panel"
            role="tabpanel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="card-glow"
          >
            <div className="card-inner p-6 sm:p-8">

              {/* Category header */}
              <div className="flex items-start gap-4 mb-6 pb-5 border-b border-slate-800/80">
                <div
                  className={`w-11 h-11 rounded-xl ${activeMeta.bgColor} border ${activeMeta.borderColor}
                    flex items-center justify-center shrink-0`}
                >
                  <activeMeta.Icon
                    className={`w-5 h-5 ${activeMeta.color}`}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-slate-100 text-lg mb-1">
                    {title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>

              {/* Skill pills with stagger */}
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.035 } },
                }}
                role="list"
                aria-label={`${title} skills`}
              >
                {activeCategory.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    role="listitem"
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, y: 6 },
                      visible: { opacity: 1, scale: 1, y: 0 },
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                    className="skill-pill"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
