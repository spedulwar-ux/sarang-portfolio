import React, { useState, useEffect, useRef } from "react"
import Head from "next/head"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

/* ─────────────────────────── CSS ─────────────────────────── */
const CSS = `
/* shared utils */
.eyebrow { font-family:var(--sans); font-weight:700; font-size:13px; letter-spacing:.24em; text-transform:uppercase; color:var(--muted); }
.sec { padding-block:clamp(64px,8vw,128px); }
.sechead { display:flex; justify-content:space-between; align-items:flex-end; gap:30px; margin-bottom:clamp(40px,4.5vw,72px); border-bottom:1px solid var(--line-2); padding-bottom:26px; }
.sechead-l { display:flex; flex-direction:column; gap:18px; }
.sectitle { font-family:var(--serif); font-weight:460; font-size:clamp(48px,7vw,116px); line-height:.9; letter-spacing:-.025em; margin:0; }
.sectitle em { font-style:italic; font-weight:430; }
.sectitle .sc { font-family:var(--sans); font-weight:700; font-size:.24em; vertical-align:super; color:var(--lime); }
.seclink { font-family:var(--sans); font-weight:700; font-size:13px; letter-spacing:.18em; text-transform:uppercase; display:inline-flex; align-items:center; gap:10px; white-space:nowrap; padding-bottom:6px; color:var(--muted-2); transition:color .2s; }
.seclink:hover { color:var(--lime); }
.seclink .arr { transition:transform .25s ease; }
.seclink:hover .arr { transform:translateX(4px); }
.band-head { display:grid; grid-template-columns:1fr 1fr; gap:30px; align-items:end; margin-bottom:clamp(36px,4vw,60px); border-bottom:1px solid var(--line-2); padding-bottom:26px; }
.band-desc { color:var(--muted-2); font-size:18px; line-height:1.55; max-width:42ch; justify-self:end; }
.band-desc .seclink { margin-top:18px; display:inline-flex; }

/* ── hero ── */
.hero { padding-top:clamp(48px,7vw,96px); padding-bottom:clamp(40px,5vw,72px); }
.hero-top { display:flex; justify-content:space-between; align-items:baseline; padding-bottom:clamp(26px,3vw,44px); border-bottom:1px solid var(--line); }
.hero-top-r { font-family:var(--sans); font-weight:700; font-size:13px; letter-spacing:.22em; text-transform:uppercase; color:var(--muted); }
.hero-line { font-family:var(--serif); font-weight:430; font-size:clamp(48px,9.2vw,164px); line-height:.98; letter-spacing:-.025em; margin:clamp(34px,5vw,74px) 0 0; max-width:17ch; }
.hero-line .hi { font-style:italic; }
.hero-line .hpin { color:var(--lime); font-style:normal; }
.hero-foot { display:grid; grid-template-columns:1fr auto; gap:48px; align-items:end; margin-top:clamp(40px,5vw,86px); padding-top:30px; border-top:1px solid var(--line); }
.standfirst { display:flex; gap:34px; max-width:760px; }
.standfirst-dc { font-family:var(--serif); font-weight:500; font-size:60px; line-height:.8; color:var(--lime); flex:none; }
.standfirst p { margin:0; font-size:17px; line-height:1.6; color:var(--muted-2); max-width:48ch; }
.standfirst p b { color:var(--text); font-weight:600; }
.hero-btn { display:inline-flex; align-items:center; gap:12px; font-family:var(--sans); font-weight:600; font-size:14px; letter-spacing:.06em; text-transform:uppercase; padding:15px 26px; border:1.5px solid var(--line-2); border-radius:999px; white-space:nowrap; transition:all .25s; color:var(--text); }
.hero-btn:hover { background:var(--lime); color:var(--bg); border-color:var(--lime); }
.hero-btn .arr { transition:transform .25s; }
.hero-btn:hover .arr { transform:translate(3px,-3px); }

/* ── clients logo strip ── */
.clients { border-top:1px solid var(--line); border-bottom:1px solid var(--line); padding-block:0; overflow:hidden; }
@keyframes marquee-scroll { to { transform:translateX(-50%); } }
.marquee-track { display:flex; width:max-content; animation:marquee-scroll 32s linear infinite; align-items:center; gap:0; }
.clients:hover .marquee-track { animation-play-state:paused; }
.logo-item { display:flex; align-items:center; justify-content:center; flex-shrink:0; height:72px; padding-left:56px; padding-right:56px; border-right:1px solid var(--line); }
.logo-item img { max-height:48px; width:auto; max-width:160px; object-fit:contain; display:block; opacity:1; }

/* ── featured works ── */
.project { display:grid; grid-template-columns:1fr 1fr; gap:clamp(34px,5vw,90px); align-items:center; padding-block:clamp(48px,5vw,80px); border-bottom:1px solid var(--line); }
.project:first-of-type { padding-top:0; }
.project.flip .proj-media { order:2; }
.proj-media { width:100%; }
.proj-img { width:100%; aspect-ratio:16/10; border-radius:4px; overflow:hidden; border:1px solid var(--line); background:var(--bg-2); position:relative; cursor:pointer; }
.proj-img img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; transition:transform .5s ease; }
.proj-img:hover img { transform:scale(1.03); }
.proj-img-overlay { position:absolute; inset:0; background:rgba(0,0,0,.3); opacity:0; transition:opacity .3s; display:flex; align-items:center; justify-content:center; z-index:2; }
.proj-img:hover .proj-img-overlay { opacity:1; }
.proj-pill { border:1px solid rgba(255,255,255,.5); border-radius:100px; padding:10px 24px; font-size:11px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:#fff; }
.proj-info { display:flex; flex-direction:column; }
.proj-meta { display:flex; justify-content:space-between; font-family:var(--sans); font-weight:700; font-size:13px; letter-spacing:.16em; text-transform:uppercase; color:var(--muted); padding-bottom:22px; border-bottom:1px solid var(--line); }
.proj-cat { font-family:var(--sans); font-weight:700; font-size:13px; letter-spacing:.2em; text-transform:uppercase; color:var(--lime); margin-top:26px; }
.proj-name { font-family:var(--serif); font-weight:460; font-size:clamp(36px,4.4vw,68px); line-height:.98; letter-spacing:-.02em; margin:16px 0 0; }
.proj-name em { font-style:italic; font-weight:430; }
.proj-desc { font-size:18px; line-height:1.55; color:var(--muted-2); max-width:46ch; margin:22px 0 0; }
.proj-cta { font-family:var(--sans); font-weight:700; font-size:13px; letter-spacing:.18em; text-transform:uppercase; display:inline-flex; align-items:center; gap:10px; margin-top:34px; color:var(--text); background:none; border:none; cursor:pointer; padding:0; }
.proj-cta::before { content:""; width:38px; height:1.5px; background:currentColor; margin-right:4px; transition:width .25s; }
.proj-cta:hover { color:var(--lime); }
.proj-cta:hover::before { width:54px; }
.proj-cta .arr { transition:transform .25s; }
.proj-cta:hover .arr { transform:translateX(5px); }

/* ── case study modal ── */
.cs-overlay { position:fixed; top:0; left:0; width:100%; height:100%; z-index:9999; background:rgba(0,0,0,.85); overflow-y:scroll; overflow-x:hidden; overscroll-behavior:contain; opacity:0; pointer-events:none; transition:opacity .35s; }
.cs-overlay.open { opacity:1; pointer-events:all; }
.cs-panel { width:68%; max-width:820px; margin:0 auto; background:var(--panel); }
.cs-bar { position:sticky; top:0; z-index:10; display:flex; justify-content:space-between; align-items:center; padding:16px 24px; background:var(--panel); border-bottom:1px solid var(--line); }
.cs-bar-l { display:flex; align-items:center; gap:16px; }
.cs-bar-label { font-size:10px; letter-spacing:3px; text-transform:uppercase; color:var(--muted); font-weight:500; }
.cs-bar-sep { width:1px; height:12px; background:var(--line-2); }
.cs-bar-title { font-size:12px; font-weight:600; color:var(--muted-2); }
.cs-close { width:34px; height:34px; border:1px solid var(--line-2); border-radius:50%; background:none; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background .2s; flex-shrink:0; }
.cs-close:hover { background:rgba(255,255,255,.08); }
.cs-close svg { width:11px; height:11px; stroke:var(--text); stroke-width:2; }
.cs-body { width:100%; padding-bottom:80px; }
.cs-jpg { width:100%; height:auto; display:block; }
@media(max-width:900px){ .cs-panel{ width:92%; } }
@media(max-width:640px){ .cs-panel{ width:96%; } .cs-bar{ padding:12px 16px; } .cs-bar-title{ display:none; } }

/* ── poster blasts preview ── */
.poster-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:clamp(12px,1.4vw,22px); }
.poster-cell { position:relative; aspect-ratio:3/4; border-radius:4px; overflow:hidden; border:1px solid var(--line); background:var(--bg-2); }
.poster-cell img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; transition:transform .45s ease; }
.poster-cell:hover img { transform:scale(1.04); }
.poster-cap { display:flex; justify-content:space-between; margin-top:14px; font-family:var(--sans); font-weight:700; font-size:11px; letter-spacing:.16em; text-transform:uppercase; color:var(--muted); }

/* ── logofolio preview ── */
.logo-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:1px; background:var(--line); border:1px solid var(--line); }
.logo-cell { background:var(--bg-2); aspect-ratio:1; overflow:hidden; position:relative; transition:background .25s; }
.logo-cell:hover { background:var(--panel); }
.logo-cell img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; }

/* ── prints preview ── */
.prints-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(16px,2vw,32px); }
.print-thumb { display:block; width:100%; aspect-ratio:5/4; border-radius:4px; overflow:hidden; border:1px solid var(--line); background:var(--bg-2); position:relative; }
.print-thumb img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; transition:transform .45s ease; }
.print-thumb:hover img { transform:scale(1.04); }
.print-cap { display:flex; justify-content:space-between; align-items:baseline; margin-top:18px; }
.print-cap-nm { font-family:var(--serif); font-weight:500; font-size:24px; }
.print-cap-ty { font-family:var(--sans); font-weight:600; font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); }

/* ── responsive ── */
@media (max-width:960px) {
  .hero-foot { grid-template-columns:1fr; gap:30px; }
  .project { grid-template-columns:1fr; gap:30px; }
  .project.flip .proj-media { order:0; }
  .band-head { grid-template-columns:1fr; }
  .band-desc { justify-self:start; }
  .poster-grid { grid-template-columns:repeat(2,1fr); }
  .logo-grid { grid-template-columns:repeat(3,1fr); }
  .prints-grid { grid-template-columns:1fr; }
}
@media (max-width:560px) {
  .standfirst { flex-direction:column; gap:16px; }
  .logo-grid { grid-template-columns:repeat(2,1fr); }
}
@media (prefers-reduced-motion:reduce) {
  * { animation:none !important; scroll-behavior:auto; }
}
`

