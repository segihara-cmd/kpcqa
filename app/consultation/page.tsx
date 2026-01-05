"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, ArrowLeft, Award, Users, TrendingUp, Shield } from "lucide-react"

export default function ConsultationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const services = [
    { value: "building", label: "건축물인증" },
    { value: "management", label: "경영시스템인증" },
    { value: "climate", label: "기후변화·온실가스" },
    { value: "sustainability", label: "지속가능경영검증" },
    { value: "global", label: "글로벌·AX" },
    { value: "other", label: "기타 문의" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Image Section */}
        <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=3000&auto=format&fit=crop"
            alt="고객과 악수하는 전문가"
            fill
            priority
            quality={90}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-semibold mb-4">상담 신청</h1>
              <p className="text-lg md:text-xl text-white/90">전문가와 함께 시작하는 인증 여정</p>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Side - KPCQA Introduction */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                    한국생산성본부인증원
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    한국생산성본부인증원(KPCQA)은 국내 최고 수준의 인증 기관으로, 
                    다양한 분야의 전문 인증 서비스를 제공하여 기업의 지속가능한 성장을 지원합니다.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    우리는 건축물인증, 경영시스템인증, 기후변화 대응, 지속가능경영검증 등 
                    포괄적인 인증 솔루션을 통해 고객의 경쟁력을 높이고, 
                    글로벌 시장에서의 신뢰를 구축하는 데 기여하고 있습니다.
                  </p>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">국제 표준 인증</h3>
                    <p className="text-sm text-muted-foreground">
                      ISO, LEED, BREEAM 등 국제 표준 인증 제공
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">전문가 컨설팅</h3>
                    <p className="text-sm text-muted-foreground">
                      경험 많은 전문가가 맞춤형 솔루션 제안
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">빠른 처리</h3>
                    <p className="text-sm text-muted-foreground">
                      신속하고 정확한 인증 프로세스 진행
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">신뢰성 보장</h3>
                    <p className="text-sm text-muted-foreground">
                      엄격한 기준과 투명한 프로세스 운영
                    </p>
                  </div>
                </div>

                {/* Statistics */}
                <div className="pt-6 border-t border-border">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl md:text-4xl font-semibold text-primary mb-2">10,000+</div>
                      <div className="text-sm text-muted-foreground">인증 건수</div>
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-semibold text-primary mb-2">98%</div>
                      <div className="text-sm text-muted-foreground">고객 만족도</div>
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-semibold text-primary mb-2">20+</div>
                      <div className="text-sm text-muted-foreground">년 경력</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Consultation Form */}
              <div className="lg:sticky lg:top-24 h-fit">
                <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                    상담 신청하기
                  </h2>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3">
                        상담 신청이 완료되었습니다
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        담당자 확인 후 영업일 기준 1-2일 내로 연락드리겠습니다
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                        className="rounded-full"
                      >
                        다시 작성하기
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Service Selection */}
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-base">
                          관심 서비스 <span className="text-destructive">*</span>
                        </Label>
                        <Select required>
                          <SelectTrigger id="service" className="h-12 rounded-xl">
                            <SelectValue placeholder="서비스를 선택해주세요" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.value} value={service.value}>
                                {service.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Company Name */}
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-base">
                          회사명 <span className="text-destructive">*</span>
                        </Label>
                        <Input id="company" placeholder="회사명을 입력해주세요" required className="h-12 rounded-xl" />
                      </div>

                      {/* Name and Phone in Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-base">
                            담당자명 <span className="text-destructive">*</span>
                          </Label>
                          <Input id="name" placeholder="이름을 입력해주세요" required className="h-12 rounded-xl" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-base">
                            연락처 <span className="text-destructive">*</span>
                          </Label>
                          <Input id="phone" type="tel" placeholder="010-0000-0000" required className="h-12 rounded-xl" />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base">
                          이메일 <span className="text-destructive">*</span>
                        </Label>
                        <Input id="email" type="email" placeholder="example@company.com" required className="h-12 rounded-xl" />
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-base">
                          문의 내용
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="궁금하신 내용을 자유롭게 작성해주세요"
                          rows={5}
                          className="rounded-xl resize-none"
                        />
                      </div>

                      {/* Privacy Policy */}
                      <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                        <input type="checkbox" id="privacy" required className="mt-1 w-4 h-4 rounded border-border" />
                        <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                          개인정보 수집 및 이용에 동의합니다. 수집된 정보는 상담 목적으로만 사용되며, 상담 완료 후 안전하게 폐기됩니다.
                        </Label>
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full h-14 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-all text-base font-semibold"
                      >
                        상담 신청하기
                      </Button>
                    </form>
                  )}
                </div>

                {/* Back to Home */}
                <div className="mt-6 text-center">
                  <Button variant="ghost" asChild className="rounded-full">
                    <Link href="/">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      홈으로 돌아가기
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
