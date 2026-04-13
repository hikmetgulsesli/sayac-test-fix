// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Boş / Hata Durumu
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

export function BosHataDurumu() {
  return (
    <>
      {/*  TopAppBar  */}
      <header className="fixed top-0 w-full z-50 no-border bg-[#0b1326]">
        <div className="flex justify-between items-center px-6 h-16 w-full max-w-screen-xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-[#dbe1ff] font-['Inter']">SAYAÇ</div>
          <div className="flex gap-4">
            <button className="p-2 rounded-full text-[#2d3449] hover:bg-[#171f33] transition-colors active:scale-95 duration-150">
              <span className="material-symbols-outlined" data-icon="history">history</span>
            </button>
            <button className="p-2 rounded-full text-[#2d3449] hover:bg-[#171f33] transition-colors active:scale-95 duration-150">
              <span className="material-symbols-outlined" data-icon="settings">settings</span>
            </button>
          </div>
        </div>
      </header>
      {/*  Error State Main Content  */}
      <main className="flex-grow flex items-center justify-center px-6 pt-16 pb-24">
        <div className="max-w-md w-full text-center">
          {/*  Asymmetric Tonal Layering for Error Icon  */}
          <div className="relative inline-block mb-12">
            <div className="absolute -inset-4 bg-error/5 rounded-full blur-2xl"></div>
            <div className="relative w-32 h-32 mx-auto bg-surface-container-low rounded-xl flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden">
              {/*  Glassmorphism overlay  */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              <span className="material-symbols-outlined text-6xl text-error" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
            </div>
            {/*  Secondary decorative shape  */}
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center transform rotate-12">
              <span className="material-symbols-outlined text-outline text-xl" data-icon="sync_problem">sync_problem</span>
            </div>
          </div>
          {/*  Typography Hierarchy  */}
          <h1 className="text-[28px] font-bold tracking-tight text-primary-fixed mb-4 font-headline">
            Bir Sorun Oluştu
          </h1>
          <p className="text-on-surface-variant text-base leading-relaxed mb-10 px-4">
            Uygulama yüklenirken bir hata meydana geldi, lütfen tekrar deneyin.
          </p>
          {/*  Action Area  */}
          <div className="flex flex-col gap-4">
            <button className="kinetic-gradient text-on-primary font-bold py-4 px-8 rounded-xl shadow-[0_4px_40px_rgba(37,99,235,0.2)] active:scale-95 transition-all duration-200 uppercase tracking-widest text-xs">
              Yeniden Dene
            </button>
            <button className="bg-surface-container hover:bg-surface-container-highest text-outline font-medium py-4 px-8 rounded-xl transition-all duration-200 text-sm">
              Destek ile İletişime Geç
            </button>
          </div>
          {/*  Decorative Ambient Glow  */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        </div>
      </main>
      {/*  BottomNavBar (Suppressed based on Task-Focused rule, but if this were a top level destination, it would look like this)  */}
      {/*  The prompt implies a fallback/error screen which usually suppresses main navigation, but we follow the JSON anchors for component definition  */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 bg-[#0b1326]/80 backdrop-blur-xl z-50 pb-safe shadow-[0_-4px_40px_rgba(37,99,235,0.08)]">
        <a className="flex flex-col items-center justify-center text-[#2d3449] px-6 py-2 hover:text-[#b4c5ff] transition-all active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="speed">speed</span>
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
  )
}