/* ─────────────────────────── DATA ─────────────────────────── */
interface Project {
  num: string; reverse: boolean; heroImg: string;
  name: string; nameJsx: React.ReactNode; category: string; year: string; desc: string;
  caseStudyJpgs: string[];
}

const PROJECTS: Project[] = [
  {
    num:"01", reverse:false,
    heroImg:"https://framerusercontent.com/images/iCG93L1SDmSIMX66jwWHBiCT9Qg.png",
    name:"Ooty Literary Festival 2025",
    nameJsx:<>Ooty Literary<br /><em>Festival</em> 2025</>,
    category:"Event Identity — Print", year:"2025",
    desc:"Complete visual identity and print collateral for one of South India's most celebrated literary festivals.",
    caseStudyJpgs:["https://framerusercontent.com/images/mr6ZhXdrhRbPAfBxONFWOafufMU.jpg","https://framerusercontent.com/images/bAYQek0hh4jMFnECPytzaSkDVA.jpg","https://framerusercontent.com/images/45KwP2q2sxzo2GlIb57XQ3Y9LM.jpg","https://framerusercontent.com/images/08T6019tp3iEY1KeujFRxL7vZyU.jpg","https://framerusercontent.com/images/TvwlDG92iqMXBhiDELSW3tA8LpU.jpg"],
  },
  {
    num:"02", reverse:true,
    heroImg:"https://framerusercontent.com/images/FK1WfDh6KvCjYt0xGkGe0vXUME0.png",
    name:"TSI Racing",
    nameJsx:<>TSI <em>Racing</em></>,
    category:"Performance Identity", year:"2024",
    desc:"An identity system crafted to capture the intensity and energy of motorsport — built for speed, designed to last.",
    caseStudyJpgs:["https://framerusercontent.com/images/H8133if8rBdqDoZH0q2A3Xwsg.jpg","https://framerusercontent.com/images/Zjde9WkwRwve3gEIBZWMFhOPoNQ.jpg","https://framerusercontent.com/images/a3dm2QCzbau9wm2vFejFwQWepRk.jpg"],
  },
  {
    num:"03", reverse:false,
    heroImg:"https://framerusercontent.com/images/w7xZVt9Pb56vtXkTE7Mcdh8VW4A.jpg",
    name:"Amateur Vodka",
    nameJsx:<>Amateur <em>Vodka</em></>,
    category:"Brand Identity", year:"2024",
    desc:"Brand identity for a vodka that embraces rawness over perfection — bold, irreverent, unapologetically vivid.",
    caseStudyJpgs:["https://framerusercontent.com/images/68ppeT40cGUK3LXuE5RF19lZo.jpg","https://framerusercontent.com/images/TOHfPUmbkGuhN90VXEd2nV37TtM.jpg","https://framerusercontent.com/images/ynz38GzeHZ7wFO4lRgCtd6cGwc.jpg","https://framerusercontent.com/images/fuCkdM7RwmOp7yLWFiZf2Xf3ew.jpg","https://framerusercontent.com/images/XGTOSKsKsznvwl9e7A1BqQhAc0.jpg"],
  },
]

