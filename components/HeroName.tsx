const CSS = `
  @keyframes name-wipe {
    from { clip-path: inset(0 100% 0 0); }
    to   { clip-path: inset(0 1% 0 0); }
  }
  @keyframes hn-fade {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hn-root {
    width: 100%; background: #000;
    padding: 48px 0 0 0; box-sizing: border-box;
  }
  .hn-meta {
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 20px; padding: 0 24px;
    opacity: 0; animation: hn-fade 0.45s ease 0.06s forwards;
  }
  .hn-meta-tag {
    font-family: 'Inter', sans-serif;
    font-size: 10.5px; font-weight: 500; letter-spacing: 0.18em;
    text-transform: uppercase; color: rgba(255,255,255,0.28);
  }
  .hn-dot {
    display: inline-block; width: 5px; height: 5px; border-radius: 50%;
    background: #4ade80; margin-right: 7px; vertical-align: middle;
    position: relative; top: -1px;
  }
  .hn-text {
    display: block;
    font-family: 'Inter', sans-serif;
    font-weight: 600; line-height: 0.88; letter-spacing: -0.04em;
    color: #fff; text-align: left; white-space: nowrap;
    padding-left: 14px; margin: 0;
    font-size: min(30.5vw, 452px);
    clip-path: inset(0 100% 0 0);
    animation: name-wipe 0.52s cubic-bezier(.77,0,.18,1) 0.12s forwards;
  }
  .hn-line {
    width: 100%; height: 1px;
    background: rgba(187,187,187,0.15); margin-top: 14px;
  }
  @media (max-width: 810px) {
    .hn-root { padding-top: 36px; }
    .hn-meta { margin-bottom: 14px; }
    .hn-text { font-size: 28vw; }
  }
`

export default function HeroName() {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: CSS }} />
            <div className="hn-root">
                <div className="hn-meta">
                    <span className="hn-meta-tag"><span className="hn-dot" />Available for work</span>
                    <span className="hn-meta-tag">Art Director · Illustrator · Bangalore</span>
                </div>
                <p className="hn-text">Sarang</p>
                <div className="hn-line" />
            </div>
        </>
    )
}
