import Head from "next/head"
import Nav from "../components/Nav"
import LogofolioPage from "../components/LogofolioPage"
import Footer from "../components/Footer"
export default function Logos() {
  return (
    <>
      <Head><title>Logofolio — Sarang Pedulwar</title><meta name="description" content="66 marks — wordmarks, letterforms, and brand symbols." /></Head>
      <Nav />
      <main id="top"><LogofolioPage /></main>
      <Footer />
    </>
  )
}
