"use client"

const CSS = `
@keyframes hb-fade-up {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hb-wrap {
  width: 100%; display: flex; flex-direction: row;
  align-items: center; justify-content: space-between;
  gap: 40px; padding: 24px 24px 20px 24px; box-sizing: border-box;
  opacity: 0; animation: hb-fade-up 0.7s cubic-bezier(.16,1,.3,1) 0.8s forwards;
}
.hb-bio { flex: 1; min-width: 0; max-width: 560px; }
.hb-text { font-size: 15px; font-weight: 400; line-height: 1.65; color: rgba(255,255,255,0.42); letter-spacing: 0.01em; }
.hb-text em { color: rgba(255,255,255,0.72); font-style: normal; }
.hb-cta { flex-shrink: 0; }
.hb-btn {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 13px 24px; border: 1px solid rgba(255,255,255,0.18);
  border-radius: 100px; text-decoration: none;
  transition: background 0.22s ease, border-color 0.22s ease; cursor: pointer; background: transparent;
}
.hb-btn:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.3); }
.hb-btn-text { font-size: 13px; font-weight: 500; letter-spacing: 0.04em; color: rgba(255,255,255,0.75); }
.hb-arrow { width: 16px; height: 16px; color: rgba(255,255,255,0.45); transition: transform 0.22s ease; }
.hb-btn:hover .hb-arrow { transform: translateX(3px); }
@media (max-width: 768px) {
  .hb-wrap { flex-direction: column; align-items: flex-start; gap: 20px; padding: 20px 16px 16px 16px; }
  .hb-bio { max-width: 100%; }
  .hb-text { font-size: 14px; }
}
`

export default function HeroBio() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="hb-wrap">
        <div className="hb-bio">
          <p className="hb-text">
            Art Director &amp; Illustrator based in Bangalore, crafting{" "}
            <em>bold brand identities</em>, sharp campaigns, and visual stories
            that leave a lasting impression — for brands that dare to stand out.
          </p>
        </div>
        <div className="hb-cta">
          <a href="/about" className="hb-btn">
            <span className="hb-btn-text">About Me</span>
            <svg className="hb-arrow" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}