const LOGOS = [
  { src:"https://framerusercontent.com/images/NpG1HQ4cjYjKhxvn1ZKVxbJ4w3c.png", alt:"Client", maxH:28, maxW:130 },
  { src:"https://framerusercontent.com/images/tWIOtuc84bu5wMJ4ZOXbbBfhOfM.png", alt:"Flipkart", maxH:48, maxW:160 },
  { src:"https://framerusercontent.com/images/hI6KjQKWvvDVItkvKoG2nNS7F2E.png", alt:"Client", maxH:28, maxW:130 },
  { src:"https://framerusercontent.com/images/2K6RKz3HyAgkOYTyqkseZBHE0I.png", alt:"Swiggy", maxH:48, maxW:160 },
  { src:"https://framerusercontent.com/images/jW8M5IwHPZgfbvPEN2nDK5D78I.png", alt:"RCB", maxH:64, maxW:180 },
  { src:"https://framerusercontent.com/images/ljOdAoALCSidEtJkPZtXLbgJs.png", alt:"Client", maxH:28, maxW:130 },
  { src:"https://framerusercontent.com/images/FmyFvbYkOpTGutkvLRtSSbZsMA.png", alt:"Client", maxH:28, maxW:130 },
  { src:"https://framerusercontent.com/images/KP7TKJUOUUp3QuoVHlCd2HcvCQ.png", alt:"Client", maxH:48, maxW:160 },
  { src:"https://framerusercontent.com/images/xs9NdWKisvP9XK6WFbmT51sME.png", alt:"Bhadra", maxH:48, maxW:160 },
  { src:"https://framerusercontent.com/images/gI0zN7jxeygdDSC0J4BtbBZKPU.png", alt:"Bigbasket", maxH:48, maxW:160 },
  { src:"https://framerusercontent.com/images/59nwIFnZtPBF4ivmylwQgO6WHdg.png", alt:"Client", maxH:28, maxW:130 },
  { src:"https://framerusercontent.com/images/iKCuu98uawW9Kwl23lJHkM0PNs.png", alt:"Client", maxH:28, maxW:130 },
]

