export default function Footer() {
  const CSS = `
  .ft-wrap {
    width: 100%; background: #000;
    border-top: 1px solid rgba(255,255,255,0.08);
    font-family: inherit;
  }
  .ft-mid {
    padding: 32px 24px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    display: flex; align-items: center;
    justify-content: space-between; gap: 24px; flex-wrap: wrap;
  }
  .ft-cols { display: flex; gap: 48px; flex-wrap: wrap; }
  .ft-col { display: flex; flex-direction: column; gap: 10px; }
  .ft-col-label {
    font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
    color: rgba(255,255,255,0.3); font-weight: 500;
  }
  .ft-col a, .ft-col span {
    font-size: 13px; color: rgba(255,255,255,0.5);
    text-decoration: none; transition: color 0.2s;
  }
  .ft-col a:hover { color: rgba(255,255,255,0.85); }
  .ft-top-btn {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 12px 28px; border: 1px solid rgba(255,255,255,0.2);
    border-radius: 100px; color: rgba(255,255,255,0.6);
    font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase;
    text-decoration: none; transition: all 0.2s; white-space: nowrap;
  }
  .ft-top-btn:hover { border-color: rgba(255,255,255,0.4); color: #fff; }
  .ft-bottom {
    padding: 40px 24px 32px;
    display: flex; align-items: flex-end; justify-content: space-between;
  }
  .ft-year {
    font-size: clamp(80px, 14vw, 180px); font-weight: 700;
    color: #fff; line-height: 0.85; letter-spacing: -4px;
  }
  .ft-credit {
    font-size: 12px; color: rgba(255,255,255,0.25);
    text-align: right; max-width: 200px;
  }
  @media (max-width: 640px) {
    .ft-mid { flex-direction: column; align-items: flex-start; }
    .ft-bottom { flex-direction: column; gap: 16px; align-items: flex-start; }
    .ft-year { font-size: clamp(60px, 20vw, 100px); }
  }
  `
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <footer className="ft-wrap">
        <div className="ft-mid">
          <div className="ft-cols">
            <div className="ft-col">
              <span className="ft-col-label">Quick Links</span>
              <a href="/work">Work</a>
              <a href="/prints">Prints</a>
              <a href="/logos">Logofolio</a>
              <a href="/contact">Contact</a>
            </div>
            <div className="ft-col">
              <span className="ft-col-label">Networks</span>
              <a href="https://www.instagram.com/007sarang/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/in/sarang-pedulwar-00169568/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://www.behance.net/" target="_blank" rel="noreferrer">Behance</a>
              <a href="mailto:spedulwar@gmail.com">Email</a>
            </div>
            <div className="ft-col">
              <span className="ft-col-label">Location</span>
              <span>Based in Bangalore</span>
              <span>Art Director · Illustrator</span>
            </div>
          </div>
          <a href="#top" className="ft-top-btn">↑ Back to Top</a>
        </div>
        <div className="ft-bottom">
          <h2 className="ft-year">©2025</h2>
          <p className="ft-credit">Designed &amp; built by Sarang Pedulwar</p>
        </div>
      </footer>
    </>
  )
}
