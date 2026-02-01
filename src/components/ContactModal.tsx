import { useState } from "react"
import { Copy, Check } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ContactModalProps {
  children: React.ReactNode
  className?: string
}

export function ContactModal({ children, className }: ContactModalProps) {
  const [copied, setCopied] = useState(false)
  const wechatId = "wangdefou404"

  const handleCopy = () => {
    navigator.clipboard.writeText(wechatId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog>
      <DialogTrigger asChild className={className}>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card border-white/10 text-foreground">
        <DialogHeader className="text-left space-y-4">
          <DialogTitle className="text-2xl font-bold text-primary">建立联系</DialogTitle>
          <DialogDescription className="text-muted-foreground text-base">
            请添加我的微信，我会尽快回复
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-6 py-4">
          <div className="p-4 rounded-lg bg-secondary/50 border border-white/5 flex items-center justify-between group hover:border-primary/30 transition-colors">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">WECHAT ID</p>
              <p className="text-xl font-mono text-white">{wechatId}</p>
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="h-10 w-10 text-primary hover:text-primary hover:bg-primary/10"
              onClick={handleCopy}
            >
              {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
              <span className="sr-only">Copy WeChat ID</span>
            </Button>
          </div>

          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">添加微信请简单说明来意：</p>
            <div className="flex flex-wrap gap-2">
              {["X 爆款工具", "业务咨询", "企业 AI 工具培训", "社群"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-secondary/30 text-xs text-gray-300 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
