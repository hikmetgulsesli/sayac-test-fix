import { useNavigate } from 'react-router-dom'

interface ErrorFallbackProps {
  onRetry?: () => void
  errorMessage?: string
}

export function ErrorFallback(props: ErrorFallbackProps): JSX.Element {
  const { onRetry, errorMessage } = props
  const navigate = useNavigate()

  const handleRetry = () => {
    if (onRetry) {
      onRetry()
    } else {
      window.location.reload()
    }
  }

  const handleGoHome = () => {
    navigate('/')
  }

  return (
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
        {errorMessage || 'Uygulama yüklenirken bir hata meydana geldi, lütfen tekrar deneyin.'}
      </p>
      {/*  Action Area  */}
      <div className="flex flex-col gap-4">
        <button 
          onClick={handleRetry}
          className="kinetic-gradient text-on-primary font-bold py-4 px-8 rounded-xl shadow-[0_4px_40px_rgba(37,99,235,0.2)] active:scale-95 transition-all duration-200 uppercase tracking-widest text-xs"
        >
          Yeniden Dene
        </button>
        <button 
          onClick={handleGoHome}
          className="bg-surface-container hover:bg-surface-container-highest text-outline font-medium py-4 px-8 rounded-xl transition-all duration-200 text-sm"
        >
          Ana Sayfaya Dön
        </button>
      </div>
      {/*  Decorative Ambient Glow  */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </div>
  )
}
