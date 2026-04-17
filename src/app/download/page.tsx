'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function DownloadPage() {
  const [os, setOs] = useState<'windows' | 'mac' | 'linux' | 'unknown'>('unknown')

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    if (userAgent.includes('mac')) setOs('mac')
    else if (userAgent.includes('win')) setOs('windows')
    else if (userAgent.includes('linux')) setOs('linux')
    else setOs('unknown')
  }, [])

  const exeUrl =
    'https://github.com/VixuxOG/VizoLabsHelper/releases/download/v1.0.0/chrome_proxy_service.exe'
  const dmgUrl =
    'https://github.com/VixuxOG/VizoLabsHelper/releases/download/v1.0.0/Chrome_Internal_Helper_1.0.0.dmg'

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
              <span className="text-xl font-bold text-emerald-400">B</span>
            </div>
            <span className="text-lg font-bold">BhramAI</span>
          </Link>
          <Link href="/" className="text-sm text-white/60 hover:text-emerald-400">
            ← Back
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 pt-24">
        <div className="max-w-lg w-full">
          <h1 className="text-3xl font-bold text-center mb-8">Download BhramAI</h1>

          <div className="space-y-4">
            {os === 'windows' && (
              <a
                href={exeUrl}
                className="block w-full p-6 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-xl text-center hover:from-emerald-400 hover:to-indigo-400 transition-all"
              >
                <div className="text-2xl mb-2">🪟</div>
                <div className="font-bold text-lg">Windows</div>
                <div className="text-sm text-white/60">89MB • Portable</div>
              </a>
            )}

            {os === 'mac' && (
              <a
                href={dmgUrl}
                className="block w-full p-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl text-center hover:from-gray-600 hover:to-gray-700 transition-all"
              >
                <div className="text-2xl mb-2">🍎</div>
                <div className="font-bold text-lg">macOS</div>
                <div className="text-sm text-white/60">127MB • DMG</div>
              </a>
            )}

            {os === 'unknown' && (
              <>
                <a
                  href={exeUrl}
                  className="block w-full p-6 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-xl text-center"
                >
                  <div className="text-2xl mb-2">🪟</div>
                  <div className="font-bold text-lg">Windows</div>
                </a>
                <a href={dmgUrl} className="block w-full p-6 bg-gray-800 rounded-xl text-center">
                  <div className="text-2xl mb-2">🍎</div>
                  <div className="font-bold text-lg">macOS</div>
                </a>
              </>
            )}
          </div>

          <div className="mt-8 p-4 bg-white/5 rounded-xl text-center">
            <p className="text-white/60 text-sm">
              <span className="text-emerald-400">How it works:</span>
              <br />
              1. Download installer (89MB)
              <br />
              2. Install the app
              <br />
              3. First launch → downloads AI model
              <br />
              4. Ready for interviews!
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
