import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout.jsx'
import { ScrollToTop } from './components/ScrollToTop.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="app-loading" role="status" aria-live="polite">
            <div className="loading-dots">
              <span />
              <span />
              <span />
            </div>
          </div>
        }
      >
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/book" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
