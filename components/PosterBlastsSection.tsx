const CSS = `
.pbs-wrap { width:100%; background:#000; padding:20px 0 96px; box-sizing:border-box; font-family:inherit; overflow:hidden; }
.pbs-head { display:flex; justify-content:space-between; align-items:flex-end; gap:24px; margin-bottom:32px; }
.pbs-kicker { font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:rgba(255,255,255,0.3); margin-bottom:14px; }
.pbs-title { margin:0; font-size:clamp(52px,10vw,132px); line-height:0.86; letter-spacing:-0.05em; color:#fff; font-weight:800; }
.pbs-copy { margin:0 0 20px; max-width:360px; color:rgba(255,255,255,0.38); font-size:13px; line-height:1.65; }
.pbs-cta { display:inline-flex; color:rgba(255,255,255,0.58); text-decoration:none; text-transform:uppercase; letter-spacing:0.18em; font-size:11px; font-weight:600; border-bottom:1px solid rgba(255,255,255,0.18); padding-bottom:3px; }
.pbs-head { padding:0 24px; box-sizing:border-box; }
.pbs-strip { display:flex; gap:1px; overflow-x:auto; overflow-y:hidden; padding:0 24px 14px; scroll-snap-type:x mandatory; scrollbar-width:thin; scrollbar-color:rgba(255,255,255,0.22) transparent; }
.pbs-strip::-webkit-scrollbar { height:6px; }
.pbs-strip::-webkit-scrollbar-track { background:transparent; }
.pbs-strip::-webkit-scrollbar-thumb { background:rgba(255,255,255,0.22); border-radius:100px; }
.pbs-card { position:relative; flex:0 0 clamp(300px,28vw,520px); aspect-ratio:3/4; overflow:hidden; background:#101010; border-top:1px solid rgba(255,255,255,0.08); border-bottom:1px solid rgba(255,255,255,0.08); scroll-snap-align:start; }
.pbs-card img { width:100%; height:100%; object-fit:cover; object-position:center; display:block; filter:saturate(0.94); transition:transform 0.5s ease, filter 0.5s ease; }
.pbs-card:hover img { transform:scale(1.04); filter:saturate(1.08); }
.pbs-num { position:absolute; left:14px; bottom:13px; font-size:10px; letter-spacing:0.16em; color:rgba(255,255,255,0.5); font-weight:600; }
@media(max-width:900px){ .pbs-head{display:block;} .pbs-copy{margin-top:20px;} .pbs-card{flex-basis:clamp(250px,68vw,420px);} }
@media(max-width:600px){ .pbs-wrap{padding:12px 0 72px;} .pbs-head{padding:0 16px;} .pbs-strip{padding:0 16px 14px;} }
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
        <div className="pbs-strip">
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
