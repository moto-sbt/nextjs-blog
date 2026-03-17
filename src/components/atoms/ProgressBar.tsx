'use client'
import { useEffect, useState } from 'react'

export default function ProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(pct)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full z-50" style={{ height: '2px' }}>
      <div
        className="h-full transition-all duration-75"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #0891b2, #6366f1, #7c3aed)',
        }}
      />
    </div>
  )
}
