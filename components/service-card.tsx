"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, type LucideIcon } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  id: string
}

export function ServiceCard({ icon: Icon, title, description, features, id }: ServiceCardProps) {
  return (
    <div className="group relative p-8 md:p-10 rounded-3xl bg-card border border-border hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
      {/* Hover Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-8 h-8 text-primary" />
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">{title}</h3>

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">{description}</p>

        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="text-sm md:text-base text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button
          className="w-full rounded-full bg-primary text-primary-foreground hover:bg-accent transition-all group/btn"
          asChild
        >
          <Link href={`/consultation?service=${id}`}>
            상담 신청하기
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
