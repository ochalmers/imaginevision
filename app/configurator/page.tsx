'use client'

import Link from 'next/link'
import { useState } from 'react'
import { CabinetThumbnail } from '@/components/configurator/CabinetThumbnails'
import { KitchenView } from '@/components/configurator/KitchenView'

const widthOptions = ['24"', '30"', '36"']

const cabinetLabels = [
  'Single Door',
  'Double Door',
  'Single Drawer',
  'Two Drawers',
  'Double 2 Drawer',
  'Three Drawers',
  'Door + Drawer',
  'Drawer + Door',
  'Four Drawers',
]

const doorStyles = [
  { id: 0, name: 'Flat' },
  { id: 1, name: 'Raised' },
  { id: 2, name: 'Slab' },
  { id: 3, name: 'Shaker' },
]

const handleStyles = [
  { id: 0, type: 'knob' as const },
  { id: 1, type: 'knob' as const },
  { id: 2, type: 'pull' as const },
  { id: 3, type: 'pull' as const },
  { id: 4, type: 'L-pull' as const, color: '#c9a227' },
  { id: 5, type: 'pull' as const },
  { id: 6, type: 'integrated' as const },
  { id: 7, type: 'knob' as const },
  { id: 8, type: 'pull' as const },
]

const finishes = [
  { id: 0, color: '#a8a8a6', name: 'Light Grey' },
  { id: 1, color: '#5c4033', name: 'Dark Brown' },
  { id: 2, color: '#f0ebe3', name: 'Off White' },
  { id: 3, color: '#8b4513', name: 'Saddle Brown' },
  { id: 4, color: '#2c1810', name: 'Espresso' },
  { id: 5, color: '#c4a574', name: 'Walnut' },
]

const woodGrainPattern = `url("data:image/svg+xml,%3Csvg width='20' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q5 15 10 20 T20 20' stroke='%23000000' stroke-width='0.3' fill='none' opacity='0.08'/%3E%3Cpath d='M0 30 Q8 25 15 30 T20 30' stroke='%23000000' stroke-width='0.2' fill='none' opacity='0.05'/%3E%3C/svg%3E")`

