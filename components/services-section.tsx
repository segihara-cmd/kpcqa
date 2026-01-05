"use client"

import { ServiceCard } from "./service-card"
import { Building, Globe, Leaf, Shield, TrendingUp } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      id: "building",
      icon: Building,
      title: "건축물인증",
      description: "친환경 건축물 인증을 통해 건물의 환경성능을 평가하고 인증합니다",
      features: ["녹색건축 인증 (G-SEED)", "건물 에너지효율등급 인증", "제로에너지건축물 인증", "장수명 주택 인증"],
    },
    {
      id: "management",
      icon: Shield,
      title: "경영시스템인증",
      description: "품질, 환경, 안전보건 등 다양한 경영시스템 인증 서비스를 제공합니다",
      features: [
        "ISO 9001 (품질경영시스템)",
        "ISO 14001 (환경경영시스템)",
        "ISO 45001 (안전보건경영시스템)",
        "ISO 27001 (정보보안경영시스템)",
      ],
    },
    {
      id: "climate",
      icon: Leaf,
      title: "기후변화·온실가스",
      description: "온실가스 배출량 검증 및 탄소중립 달성을 위한 컨설팅을 제공합니다",
      features: ["온실가스 배출량 검증", "탄소중립 인증", "CDP 대응 지원", "RE100 컨설팅"],
    },
    {
      id: "sustainability",
      icon: TrendingUp,
      title: "지속가능경영검증",
      description: "ESG 경영 및 지속가능경영보고서 검증 서비스를 제공합니다",
      features: ["지속가능경영보고서 검증", "ESG 평가 및 컨설팅", "사회적 가치 측정", "UN SDGs 이행 지원"],
    },
    {
      id: "global",
      icon: Globe,
      title: "글로벌·AX",
      description: "해외 인증 및 글로벌 스탠다드 대응을 지원합니다",
      features: ["LEED 인증 지원", "BREEAM 인증 지원", "WELL 인증 지원", "글로벌 ESG 표준 대응"],
    },
  ]

  return (
    <>
      {/* Building Certification */}
      <section id="building" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-4 md:mb-6 text-balance">
              인증 서비스
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              다양한 분야의 전문 인증 서비스로
              <br className="hidden sm:block" />
              귀사의 경쟁력을 높여드립니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links for other sections */}
      <div id="management" className="scroll-mt-20" />
      <div id="climate" className="scroll-mt-20" />
      <div id="sustainability" className="scroll-mt-20" />
      <div id="global" className="scroll-mt-20" />
    </>
  )
}
