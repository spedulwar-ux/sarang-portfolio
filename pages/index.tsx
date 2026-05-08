import dynamic from "next/dynamic"
import Head from "next/head"
import Nav from "../components/Nav"
import HeroTopSection from "../components/HeroTopSection"
import HeroName from "../components/HeroName"
import HeroBio from "../components/HeroBio"
import ClientLogoStrip from "../components/ClientLogoStrip"
import FeaturedWorksSection from "../components/FeaturedWorksSection"
import Footer from "../components/Footer"

const IntroOverlay = dynamic(() => import("../components/IntroOverlay"), { ssr: false })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sarang Pedulwar — Art Director & Illustrator</title>
        <meta name="description" content="Art Director, Designer & Illustrator based in Bangalore. Crafting bold brand identities, campaigns, and visual systems." />
        <meta property="og:title" content="Sarang Pedulwar — Art Director & Illustrator" />
        <meta property="og:description" content="8+ years crafting bold brand identities, campaigns, and visual systems for companies that dare to stand out." />
      </Head>
      <IntroOverlay />
      <Nav />
      <main id="top">
        <HeroTopSection />
        <HeroName />
        <HeroBio />
        <ClientLogoStrip />
        <FeaturedWorksSection />
      </main>
      <Footer />
    </>
  )
}
