'use client'

import { motion } from 'framer-motion'
import { Code2, Activity, Cloud, Layers, BookOpen } from 'lucide-react'
import { useLanguage } from '@/components/ui/LanguageContext'
import SectionHeading from '@/components/ui/SectionHeading'

const cardConfig = [
  {
    Icon: Code2,
    num: '01',
    iconBg: 'bg-blue-500/10 border-blue-500/20',
    iconColor: 'text-blue-400',
    accentBar: 'bg-gradient-to-r from-blue-500 to-cyan-500',
  },
  {
    Icon: Activity,
    num: '02',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    iconColor: 'text-emerald-400',
    accentBar: 'bg-gradient-to-r from-emerald-500 to-teal-500',
  },
  {
    Icon: Cloud,
    num: '03',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    iconColor: 'text-cyan-400',
    accentBar: 'bg-gradient-to-r from-cyan-500 to-blue-500',
  },
  {
    Icon: Layers,
    num: '04',
    iconBg: 'bg-violet-500/10 border-violet-500/20',
    iconColor: 'text-violet-400',
    accentBar: 'bg-gradient-to-r from-violet-500 to-purple-500',
  },
  {
    Icon: BookOpen,
    num: '05',
    iconBg: 'bg-orange-500/10 border-orange-500/20',
    iconColor: 'text-orange-400',
    accentBar: 'bg-gradient-to-r from-orange-500 to-amber-500',
  },
]

export default function Positioning() {
  const { t } = useLanguage()

  const cards = [
    { title: t.positioning.card1Title, desc: t.positioning.card1Desc },
    { title: t.positioning.card2Title, desc: t.positioning.card2Desc },
    { title: t.positioning.card3Title, desc: t.positioning.card3Desc },
    { title: t.positioning.card4Title, desc: t.positioning.card4Desc },
    { title: t.positioning.card5Title, desc: t.positioning.card5Desc },
  ]

  return (
    <section
      id="positioning"
      className="section section-grad-bs relative"
      aria-labelledby="positioning-heading"
    >
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      <div className="relative z-10 container-xl">
        <SectionHeading
          title={t.positioning.title}
          subtitle={t.positioning.subtitle}
          accent="02. Positioning"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => {
            const { Icon, num, iconBg, iconColor, accentBar } = cardConfig[i]

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.5 }}
                className={`card-glow flex flex-col ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="card-inner flex-1 flex flex-col relative overflow-hidden p-6 group cursor-default">

                  {/* Large faint background number */}
                  <span
                    className="absolute -right-1 -top-3 font-heading font-black text-8xl leading-none select-none pointer-events-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-300"
                    aria-hidden="true"
                  >
                    {num}
                  </span>

                  {/* Top shimmer on hover */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/0 to-transparent group-hover:via-blue-400/50 transition-all duration-500" />

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl border ${iconBg} flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-105 shrink-0`}
                  >
                    <Icon className={`w-6 h-6 ${iconColor}`} aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-lg text-slate-100 mb-3 group-hover:text-white transition-colors relative z-10">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors relative z-10 flex-1">
                    {card.desc}
                  </p>

                  {/* Animated bottom accent bar */}
                  <div className="absolute bottom-0 inset-x-0 h-0.5">
                    <div
                      className={`h-full ${accentBar} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300`}
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
