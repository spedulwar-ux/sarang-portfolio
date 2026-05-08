"use client"
import { useState, useEffect, useRef } from "react"

const CSS = `
.pp-wrap { width:100%; min-height:100vh; background-color:#000; background-image:linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px); background-size:48px 48px; font-family:inherit; box-sizing:border-box; position:relative; }
.pp-wrap::before { content:""; position:fixed; inset:0; background:radial-gradient(ellipse at 50% 40%, transparent 35%, rgba(0,0,0,0.7) 100%); pointer-events:none; z-index:0; }
.pp-inner { position:relative; z-index:1; max-width:1200px; margin:0 auto; padding:120px 24px 160px; box-sizing:border-box; }
.pp-eyebrow { display:flex; align-items:center; gap:16px; margin-bottom:24px; }
.pp-eyebrow-label { font-size:10px; letter-spacing:4px; text-transform:uppercase; color:rgba(255,255,255,0.25); font-weight:500; }
.pp-eyebrow-line { flex:1; max-width:80px; height:1px; background:rgba(255,255,255,0.1); }
.pp-h1 { margin:0 0 24px; font-size:clamp(80px,14vw,180px); font-weight:800; color:#fff; line-height:0.85; letter-spacing:-6px; }
.pp-h1 em { font-style:normal; color:transparent; -webkit-text-stroke:2px rgba(255,255,255,0.45); }
.pp-header-meta { display:flex; justify-content:space-between; align-items:flex-end; gap:24px; flex-wrap:wrap; padding-top:32px; border-top:1px solid rgba(255,255,255,0.07); margin-bottom:80px; }
.pp-header-desc { margin:0; font-size:13px; line-height:1.8; color:rgba(255,255,255,0.35); max-width:420px; }
.pp-count { font-size:11px; color:rgba(255,255,255,0.2); letter-spacing:2px; text-transform:uppercase; white-space:nowrap; }
.pp-filters { display:flex; gap:8px; margin-bottom:48px; flex-wrap:wrap; }
.pp-filter-btn { background:none; border:1px solid rgba(255,255,255,0.1); border-radius:100px; padding:8px 20px; font-size:10px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:rgba(255,255,255,0.35); cursor:pointer; transition:all 0.2s ease; }
.pp-filter-btn:hover { border-color:rgba(255,255,255,0.3); color:rgba(255,255,255,0.7); }
.pp-filter-btn.active { background:rgba(255,255,255,0.08); border-color:rgba(255,255,255,0.3); color:#fff; }
.pp-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
.pp-card { display:block; text-decoration:none; cursor:pointer; position:relative; }
.pp-card-frame { width:100%; aspect-ratio:5/4; background:#0d0d0d; border:1px solid rgba(255,255,255,0.07); position:relative; overflow:hidden; margin-bottom:16px; transition:border-color 0.4s ease; }
.pp-card:hover .pp-card-frame { border-color:rgba(255,255,255,0.2); }
.pp-card-img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; transition:transform 0.5s ease; z-index:0; }
.pp-card:hover .pp-card-img { transform:scale(1.04); }
.pp-card-overlay { position:absolute; inset:0; background:rgba(0,0,0,0.3); z-index:3; opacity:0; transition:opacity 0.35s ease; display:flex; align-items:center; justify-content:center; }
.pp-card:hover .pp-card-overlay { opacity:1; }
.pp-overlay-pill { background:rgba(255,255,255,0.1); backdrop-filter:blur(16px); border:1px solid rgba(255,255,255,0.2); border-radius:100px; padding:10px 22px; font-size:10px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:#fff; }
.pp-card-info { display:flex; justify-content:space-between; align-items:flex-start; gap:8px; }
.pp-card-num { font-size:9px; color:rgba(255,255,255,0.18); letter-spacing:2px; font-weight:600; margin-bottom:4px; }
.pp-card-name { font-size:14px; font-weight:700; color:rgba(255,255,255,0.65); letter-spacing:-0.2px; transition:color 0.2s ease; }
.pp-card:hover .pp-card-name { color:#fff; }
.pp-card-edition { font-size:9px; color:rgba(255,255,255,0.22); letter-spacing:1.5px; text-transform:uppercase; margin-top:3px; }
.pp-card-tag { font-size:9px; color:rgba(255,255,255,0.2); letter-spacing:1.5px; text-transform:uppercase; white-space:nowrap; padding-top:2px; }
.pp-soon-bar { margin-top:80px; padding:40px; border:1px solid rgba(255,255,255,0.07); display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap; }
.pp-soon-title { font-size:18px; font-weight:700; color:rgba(255,255,255,0.6); margin-bottom:6px; }
.pp-soon-sub { font-size:12px; color:rgba(255,255,255,0.25); }
.pp-notify-btn { display:inline-flex; align-items:center; gap:8px; background:none; border:1px solid rgba(255,255,255,0.15); border-radius:100px; padding:12px 28px; font-size:10px; font-weight:600; letter-spacing:2.5px; text-transform:uppercase; color:rgba(255,255,255,0.5); cursor:pointer; text-decoration:none; transition:all 0.25s ease; }
.pp-notify-btn:hover { border-color:rgba(255,255,255,0.35); color:#fff; background:rgba(255,255,255,0.04); }
.pd-overlay { position:fixed; top:0; left:0; width:100%; height:100%; z-index:9999; background:rgba(0,0,0,0.85); overflow-y:scroll; overflow-x:hidden; overscroll-behavior:contain; opacity:0; pointer-events:none; transition:opacity 0.35s ease; }
.pd-overlay.open { opacity:1; pointer-events:all; }
.pd-panel { width:78%; max-width:1000px; margin:0 auto; min-height:100vh; display:flex; flex-direction:column; background:#111; }
.pd-bar { position:sticky; top:0; z-index:10; display:flex; justify-content:space-between; align-items:center; padding:16px 24px; background:#111; border-bottom:1px solid rgba(255,255,255,0.08); flex-shrink:0; }
.pd-bar-left { display:flex; align-items:center; gap:16px; }
.pd-bar-label { font-size:10px; letter-spacing:3px; text-transform:uppercase; color:rgba(255,255,255,0.3); font-weight:500; }
.pd-bar-sep { width:1px; height:12px; background:rgba(255,255,255,0.15); }
.pd-bar-title { font-size:12px; font-weight:600; color:rgba(255,255,255,0.6); }
.pd-close { width:34px; height:34px; border:1px solid rgba(255,255,255,0.18); border-radius:50%; background:none; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background 0.2s; flex-shrink:0; }
.pd-close:hover { background:rgba(255,255,255,0.1); }
.pd-close svg { width:10px; height:10px; stroke:#fff; stroke-width:2; }
.pd-body { display:flex; flex:1; align-items:flex-start; }
.pd-left { flex:1; border-right:1px solid rgba(255,255,255,0.06); }
.pd-img-block { width:100%; }
.pd-img-block + .pd-img-block { border-top:1px solid rgba(255,255,255,0.06); }
.pd-real-img { width:100%; height:auto; display:block; vertical-align:top; }
.pd-right { width:300px; flex-shrink:0; position:sticky; top:57px; height:calc(100vh - 57px); display:flex; flex-direction:column; padding:36px 28px; box-sizing:border-box; overflow-y:auto; background:#111; }
.pd-tag { display:inline-block; font-size:9px; letter-spacing:3px; text-transform:uppercase; color:rgba(255,255,255,0.3); font-weight:600; border:1px solid rgba(255,255,255,0.1); border-radius:100px; padding:5px 14px; margin-bottom:24px; align-self:flex-start; }
.pd-title { font-size:clamp(24px,2.5vw,34px); font-weight:800; color:#fff; letter-spacing:-1.2px; line-height:0.92; margin-bottom:8px; }
.pd-subtitle { font-size:11px; color:rgba(255,255,255,0.3); letter-spacing:1px; margin-bottom:28px; }
.pd-rule { width:100%; height:1px; background:rgba(255,255,255,0.07); margin-bottom:24px; }
.pd-desc { font-size:12px; line-height:1.8; color:rgba(255,255,255,0.35); flex:1; }
.pd-cta-wrap { margin-top:auto; padding-top:28px; }
.pd-back-btn { display:flex; align-items:center; justify-content:center; width:100%; padding:14px; background:none; color:rgba(255,255,255,0.45); border:1px solid rgba(255,255,255,0.12); border-radius:4px; font-size:10px; font-weight:600; letter-spacing:2.5px; text-transform:uppercase; cursor:pointer; transition:all 0.22s ease; box-sizing:border-box; }
.pd-back-btn:hover { border-color:rgba(255,255,255,0.3); color:#fff; background:rgba(255,255,255,0.04); }
@media(max-width:900px){ .pp-grid{grid-template-columns:repeat(2,1fr);} .pd-panel{width:92%;} .pd-body{flex-direction:column;} .pd-right{position:static;width:100%;height:auto;border-top:1px solid rgba(255,255,255,0.07);} .pd-left{border-right:none;} }
@media(max-width:600px){ .pp-inner{padding:80px 16px 100px;} .pp-grid{grid-template-columns:1fr;} .pd-panel{width:96%;} .pd-bar{padding:12px 16px;} .pd-right{padding:24px 20px;} }
`

