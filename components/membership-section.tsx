import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function MembershipSection() {
  const benefits = [
    "학술대회 참가비 할인",
    "학회지 무료 구독",
    "논문 투고 우대",
    "연구자 네트워킹",
    "세미나 및 교육 프로그램 참여",
    "온라인 학술자료 열람",
  ]

  const memberTypes = [
    {
      type: "정회원",
      price: "50,000원",
      period: "연회비",
      description: "박사학위 소지자 또는 이에 준하는 자격을 갖춘 분",
    },
    {
      type: "준회원",
      price: "30,000원",
      period: "연회비",
      description: "대학원생 및 품질경영 분야 종사자",
    },
    {
      type: "학생회원",
      price: "20,000원",
      period: "연회비",
      description: "학부생 및 대학원 석사과정 재학생",
    },
  ]

  return (
    <section id="membership" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-4 md:mb-6 text-balance">
            회원가입
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            한국품질경영학회의 회원이 되어
            <br className="hidden sm:block" />
            다양한 혜택을 누리세요
          </p>
        </div>

        {/* Benefits */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="p-8 md:p-12 rounded-3xl bg-card border border-border">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-8 text-center">회원 혜택</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm md:text-base text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Membership Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {memberTypes.map((member, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-card border border-border hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-2">{member.type}</h3>
              <div className="mb-6">
                <span className="text-3xl md:text-4xl font-semibold text-foreground">{member.price}</span>
                <span className="text-sm text-muted-foreground ml-2">/ {member.period}</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed">{member.description}</p>
              <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-accent transition-all">
                가입하기
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
