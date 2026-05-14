"use client"
import { useState, useEffect, useRef } from "react"

const CSS = `
.wp-wrap { width:100%; background:#000; min-height:100vh; font-family:inherit; padding:120px 24px 120px; box-sizing:border-box; }
.wp-h1 { margin:0 0 20px 0; font-size:clamp(52px,10vw,140px); font-weight:800; color:#fff; line-height:0.88; letter-spacing:-4px; }
.wp-meta { display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:48px; gap:24px; flex-wrap:wrap; }
.wp-meta p { margin:0; font-size:13px; line-height:1.6; color:rgba(255,255,255,0.45); max-width:480px; }
.wp-meta span { font-size:11px; color:rgba(255,255,255,0.25); letter-spacing:2px; text-transform:uppercase; font-weight:500; white-space:nowrap; }
.wp-divider { width:100%; height:1px; background:rgba(255,255,255,0.08); margin-bottom:40px; }
.wp-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:48px 32px; }
.wp-card { display:block; text-decoration:none; cursor:pointer; }
.wp-card-img { width:100%; aspect-ratio:4/3; background:#161616; border:1px solid rgba(255,255,255,0.07); border-radius:6px; overflow:hidden; position:relative; margin-bottom:12px; transition:background 0.3s ease; }
.wp-card:hover .wp-card-img { background:#1e1e1e; }
.wp-card-bg { position:absolute; inset:0; background:linear-gradient(135deg,#181818 0%,#222 100%); }
.wp-card-thumb { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.5s ease; }
.wp-card:hover .wp-card-thumb { transform:scale(1.03); }
.wp-card-num { position:absolute; top:12px; left:14px; font-size:11px; color:rgba(255,255,255,0.2); font-weight:600; letter-spacing:1px; }
.wp-card-overlay { position:absolute; inset:0; background:rgba(0,0,0,0.35); opacity:0; transition:opacity 0.3s ease; display:flex; align-items:center; justify-content:center; }
.wp-card:hover .wp-card-overlay { opacity:1; }
.wp-card-pill { border:1px solid rgba(255,255,255,0.4); border-radius:100px; padding:10px 22px; font-size:11px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:#fff; }
.wp-card-info { display:flex; justify-content:space-between; align-items:flex-start; gap:12px; }
.wp-card-title { font-size:16px; font-weight:600; color:rgba(255,255,255,0.85); margin-bottom:4px; transition:color 0.2s ease; }
.wp-card:hover .wp-card-title { color:#fff; }
.wp-card-cat { font-size:10px; color:rgba(255,255,255,0.35); font-weight:500; letter-spacing:1.5px; text-transform:uppercase; }
.wp-card-year { font-size:10px; color:rgba(255,255,255,0.2); white-space:nowrap; padding-top:2px; }
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
  .wp-wrap { padding:80px 16px 80px; }
  .wp-h1 { font-size:clamp(36px,12vw,64px); letter-spacing:-2px; }
  .wp-grid { grid-template-columns:1fr; gap:40px; }
  .wp-card-img { aspect-ratio:3/2; }
  .cs-panel { width:96%; }
  .cs-bar { padding:12px 16px; }
  .cs-bar-title { display:none; }
}
`

interface Project {
  slug: string; title: string; category: string; year: string;
  thumbImg?: string; caseStudyJpgs?: string[];
}

