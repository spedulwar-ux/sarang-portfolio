const CSS = `
.lfs-wrap { width:100%; background:#000; padding:16px 24px 104px; box-sizing:border-box; font-family:inherit; }
.lfs-top { display:flex; align-items:flex-end; justify-content:space-between; gap:32px; padding-bottom:34px; border-bottom:1px solid rgba(255,255,255,0.08); }
.lfs-label { font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:rgba(255,255,255,0.28); margin-bottom:14px; }
.lfs-title { margin:0; color:#fff; font-size:clamp(52px,10vw,132px); line-height:0.84; letter-spacing:-0.055em; font-weight:800; white-space:nowrap; }
.lfs-copy { max-width:380px; margin:0 0 20px; color:rgba(255,255,255,0.38); font-size:13px; line-height:1.7; }
.lfs-cta { color:rgba(255,255,255,0.58); text-decoration:none; text-transform:uppercase; letter-spacing:0.18em; font-size:11px; font-weight:600; border-bottom:1px solid rgba(255,255,255,0.18); padding-bottom:3px; }
.lfs-grid { display:grid; grid-template-columns:repeat(6,1fr); gap:1px; background:rgba(255,255,255,0.07); margin-top:1px; }
.lfs-cell { aspect-ratio:1; background:#0d0d0d; display:flex; align-items:center; justify-content:center; overflow:hidden; }
.lfs-cell img { width:100%; height:100%; object-fit:cover; display:block; opacity:0.86; transition:opacity 0.25s ease, transform 0.35s ease; }
.lfs-cell:hover img { opacity:1; transform:scale(1.03); }
@media(max-width:900px){ .lfs-top{display:block;} .lfs-copy{margin-top:22px;} .lfs-grid{grid-template-columns:repeat(3,1fr);} }
@media(max-width:600px){ .lfs-wrap{padding:12px 16px 76px;} .lfs-grid{grid-template-columns:repeat(2,1fr);} }
`

const LOGOS = [
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
  "https://framerusercontent.com/images/aiNTudDqiwLWVNeAhl76nVYWe3c.png",
  "https://framerusercontent.com/images/rNbiwyHKxeKyQFSROtZMRIsecw.png",
]

export default function LogofolioSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <section className="lfs-wrap">
        <div className="lfs-top">
          <div>
            <div className="lfs-label">Mark making</div>
            <h2 className="lfs-title">Logofolio</h2>
          </div>
          <div>
            <p className="lfs-copy">A curated set of wordmarks, symbols, and letterforms built for clarity and longevity.</p>
            <a className="lfs-cta" href="/logos">View logofolio →</a>
          </div>
        </div>
        <div className="lfs-grid">
          {LOGOS.map((src, i) => (
            <a className="lfs-cell" href="/logos" key={src}>
              <img src={src} alt={`Logo ${i + 1}`} loading="lazy" decoding="async" />
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
