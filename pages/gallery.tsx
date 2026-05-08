import Head from "next/head"
import Nav from "../components/Nav"
import GalleryPage from "../components/GalleryPage"
import Footer from "../components/Footer"
export default function Gallery() {
  return (
    <>
      <Head><title>Poster Blasts — Sarang Pedulwar</title><meta name="description" content="Campaign posters, event graphics, and brand moments." /></Head>
      <Nav />
      <main id="top"><GalleryPage /></main>
      <Footer />
    </>
  )
}
