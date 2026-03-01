"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const scenarios = [
  { name: "Sigara İçilen Ev", href: "/senaryolar/sigara-icilen-ev" },
  { name: "Evcil Hayvanlı Ev", href: "/senaryolar/evcil-hayvanli-ev" },
  { name: "Alerji & Nefes Hassasiyeti", href: "/senaryolar/alerji-ve-nefes-hassasiyeti" },
  { name: "Büyük Salon", href: "/senaryolar/buyuk-salon-tek-cihaz" },
  { name: "Sessiz Gece Kullanımı", href: "/senaryolar/sessiz-gece-kullanimi" },
  { name: "Mutfak Kokusu", href: "/senaryolar/mutfak-kokusu" },
];

const models = [
  { name: "Xiaomi 4 Compact", href: "/modeller/xiaomi-4-compact" },
  { name: "Xiaomi 4 Lite", href: "/modeller/xiaomi-4-lite" },
  { name: "Philips 1000", href: "/modeller/philips-1000-ac1711" },
  { name: "Philips 3200", href: "/modeller/philips-3200-ac3220" },
  { name: "Shark NeverChange5", href: "/modeller/shark-neverchange5" },
  { name: "Daikin MC55W", href: "/modeller/daikin-mc55w" },
  { name: "Sinbo SAP-5507", href: "/modeller/sinbo-sap-5507" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tighter text-foreground">
              HAVA<span className="text-accent">LAB</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/" className="hover:text-accent transition-colors">Hangi cihaz bana uygun?</Link>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-accent transition-colors">
                <span>İhtiyaca göre seç</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white border border-gray-200 rounded-lg shadow-xl p-2">
                {scenarios.map((s) => (
                  <Link key={s.href} href={s.href} className="block px-4 py-2 hover:bg-gray-50 rounded-md transition-colors">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-accent transition-colors">
                <span>Modeller</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white border border-gray-200 rounded-lg shadow-xl p-2">
                {models.map((m) => (
                  <Link key={m.href} href={m.href} className="block px-4 py-2 hover:bg-gray-50 rounded-md transition-colors">
                    {m.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/karsilastirma" className="hover:text-accent transition-colors">Karşılaştırma</Link>
            <Link href="/nasil-secilir" className="hover:text-accent transition-colors">Nasıl seçilir?</Link>
          </nav>

          <div className="hidden md:flex">
            <Link href="/modeller" className="bg-accent text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors">
              Tüm Modelleri Gör
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Placeholder */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 p-4 space-y-4">
          <Link href="/" className="block">Hangi cihaz bana uygun?</Link>
          <div className="font-bold border-b pb-2">İhtiyaca göre seç</div>
          <div className="grid grid-cols-2 gap-2 text-sm pl-2">
            {scenarios.map(s => <Link key={s.href} href={s.href}>{s.name}</Link>)}
          </div>
          <div className="font-bold border-b pb-2">Modeller</div>
          <div className="grid grid-cols-2 gap-2 text-sm pl-2">
            {models.map(m => <Link key={m.href} href={m.href}>{m.name}</Link>)}
          </div>
          <Link href="/karsilastirma" className="block">Karşılaştırma</Link>
          <Link href="/nasil-secilir" className="block">Nasıl seçilir?</Link>
        </div>
      )}
    </header>
  );
}