const FILTERS = ["All", "Limited", "Rare", "Collector"]

const PRINTS = [
  { num:"01", name:"Shopping Bag", edition:"Flipkart Kilos", tag:"Limited", thumbImg:"https://framerusercontent.com/images/7EqiVItbgXxfZkbhQsP6AVUfDc.jpg", caseStudyImgs:["https://framerusercontent.com/images/ZhrqhX8B2IPHzc8XgHQYaDUk4TU.jpg","https://framerusercontent.com/images/IzLDTowOdllSbJcvWW1xIdzfuqI.jpg","https://framerusercontent.com/images/zdK3HgsITk5nZnvGm3vB6oIb0Ew.jpg"], desc:"Designed a vibrant shopping bag for Flipkart Kilos using playful illustrations and bold typography inspired by everyday grocery essentials." },
  { num:"02", name:"Mango Box", edition:"RCB × BigBasket", tag:"Limited", thumbImg:"https://framerusercontent.com/images/Dw2W33KNLlJXfYae1uICn728Bck.jpg", caseStudyImgs:["https://framerusercontent.com/images/KnxnSqvHPbHjzTLxsmTlYXkHXfE.jpg","https://framerusercontent.com/images/ajVwox1zd6uPkD3HoxigdzM308.jpg","https://framerusercontent.com/images/Xs2FIBNjjVeEdIIwTd4itBKZjx4.jpg"], desc:"Created a custom mango-themed unboxing experience for an RCB and BigBasket collaboration." },
  { num:"03", name:"Car Livery", edition:"TSI Racing × WRC", tag:"Limited", thumbImg:"https://framerusercontent.com/images/WUBnVKXW2iA5Y7z5pc6bl9bVVg.jpg", caseStudyImgs:["https://framerusercontent.com/images/BTGXNyttOyoZ8CDs5I6FDOoOe0.jpg","https://framerusercontent.com/images/Mgpe5hyl1OP0fkxmGynv0eqrc.jpg","https://framerusercontent.com/images/ag4JWULprNOkkTzoOXRFKcwWk4.jpg"], desc:"Designed the official rally car livery for TSI Racing\'s WRC campaign." },
  { num:"04", name:"Car Liveries", edition:"TSI Racing", tag:"Rare", thumbImg:"https://framerusercontent.com/images/nE8ZKI8YYo3R3IcuvUCb5DEdA.jpg", caseStudyImgs:["https://framerusercontent.com/images/o6Yu28baHNl34oRQfyW1jgat8.jpg","https://framerusercontent.com/images/bZSYxbyfksC4eyKjFAOdqW9nE8.jpg","https://framerusercontent.com/images/4QTG7btoepRDJAr56NfhT5XK4PE.jpg"], desc:"Developed multiple racing liveries for TSI Racing\'s national motorsport campaigns." },
  { num:"05", name:"Invite Box", edition:"CBD – Central Bar District", tag:"Rare", thumbImg:"https://framerusercontent.com/images/csOMtfvE61PNmPJQbthQdbKnaRc.jpg", caseStudyImgs:["https://framerusercontent.com/images/fv8dDmNGiO0A8jTMbMjSr469mZw.jpg","https://framerusercontent.com/images/2aW5ivXG6vz7OFfN0WeSCeXH6Xk.jpg","https://framerusercontent.com/images/u0yVc7Gj1MSu77hfRD2LUCZlC20.jpg"], desc:"Designed a bold PR invite box for the launch of Central Bar District." },
  { num:"06", name:"Calendar 2025", edition:"Bhadra", tag:"Collector", thumbImg:"https://framerusercontent.com/images/EomrQIZWGJWIuzX0P0iw0N7lbA.jpg", caseStudyImgs:["https://framerusercontent.com/images/bqSJBC6krtbsQYIeLLhqvu6Y7o.jpg","https://framerusercontent.com/images/te6P6bRqyZ3yKuYFYNQJAnckoNo.jpg","https://framerusercontent.com/images/wY3yuvN1Lf3tQUM8EUaSTstsI.jpg"], desc:"Designed a custom calendar for Bhadra featuring illustrated architectural wonders from around the world." },
  { num:"07", name:"Calendar 2023", edition:"BigBasket", tag:"Collector", thumbImg:"https://framerusercontent.com/images/rKiJSTDaaXlj1j5R1eKDqowu8U.jpg", caseStudyImgs:["https://framerusercontent.com/images/Yb4bWI5Hj3Dbz0Qz00PPNYlyjwM.jpg","https://framerusercontent.com/images/0uONd4saOdLe0MfXXrwSKYpBkms.jpg","https://framerusercontent.com/images/MPa457gqhmscn5z3foqkDQrSkAM.jpg"], desc:"Designed an illustrated calendar for BigBasket themed around major festivals and seasonal moments." },
  { num:"08", name:"Fresheners Packaging", edition:"Whiff Story", tag:"Collector", thumbImg:"https://framerusercontent.com/images/eStEMtmVKIWFvolsm9wYEshTC0.jpg", caseStudyImgs:["https://framerusercontent.com/images/ut2vMtk97V2u2X06AoDnpnrdk.jpg","https://framerusercontent.com/images/mUgReGpRaMePImJF2jbAGPUcFDE.jpg","https://framerusercontent.com/images/J9PbpknFG8uhSfYtOJE52mkgp5g.jpg"], desc:"Designed a packaging system for Whiff Story featuring a wide range of fragrances across different variants and formats." },
]

