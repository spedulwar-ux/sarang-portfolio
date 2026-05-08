import Head from "next/head"
import Nav from "../components/Nav"
import PrintsPage from "../components/PrintsPage"
import Footer from "../components/Footer"
export default function Prints() {
  return (
    <>
      <Head><title>Prints — Sarang Pedulwar</title><meta name="description" content="Packaging and print projects, each crafted with intention." /></Head>
      <Nav />
      <main id="top"><PrintsPage /></main>
      <Footer />
    </>
  )
}
