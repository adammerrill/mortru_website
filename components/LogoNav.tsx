'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Building2, Menu, X, Home, Users, Briefcase, MessageSquare, DollarSign, TypeIcon as type, type LucideIcon } from 'lucide-react'

interface NavItem {
  name: string;
  icon: LucideIcon;
  description: string;
  href: string;
}

interface LogoNavProps {
  items?: NavItem[];
  initialState?: 'open' | 'closed';
  logoIcon?: LucideIcon;
}

const navItems: NavItem[] = [
  { name: 'Home', icon: Home, description: 'Back to homepage', href: '/' },
  { name: 'Homebuyers', icon: Users, description: 'Find your dream home', href: '/homeowner' },
  { name: 'Lenders', icon: Building2, description: 'Optimize lending process', href: '/mortgage-company' },
  { name: 'Agents', icon: Briefcase, description: 'Grow your business', href: '/real-estate-agent' },
  { name: 'Connect', icon: MessageSquare, description: 'Get in touch', href: '/connect' }
]

const setup_styling = {
  logoNav: {
    container: "fixed top-0 left-1/2 transform -translate-x-1/2 z-50",
    header: {
      base: "mt-4 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 ease-in-out",
      states: {
        scrolled: "bg-background/90 shadow-md",
        default: "bg-background/50"
      }
    },
    button: {
      base: "flex items-center gap-3 p-2 rounded-full transition-all duration-200",
      states: {
        default: "hover:bg-primary/10",
        active: "bg-primary/20"
      },
      focus: "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    },
    icon: {
      base: "w-5 h-5 transition-transform duration-300",
      logo: "text-primary hover:rotate-180",
      menu: "text-foreground"
    },
    nav: {
      container: "absolute top-full mt-2 bg-background/95 backdrop-blur-sm rounded-2xl shadow-lg border border-input overflow-hidden",
      list: "py-2",
      item: {
        base: "flex items-center gap-3 px-4 py-3 transition-colors group relative",
        states: {
          default: "text-foreground hover:text-foreground hover:bg-primary/10"
        }
      },
      icon: "w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110",
      text: {
        title: "font-medium",
        description: "text-xs text-muted-foreground"
      }
    }
  }
}

export default function LogoNav({ 
  items = navItems,
  initialState = 'closed',
  logoIcon: LogoIcon = Building2 
}: LogoNavProps) {
  const [isOpen, setIsOpen] = useState(initialState === 'open')
  const [scrollPosition, setScrollPosition] = useState(0)
  const prefersReducedMotion = useReducedMotion()
  const pathname = usePathname()

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 25 }
    }
  }

  const menuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: 'spring',
        stiffness: 400,
        damping: 30,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false)
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('keydown', handleKeyDown)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <div className={setup_styling.logoNav.container}>
      <motion.div 
        className={`
          ${setup_styling.logoNav.header.base}
          ${scrollPosition > 50 
            ? setup_styling.logoNav.header.states.scrolled 
            : setup_styling.logoNav.header.states.default}
        `}
        initial="hidden"
        animate="visible"
        variants={!prefersReducedMotion ? logoVariants : {}}
      >
        <div className="flex items-center">
          <Link href="/" className={`${setup_styling.logoNav.button.base} ${setup_styling.logoNav.button.focus}`}>
            <LogoIcon 
              className={`${setup_styling.logoNav.icon.base} ${setup_styling.logoNav.icon.logo}`}
              aria-hidden="true"
            />
          </Link>
          <button
            className={`
              ${setup_styling.logoNav.button.base}
              ${setup_styling.logoNav.button.states[isOpen ? 'active' : 'default']}
              ${setup_styling.logoNav.button.focus}
              ml-2
            `}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="nav-menu"
            aria-label="Toggle navigation menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <X className={`${setup_styling.logoNav.icon.base} ${setup_styling.logoNav.icon.menu}`} />
              ) : (
                <Menu className={`${setup_styling.logoNav.icon.base} ${setup_styling.logoNav.icon.menu}`} />
              )}
            </motion.div>
          </button>
        </div>
      </motion.div>
      
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.nav 
            id="nav-menu"
            role="navigation"
            variants={!prefersReducedMotion ? menuVariants : {}}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`${setup_styling.logoNav.nav.container} w-max`}
          >
            <ul className={`${setup_styling.logoNav.nav.list} inline-block min-w-[16rem]`} role="menu">
              {items.map((item) => (
                <motion.li 
                  key={item.name}
                  variants={!prefersReducedMotion ? itemVariants : {}}
                  role="none"
                >
                  <Link 
                    href={item.href}
                    className={`
                      ${setup_styling.logoNav.nav.item.base}
                      ${setup_styling.logoNav.nav.item.states.default}
                      flex items-center w-full
                    `}
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    <item.icon 
                      className={setup_styling.logoNav.nav.icon}
                      aria-hidden="true"
                    />
                    <div className="flex flex-col min-w-0 flex-grow">
                      <span className={`${setup_styling.logoNav.nav.text.title} whitespace-nowrap`}>
                        {item.name}
                      </span>
                      <span className={`${setup_styling.logoNav.nav.text.description} whitespace-nowrap`}>
                        {item.description}
                      </span>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