export default function PrintsPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [activePrint, setActivePrint] = useState<typeof PRINTS[0] | null>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const touchStartY = useRef(0)
  const filtered = activeFilter === "All" ? PRINTS : PRINTS.filter(p => p.tag === activeFilter)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActivePrint(null) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    if (activePrint) { document.body.style.overflow = "hidden"; document.documentElement.style.overflow = "hidden"; requestAnimationFrame(() => { if (overlayRef.current) overlayRef.current.scrollTop = 0 }) }
    else { document.body.style.overflow = ""; document.documentElement.style.overflow = "" }
    return () => { document.body.style.overflow = ""; document.documentElement.style.overflow = "" }
  }, [activePrint])

  useEffect(() => {
    if (!activePrint) return
    const onWheel = (e: WheelEvent) => { e.preventDefault(); e.stopPropagation(); if (overlayRef.current) overlayRef.current.scrollTop += e.deltaY }
    window.addEventListener("wheel", onWheel, { passive: false, capture: true })
    return () => window.removeEventListener("wheel", onWheel, { capture: true })
  }, [activePrint])

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:CSS}}/>
      <div className={`pd-overlay${activePrint ? " open" : ""}`} ref={overlayRef} onClick={e => { if (e.target === overlayRef.current) setActivePrint(null) }} tabIndex={-1} style={{outline:"none"}}>
        <div className="pd-panel">
          <div className="pd-bar">
            <div className="pd-bar-left">
              <span className="pd-bar-label">Packaging & Print</span>
              <div className="pd-bar-sep"/>
              {activePrint && <span className="pd-bar-title">{activePrint.name} · {activePrint.edition}</span>}
            </div>
            <button className="pd-close" onClick={() => setActivePrint(null)} aria-label="Close">
              <svg viewBox="0 0 10 10" fill="none"><path d="M1 1L9 9M9 1L1 9" strokeLinecap="round"/></svg>
            </button>
          </div>
          <div className="pd-body">
            <div className="pd-left">
              {activePrint && activePrint.caseStudyImgs.map((src, i) => (
                <div className="pd-img-block" key={i}><img className="pd-real-img" src={src} alt={`${activePrint.name} ${i+1}`}/></div>
              ))}
            </div>
            {activePrint && (
              <div className="pd-right">
                <span className="pd-tag">{activePrint.tag} Edition</span>
                <div className="pd-title">{activePrint.name}</div>
                <div className="pd-subtitle">{activePrint.edition}</div>
                <div className="pd-rule"/>
                <p className="pd-desc">{activePrint.desc}</p>
                <div className="pd-cta-wrap"><button className="pd-back-btn" onClick={() => setActivePrint(null)}>← Back to All Prints</button></div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="pp-wrap">
        <div className="pp-inner">
          <div className="pp-eyebrow">
            <span className="pp-eyebrow-label">Sarang Pedulwar</span>
            <div className="pp-eyebrow-line"/>
            <span className="pp-eyebrow-label">Packaging & Print</span>
          </div>
          <h1 className="pp-h1">PRI<em>NTS</em></h1>
          <div className="pp-header-meta">
            <p className="pp-header-desc">A curated collection of packaging and print projects — each one crafted with intention.</p>
            <span className="pp-count">{PRINTS.length} Projects</span>
          </div>
          <div className="pp-filters">
            {FILTERS.map(f => <button key={f} className={`pp-filter-btn${activeFilter === f ? " active" : ""}`} onClick={() => setActiveFilter(f)}>{f}</button>)}
          </div>
          <div className="pp-grid">
            {filtered.map((p, i) => (
              <a key={i} href="#" className="pp-card" onClick={e => { e.preventDefault(); setActivePrint(p) }}>
                <div className="pp-card-frame">
                  <img className="pp-card-img" src={p.thumbImg} alt={p.name}/>
                  <div className="pp-card-overlay"><div className="pp-overlay-pill">View Project</div></div>
                </div>
                <div className="pp-card-info">
                  <div>
                    <div className="pp-card-num">{p.num}</div>
                    <div className="pp-card-name">{p.name}</div>
                    <div className="pp-card-edition">{p.edition}</div>
                  </div>
                  <div className="pp-card-tag">{p.tag}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="pp-soon-bar">
            <div><div className="pp-soon-title">New projects dropping soon.</div><div className="pp-soon-sub">Be the first to know when new work goes live.</div></div>
            <a href="mailto:spedulwar@gmail.com" className="pp-notify-btn">Get in Touch →</a>
          </div>
        </div>
      </div>
    </>
  )
}
