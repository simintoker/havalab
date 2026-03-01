import Link from "next/link";
import { ArrowRight, Zap, ShieldCheck, BarChart3, Info, Moon, CookingPot } from "lucide-react";

export const metadata = {
    title: "Evinize Göre Hava Temizleyici Seçin | Senaryo Bazlı Rehber",
    description: "Sigara, evcil hayvan, alerji veya büyük salon… Hangi cihazın gerçekten işe yaradığını senaryonuza göre öğrenin.",
    alternates: {
        canonical: "/senaryolar",
    },
};

const scenarios = [
    {
        title: "Sigara İçilen Ev",
        desc: "Duman ve kokuyu en hızlı bastıran modelleri seçtik. Sensör tepki hızı kritik.",
        href: "/senaryolar/sigara-icilen-ev",
        icon: <Zap className="h-6 w-6 text-orange-500" />,
        color: "bg-orange-50",
    },
    {
        title: "Evcil Hayvanlı Ev",
        desc: "Tüy ve kedi/köpek alerjenlerine karşı en güçlü filtreleme yapan modeller.",
        href: "/senaryolar/evcil-hayvanli-ev",
        icon: <ShieldCheck className="h-6 w-6 text-green-500" />,
        color: "bg-green-50",
    },
    {
        title: "Alerji & Nefes Hassasiyeti",
        desc: "Toz, polen ve akar yükünü stabil azaltan, sağlık odaklı cihazlar.",
        href: "/senaryolar/alerji-ve-nefes-hassasiyeti",
        icon: <Info className="h-6 w-6 text-purple-500" />,
        color: "bg-purple-50",
    },
    {
        title: "Büyük Salon",
        desc: "Geniş alanlarda ve açık mutfaklı evlerde tek cihazla gerçek temizlik.",
        href: "/senaryolar/buyuk-salon-tek-cihaz",
        icon: <BarChart3 className="h-6 w-6 text-blue-500" />,
        color: "bg-blue-50",
    },
    {
        title: "Sessiz Gece Kullanımı",
        desc: "Uyurken varlığı hissedilmeyen, fan sesi stabil ve titreşimsiz modeller.",
        href: "/senaryolar/sessiz-gece-kullanimi",
        icon: <Moon className="h-6 w-6 text-indigo-500" />,
        color: "bg-indigo-50",
    },
    {
        title: "Mutfak Kokusu",
        desc: "Yemek ve balık kokusunun eve yayılmasını engelleyen sirkülasyon ustaları.",
        href: "/senaryolar/mutfak-kokusu",
        icon: <CookingPot className="h-6 w-6 text-red-500" />,
        color: "bg-red-50",
    },
];

export default function ScenariosHub() {
    return (
        <div className="container mx-auto px-4 lg:px-8 py-10 md:py-16 space-y-10">
            <div className="max-w-2xl space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">İhtiyaca Göre Seç</h1>
                <p className="text-lg text-gray-500">
                    Hangi problem için çözüm arıyorsunuz? Laboratuvar analizlerimizi inceleyin.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {scenarios.map((s) => (
                    <Link key={s.href} href={s.href} className="bento-box group flex flex-col justify-between h-full p-6">
                        <div className="space-y-4">
                            <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center`} aria-label={`${s.title} ikonu`}>
                                {s.icon}
                            </div>
                            <h2 className="text-xl font-bold group-hover:text-accent transition-colors">{s.title}</h2>
                            <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                        </div>
                        <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between group-hover:bg-gray-50/50 transition-colors">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Rehberi Aç</span>
                            <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-accent transition-all transform group-hover:translate-x-1" />
                        </div>
                    </Link>
                ))}
            </div>

            <div className="insight-block max-w-3xl mt-20">
                <p className="font-bold mb-2">💡 Neden Senaryo Bazlı Seçim?</p>
                <p className="text-gray-600 leading-relaxed">
                    Hava temizleyici performansı, odanın şekli, kirlilik tipi ve beklenen etki süresine göre %50'den fazla değişkenlik gösterir. Bir cihazın HEPA 13 olması, o cihazın her evde aynı sonucu vereceği anlamına gelmez.
                </p>
            </div>

            <div className="flex justify-center pt-10">
                <p className="text-xs text-gray-400">Son güncelleme: 2026-03-01</p>
            </div>
        </div>
    );
}
