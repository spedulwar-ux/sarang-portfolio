const CSS = `
.cp-wrap { width:100%; min-height:100vh; background:#000; font-family:inherit; padding:140px 24px 100px; box-sizing:border-box; }
.cp-inner { max-width:960px; margin:0 auto; }
.cp-tag { font-size:10px; font-weight:500; letter-spacing:0.2em; text-transform:uppercase; color:rgba(255,255,255,0.3); display:flex; align-items:center; gap:8px; margin-bottom:32px; }
.cp-tag::before { content:''; display:inline-block; width:5px; height:5px; border-radius:50%; background:rgba(255,255,255,0.3); }
.cp-h1 { font-size:clamp(60px,12vw,160px); font-weight:800; color:#fff; line-height:0.85; letter-spacing:-5px; margin:0 0 64px; }
.cp-h1 span { color:rgba(255,255,255,0.25); font-weight:200; }
.cp-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:1px; background:rgba(255,255,255,0.07); margin-bottom:80px; }
.cp-item { background:#000; padding:40px; display:flex; flex-direction:column; gap:12px; text-decoration:none; transition:background 0.2s; }
.cp-item:hover { background:#0a0a0a; }
.cp-item-label { font-size:10px; font-weight:500; letter-spacing:0.2em; text-transform:uppercase; color:rgba(255,255,255,0.25); }
.cp-item-value { font-size:clamp(18px,2.5vw,28px); font-weight:600; color:#fff; letter-spacing:-0.02em; }
.cp-item-sub { font-size:12px; color:rgba(255,255,255,0.3); margin-top:4px; }
.cp-arrow { font-size:20px; color:rgba(255,255,255,0.2); margin-top:auto; padding-top:24px; transition:transform 0.2s, color 0.2s; }
.cp-item:hover .cp-arrow { transform:translateX(4px); color:rgba(255,255,255,0.5); }
.cp-cta { display:flex; flex-direction:column; gap:16px; }
.cp-cta-txt { font-size:clamp(32px,5vw,64px); font-weight:800; color:#fff; letter-spacing:-0.03em; line-height:1; }
.cp-cta-txt span { color:rgba(255,255,255,0.25); font-weight:200; font-style:italic; }
.cp-cta-sub { font-size:15px; color:rgba(255,255,255,0.4); max-width:480px; line-height:1.7; }
@media(max-width:640px){
  .cp-wrap { padding:100px 16px 80px; }
  .cp-h1 { font-size:clamp(48px,16vw,80px); letter-spacing:-3px; }
  .cp-grid { grid-template-columns:1fr; }
}
`

const CONTACTS = [
  { label:"Email", value:"spedulwar@gmail.com", sub:"For project enquiries", href:"mailto:spedulwar@gmail.com" },
  { label:"LinkedIn", value:"Sarang Pedulwar", sub:"Let's connect professionally", href:"https://www.linkedin.com/in/sarang-pedulwar-00169568/" },
  { label:"Instagram", value:"@007sarang", sub:"Follow my work", href:"https://www.instagram.com/007sarang/" },
  { label:"Phone", value:"+91 8180 99 1329", sub:"Available Mon–Fri, 10am–6pm IST", href:"tel:+918180991329" },
]

export default function ContactPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="cp-wrap">
        <div className="cp-inner">
          <span className="cp-tag">Get in touch</span>
          <h1 className="cp-h1">Let&apos;s work <span>together.</span></h1>
          <div className="cp-grid">
            {CONTACTS.map(c => (
              <a key={c.label} href={c.href} className="cp-item" target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noreferrer" : undefined}>
                <span className="cp-item-label">{c.label}</span>
                <span className="cp-item-value">{c.value}</span>
                <span className="cp-item-sub">{c.sub}</span>
                <span className="cp-arrow">→</span>
              </a>
            ))}
          </div>
          <div className="cp-cta">
            <div className="cp-cta-txt">Available for <span>freelance</span><br />& full-time roles.</div>
            <p className="cp-cta-sub">Based in Bangalore. Open to remote and on-site opportunities globally. Let&apos;s create something memorable.</p>
          </div>
        </div>
      </div>
    </>
  )
}
