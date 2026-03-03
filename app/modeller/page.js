import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Info, BarChart3, Star } from "lucide-react";

export const metadata = {
    title: "Hava Temizleyici Modelleri & Analizleri | Hava Lab",
    description: "Piyasadaki en popüler hava temizleme cihazlarını teknik specs yerine gerçek kullanım verileriyle inceleyin.",
    alternates: {
        canonical: "/modeller",
    },
    openGraph: {
        title: "Hava Temizleyici Modelleri & Analizleri | Hava Lab",
        description: "Piyasadaki en popüler hava temizleme cihazlarını teknik specs yerine gerçek kullanım verileriyle inceleyin.",
        url: "https://havatemizleyicileri.com/modeller",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Hava Temizleyici Modelleri & Analizleri | Hava Lab",
        description: "Piyasadaki en popüler hava temizleme cihazlarını teknik specs yerine gerçek kullanım verileriyle inceleyin.",
    },
};

const models = [
    {
        name: "Philips 3200 AC3220",
        slug: "philips-3200-ac3220",
        price: "$$$$",
        tag: "En Güvenilir",
        desc: "Geniş salonlar ve yoğun koku/duman yükü için profesyonel çözüm.",
        icon: <ShieldCheck className="h-6 w-6 text-green-500" />,
    },
    {
        name: "Xiaomi 4 Lite",
        slug: "xiaomi-4-lite",
        price: "$$",
        tag: "F/P Şampiyonu",
        desc: "Küçük ve orta odalar için en dengeli ve popüler tercih.",
        icon: <Zap className="h-6 w-6 text-orange-500" />,
    },
    {
        name: "Shark NeverChange5",
        slug: "shark-neverchange5",
        price: "$$$",
        tag: "Hızlı Etki",
        desc: "Filtre ömrü ve anlık temizleme hızıyla öne çıkan yeni nesil.",
        icon: <Star className="h-6 w-6 text-yellow-500" />,
    },
    {
        name: "Daikin MC55W",
        slug: "daikin-mc55w",
        price: "$$$$",
        tag: "Teknoloji Odaklı",
        desc: "Flash Streamer teknolojisi ile havayı ayrıştıran Japon mühendisliği.",
        icon: <Info className="h-6 w-6 text-blue-500" />,
    },
    {
        name: "Xiaomi 4 Compact",
        slug: "xiaomi-4-compact",
        price: "$",
        tag: "Masaüstü/Küçük Oda",
        desc: "Yatak başucu veya çalışma masası için minimum alan, maksimum sessizlik.",
        icon: <Info className="h-6 w-6 text-gray-500" />,
    },
    {
        name: "Philips 1000 AC1711",
        slug: "philips-1000-ac1711",
        price: "$$$",
        tag: "Stabil Performans",
        desc: "Yatak odaları için ideal, sensör doğruluğu yüksek Philips kalitesi.",
        icon: <ShieldCheck className="h-6 w-6 text-blue-400" />,
    },
    {
        name: "Sinbo SAP-5507",
        slug: "sinbo-sap-5507",
        price: "$",
        tag: "Giriş Seviyesi",
        desc: "Basit filtreleme ihtiyacı olanlar için bütçe dostu, mekanik çözüm.",
        icon: <BarChart3 className="h-6 w-6 text-red-400" />,
    }
];

export default function ModellerHub() {
    return (
        <div className="container mx-auto px-4 lg:px-8 py-12 md:py-20 space-y-12">
            <div className="max-w-2xl space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Hava Temizleyici Modelleri</h1>
                <p className="text-xl text-gray-500">
                    Laboratuvarımızda analiz edilen tüm cihazlar. Karar vermeden önce gerçek performans verilerini inceleyin.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {models.map((m) => (
                    <Link key={m.slug} href={`/modeller/${m.slug}`} className="bento-box group flex flex-col justify-between h-full hover:border-accent/30">
                        <div className="space-y-4">
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center" aria-label={`${m.name} ikonu`}>
                                    {m.icon}
                                </div>
                                <span className="text-[10px] font-bold bg-gray-100 px-2 py-1 rounded uppercase tracking-wider text-gray-500">
                                    {m.price}
                                </span>
                            </div>
                            <div>
                                <span className="text-xs font-bold text-accent uppercase tracking-widest">{m.tag}</span>
                                <h2 className="text-xl font-bold mt-1 group-hover:text-accent transition-colors">{m.name}</h2>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">{m.desc}</p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">İncelemeyi Oku</span>
                            <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-accent transition-all transform group-hover:translate-x-1" />
                        </div>
                    </Link>
                ))}
            </div>

            <div className="insight-block border-l-gray-300 bg-gray-50/50 p-8 mt-16 max-w-4xl">
                <h3 className="font-bold mb-4">Modeller Arasındaki Farkı Nasıl Anlarsınız?</h3>
                <p className="text-sm text-gray-600 leading-relaxed italic">
                    "Piyasadaki modelleri teknik tablolarla karşılaştırmak yerine, onları 'çözdükleri problemler' üzerinden grupladık. Örneğin, sessizlik arayan biri için Daikin premium bir tercihken, sigara dumanı için Philips 3200 tartışmasız лидерdir."
                </p>
            </div>

            <div className="flex justify-center pt-10">
                <p className="text-xs text-gray-400">Son güncelleme: 2026-03-01</p>
            </div>
        </div>
    );
}
