const CSS = `
.lp-wrap { width:100%; background:#000; font-family:inherit; padding:120px 24px 40px; box-sizing:border-box; }
.lp-h1 { margin:0 0 24px 0; font-size:clamp(60px,12vw,160px); font-weight:800; color:#fff; line-height:0.85; letter-spacing:-5px; }
.lp-meta { display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:48px; gap:20px; flex-wrap:wrap; }
.lp-meta p { margin:0; font-size:13px; line-height:1.65; color:rgba(255,255,255,0.4); max-width:520px; }
.lp-meta span { font-size:11px; color:rgba(255,255,255,0.2); letter-spacing:2px; text-transform:uppercase; font-weight:500; white-space:nowrap; }
.lp-divider { width:100%; height:1px; background:rgba(255,255,255,0.08); margin-bottom:0; }
.lp-grid { width:100%; display:grid; grid-template-columns:repeat(5,1fr); gap:1px; background:rgba(255,255,255,0.07); padding-bottom:120px; box-sizing:border-box; }
.lp-cell { aspect-ratio:1; background:#0d0d0d; overflow:hidden; position:relative; }
.lp-cell img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; }
@media (max-width:900px) { .lp-wrap { padding:80px 16px 32px; } .lp-h1 { font-size:clamp(48px,14vw,80px); letter-spacing:-3px; } .lp-grid { grid-template-columns:repeat(3,1fr); } }
@media (max-width:540px) { .lp-grid { grid-template-columns:repeat(2,1fr); } }
`

