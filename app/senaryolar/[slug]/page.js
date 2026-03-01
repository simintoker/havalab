import Link from "next/link";
import { ArrowRight, Zap, ShieldCheck, AlertCircle, BarChart3, Info, BadgeCheck, XCircle, CheckCircle2 } from "lucide-react";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const titles = {
        "sigara-icilen-ev": "Sigara İçilen Ev İçin Hava Temizleyici | Gerçekten İşe Yarayan Modeller",
        "evcil-hayvanli-ev": "Evcil Hayvanlı Ev İçin Hava Temizleyici | Tüy ve Koku İçin Seçim",
        "alerji-ve-nefes-hassasiyeti": "Alerji ve Bebek Odası İçin Hava Temizleyici | Toz ve Polen Rehberi",
        "buyuk-salon-tek-cihaz": "Büyük Salon İçin Hava Temizleyici | Tek Cihazla Gerçek Performans",
        "sessiz-gece-kullanimi": "Sessiz Hava Temizleyici Arayanlar İçin Gece Kullanım Rehberi",
        "mutfak-kokusu": "Mutfak ve Yemek Kokusu İçin Hava Temizleyici | Gerçekçi Beklentiler"
    };

    return {
        title: titles[slug] || "Hava Temizleyici Senaryo Rehberi",
        alternates: {
            canonical: `/senaryolar/${slug}`,
        },
    };
}

