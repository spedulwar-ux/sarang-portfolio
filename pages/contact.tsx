import Head from "next/head"
import Nav from "../components/Nav"
import ContactPage from "../components/ContactPage"
import Footer from "../components/Footer"
export default function Contact() {
  return (
    <>
      <Head><title>Contact — Sarang Pedulwar</title><meta name="description" content="Get in touch for freelance projects and collaborations." /></Head>
      <Nav />
      <main id="top"><ContactPage /></main>
      <Footer />
    </>
  )
}
