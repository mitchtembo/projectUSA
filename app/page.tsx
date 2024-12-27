import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import StudentVisa from "../components/StudentVisa"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <StudentVisa />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

