const CSS = `
.pbs-wrap { width:100%; background:#000; padding:20px 0 96px; box-sizing:border-box; font-family:inherit; overflow:hidden; }
.pbs-head { display:flex; justify-content:space-between; align-items:flex-end; gap:24px; margin-bottom:32px; }
.pbs-kicker { font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:rgba(255,255,255,0.3); margin-bottom:14px; }
.pbs-title { margin:0; font-size:clamp(48px,9vw,124px); line-height:0.86; letter-spacing:-0.05em; color:#fff; font-weight:800; white-space:nowrap; }
.pbs-copy { margin:0 0 20px; max-width:360px; color:rgba(255,255,255,0.38); font-size:13px; line-height:1.65; }
.pbs-cta { display:inline-flex; color:rgba(255,255,255,0.58); text-decoration:none; text-transform:uppercase; letter-spacing:0.18em; font-size:11px; font-weight:600; border-bottom:1px solid rgba(255,255,255,0.18); padding-bottom:3px; }
.pbs-head { padding:0 24px; box-sizing:border-box; }
.pbs-marquee { width:100%; overflow:hidden; border-top:1px solid rgba(255,255,255,0.08); border-bottom:1px solid rgba(255,255,255,0.08); }
.pbs-track { display:flex; gap:1px; width:max-content; animation:pbs-scroll 34s linear infinite; will-change:transform; }
.pbs-marquee:hover .pbs-track { animation-play-state:paused; }
.pbs-card { position:relative; flex:0 0 clamp(300px,28vw,520px); aspect-ratio:3/4; overflow:hidden; background:#101010; }
.pbs-card img { width:100%; height:100%; object-fit:cover; object-position:center; display:block; filter:saturate(0.94); transition:transform 0.5s ease, filter 0.5s ease; }
.pbs-card:hover img { transform:scale(1.04); filter:saturate(1.08); }
.pbs-num { position:absolute; left:14px; bottom:13px; font-size:10px; letter-spacing:0.16em; color:rgba(255,255,255,0.5); font-weight:600; }
.pbs-card::after { content:""; position:absolute; inset:0; background:linear-gradient(to top,rgba(0,0,0,0.16),transparent 42%); pointer-events:none; }
@keyframes pbs-scroll { from{transform:translateX(0);} to{transform:translateX(calc(-50% - 0.5px));} }
@media(max-width:900px){ .pbs-head{display:block;} .pbs-copy{margin-top:20px;} .pbs-card{flex-basis:clamp(250px,68vw,420px);} }
@media(max-width:600px){ .pbs-wrap{padding:12px 0 72px;} .pbs-head{padding:0 16px;} .pbs-track{animation-duration:28s;} }
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
            <h2 className="pbs-title">Poster Blasts</h2>
          </div>
          <div>
            <p className="pbs-copy">Campaign posters, event graphics, and brand moments designed to stop the scroll.</p>
            <a className="pbs-cta" href="/gallery">View gallery →</a>
          </div>
        </div>
        <div className="pbs-marquee">
          <div className="pbs-track">
            {[...POSTERS, ...POSTERS].map((src, i) => (
              <a href="/gallery" className="pbs-card" key={`${src}-${i}`} aria-hidden={i >= POSTERS.length}>
                <img src={src} alt={`Poster blast ${(i % POSTERS.length) + 1}`} loading="lazy" decoding="async" />
                <span className="pbs-num">{String((i % POSTERS.length) + 1).padStart(2, "0")}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
