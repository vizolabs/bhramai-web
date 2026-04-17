export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />

      <h1 className="text-7xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
        BHRAM AI
      </h1>
      <p className="text-xl text-zinc-500 mb-8 max-w-lg">
        The private, zero-telemetry intelligence layer for high-stakes environments. No Login. No
        Tracking. 100% Offline.
      </p>

      <a
        href="/download"
        className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]"
      >
        DOWNLOAD THE SHELL (90MB)
      </a>

      <div className="mt-12 text-xs text-zinc-700 font-mono uppercase tracking-widest">
        Developed by VizoLabs Syndicate
      </div>
    </main>
  )
}
