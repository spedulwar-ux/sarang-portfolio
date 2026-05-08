const CSS = `
.ap-wrap { width:100%; background:#000; font-family:inherit; box-sizing:border-box; }
.ap-hero { display:flex; flex-direction:row; align-items:flex-end; gap:48px; padding:100px 24px 64px; border-bottom:1px solid rgba(255,255,255,0.08); }
.ap-hero-left { flex:1; min-width:0; display:flex; flex-direction:column; gap:32px; }
.ap-tag { font-size:10px; font-weight:500; letter-spacing:0.2em; text-transform:uppercase; color:rgba(255,255,255,0.3); display:flex; align-items:center; gap:8px; }
.ap-tag::before { content:''; display:inline-block; width:5px; height:5px; border-radius:50%; background:rgba(255,255,255,0.3); }
.ap-hero-name { font-size:clamp(56px,8vw,120px); font-weight:800; color:#fff; line-height:0.88; letter-spacing:-0.04em; margin:0; }
.ap-hero-name span { color:rgba(255,255,255,0.3); font-weight:200; }
.ap-hero-intro { font-size:16px; line-height:1.7; color:rgba(255,255,255,0.45); max-width:480px; margin:0; }
.ap-hero-intro em { color:rgba(255,255,255,0.8); font-style:normal; }
.ap-hero-right { width:310px; flex-shrink:0; }
.ap-portrait { width:100%; aspect-ratio:3/4; background:#0d0d0d; border:1px solid rgba(255,255,255,0.08); position:relative; overflow:hidden; }
.ap-portrait img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:top center; display:block; }
.ap-portrait-corner { position:absolute; width:12px; height:12px; border-color:rgba(255,255,255,0.15); border-style:solid; }
.ap-portrait-corner.tl { top:12px; left:12px; border-width:1px 0 0 1px; }
.ap-portrait-corner.tr { top:12px; right:12px; border-width:1px 1px 0 0; }
.ap-portrait-corner.bl { bottom:12px; left:12px; border-width:0 0 1px 1px; }
.ap-portrait-corner.br { bottom:12px; right:12px; border-width:0 1px 1px 0; }
.ap-bio { display:grid; grid-template-columns:1fr 2fr; gap:64px; padding:72px 24px; border-bottom:1px solid rgba(255,255,255,0.08); align-items:start; }
.ap-section-label { font-size:10px; font-weight:500; letter-spacing:0.2em; text-transform:uppercase; color:rgba(255,255,255,0.25); padding-top:6px; }
.ap-bio-text { display:flex; flex-direction:column; gap:24px; }
.ap-bio-p { font-size:17px; line-height:1.75; color:rgba(255,255,255,0.5); margin:0; }
.ap-bio-p em { color:rgba(255,255,255,0.85); font-style:normal; font-weight:500; }
.ap-skills { display:grid; grid-template-columns:1fr 2fr; gap:64px; padding:72px 24px; border-bottom:1px solid rgba(255,255,255,0.08); align-items:start; }
.ap-skills-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:1px; background:rgba(255,255,255,0.07); }
.ap-skill-cell { background:#000; padding:20px; display:flex; flex-direction:column; gap:6px; transition:background 0.2s; }
.ap-skill-cell:hover { background:#0f0f0f; }
.ap-skill-cell.full { grid-column:1 / -1; }
.ap-skill-name { font-size:14px; font-weight:600; color:#fff; }
.ap-skill-desc { font-size:11px; color:rgba(255,255,255,0.3); line-height:1.5; }
.ap-exp { display:grid; grid-template-columns:1fr 2fr; gap:64px; padding:72px 24px; border-bottom:1px solid rgba(255,255,255,0.08); align-items:start; }
.ap-exp-list { display:flex; flex-direction:column; }
.ap-exp-item { display:flex; flex-direction:row; gap:24px; padding:24px 0; border-bottom:1px solid rgba(255,255,255,0.06); }
.ap-exp-item:first-child { padding-top:0; }
.ap-exp-item:last-child { border-bottom:none; }
.ap-exp-year { font-size:11px; color:rgba(255,255,255,0.25); font-weight:500; white-space:nowrap; padding-top:3px; min-width:80px; }
.ap-exp-info { flex:1; display:flex; flex-direction:column; gap:4px; }
.ap-exp-role { font-size:15px; font-weight:600; color:#fff; }
.ap-exp-company { font-size:13px; color:rgba(255,255,255,0.4); margin-bottom:8px; }
.ap-exp-desc { font-size:12px; line-height:1.7; color:rgba(255,255,255,0.28); }
.ap-cta { display:flex; flex-direction:row; align-items:center; justify-content:space-between; gap:32px; padding:72px 24px 96px; }
.ap-cta-text { font-size:clamp(32px,5vw,72px); font-weight:800; color:#fff; letter-spacing:-0.03em; line-height:1; }
.ap-cta-text span { color:rgba(255,255,255,0.25); font-weight:200; font-style:italic; }
.ap-cta-btn { display:inline-flex; align-items:center; gap:10px; padding:14px 28px; border:1px solid rgba(255,255,255,0.2); border-radius:100px; text-decoration:none; transition:background 0.2s, border-color 0.2s; flex-shrink:0; }
.ap-cta-btn:hover { background:rgba(255,255,255,0.06); border-color:rgba(255,255,255,0.35); }
.ap-cta-btn-text { font-size:13px; font-weight:500; color:rgba(255,255,255,0.75); letter-spacing:0.04em; }
.ap-cta-arrow { width:16px; height:16px; color:rgba(255,255,255,0.4); transition:transform 0.2s; }
.ap-cta-btn:hover .ap-cta-arrow { transform:translateX(3px); }
@media (max-width:900px) {
  .ap-hero { flex-direction:column-reverse; align-items:flex-start; padding:80px 16px 48px; gap:32px; }
  .ap-hero-right { width:200px; }
  .ap-bio, .ap-skills, .ap-exp { grid-template-columns:1fr; gap:24px; padding:48px 16px; }
  .ap-cta { flex-direction:column; align-items:flex-start; padding:48px 16px 72px; gap:24px; }
}
@media (max-width:540px) {
  .ap-skills-grid { grid-template-columns:1fr; }
  .ap-skill-cell.full { grid-column:auto; }
  .ap-hero-name { font-size:52px; }
}
`

