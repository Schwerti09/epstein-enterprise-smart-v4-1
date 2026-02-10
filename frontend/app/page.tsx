
import Link from 'next/link';
import { ExternalLink, LayoutDashboard } from 'lucide-react';

export default function Portal() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-12 text-center">
        
        <div className="space-y-4">
            <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-bold tracking-widest">
                ENTERPRISE GATEWAY
            </div>
            <h1 className="text-6xl font-black tracking-tighter">
                Epstein Research <span className="text-indigo-500">Hub</span>
            </h1>
            <p className="text-xl text-slate-400">Select your destination.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Link to User's Static Site */}
            <a href="/site/index.html" className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800 transition-all text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <ExternalLink className="w-24 h-24" />
                </div>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">Public Research Site</h2>
                <p className="text-slate-400 text-sm mb-6">Access the document archive, timeline and public resources.</p>
                <span className="inline-flex items-center text-sm font-bold text-indigo-400">
                    Open Site &rarr;
                </span>
            </a>

            {/* Link to Enterprise Dashboard */}
            <Link href="/dashboard" className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800 transition-all text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <LayoutDashboard className="w-24 h-24" />
                </div>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">Admin Dashboard</h2>
                <p className="text-slate-400 text-sm mb-6">Manage AI workers, database connections and audit logs.</p>
                <span className="inline-flex items-center text-sm font-bold text-emerald-400">
                    Login &rarr;
                </span>
            </Link>
        </div>

        <div className="pt-8 border-t border-slate-900 text-slate-600 text-xs font-mono">
            System v4.0 • Secured by Neon & Gemini
        </div>
      </div>
    </main>
  )
}