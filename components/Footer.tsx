'use client'

import { Github, Linkedin, Mail, Terminal } from 'lucide-react'
import { useLanguage } from '@/components/ui/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#030710] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-1.5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5 text-white" aria-hidden="true" />
              </div>
              <span className="font-heading font-bold text-slate-200 text-sm">
                Gabriel <span className="text-blue-400">Kaminise</span>
              </span>
            </div>
            <p className="text-xs text-slate-600 text-center sm:text-left">{t.footer.role}</p>
          </div>

          {/* Social links */}
          <nav aria-label="Social links" className="flex items-center gap-1">
            {[
              { href: 'https://github.com/zKaminise', Icon: Github, label: 'GitHub' },
              { href: 'https://linkedin.com/in/gabrielkaminise', Icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:gabriel.misao08@gmail.com', Icon: Mail, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="p-2 rounded-lg text-slate-500 hover:text-blue-400 hover:bg-slate-800/60 transition-all duration-200"
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}
          </nav>

          {/* Meta */}
          <div className="flex flex-col items-center sm:items-end gap-1">
            <p className="text-[11px] text-slate-600">{t.footer.builtWith}</p>
            <p className="text-[11px] text-slate-700">
              © {year} Gabriel Kaminise. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
