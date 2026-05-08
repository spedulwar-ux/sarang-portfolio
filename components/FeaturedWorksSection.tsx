import React from "react"

const CSS = `
.fw-wrap { width:100%; padding:0 24px 80px; box-sizing:border-box; font-family:inherit; background:#000; }
.fw-topbar { display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; }
.fw-topbar span { font-size:11px; color:rgba(255,255,255,0.3); letter-spacing:3px; text-transform:uppercase; font-weight:500; }
.fw-topbar a { font-size:11px; color:rgba(255,255,255,0.3); text-decoration:none; letter-spacing:2px; text-transform:uppercase; font-weight:500; border-bottom:1px solid rgba(255,255,255,0.15); padding-bottom:1px; }
.fw-h2 { margin:0; font-size:clamp(52px,10vw,130px); font-weight:800; color:#fff; line-height:0.88; letter-spacing:-4px; }
.fw-divider { width:100%; height:1px; background:rgba(255,255,255,0.08); margin-top:36px; }
.fw-row { display:flex; flex-direction:row; align-items:center; padding:48px 0; border-bottom:1px solid rgba(255,255,255,0.07); }
.fw-row-reverse { flex-direction:row-reverse; }
.fw-img { flex-shrink:0; width:58%; position:relative; aspect-ratio:16/10; background:#141414; overflow:hidden; cursor:pointer; transition:background 0.35s ease; text-decoration:none; display:block; }
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
.fw-cta { display:inline-flex; align-items:center; gap:6px; font-size:11px; font-weight:600; color:rgba(255,255,255,0.5); letter-spacing:2px; text-transform:uppercase; border-bottom:1px solid rgba(255,255,255,0.15); padding-bottom:2px; text-decoration:none; }
@media(max-width:768px){
  .fw-wrap{padding:0 16px 60px;}
  .fw-h2{font-size:clamp(38px,13vw,64px);letter-spacing:-2px;}
  .fw-row{flex-direction:column!important;padding:32px 0;}
  .fw-img{width:100%!important;aspect-ratio:4/3;}
  .fw-info{min-height:unset;padding:24px 0 0!important;gap:20px;justify-content:flex-start;}
  .fw-il,.fw-ir{padding:24px 0 0;}
  .fw-name{font-size:clamp(28px,8vw,40px);}
}
`

const PROJECTS = [
  { num:"01", slug:"ooty", reverse:false, heroImg:"https://framerusercontent.com/images/iCG93L1SDmSIMX66jwWHBiCT9Qg.png", name:"Ooty Literary Festival 2025", category:"Event Identity · Print", year:"2025", desc:"Complete visual identity and print collateral for one of South India's most celebrated literary festivals." },
  { num:"02", slug:"tsi-racing", reverse:true, heroImg:"https://framerusercontent.com/images/FK1WfDh6KvCjYt0xGkGe0vXUME0.png", name:"TSI Racing", category:"Performance Identity", year:"2024", desc:"An identity system crafted to capture the intensity and energy of motorsport — built for speed, designed to last." },
  { num:"03", slug:"amateur-vodka", reverse:false, heroImg:"https://framerusercontent.com/images/w7xZVt9Pb56vtXkTE7Mcdh8VW4A.jpg", name:"Amateur Vodka", category:"Brand Identity", year:"2024", desc:"Brand identity for a vodka label that embraces rawness over perfection — bold, unfiltered, and unapologetically original." },
]

function Row({ p }: { p: typeof PROJECTS[0] }) {
  return (
    <div className={`fw-row${p.reverse ? " fw-row-reverse" : ""}`}>
      <a className="fw-img" href="/work">
        {p.heroImg ? <img src={p.heroImg} alt={p.name} /> : <div className="fw-img-bg" />}
        <span className="fw-img-num">{p.num}</span>
        <div className="fw-img-overlay"><div className="fw-pill">View Case Study</div></div>
      </a>
      <div className={`fw-info ${p.reverse ? "fw-ir" : "fw-il"}`}>
        <div className="fw-meta"><span>{p.num}</span><span>{p.year}</span></div>
        <div>
          <div className="fw-cat">{p.category}</div>
          <h3 className="fw-name">{p.name}</h3>
          <p className="fw-desc">{p.desc}</p>
        </div>
        <a href="/work" className="fw-cta">View case study →</a>
      </div>
    </div>
  )
}

export default function FeaturedWorksSection() {
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
        {PROJECTS.map(p => <Row key={p.num} p={p} />)}
      </div>
    </>
  )
}
