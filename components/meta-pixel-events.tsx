'use client'

import { useEffect } from 'react'

export function MetaPixelEvents() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return
      const href = target.getAttribute('href') || ''
      if (href.includes('wa.me') || href.includes('whatsapp')) {
        if (typeof window !== 'undefined' && (window as any).fbq) {
          ;(window as any).fbq('track', 'Lead', {
            content_name: 'WhatsApp Click',
            content_category: 'Implantes Dentales',
          })
        }
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
