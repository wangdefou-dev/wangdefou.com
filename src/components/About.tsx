import { motion } from "framer-motion"
import { Cpu, TrendingUp, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/ui/section"

const tags = [
  "ENTJ", "AI深度使用者", "AI小应用开发者", "市场营销", "内容创作者", "副业探索"
]

const skills = [
  { name: "AI 实战", icon: <TrendingUp className="h-6 w-6" /> },
  { name: "AI 工具开发", icon: <Cpu className="h-6 w-6" /> },
  { name: "新媒体运营", icon: <Users className="h-6 w-6" /> },

]

export function About() {
  return (
    <Section id="about" className="relative">
      <div className="flex flex-col gap-12 relative z-10 max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-6 relative inline-block">
             <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
             <img 
               src="https://static.gridea.dev/b5116d45-87d1-4dbf-9ebb-455bf29b865f/Bb7P8wA8w.png" 
               alt="Wangdefou" 
               className="relative w-32 h-32 rounded-full border-2 border-primary/50 shadow-2xl mx-auto object-cover"
             />
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">关于我</h2>
          <p className="text-muted-foreground">
            新闻学专业背景，从大二实习就开始干运营，到现在十多年了。<br />
            0代码基础，但现在我借助AI构建了自己的网站、工具，解决了很多实际问题。<br />
            我发现，很多文科生在面对AI的时候很迷茫，不知所措，跟当初的我一样。<br />
            所以我决定把这一路的经验分享出来，帮助更多的文科生。
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
