import Head from "next/head"
import Nav from "../components/Nav"
import WorkPage from "../components/WorkPage"
import Footer from "../components/Footer"
export default function Work() {
  return (
    <>
      <Head><title>Work — Sarang Pedulwar</title><meta name="description" content="Featured works — brand identities, campaigns, and visual systems." /></Head>
      <Nav />
      <main id="top"><WorkPage /></main>
      <Footer />
    </>
  )
}