const SKILLS = [
  { name:"Art Direction", desc:"Visual storytelling, campaign concepts, creative strategy" },
  { name:"Brand Identity", desc:"Wordmarks, visual systems, brand language" },
  { name:"Illustration", desc:"Editorial, character, poster, and digital illustration" },
  { name:"Typography", desc:"Display typography, custom lettering, type pairings" },
  { name:"Packaging Design", desc:"FMCG, D2C, premium retail packaging" },
  { name:"Motion & Animation", desc:"Social motion, logo animation, kinetic typography" },
  { name:"Photography & Videography", desc:"Creative direction, visual composition, storytelling", full: true },
]

const EXPERIENCE = [
  { year:"2024 – Now", role:"Art Director", company:"Clemenzie, Bangalore", desc:"Leading visual direction across branding, campaigns, packaging, and digital communication while shaping cohesive and strategy-led creative systems for modern consumer brands." },
  { year:"2021 – 2024", role:"Senior Graphic Designer", company:"Clemenzie, Bangalore", desc:"Worked across brand identity, social campaigns, packaging, and visual storytelling for multiple clients, developing concept-driven creative solutions across digital and print." },
  { year:"2018 – 2021", role:"Graphic Designer · Illustrator · UI Designer", company:"CureSkin, Bangalore", desc:"Designed digital experiences, illustrations, and visual communication for the skincare platform, focusing on user engagement, accessibility, and brand consistency." },
  { year:"2018", role:"Graphic Designer Intern", company:"CureSkin, Bangalore", desc:"Started as a design intern contributing to visual assets, illustrations, and marketing creatives, building the foundation for a multidisciplinary design approach." },
  { year:"2016", role:"Graphic Designer", company:"Franchise Globe", desc:"Worked on marketing collateral, branding materials, and communication design while supporting and coordinating with the internal creative team." },
]

