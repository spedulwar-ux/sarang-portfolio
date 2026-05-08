const CSS = `
.gp-wrap { width:100%; background:#000; min-height:100vh; font-family:inherit; padding:120px 24px 120px; box-sizing:border-box; }
.gp-h1 { margin:0 0 24px 0; font-size:clamp(60px,12vw,160px); font-weight:800; color:#fff; line-height:0.85; letter-spacing:-5px; }
.gp-meta { display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:48px; gap:20px; flex-wrap:wrap; }
.gp-meta p { margin:0; font-size:13px; line-height:1.65; color:rgba(255,255,255,0.4); max-width:520px; }
.gp-meta span { font-size:11px; color:rgba(255,255,255,0.2); letter-spacing:2px; text-transform:uppercase; font-weight:500; white-space:nowrap; }
.gp-divider { width:100%; height:1px; background:rgba(255,255,255,0.08); margin-bottom:0; }
.gp-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:rgba(255,255,255,0.07); }
.gp-cell { position:relative; aspect-ratio:3/4; background:#111; overflow:hidden; cursor:pointer; content-visibility:auto; contain-intrinsic-size:0 360px; }
.gp-cell img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.45s ease; will-change:transform; transform:translateZ(0); }
.gp-cell:hover img { transform:scale(1.04) translateZ(0); }
.gp-cell-num { position:absolute; top:10px; left:12px; font-size:9px; color:rgba(255,255,255,0.5); font-weight:600; letter-spacing:0.5px; z-index:2; }
.gp-cell-hover { position:absolute; inset:0; background:linear-gradient(to top,rgba(0,0,0,0.8) 0%,transparent 50%); opacity:0; transition:opacity 0.25s ease; display:flex; flex-direction:column; justify-content:flex-end; padding:14px; gap:3px; z-index:2; }
.gp-cell:hover .gp-cell-hover { opacity:1; }
.gp-cell-name { font-size:13px; font-weight:700; color:#fff; line-height:1.2; }
.gp-cell-cat { font-size:9px; color:rgba(255,255,255,0.45); letter-spacing:1.5px; text-transform:uppercase; }
@media (max-width:768px) {
  .gp-wrap { padding:80px 16px 80px; }
  .gp-h1 { font-size:clamp(40px,13vw,72px); letter-spacing:-2px; }
  .gp-grid { grid-template-columns:repeat(2,1fr); }
}
`

