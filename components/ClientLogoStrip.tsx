const KEYFRAMES = `
@keyframes scroll-left {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`
const LOGOS = [
  { src: "https://framerusercontent.com/images/NpG1HQ4cjYjKhxvn1ZKVxbJ4w3c.png", alt: "Client", maxH: 28, maxW: 130 },
  { src: "https://framerusercontent.com/images/tWIOtuc84bu5wMJ4ZOXbbBfhOfM.png", alt: "Flipkart", maxH: 48, maxW: 160 },
  { src: "https://framerusercontent.com/images/hI6KjQKWvvDVItkvKoG2nNS7F2E.png", alt: "Client", maxH: 28, maxW: 130 },
  { src: "https://framerusercontent.com/images/2K6RKz3HyAgkOYTyqkseZBHE0I.png", alt: "Swiggy", maxH: 48, maxW: 160 },
  { src: "https://framerusercontent.com/images/jW8M5IwHPZgfbvPEN2nDK5D78I.png", alt: "RCB", maxH: 64, maxW: 180 },
  { src: "https://framerusercontent.com/images/ljOdAoALCSidEtJkPZtXLbgJs.png", alt: "Client", maxH: 28, maxW: 130 },
  { src: "https://framerusercontent.com/images/FmyFvbYkOpTGutkvLRtSSbZsMA.png", alt: "Client", maxH: 28, maxW: 130 },
  { src: "https://framerusercontent.com/images/KP7TKJUOUUp3QuoVHlCd2HcvCQ.png", alt: "Client", maxH: 48, maxW: 160 },
  { src: "https://framerusercontent.com/images/xs9NdWKisvP9XK6WFbmT51sME.png", alt: "Bhadra", maxH: 48, maxW: 160 },
  { src: "https://framerusercontent.com/images/gI0zN7jxeygdDSC0J4BtbBZKPU.png", alt: "Bigbasket", maxH: 48, maxW: 160 },
  { src: "https://framerusercontent.com/images/59nwIFnZtPBF4ivmylwQgO6WHdg.png", alt: "Client", maxH: 28, maxW: 130 },
  { src: "https://framerusercontent.com/images/iKCuu98uawW9Kwl23lJHkM0PNs.png", alt: "Client", maxH: 28, maxW: 130 },
]

export default function ClientLogoStrip() {
  const doubled = [...LOGOS, ...LOGOS]
  return (
    <div style={{ width: "100%", backgroundColor: "#000", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", overflow: "hidden", padding: "28px 0", boxSizing: "border-box" }}>
      <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />
      <div style={{ display: "flex", width: "max-content", animation: "scroll-left 32s linear infinite", alignItems: "center", gap: "0px" }}>
        {doubled.map((logo, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, height: "72px", paddingLeft: "56px", paddingRight: "56px", borderRight: "1px solid rgba(255,255,255,0.08)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo.src} alt={logo.alt} style={{ maxHeight: `${logo.maxH}px`, width: "auto", maxWidth: `${logo.maxW}px`, objectFit: "contain", display: "block" }} />
          </div>
        ))}
      </div>
    </div>
  )
}
