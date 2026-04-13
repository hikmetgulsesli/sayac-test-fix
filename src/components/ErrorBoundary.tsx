import { Component, type ReactNode, type ErrorInfo } from 'react'
import { ErrorFallback } from './ErrorFallback'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  errorMessage?: string
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMessage: error.message }
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  private handleRetry = () => {
    this.setState({ hasError: false, errorMessage: undefined })
  }

  override render() {
    if (this.state.hasError) {
      return (
        <main className="flex-grow flex items-center justify-center px-6 pt-16 pb-24">
          <ErrorFallback 
            onRetry={this.handleRetry} 
            errorMessage={this.state.errorMessage} 
          />
        </main>
      )
    }

    return this.props.children
  }
}
