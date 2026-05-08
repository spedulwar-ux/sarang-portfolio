export default function IntroOverlay() {
    const css = `
        @keyframes intro-out {
            0%   { opacity: 1; }
            82%  { opacity: 1; }
            100% { opacity: 0; visibility: hidden; }
        }
        .intro-overlay {
            position: fixed;
            inset: 0;
            background: #000;
            z-index: 9999;
            pointer-events: none;
            animation: intro-out 4.0s cubic-bezier(.4,0,.2,1) forwards;
        }
    `
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: css }} />
            <div className="intro-overlay" />
        </>
    )
}
