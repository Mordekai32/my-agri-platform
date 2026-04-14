import React from 'react';

export default function ProfileCard() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-white to-blue-50 p-6 font-sans text-slate-900">
      <div className="group relative w-full max-w-sm">
        
        {/* Glow behind card */}
        <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 opacity-20 blur-2xl transition duration-500 group-hover:opacity-60 group-hover:duration-200"></div>

        {/* Card Body */}
        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-white/95 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2">
          
          {/* Animated Accent Line */}
          <div className="absolute top-0 h-1.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 animate-gradient-x"></div>

          {/* Profile Header */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="relative mb-6 h-28 w-28">
              <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-tr from-blue-500 via-transparent to-purple-500 p-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="h-full w-full rounded-full bg-white"></div>
              </div>
              
              <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-700 text-3xl font-black text-white shadow-inner">
                UM
                <span className="absolute bottom-1 right-1 flex h-5 w-5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-5 w-5 rounded-full border-2 border-white bg-green-500"></span>
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-slate-800 uppercase">
              UKOBUKEYE Mordekai
            </h2>
            
            <div className="mt-2 inline-flex items-center rounded-full bg-slate-100 px-4 py-1 text-xs font-black uppercase tracking-widest text-indigo-600 ring-1 ring-inset ring-slate-200">
              Software Engineer
            </div>

            <p className="mt-3 flex items-center justify-center gap-1.5 text-sm font-semibold text-slate-500">
              <span className="text-blue-500">📍</span> Kinyinya, Rwanda
            </p>
          </div>

          {/* Contact Links */}
          <div className="mt-8 w-full space-y-3">
            <a href="tel:0796381024" className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-3.5 transition-all hover:bg-white hover:shadow-md group/link">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover/link:bg-blue-600 group-hover/link:text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <span className="text-sm font-bold text-slate-700">0796381024</span>
            </a>

            <a href="mailto:mordekai893@gmail.com" className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-3.5 transition-all hover:bg-white hover:shadow-md group/link">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600 transition-colors group-hover/link:bg-purple-600 group-hover/link:text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <span className="text-sm font-bold text-slate-700">mordekai893@gmail.com</span>
            </a>
          </div>

          {/* External Socials */}
          <div className="mt-6 flex w-full gap-3">
            <a href="https://instagram.com/blaise_320" target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 py-3 text-sm font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95 text-center">
              Instagram
            </a>
            <a href="https://github.com/Mordekai32" target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center rounded-xl bg-slate-900 py-3 text-sm font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95 text-center">
              GitHub
            </a>
          </div>

          {/* Portfolio Button (Get in Touch) */}
          <a 
            href="https://mordekai.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative mt-6 w-full group/btn overflow-hidden rounded-2xl bg-indigo-600 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg transition-all active:scale-95 block text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Visit Portfolio
              <svg className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-700 to-indigo-700 transition-transform duration-300 group-hover/btn:translate-x-0"></div>
          </a>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}