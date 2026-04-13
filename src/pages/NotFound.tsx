import { useNavigate } from 'react-router-dom'

export function NotFound(): JSX.Element {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <main className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center">
      {/*  Kinetic Monolith Container  */}
      <div className="w-full bg-surface-container-low rounded-[2rem] p-12 md:p-24 flex flex-col items-center text-center shadow-[0_32px_64px_-12px_rgba(6,14,32,0.8)] relative overflow-hidden">
        {/*  Background Decorative Glow  */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        {/*  Error Illustration (Abstract Minimalist Icon)  */}
        <div className="relative mb-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-50"></div>
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/15 relative">
            <span className="material-symbols-outlined text-[5rem] md:text-[8rem] text-primary-fixed-dim" style={{ fontVariationSettings: "'wght' 100" }}>
              explore_off
            </span>
          </div>
          {/*  Float 404 Text  */}
          <div className="absolute -top-4 -right-8 md:-right-12">
            <span className="text-7xl md:text-9xl font-extrabold tracking-tighter text-outline-variant/20 italic select-none">404</span>
          </div>
        </div>
        {/*  Typography Content  */}
        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold tracking-tighter text-primary-fixed">
            Sayfa Bulunamadı
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed opacity-80">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir. Görünüşe göre rotadan biraz saptınız.
          </p>
        </div>
        {/*  Action Area  */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button 
            onClick={handleGoHome}
            className="kinetic-gradient text-on-primary-container px-8 py-4 rounded-xl font-bold tracking-tight flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-[0_12px_40px_rgba(37,99,235,0.2)]"
          >
            <span className="material-symbols-outlined">home</span>
            Ana Sayfaya Dön
          </button>
          <button 
            onClick={handleGoBack}
            className="bg-surface-container-highest/40 border border-outline-variant/20 text-on-surface px-8 py-4 rounded-xl font-bold tracking-tight flex items-center justify-center gap-3 transition-all hover:bg-surface-container-highest/60 hover:border-outline-variant/40 active:scale-95"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Geri Git
          </button>
        </div>
        {/*  Minimalist Detail  */}
        <div className="mt-16 flex items-center gap-4 py-2 px-4 rounded-full bg-surface-container-lowest/50 border border-outline-variant/10">
          <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#4ae176]"></div>
          <span className="text-[10px] font-label uppercase tracking-[0.2em] text-outline">Sistem Durumu: Normal</span>
        </div>
      </div>
      {/*  Footer / Support info  */}
      <div className="mt-12 text-center opacity-40">
        <p className="text-sm font-medium text-on-surface-variant">Yardıma mı ihtiyacınız var? <span className="text-primary cursor-pointer hover:underline">Destek ile iletişime geçin</span></p>
      </div>
    </main>
  )
}
