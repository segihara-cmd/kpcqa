import { Button } from "@/components/ui/button"
import { FileText, Download, Search } from "lucide-react"

export function PapersSection() {
  const journals = [
    {
      title: "품질경영학회지",
      description: "Journal of Korean Society for Quality Management",
      issn: "ISSN 1229-1889",
      frequency: "연 4회 발간 (3월, 6월, 9월, 12월)",
    },
    {
      title: "JQMR",
      description: "Journal of Quality Management Research",
      issn: "ISSN 2765-7027",
      frequency: "연 2회 발간 (6월, 12월)",
    },
  ]

  return (
    <section id="papers" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-4 md:mb-6 text-balance">
            학술지 및 논문투고
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            우수한 연구 성과를 세상과 공유하고
            <br className="hidden sm:block" />
            학술적 가치를 인정받으세요
          </p>
        </div>

        {/* Journals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16">
          {journals.map((journal, index) => (
            <div
              key={index}
              className="p-8 md:p-10 rounded-3xl bg-card border border-border hover:shadow-lg transition-all"
            >
              <FileText className="w-12 h-12 text-muted-foreground mb-6" />
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">{journal.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-1">{journal.description}</p>
              <p className="text-sm text-muted-foreground/70 mb-4">{journal.issn}</p>
              <p className="text-sm md:text-base text-foreground mb-6">{journal.frequency}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="sm" variant="outline" className="flex-1 rounded-full bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  투고규정
                </Button>
                <Button size="sm" variant="outline" className="flex-1 rounded-full bg-transparent">
                  <Search className="w-4 h-4 mr-2" />
                  논문검색
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground text-center">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4 text-balance">논문을 투고하시겠습니까?</h3>
          <p className="text-base md:text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            온라인 논문투고 시스템을 통해 간편하게 논문을 제출하고
            <br className="hidden sm:block" />
            심사 진행 상황을 실시간으로 확인하세요
          </p>
          <Button
            size="lg"
            className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all px-8"
          >
            논문 투고하기
          </Button>
        </div>
      </div>
    </section>
  )
}