export default function AboutPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="ap-wrap">
        <div className="ap-hero">
          <div className="ap-hero-left">
            <span className="ap-tag">Art Director · Designer · Illustrator</span>
            <h1 className="ap-hero-name">The person <span>behind</span><br />the work.</h1>
            <p className="ap-hero-intro">
              I&apos;m Sarang — an <em>Art Director, Designer &amp; Illustrator</em> based in Bangalore,
              with <em>8+ years</em> of experience building brands, campaigns, and visual identities
              for companies that care deeply about how they&apos;re perceived.
            </p>
          </div>
          <div className="ap-hero-right">
            <div className="ap-portrait">
              <img src="https://framerusercontent.com/images/eg0n2P5lbB9RzdwPsQptZ2mAXpY.png" alt="Sarang Pedulwar" />
              <div className="ap-portrait-corner tl" />
              <div className="ap-portrait-corner tr" />
              <div className="ap-portrait-corner bl" />
              <div className="ap-portrait-corner br" />
            </div>
          </div>
        </div>
        <div className="ap-bio">
          <span className="ap-section-label">About</span>
          <div className="ap-bio-text">
            <p className="ap-bio-p">My creative journey started nearly 10 years ago through <em>photography</em>. What began as an obsession with framing, lighting, and storytelling slowly evolved into a multidisciplinary creative practice blending <em>art direction, branding, illustration, photography, and visual communication</em>.</p>
            <p className="ap-bio-p">That background continues to shape the way I think today. Photography taught me how to observe emotion, detail, balance, and atmosphere — while design taught me how to translate those instincts into meaningful visual systems and brand experiences.</p>
            <p className="ap-bio-p">Over the past 8+ years, I&apos;ve worked across brand identity, packaging, campaign design, illustration, retail visuals, digital experiences, photography, and videography — building everything from <em>premium alcohol brands and motorsport campaigns</em> to FMCG packaging and launch identities.</p>
            <p className="ap-bio-p">I&apos;ve collaborated with brands like <em>Swiggy, BigBasket, Flipkart, RCB, DriveX, and TSI Racing</em> — helping shape how they communicate across print, digital, social, and experiential platforms.</p>
            <p className="ap-bio-p">I believe great creative work comes from curiosity and clarity of thought. Whether directing a campaign, designing a brand system, shooting visuals, or crafting a narrative, I enjoy finding the balance between <em>bold ideas and refined execution</em>.</p>
          </div>
        </div>
        <div className="ap-skills">
          <span className="ap-section-label">Expertise</span>
          <div className="ap-skills-grid">
            {SKILLS.map(s => (
              <div key={s.name} className={`ap-skill-cell${s.full ? " full" : ""}`}>
                <span className="ap-skill-name">{s.name}</span>
                <span className="ap-skill-desc">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="ap-exp">
          <span className="ap-section-label">Experience</span>
          <div className="ap-exp-list">
            {EXPERIENCE.map(e => (
              <div key={e.role + e.year} className="ap-exp-item">
                <span className="ap-exp-year">{e.year}</span>
                <div className="ap-exp-info">
                  <span className="ap-exp-role">{e.role}</span>
                  <span className="ap-exp-company">{e.company}</span>
                  <span className="ap-exp-desc">{e.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="ap-cta">
          <div className="ap-cta-text">Let&apos;s make<br /><span>something</span> great.</div>
          <a href="mailto:spedulwar@gmail.com" className="ap-cta-btn">
            <span className="ap-cta-btn-text">Get in touch</span>
            <svg className="ap-cta-arrow" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </>
  )
}
