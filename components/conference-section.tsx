import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"

export function ConferenceSection() {
  return (
    <section id="conference" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-4 md:mb-6 text-balance">
            2025 춘계 학술대회
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            품질경영의 미래를 함께 논의하고
            <br className="hidden sm:block" />
            새로운 인사이트를 공유하는 시간
          </p>
        </div>

        {/* Conference Card */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden bg-card border border-border shadow-xl">
            {/* Image Placeholder */}
            <div className="aspect-[21/9] bg-gradient-to-br from-primary/10 via-accent/5 to-secondary relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl md:text-8xl font-light text-muted-foreground/10">KPCQA 2025</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
                지속가능한 품질경영과 디지털 혁신
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">일시</p>
                    <p className="text-base md:text-lg text-foreground">2025년 5월 23일 (금) 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">장소</p>
                    <p className="text-base md:text-lg text-foreground">서울 코엑스 컨벤션센터 3층 대회의실</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">참가대상</p>
                    <p className="text-base md:text-lg text-foreground">학회 회원, 연구자, 품질경영 실무자, 대학원생</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex-1 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-all"
                >
                  사전등록하기
                </Button>
                <Button size="lg" variant="outline" className="flex-1 rounded-full border-2 bg-transparent">
                  프로그램 보기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
