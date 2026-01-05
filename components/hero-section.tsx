"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      </div>

      <div className="max-w-5xl mx-auto text-center pt-20 pb-16">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground mb-6 md:mb-8 leading-tight text-balance">
          신뢰할 수 있는
          <br />
          인증 파트너
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed text-pretty">
          한국생산성본부인증원은 다양한 인증 서비스를 통해
          <br className="hidden sm:block" />
          귀사의 지속가능한 성장을 지원합니다
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="w-full sm:w-auto rounded-full bg-primary text-primary-foreground hover:bg-accent transition-all px-8 text-base group"
            asChild
          >
            <Link href="/consultation">
              상담 신청하기
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto rounded-full border-2 border-border hover:bg-secondary/50 transition-all px-8 text-base bg-transparent"
            asChild
          >
            <Link href="#about">자세히 알아보기</Link>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 md:mt-24 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full mx-auto relative">
            <div className="w-1.5 h-2 bg-muted-foreground/50 rounded-full absolute left-1/2 -translate-x-1/2 top-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
