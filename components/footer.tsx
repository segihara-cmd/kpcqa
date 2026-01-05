import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">KPCQA</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              한국생산성본부인증원은 다양한 인증 서비스를 통해 기업의 지속가능한 성장을 지원합니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">인증 서비스</h3>
            <ul className="space-y-2">
              {[
                { name: "건축물인증", href: "#building" },
                { name: "경영시스템인증", href: "#management" },
                { name: "기후변화·온실가스", href: "#climate" },
                { name: "지속가능경영검증", href: "#sustainability" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">고객 지원</h3>
            <ul className="space-y-2">
              {[
                { name: "인증 절차 안내", href: "#" },
                { name: "인증 신청서 다운로드", href: "#" },
                { name: "자주 묻는 질문", href: "#contact" },
                { name: "상담 신청", href: "#consultation" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">문의</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-foreground/70" />
                <span className="text-sm text-primary-foreground/70">info@kpcqa.or.kr</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-foreground/70" />
                <span className="text-sm text-primary-foreground/70">02-1234-5678</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-foreground/70" />
                <span className="text-sm text-primary-foreground/70">서울특별시 강남구 테헤란로</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © 2025 Korea Productivity Center Quality Assurance. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                개인정보처리방침
              </Link>
              <Link
                href="#"
                className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