const POSTER_PREVIEW = [
  { src:"https://framerusercontent.com/images/iE8GUSpBXPWoEaOp3ETJJ8aGTOE.jpg", label:"Campaign" },
  { src:"https://framerusercontent.com/images/d2bcSJjhm0onP6f61sdww3vQs6M.jpg", label:"Event" },
  { src:"https://framerusercontent.com/images/61he7TNOhjhfI2U2vnHpNqKuSc.png", label:"Type" },
  { src:"https://framerusercontent.com/images/tVjVtBfwREtxYYXWsFAl9grcTKM.jpg", label:"Editorial" },
]

const LOGO_PREVIEW = [
  "https://framerusercontent.com/images/eFZ92q2N8bxRJHw9JnByUDHvw.png",
  "https://framerusercontent.com/images/OCZ88SSUXOo8aOFNIViMiabUc.png",
  "https://framerusercontent.com/images/xXDCe5kZhQfC5GCuwowAbxwyY.png",
  "https://framerusercontent.com/images/FaJ1ijBzfaNIZCiuBitzVesO9uc.png",
  "https://framerusercontent.com/images/CP1vcXzPrO2HBVkaFXEv4xXpZNI.png",
  "https://framerusercontent.com/images/aOTIngabA5SMqz9yF0CI7rYuoA.png",
  "https://framerusercontent.com/images/XnQqTgOYXLHiV7iZhnzHDQeeQ.png",
  "https://framerusercontent.com/images/Qb0KTsxZWXd1BxfpunV3jfVrYo4.png",
  "https://framerusercontent.com/images/6MdttJzDk3pNuAlxmU4bR6rdXHY.png",
  "https://framerusercontent.com/images/Q5UnOQbwdsE1txonW6Q2l25w.png",
]

