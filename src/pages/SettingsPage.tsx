import { useNavigate } from 'react-router-dom'

export function SettingsPage(): React.ReactElement {
  const navigate = useNavigate()

  return (
    <>
      <header className="fixed top-0 w-full z-50 no-border bg-[#0b1326]">
        <div className="flex justify-between items-center px-6 h-16 w-full max-w-screen-xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-[#dbe1ff] uppercase">SAYAÇ</div>
          <div className="flex gap-4">
            <button 
              onClick={() => navigate('/history')}
              className="text-[#2d3449] hover:bg-[#171f33] transition-colors p-2 rounded-xl active:scale-95 duration-150"
              aria-label="Geçmiş"
            >
              <span className="material-symbols-outlined" data-icon="history">history</span>
            </button>
            <button 
              onClick={() => navigate('/settings')}
              className="text-[#2d3449] hover:bg-[#171f33] transition-colors p-2 rounded-xl active:scale-95 duration-150"
              aria-label="Ayarlar"
            >
              <span className="material-symbols-outlined" data-icon="settings">settings</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center px-4 pt-16 pb-24 bg-mesh">
        <div className="w-full max-w-md">
          <div className="bg-surface-container-low rounded-3xl p-8 pt-12 pb-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <h1 className="text-on-surface-variant font-medium tracking-widest uppercase text-[12px] mb-8">Ayarlar</h1>
            <div className="bg-surface-container-lowest rounded-2xl py-12 mb-10 relative">
              <span className="material-symbols-outlined text-6xl text-primary-fixed-dim mb-4 block">settings</span>
              <p className="text-on-surface-variant text-base leading-relaxed px-4">
                Ayarlar sayfası yakında kullanıma sunulacak.
              </p>
            </div>
            <button
              onClick={() => navigate('/')}
              className="w-full flex items-center justify-center gap-2 bg-surface-container-highest text-outline py-4 rounded-xl font-medium hover:text-on-surface transition-colors active:scale-[0.98] duration-200"
            >
              <span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
              <span className="text-[12px] tracking-widest uppercase">Ana Sayfaya Dön</span>
            </button>
          </div>
        </div>
      </main>
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 bg-[#0b1326]/80 backdrop-blur-xl z-50 pb-safe shadow-[0_-4px_40px_rgba(37,99,235,0.08)]">
        <button 
          onClick={() => navigate('/')}
          className="flex flex-col items-center justify-center text-[#2d3449] px-6 py-2 hover:text-[#b4c5ff] transition-all active:scale-90 duration-200"
        >
          <span className="material-symbols-outlined" data-icon="speed">speed</span>
          <span className="text-[12px] font-medium tracking-widest uppercase mt-1">Ana Sayfa</span>
        </button>
        <button 
          onClick={() => navigate('/history')}
          className="flex flex-col items-center justify-center text-[#2d3449] px-6 py-2 hover:text-[#b4c5ff] transition-all active:scale-90 duration-200"
        >
          <span className="material-symbols-outlined" data-icon="restore">restore</span>
          <span className="text-[12px] font-medium tracking-widest uppercase mt-1">Geçmiş</span>
        </button>
        <button 
          onClick={() => navigate('/settings')}
          className="flex flex-col items-center justify-center bg-[#171f33] text-[#b4c5ff] rounded-2xl px-6 py-2 transition-all active:scale-90 duration-200"
        >
          <span className="material-symbols-outlined" data-icon="settings" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
          <span className="text-[12px] font-medium tracking-widest uppercase mt-1">Ayarlar</span>
        </button>
      </nav>
    </>
  )
}
