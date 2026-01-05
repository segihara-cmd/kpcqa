import { Building2, FileCheck, Shield, TrendingUp } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "신뢰와 전문성",
      description: "40년 이상의 인증 경험과 전문 인력을 바탕으로 최고 수준의 인증 서비스를 제공합니다",
    },
    {
      icon: FileCheck,
      title: "국제 표준 준수",
      description: "ISO/IEC 국제 표준을 준수하며 국내외에서 인정받는 공신력 있는 인증을 제공합니다",
    },
    {
      icon: TrendingUp,
      title: "지속가능한 성장",
      description: "단순한 인증을 넘어 귀사의 경영시스템 개선과 지속가능한 성장을 지원합니다",
    },
    {
      icon: Building2,
      title: "맞춤형 솔루션",
      description: "기업의 특성과 요구사항을 정확히 파악하여 최적화된 인증 솔루션을 제공합니다",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-4 md:mb-6 text-balance">
            왜 KPCQA를 선택해야 하나요?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            한국생산성본부인증원은 국내 최고의 인증 전문기관으로
            <br className="hidden sm:block" />
            귀사의 성공적인 인증을 위한 최적의 파트너입니다
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 md:p-12 rounded-3xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
