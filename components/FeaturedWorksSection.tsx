"use client"
import { useState, useEffect, useRef } from "react"

const CSS = `
.fw-wrap { width:100%; padding:0 24px 80px; box-sizing:border-box; font-family:inherit; background:#000; }
.fw-topbar { display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; }
.fw-topbar span { font-size:11px; color:rgba(255,255,255,0.3); letter-spacing:3px; text-transform:uppercase; font-weight:500; }
.fw-topbar a { font-size:11px; color:rgba(255,255,255,0.3); text-decoration:none; letter-spacing:2px; text-transform:uppercase; font-weight:500; border-bottom:1px solid rgba(255,255,255,0.15); padding-bottom:1px; }
.fw-h2 { margin:0; font-size:clamp(52px,10vw,130px); font-weight:800; color:#fff; line-height:0.88; letter-spacing:-4px; }
.fw-divider { width:100%; height:1px; background:rgba(255,255,255,0.08); margin-top:36px; }
.fw-row { display:flex; flex-direction:row; align-items:center; padding:48px 0; border-bottom:1px solid rgba(255,255,255,0.07); }
.fw-row-reverse { flex-direction:row-reverse; }
.fw-img { flex-shrink:0; width:58%; position:relative; aspect-ratio:16/10; background:#141414; overflow:hidden; cursor:pointer; transition:background 0.35s ease; text-decoration:none; display:block; border:none; padding:0; }
.fw-img:hover { background:#1e1e1e; }
.fw-img-bg { position:absolute; inset:0; background:linear-gradient(135deg,#161616,#202020); }
.fw-img img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; transition:transform 0.5s ease; }
.fw-img:hover img { transform:scale(1.03); }
.fw-img-num { position:absolute; bottom:16px; right:20px; font-size:clamp(40px,8vw,100px); font-weight:800; color:rgba(255,255,255,0.04); line-height:1; letter-spacing:-3px; user-select:none; z-index:1; }
.fw-img-overlay { position:absolute; inset:0; background:rgba(0,0,0,0.3); opacity:0; transition:opacity 0.35s ease; display:flex; align-items:center; justify-content:center; z-index:2; }
.fw-img:hover .fw-img-overlay { opacity:1; }
.fw-pill { border:1px solid rgba(255,255,255,0.5); border-radius:100px; padding:10px 24px; font-size:11px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:#fff; }
.fw-info { flex:1; display:flex; flex-direction:column; justify-content:space-between; min-height:260px; }
.fw-il { padding:0 0 0 48px; }
.fw-ir { padding:0 48px 0 0; }
.fw-meta { display:flex; justify-content:space-between; }
.fw-meta span { font-size:11px; color:rgba(255,255,255,0.2); font-weight:600; letter-spacing:2px; }
.fw-cat { font-size:10px; color:rgba(255,255,255,0.3); letter-spacing:2.5px; text-transform:uppercase; font-weight:500; margin-bottom:10px; }
.fw-name { margin:0 0 16px; font-size:clamp(32px,4vw,56px); font-weight:800; color:#fff; line-height:0.9; letter-spacing:-2px; }
.fw-desc { margin:0; font-size:13px; line-height:1.7; color:rgba(255,255,255,0.4); }
.fw-cta { display:inline-flex; align-items:center; gap:6px; font-size:11px; font-weight:600; color:rgba(255,255,255,0.5); letter-spacing:2px; text-transform:uppercase; border-bottom:1px solid rgba(255,255,255,0.15); padding-bottom:2px; text-decoration:none; cursor:pointer; background:none; border-left:none; border-right:none; border-top:none; font-family:inherit; }
.cs-overlay { position:fixed; top:0; left:0; width:100%; height:100%; z-index:9999; background:rgba(0,0,0,0.85); overflow-y:scroll; overflow-x:hidden; overscroll-behavior:contain; -webkit-overflow-scrolling:touch; opacity:0; pointer-events:none; transition:opacity 0.35s ease; }
.cs-overlay.open { opacity:1; pointer-events:all; }
.cs-panel { width:68%; max-width:820px; margin:0 auto; background:#111; }
.cs-bar { position:sticky; top:0; z-index:10; display:flex; justify-content:space-between; align-items:center; padding:16px 24px; background:#111; border-bottom:1px solid rgba(255,255,255,0.08); }
.cs-bar-left { display:flex; align-items:center; gap:16px; }
.cs-bar-label { font-size:10px; letter-spacing:3px; text-transform:uppercase; color:rgba(255,255,255,0.3); font-weight:500; }
.cs-bar-sep { width:1px; height:12px; background:rgba(255,255,255,0.15); }
.cs-bar-title { font-size:12px; font-weight:600; color:rgba(255,255,255,0.6); }
.cs-close { width:34px; height:34px; border:1px solid rgba(255,255,255,0.18); border-radius:50%; background:none; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background 0.2s; flex-shrink:0; }
.cs-close:hover { background:rgba(255,255,255,0.1); }
.cs-close svg { width:11px; height:11px; stroke:#fff; stroke-width:2; }
.cs-body { width:100%; padding-bottom:80px; }
.cs-jpg { width:100%; height:auto; display:block; vertical-align:top; }
@media(max-width:900px){ .cs-panel{ width:90%; } }
@media(max-width:768px){
  .fw-wrap{padding:0 16px 60px;}
  .fw-h2{font-size:clamp(38px,13vw,64px);letter-spacing:-2px;}
  .fw-row{flex-direction:column!important;padding:32px 0;}
  .fw-img{width:100%!important;aspect-ratio:4/3;}
  .fw-info{min-height:unset;padding:24px 0 0!important;gap:20px;justify-content:flex-start;}
  .fw-il,.fw-ir{padding:24px 0 0;}
  .fw-name{font-size:clamp(28px,8vw,40px);}
  .cs-panel { width:96%; }
  .cs-bar { padding:12px 16px; }
  .cs-bar-title { display:none; }
}
`

