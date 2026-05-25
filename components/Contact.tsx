'use client'

import { motion } from 'framer-motion'
import { Linkedin, Github, Download, CheckCircle2, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/components/ui/LanguageContext'

const WHATSAPP_URL = 'https://wa.me/5534998275292'

export default function Contact() {
  const { t } = useLanguage()

  const availableItems = [
    t.contact.avail1,
    t.contact.avail2,
    t.contact.avail3,
    t.contact.avail4,
    t.contact.avail5,
    t.contact.avail6,
  ]

  const contactLinks = [
    {
      href: WHATSAPP_URL,
      label: t.contact.whatsappButton,
      Icon: MessageCircle,
      primary: true,
      external: true,
      ariaLabel: 'Send a message on WhatsApp',
    },
    {
      href: 'https://linkedin.com/in/gabrielkaminise',
      label: t.contact.linkedinButton,
      Icon: Linkedin,
      primary: false,
      external: true,
      ariaLabel: 'Connect on LinkedIn',
    },
    {
      href: 'https://github.com/zKaminise',
      label: t.contact.githubButton,
      Icon: Github,
      primary: false,
      external: true,
      ariaLabel: 'View GitHub profile',
    },
    {
      href: '/cv/gabriel-kaminise-cv.pdf',
      label: t.contact.downloadCV,
      Icon: Download,
      primary: false,
      download: true,
      ariaLabel: "Download Gabriel's CV",
    },
  ]

  return (
    <section
      id="contact"
      className="section section-grad-sb relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container-xl">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-4"
          >
            09. Contact
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            id="contact-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-6 leading-tight"
          >
            {t.contact.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed mb-12 max-w-xl mx-auto"
          >
            {t.contact.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap justify-center gap-3 mb-14"
          >
            {contactLinks.map(({ href, label, Icon, primary, external, download: dl, ariaLabel }, i) => (
              <motion.a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                download={dl}
                aria-label={ariaLabel}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ transitionDelay: `${i * 0.06}s` }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200
                  ${primary
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-500 shadow-lg shadow-green-500/20 hover:shadow-green-500/30'
                    : 'border border-slate-700 text-slate-300 hover:border-blue-500/60 hover:text-blue-300 hover:bg-blue-500/5'
                  }`}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                {label}
              </motion.a>
            ))}
          </motion.div>

          {/* Available for */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="rounded-2xl bg-slate-900/60 border border-slate-800/60 p-7"
          >
            <p className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-5">
              {t.contact.availableFor}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {availableItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
