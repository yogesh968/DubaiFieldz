import { Outlet } from 'react-router-dom'
import { Footer } from './Footer.jsx'
import { Navbar } from './Navbar.jsx'
import '../styles/site.css'

export function Layout() {
  return (
    <div className="site">
      <Navbar />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

