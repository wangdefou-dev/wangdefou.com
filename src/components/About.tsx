import { motion } from "framer-motion"
import { Code, Cpu, Globe, TrendingUp, Users, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/ui/section"

const tags = [
  "INTP", "AI 产品经理", "独立开发者", "全栈开发", "增长黑客", "内容创作者"
]

const skills = [
  { name: "产品策略", icon: <TrendingUp className="h-6 w-6" /> },
  { name: "AI 整合", icon: <Cpu className="h-6 w-6" /> },
  { name: "Web 开发", icon: <Code className="h-6 w-6" /> },
  { name: "社区增长", icon: <Users className="h-6 w-6" /> },
  { name: "快速原型", icon: <Zap className="h-6 w-6" /> },
  { name: "全球市场", icon: <Globe className="h-6 w-6" /> },
]

export function About() {
  return (
    <Section id="about" className="relative">
      <div className="flex flex-col gap-12 relative z-10 max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-4">关于我</h2>
          <p className="text-muted-foreground">
            我从传统行业转型，仅用一个月成为 AI 产品经理。
            现在，我帮助个人和企业利用 AI 重构生产力，构建可扩展的产品。
          </p>
        </div>

        {/* Tags Cloud */}
        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="px-4 py-2 rounded-full glass border border-white/5 text-sm font-medium shadow-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full glass hover:bg-white/5 transition-all duration-300 neon-border group">
                <CardContent className="flex flex-col items-center justify-center p-6 gap-4 text-center">
                  <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">{skill.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
