// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Sayfa - Sayaç
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnaSayfaSayacProps {}

export function AnaSayfaSayac(props: AnaSayfaSayacProps) {
  return (
    <>
      <header className="fixed top-0 w-full z-50 no-border bg-[#0b1326]">
      <div className="flex justify-between items-center px-6 h-16 w-full max-w-screen-xl mx-auto">
      <div className="text-xl font-bold tracking-tighter text-[#dbe1ff] uppercase">SAYAÇ</div>
      <div className="flex gap-4">
      <button className="text-[#2d3449] hover:bg-[#171f33] transition-colors p-2 rounded-xl active:scale-95 duration-150">
      <span className="material-symbols-outlined" data-icon="history">history</span>
      </button>
      <button className="text-[#2d3449] hover:bg-[#171f33] transition-colors p-2 rounded-xl active:scale-95 duration-150">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      </button>
      </div>
      </div>
      </header>
      <main className="flex-grow flex items-center justify-center px-4 pt-16 pb-24 bg-mesh">
      <div className="w-full max-w-md">
      <div className="bg-surface-container-low rounded-3xl p-8 pt-12 pb-10 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <h1 className="text-on-surface-variant font-medium tracking-widest uppercase text-[12px] mb-8">Sayaç Durumu</h1>
      <div className="bg-surface-container-lowest rounded-2xl py-12 mb-10 relative">
      <span className="display-lg text-[84px] font-extrabold tracking-tighter text-primary-fixed counter-glow block leading-none">
                              42
                          </span>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary/10 blur-sm rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
      <button className="flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container py-5 rounded-xl font-bold active:scale-95 transition-all duration-200">
      <span className="material-symbols-outlined font-bold" data-icon="add">add</span>
      <span className="tracking-tight">Artır</span>
      </button>
      <button className="flex items-center justify-center gap-2 bg-tertiary-container text-on-tertiary-container py-5 rounded-xl font-bold active:scale-95 transition-all duration-200">
      <span className="material-symbols-outlined font-bold" data-icon="remove">remove</span>
      <span className="tracking-tight">Azalt</span>
      </button>
      </div>
      <button className="w-full flex items-center justify-center gap-2 bg-surface-container-highest text-outline py-4 rounded-xl font-medium hover:text-on-surface transition-colors active:scale-[0.98] duration-200">
      <span className="material-symbols-outlined" data-icon="refresh">refresh</span>
      <span className="text-[12px] tracking-widest uppercase">Sayacı Sıfırla</span>
      </button>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-3">
      <div className="bg-surface-container-low/50 p-4 rounded-2xl flex items-center justify-between">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
      <span className="material-symbols-outlined" data-icon="trending_up">trending_up</span>
      </div>
      <div>
      <p className="text-[10px] text-outline uppercase tracking-widest">Günlük Hedef</p>
      <p className="font-bold text-on-surface">100 / 42</p>
      </div>
      </div>
      <div className="h-1.5 w-24 bg-surface-container rounded-full overflow-hidden">
      <div className="bg-primary h-full w-[42%]"></div>
      </div>
      </div>
      </div>
      </div>
      </main>
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 bg-[#0b1326]/80 backdrop-blur-xl z-50 pb-safe shadow-[0_-4px_40px_rgba(37,99,235,0.08)]">
      <a className="flex flex-col items-center justify-center bg-[#171f33] text-[#b4c5ff] rounded-2xl px-6 py-2 transition-all active:scale-90 duration-200" href="#">
      <span className="material-symbols-outlined" data-icon="speed" style={{fontVariationSettings: "'FILL' 1"}}>speed</span>
      <span className="text-[12px] font-medium tracking-widest uppercase mt-1">Ana Sayfa</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#2d3449] px-6 py-2 hover:text-[#b4c5ff] transition-all active:scale-90 duration-200" href="#">
      <span className="material-symbols-outlined" data-icon="restore">restore</span>
      <span className="text-[12px] font-medium tracking-widest uppercase mt-1">Geçmiş</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#2d3449] px-6 py-2 hover:text-[#b4c5ff] transition-all active:scale-90 duration-200" href="#">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      <span className="text-[12px] font-medium tracking-widest uppercase mt-1">Ayarlar</span>
      </a>
      </nav>
    </>
  );
}
