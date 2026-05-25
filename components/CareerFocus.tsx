'use client'

import { motion } from 'framer-motion'
import { Target, Globe, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/components/ui/LanguageContext'
import SectionHeading from '@/components/ui/SectionHeading'

export default function CareerFocus() {
  const { t } = useLanguage()

  const roles = [
    t.careerFocus.role1,
    t.careerFocus.role2,
    t.careerFocus.role3,
    t.careerFocus.role4,
    t.careerFocus.role5,
    t.careerFocus.role6,
    t.careerFocus.role7,
  ]

  const reasons = [
    { title: t.careerFocus.reason1Title, desc: t.careerFocus.reason1Desc },
    { title: t.careerFocus.reason2Title, desc: t.careerFocus.reason2Desc },
    { title: t.careerFocus.reason3Title, desc: t.careerFocus.reason3Desc },
    { title: t.careerFocus.reason4Title, desc: t.careerFocus.reason4Desc },
    { title: t.careerFocus.reason5Title, desc: t.careerFocus.reason5Desc },
    { title: t.careerFocus.reason6Title, desc: t.careerFocus.reason6Desc },
  ]

  return (
    <section
      id="career-focus"
      className="section section-grad-sb"
      aria-labelledby="career-focus-heading"
    >
      <div className="container-xl">
        <SectionHeading
          title={t.careerFocus.title}
          subtitle={t.careerFocus.subtitle}
          accent="06. Career Focus"
        />

        <div className="grid lg:grid-cols-2 gap-10 mb-14">
          {/* Roles targeting */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-slate-900/60 border border-slate-800/60 p-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-400" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-bold text-slate-100 text-lg">
                {t.careerFocus.targetingTitle}
              </h3>
            </div>
            <ul className="flex flex-col gap-3" role="list">
              {roles.map((role, i) => (
                <motion.li
                  key={role}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 text-slate-300 text-sm sm:text-base"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" aria-hidden="true" />
                  {role}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            {/* Statement quote */}
            <div className="relative rounded-2xl bg-blue-500/5 border border-blue-500/20 p-7 mb-5 flex-1">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-l-2xl" />
              <Globe className="w-7 h-7 text-blue-400 mb-4" aria-hidden="true" />
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                &ldquo;{t.careerFocus.statement}&rdquo;
              </p>
            </div>

            {/* CTA block */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-500/25 p-7">
              <h3 className="font-heading font-bold text-slate-100 text-lg mb-2">
                {t.careerFocus.ctaTitle}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {t.careerFocus.ctaDesc}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/5534998275292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                  aria-label="Message on WhatsApp"
                >
                  {t.contact.whatsappButton}
                </a>
                <a
                  href="https://linkedin.com/in/gabrielkaminise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                  aria-label="Visit LinkedIn profile"
                >
                  {t.contact.linkedinButton}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why international */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-xl text-slate-100 mb-7 text-center"
          >
            {t.careerFocus.whyTitle}
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group rounded-xl bg-slate-900/50 border border-slate-800/60 p-5 hover:border-blue-500/25 transition-all duration-200"
              >
                <h4 className="font-heading font-semibold text-slate-200 text-sm mb-2 group-hover:text-white transition-colors">
                  {reason.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
