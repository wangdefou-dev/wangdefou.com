import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "我就蹭蹭 | X (Twitter) 爆款挖掘机",
    description: "基于 AI 的 X (Twitter) 内容监控工具，帮助博主跟踪潜在爆款内容。",
    stats: "3天自然增长 50+",
    tags: ["X 运营", "AI"],
    link: "#https://x.wangdefou.com/",
    github: "#",
    className: "md:col-span-2",
  },
  {
    title: "全自动 X 内容创作工具",
    description: "从热点发现到爆款验证的零人工干预系统",
    stats: "84+ Stars",
    tags: ["X 运营", "AI", "Skills"],
    link: "https://github.com/wangdefou-dev/defou-workflow-agent",
    github: "https://github.com/wangdefou-dev/defou-workflow-agent",
    className: "md:col-span-1",
  },
  {
    title: "X 博主推文风格模仿skills",
    description: "专为独立开发者打造的 Next.js 极速启动模板。",
    stats: "16+ Stars",
    tags: ["X 运营", "AI", "Skills"],
    link: "https://github.com/wangdefou-dev/Tweet-Style-Mimic",
    github: "https://github.com/wangdefou-dev/Tweet-Style-Mimic",
    className: "md:col-span-1",
  },
  {
    title: "Portrait & Paw",
    description: "提供定制宠物肖像油画服务。只需一张照片，即可获得一幅质感丰富、层次分明的定制宠物油画。",
    stats: "MRR $5k",
    tags: ["AI", "副业"],
    link: "https://custompetoilpainting.com/",
    github: "https://github.com/wangdefou-dev",
    className: "md:col-span-2",
  },
]

export function Projects() {
  return (
    <Section id="projects" className="relative">
      <div className="flex flex-col gap-12 relative z-10 max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-4">精选作品</h2>
          <p className="text-muted-foreground">
            近期项目展示，专注于 AI 应用落地与增长实验。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn("h-full", project.className)}
            >
              <Card className="h-full flex flex-col glass neon-border hover:bg-white/5 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="mb-2 text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                      <CardDescription className="text-gray-400">{project.description}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="h-8 w-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                         <Github className="h-4 w-4" />
                      </a>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="h-8 w-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between gap-4">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/5 backdrop-blur-sm">
                    <p className="text-2xl font-bold text-gradient">{project.stats}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">核心指标</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