export default async function ScenarioPage({ params }) {
    const { slug } = await params;

    const scenariosData = {
        "sigara-icilen-ev": {
            title: "Sigara İçilen Ev",
            problem: "Burada amaç sadece tozu filtrelemek değil, dumanın hızla bastırılması ve kokunun yayılmadan azaltılmasıdır.",
            personas: ["Düzenli sigara içilen evler", "Duman kokusundan rahatsız olanlar", "Havalandırması zayıf salonlar"],
            tier1_safe: [
                {
                    name: "Philips 3200 AC3220",
                    decision_headline: "Eğer salon gibi geniş alanda sigara içiliyorsa, en güvenli tercih genelde budur.",
                    strength: "Dumanı algılayıp hızlanma performansı en tutarlı, büyük alanlarda tek cihaz olarak en başarılı model.",
                    limitation: "Küçük odalar için fazla büyük ve maliyetli kalabilir.",
                    selection_rule: "Büyük salonu tek seferde çözmek isteyen 'Safe-Player' kullanıcılar için ideal.",
                    slug: "philips-3200-ac3220"
                },
                {
                    name: "Shark NeverChange5",
                    decision_headline: "Eğer hızlı etki senin için kritikse, Shark çoğu kullanıcıda daha tatmin edici bulunuyor.",
                    strength: "Dumanı ve kokuyu 'anında' bastırma hissi en yüksek premium cihaz.",
                    limitation: "Filtre tedariği ve sensör hassasiyeti uzun vadede soru işareti yaratabilir.",
                    selection_rule: "Mutfakla birleşik salonlarda veya hızlı koku değişimi bekleyenler için en iyi alternatif.",
                    slug: "shark-neverchange5"
                }
            ],
            tier2_alternative: [
                {
                    name: "Xiaomi 4 Lite",
                    decision_headline: "Salon değil de oda bazlı kullanımda en mantıklı fiyat/performans seçeneği.",
                    strength: "Küçük ve orta odalarda duman yükünü kırmak için yeterli fan gücüne sahip.",
                    limitation: "Geniş salonlarda 'yetişememe' ve koku bastıramama riski yüksektir.",
                    selection_rule: "Bütçe kısıtlıysa veya sadece çalışma odasında sigara içiliyorsa tercih edilmeli.",
                    slug: "xiaomi-4-lite"
                }
            ],
            tier3_risky: [
                {
                    name: "Daikin MC55W",
                    reason: "Stabil ve sessizdir ancak dumanı 'hızla' çözme karakteri zayıftır. 'Farkı hemen hissedeyim' diyenleri hayal kırıklığına uğratabilir.",
                    slug: "daikin-mc55w"
                },
                {
                    name: "Xiaomi Compact",
                    reason: "Sadece bulunduğu dar çevrede etkilidir. Salon dumanı için kapasitesi yetersiz kalır.",
                    slug: "xiaomi-4-compact"
                }
            ],
            rules: [
                "Salon/Geniş oda ise → Philips 3200 veya Shark seç.",
                "Tek oda (yatak/çalışma) ise → Xiaomi Lite yeterli.",
                "Otomatik algılama kritikse → Giriş modellerinden (Sinbo vb.) kaçın."
            ],
            verdict: "Sigara dumanı ve kokusuyla mücadele ediyorsanız, 'hava debisi' (CADR) her şeyden önemlidir. Philips 3200 genel denge için, Shark ise hız için en doğru kararlardır."
        },
        "evcil-hayvanli-ev": {
            title: "Evcil Hayvanlı Ev",
            problem: "Tüy, koku ve alerjen yüküne odaklanılmalıdır. Uzun süreli açık kalmaya uygun, yüksek devirde verimli modeller seçilmelidir.",
            personas: ["Tüy + Koku çözümü arayanlar", "Evcil hayvan kaynaklı alerjisi olanlar", "Otomasyon (kendi algılasın) isteyenler"],
            tier1_safe: [
                {
                    name: "Philips 3200 AC3220",
                    decision_headline: "Hem tüy hem alerji probleminiz varsa, en risksiz genel tercih budur.",
                    strength: "Alerjen yakalama ve tüy toplama dengesi laboratuvar verilerinde en yüksek model.",
                    limitation: "Boyutu ve filtre maliyeti giriş seviyesinden yüksektir.",
                    selection_rule: "Gerçek bir çözüm ve marka güvencesi arayan pet sahipleri için.",
                    slug: "philips-3200-ac3220"
                }
            ],
            tier2_alternative: [
                {
                    name: "Shark NeverChange5",
                    decision_headline: "Farkı hızlı hissetmek ve koku kontrolü sağlamak isteyenler için güçlü aday.",
                    strength: "Evcil hayvan kokusunu bastırmada ve yüksek fan devriyle tüy çekmede başarılı.",
                    limitation: "Uzak vadede filtre istikrarı Philips kadar kanıtlanmamış olabilir.",
                    selection_rule: "Koku öncelikli ve 'hızlı değişim' odaklı pet sahipleri için.",
                    slug: "shark-neverchange5"
                }
            ],
            tier3_risky: [
                {
                    name: "Daikin MC55W",
                    reason: "Alerji için mükemmeldir ancak 'tüy yakalama' beklentisinde zayıf kalabilir.",
                    slug: "daikin-mc55w"
                }
            ],
            rules: [
                "Alerji + Pet birlikteyse → Philips 3200 güvenli liman.",
                "Sadece tüy öncelikli ise → Fan gücü yüksek (Shark/Philips) modelleri seç."
            ],
            verdict: "Evcil hayvanlı evlerde hava sirkülasyonu yüksek modeller tüy yakalamada fark yaratır."
        },
        "alerji-ve-nefes-hassasiyeti": {
            title: "Alerji & Nefes Hassasiyeti",
            problem: "Odak noktası 0.3 mikron düzeyindeki partiküllerin (polen, toz akarı) %99.97 oranında tutulması ve cihazın gece boyu sessiz çalışmasıdır.",
            personas: ["Toz/Polen alerjisi olanlar", "Bebek odası için çözüm arayanlar", "Astım/Bronşit hassasiyeti"],
            tier1_safe: [
                {
                    name: "Daikin MC55W",
                    decision_headline: "Alerji söz konusuysa, Daikin'in plazma ve elektrostatik HEPA kombinasyonu rakipsizdir.",
                    strength: "Havayı sadece süzmekle kalmayıp ayrıştıran teknoloji ve mutlak sessizlik.",
                    limitation: "Koku bastırma hızı Philips kadar agresif değildir.",
                    selection_rule: "Önceliği 'saf hava' ve 'kesintisiz uyku' olan alerji hastaları için.",
                    slug: "daikin-mc55w"
                }
            ],
            tier2_alternative: [
                {
                    name: "Philips 1000 AC1711",
                    decision_headline: "Yatak odası ve bebek odası için en stabil Philips performansı.",
                    strength: "AeraSense sensörü ile en küçük toz değişimini bile algılar, gece modu çok başarılıdır.",
                    limitation: "Büyük salonlar için kapasitesi yetersiz kalır.",
                    selection_rule: "Orta bütçeli, yatak odası odaklı alerji çözümü arayanlar.",
                    slug: "philips-1000-ac1711"
                }
            ],
            tier3_risky: [
                {
                    name: "Sinbo SAP-5507",
                    reason: "Sensör hassasiyeti ve filtre kalitesi alerji seviyesinde bir koruma için yetersiz kalabilir.",
                    slug: "sinbo-sap-5507"
                }
            ],
            rules: [
                "Gece sessizliği %100 kritiktir. Daikin veya Philips 1000 seçin.",
                "Toz akarı ve polen için HEPA filtre kalitesinden ödün vermeyin."
            ],
            verdict: "Alerji dünyasında Daikin lider, Philips 1000 ise güvenilir takipçidir."
        },
        "buyuk-salon-tek-cihaz": {
            title: "Büyük Salon (Tek Cihaz)",
            problem: "50m² ve üzeri alanlarda havanın her köşeye ulaşması ve tek bir noktada hapsolmaması temel zorluktur.",
            personas: ["Açık plan salon sahipleri", "Yüksek tavanlı evler", "Geniş ofis alanları"],
            tier1_safe: [
                {
                    name: "Philips 3200 AC3220",
                    decision_headline: "Gerçek anlamda 'Salon Cihazı' diyebileceğimiz en dengeli dev.",
                    strength: "Hava sirkülasyon kapasitesi (CADR) sayesinde salonun en uzak köşesine kadar erişim sağlar.",
                    limitation: "Kaba ve büyük bir cihazdır, dekoratif kısıtlamalar yaratabilir.",
                    selection_rule: "Salonu tek cihazla, kafam rahat şekilde çözeyim diyenler için.",
                    slug: "philips-3200-ac3220"
                }
            ],
            tier2_alternative: [
                {
                    name: "Shark NeverChange5",
                    decision_headline: "Geniş alanlarda koku ve taze hava hissi için güçlü bir rakip.",
                    strength: "Büyük alanlarda koku moleküllerini yakalama hızı çok yüksektir.",
                    limitation: "Ses seviyesi yüksek devirlerde Philips'ten daha belirgindir.",
                    selection_rule: "Mutfakla birleşik büyük salonlar için ideal seçim.",
                    slug: "shark-neverchange5"
                }
            ],
            tier3_risky: [
                {
                    name: "Xiaomi 4 Lite",
                    reason: "Kağıt üzerinde yeterli görünse de, büyük salonun havasını çevirmede motor gücü zorlanabilir.",
                    slug: "xiaomi-4-lite"
                }
            ],
            rules: [
                "CADR değeri 450-500 altındaki cihazları salon için tekil çözüm olarak almayın.",
                "Cihazı köşe yerine mümkünse iki alanın (örn yemek ve oturma) ortasına koyun."
            ],
            verdict: "Büyük salonun ilacı yüksek hava debisidir; Philips 3200 bu konuda standart belirleyicidir."
        },
        "sessiz-gece-kullanimi": {
            title: "Sessiz Gece Kullanımı",
            problem: "Yatak başında 'çalıştığı belli bile olmasın' diyen kullanıcıların konfor beklentisidir.",
            personas: ["Hafif uykusu olanlar", "Bebek odası", "Kütüphane/Çalışma ortamı"],
            tier1_safe: [
                {
                    name: "Daikin MC55W",
                    decision_headline: "19 dB ses seviyesiyle 'fısıltıdan daha sessiz' olarak bilinen en iyi yatak odası cihazıdır.",
                    strength: "19 dB ses seviyesiyle 'fısıltıdan daha sessiz' olarak bilinen en iyi yatak odası cihazıdır.",
                    limitation: "Yavaş hava debisi.",
                    selection_rule: "Mutlak sessizlik arayanlar.",
                    slug: "daikin-mc55w"
                },
                {
                    name: "Philips 1000 AC1711",
                    decision_headline: "Uyku modu (Sleep Mode) ışık sönmesi ve fan yavaşlatma konusunda çok başarılıdır.",
                    strength: "Uyku modu (Sleep Mode) ışık sönmesi ve fan yavaşlatma konusunda çok başarılıdır.",
                    limitation: "Küçük alan odaklı.",
                    selection_rule: "Bebek odası ve yatak odası.",
                    slug: "philips-1000-ac1711"
                }
            ],
            tier2_alternative: [
                {
                    name: "Xiaomi 4 Compact",
                    decision_headline: "Boyutu ve sessizliğiyle tam bir komodin üstü şifa cihazıdır.",
                    strength: "Boyutu ve sessizliğiyle tam bir komodin üstü şifa cihazıdır.",
                    limitation: "Kısıtlı kapasite.",
                    selection_rule: "Ekonomik ve küçük oda çözümü.",
                    slug: "xiaomi-4-compact"
                }
            ],
            tier3_risky: [
                {
                    name: "Sinbo SAP-5507",
                    reason: "Mekanik fan sesi yatak odasında rahatsız edici bulunacaktır.",
                    slug: "sinbo-sap-5507"
                }
            ],
            rules: [
                "Gece modu olan ve ışıkları tamamen sönen modelleri seçin.",
                "Daikin sessizlik konusunda pazarın en tepesindedir."
            ],
            verdict: "Sessizlik arıyorsanız Daikin, ekonomik çözüm arıyorsanız Xiaomi Compact en doğru karardır."
        },
        "mutfak-kokusu": {
            title: "Mutfak ve Yemek Kokusu",
            problem: "Kızartma, balık veya ağır yemek kokularının salonla birleşik mutfaklarda hızla emilmesi gerekir.",
            personas: ["Açık mutfaklı evler", "Yemek kokusuna hassas olanlar", "Havalandırması yetersiz mutfaklar"],
            tier1_safe: [
                {
                    name: "Shark NeverChange5",
                    decision_headline: "Koku kontrolü için üretilmiş en agresif filtre sistemlerinden birine sahiptir.",
                    strength: "Koku moleküllerini yakalayan özel katmanları ve yüksek debili fanı.",
                    limitation: "Maksimum güçte sesli çalışma.",
                    selection_rule: "Önceliği mutlak koku bastırma olanlar için.",
                    slug: "shark-neverchange5"
                },
                {
                    name: "Philips 3200 AC3220",
                    decision_headline: "Hava sirkülasyonu sayesinde kokulu havayı en hızlı çeviren genel çözüm.",
                    strength: "Yüksek CADR değeri ile geniş mutfak/salon alanını kokudan arındırır.",
                    limitation: "Koku kapsülü gibi spesifik koku çözümleri içermez.",
                    selection_rule: "Hem koku hem genel temizlik için en sağlam tercih.",
                    slug: "philips-3200-ac3220"
                }
            ],
            tier2_alternative: [
                {
                    name: "Xiaomi 4 Lite",
                    decision_headline: "Küçük mutfaklar için bütçe dostu koku filtresi.",
                    strength: "Kömür filtre katmanı yemek kokularını kırmak için fiyatına göre yeterlidir.",
                    limitation: "Yoğun ve süreğen kokularda tıkanma hissi verebilir.",
                    selection_rule: "Basit koku kontrolü arayanlar.",
                    slug: "xiaomi-4-lite"
                }
            ],
            tier3_risky: [
                {
                    name: "Xiaomi 4 Compact",
                    reason: "Mutfak gibi yoğun partiküllü bir alanda filtresi çok çabuk kirlenir ve yetersiz kalır.",
                    slug: "xiaomi-4-compact"
                }
            ],
            rules: [
                "Aktif karbon filtre yoğunluğu koku için her şeydir.",
                "Cihazı yemek pişerken en yüksek devirde, davlumbazla eş zamanlı çalıştırın."
            ],
            verdict: "Mutfak kokusuyla başınız dertteyse Shark hızda, Philips 3200 ise kapasitede galibidir."
        }
    };

    const scenario = scenariosData[slug] || scenariosData["sigara-icilen-ev"];

    // JSON-LD FAQ Schema for GEO
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": scenario.rules.map(rule => ({
            "@type": "Question",
            "name": `${scenario.title} için karar kuralı nedir?`,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": rule
            }
        }))
    };

    return (
        <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12 space-y-12">
            {/* JSON-LD FOR BOT DISCOVERY */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Header & Problem Context */}
            <section className="max-w-4xl space-y-4">
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <Link href="/senaryolar" className="hover:text-accent">İhtiyaca Göre Seç</Link>
                    <span>/</span>
                    <span className="text-gray-900">{scenario.title}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
                    {scenario.title} Karar Rehberi
                </h1>
                <div className="text-lg text-gray-600 leading-relaxed font-bold max-w-2xl italic border-l-4 border-accent pl-6 bg-gray-50 py-4 rounded-r-lg">
                    <h2 className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Senaryo Analizi</h2>
                    "{scenario.problem}"
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                    {scenario.personas.map((p, i) => (
                        <span key={i} className="bg-white border px-3 py-1 rounded-full text-xs font-black text-gray-400 uppercase tracking-widest">
                            {p}
                        </span>
                    ))}
                </div>
            </section>

            {/* TIER 1: THE SAFE CHOICES */}
            <section className="space-y-8">
                <div className="flex items-center gap-3 border-b pb-4" aria-label="En Güvenli Kararlar Bölümü">
                    <CheckCircle2 className="h-6 w-6 text-green-600" aria-hidden="true" />
                    <h2 className="text-2xl font-black tracking-tight uppercase italic">{scenario.title} İçin En İyi Çözümler</h2>
                </div>

                <div className="space-y-6">
                    {scenario.tier1_safe.map((model, i) => (
                        <div key={i} className="bento-box border-l-8 border-l-accent p-8 space-y-6 bg-white shadow-sm ring-1 ring-gray-100">
                            <div className="space-y-2">
                                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">HAVA LAB ÖNERİSİ</span>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-950 italic">"{model.decision_headline}"</h3>
                                <div className="flex items-center gap-4 text-2xl font-black text-gray-900">
                                    {model.name}
                                    <Link href={`/modeller/${model.slug}`} className="text-sm font-bold text-accent hover:underline flex items-center gap-1">
                                        Analizi Gör <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 py-4 border-y border-gray-50">
                                <div className="space-y-2">
                                    <h4 className="text-xs font-bold uppercase text-green-700 flex items-center gap-1">
                                        <BadgeCheck className="h-4 w-4" /> Neden Güvenilir?
                                    </h4>
                                    <p className="text-sm text-gray-700 leading-relaxed font-medium">{model.strength}</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-bold uppercase text-red-700 flex items-center gap-1">
                                        <XCircle className="h-4 w-4" /> Dikkat Edilmesi Gereken
                                    </h4>
                                    <p className="text-sm text-gray-700 leading-relaxed">{model.limitation}</p>
                                </div>
                            </div>

                            <div className="bg-accent/5 p-4 rounded-xl border border-accent/10 flex items-center gap-4">
                                <div className="bg-accent text-white px-3 py-1 rounded-lg font-black text-[10px] uppercase">Seçim Kuralı</div>
                                <p className="text-sm font-bold text-accent-700">{model.selection_rule}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* TIER 2: ALTERNATIVES */}
            <section className="space-y-6">
                <div className="flex items-center gap-3 border-b pb-4">
                    <BarChart3 className="h-6 w-6 text-gray-400" />
                    <h2 className="text-xl font-black tracking-tight uppercase italic underline decoration-accent/20">Ekonomik Alternatifler</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {scenario.tier2_alternative.map((model, i) => (
                        <div key={i} className="bento-box p-6 space-y-4 border-gray-200 bg-gray-50/30">
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold text-gray-900 underline decoration-gray-300">{model.name}</h3>
                                <p className="text-sm font-bold text-gray-500 italic">"{model.decision_headline}"</p>
                            </div>
                            <div className="space-y-3 text-xs leading-relaxed text-gray-600">
                                <p><span className="font-bold text-gray-900">Avantaj:</span> {model.strength}</p>
                                <p><span className="font-bold text-gray-900">Beklenti Risk:</span> {model.limitation}</p>
                            </div>
                            <Link href={`/modeller/${model.slug}`} className="block text-[10px] font-bold text-accent uppercase tracking-widest pt-2">Model Detayı →</Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* RULES: THE LAB VERDICT */}
            <section className="bg-gray-950 text-white p-10 rounded-3xl space-y-6 relative overflow-hidden ring-4 ring-accent/10">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <ShieldCheck className="h-32 w-32" />
                </div>
                <div className="relative z-10 space-y-8">
                    <div className="space-y-1">
                        <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px]">Laboratuvar Karar Özeti</span>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight italic">{scenario.title} İçin 4 Altın Kural</h2>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-4">
                        {scenario.rules.map((rule, i) => (
                            <li key={i} className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 text-sm font-bold">
                                <div className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px]">{i + 1}</div>
                                {rule}
                            </li>
                        ))}
                    </ul>
                    <div className="pt-8 border-t border-white/10 mt-6">
                        <p className="text-lg md:text-2xl font-black leading-tight max-w-3xl italic">
                            "{scenario.verdict}"
                        </p>
                    </div>
                </div>
            </section>

            {/* TIER 3: THE RISKS */}
            <section className="space-y-4">
                <div className="flex items-center gap-3 border-b-4 border-orange-500/10 pb-4">
                    <AlertCircle className="h-6 w-6 text-orange-500" />
                    <h2 className="text-lg font-black tracking-widest text-orange-950 uppercase italic">Kaçınılması Gereken / Beklenti Hatası</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {scenario.tier3_risky.map((model, i) => (
                        <div key={i} className="p-6 bg-orange-50 border border-orange-100 rounded-2xl flex gap-6 items-start group hover:bg-orange-100/50 transition-colors">
                            <div className="bg-orange-500 text-white px-3 py-1 rounded-lg font-black text-[9px] uppercase tracking-widest shrink-0">Dikkat</div>
                            <div className="space-y-2">
                                <Link href={`/modeller/${model.slug}`} className="font-black text-orange-950 hover:underline tracking-tight">{model.name}</Link>
                                <p className="text-xs text-orange-900/80 leading-relaxed font-bold italic">
                                    {model.reason}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
