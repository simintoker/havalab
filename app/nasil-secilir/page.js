import { ShieldCheck, Info, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Hava Temizleyici Nasıl Seçilir? | Karar Verme Rehberi",
    description: "Hava temizleyici alırken dikkat etmeniz gereken 5 kritik nokta. Teknik verilerin ötesindeki gerçek performans kriterleri.",
};

export default function HowToChoosePage() {
    const steps = [
        {
            title: "1. Alan Kapasitesini (CADR) En Az %20 Fazla Hesaplayın",
            desc: "Üretici verileri genellikle laboratuvar ortamındaki en yüksek mod değeridir. Günlük kullanımda sessizlik için cihazı en üst modda çalıştırmayacağınızdan, alanınızdan daha güçlü bir cihaz seçmek konforu artırır.",
        },
        {
            title: "2. Sensör Hassasiyeti ve Otomatik Mod Performansı",
            desc: "Gerçek akıllı bir cihaz, sigara dumanını veya yemek kokusunu saniyeler içinde algılayıp fan hızını artırmalıdır. Bazı modellerin sensörleri sadece çok yoğun kirlilikte devreye girer.",
        },
        {
            title: "3. Filtre Ömrü ve Değişim Maliyeti",
            desc: "Cihazı ucuza alıp her 6 ayda bir pahalı filtre almak toplam maliyeti yükseltir. Daikin gibi 10 yıl ömürlü veya Shark gibi 5 yıl ömürlü modelleri bu yüzden radara almalısınız.",
        },
        {
            title: "4. Ses Tonu ve Titreşim (dB Değerine Kanmayın)",
            desc: "Sadece dB değerine bakmak yanıltıcıdır. Bazı fanlar düşük dB değerinde bile ıslık veya titreşim sesi çıkarabilir. Yatak odası için 'soft' fan tonu olan modelleri tercih edin.",
        },
        {
            title: "5. Problem Odaklı Seçim Yapın",
            desc: "Derdiniz sadece tozsa hemen her cihaz iş görür. Ancak sigara, evcil hayvan kokusu veya şiddetli alerji gibi spesifik dertleriniz varsa 'premium' serilere yönelmek zorundasınız.",
        }
    ];

    return (
        <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12 space-y-12">
            <section className="max-w-3xl space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                    Nasıl Seçilir?
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                    Hava temizleyici bir "fan + filtre" kombinasyonundan daha fazlasıdır. Doğru kararı vermek için laboratuvarımızın 5 ana kuralını takip edin.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {steps.map((step, idx) => (
                    <div key={idx} className="bento-box space-y-4 border-gray-100 group">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-black">
                            {idx + 1}
                        </div>
                        <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
                    </div>
                ))}
            </div>

            <section className="insight-block bg-gray-50 border-gray-200 p-12 rounded-3xl">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 italic tracking-tighter uppercase"><Info className="h-6 w-6 text-accent" /> Lab Tavsiyesi</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                    "En pahalı her zaman en iyisi değildir, ancak en ucuzu genellikle salonunuzu temizlemeye yetmeyecektir. Kararınızı odanızın m² değerine göre değil, **problem yükünüze (sigara, pet, alerji)** göre verin."
                </p>
            </section>
        </div>
    );
}
