import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const artir = () => setCount(c => c + 1)
  const azalt = () => setCount(c => c - 1)
  const sifirla = () => setCount(0)

  return (
    <div className="min-h-screen bg-[#0b1326] flex flex-col">
      <header className="fixed top-0 w-full z-50 bg-[#0b1326]">
        <div className="flex justify-between items-center px-6 h-16 w-full max-w-screen-xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-[#dbe1ff] uppercase">SAYAÇ</div>
          <div className="flex gap-4">
            <button className="text-[#2d3449] hover:bg-[#171f33] transition-colors p-2 rounded-xl active:scale-95 duration-150">
              <span className="material-symbols-outlined">history</span>
            </button>
            <button className="text-[#2d3449] hover:bg-[#171f33] transition-colors p-2 rounded-xl active:scale-95 duration-150">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center px-4 pt-16 pb-24">
        <div className="w-full max-w-md">
          <div className="bg-[#131b2e] rounded-3xl p-8 pt-12 pb-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b4c5ff]/20 to-transparent"></div>
            <h1 className="text-[#dae2fd] font-medium tracking-widest uppercase text-[12px] mb-8">Sayaç Durumu</h1>
            <div className="bg-[#060e20] rounded-2xl py-12 mb-10 relative">
              <span className="text-[84px] font-extrabold tracking-tighter text-[#dbe1ff] block leading-none drop-shadow-[0_0_30px_rgba(180,197,255,0.3)]">
                {count}
              </span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#b4c5ff]/10 blur-sm rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button onClick={artir} className="flex items-center justify-center gap-2 bg-[#00b954] text-[#003915] py-5 rounded-xl font-bold active:scale-95 transition-all duration-200 hover:brightness-110">
                <span className="material-symbols-outlined font-bold">add</span>
                <span className="tracking-tight">Artır</span>
              </button>
              <button onClick={azalt} className="flex items-center justify-center gap-2 bg-[#cf2c30] text-[#ffecea] py-5 rounded-xl font-bold active:scale-95 transition-all duration-200 hover:brightness-110">
                <span className="material-symbols-outlined font-bold">remove</span>
                <span className="tracking-tight">Azalt</span>
              </button>
            </div>
            <button onClick={sifirla} className="w-full flex items-center justify-center gap-2 bg-[#2d3449] text-[#8d90a0] py-4 rounded-xl font-medium hover:text-[#dae2fd] hover:bg-[#434655] transition-colors active:scale-[0.98] duration-200">
              <span className="material-symbols-outlined">refresh</span>
              <span className="text-[12px] tracking-widest uppercase">Sayacı Sıfırla</span>
            </button>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-3">
            <div className="bg-[#131b2e]/50 p-4 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#b4c5ff]/10 flex items-center justify-center text-[#b4c5ff]">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <div>
                  <p className="text-[10px] text-[#8d90a0] uppercase tracking-widest">Günlük Hedef</p>
                  <p className="font-bold text-[#dae2fd]">100 / {count}</p>
                </div>
              </div>
              <div className="h-1.5 w-24 bg-[#171f33] rounded-full overflow-hidden">
                <div className="bg-[#b4c5ff] h-full" style={{width: `${Math.min(count, 100)}%`}}></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 bg-[#0b1326]/80 backdrop-blur-xl z-50 pb-safe shadow-[0_-4px_40px_rgba(37,99,235,0.08)]">
        <a className="flex flex-col items-center justify-center bg-[#171f33] text-[#b4c5ff] rounded-2xl px-6 py-2 transition-all active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>speed</span>
          <span className="text-[12px] font-medium tracking-widest uppercase mt-1">Ana Sayfa</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#2d3449] px-6 py-2 hover:text-[#b4c5ff] transition-all active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined">restore</span>
          <span className="text-[12px] font-medium tracking-widest uppercase mt-1">Geçmiş</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#2d3449] px-6 py-2 hover:text-[#b4c5ff] transition-all active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[12px] font-medium tracking-widest uppercase mt-1">Ayarlar</span>
        </a>
      </nav>
    </div>
  )
}

export default App