const PROJECTS: Project[] = [
  { slug:"ooty", title:"Ooty Literary Festival", category:"Event Identity · Print", year:"2025", thumbImg:"https://framerusercontent.com/images/iCG93L1SDmSIMX66jwWHBiCT9Qg.png", caseStudyJpgs:["https://framerusercontent.com/images/mr6ZhXdrhRbPAfBxONFWOafufMU.jpg","https://framerusercontent.com/images/bAYQek0hh4jMFnECPytzaSkDVA.jpg","https://framerusercontent.com/images/45KwP2q2sxzo2GlIb57XQ3Y9LM.jpg","https://framerusercontent.com/images/08T6019tp3iEY1KeujFRxL7vZyU.jpg","https://framerusercontent.com/images/TvwlDG92iqMXBhiDELSW3tA8LpU.jpg"] },
  { slug:"tsi-racing", title:"TSI Racing", category:"Performance Identity", year:"2024", thumbImg:"https://framerusercontent.com/images/FK1WfDh6KvCjYt0xGkGe0vXUME0.png", caseStudyJpgs:["https://framerusercontent.com/images/H8133if8rBdqDoZH0q2A3Xwsg.jpg","https://framerusercontent.com/images/Zjde9WkwRwve3gEIBZWMFhOPoNQ.jpg","https://framerusercontent.com/images/a3dm2QCzbau9wm2vFejFwQWepRk.jpg"] },
  { slug:"tsi-rally", title:"TSI Rally", category:"Rally Performance Identity", year:"2024", thumbImg:"https://framerusercontent.com/images/PLf9aRDamD9J1hBnK2IkJD7HArA.jpg", caseStudyJpgs:["https://framerusercontent.com/images/SkzoEPIK2gJ4HBRU2svz6pklluQ.jpg","https://framerusercontent.com/images/znTSZC1quarnu0Ef5KdGmOTUBU.jpg","https://framerusercontent.com/images/juQhV68D7WtzkQiF0IBi8Ew2Mic.jpg"] },
  { slug:"amateur-vodka", title:"Amateur Vodka", category:"Brand Identity", year:"2024", thumbImg:"https://framerusercontent.com/images/w7xZVt9Pb56vtXkTE7Mcdh8VW4A.jpg", caseStudyJpgs:["https://framerusercontent.com/images/68ppeT40cGUK3LXuE5RF19lZo.jpg","https://framerusercontent.com/images/TOHfPUmbkGuhN90VXEd2nV37TtM.jpg","https://framerusercontent.com/images/ynz38GzeHZ7wFO4lRgCtd6cGwc.jpg","https://framerusercontent.com/images/fuCkdM7RwmOp7yLWFiZf2Xf3ew.jpg","https://framerusercontent.com/images/XGTOSKsKsznvwl9e7A1BqQhAc0.jpg"] },
  { slug:"bigbasket", title:"Bigbasket", category:"Brand Identity · Campaign", year:"2024", thumbImg:"https://framerusercontent.com/images/YjZiMiikKaGSfRevNPYt5t7aD3s.jpg", caseStudyJpgs:["https://framerusercontent.com/images/xaoRos7zBgIhAWUj933RMWaWkg.jpg","https://framerusercontent.com/images/QrWsrlC32n6W6qkIoI750xVdsY.jpg","https://framerusercontent.com/images/IHpjQBK7vozNeqBaDKRgfwVdk.jpg"] },
  { slug:"cbd", title:"CBD — Central Bar District", category:"Launch Campaign", year:"2024", thumbImg:"https://framerusercontent.com/images/THzFwKFxYoCGgZrbTYh4dzUSeO4.jpg", caseStudyJpgs:["https://framerusercontent.com/images/LQZMWTGm7qjrPwH08BK2pFGITa8.png","https://framerusercontent.com/images/q9GU1k9u7cJHMoCd75yOzNLm4GI.png","https://framerusercontent.com/images/HcMYbGj9rB6slnHqKzS23kh8Vo.png"] },
  { slug:"olf-2023", title:"Ooty Literary Festival 2023", category:"Festival Design · Print", year:"2023", thumbImg:"https://framerusercontent.com/images/YFCsHCrVuXe2obGgJhgo45KEyyI.jpg", caseStudyJpgs:["https://framerusercontent.com/images/hZIoUEpIMVucH7OfKYFuClh8.jpg","https://framerusercontent.com/images/NtUcm4UuuzO8FN629NwNjKhMDqQ.jpg","https://framerusercontent.com/images/vEDn2kqjNe3TF6uY5Lp3SzqcYY.jpg","https://framerusercontent.com/images/COqsYjOHJEbgjXeZLWMsTJrR04.jpg","https://framerusercontent.com/images/cveq9e1BwgU0PWFDrNVP1I9B5mE.jpg"] },
  { slug:"drivex", title:"DriveX", category:"Visual Identity", year:"2024", thumbImg:"https://framerusercontent.com/images/Nkpr9MhgKvVHhtcuiJQJEifkhU.jpg", caseStudyJpgs:["https://framerusercontent.com/images/tIW8yEQpSlcItuPHnk5z4L1SJU.jpg"] },
  { slug:"cureskin-pro", title:"CureSkin Pro", category:"Product · App Design", year:"2024", thumbImg:"https://framerusercontent.com/images/dZp11Q4M1VJMnYi4QzboGOHVTo.jpg", caseStudyJpgs:["https://framerusercontent.com/images/SJRzfUTtdIxOj2rTvS7Si2ip83E.jpg","https://framerusercontent.com/images/KZv0EnZ5TvinW6OFogaQdabiP4.jpg","https://framerusercontent.com/images/lewGP63EBQzA2RZTiF3s8xZkDzM.jpg","https://framerusercontent.com/images/Bn35CiyNkycfDowvxOo3J8O5EDg.jpg","https://framerusercontent.com/images/4nByDnRvJdKBn2PPgtmdPmr3EQ.jpg"] },
  { slug:"aukera", title:"Aukera", category:"Campaign & Brand Communication", year:"2023" },
  { slug:"swiggy", title:"Swiggy", category:"Digital Design · Emailers", year:"2024", thumbImg:"/images/Swiggy_CS_Thumb.jpg", caseStudyJpgs:["/images/Swiggy_CS_FP_1.jpg","/images/Swiggy_CS_FP_2.jpg","/images/Swiggy_CS_FP_3.jpg"] },
  { slug:"flipkart", title:"Flipkart", category:"Campaign Design", year:"2024" },
  { slug:"bbinstant", title:"bbInstant", category:"Brand Communication · Print", year:"2023", thumbImg:"/images/bbinstant_CS_Thumb.jpg", caseStudyJpgs:["/images/bbinstant_CS_FP_1.jpg","/images/bbinstant_CS_FP_2.jpg"] },
  { slug:"mobil", title:"Mobil — Pitch Work", category:"Loyalty Program · Brand Identity", year:"2024", thumbImg:"/images/Mobil_CS_Thumb.jpg", caseStudyJpgs:["/images/Mobil_CS_FP_1.jpg","/images/Mobil_CS_FP_2.jpg"] },
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
            {project && <span className="cs-bar-title">{project.title} — {project.year}</span>}
          </div>
          <button className="cs-close" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 11 11" fill="none"><path d="M1 1L10 10M10 1L1 10" strokeLinecap="round"/></svg>
          </button>
        </div>
        <div className="cs-body">
          {project?.caseStudyJpgs?.map((src, i) => (
            <img key={i} className="cs-jpg" src={src} alt={`${project.title} ${i + 1}`}/>
          ))}
          {project && (!project.caseStudyJpgs || project.caseStudyJpgs.length === 0) && (
            <div style={{padding:"80px 40px", textAlign:"center", color:"rgba(255,255,255,0.2)", fontSize:"13px"}}>Case study coming soon.</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function WorkPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      const slug = params.get("open")
      if (slug) { const found = PROJECTS.find(p => p.slug === slug); if (found) setActiveProject(found) }
    } catch (_) {}
  }, [])

  const handleCardClick = (e: React.MouseEvent, p: Project) => {
    e.preventDefault()
    setActiveProject(p)
    try { window.history.replaceState(null, "", `/work?open=${p.slug}`) } catch (_) {}
  }

  const handleClose = () => {
    setActiveProject(null)
    try { window.history.replaceState(null, "", "/work") } catch (_) {}
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:CSS}}/>
      <CaseStudyModal project={activeProject} onClose={handleClose}/>
      <div className="wp-wrap">
        <h1 className="wp-h1">Featured Works©</h1>
        <div className="wp-meta">
          <p>A collection of brand identities, campaigns, and visual systems crafted for bold businesses.</p>
          <span>{PROJECTS.length} Projects</span>
        </div>
        <div className="wp-divider"/>
        <div className="wp-grid">
          {PROJECTS.map((p, i) => (
            <a key={p.slug} href={`/work?open=${p.slug}`} className="wp-card" onClick={e => handleCardClick(e, p)}>
              <div className="wp-card-img">
                {p.thumbImg ? <img className="wp-card-thumb" src={p.thumbImg} alt={p.title}/> : <div className="wp-card-bg"/>}
                <span className="wp-card-num">{String(i+1).padStart(2,"0")}</span>
                <div className="wp-card-overlay"><div className="wp-card-pill">View Case Study</div></div>
              </div>
              <div className="wp-card-info">
                <div>
                  <div className="wp-card-title">{p.title}</div>
                  <div className="wp-card-cat">{p.category}</div>
                </div>
                <span className="wp-card-year">{p.year}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