const POSTERS = [
  { src:"https://framerusercontent.com/images/iE8GUSpBXPWoEaOp3ETJJ8aGTOE.jpg", name:"Mobil Campaign", cat:"Campaign · 2025" },
  { src:"https://framerusercontent.com/images/tM03no2f9ebDl2BwSmy5VU52xaE.jpg", name:"Mobil Campaign", cat:"Campaign · 2025" },
  { src:"https://framerusercontent.com/images/qsHEJ8tYT5T9R2YAMyyf3sU34.jpg", name:"Mobil Campaign", cat:"Campaign · 2025" },
  { src:"https://framerusercontent.com/images/UIr9xKTipnoDCkDVrXsgtNDzplc.jpg", name:"Mobil Campaign", cat:"Campaign · 2025" },
  { src:"https://framerusercontent.com/images/8yb4STNtwGNX6KXelgQ4ogIytxg.jpg", name:"Mobil Campaign", cat:"Campaign · 2025" },
  { src:"https://framerusercontent.com/images/eHuJP4WQF5NIUFheVtkecNNN7bI.jpg", name:"Mobil Campaign", cat:"Campaign · 2025" },
  { src:"https://framerusercontent.com/images/d2bcSJjhm0onP6f61sdww3vQs6M.jpg", name:"CBD Invite", cat:"Event · 2024" },
  { src:"https://framerusercontent.com/images/n1ufxskzJZCi4KkPDRYtgMvOqI.jpg", name:"Champions", cat:"Sports · 2024" },
  { src:"https://framerusercontent.com/images/UEoTkoe0hUtQOr5eK5nuqcXPCVQ.jpg", name:"Coorg Rally", cat:"Sports · 2024" },
  { src:"https://framerusercontent.com/images/jiCWJfp0LtMmzvJUG4DQDF1jbmk.jpg", name:"Coorg Rally", cat:"Sports · 2024" },
  { src:"https://framerusercontent.com/images/GnngQtYs67eXeDN24xvCB8ysA.jpg", name:"DriveX Ad", cat:"Brand · 2024" },
  { src:"https://framerusercontent.com/images/ry1MJQ0Hpt1Ircgxkth8JPvmgVw.jpg", name:"DriveX Ad", cat:"Brand · 2024" },
  { src:"https://framerusercontent.com/images/qviGy5BB4hXliii4I75YrDkEbEw.jpg", name:"DriveX Ad", cat:"Brand · 2024" },
  { src:"https://framerusercontent.com/images/jcnQUCfQpBm0Oa0Kd06TlyVKSzQ.jpg", name:"DriveX Ad", cat:"Brand · 2024" },
  { src:"https://framerusercontent.com/images/aAvx1TWYZnqgDur8U1A9TUnhzN4.jpg", name:"DriveX Ad", cat:"Brand · 2024" },
  { src:"https://framerusercontent.com/images/c1MeLlxpbp5AHD8jaLDzfXgcc.jpg", name:"DriveX Ad", cat:"Brand · 2024" },
  { src:"https://framerusercontent.com/images/OWX29tM2L9LcG9VQdccRfHYSrbE.jpg", name:"DriveX — Sell", cat:"Brand · 2024" },
  { src:"https://framerusercontent.com/images/7Dzjtyyt0kZcT1qIEc0rLBCMZNY.jpg", name:"DriveX — Buy", cat:"Brand · 2024" },
  { src:"https://framerusercontent.com/images/VdMgPSt8nTUTtmoqIilkgcsiw.jpg", name:"DriveX — Buy", cat:"Brand · 2024" },
  { src:"https://framerusercontent.com/images/AC0wlgrQpk9x5UXS5X2LHgDXbE.jpg", name:"Swiggy Fraud Alert", cat:"Campaign · 2024" },
  { src:"https://framerusercontent.com/images/ph6nhNJPN60DWzZZlrB627eRsx4.jpg", name:"Swiggy Fraud Alert", cat:"Campaign · 2024" },
  { src:"https://framerusercontent.com/images/l7HF0tAQu47RJBlPEi0QLjNZoyM.jpg", name:"K1000 Rally", cat:"Sports · 2024" },
  { src:"https://framerusercontent.com/images/lOnuKfNATSsCxD9V7sE5DgfwI.jpg", name:"K1000 Rally", cat:"Sports · 2024" },
  { src:"https://framerusercontent.com/images/87fN20rtXTZoN3lW8p37804GFiQ.jpg", name:"Mobil Jan 2025", cat:"Campaign · 2025" },
  { src:"https://framerusercontent.com/images/Y8aB6dMFjHDbCrXUa1LfVESPkyo.jpg", name:"Mobil Jan 2025", cat:"Campaign · 2025" },
  { src:"https://framerusercontent.com/images/TBq2g251UU0hlFFK801OcBiWe6Y.jpg", name:"Mobil Jan 2025", cat:"Campaign · 2025" },
  { src:"https://framerusercontent.com/images/xhxlh6BUl9u9MjmRyVwbreCWxM4.jpg", name:"Mobil Jan 2025", cat:"Campaign · 2025" },
  { src:"https://framerusercontent.com/images/tWPMJo2N6nvr5o9Bryq6DoVjEw.jpg", name:"Mobil Poster", cat:"Campaign · 2024" },
  { src:"https://framerusercontent.com/images/ys6nDuNIeP6mycX1gsNANEUrMEk.jpg", name:"Mobil Poster", cat:"Campaign · 2024" },
  { src:"https://framerusercontent.com/images/FNa6VBNvo9TaQRj0WJIMB4f8Eds.jpg", name:"NR KolinPlus SCC", cat:"Brand · 2024" },
  { src:"https://framerusercontent.com/images/N91PE10D2ytzJbIqCw8qo2RebY.jpg", name:"NR KolinPlus", cat:"Brand · 2024" },
  { src:"https://framerusercontent.com/images/C2RoyIkNG8Xb1enLk15FG5rphE.jpg", name:"NR KolinPlus", cat:"Brand · 2024" },
  { src:"https://framerusercontent.com/images/ZrPmQM1MdPPoAtZoo9xyU8KQHf8.jpg", name:"NR KolinPlus", cat:"Brand · 2024" },
  { src:"https://framerusercontent.com/images/RllcHru8PTXPXw9aoqm1rg0.jpg", name:"NR KolinPlus", cat:"Brand · 2024" },
  { src:"https://framerusercontent.com/images/4PvTEuXKXIpdjtTyrb0yGVca01U.jpg", name:"NR KolinPlus", cat:"Brand · 2024" },
  { src:"https://framerusercontent.com/images/G5X3AmhNgzICjujqX9BtfIMwv8.jpg", name:"NR Zigbir", cat:"Brand · 2024" },
  { src:"https://framerusercontent.com/images/tVjVtBfwREtxYYXWsFAl9grcTKM.jpg", name:"OLF Musicians", cat:"Event · 2025" },
  { src:"https://framerusercontent.com/images/r4HH5msKRBZa931zqyGqJK1BNLo.jpg", name:"OLF Musicians", cat:"Event · 2025" },
  { src:"https://framerusercontent.com/images/61he7TNOhjhfI2U2vnHpNqKuSc.png", name:"OLF Speaker", cat:"Event · 2025" },
  { src:"https://framerusercontent.com/images/43c8TDmR5CLsxHcp4niVQwzr90Y.jpg", name:"OLF Event", cat:"Event · 2025" },
  { src:"https://framerusercontent.com/images/QTZqbfVhR2AxMwOmfvdYZ7DkA.jpg", name:"Poster Blast", cat:"Design · 2024" },
  { src:"https://framerusercontent.com/images/NQ9LrZXn76hROEg1eAPPW0fBdfQ.jpg", name:"Poster Blast", cat:"Design · 2024" },
  { src:"https://framerusercontent.com/images/5cPxpIfJ9lqDRDW1tQWrN2QjmQ.jpg", name:"Poster Blast", cat:"Design · 2024" },
  { src:"https://framerusercontent.com/images/EaOLTVIQulpramRKk38sMzHLQ.jpg", name:"Poster Blast", cat:"Design · 2024" },
  { src:"https://framerusercontent.com/images/UC92ZZRjWVg0r6E9sQQZWs7oKo.jpg", name:"Poster Blast", cat:"Design · 2024" },
  { src:"https://framerusercontent.com/images/VpFmNUzkq4WItwxMZFSYvQgn0U.jpg", name:"Poster Blast", cat:"Design · 2024" },
  { src:"https://framerusercontent.com/images/Z61aOEd5yJKseXpP9ExKJflxuE.jpg", name:"Poster Blast", cat:"Design · 2024" },
  { src:"https://framerusercontent.com/images/rdU7YRLCJsYscSi9jstmfaqxhQc.jpg", name:"Poster Blast", cat:"Design · 2024" },
  { src:"https://framerusercontent.com/images/HwH5Kw6FaCyt4bFsUYiv3aiSc.jpg", name:"Nashik Event", cat:"Event · 2024" },
  { src:"https://framerusercontent.com/images/GaNOPE3w9WreA2ZM2bazQpo2ck.jpg", name:"Nashik Event", cat:"Event · 2024" },
  { src:"https://framerusercontent.com/images/L9LCKhAgHAUWHSgEVinOG2haQ.jpg", name:"OLF Poster", cat:"Event · 2025" },
  { src:"https://framerusercontent.com/images/zYCaLwW6l47LgoEM7SuZiOg44.jpg", name:"OLF Poster", cat:"Event · 2025" },
  { src:"https://framerusercontent.com/images/i3q0ywkrCnRRB70ibTkR9RA.jpg", name:"OLF Poster", cat:"Event · 2025" },
  { src:"https://framerusercontent.com/images/f00BJw0KyYy4oN2L3z54bp5dU.jpg", name:"Speaker Series", cat:"Event · 2025" },
  { src:"https://framerusercontent.com/images/DoivB5vtOgLcbqHW1sESAMUniw.jpg", name:"Speaker Series", cat:"Event · 2025" },
  { src:"https://framerusercontent.com/images/mtlqwBLu9fuB2RYtBwGZwZDDg.jpg", name:"TSI New Year", cat:"Event · 2025" },
  { src:"https://framerusercontent.com/images/4zYSfNrSN9p4VfYxD3giVvL2Psc.jpg", name:"TSI Republic Day", cat:"Event · 2025" },
  { src:"https://framerusercontent.com/images/a0sjE1UvbWQQsUJFrc59q1QfWGE.jpg", name:"We Are Open", cat:"Brand · 2024" },
  { src:"https://framerusercontent.com/images/EYOQkDn8fiqbXYgfk2kC211EIjA.jpg", name:"Winners Nashik", cat:"Sports · 2024" },
  { src:"https://framerusercontent.com/images/fOoOuUw54QU3MWeXhUjmqzIj0Qc.jpg", name:"Christmas Post", cat:"Campaign · 2024" },
]

const EAGER_COUNT = 8

export default function GalleryPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="gp-wrap">
        <h1 className="gp-h1">Poster blasts</h1>
        <div className="gp-meta">
          <p>Visual work built for the feed — campaign posters, event graphics, and brand moments designed to stop the scroll.</p>
          <span>{POSTERS.length} / {POSTERS.length} Posters</span>
        </div>
        <div className="gp-divider" />
        <div className="gp-grid">
          {POSTERS.map((p, i) => (
            <div key={i} className="gp-cell">
              <img src={p.src} alt={p.name} loading={i < EAGER_COUNT ? "eager" : "lazy"} decoding="async" />
              <span className="gp-cell-num">{String(i + 1).padStart(2, "0")}</span>
              <div className="gp-cell-hover">
                <div className="gp-cell-name">{p.name}</div>
                <div className="gp-cell-cat">{p.cat}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
