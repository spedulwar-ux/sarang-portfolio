"use client"
import { useEffect, useState } from "react"

const CSS = `
@keyframes fill-reveal { from { clip-path: inset(0 0 100% 0); } to { clip-path: inset(0 0 0% 0); } }
@keyframes f-up { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
@keyframes spin-badge { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes breathe { 0%,100% { opacity:.5; transform:scale(1); } 50% { opacity:1; transform:scale(1.5); } }
@keyframes scroll-bounce { 0%,100% { transform:translateY(0); opacity:.25; } 50% { transform:translateY(6px); opacity:.6; } }
@keyframes line-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
.h-root {
  width:100%; height:100vh; min-height:640px; background:#000;
  position:relative; overflow:hidden; display:flex; flex-direction:column;
  justify-content:space-between; padding:28px 28px 28px; box-sizing:border-box;
}
.h-grain {
  position:absolute; inset:0; z-index:0; pointer-events:none; opacity:.028;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size:160px 160px;
}
.h-corner { position:absolute; width:14px; height:14px; border-color:rgba(255,255,255,.1); border-style:solid; z-index:2; opacity:0; animation:f-up .4s ease 1.2s forwards; }
.h-corner.tl { top:20px; left:20px; border-width:1px 0 0 1px; }
.h-corner.tr { top:20px; right:20px; border-width:1px 1px 0 0; }
.h-corner.bl { bottom:20px; left:20px; border-width:0 0 1px 1px; }
.h-corner.br { bottom:20px; right:20px; border-width:0 1px 1px 0; }
.h-top { display:flex; justify-content:space-between; align-items:center; position:relative; z-index:2; opacity:0; animation:f-up .55s ease .05s forwards; }
.h-pill { display:flex; align-items:center; gap:7px; border:1px solid rgba(255,255,255,.1); border-radius:100px; padding:6px 14px; }
.h-pill-dot { width:5px; height:5px; border-radius:50%; background:#4ade80; animation:breathe 2.2s ease infinite; }
.h-pill-txt { font-size:10px; font-weight:500; letter-spacing:.18em; text-transform:uppercase; color:rgba(255,255,255,.35); }
.h-loc { font-size:10px; font-weight:500; letter-spacing:.2em; text-transform:uppercase; color:rgba(255,255,255,.18); }
.h-tl-wrap { position:relative; z-index:2; text-align:center; flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:0 4px; }
.h-tl-outline { font-size:clamp(26px,5.8vw,86px); font-weight:800; text-transform:uppercase; letter-spacing:-.03em; line-height:1.0; -webkit-text-stroke:1.5px rgba(255,255,255,.28); color:transparent; margin:0; padding:0; user-select:none; }
.h-tl-filled { position:absolute; font-size:clamp(26px,5.8vw,86px); font-weight:800; text-transform:uppercase; letter-spacing:-.03em; line-height:1.0; color:rgba(255,255,255,.78); margin:0; padding:0; clip-path:inset(0 0 100% 0); animation:fill-reveal 1.2s cubic-bezier(.16,1,.3,1) .35s forwards; pointer-events:none; width:100%; }
.h-badge { position:absolute; right:28px; bottom:68px; width:78px; height:78px; display:flex; align-items:center; justify-content:center; z-index:3; opacity:0; animation:f-up .5s ease .8s forwards; }
.h-badge svg { position:absolute; inset:0; animation:spin-badge 14s linear infinite; }
.h-badge-center { width:7px; height:7px; border-radius:50%; border:1px solid rgba(255,255,255,.22); }
.h-sep-line { width:100%; height:1px; background:rgba(255,255,255,.1); transform-origin:left; transform:scaleX(0); animation:line-grow .9s cubic-bezier(.16,1,.3,1) .6s forwards; position:relative; z-index:2; }
.h-bottom { display:flex; justify-content:space-between; align-items:center; position:relative; z-index:2; margin-top:18px; opacity:0; animation:f-up .55s ease 1.0s forwards; }
.h-bottom-label { font-size:10px; font-weight:500; letter-spacing:.22em; text-transform:uppercase; color:rgba(255,255,255,.16); }
.h-scroll-ind { display:flex; flex-direction:column; align-items:center; gap:5px; }
.h-scroll-arrow { width:1px; height:28px; background:linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,.3)); animation:scroll-bounce 1.8s ease infinite; }
.h-scroll-txt { font-size:9px; font-weight:500; letter-spacing:.25em; text-transform:uppercase; color:rgba(255,255,255,.18); }
@media(max-width:768px){
  .h-root { padding:18px 16px 22px; min-height:560px; }
  .h-tl-outline, .h-tl-filled { font-size:clamp(20px,7vw,40px); }
  .h-badge { display:none; }
}
`

const BADGE_TEXT = "PORTFOLIO · 2025 · SARANG · BANGALORE · DESIGNER · "
const BADGE_R = 32

export default function HeroTopSection() {
  const [mx, setMx] = useState(0)
  const [my, setMy] = useState(0)

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      setMx((e.clientX / window.innerWidth - .5) * 2)
      setMy((e.clientY / window.innerHeight - .5) * 2)
    }
    window.addEventListener("mousemove", fn)
    return () => window.removeEventListener("mousemove", fn)
  }, [])

  const tilt = `perspective(1000px) rotateX(${my * -1.2}deg) rotateY(${mx * 1.6}deg)`
  const circPath = `M 39 39 m -${BADGE_R} 0 a ${BADGE_R} ${BADGE_R} 0 1 1 ${BADGE_R * 2} 0 a ${BADGE_R} ${BADGE_R} 0 1 1 ${-BADGE_R * 2} 0`
  const line1 = "Art Direction · Branding"
  const line2 = "Visual systems that leave a mark."

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="h-root">
        <div className="h-grain" />
        <div className="h-corner tl" /><div className="h-corner tr" />
        <div className="h-corner bl" /><div className="h-corner br" />
        <div className="h-top">
          <div className="h-pill">
            <div className="h-pill-dot" />
            <span className="h-pill-txt">Available for work</span>
          </div>
          <span className="h-loc">Bangalore · India</span>
        </div>
        <div className="h-tl-wrap">
          <div style={{ position: "relative", display: "inline-block", transform: tilt, transition: "transform .14s ease" }}>
            <p className="h-tl-outline">{line1}<br />{line2}</p>
            <p className="h-tl-filled" aria-hidden="true">{line1}<br />{line2}</p>
          </div>
        </div>
        <div className="h-badge">
          <svg viewBox="0 0 78 78" width="78" height="78">
            <defs><path id="bc" d={circPath} /></defs>
            <text style={{ fontSize: "6px", fontWeight: 500, letterSpacing: ".2em", textTransform: "uppercase", fill: "rgba(255,255,255,.22)" }}>
              <textPath href="#bc">{BADGE_TEXT}</textPath>
            </text>
          </svg>
          <div className="h-badge-center" />
        </div>
        <div className="h-sep-line" />
        <div className="h-bottom">
          <span className="h-bottom-label">Freelance Designer</span>
          <span className="h-bottom-label">Art Direction · Branding · Campaigns · Identity</span>
          <div className="h-scroll-ind">
            <div className="h-scroll-arrow" />
            <span className="h-scroll-txt">Scroll</span>
          </div>
        </div>
      </div>
    </>
  )
}