const LOGOS = [
  "https://framerusercontent.com/images/eFZ92q2N8bxRJHw9JnByUDHvw.png","https://framerusercontent.com/images/OCZ88SSUXOo8aOFNIViMiabUc.png","https://framerusercontent.com/images/xXDCe5kZhQfC5GCuwowAbxwyY.png","https://framerusercontent.com/images/FaJ1ijBzfaNIZCiuBitzVesO9uc.png","https://framerusercontent.com/images/CP1vcXzPrO2HBVkaFXEv4xXpZNI.png",
  "https://framerusercontent.com/images/aOTIngabA5SMqz9yF0CI7rYuoA.png","https://framerusercontent.com/images/XnQqTgOYXLHiV7iZhnzHDQeeQ.png","https://framerusercontent.com/images/Qb0KTsxZWXd1BxfpunV3jfVrYo4.png","https://framerusercontent.com/images/6MdttJzDk3pNuAlxmU4bR6rdXHY.png","https://framerusercontent.com/images/Q5UnOQbwdsE1txonW6Q2l25w.png",
  "https://framerusercontent.com/images/aiNTudDqiwLWVNeAhl76nVYWe3c.png","https://framerusercontent.com/images/rNbiwyHKxeKyQFSROtZMRIsecw.png","https://framerusercontent.com/images/Sewbl3LN1HL3nCIsLnqCzTDII.png","https://framerusercontent.com/images/esSutBaLpStRSI63Lms8SjS7uKE.png","https://framerusercontent.com/images/nYhHMG584A5vK6NLtLGp6GDd0.png",
  "https://framerusercontent.com/images/I0K44SfLBsTuwxeCY7zofsWV8E.png","https://framerusercontent.com/images/SzAARuTY1qoppO07fW2WBV8KM.png","https://framerusercontent.com/images/N1EdLQaXkl3ADWaQEbZlefN8.png","https://framerusercontent.com/images/1AMjLJ3SSmXkx9lxuLqyjKm0V10.png","https://framerusercontent.com/images/0wp4k40Gezsl8vY0ZBNbBArOYcE.png",
  "https://framerusercontent.com/images/0eoBoDapF0IJePaLaSnzrId4UY.png","https://framerusercontent.com/images/k1WnVBFf9l3j7shTkNsDw1HzXM.png","https://framerusercontent.com/images/QRdtqGnJ27Thcf8zQfGUErwH2k.png","https://framerusercontent.com/images/9tXWI1GRvaAIWVcHUXwRSUC8AY.png","https://framerusercontent.com/images/onw9VxxqcGCbMHEqcldLhr9k.png",
  "https://framerusercontent.com/images/iT24s1WREwZd79sybUHURiqmI0.png","https://framerusercontent.com/images/u5CsOuvP5agqMvoRubU9arwWK8.png","https://framerusercontent.com/images/Cm16ZTA1KPDAKT51v3ooS781SM.png","https://framerusercontent.com/images/Q3nwzUByEex7Nq5rjPwCD4fxASc.png","https://framerusercontent.com/images/y92L9Fur6fSxdQybtwPgMZbmJcA.png",
  "https://framerusercontent.com/images/l8yWU8z5690ZoLiEuNbR5zMfYs.png","https://framerusercontent.com/images/XLgxNZfOlxSkwJosRN1tLpboBI.png","https://framerusercontent.com/images/CskdBEkwU1uhJqninM3XN6BzII.png","https://framerusercontent.com/images/alHwBN1cY5ZjUb7y3SvbLcb4Ro.png","https://framerusercontent.com/images/czJUazBFb91awHE5UvNtd0orA.png",
  "https://framerusercontent.com/images/fmYm7ZREt2gMKv1bfFT5SbCGG1A.png","https://framerusercontent.com/images/cnK5qUJ1ORfK5mZei5PECzCSzE.png","https://framerusercontent.com/images/93oSoclWs1h0WsmJG6jevuBBs14.png","https://framerusercontent.com/images/LiadOZLs0TCcuFblGgg7GMwQo4.png","https://framerusercontent.com/images/FcwtJTGrGJzuooVd8CuNrFi4LiY.png",
  "https://framerusercontent.com/images/QQm777lulSEdUJOBFwRGz1zhd0.png","https://framerusercontent.com/images/6u7ELonXGu3q338g5ZcmLTtalrE.png","https://framerusercontent.com/images/lvHnEUWCUBPiJAJLv4lLVVypTY.png","https://framerusercontent.com/images/COObRAsHEJsAbjwRKDjZgoEtUs.png","https://framerusercontent.com/images/Mh2YO6oD2jllI9TZ38dDOGL25dA.png",
  "https://framerusercontent.com/images/0ngw4YEq5dnkht2AmGKjp1MmiNU.png","https://framerusercontent.com/images/psODvN3XcTnn98QM3ayYDudzSU.png","https://framerusercontent.com/images/lAomoAkVRTLShsz77HnpIddkvco.png","https://framerusercontent.com/images/VHgGJ2dqja3xdfbqJxK2gcuv3o.png","https://framerusercontent.com/images/nTn93b1PSl82TduVjjbZdvrG4.png",
  "https://framerusercontent.com/images/BYLg1m6QQE3rAJgThZgNOimaJRk.png","https://framerusercontent.com/images/sARMTTkDNov6JPLcC8o1G8xFGk.png","https://framerusercontent.com/images/9KYjHbrtaJivUYeEfSAFfFCCnyE.png","https://framerusercontent.com/images/qd8gL3CWs37oYEpJJYMmFW5rGsw.png","https://framerusercontent.com/images/Zp0wB3r7w8HH0fcVy7uzmOJO108.png",
  "https://framerusercontent.com/images/zv8HZauR8AIYEhdp1ojq9wB3VAc.png","https://framerusercontent.com/images/wrVXh9iGjxlaDQFB0LP8Mqtq2Y.png","https://framerusercontent.com/images/6YDbXY7iXF1Obe1iUAxci0wVCDA.png","https://framerusercontent.com/images/dzmrCWzxUF0Rc5J8qQx0cOi1w.png","https://framerusercontent.com/images/vDwS7uaOs4NQLaBbQfq3vIYbV84.png",
  "https://framerusercontent.com/images/4GW6xeJL6D05xIQnBaUNQpf7mbk.png",
]

export default function LogofolioPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="lp-wrap">
        <h1 className="lp-h1">Logofolio</h1>
        <div className="lp-meta">
          <p>A curated set of mark-making — wordmarks, letterforms, and brand symbols built for clarity and longevity.</p>
          <span>66 / 66 Marks</span>
        </div>
        <div className="lp-divider" />
      </div>
      <div className="lp-grid">
        {LOGOS.map((src, i) => (
          <div key={i} className="lp-cell">
            <img src={src} alt={`Logo ${i + 1}`} loading={i < 10 ? "eager" : "lazy"} />
          </div>
        ))}
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={`empty-${i}`} className="lp-cell" />
        ))}
      </div>
    </>
  )
}
