import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "전화 문의",
      content: "02-1234-5678",
      subContent: "평일 09:00 - 18:00",
    },
    {
      icon: Mail,
      title: "이메일 문의",
      content: "info@kpcqa.or.kr",
      subContent: "24시간 접수 가능",
    },
    {
      icon: MapPin,
      title: "본사 위치",
      content: "서울특별시 강남구 테헤란로",
      subContent: "상세 주소 확인 가능",
    },
    {
      icon: Clock,
      title: "운영 시간",
      content: "평일 09:00 - 18:00",
      subContent: "주말 및 공휴일 휴무",
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-4 md:mb-6 text-balance">
            고객센터
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            궁금하신 사항이 있으시면 언제든지 문의해 주세요
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                <p className="text-base text-foreground/90 font-medium mb-1">{info.content}</p>
                <p className="text-sm text-muted-foreground">{info.subContent}</p>
              </div>
            )
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-secondary/30 border border-border">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">자주 묻는 질문</h3>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-2">인증 심사는 얼마나 걸리나요?</h4>
              <p className="text-muted-foreground leading-relaxed">
                인증 종류와 기업 규모에 따라 다르지만, 일반적으로 신청 후 2-3개월 정도 소요됩니다. 정확한 일정은 상담을
                통해 안내해 드립니다.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-2">인증 비용은 어떻게 산정되나요?</h4>
              <p className="text-muted-foreground leading-relaxed">
                인증 종류, 기업 규모, 사업장 수 등에 따라 차등 적용됩니다. 무료 상담을 통해 정확한 견적을 받아보실 수
                있습니다.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-2">사후관리는 어떻게 진행되나요?</h4>
              <p className="text-muted-foreground leading-relaxed">
                인증 취득 후에도 정기적인 사후심사와 갱신심사가 진행되며, 지속적인 컨설팅을 통해 인증 유지를 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
