import Head from "next/head"
import Nav from "../components/Nav"
import HeroName from "../components/HeroName"
import HeroBio from "../components/HeroBio"
import ClientLogoStrip from "../components/ClientLogoStrip"
import FeaturedWorksSection from "../components/FeaturedWorksSection"
import PosterBlastsSection from "../components/PosterBlastsSection"
import LogofolioSection from "../components/LogofolioSection"
import PrintsSection from "../components/PrintsSection"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Sarang Pedulwar — Art Director & Illustrator</title>
        <meta name="description" content="Art Director, Designer & Illustrator based in Bangalore. Crafting bold brand identities, campaigns, and visual systems." />
        <meta property="og:title" content="Sarang Pedulwar — Art Director & Illustrator" />
        <meta property="og:description" content="8+ years crafting bold brand identities, campaigns, and visual systems for companies that dare to stand out." />
      </Head>
      <Nav />
      <main id="top">
        <HeroName />
        <HeroBio />
        <ClientLogoStrip />
        <FeaturedWorksSection />
        <PosterBlastsSection />
        <LogofolioSection />
        <PrintsSection />
      </main>
      <Footer />
    </>
  )
}
