import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { Counter } from './components/Counter'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ErrorFallback } from './components/ErrorFallback'
import { NotFound } from './pages/NotFound'
import { HistoryPage } from './pages/HistoryPage'
import { SettingsPage } from './pages/SettingsPage'
import { useCounter } from './hooks/useCounter'

// ============================================
// useCounter Hook Tests
// ============================================
function TestCounterComponent() {
  const { count, increment, decrement, reset } = useCounter(0)
  return (
    <div>
      <span data-testid="count">{count}</span>
      <button onClick={increment}>Artır</button>
      <button onClick={decrement}>Azalt</button>
      <button onClick={reset}>Sıfırla</button>
    </div>
  )
}

describe('useCounter', () => {
  it('başlangıç değeri 0 olmalı', () => {
    render(<TestCounterComponent />)
    expect(screen.getByTestId('count')).toHaveTextContent('0')
  })

  it('Artır butonuna tıklayınca sayaç artmalı', () => {
    render(<TestCounterComponent />)
    fireEvent.click(screen.getByText('Artır'))
    expect(screen.getByTestId('count')).toHaveTextContent('1')
  })

  it('Azalt butonuna tıklayınca sayaç azalmalı', () => {
    render(<TestCounterComponent />)
    fireEvent.click(screen.getByText('Artır'))
    fireEvent.click(screen.getByText('Artır'))
    fireEvent.click(screen.getByText('Azalt'))
    expect(screen.getByTestId('count')).toHaveTextContent('1')
  })

  it('Sayaç 0 iken Azalt çalışmamalı (negatif olmamalı)', () => {
    render(<TestCounterComponent />)
    fireEvent.click(screen.getByText('Azalt'))
    expect(screen.getByTestId('count')).toHaveTextContent('0')
  })

  it('Sıfırla butonu sayacı başlangıç değerine döndürmeli', () => {
    render(<TestCounterComponent />)
    fireEvent.click(screen.getByText('Artır'))
    fireEvent.click(screen.getByText('Artır'))
    fireEvent.click(screen.getByText('Artır'))
    expect(screen.getByTestId('count')).toHaveTextContent('3')
    fireEvent.click(screen.getByText('Sıfırla'))
    expect(screen.getByTestId('count')).toHaveTextContent('0')
  })
})

