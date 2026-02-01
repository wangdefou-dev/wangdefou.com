import { Github, Twitter, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { ContactModal } from "@/components/ContactModal"

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-white/10 relative z-10">
      <Section className="py-12 md:py-16">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">加入我的 AI 学习社群</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              我踩过的坑，我的实践经验，可以让你少走很多弯路。
            </p>
            <ContactModal>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold border-0">
                <Sparkles className="mr-2 h-4 w-4" />
                立即加入 (早鸟价 299元/人)
              </Button>
            </ContactModal>
          </div>

          <div className="flex gap-4 mt-8">
            <a href="https://x.com/wangdefou" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://github.com/wangdefou-dev" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>

          <div className="text-sm text-muted-foreground mt-8">
            © {new Date().getFullYear()} Wangdefou 保留所有权利
          </div>
        </div>
      </Section>
    </footer>
  )
}
