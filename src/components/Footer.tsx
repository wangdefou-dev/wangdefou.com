import { Github, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-white/10 relative z-10">
      <Section className="py-12 md:py-16">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">准备好开启新篇章了吗？</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              无论您是有新的项目构想，还是仅仅想打个招呼，我都随时欢迎您的交流与合作。
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold border-0" onClick={() => window.location.href = 'mailto:contact@wangdefou.com'}>
              <Mail className="mr-2 h-4 w-4" />
              发送邮件
            </Button>
          </div>

          <div className="flex gap-4 mt-8">
            <a href="https://x.com/wangdefou" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://github.com/wangdefou" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>

          <div className="text-sm text-muted-foreground mt-8">
            © {new Date().getFullYear()} Wangdefou. 保留所有权利.
          </div>
        </div>
      </Section>
    </footer>
  )
}
