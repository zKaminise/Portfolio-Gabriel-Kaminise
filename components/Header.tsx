'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon, Download, Terminal } from 'lucide-react'
import { useLanguage } from '@/components/ui/LanguageContext'
import type { Lang } from '@/lib/translations'

const navIds = ['about', 'experience', 'skills', 'projects', 'career-focus', 'education', 'contact'] as const

export default function Header() {
  const { t, lang, setLang } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    navIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.careerFocus, href: '#career-focus' },
    { label: t.nav.education, href: '#education' },
    { label: t.nav.contact, href: '#contact' },
  ]

  const scrollTo = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleLang = () => setLang(lang === 'en' ? 'pt' : 'en' as Lang)
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/60 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Go to top"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
              <Terminal className="w-4 h-4 text-white" aria-hidden="true" />
            </div>
            <span className="font-heading font-bold text-slate-100 text-base hidden sm:block group-hover:text-blue-300 transition-colors">
              Gabriel<span className="text-blue-400">Kaminise</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => {
              const id = item.href.replace('#', '')
              const isActive = activeSection === id
              return (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <button
              onClick={toggleLang}
              className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold font-mono border border-slate-700/60 text-slate-400 hover:text-slate-200 hover:border-blue-500/40 transition-all duration-200 cursor-pointer"
              aria-label={`Switch to ${lang === 'en' ? 'Portuguese' : 'English'}`}
            >
              <span className={lang === 'en' ? 'text-blue-400' : 'text-slate-500'}>EN</span>
              <span className="text-slate-600">/</span>
              <span className={lang === 'pt' ? 'text-blue-400' : 'text-slate-500'}>PT</span>
            </button>

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-all duration-200 cursor-pointer"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            {/* Download CV */}
            <a
              href="/cv/gabriel-kaminise-cv.pdf"
              download
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 shadow-md shadow-blue-500/20 hover:shadow-blue-500/30"
              aria-label="Download CV"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              {t.nav.downloadCV}
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-all duration-200 cursor-pointer"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/60"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(item.href)}
                  className="text-left px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-blue-300 hover:bg-slate-800/60 transition-all cursor-pointer"
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="mt-2 pt-3 border-t border-slate-800 flex items-center gap-3">
                <button
                  onClick={toggleLang}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold font-mono border border-slate-700/60 text-slate-400 hover:border-blue-500/40 cursor-pointer"
                >
                  <span className={lang === 'en' ? 'text-blue-400' : 'text-slate-500'}>EN</span>
                  <span className="text-slate-600">/</span>
                  <span className={lang === 'pt' ? 'text-blue-400' : 'text-slate-500'}>PT</span>
                </button>
                <a
                  href="/cv/gabriel-kaminise-cv.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                >
                  <Download className="w-3 h-3" />
                  {t.nav.downloadCV}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
