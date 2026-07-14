import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// The browser's own scroll restoration (history.scrollRestoration: "auto")
// fights with pages that manage scroll themselves on mount — several routes
// here already call window.scrollTo(0, 0) or restore a saved position on
// back-navigation, and native restoration racing against that (especially
// on pages whose height keeps changing right after mount, e.g. from GSAP
// pin-spacers) can land the page at the wrong scroll position entirely.
// Every route already scrolls itself into the right place, so full manual
// control is strictly safer than leaving the browser to guess too.
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
