import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { ContactModal } from "@/components/ContactModal"

export function Hero() {
  return (
    <Section id="hero" className="min-h-screen flex items-center justify-center pt-32 md:pt-20 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="flex flex-col items-center text-center relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium mb-8 text-primary backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            接受咨询预约中
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            用 <span className="text-gradient">AI 与运营思维</span> <br />
            唤醒自身创造力
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            你好，我是 Wangdefou，一个文科生，0编程基础。
            <br />正在用AI解决构建各种工具，解决实际问题。<br />
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button size="lg" className="group bg-primary hover:bg-primary/90 text-black font-semibold border-0 text-base px-8 h-12" onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}>
              查看我的作品
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <ContactModal>
              <Button size="lg" variant="outline" className="glass hover:bg-white/10 text-base px-8 h-12">
                取得联系
              </Button>
            </ContactModal>
          </div>
        </motion.div>
        
        {/* Subtle Visual Element Below Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 opacity-50 pointer-events-none"
        >
           <Sparkles className="w-12 h-12 text-primary/50 mx-auto animate-pulse" />
        </motion.div>
      </div>
    </Section>
  )
}
