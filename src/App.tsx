import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Projects } from "@/components/Projects"
import { Services } from "@/components/Services"
import { Background } from "@/components/Background"

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground relative selection:bg-primary/30 selection:text-primary">
      <Background />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Services />
      </main>
    </div>
  )
}

export default App
