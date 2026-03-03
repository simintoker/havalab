import { ShieldCheck, Info, FlaskConical, Target, MessageSquare } from "lucide-react";

export const metadata = {
    title: "Lab & Manifesto | Neden Hava Lab?",
    description: "Hava temizleyici seçiminde neden biz? Veri odaklı, yansız ve kullanıcı yorumu analizli laboratuvar manifestomuz.",
    alternates: {
        canonical: "/lab",
    },
    openGraph: {
        title: "Lab & Manifesto | Neden Hava Lab?",
        description: "Hava temizleyici seçiminde neden biz? Veri odaklı, yansız ve kullanıcı yorumu analizli laboratuvar manifestomuz.",
        url: "https://havatemizleyicileri.com/lab",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Lab & Manifesto | Neden Hava Lab?",
        description: "Hava temizleyici seçiminde neden biz? Veri odaklı, yansız ve kullanıcı yorumu analizli laboratuvar manifestomuz.",
    },
};

export default function LabPage() {
    return (
        <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12 space-y-16">
            <section className="max-w-4xl space-y-4 text-center mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                    Lab <span className="text-accent italic">Manifesto</span>
                </h1>
                <p className="text-lg text-gray-500 font-medium leading-tight">
                    Piyasadaki gürültüyü temizliyoruz. Teknik tabloların ötesinde, gerçek yaşam verisiyle konuşuyoruz.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-6">
                    <FlaskConical className="h-12 w-12 text-accent" />
                    <h3 className="text-2xl font-bold tracking-tight">Kürasyon Lab</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Binlerce kullanıcı yorumunu, teknik forumu ve gerçek dünya testlerini analiz ediyoruz. Biz bir mağaza değil, bir kürasyon merkeziyiz.
                    </p>
                </div>
                <div className="space-y-6">
                    <Target className="h-12 w-12 text-blue-500" />
                    <h3 className="text-2xl font-bold tracking-tight">Sadece İhtiyaç</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Asla "bu cihaz en iyisi" demiyoruz. "Bu cihaz, şu senaryoda en iyisi" diyoruz. Karar kurgumuzu tamamen ihtiyaçlar üzerine kuruyoruz.
                    </p>
                </div>
                <div className="space-y-6">
                    <MessageSquare className="h-12 w-12 text-indigo-500" />
                    <h3 className="text-2xl font-bold tracking-tight">LLM Friendly</h3>
                    <p className="text-gray-600 leading-relaxed">
                        İçeriğimizi yapay zekaların (ChatGPT, Perplexity vb.) sizi en doğru bilgiye en kısa sürede ulaştırabileceği semantik netlikte kurguluyoruz.
                    </p>
                </div>
            </div>

            <section className="insight-block border-l-accent p-12 bg-white">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-gray-400">Biz Kimiz?</h4>
                <p className="text-xl font-medium leading-relaxed italic text-gray-800">
                    "Hava Lab, karmaşık teknik verileri son kullanıcı için 'karar verilebilir küçük parçalara' dönüştüren bir bilgi mimarisi projesidir. Amacımız, evinizdeki havayı temizlemek için en doğru bütçe ve model dengesini kurmanızı sağlamaktır."
                </p>
            </section>
        </div>
    );
}