export default function ConfiguratorPage() {
  const [cabinet, setCabinet] = useState(4)
  const [width, setWidth] = useState(0)
  const [doorStyle, setDoorStyle] = useState(3)
  const [handle, setHandle] = useState(4)
  const [finish, setFinish] = useState(1)

  const selectedFinish = finishes[finish]
  const handleColor = handleStyles[handle]?.type === 'L-pull' ? '#c9a227' : handleStyles[handle]?.type === 'pull' ? '#8b7355' : '#666'

  return (
    <div
      className="fixed inset-0 z-50 flex overflow-hidden"
      style={{
        backgroundColor: '#f6f6f6',
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      {/* Left config sidebar */}
      <aside
        className="flex w-[360px] shrink-0 flex-col overflow-y-auto"
        style={{
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e5e5e5',
          boxShadow: '2px 0 8px rgba(0,0,0,0.04)',
        }}
      >
        <div className="flex flex-col p-6">
          <Link
            href="/"
            className="mb-8 flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: 'var(--grey-900)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Base Cabinet
          </Link>

          {/* Base Cabinet grid */}
          <section className="mb-10">
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--grey-900)' }}>
              Base Cabinet
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCabinet(i)}
                  className="rounded-lg transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--papaya-500)] focus:ring-offset-2"
                  style={{
                    border: cabinet === i ? '2px solid #1a1a1a' : '2px solid transparent',
                  }}
                >
                  <CabinetThumbnail
                    index={i}
                    fill={selectedFinish.color}
                    handleColor={handleColor}
                  />
                </button>
              ))}
            </div>
          </section>

          {/* Width selector */}
          <section className="mb-10">
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--grey-900)' }}>
              Width
            </h3>
            <div className="flex gap-2">
              {widthOptions.map((w, i) => (
                <button
                  key={w}
                  onClick={() => setWidth(i)}
                  className="flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-all"
                  style={{
                    backgroundColor: width === i ? 'var(--papaya-500)' : 'var(--grey-50)',
                    color: width === i ? 'white' : 'var(--grey-900)',
                    border: width === i ? 'none' : '1px solid var(--grey-200)',
                  }}
                >
                  {w}
                </button>
              ))}
            </div>
          </section>

          {/* Door Style */}
          <section className="mb-10">
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--grey-900)' }}>
              Door Style
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {doorStyles.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setDoorStyle(opt.id)}
                  className="overflow-hidden rounded-lg transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--papaya-500)] focus:ring-offset-2"
                  style={{
                    aspectRatio: '1',
                    border: doorStyle === opt.id ? '2px solid #1a1a1a' : '2px solid transparent',
                  }}
                >
                  <div
                    className="flex h-full w-full items-center justify-center p-2"
                    style={{
                      backgroundColor: 'var(--grey-100)',
                      backgroundImage: opt.id === 3 ? `
                        linear-gradient(to bottom, rgba(0,0,0,0.03) 0%, transparent 20%),
                        linear-gradient(to right, rgba(0,0,0,0.05) 0%, transparent 15%),
                        linear-gradient(to bottom, transparent 80%, rgba(0,0,0,0.03) 100%),
                        linear-gradient(to right, transparent 85%, rgba(0,0,0,0.05) 100%)
                      ` : undefined,
                    }}
                  >
                    <div
                      className="rounded-sm"
                      style={{
                        width: '70%',
                        height: '70%',
                        backgroundColor: 'var(--grey-200)',
                        boxShadow: opt.id === 3 ? 'inset 0 0 0 2px var(--grey-400)' : 'inset 0 0 0 1px var(--grey-400)',
                      }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Door Handle */}
          <section className="mb-10">
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--grey-900)' }}>
              Door Handle
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {handleStyles.map((opt, i) => (
                <button
                  key={opt.id}
                  onClick={() => setHandle(i)}
                  className="overflow-hidden rounded-lg transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--papaya-500)] focus:ring-offset-2"
                  style={{
                    aspectRatio: '1',
                    border: handle === i ? '2px solid #1a1a1a' : '2px solid transparent',
                  }}
                >
                  <div className="flex h-full w-full items-center justify-center p-3" style={{ backgroundColor: 'var(--grey-50)' }}>
                    {opt.type === 'L-pull' ? (
                      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke={opt.color || '#c9a227'} strokeWidth="2.5" strokeLinecap="round">
                        <path d="M8 6h8v2H8zM8 16h8v2H8zM14 6v14" />
                      </svg>
                    ) : opt.type === 'pull' ? (
                      <div className="h-1 w-6 rounded-full" style={{ backgroundColor: i === 5 ? '#8b7355' : 'var(--grey-500)' }} />
                    ) : opt.type === 'knob' ? (
                      <div className="h-3 w-3 rounded-full" style={{ backgroundColor: 'var(--grey-600)' }} />
                    ) : (
                      <div className="h-1 w-5 rounded" style={{ backgroundColor: 'var(--grey-400)' }} />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Cabinet Finish */}
          <section className="mb-10">
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--grey-900)' }}>
              Cabinet Finish
            </h3>
            <div className="flex flex-wrap gap-3">
              {finishes.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFinish(f.id)}
                  className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--papaya-500)] focus:ring-offset-2"
                  style={{
                    backgroundColor: f.color,
                    backgroundImage: woodGrainPattern,
                    border: finish === f.id ? '2px solid #1a1a1a' : '2px solid transparent',
                  }}
                >
                  {finish === f.id && (
                    <span
                      className="absolute bottom-1 left-1/2 h-0.5 w-3 -translate-x-1/2"
                      style={{ backgroundColor: 'white' }}
                    />
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* Chat */}
          <details className="mt-auto border-t pt-6" style={{ borderColor: 'var(--grey-200)' }}>
            <summary
              className="flex cursor-pointer items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em]"
              style={{ color: 'var(--grey-900)' }}
            >
              + Chat
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
          </details>
        </div>
      </aside>

      {/* Right 3D view */}
      <main className="relative flex flex-1 flex-col overflow-hidden" style={{ backgroundColor: 'var(--grey-100)' }}>
        {/* Toolbar */}
        <div
          className="flex shrink-0 items-center justify-end gap-4 border-b px-6 py-3"
          style={{
            backgroundColor: 'var(--white)',
            borderColor: 'var(--grey-200)',
          }}
        >
          <button className="rounded px-3 py-1.5 text-xs font-medium transition-colors hover:bg-[var(--grey-100)]" style={{ color: 'var(--grey-700)' }}>
            2D
          </button>
          <button className="rounded p-2 transition-colors hover:bg-[var(--grey-100)]" style={{ color: 'var(--grey-600)' }} aria-label="Measure">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3v18h18M7 3v4M11 3v4M15 3v4M19 3v4M3 8h18M3 12h18" />
            </svg>
          </button>
          <button className="rounded p-2 transition-colors hover:bg-[var(--grey-100)]" style={{ color: 'var(--grey-600)' }} aria-label="Section">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v18M3 12h18" />
            </svg>
          </button>
          <button className="rounded p-2 transition-colors hover:bg-[var(--grey-100)]" style={{ color: 'var(--grey-600)' }} aria-label="Undo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 10h10a5 5 0 015 5v0a5 5 0 01-5 5H3" />
            </svg>
          </button>
          <button className="rounded p-2 transition-colors hover:bg-[var(--grey-100)]" style={{ color: 'var(--grey-600)' }} aria-label="Redo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10H11a5 5 0 00-5 5v0a5 5 0 005 5h10" />
            </svg>
          </button>
          <button className="rounded p-2 transition-colors hover:bg-[var(--grey-100)]" style={{ color: 'var(--grey-600)' }} aria-label="Expand">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" />
            </svg>
          </button>
          <button
            className="rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-95"
            style={{ backgroundColor: 'var(--papaya-500)' }}
          >
            Generate Assets
          </button>
        </div>

        {/* 3D viewport */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden p-6">
          <div
            className="relative h-full w-full max-w-5xl overflow-hidden rounded-xl"
            style={{
              backgroundColor: 'var(--grey-200)',
              boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.06), 0 4px 24px rgba(0,0,0,0.08)',
            }}
          >
            <KitchenView
              cabinetFinish={selectedFinish.color}
              handleColor={handleColor}
              cabinetConfig={cabinetLabels[cabinet]}
              width={widthOptions[width]}
            />
          </div>

          {/* Tooltip above highlighted cabinet */}
          <div
            className="absolute rounded px-4 py-2 text-sm font-semibold text-white"
            style={{
              right: '22%',
              top: '38%',
              backgroundColor: '#1a1a1a',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            {cabinetLabels[cabinet]} {widthOptions[width]}
          </div>
        </div>

        {/* Bottom toolbar */}
        <div
          className="flex shrink-0 items-center justify-center gap-2 border-t px-6 py-4"
          style={{
            backgroundColor: 'var(--white)',
            borderColor: 'var(--grey-200)',
          }}
        >
          <div className="flex items-center gap-1 rounded-lg p-1" style={{ backgroundColor: 'var(--grey-50)' }}>
            <button className="rounded p-2 transition-colors hover:bg-[var(--grey-200)]" style={{ color: 'var(--grey-600)' }} aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="rounded p-2 transition-colors hover:bg-[var(--grey-200)]" style={{ color: 'var(--grey-600)' }} aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            <button className="rounded p-2 transition-colors hover:opacity-90" style={{ backgroundColor: 'var(--papaya-100)', color: 'var(--papaya-600)' }} aria-label="Add">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <button className="rounded p-2 transition-colors hover:bg-[var(--grey-200)]" style={{ color: 'var(--grey-600)' }} aria-label="Duplicate">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
            </button>
            <button className="rounded p-2 transition-colors hover:bg-[var(--grey-200)]" style={{ color: 'var(--grey-600)' }} aria-label="Delete">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                <path d="M10 11v6M14 11v6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Status */}
        <div
          className="absolute bottom-8 right-8 flex items-center gap-2 rounded-md px-4 py-2 text-xs font-medium"
          style={{
            backgroundColor: 'var(--white)',
            color: 'var(--grey-700)',
            border: '1px solid var(--grey-200)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}
        >
          <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--green-500)' }} />
          LIVE STATUS • STABLE
        </div>
      </main>
    </div>
  )
}
