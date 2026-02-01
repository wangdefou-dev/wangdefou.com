import { motion } from "framer-motion"
import { CheckCircle2, Lightbulb, Rocket, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"

const services = [
  {
    title: "AI 产品咨询",
    description: "将您的创意转化为 AI 驱动的产品。从可行性分析到路线图规划。",
    icon: <Lightbulb className="h-10 w-10" />,
    features: ["市场调研", "技术栈选型", "MVP 策略"],
  },
  {
    title: "MVP 开发",
    description: "快速构建并发布最小可行性产品，验证市场契合度。",
    icon: <Rocket className="h-10 w-10" />,
    features: ["React/Next.js 开发", "数据库设计", "自动化部署"],
  },
  {
    title: "增长策略",
    description: "数据驱动的增长策略，扩大用户群并提升活跃度。",
    icon: <BarChart3 className="h-10 w-10" />,
    features: ["社交媒体增长", "内容策略", "数据分析体系搭建"],
  },
]

export function Services() {
  return (
    <Section id="services" className="relative">
      <div className="flex flex-col gap-12 relative z-10 max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-4">服务内容</h2>
          <p className="text-muted-foreground">
            我如何帮助您构建与增长。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col glass neon-border hover:bg-primary/5 transition-all duration-300 group">
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <div className="text-primary group-hover:text-black transition-colors">
                        {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-gray-400 group-hover:text-gray-200 transition-colors">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full glass hover:bg-primary hover:text-black border-primary/30 transition-colors font-medium group-hover:bg-primary/10 group-hover:border-primary/50" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                    了解更多
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
