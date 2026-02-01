import { Github, Twitter } from "lucide-react"
import { Section } from "@/components/ui/section"

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-white/10 relative z-10">
      <Section className="py-8 w-full">
        <div className="flex flex-col items-center text-center gap-4 max-w-4xl mx-auto">
          <div className="flex gap-4">
            <a href="https://x.com/wangdefou" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://github.com/wangdefou-dev" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Wangdefou 保留所有权利
          </div>
        </div>
      </Section>
    </footer>
  )
}