interface Project {
  slug: string; num: string; reverse: boolean; heroImg: string;
  name: string; category: string; year: string; desc: string;
  caseStudyJpgs: string[];
}

const PROJECTS: Project[] = [
  {
    num:"01", slug:"ooty", reverse:false,
    heroImg:"https://framerusercontent.com/images/iCG93L1SDmSIMX66jwWHBiCT9Qg.png",
    name:"Ooty Literary Festival 2025", category:"Event Identity · Print", year:"2025",
    desc:"Complete visual identity and print collateral for one of South India's most celebrated literary festivals.",
    caseStudyJpgs:["https://framerusercontent.com/images/mr6ZhXdrhRbPAfBxONFWOafufMU.jpg","https://framerusercontent.com/images/bAYQek0hh4jMFnECPytzaSkDVA.jpg","https://framerusercontent.com/images/45KwP2q2sxzo2GlIb57XQ3Y9LM.jpg","https://framerusercontent.com/images/08T6019tp3iEY1KeujFRxL7vZyU.jpg","https://framerusercontent.com/images/TvwlDG92iqMXBhiDELSW3tA8LpU.jpg"]
  },
  {
    num:"02", slug:"tsi-racing", reverse:true,
    heroImg:"https://framerusercontent.com/images/FK1WfDh6KvCjYt0xGkGe0vXUME0.png",
    name:"TSI Racing", category:"Performance Identity", year:"2024",
    desc:"An identity system crafted to capture the intensity and energy of motorsport — built for speed, designed to last.",
    caseStudyJpgs:["https://framerusercontent.com/images/H8133if8rBdqDoZH0q2A3Xwsg.jpg","https://framerusercontent.com/images/Zjde9WkwRwve3gEIBZWMFhOPoNQ.jpg","https://framerusercontent.com/images/a3dm2QCzbau9wm2vFejFwQWepRk.jpg"]
  },
  {
    num:"03", slug:"amateur-vodka", reverse:false,
    heroImg:"https://framerusercontent.com/images/w7xZVt9Pb56vtXkTE7Mcdh8VW4A.jpg",
    name:"Amateur Vodka", category:"Brand Identity", year:"2024",
    desc:"Brand identity for a vodka label that embraces rawness over perfection — bold, unfiltered, and unapologetically original.",
    caseStudyJpgs:["https://framerusercontent.com/images/68ppeT40cGUK3LXuE5RF19lZo.jpg","https://framerusercontent.com/images/TOHfPUmbkGuhN90VXEd2nV37TtM.jpg","https://framerusercontent.com/images/ynz38GzeHZ7wFO4lRgCtd6cGwc.jpg","https://framerusercontent.com/images/fuCkdM7RwmOp7yLWFiZf2Xf3ew.jpg","https://framerusercontent.com/images/XGTOSKsKsznvwl9e7A1BqQhAc0.jpg"]
  },
]

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
    <div className={`cs-overlay${project ? " open" : ""}`} ref={overlayRef} onClick={e => { if (e.target === overlayRef.current) onClose() }} tabIndex={-1} style={{outline:"none"}}>
      <div className="cs-panel">
        <div className="cs-bar">
          <div className="cs-bar-left">
            <span className="cs-bar-label">Case Study</span>
            <div className="cs-bar-sep"/>
            {project && <span className="cs-bar-title">{project.name} — {project.year}</span>}
          </div>
          <button className="cs-close" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 11 11" fill="none"><path d="M1 1L10 10M10 1L1 10" strokeLinecap="round"/></svg>
          </button>
        </div>
        <div className="cs-body">
          {project?.caseStudyJpgs?.map((src, i) => (
            <img key={i} className="cs-jpg" src={src} alt={`${project.name} ${i + 1}`}/>
          ))}
        </div>
      </div>
    </div>
  )
}

function Row({ p, onOpen }: { p: Project; onOpen: (p: Project) => void }) {
  return (
    <div className={`fw-row${p.reverse ? " fw-row-reverse" : ""}`}>
      <button className="fw-img" onClick={() => onOpen(p)}>
        {p.heroImg ? <img src={p.heroImg} alt={p.name} /> : <div className="fw-img-bg" />}
        <span className="fw-img-num">{p.num}</span>
        <div className="fw-img-overlay"><div className="fw-pill">View Case Study</div></div>
      </button>
      <div className={`fw-info ${p.reverse ? "fw-ir" : "fw-il"}`}>
        <div className="fw-meta"><span>{p.num}</span><span>{p.year}</span></div>
        <div>
          <div className="fw-cat">{p.category}</div>
          <h3 className="fw-name">{p.name}</h3>
          <p className="fw-desc">{p.desc}</p>
        </div>
        <button className="fw-cta" onClick={() => onOpen(p)}>View case study →</button>
      </div>
    </div>
  )
}

export default function FeaturedWorksSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="fw-wrap">
        <div className="fw-topbar">
          <span>Selected projects</span>
          <a href="/work">See all →</a>
        </div>
        <h2 className="fw-h2">Featured Works©</h2>
        <div className="fw-divider" />
        {PROJECTS.map(p => <Row key={p.num} p={p} onOpen={setActiveProject} />)}
      </div>
      <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  )
}
