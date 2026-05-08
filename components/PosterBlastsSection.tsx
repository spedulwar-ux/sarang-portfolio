const CSS = `
.pbs-wrap { width:100%; background:#000; padding:20px 24px 96px; box-sizing:border-box; font-family:inherit; }
.pbs-head { display:flex; justify-content:space-between; align-items:flex-end; gap:24px; margin-bottom:32px; }
.pbs-kicker { font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:rgba(255,255,255,0.3); margin-bottom:14px; }
.pbs-title { margin:0; font-size:clamp(52px,10vw,132px); line-height:0.86; letter-spacing:-0.05em; color:#fff; font-weight:800; }
.pbs-copy { margin:0 0 20px; max-width:360px; color:rgba(255,255,255,0.38); font-size:13px; line-height:1.65; }
.pbs-cta { display:inline-flex; color:rgba(255,255,255,0.58); text-decoration:none; text-transform:uppercase; letter-spacing:0.18em; font-size:11px; font-weight:600; border-bottom:1px solid rgba(255,255,255,0.18); padding-bottom:3px; }
.pbs-grid { display:grid; grid-template-columns:1.05fr 0.8fr 1.1fr 0.75fr; gap:1px; background:rgba(255,255,255,0.08); border-top:1px solid rgba(255,255,255,0.08); border-bottom:1px solid rgba(255,255,255,0.08); }
.pbs-card { position:relative; height:420px; overflow:hidden; background:#101010; }
.pbs-card:nth-child(even) { height:340px; align-self:end; }
.pbs-card img { width:100%; height:100%; object-fit:cover; display:block; filter:saturate(0.9); transition:transform 0.5s ease, filter 0.5s ease; }
.pbs-card:hover img { transform:scale(1.04); filter:saturate(1.08); }
.pbs-num { position:absolute; left:14px; bottom:13px; font-size:10px; letter-spacing:0.16em; color:rgba(255,255,255,0.5); font-weight:600; }
@media(max-width:900px){ .pbs-head{display:block;} .pbs-copy{margin-top:20px;} .pbs-grid{grid-template-columns:repeat(2,1fr);} .pbs-card,.pbs-card:nth-child(even){height:auto; aspect-ratio:3/4;} }
@media(max-width:600px){ .pbs-wrap{padding:12px 16px 72px;} .pbs-grid{grid-template-columns:1fr 1fr;} }
`

const POSTERS = [
  "https://framerusercontent.com/images/iE8GUSpBXPWoEaOp3ETJJ8aGTOE.jpg",
  "https://framerusercontent.com/images/d2bcSJjhm0onP6f61sdww3vQs6M.jpg",
  "https://framerusercontent.com/images/UEoTkoe0hUtQOr5eK5nuqcXPCVQ.jpg",
  "https://framerusercontent.com/images/GnngQtYs67eXeDN24xvCB8ysA.jpg",
]

export default function PosterBlastsSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <section className="pbs-wrap">
        <div className="pbs-head">
          <div>
            <div className="pbs-kicker">Poster archive</div>
            <h2 className="pbs-title">Poster<br />Blasts</h2>
          </div>
          <div>
            <p className="pbs-copy">Campaign posters, event graphics, and brand moments designed to stop the scroll.</p>
            <a className="pbs-cta" href="/gallery">View gallery →</a>
          </div>
        </div>
        <div className="pbs-grid">
          {POSTERS.map((src, i) => (
            <a href="/gallery" className="pbs-card" key={src}>
              <img src={src} alt={`Poster blast ${i + 1}`} loading="lazy" decoding="async" />
              <span className="pbs-num">{String(i + 1).padStart(2, "0")}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
