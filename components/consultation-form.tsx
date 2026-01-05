"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export function ConsultationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
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
    <section id="consultation" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-4 md:mb-6 text-balance">
            상담 신청
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            전문 상담사가 귀사에 최적화된 인증 솔루션을 제안해 드립니다
            <br className="hidden sm:block" />
            빠른 시일 내에 연락드리겠습니다
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-card border border-border rounded-3xl p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-3">상담 신청이 완료되었습니다</h3>
            <p className="text-muted-foreground">담당자 확인 후 영업일 기준 1-2일 내로 연락드리겠습니다</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <div className="space-y-6">
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
                  개인정보 수집 및 이용에 동의합니다. 수집된 정보는 상담 목적으로만 사용되며, 상담 완료 후 안전하게
                  폐기됩니다.
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
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
