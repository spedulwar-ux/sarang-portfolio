"use client"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const CSS = `
.nav-wrap {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  background: rgba(0,0,0,0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 24px; height: 56px;
}
.nav-brand {
  font-size: 14px; font-weight: 700; color: #fff;
  letter-spacing: -0.02em; text-decoration: none;
}
.nav-links { display: flex; align-items: center; gap: 32px; }
.nav-link {
  font-size: 11px; font-weight: 500; letter-spacing: 0.12em;
  text-transform: uppercase; color: rgba(255,255,255,0.45);
  text-decoration: none; transition: color 0.2s;
}
.nav-link:hover, .nav-link.active { color: #fff; }
.nav-hamburger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 4px;
}
.nav-hamburger span {
  display: block; width: 22px; height: 1.5px; background: rgba(255,255,255,0.6);
  transition: all 0.2s;
}
.nav-mobile {
  display: none; position: fixed; top: 56px; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.97); z-index: 999;
  flex-direction: column; align-items: center; justify-content: center; gap: 40px;
}
.nav-mobile.open { display: flex; }
.nav-mobile-link {
  font-size: 28px; font-weight: 700; color: rgba(255,255,255,0.7);
  text-decoration: none; letter-spacing: -0.03em;
  transition: color 0.2s;
}
.nav-mobile-link:hover { color: #fff; }
@media (max-width: 640px) {
  .nav-links { display: none; }
  .nav-hamburger { display: flex; }
}
`

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/prints", label: "Prints" },
  { href: "/logos", label: "Logofolio" },
  { href: "/contact", label: "Contact" },
]

export default function Nav() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <nav className="nav-wrap">
        <Link href="/" className="nav-brand">Sarang®</Link>
        <div className="nav-links">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className={`nav-link${router.pathname === l.href ? " active" : ""}`}>
              {l.label}
            </Link>
          ))}
        </div>
        <button className="nav-hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`nav-mobile${open ? " open" : ""}`}>
        {LINKS.map(l => (
          <Link key={l.href} href={l.href} className="nav-mobile-link" onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
      </div>
    </>
  )
}
