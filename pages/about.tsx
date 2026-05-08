import Head from "next/head"
import Nav from "../components/Nav"
import AboutPage from "../components/AboutPage"
import Footer from "../components/Footer"
export default function About() {
  return (
    <>
      <Head><title>About — Sarang Pedulwar</title><meta name="description" content="Art Director, Designer & Illustrator based in Bangalore." /></Head>
      <Nav />
      <main id="top"><AboutPage /></main>
      <Footer />
    </>
  )
}
