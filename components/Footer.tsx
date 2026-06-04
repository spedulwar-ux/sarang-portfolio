export default function Footer() {
  const CSS = `
  .ft { border-top:1px solid var(--line-2); padding-top:clamp(64px,7vw,108px); overflow:hidden; background:var(--bg); }
  .ft-inner { max-width:var(--maxw); margin:0 auto; padding-inline:var(--edge); }
  .ft-cols { display:grid; grid-template-columns:1.4fr 1fr 1fr 1fr; gap:40px; padding-bottom:64px; border-bottom:1px solid var(--line); }
  .ft-col h4 { font-family:var(--sans); font-weight:700; font-size:12px; letter-spacing:.2em; text-transform:uppercase; color:var(--lime); margin:0 0 22px; }
  .ft-col ul { list-style:none; display:flex; flex-direction:column; gap:13px; }
  .ft-col a, .ft-col li { font-family:var(--sans); font-weight:500; font-size:16px; color:var(--muted-2); transition:color .2s; }
  .ft-col a:hover { color:var(--lime); }
  .ft-lead-logo { height:32px; width:auto; margin-bottom:28px; }
  .ft-lead-tag { font-family:var(--serif); font-weight:400; font-size:clamp(20px,1.8vw,26px); line-height:1.34; max-width:22ch; color:var(--text); }
  .ft-lead-tag em { font-style:italic; color:var(--lime); }
  .ft-totop { margin-top:26px; display:inline-flex; align-items:center; gap:10px; font-family:var(--sans); font-weight:600; font-size:13px; letter-spacing:.14em; text-transform:uppercase; border:1px solid var(--line-2); border-radius:999px; padding:11px 20px; transition:all .25s; color:var(--text); text-decoration:none; }
  .ft-totop:hover { background:var(--lime); color:var(--bg); border-color:var(--lime); }
  .ft-meta { display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; padding-block:40px; font-family:var(--sans); font-size:13px; letter-spacing:.04em; color:var(--muted); }
  @media (max-width:960px) { .ft-cols { grid-template-columns:1fr 1fr; gap:34px; } }
  @media (max-width:560px) { .ft-cols { grid-template-columns:1fr; } }
  `
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <footer className="ft" id="contact">
        <div className="ft-inner">
          <div className="ft-cols">
            <div className="ft-col">
              <img src="/images/logo-lime.png" alt="Designs by Sarang" className="ft-lead-logo" />
              <p className="ft-lead-tag">Got a brand that deserves to be <em>impossible to ignore?</em> Let's build it.</p>
              <a className="ft-totop" href="#top">Back to top ↑</a>
            </div>
            <div className="ft-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/work">Work</a></li>
                <li><a href="/prints">Prints</a></li>
                <li><a href="/logos">Logofolio</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="ft-col">
              <h4>Networks</h4>
              <ul>
                <li><a href="https://www.instagram.com/007sarang/" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/sarang-pedulwar-00169568/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://www.behance.net/" target="_blank" rel="noreferrer">Behance</a></li>
                <li><a href="mailto:spedulwar@gmail.com">Email</a></li>
              </ul>
            </div>
            <div className="ft-col">
              <h4>Location</h4>
              <ul>
                <li>Based in Bangalore</li>
                <li>Art Director — Illustrator</li>
                <li>hello@designsbysarang.com</li>
              </ul>
            </div>
          </div>
          <div className="ft-meta">
            <span>© 2026 Designs by Sarang. All rights reserved.</span>
            <span>Designed &amp; built in Bangalore.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