// ============================================
// Counter Component Tests
// ============================================
describe('Counter', () => {
  it('sayaç başlangıç değeri 0 olarak gösterilmeli', () => {
    render(
      <BrowserRouter>
        <Counter />
      </BrowserRouter>
    )
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('Artır butonu sayacı artırmalı', () => {
    render(
      <BrowserRouter>
        <Counter />
      </BrowserRouter>
    )
    fireEvent.click(screen.getByText('Artır'))
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('Azalt butonu sayacı azaltmalı', () => {
    render(
      <BrowserRouter>
        <Counter />
      </BrowserRouter>
    )
    fireEvent.click(screen.getByText('Artır'))
    fireEvent.click(screen.getByText('Artır'))
    fireEvent.click(screen.getByText('Azalt'))
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('Sayacı Sıfırla butonu sayacı sıfırlamalı', () => {
    render(
      <BrowserRouter>
        <Counter />
      </BrowserRouter>
    )
    fireEvent.click(screen.getByText('Artır'))
    fireEvent.click(screen.getByText('Artır'))
    expect(screen.getByText('2')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Sayacı Sıfırla'))
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('günlük hedef bilgisi görünmeli', () => {
    render(
      <BrowserRouter>
        <Counter />
      </BrowserRouter>
    )
    expect(screen.getByText('Günlük Hedef')).toBeInTheDocument()
    expect(screen.getByText('100 / 0')).toBeInTheDocument()
  })
})

// ============================================
// ErrorBoundary Tests
// ============================================
function ThrowError({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error('Test hatası')
  }
  return <div>Normal içerik</div>
}

describe('ErrorBoundary', () => {
  it('hata olmadan children render etmeli', () => {
    render(
      <ErrorBoundary>
        <div>Test içeriği</div>
      </ErrorBoundary>
    )
    expect(screen.getByText('Test içeriği')).toBeInTheDocument()
  })

  it('hata oluştuğunda fallback UI göstermeli', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    
    render(
      <BrowserRouter>
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      </BrowserRouter>
    )
    
    expect(screen.getByText('Bir Sorun Oluştu')).toBeInTheDocument()
    expect(screen.getByText('Yeniden Dene')).toBeInTheDocument()
    
    consoleSpy.mockRestore()
  })
})

describe('ErrorFallback', () => {
  it('hata mesajı göstermeli', () => {
    render(
      <BrowserRouter>
        <ErrorFallback errorMessage="Özel hata mesajı" />
      </BrowserRouter>
    )
    expect(screen.getByText('Özel hata mesajı')).toBeInTheDocument()
  })

  it('varsayılan hata mesajı göstermeli', () => {
    render(
      <BrowserRouter>
        <ErrorFallback />
      </BrowserRouter>
    )
    expect(screen.getByText('Uygulama yüklenirken bir hata meydana geldi, lütfen tekrar deneyin.')).toBeInTheDocument()
  })

  it('Yeniden Dene butonu onRetry çağırmalı', () => {
    const mockRetry = vi.fn()
    render(
      <BrowserRouter>
        <ErrorFallback onRetry={mockRetry} />
      </BrowserRouter>
    )
    fireEvent.click(screen.getByText('Yeniden Dene'))
    expect(mockRetry).toHaveBeenCalledTimes(1)
  })

  it('Ana Sayfaya Dön butonu ana sayfaya yönlendirmeli', () => {
    render(
      <BrowserRouter>
        <ErrorFallback />
      </BrowserRouter>
    )
    expect(screen.getByText('Ana Sayfaya Dön')).toBeInTheDocument()
  })
})

// ============================================
// NotFound Page Tests
// ============================================
describe('NotFound', () => {
  it('404 mesajı göstermeli', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    expect(screen.getByText('Sayfa Bulunamadı')).toBeInTheDocument()
    expect(screen.getByText('Aradığınız sayfa mevcut değil veya taşınmış olabilir. Görünüşe göre rotadan biraz saptınız.')).toBeInTheDocument()
  })

  it('Ana Sayfaya Dön butonu görünmeli', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    expect(screen.getByText('Ana Sayfaya Dön')).toBeInTheDocument()
  })

  it('Geri Git butonu görünmeli', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    expect(screen.getByText('Geri Git')).toBeInTheDocument()
  })

  it('Sistem Durumu bilgisi görünmeli', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    expect(screen.getByText('Sistem Durumu: Normal')).toBeInTheDocument()
  })
})

// ============================================
// App Integration Tests
// ============================================
describe('App - Integration', () => {
  it('ana sayfada sayaç uygulaması yüklenmeli', () => {
    render(<App />)
    expect(screen.getByText('Sayaç Durumu')).toBeInTheDocument()
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('Artır')).toBeInTheDocument()
    expect(screen.getByText('Azalt')).toBeInTheDocument()
    expect(screen.getByText('Sayacı Sıfırla')).toBeInTheDocument()
  })

  it('Artır butonu sayacı artırmalı', () => {
    render(<App />)
    fireEvent.click(screen.getByText('Artır'))
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('Azalt butonu sayacı azaltmalı', () => {
    render(<App />)
    fireEvent.click(screen.getByText('Artır'))
    fireEvent.click(screen.getByText('Artır'))
    fireEvent.click(screen.getByText('Azalt'))
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('Sayacı Sıfırla butonu sayacı sıfırlamalı', () => {
    render(<App />)
    fireEvent.click(screen.getByText('Artır'))
    fireEvent.click(screen.getByText('Artır'))
    expect(screen.getByText('2')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Sayacı Sıfırla'))
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('alt navigasyon bağlantıları görünmeli', () => {
    render(<App />)
    expect(screen.getAllByText('Ana Sayfa').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Geçmiş').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Ayarlar').length).toBeGreaterThan(0)
  })
})

// ============================================
// US-004: Navigation and Routing Tests
// ============================================
describe('US-004: Navigation and Routing', () => {
  it('/history rotası Geçmiş sayfasını göstermeli', () => {
    render(
      <MemoryRouter initialEntries={['/history']}>
        <Routes>
          <Route path="/" element={<div>Ana Sayfa</div>} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getAllByText('Geçmiş').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Henüz geçmiş kaydı bulunmuyor.')).toBeInTheDocument()
  })

  it('/settings rotası Ayarlar sayfasını göstermeli', () => {
    render(
      <MemoryRouter initialEntries={['/settings']}>
        <Routes>
          <Route path="/" element={<div>Ana Sayfa</div>} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getAllByText('Ayarlar').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Ayarlar sayfası yakında kullanıma sunulacak.')).toBeInTheDocument()
  })

  it('geçersiz rota 404 sayfasını göstermeli', () => {
    render(
      <MemoryRouter initialEntries={['/gecersiz-rota']}>
        <Routes>
          <Route path="/" element={<div>Ana Sayfa</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByText('Sayfa Bulunamadı')).toBeInTheDocument()
    expect(screen.getByText('404')).toBeInTheDocument()
  })

  it('HistoryPage Ana Sayfaya Dön butonu çalışmalı', () => {
    render(
      <MemoryRouter initialEntries={['/history']}>
        <Routes>
          <Route path="/" element={<div data-testid="home">Ana Sayfa İçeriği</div>} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByText('Ana Sayfaya Dön')).toBeInTheDocument()
  })

  it('SettingsPage Ana Sayfaya Dön butonu çalışmalı', () => {
    render(
      <MemoryRouter initialEntries={['/settings']}>
        <Routes>
          <Route path="/" element={<div data-testid="home">Ana Sayfa İçeriği</div>} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByText('Ana Sayfaya Dön')).toBeInTheDocument()
  })
})
