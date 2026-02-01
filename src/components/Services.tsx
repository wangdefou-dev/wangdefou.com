import { motion } from "framer-motion"
import { CheckCircle2, Lightbulb, Rocket, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { ContactModal } from "@/components/ContactModal"

const services = [
  {
    title: "X 爆款挖掘机工具",
    description: "帮助你在 X 平台上快速锁定潜在爆款内容。",
    icon: <Lightbulb className="h-10 w-10" />,
    features: ["源代码授权", "详细部署教程", "可Demo试用"],
    price: "99元/份",
  },
  {
    title: "业务咨询",
    description: "一对一深入咨询，解决您在 AI 落地过程中的具体痛点。",
    icon: <BarChart3 className="h-10 w-10" />,
    features: ["痛点深入分析", "可行性建议", "落地路径规划"],
    price: "300元/小时",
  },
  {
    title: "企业 AI 工具培训",
    description: "帮助企业团队快速上手 AI 工具，提升整体工作效率。",
    icon: <Rocket className="h-10 w-10" />,
    features: ["定制化培训方案", "团队协作流优化", "现场实操指导"],
    price: "2000元起/场",
  },

]

export function Services() {
  return (
    <Section id="services" className="relative">
      <div className="flex flex-col gap-12 relative z-10 max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-4">我能提供的服务</h2>
          <p className="text-muted-foreground">
            不讲空话，有问必答
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
                  <ContactModal className="w-full">
                    <Button className="w-full glass hover:bg-primary hover:text-black border-primary/30 transition-colors font-medium group-hover:bg-primary/10 group-hover:border-primary/50" variant="outline">
                      {service.price}
                    </Button>
                  </ContactModal>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
