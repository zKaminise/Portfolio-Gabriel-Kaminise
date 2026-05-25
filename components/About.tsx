'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { MapPin, Globe, MessageSquare } from 'lucide-react'
import { useLanguage } from '@/components/ui/LanguageContext'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'

/* ── Animated counter — counts up numeric values, reveals text values ── */
function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [displayed, setDisplayed] = useState(value)

  useEffect(() => {
    if (!isInView) return

    const m = value.match(/^(\d+)(.*)$/)
    if (!m) {
      setDisplayed(value)
      return
    }

    const target = parseInt(m[1], 10)
    const suffix = m[2] ?? ''
    const duration = 1100
    const start = performance.now()
    let raf: number

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayed(`${Math.round(eased * target)}${suffix}`)
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    setDisplayed(`0${suffix}`)
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isInView, value])

  return <span ref={ref}>{displayed}</span>
}

/* ── Info row ── */
const infoItems = [
  { key: 'location', Icon: MapPin },
  { key: 'remote',   Icon: Globe },
  { key: 'english',  Icon: MessageSquare },
] as const

export default function About() {
  const { t } = useLanguage()

  const stats = [
    { value: t.about.stat1Value, label: t.about.stat1Label },
    { value: t.about.stat2Value, label: t.about.stat2Label },
    { value: t.about.stat3Value, label: t.about.stat3Label },
    { value: t.about.stat4Value, label: t.about.stat4Label },
  ]

  const paragraphs = [t.about.p1, t.about.p2, t.about.p3, t.about.p4]

  return (
    <section id="about" className="section section-base" aria-labelledby="about-heading">
      <div className="container-xl">
        <SectionHeading
          title={t.about.title}
          subtitle={t.about.subtitle}
          accent="01. About"
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* ── Left: Avatar + info ── */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="flex flex-col items-center lg:items-start gap-6">

              {/* Professional photo */}
              <div className="relative">
                <div className="w-48 h-48 rounded-2xl overflow-hidden border border-slate-700/60 shadow-xl shadow-blue-500/10">
                  <Image
                    src="/images/gabriel.jpg"
                    alt="Gabriel Kaminise — Backend Java Developer"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
                {/* Corner glow */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500/20 to-transparent -z-10 blur-md" />
              </div>

              {/* Info chips */}
              <div className="flex flex-col gap-2.5 w-full">
                {infoItems.map(({ key, Icon }) => (
                  <div key={key} className="flex items-center gap-2.5 text-sm text-slate-400">
                    <Icon className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                    <span>{t.about[key]}</span>
                  </div>
                ))}
              </div>

              {/* Stats grid with count-up */}
              <div className="grid grid-cols-2 gap-3 w-full mt-2">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.4, type: 'spring', stiffness: 260, damping: 22 }}
                    className="rounded-xl bg-slate-900/60 border border-slate-800/60 p-4 text-center hover:border-blue-500/30 transition-colors group"
                  >
                    <div className="font-heading font-bold text-xl text-blue-400 mb-1 group-hover:text-blue-300 transition-colors">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-[11px] text-slate-500 leading-tight">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* ── Right: Bio paragraphs ── */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <div className="flex flex-col gap-5">
              {paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  className="text-slate-300 text-base sm:text-lg leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}

              {/* Open-to-work highlight bar */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.44, duration: 0.5 }}
                className="mt-4 p-5 rounded-xl bg-blue-500/5 border border-blue-500/20 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-l-xl" />
                <p className="pl-4 text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
                  {t.about.openNote}
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
