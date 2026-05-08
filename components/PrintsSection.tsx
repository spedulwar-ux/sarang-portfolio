const CSS = `
.ps-wrap { width:100%; background-color:#000; background-image:linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px); background-size:48px 48px; position:relative; overflow:hidden; padding:100px 24px 116px; box-sizing:border-box; font-family:inherit; }
.ps-wrap::before { content:""; position:absolute; inset:0; background:radial-gradient(ellipse at 50% 42%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.72) 78%, #000 100%); pointer-events:none; }
.ps-inner { position:relative; z-index:1; max-width:1280px; margin:0 auto; }
.ps-ghost { position:absolute; top:-32px; left:50%; transform:translateX(-50%); font-size:clamp(120px,20vw,270px); line-height:0.8; font-weight:800; color:transparent; -webkit-text-stroke:1px rgba(255,255,255,0.08); letter-spacing:-0.06em; pointer-events:none; white-space:nowrap; }
.ps-head { display:flex; justify-content:space-between; align-items:flex-end; gap:32px; margin-bottom:64px; }
.ps-label { font-size:10px; letter-spacing:0.24em; text-transform:uppercase; color:rgba(255,255,255,0.32); margin-bottom:18px; }
.ps-title { margin:0; color:#fff; font-size:clamp(72px,14vw,180px); line-height:0.78; letter-spacing:-0.065em; font-weight:800; }
.ps-copy { max-width:390px; margin:0 0 20px; color:rgba(255,255,255,0.42); font-size:13px; line-height:1.75; }
.ps-cta { color:rgba(255,255,255,0.7); text-decoration:none; text-transform:uppercase; letter-spacing:0.18em; font-size:11px; font-weight:600; border-bottom:1px solid rgba(255,255,255,0.24); padding-bottom:3px; }
.ps-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
.ps-card { text-decoration:none; color:inherit; display:block; }
.ps-frame { aspect-ratio:5/4; background:#0e0e0e; border:1px solid rgba(255,255,255,0.09); overflow:hidden; position:relative; margin-bottom:16px; }
.ps-frame img { width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.45s ease; }
.ps-card:hover img { transform:scale(1.035); }
.ps-meta { display:flex; justify-content:space-between; gap:16px; align-items:flex-start; }
.ps-num { font-size:9px; letter-spacing:0.18em; color:rgba(255,255,255,0.24); margin-bottom:5px; }
.ps-name { color:rgba(255,255,255,0.72); font-size:14px; font-weight:700; }
.ps-type { color:rgba(255,255,255,0.28); font-size:9px; letter-spacing:0.15em; text-transform:uppercase; margin-top:4px; }
@media(max-width:850px){ .ps-head{display:block;} .ps-copy{margin-top:24px;} .ps-grid{grid-template-columns:1fr;} }
@media(max-width:600px){ .ps-wrap{padding:76px 16px 84px;} }
`

const PRINTS = [
  { num:"01", name:"Shopping Bag", type:"Flipkart Kilos", thumbImg:"https://framerusercontent.com/images/7EqiVItbgXxfZkbhQsP6AVUfDc.jpg" },
  { num:"02", name:"Mango Box", type:"RCB × BigBasket", thumbImg:"https://framerusercontent.com/images/Dw2W33KNLlJXfYae1uICn728Bck.jpg" },
  { num:"03", name:"Car Livery", type:"TSI Racing × WRC", thumbImg:"https://framerusercontent.com/images/WUBnVKXW2iA5Y7z5pc6bl9bVVg.jpg" },
]

export default function PrintsSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <section className="ps-wrap">
        <div className="ps-inner">
          <div className="ps-ghost">PRINTS</div>
          <div className="ps-head">
            <div>
              <div className="ps-label">Packaging & print</div>
              <h2 className="ps-title">Prints</h2>
            </div>
            <div>
              <p className="ps-copy">A focused collection of packaging, print collateral, and crafted brand objects.</p>
              <a className="ps-cta" href="/prints">View all prints →</a>
            </div>
          </div>
          <div className="ps-grid">
            {PRINTS.map(p => (
              <a className="ps-card" href="/prints" key={p.num}>
                <div className="ps-frame"><img src={p.thumbImg} alt={p.name} loading="lazy" decoding="async" /></div>
                <div className="ps-meta">
                  <div>
                    <div className="ps-num">{p.num}</div>
                    <div className="ps-name">{p.name}</div>
                    <div className="ps-type">{p.type}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
