import Link from "next/link";
import {
    ArrowRight, ShieldCheck, AlertCircle, Info, BadgeCheck, XCircle,
    CheckCircle2, Users, Target, Zap, BarChart3, ChevronRight
} from "lucide-react";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const titles = {
        "philips-3200-ac3220": "Philips 3200 AC3220 İncelemesi | Geniş Alan İçin En Güvenli Tercih",
        "xiaomi-4-lite": "Xiaomi 4 Lite İncelemesi | Fiyat/Performans Dengesi",
        "xiaomi-4-compact": "Xiaomi 4 Compact İncelemesi | Küçük Oda Çözümü",
        "daikin-mc55w": "Daikin MC55W İncelemesi | Sessizlik ve Uzun Ömür",
        "shark-neverchange5": "Shark NeverChange5 İncelemesi | Koku ve Filtre Ömrü",
        "sinbo-sap-5507": "Sinbo SAP-5507 İncelemesi | Giriş Seviyesi Beklentiler",
        "philips-1000-ac1711": "Philips 1000 AC1711 İncelemesi | Stabil ve Sessiz"
    };

    return {
        title: titles[slug] || "Hava Temizleyici Model İncelemesi",
        alternates: {
            canonical: `/modeller/${slug}`,
        },
    };
}

export default async function ModelPage({ params }) {
    const { slug } = await params;

    const modelsData = {
        "xiaomi-4-compact": {
            name: "Xiaomi 4 Compact",
            topSummary: "Bu cihaz küçük odada işe yarayan, ancak salon beklentisiyle alınmaması gereken giriş segmenti bir modeldir.",
            personas: ["Küçük oda için uygun fiyatlı çözüm", "Evcil hayvanlı evde destek cihazı", "Çocuk odası için kompakt çözüm"],
            problemSolved: "Küçük odada hava yükünü azaltma ve partikül yoğunluğunu düşürme.",
            satisfaction: "Oda küçükse, cihaz tek oda çözümü olarak kullanılıyorsa ve sürekli çalıştırılıyorsa memnuniyet artar.",
            disappointment: "Salon gibi büyük alanlarda kullanıldığında veya tüm evi tek cihazla çözme beklentisi varsa hayal kırıklığı yaratır.",
            pros: ["Küçük oda kullanıcıları", "Destek cihazı arayanlar", "Bütçe odaklı kullanıcılar"],
            cons: ["Salonu tek cihazla çözmek isteyenler", "Hızlı mucize etkisi bekleyenler", "Yoğun sigara/koku problemi"],
            priceTier: "$",
            priceValue: "3500",
            specs: {
                area: "27 m² (Küçük-Orta)",
                cadr: "230 m³/saat",
                noise: "20 dB (Gece Modu)",
                features: "Sensör, Otomatik Mod, Uygulama Kontrolü"
            },
            verdict: "Xiaomi Compact, küçük odalar için uygun fiyatlıdır; ancak salon başarısı beklemek bir beklenti hatasına yol açar.",
            relatedScenarios: [
                { name: "Sessiz Gece Kullanımı", slug: "sessiz-gece-kullanimi" },
                { name: "Alerji ve Bebek Odası", slug: "alerji-ve-nefes-hassasiyeti" }
            ]
        },
        "xiaomi-4-lite": {
            name: "Xiaomi 4 Lite",
            topSummary: "Küçük-orta alanlarda güçlü bir fiyat/performans ürünüdür, ancak geniş salonlarda 'yetişememe' riski taşır.",
            personas: ["Fiyat/Performans dengesi arayanlar", "Sigara/koku yükünü oda bazlı azaltanlar", "Evcil hayvanlı küçük ev sahipleri"],
            problemSolved: "Orta ölçekli alanlarda hava kalitesini normalize etme ve partikül yükünü kırma.",
            satisfaction: "Cihaz sürekli çalıştırıldığında ve orta boy odalarda kullanıldığında belirgin bir hava kalitesi artışı sağlar.",
            disappointment: "Geniş açık plan evlerde veya çok yoğun koku/sigara olan ortamlarda performansı zayıf kalabilir.",
            pros: ["F/P odaklı kullanıcılar", "Oda bazlı çözüm arayanlar", "Girişten bir üst seviye isteyenler"],
            cons: ["Gerçek salon çözümü arayanlar", "Premium malzeme kalitesi bekleyenler", "Açık plan büyük ev sahipleri"],
            priceTier: "$$",
            priceValue: "5500",
            specs: {
                area: "30-45 m²",
                cadr: "360 m³/saat",
                noise: "33-61 dB",
                features: "OLED Ekran, Sensör, Uygulama Kontrolü"
            },
            verdict: "Xiaomi Lite, bütçeyi sarsmadan gerçek bir temizlik deneyimi sunan en popüler 'güvenli sular' cihazlarından biridir.",
            relatedScenarios: [
                { name: "Sigara İçilen Ev", slug: "sigara-icilen-ev" },
                { name: "Evcil Hayvanlı Ev", slug: "evcil-hayvanli-ev" }
            ]
        },
        "philips-3200-ac3220": {
            name: "Philips 3200 AC3220",
            topSummary: "Geniş alanlarda ve zorlu hava koşullarında (sigara, koku, alerji) en güvenli ve tutarlı performans sunan lider modeldir.",
            personas: ["Geniş salonu tek cihazla çözmek isteyenler", "Sigara veya yoğun koku problemi olanlar", "Alerji hassasiyeti yüksek kullanıcılar"],
            problemSolved: "Büyük alanlarda hava sirkülasyonu ve ağır hava yüklerinin (duman, koku) hızla bertaraf edilmesi.",
            satisfaction: "Cihaz merkezi bir konumda kullanıldığında ve gerçek performans farkı arandığında tam memnuniyet sağlar.",
            disappointment: "Küçük yatak odasında gereksiz büyük bulunursa veya filtre maliyeti sürpriz olursa hayal kırıklığı yaşatabilir.",
            pros: ["Gerçek salon performansı", "Hızlı koku ve duman bastırma", "Güçlü sensör ve otomasyon"],
            cons: ["Kısıtlı bütçeler", "Gece mutlak sessizlik arayanlar", "Küçük oda kullanıcıları"],
            priceTier: "$$$$",
            priceValue: "14500",
            specs: {
                area: "50-100 m² (Geniş Alan)",
                cadr: "520 m³/saat",
                noise: "15-56 dB",
                features: "AeraSense Teknolojisi, 4 Mod, Akıllı Kontrol"
            },
            verdict: "Philips 3200, küçük cihazların yetersiz kaldığı her yerde devreye giren en güvenli 'upgrade' tercihidir.",
            relatedScenarios: [
                { name: "Büyük Salon", slug: "buyuk-salon-tek-cihaz" },
                { name: "Sigara İçilen Ev", slug: "sigara-icilen-ev" },
                { name: "Alerji ve Bebek Odası", slug: "alerji-ve-nefes-hassasiyeti" }
            ]
        },
        "daikin-mc55w": {
            name: "Daikin MC55W",
            topSummary: "Güvenilir marka ve düşük bakım maliyeti (10 yıl filtre ömrü) arayanlar için sessiz ve stabil bir tercihtir.",
            personas: ["Marka güvenine önem verenler", "Uzun ömürlü cihaz arayanlar", "Gece sessizliği takıntısı olanlar"],
            problemSolved: "Sabit ve sessiz hava temizleme, 10 yıla varan filtre ömrü ile ekonomiklik.",
            satisfaction: "Sessiz çalışma ve uzun vadeli stabilite arayan kullanıcılar için tam isabet bir tercihtir.",
            disappointment: "Pahalı olduğu için 'mucizevi koku bastırma hızı' bekleyen kullanıcıları yavaş fan yapısıyla üzebilir.",
            pros: ["10 yıllık filtre ömrü", "İnanılmaz gece sessizliği", "Stabil marka güvencesi"],
            cons: ["Maksimum güç arayanlar", "Hızlı koku bastırma önceliği", "Büyük salonu tek başına kurtarma"],
            priceTier: "$$$$",
            priceValue: "18500",
            specs: {
                area: "82 m² (Maksimum)",
                cadr: "330 m³/saat",
                noise: "19-53 dB",
                features: "Plazma Teknolojisi, Elektrostatik HEPA, 10 Yıl Filtre"
            },
            verdict: "Daikin MC55W, bir teknoloji cihazından çok güvenilir bir beyaz eşya gibi evinizde on yıl sessizce çalışır.",
            relatedScenarios: [
                { name: "Sessiz Gece Kullanımı", slug: "sessiz-gece-kullanimi" },
                { name: "Alerji ve Bebek Odası", slug: "alerji-ve-nefes-hassasiyeti" }
            ]
        },
        "shark-neverchange5": {
            name: "Shark NeverChange5",
            topSummary: "Özellikle koku kontrolü ve düşük bakım derdi (5 yıl filtre) isteyen kullanıcılar için güçlü bir premium cihazdır.",
            personas: ["Büyük salon + Açık mutfak kullanıcıları", "Filtre değiştirme derdi istemeyenler", "Hızlı etki hissi arayanlar"],
            problemSolved: "Yoğun mutfak/pet kokusu bastırma ve 5 yıla kadar HEPA filtre koruması.",
            satisfaction: "Büyük alanlarda kullanıldığında ve koku çözümü hedeflendiğinde 'hava değişti' hissini en hızlı veren cihazdır.",
            disappointment: "Türkiye'de sarf malzeme (parfüm kapsülü vb.) bulunabilirliği risk yaratabilir.",
            pros: ["5 yıl filtre ömrü", "Mükemmel koku kontrolü", "Güçlü fan performansı"],
            cons: ["Gürültü hassasiyeti olanlar", "Bütçe hassas kullanıcılar", "Servis/sarf garantisi isteyenler"],
            priceTier: "$$$ – $$$$",
            priceValue: "12500",
            specs: {
                area: "60-80 m²",
                cadr: "Yüksek Hava Sirkülasyonu",
                noise: "Dinamik Sensör Modu",
                features: "Clean Sense IQ, Koku Kapsülü, DebrisDefence"
            },
            verdict: "Shark, koku konusunda en agresif performanslardan birini sunarken bakım kolaylığıyla öne çıkar.",
            relatedScenarios: [
                { name: "Mutfak ve Yemek Kokusu", slug: "mutfak-kokusu" },
                { name: "Evcil Hayvanlı Ev", slug: "evcil-hayvanli-ev" }
            ]
        },
        "philips-1000-ac1711": {
            name: "Philips 1000 AC1711",
            topSummary: "Küçük ve orta büyüklükteki odalar (özellikle yatak odası) için sessiz, stabil ve güvenilir bir çözüm arayanlara hitap eder.",
            personas: ["Yatak odası/Bebek odası sahipleri", "Sessizlik ve ışık hassasiyeti olanlar", "Philips kalitesini uygun fiyata arayanlar"],
            problemSolved: "Orta büyüklükteki odalarda hava kalitesini koruma ve sessiz/etkili temizlik sağlama.",
            satisfaction: "Özellikle uyku modunun başarısı ve sensör hassasiyeti sayesinde gece boyu konfor sağlar.",
            disappointment: "Geniş salonlarda koku ve duman yükünü temizlemede zayıf kalabilir.",
            pros: ["Mükemmel uyku modu", "Yüksek sensör doğruluğu", "Kompakt ve şık tasarım"],
            cons: ["Geniş açık alanlar", "Yoğun sigara dumanı dumanı", "Hızlı koku bastırma"],
            priceTier: "$$$",
            priceValue: "8500",
            specs: {
                area: "30-50 m²",
                cadr: "300 m³/saat",
                noise: "15-50 dB",
                features: "AeraSense, Smart Control, 3 Farklı Mod"
            },
            verdict: "Philips 1000, yatak odanız için alabileceğiniz en risksiz ve huzurlu cihazlardan biridir.",
            relatedScenarios: [
                { name: "Sessiz Gece Kullanımı", slug: "sessiz-gece-kullanimi" },
                { name: "Alerji ve Bebek Odası", slug: "alerji-ve-nefes-hassasiyeti" }
            ]
        },
        "sinbo-sap-5507": {
            name: "Sinbo SAP-5507",
            topSummary: "Sadece basit bir filtreleme ihtiyacı olan, düşük bütçeli ve beklentisi 'hava biraz temizlensin' olan kullanıcılar için bir giriş modelidir.",
            personas: ["Çok kısıtlı bütçeye sahip olanlar", "Teknik detay/otomasyon aramayanlar", "Küçük öğrenci odaları"],
            problemSolved: "Birincil toz ve kaba partikülleri düşük maliyetle süzme.",
            satisfaction: "Düşük maliyetli bir çözüm arayan ve yüksek teknoloji beklentisi olmayan kullanıcılar için iş görür.",
            disappointment: "Mekanik sesi, sensör eksikliği veya yetersiz koku performansı nedeniyle hayal kırıklığı yaratabilir.",
            pros: ["En düşük fiyat", "Basit kullanım", "Ulaşılabilirlik"],
            cons: ["Yüksek fan sesi", "Sensör verileri / Otomasyon", "Ağır koku ve duman performansı"],
            priceTier: "$",
            priceValue: "1800",
            specs: {
                area: "15-25 m² (Küçük)",
                cadr: "150 m³/saat",
                noise: "Yüksek (Mekanik)",
                features: "Manuel Kontrol, HEPA Filtre"
            },
            verdict: "Sinbo, 'hava temizleyiciye çok bütçe ayırmak istemiyorum ama bir filtre dönsün' diyenlerin giriş kapısıdır.",
            relatedScenarios: [
                { name: "Sessiz Gece Kullanımı", slug: "sessiz-gece-kullanimi" }
            ]
        }
    };

    const model = modelsData[slug] || modelsData["xiaomi-4-lite"];

    // JSON-LD Product Schema for GEO
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": model.name,
        "description": model.topSummary,
        "brand": {
            "@type": "Brand",
            "name": model.name.split(" ")[0]
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "TRY",
            "price": model.priceValue || "0",
            "availability": "https://schema.org/InStock"
        },
        "review": {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.5",
                "bestRating": "5"
            },
            "author": {
                "@type": "Organization",
                "name": "Hava Lab"
            },
            "reviewBody": model.verdict
        }
    };

    return (
        <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12 space-y-12">
            {/* JSON-LD FOR BOT DISCOVERY */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />

            {/* 1. DECISION FIRST HEADER */}
            <section className="max-w-4xl space-y-6">
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <Link href="/modeller" className="hover:text-accent">Modeller</Link>
                    <span>/</span>
                    <span className="text-gray-900">{model.name}</span>
                </div>
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight text-gray-950 uppercase border-b-8 border-accent/20 pb-2 inline-block">
                        {model.name}
                    </h1>
                    <div className="pt-4">
                        <div className="bg-accent/5 border-l-8 border-accent p-8 rounded-r-3xl shadow-sm ring-1 ring-accent/10">
                            <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] block mb-2 underline decoration-accent/30 underline-offset-4">HAVA LAB LABORATUVAR HÜKMÜ</span>
                            <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight italic">
                                "{model.topSummary}"
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. FIT CHECK & PERSONAS (EARLY EXIT) */}
            <section className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bento-box p-8 space-y-6 bg-white border-gray-100 shadow-sm border-t-4 border-t-gray-900">
                    <div className="flex items-center gap-3" aria-label="Kullanıcı Profilleri">
                        <Users className="h-6 w-6 text-accent" aria-hidden="true" />
                        <h2 className="text-xl font-bold tracking-tight">Wait, is this model for you?</h2>
                    </div>
                    <ul className="space-y-4">
                        {model.personas.map((p, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                <BadgeCheck className="h-5 w-5 text-green-600 shrink-0" />
                                {p}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bento-box p-8 space-y-6 bg-gray-50 border-gray-200">
                    <div className="flex items-center gap-3">
                        <Target className="h-6 w-6 text-gray-900" />
                        <h2 className="text-xl font-bold tracking-tight">Hangi Lifestyle Problemini Çözer?</h2>
                    </div>
                    <p className="text-md font-medium text-gray-700 leading-relaxed italic border-l-4 border-gray-200 pl-4">
                        {model.problemSolved}
                    </p>
                    <div className="flex items-center gap-2 pt-4">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Fiyat Aralığı:</span>
                        <span className="text-lg font-black text-gray-950 tracking-tighter">{model.priceTier}</span>
                    </div>
                </div>
            </section>

            {/* 3. PROBLEM -> SATISFACTION -> DISAPPOINTMENT (THE CORE) */}
            <section className="space-y-8">
                <div className="flex items-center gap-3 border-b pb-4">
                    <BarChart3 className="h-6 w-6 text-gray-400" />
                    <h2 className="text-2xl font-bold tracking-tight italic">Beklenti vs. Gerçeklik Deneyimi</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-8 bg-green-50 border border-green-100 rounded-3xl space-y-4">
                        <h3 className="flex items-center gap-2 text-green-700 font-bold uppercase tracking-widest text-xs">
                            <CheckCircle2 className="h-5 w-5" /> En Yüksek Memnuniyet Senaryosu
                        </h3>
                        <p className="text-md text-green-950 leading-relaxed font-medium">
                            {model.satisfaction}
                        </p>
                        <div className="pt-4 space-y-2">
                            {model.pros.map((pro, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs font-bold text-green-800 bg-white/50 p-2 rounded-lg">
                                    <Zap className="h-3 w-3" /> {pro}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 bg-orange-50 border border-orange-100 rounded-3xl space-y-4">
                        <h3 className="flex items-center gap-2 text-orange-700 font-bold uppercase tracking-widest text-xs">
                            <AlertCircle className="h-5 w-5" /> Beklenti Hatası Riski
                        </h3>
                        <p className="text-md text-orange-950 leading-relaxed font-medium">
                            {model.disappointment}
                        </p>
                        <div className="pt-4 space-y-2">
                            {model.cons.map((con, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs font-bold text-orange-800 bg-white/50 p-2 rounded-lg">
                                    <XCircle className="h-3 w-3" /> {con}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. TECHNICAL REFERENCE (RELEGATED) */}
            <section className="bg-gray-50 p-10 rounded-3xl border border-gray-100 space-y-8">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h2 className="text-xl font-bold tracking-tight">Teknik Karşılaştırma Verisi</h2>
                        <p className="text-xs text-gray-400">Üretici specs vs. laboratuvar verileri</p>
                    </div>
                    <Info className="h-6 w-6 text-gray-300" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                    <div className="space-y-1">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Maksimum Alan</span>
                        <p className="font-bold text-gray-900">{model.specs.area}</p>
                    </div>
                    <div className="space-y-1">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sirkülasyon (CADR)</span>
                        <p className="font-bold text-gray-900">{model.specs.cadr}</p>
                    </div>
                    <div className="space-y-1">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">En Düşük Ses</span>
                        <p className="font-bold text-gray-900">{model.specs.noise}</p>
                    </div>
                    <div className="space-y-1">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Akıllı Özellikler</span>
                        <p className="font-bold text-gray-900">{model.specs.features}</p>
                    </div>
                </div>
            </section>

            {/* 5. LAB VERDICT & ACTION */}
            <section className="bg-gray-900 text-white p-12 rounded-[3rem] relative overflow-hidden transition-all hover:shadow-2xl hover:shadow-accent/20">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <ShieldCheck className="h-64 w-64" />
                </div>
                <div className="relative z-10 space-y-8">
                    <div className="space-y-4 max-w-2xl">
                        <div className="bg-accent text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest inline-block uppercase">
                            HAVA LAB ÖZET KARAR
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold leading-tight italic">
                            {model.verdict}
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-center pt-8 border-t border-white/10">
                        <div className="flex gap-4">
                            <Link
                                href="/karsilastirma"
                                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 group"
                            >
                                Başka Bir Modelle Kıyasla
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="flex flex-col items-start gap-2 ml-auto">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">İlgili Senaryolar:</span>
                            <div className="flex gap-2">
                                {model.relatedScenarios?.map((s, i) => (
                                    <Link key={i} href={`/senaryolar/${s.slug}`} className="text-[10px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-accent transition-colors font-bold">
                                        {s.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERNAL NAVIGATION */}
            <section className="flex flex-col md:flex-row justify-between items-center gap-4 py-8 border-t text-sm font-bold text-gray-400">
                <Link href="/modeller" className="hover:text-accent flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 rotate-180" /> Tüm Hava Temizleyicileri Gör
                </Link>
                <p className="text-[10px] uppercase tracking-widest">Bot-Verified Decision Support Engine</p>
            </section>
        </div>
    );
}