const PRINTS_PREVIEW = [
  { src:"https://framerusercontent.com/images/7EqiVItbgXxfZkbhQsP6AVUfDc.jpg", name:"Shopping Bag", type:"Packaging" },
  { src:"https://framerusercontent.com/images/Dw2W33KNLlJXfYae1uICn728Bck.jpg", name:"Mango Box", type:"Packaging" },
  { src:"https://framerusercontent.com/images/WUBnVKXW2iA5Y7z5pc6bl9bVVg.jpg", name:"Car Livery", type:"Print — Wrap" },
]

/* ─────────────────────────── CASE STUDY MODAL ─────────────────────────── */
function CaseStudyModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const touchStartY = useRef(0)

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden"
      requestAnimationFrame(() => { if (overlayRef.current) { overlayRef.current.scrollTop = 0; overlayRef.current.focus() } })
    } else {
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
    }
    return () => { document.body.style.overflow = ""; document.documentElement.style.overflow = "" }
  }, [project])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [onClose])

  useEffect(() => {
    if (!project) return
    const onWheel = (e: WheelEvent) => { e.preventDefault(); e.stopPropagation(); if (overlayRef.current) overlayRef.current.scrollTop += e.deltaY }
    window.addEventListener("wheel", onWheel, { passive: false, capture: true })
    return () => window.removeEventListener("wheel", onWheel, { capture: true })
  }, [project])

  useEffect(() => {
    if (!project) return
    const onTouchStart = (e: TouchEvent) => { touchStartY.current = e.touches[0].clientY }
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      const delta = touchStartY.current - e.touches[0].clientY
      touchStartY.current = e.touches[0].clientY
      if (overlayRef.current) overlayRef.current.scrollTop += delta
    }
    window.addEventListener("touchstart", onTouchStart, { passive: true, capture: true })
    window.addEventListener("touchmove", onTouchMove, { passive: false, capture: true })
    return () => { window.removeEventListener("touchstart", onTouchStart, { capture: true }); window.removeEventListener("touchmove", onTouchMove, { capture: true }) }
  }, [project])

  return (
    <div className={`cs-overlay${project ? " open" : ""}`} ref={overlayRef}
      onClick={e => { if (e.target === overlayRef.current) onClose() }} tabIndex={-1} style={{outline:"none"}}>
      <div className="cs-panel">
        <div className="cs-bar">
          <div className="cs-bar-l">
            <span className="cs-bar-label">Case Study</span>
            <div className="cs-bar-sep" />
            {project && <span className="cs-bar-title">{project.name} — {project.year}</span>}
          </div>
          <button className="cs-close" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 11 11" fill="none"><path d="M1 1L10 10M10 1L1 10" strokeLinecap="round"/></svg>
          </button>
        </div>
        <div className="cs-body">
          {project?.caseStudyJpgs?.map((src, i) => (
            <img key={i} className="cs-jpg" src={src} alt={`${project.name} ${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────── PAGE ─────────────────────────── */
export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <>
      <Head>
        <title>Sarang Pedulwar — Art Director &amp; Illustrator</title>
        <meta name="description" content="Art Director, Designer & Illustrator based in Bangalore. Crafting bold brand identities, campaigns, and visual systems." />
        <meta property="og:title" content="Sarang Pedulwar — Art Director & Illustrator" />
        <meta property="og:description" content="8+ years crafting bold brand identities, campaigns, and visual systems for companies that dare to stand out." />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <Nav />

      <main id="top">
        {/* ── HERO ── */}
        <section className="hero wrap">
          <div className="hero-top">
            <span className="eyebrow">The Statement</span>
            <span className="hero-top-r">Art Director — Illustrator</span>
          </div>
          <h1 className="hero-line">
            Design is the argument.<br />
            <span className="hi">I make it convincing<span className="hpin">.</span></span>
          </h1>
          <div className="hero-foot">
            <div className="standfirst">
              <span className="standfirst-dc">&ldquo;</span>
              <p>For eight years I&rsquo;ve built <b>bold brand identities</b>, sharp campaigns, and visual stories for brands that dare to stand out — based in Bangalore, working with the world.</p>
            </div>
            <a className="hero-btn" href="/contact">About me <span className="arr">↗</span></a>
          </div>
        </section>

        {/* ── CLIENTS LOGO STRIP ── */}
        <section className="clients">
          <div className="marquee-track">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div key={i} className="logo-item" aria-hidden={i >= LOGOS.length}>
                <img src={logo.src} alt={logo.alt} style={{maxHeight: logo.maxH, maxWidth: logo.maxW}} />
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURED WORKS ── */}
        <section className="sec wrap" id="work">
          <div className="sechead">
            <div className="sechead-l">
              <span className="eyebrow">§ 01 — Selected Projects</span>
              <h2 className="sectitle">Featured <em>Works</em><span className="sc">©</span></h2>
            </div>
            <a className="seclink" href="/work">See all <span className="arr">→</span></a>
          </div>

          {PROJECTS.map(p => (
            <article key={p.num} className={`project${p.reverse ? " flip" : ""}`}>
              <div className="proj-media">
                <div className="proj-img" onClick={() => setActiveProject(p)} role="button" tabIndex={0}
                  onKeyDown={e => e.key === "Enter" && setActiveProject(p)}>
                  {p.heroImg && <img src={p.heroImg} alt={p.name} loading="lazy" />}
                  <div className="proj-img-overlay"><div className="proj-pill">View Case Study</div></div>
                </div>
              </div>
              <div className="proj-info">
                <div className="proj-meta"><span>{p.num}</span><span>{p.year}</span></div>
                <div className="proj-cat">{p.category}</div>
                <h3 className="proj-name">{p.nameJsx}</h3>
                <p className="proj-desc">{p.desc}</p>
                <button className="proj-cta" onClick={() => setActiveProject(p)}>
                  View case study <span className="arr">→</span>
                </button>
              </div>
            </article>
          ))}
        </section>

        {/* ── POSTER BLASTS ── */}
        <section className="sec wrap" id="posters" style={{paddingTop:0}}>
          <div className="band-head">
            <h2 className="sectitle">Poster <em>Blasts</em></h2>
            <div className="band-desc">
              Campaign posters, event graphics, and one-off moments designed to stop the scroll.
              <br /><a className="seclink" href="/gallery">View gallery <span className="arr">→</span></a>
            </div>
          </div>
          <div className="poster-grid">
            {POSTER_PREVIEW.map((p, i) => (
              <div key={i}>
                <div className="poster-cell">
                  <img src={p.src} alt={`Poster ${i + 1}`} loading="lazy" />
                </div>
                <div className="poster-cap"><span>{String(i + 1).padStart(2,"0")}</span><span>{p.label}</span></div>
              </div>
            ))}
          </div>
        </section>

        {/* ── LOGOFOLIO ── */}
        <section className="sec wrap" id="logofolio" style={{paddingTop:0}}>
          <div className="band-head">
            <h2 className="sectitle">Logo<em>folio</em></h2>
            <div className="band-desc">
              A curated set of wordmarks, symbols, and lettermarks built for clarity and longevity.
              <br /><a className="seclink" href="/logos">View logofolio <span className="arr">→</span></a>
            </div>
          </div>
          <div className="logo-grid">
            {LOGO_PREVIEW.map((src, i) => (
              <div key={i} className="logo-cell">
                <img src={src} alt={`Logo ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        {/* ── PRINTS ── */}
        <section className="sec wrap" id="prints" style={{paddingTop:0}}>
          <div className="band-head">
            <h2 className="sectitle"><em>Prints</em></h2>
            <div className="band-desc">
              A focused collection of packaging, print collateral, and crafted brand objects.
              <br /><a className="seclink" href="/prints">View all prints <span className="arr">→</span></a>
            </div>
          </div>
          <div className="prints-grid">
            {PRINTS_PREVIEW.map((p, i) => (
              <div key={i} className="print-item">
                <a href="/prints" className="print-thumb">
                  <img src={p.src} alt={p.name} loading="lazy" />
                </a>
                <div className="print-cap">
                  <span className="print-cap-nm">{p.name}</span>
                  <span className="print-cap-ty">{p.type}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  )
}
