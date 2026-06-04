"use client"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const CSS = `
/* ── topbar ── */
.tb { border-bottom:1px solid var(--line); font-family:var(--sans); font-weight:600; font-size:12px; letter-spacing:.2em; text-transform:uppercase; color:var(--muted); }
.tb-inner { max-width:var(--maxw); margin:0 auto; padding-inline:var(--edge); display:flex; justify-content:space-between; align-items:center; height:44px; }
.tb-avail { display:flex; align-items:center; gap:10px; white-space:nowrap; }
.tb-dot { width:7px; height:7px; border-radius:50%; background:var(--lime); box-shadow:0 0 0 0 rgba(175,209,53,.7); animation:tb-pulse 2.4s infinite; flex-shrink:0; }
@keyframes tb-pulse { 0%{box-shadow:0 0 0 0 rgba(175,209,53,.55);} 70%{box-shadow:0 0 0 8px rgba(175,209,53,0);} 100%{box-shadow:0 0 0 0 rgba(175,209,53,0);} }
.tb-dateline { display:flex; }
.tb-dateline span { display:flex; align-items:center; white-space:nowrap; }
.tb-dateline span::after { content:""; width:3px; height:3px; border-radius:50%; background:var(--muted); opacity:.7; margin:0 16px; }
.tb-dateline span:last-child::after { display:none; }

/* ── nav ── */
.nv { position:sticky; top:0; z-index:50; background:rgba(7,8,6,.82); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); border-bottom:1px solid var(--line); }
.nv-inner { max-width:var(--maxw); margin:0 auto; padding-inline:var(--edge); display:flex; justify-content:space-between; align-items:center; height:84px; }
.nv-brand img { height:34px; width:auto; display:block; }
.nv-links { display:flex; gap:36px; align-items:center; }
.nv-link { font-family:var(--sans); font-weight:600; font-size:14px; letter-spacing:.04em; text-transform:uppercase; position:relative; padding:6px 0; color:var(--text); }
.nv-link::after { content:""; position:absolute; left:0; bottom:0; height:1.5px; width:0; background:var(--lime); transition:width .28s cubic-bezier(.2,.7,.2,1); }
.nv-link:hover::after, .nv-link.active::after { width:100%; }
.nv-cta { background:var(--lime); color:var(--bg) !important; padding:11px 22px; border-radius:999px; font-family:var(--sans); font-weight:600; font-size:14px; letter-spacing:.06em; text-transform:uppercase; transition:background .25s; }
.nv-cta:hover { background:var(--text); }
.nv-cta::after { display:none !important; }

/* ── hamburger / mobile ── */
.nv-ham { display:none; flex-direction:column; gap:5px; background:none; border:none; cursor:pointer; padding:4px; }
.nv-ham span { display:block; width:22px; height:1.5px; background:rgba(242,242,234,.6); transition:all .2s; }
.nv-mob { display:none; position:fixed; top:128px; left:0; right:0; bottom:0; background:rgba(7,8,6,.97); z-index:49; flex-direction:column; align-items:center; justify-content:center; gap:40px; }
.nv-mob.open { display:flex; }
.nv-mob-link { font-size:28px; font-weight:700; color:rgba(242,242,234,.7); font-family:var(--serif); font-style:italic; transition:color .2s; }
.nv-mob-link:hover { color:var(--lime); }

@media (max-width:960px) {
  .tb-dateline { display:none; }
  .nv-links { gap:18px; }
  .nv-link:not(.nv-cta) { display:none; }
}
@media (max-width:640px) {
  .nv-links { display:none; }
  .nv-ham { display:flex; }
}
`

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/prints", label: "Prints" },
  { href: "/logos", label: "Logofolio" },
]

export default function Nav() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="tb">
        <div className="tb-inner">
          <div className="tb-avail"><span className="tb-dot" /><span>Available for work</span></div>
          <div className="tb-dateline"><span>Portfolio</span><span>Vol. 01</span><span>2026</span></div>
        </div>
      </div>
      <nav className="nv">
        <div className="nv-inner">
          <Link href="/" className="nv-brand" aria-label="Designs by Sarang">
            <img src="/images/logo-white.png" alt="Designs by Sarang" />
          </Link>
          <div className="nv-links">
            {LINKS.map(l => (
              <Link key={l.href} href={l.href} className={`nv-link${router.pathname === l.href ? " active" : ""}`}>{l.label}</Link>
            ))}
            <Link href="/contact" className="nv-cta">Contact</Link>
          </div>
          <button className="nv-ham" onClick={() => setOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`nv-mob${open ? " open" : ""}`}>
        {LINKS.map(l => (
          <Link key={l.href} href={l.href} className="nv-mob-link" onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <Link href="/contact" className="nv-mob-link" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </>
  )
}
