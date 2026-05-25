'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  Github, Linkedin, Download, ArrowRight,
  Webhook, Leaf, BarChart3, Bell, Cloud,
  Cpu, Gauge, Zap,
} from 'lucide-react'
import { useLanguage } from '@/components/ui/LanguageContext'

/* ─── Health card data ─────────────────────────────────── */
const statusItems = [
  { key: 'api',      Icon: Webhook,   color: 'green'  },
  { key: 'services', Icon: Leaf,      color: 'green'  },
  { key: 'aws',      Icon: Cloud,     color: 'blue'   },
  { key: 'logs',     Icon: BarChart3, color: 'cyan'   },
  { key: 'incidents',Icon: Bell,      color: 'violet' },
] as const

const colorMap = {
  green:  { dot: 'bg-emerald-400', text: 'text-emerald-400' },
  blue:   { dot: 'bg-blue-400',    text: 'text-blue-400'    },
  cyan:   { dot: 'bg-cyan-400',    text: 'text-cyan-400'    },
  violet: { dot: 'bg-violet-400',  text: 'text-violet-400'  },
}

/* ─── Tech badge chips floating around the card ────────── */
const floatingChips = [
  { label: 'Java 21 LTS',   Icon: Cpu,   color: 'text-orange-400 border-orange-500/30 bg-orange-500/5', anim: 'animate-float',          pos: 'xl:absolute xl:-top-9 xl:left-0' },
  { label: 'Spring Boot 3', Icon: Leaf,  color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5', anim: 'animate-float-delayed', pos: 'xl:absolute xl:-top-9 xl:right-0' },
  { label: 'AWS + EKS',     Icon: Cloud, color: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/5', anim: 'animate-float-slow',     pos: 'xl:absolute xl:-bottom-9 xl:left-0' },
  { label: 'SLO ✓ 99.9%',  Icon: Gauge, color: 'text-blue-400 border-blue-500/30 bg-blue-500/5', anim: 'animate-float',           pos: 'xl:absolute xl:-bottom-9 xl:right-0' },
]

const badges = ['Java', 'Spring Boot', 'AWS', 'SRE / DevOps', 'Microservices', 'Observability', 'REST APIs']

/* ─── Service Health Card ───────────────────────────────── */
function ServiceHealthCard() {
  const { t } = useLanguage()
  const sc = t.hero.statusCard

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
      className="relative w-full max-w-sm rounded-2xl border border-slate-700/50 bg-slate-900/85 backdrop-blur-2xl p-6 shadow-2xl"
      style={{ boxShadow: '0 0 60px rgba(59,130,246,0.08), 0 25px 50px rgba(0,0,0,0.4)' }}
    >
      {/* Top shimmer line */}
      <div className="absolute inset-x-0 -top-px h-px overflow-hidden rounded-t-2xl">
        <div className="h-full w-full shimmer" />
      </div>

      {/* Gradient top accent */}
      <div className="absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />

      {/* Header */}
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-sm font-semibold text-slate-200 font-heading">{sc.title}</span>
        </div>
        <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/25 px-2 py-0.5 rounded-full tracking-widest">
          {sc.live}
        </span>
      </div>

      {/* Status items */}
      <div className="space-y-3 mb-5">
        {statusItems.map(({ key, Icon, color }, i) => {
          const colors = colorMap[color]
          const labelKey = key as keyof typeof sc
          const statusKey = `${key}Status` as keyof typeof sc
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.75 + i * 0.08, ease: 'easeOut' }}
              className="flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-5 h-5 rounded flex items-center justify-center ${
                  color === 'green' ? 'bg-emerald-400/10' :
                  color === 'blue'  ? 'bg-blue-400/10'    :
                  color === 'cyan'  ? 'bg-cyan-400/10'    : 'bg-violet-400/10'
                }`}>
                  <Icon className={`w-3 h-3 ${colors.text}`} aria-hidden="true" />
                </div>
                <span className="text-xs text-slate-400 font-medium group-hover:text-slate-300 transition-colors">
                  {sc[labelKey] as string}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} animate-pulse`} />
                <span className={`text-[11px] font-mono font-semibold ${colors.text}`}>
                  {sc[statusKey] as string}
                </span>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Footer metrics */}
      <div className="pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center">
        {[
          { label: sc.uptime, value: '99.9%', color: 'text-emerald-400' },
          { label: sc.mttr,   value: sc.mttrValue, color: 'text-blue-400' },
          { label: sc.slo,    value: '✓ Met',      color: 'text-cyan-400' },
        ].map(({ label, value, color }) => (
          <div key={label}>
            <div className="text-[10px] text-slate-600 uppercase tracking-wide mb-1">{label}</div>
            <div className={`text-xs font-mono font-bold ${color}`}>{value}</div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

/* ─── Main Hero ─────────────────────────────────────────── */
export default function Hero() {
  const { t } = useLanguage()
  const shouldReduce = useReducedMotion()

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden" aria-label="Hero">
      {/* Background */}
      <div className="absolute inset-0 page-bg" />
      <div className="absolute inset-0 bg-grid opacity-80" />

      {/* Orbs */}
      {!shouldReduce && (
        <>
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 right-1/3 w-[700px] h-[700px] orb-blue"
          />
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] orb-violet"
          />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text content ── */}
          <div className="flex flex-col">

            {/* Open-to-work badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                {t.hero.openTo}
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="text-slate-400 text-lg mb-1"
            >
              {t.hero.greeting}
            </motion.p>

            {/* Name — animated gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight tracking-tight"
            >
              <span className="gradient-text">Gabriel Kaminise</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="font-heading text-xl sm:text-2xl font-semibold text-slate-200 leading-snug mb-5 max-w-xl"
            >
              {t.hero.title}
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.27 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.34 }}
              className="flex flex-wrap gap-2 mb-9"
            >
              {badges.map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.36 + i * 0.04 }}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/70 border border-slate-700/50 text-slate-300 hover:border-blue-500/40 hover:text-blue-300 transition-colors cursor-default"
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.44 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <button onClick={() => scrollTo('experience')} className="btn-primary" aria-label="View experience">
                {t.hero.viewExperience}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button onClick={() => scrollTo('projects')} className="btn-secondary" aria-label="View projects">
                {t.hero.viewProjects}
              </button>
              <a
                href="https://wa.me/5534998275292"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="Message on WhatsApp"
              >
                <Zap className="w-4 h-4" aria-hidden="true" />
                {t.hero.contactMe}
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.51 }}
              className="flex items-center gap-4 flex-wrap"
            >
              {[
                { href: 'https://github.com/zKaminise', Icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com/in/gabrielkaminise', Icon: Linkedin, label: 'LinkedIn' },
                { href: '/cv/gabriel-kaminise-cv.pdf', Icon: Download, label: t.hero.downloadCV, download: true },
              ].map(({ href, Icon, label, download: dl }, i, arr) => (
                <span key={label} className="flex items-center gap-4">
                  <a
                    href={href}
                    target={!dl ? '_blank' : undefined}
                    rel={!dl ? 'noopener noreferrer' : undefined}
                    download={dl}
                    className="flex items-center gap-2 text-slate-400 hover:text-blue-300 transition-colors text-sm group"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    {label}
                  </a>
                  {i < arr.length - 1 && <span className="text-slate-700 text-xs">·</span>}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Service health card + floating chips ── */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/8 to-violet-500/4 blur-3xl scale-110" />

              <ServiceHealthCard />

              {/* Floating tech chips */}
              {!shouldReduce && floatingChips.map(({ label, Icon, color, anim, pos }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + i * 0.15 }}
                  className={`${pos} hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border backdrop-blur-xl shadow-lg ${color} ${anim}`}
                >
                  <Icon className="w-3 h-3 shrink-0" aria-hidden="true" />
                  <span className="text-[11px] font-semibold font-mono whitespace-nowrap">{label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-slate-600 text-[10px] font-mono uppercase tracking-widest">scroll</span>
          <motion.div
            animate={shouldReduce ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-slate-800 flex items-start justify-center pt-1.5"
          >
            <div className="w-0.5 h-2 bg-blue-500/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
