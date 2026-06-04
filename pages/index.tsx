import React, { useState, useEffect, useRef } from "react"
import Head from "next/head"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

/* ─────────────────────────── CSS ─────────────────────────── */
const CSS = `
/* shared utils */
.eyebrow { font-family:var(--sans); font-weight:700; font-size:13px; letter-spacing:.24em; text-transform:uppercase; color:var(--muted); }
.sec { padding-block:clamp(64px,8vw,128px); }
.sechead { display:flex; justify-content:space-between; align-items:flex-end; gap:30px; margin-bottom:clamp(40px,4.5vw,72px); border-bottom:1px solid var(--line-2); padding-bottom:26px; }
.sechead-l { display:flex; flex-direction:column; gap:18px; }
.sectitle { font-family:var(--serif); font-weight:460; font-size:clamp(48px,7vw,116px); line-height:.9; letter-spacing:-.025em; margin:0; }
.sectitle em { font-style:italic; font-weight:430; }
.sectitle .sc { font-family:var(--sans); font-weight:700; font-size:.24em; vertical-align:super; color:var(--lime); }
.seclink { font-family:var(--sans); font-weight:700; font-size:13px; letter-spacing:.18em; text-transform:uppercase; display:inline-flex; align-items:center; gap:10px; white-space:nowrap; padding-bottom:6px; color:var(--muted-2); transition:color .2s; }
.seclink:hover { color:var(--lime); }
.seclink .arr { transition:transform .25s ease; }
.seclink:hover .arr { transform:translateX(4px); }
.band-head { display:grid; grid-template-columns:1fr 1fr; gap:30px; align-items:end; margin-bottom:clamp(36px,4vw,60px); border-bottom:1px solid var(--line-2); padding-bottom:26px; }
.band-desc { color:var(--muted-2); font-size:18px; line-height:1.55; max-width:42ch; justify-self:end; }
.band-desc .seclink { margin-top:18px; display:inline-flex; }

/* ── hero ── */
.hero { padding-top:clamp(48px,7vw,96px); padding-bottom:clamp(40px,5vw,72px); }
.hero-top { display:flex; justify-content:space-between; align-items:baseline; padding-bottom:clamp(26px,3vw,44px); border-bottom:1px solid var(--line); }
.hero-top-r { font-family:var(--sans); font-weight:700; font-size:13px; letter-spacing:.22em; text-transform:uppercase; color:var(--muted); }
.hero-line { font-family:var(--serif); font-weight:430; font-size:clamp(48px,9.2vw,164px); line-height:.98; letter-spacing:-.025em; margin:clamp(34px,5vw,74px) 0 0; max-width:17ch; }
.hero-line .hi { font-style:italic; }
.hero-line .hpin { color:var(--lime); font-style:normal; }
.hero-foot { display:grid; grid-template-columns:1fr auto; gap:48px; align-items:end; margin-top:clamp(40px,5vw,86px); padding-top:30px; border-top:1px solid var(--line); }
.standfirst { display:flex; gap:34px; max-width:760px; }
.standfirst-dc { font-family:var(--serif); font-weight:500; font-size:60px; line-height:.8; color:var(--lime); flex:none; }
.standfirst p { margin:0; font-size:17px; line-height:1.6; color:var(--muted-2); max-width:48ch; }
.standfirst p b { color:var(--text); font-weight:600; }
.hero-btn { display:inline-flex; align-items:center; gap:12px; font-family:var(--sans); font-weight:600; font-size:14px; letter-spacing:.06em; text-transform:uppercase; padding:15px 26px; border:1.5px solid var(--line-2); border-radius:999px; white-space:nowrap; transition:all .25s; color:var(--text); }
.hero-btn:hover { background:var(--lime); color:var(--bg); border-color:var(--lime); }
.hero-btn .arr { transition:transform .25s; }
.hero-btn:hover .arr { transform:translate(3px,-3px); }

/* ── clients logo strip ── */
.clients { border-top:1px solid var(--line); border-bottom:1px solid var(--line); padding-block:0; overflow:hidden; }
@keyframes marquee-scroll { to { transform:translateX(-50%); } }
.marquee-track { display:flex; width:max-content; animation:marquee-scroll 32s linear infinite; align-items:center; gap:0; }
.clients:hover .marquee-track { animation-play-state:paused; }
.logo-item { display:flex; align-items:center; justify-content:center; flex-shrink:0; height:72px; padding-left:56px; padding-right:56px; border-right:1px solid var(--line); }
.logo-item img { max-height:48px; width:auto; max-width:160px; object-fit:contain; display:block; opacity:1; }

/* ── featured works ── */
.project { display:grid; grid-template-columns:1fr 1fr; gap:clamp(34px,5vw,90px); align-items:center; padding-block:clamp(48px,5vw,80px); border-bottom:1px solid var(--line); }
.project:first-of-type { padding-top:0; }
.project.flip .proj-media { order:2; }
.proj-media { width:100%; }
.proj-img { width:100%; aspect-ratio:16/10; border-radius:4px; overflow:hidden; border:1px solid var(--line); background:var(--bg-2); position:relative; cursor:pointer; }
.proj-img img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; transition:transform .5s ease; }
.proj-img:hover img { transform:scale(1.03); }
.proj-img-overlay { position:absolute; inset:0; background:rgba(0,0,0,.3); opacity:0; transition:opacity .3s; display:flex; align-items:center; justify-content:center; z-index:2; }
.proj-img:hover .proj-img-overlay { opacity:1; }
.proj-pill { border:1px solid rgba(255,255,255,.5); border-radius:100px; padding:10px 24px; font-size:11px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:#fff; }
.proj-info { display:flex; flex-direction:column; }
.proj-meta { display:flex; justify-content:space-between; font-family:var(--sans); font-weight:700; font-size:13px; letter-spacing:.16em; text-transform:uppercase; color:var(--muted); padding-bottom:22px; border-bottom:1px solid var(--line); }
.proj-cat { font-family:var(--sans); font-weight:700; font-size:13px; letter-spacing:.2em; text-transform:uppercase; color:var(--lime); margin-top:26px; }
.proj-name { font-family:var(--serif); font-weight:460; font-size:clamp(36px,4.4vw,68px); line-height:.98; letter-spacing:-.02em; margin:16px 0 0; }
.proj-name em { font-style:italic; font-weight:430; }
.proj-desc { font-size:18px; line-height:1.55; color:var(--muted-2); max-width:46ch; margin:22px 0 0; }
.proj-cta { font-family:var(--sans); font-weight:700; font-size:13px; letter-spacing:.18em; text-transform:uppercase; display:inline-flex; align-items:center; gap:10px; margin-top:34px; color:var(--text); background:none; border:none; cursor:pointer; padding:0; }
.proj-cta::before { content:""; width:38px; height:1.5px; background:currentColor; margin-right:4px; transition:width .25s; }
.proj-cta:hover { color:var(--lime); }
.proj-cta:hover::before { width:54px; }
.proj-cta .arr { transition:transform .25s; }
.proj-cta:hover .arr { transform:translateX(5px); }

/* ── case study modal ── */
.cs-overlay { position:fixed; top:0; left:0; width:100%; height:100%; z-index:9999; background:rgba(0,0,0,.85); overflow-y:scroll; overflow-x:hidden; overscroll-behavior:contain; opacity:0; pointer-events:none; transition:opacity .35s; }
.cs-overlay.open { opacity:1; pointer-events:all; }
.cs-panel { width:68%; max-width:820px; margin:0 auto; background:var(--panel); }
.cs-bar { position:sticky; top:0; z-index:10; display:flex; justify-content:space-between; align-items:center; padding:16px 24px; background:var(--panel); border-bottom:1px solid var(--line); }
.cs-bar-l { display:flex; align-items:center; gap:16px; }
.cs-bar-label { font-size:10px; letter-spacing:3px; text-transform:uppercase; color:var(--muted); font-weight:500; }
.cs-bar-sep { width:1px; height:12px; background:var(--line-2); }
.cs-bar-title { font-size:12px; font-weight:600; color:var(--muted-2); }
.cs-close { width:34px; height:34px; border:1px solid var(--line-2); border-radius:50%; background:none; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background .2s; flex-shrink:0; }
.cs-close:hover { background:rgba(255,255,255,.08); }
.cs-close svg { width:11px; height:11px; stroke:var(--text); stroke-width:2; }
.cs-body { width:100%; padding-bottom:80px; }
.cs-jpg { width:100%; height:auto; display:block; }
@media(max-width:900px){ .cs-panel{ width:92%; } }
@media(max-width:640px){ .cs-panel{ width:96%; } .cs-bar{ padding:12px 16px; } .cs-bar-title{ display:none; } }

/* ── poster blasts preview ── */
.poster-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:clamp(12px,1.4vw,22px); }
.poster-cell { position:relative; aspect-ratio:3/4; border-radius:4px; overflow:hidden; border:1px solid var(--line); background:var(--bg-2); }
.poster-cell img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; transition:transform .45s ease; }
.poster-cell:hover img { transform:scale(1.04); }
.poster-cap { display:flex; justify-content:space-between; margin-top:14px; font-family:var(--sans); font-weight:700; font-size:11px; letter-spacing:.16em; text-transform:uppercase; color:var(--muted); }

/* ── logofolio preview ── */
.logo-grid { display:grid; grid-template-columns:repeat(6,1fr); gap:1px; background:var(--line); border:1px solid var(--line); }
.logo-cell { background:var(--bg); aspect-ratio:1; display:flex; align-items:center; justify-content:center; font-family:var(--serif); font-weight:500; font-style:italic; font-size:clamp(15px,1.4vw,22px); color:var(--text); opacity:.7; transition:opacity .25s,background .25s; }
.logo-cell:hover { opacity:1; background:var(--panel); }

/* ── prints preview ── */
.prints-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(16px,2vw,32px); }
.print-thumb { display:block; width:100%; aspect-ratio:5/4; border-radius:4px; overflow:hidden; border:1px solid var(--line); background:var(--bg-2); position:relative; }
.print-thumb img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; transition:transform .45s ease; }
.print-thumb:hover img { transform:scale(1.04); }
.print-cap { display:flex; justify-content:space-between; align-items:baseline; margin-top:18px; }
.print-cap-nm { font-family:var(--serif); font-weight:500; font-size:24px; }
.print-cap-ty { font-family:var(--sans); font-weight:600; font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); }

/* ── responsive ── */
@media (max-width:960px) {
  .hero-foot { grid-template-columns:1fr; gap:30px; }
  .project { grid-template-columns:1fr; gap:30px; }
  .project.flip .proj-media { order:0; }
  .band-head { grid-template-columns:1fr; }
  .band-desc { justify-self:start; }
  .poster-grid { grid-template-columns:repeat(2,1fr); }
  .logo-grid { grid-template-columns:repeat(3,1fr); }
  .prints-grid { grid-template-columns:1fr; }
}
@media (max-width:560px) {
  .standfirst { flex-direction:column; gap:16px; }
  .logo-grid { grid-template-columns:repeat(2,1fr); }
}
@media (prefers-reduced-motion:reduce) {
  * { animation:none !important; scroll-behavior:auto; }
}
`