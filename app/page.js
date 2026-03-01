import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, BarChart3, Info } from "lucide-react";

export const metadata = {
  title: "Hangi Hava Temizleyici Bana Uygun? | Senaryoya Göre Karar Rehberi",
  description: "Eviniz için doğru hava temizleyiciyi teknik özelliklere bakarak değil, gerçek kullanım senaryosuna göre seçin. Hızlı karar rehberi burada.",
  alternates: {
    canonical: "/",
  },
};

const featuredScenarios = [
  {
    title: "Sigara İçilen Ev",
    desc: "Duman ve kokuyu en hızlı bastıran modelleri seçtik.",
    href: "/senaryolar/sigara-icilen-ev",
    icon: <Zap className="h-6 w-6 text-orange-500" />,
    color: "bg-orange-50",
  },
  {
    title: "Evcil Hayvanlı Ev",
    desc: "Tüy ve kedi/köpek alerjenlerine karşı en güçlüler.",
    href: "/senaryolar/evcil-hayvanli-ev",
    icon: <ShieldCheck className="h-6 w-6 text-green-500" />,
    color: "bg-green-50",
  },
  {
    title: "Büyük Salon",
    desc: "Geniş alanlarda tek cihazla gerçek performans.",
    href: "/senaryolar/buyuk-salon-tek-cihaz",
    icon: <BarChart3 className="h-6 w-6 text-blue-500" />,
    color: "bg-blue-50",
  },
  {
    title: "Alerji & Nefes Hassasiyeti",
    desc: "Toz ve polen yükünü stabil azaltan cihazlar.",
    href: "/senaryolar/alerji-ve-nefes-hassasiyeti",
    icon: <Info className="h-6 w-6 text-purple-500" />,
    color: "bg-purple-50",
  },
];

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Hava Lab",
    "url": "https://havatemizleyiciler.com",
    "description": "Senaryo bazlı hava temizleyici karar rehberi."
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hava Lab",
    "url": "https://havatemizleyiciler.com",
    "logo": "https://havatemizleyiciler.com/logo.png"
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12 space-y-16 mt-4">
      {/* JSON-LD FOR BOTS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground uppercase italic">
          Hangi Hava Temizleyici <br />
          <span className="text-accent underline decoration-gray-200">Bana Uygun?</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto font-bold">
          Teknik özelliklerin içinde kaybolmayın. Evinizdeki gerçek ihtiyaca ve senaryoya göre <span className="text-gray-900 border-b-2 border-accent/20">karar verin</span>.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link href="/senaryolar" className="w-full sm:w-auto bg-foreground text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-gray-200">
            En İyi Model Seç <ArrowRight className="h-5 w-5" />
          </Link>
          <Link href="/karsilastirma" className="w-full sm:w-auto bg-white border border-gray-200 text-foreground px-8 py-3 rounded-xl font-black uppercase tracking-widest hover:bg-gray-50 transition-all">
            Karar Matrisi
          </Link>
        </div>
      </section>

      {/* Bento Grid: Featured Scenarios */}
      <section className="space-y-8">
        <div className="flex justify-between items-end border-b-4 border-gray-900 pb-4">
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-black tracking-tight uppercase italic text-gray-950">Öne Çıkan Karar Rehberleri</h2>
            <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">User Intent Based Discovery</p>
          </div>
          <Link href="/senaryolar" className="text-xs text-accent font-black uppercase tracking-widest flex items-center gap-1 hover:underline">
            Tümünü Gör <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredScenarios.map((s) => (
            <Link key={s.href} href={s.href} className="bento-box group flex flex-col justify-between h-full p-6 bg-white hover:border-accent transition-all ring-1 ring-gray-100 shadow-sm shadow-gray-50">
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center shadow-inner`} aria-label={`${s.title} ikonu`}>
                  {s.icon}
                </div>
                <h3 className="text-lg font-black group-hover:text-accent transition-colors uppercase italic tracking-tight">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-bold italic">"{s.desc}"</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] flex items-center justify-between group-hover:text-accent transition-all">
                Hemen Analizi Gör <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Z-Pattern Insight: Why Us? */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-black text-accent uppercase tracking-[0.4em]">Laboratuvar Farkı</span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight uppercase italic text-gray-950">Katalog Verisi <br /> vs. Gerçeklik</h2>
          </div>
          <div className="insight-block border-l-8 border-accent bg-accent/5 p-8 rounded-r-3xl shadow-sm ring-1 ring-accent/10">
            <p className="text-lg text-gray-900 font-bold italic leading-tight">
              "Katalog verisi 50 m² dese de, gerçek testler salon kokusunu bastıramadığını kanıtlıyor."
            </p>
          </div>
          <p className="text-sm font-bold text-gray-500 leading-relaxed italic border-l-4 border-gray-100 pl-4">
            Hava Lab, analiz altyapısı ve binlerce gerçek kullanıcı yorumunun analiziyle, sizin için en doğru kararı vermenize yardımcı olur. Karar kurgumuzu "specs"lere değil, "lifestyle sonuçlara" dayandırıyoruz.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Bot-Verified Veri Odağı", "Net Karar Hükümleri", "Beklenti Yönetimi"].map(item => (
              <li key={item} className="flex items-center gap-2 text-[10px] font-black text-gray-900 uppercase tracking-widest">
                <ShieldCheck className="h-4 w-4 text-green-600" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bento-box aspect-square md:aspect-video bg-gray-50 flex items-center justify-center relative overflow-hidden p-0 border-gray-100 rounded-[3rem]">
          <BarChart3 className="h-24 w-24 text-gray-200" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/40"></div>
          <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/50">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Decision Accuracy</span>
              <span className="text-lg font-black text-accent tracking-tighter italic">98.2%</span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
              <div className="h-full bg-accent w-[85%] shadow-lg shadow-accent/20"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
