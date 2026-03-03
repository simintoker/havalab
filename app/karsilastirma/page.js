import Link from "next/link";
import { ArrowRight, Check, X, Minus, ShieldCheck, AlertCircle, Info } from "lucide-react";

export const metadata = {
    title: "Hava Temizleyici Karşılaştırma Matrisi | Karar Masası",
    description: "Modelleri yan yana getirin ve koku, duman, sessizlik performanslarını tek bir tabloda karşılaştırın.",
    alternates: {
        canonical: "/karsilastirma",
    },
    openGraph: {
        title: "Hava Temizleyici Karşılaştırma Matrisi | Karar Masası",
        description: "Modelleri yan yana getirin ve koku, duman, sessizlik performanslarını tek bir tabloda karşılaştırın.",
        url: "https://havatemizleyicileri.com/karsilastirma",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Hava Temizleyici Karşılaştırma Matrisi | Karar Masası",
        description: "Modelleri yan yana getirin ve koku, duman, sessizlik performanslarını tek bir tabloda karşılaştırın.",
    },
};

export default function ComparisonPage() {
    const models = [
        { name: "Sinbo SAP-5507", price: "$", sigara: "yellow", koku: "red", alerji: "yellow", pet: "yellow", alan: "red", sessiz: "red", fp: "green" },
        { name: "Xiaomi 4 Compact", price: "$", sigara: "yellow", koku: "red", alerji: "yellow", pet: "yellow", alan: "red", sessiz: "green", fp: "green" },
        { name: "Xiaomi 4 Lite", price: "$", sigara: "green", koku: "yellow", alerji: "yellow", pet: "yellow", alan: "red", sessiz: "yellow", fp: "green" },
        { name: "Philips 1000 AC1215", price: "$$$", sigara: "yellow", koku: "yellow", alerji: "green", pet: "yellow", alan: "red", sessiz: "green", fp: "yellow" },
        { name: "Shark NeverChange5", price: "$$$", sigara: "green", koku: "green", alerji: "yellow", pet: "green", alan: "yellow", sessiz: "yellow", fp: "yellow" },
        { name: "Daikin MC55W", price: "$$$$", sigara: "red", koku: "red", alerji: "green", pet: "red", alan: "yellow", sessiz: "green", fp: "yellow" },
        { name: "Philips 3200 AC3220", price: "$$$$", sigara: "green", koku: "green", alerji: "green", pet: "green", alan: "green", sessiz: "yellow", fp: "yellow" },
    ];

    const StatusIcon = ({ status }) => {
        // Larger dots for better mobile at-a-glance scanning
        if (status === "green") return <div className="flex justify-center"><div className="w-4 md:w-5 h-4 md:h-5 rounded-full bg-green-500 shadow-md shadow-green-200/50 block border-2 border-white" title="Güçlü" /></div>;
        if (status === "yellow") return <div className="flex justify-center"><div className="w-4 md:w-5 h-4 md:h-5 rounded-full bg-yellow-400 shadow-md shadow-yellow-200/50 block border-2 border-white" title="Sınırda" /></div>;
        if (status === "red") return <div className="flex justify-center"><div className="w-4 md:w-5 h-4 md:h-5 rounded-full bg-red-400 shadow-md shadow-red-200/50 block border-2 border-white" title="Riskli" /></div>;
        return null;
    };

    return (
        <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12 space-y-6 md:space-y-10">
            {/* COMPACT & SHARP HEADER */}
            <section className="max-w-4xl space-y-1">
                <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-none italic uppercase text-gray-900">
                    Karar Matrisi
                </h1>
                <p className="text-xs md:text-base text-gray-500 font-bold">
                    Modelleri teknik özelliklerle değil, <span className="text-accent border-b-2 border-accent/20">gerçek hayat problemleriyle</span> kıyaslayın.
                </p>
            </section>

            {/* LEGEND / SIGNAL DECODER */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 py-3 px-5 bg-white rounded-2xl border border-gray-100 shadow-sm text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400">
                <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-500 border-2 border-white shadow-sm" aria-hidden="true" /> Güvenli</span>
                <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-white shadow-sm" aria-hidden="true" /> Sınırda</span>
                <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-400 border-2 border-white shadow-sm" aria-hidden="true" /> Riskli</span>
            </div>

            {/* Decision Matrix Table (POLISHED READABILITY) */}
            <div className="relative overflow-x-auto rounded-2xl md:rounded-[2rem] border border-gray-100 shadow-xl bg-white">
                <table className="w-full border-collapse min-w-[700px] md:min-w-[1000px] text-xs md:text-sm">
                    <thead>
                        <tr className="bg-gray-950 text-white">
                            <th className="sticky left-0 z-20 bg-gray-950 py-4 md:py-6 px-5 md:px-8 text-left font-black uppercase tracking-[0.2em] text-[9px] md:text-[11px] shadow-[4px_0_10px_rgba(0,0,0,0.3)]">Model</th>
                            <th className="py-4 md:py-6 text-center font-black uppercase tracking-widest text-[9px] md:text-[11px] opacity-70">Fiyat</th>
                            <th className="py-4 md:py-6 text-center font-black uppercase tracking-widest text-[9px] md:text-[11px]">Sigara</th>
                            <th className="py-4 md:py-6 text-center font-black uppercase tracking-widest text-[9px] md:text-[11px]">Koku</th>
                            <th className="py-4 md:py-6 text-center font-black uppercase tracking-widest text-[9px] md:text-[11px]">Alerji</th>
                            <th className="py-4 md:py-6 text-center font-black uppercase tracking-widest text-[9px] md:text-[11px]">Pet</th>
                            <th className="py-4 md:py-6 text-center font-black uppercase tracking-widest text-[9px] md:text-[11px]">Salon</th>
                            <th className="py-4 md:py-6 text-center font-black uppercase tracking-widest text-[9px] md:text-[11px]">Sessiz</th>
                            <th className="py-4 md:py-6 text-center font-black uppercase tracking-widest text-[9px] md:text-[11px] text-accent">F/P</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {models.map((model, idx) => (
                            <tr key={idx} className="hover:bg-accent/[0.03] transition-colors group">
                                <td className="sticky left-0 z-10 bg-white group-hover:bg-gray-50 py-5 md:py-7 px-5 md:px-8 font-black text-gray-950 group-hover:text-accent transition-colors shadow-[4px_0_8px_rgba(0,0,0,0.03)] border-r border-gray-50 md:border-none md:text-base">
                                    {model.name}
                                </td>
                                <td className="py-5 md:py-7 text-center font-black text-gray-300 tracking-tighter md:text-base">{model.price}</td>
                                <td className="py-5 md:py-7 px-2"><StatusIcon status={model.sigara} /></td>
                                <td className="py-5 md:py-7 px-2"><StatusIcon status={model.koku} /></td>
                                <td className="py-5 md:py-7 px-2"><StatusIcon status={model.alerji} /></td>
                                <td className="py-5 md:py-7 px-2"><StatusIcon status={model.pet} /></td>
                                <td className="py-5 md:py-7 px-2"><StatusIcon status={model.alan} /></td>
                                <td className="py-5 md:py-7 px-2"><StatusIcon status={model.sessiz} /></td>
                                <td className="py-5 md:py-7 px-2"><StatusIcon status={model.fp} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* POLISHED SUMMARY CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 bg-white border border-gray-100 rounded-[1.5rem] flex items-start gap-4 shadow-sm group hover:border-accent transition-colors">
                    <div className="bg-green-50 p-2 rounded-xl text-green-600 group-hover:bg-accent group-hover:text-white transition-all">
                        <ShieldCheck className="h-5 w-5 shrink-0" />
                    </div>
                    <div className="space-y-1">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">En Güvenli</p>
                        <p className="text-xs md:text-sm font-bold text-gray-900 leading-[1.3]">
                            Philips 3200 her senaryoda tam performans verir.
                        </p>
                    </div>
                </div>
                <div className="p-5 bg-white border border-gray-100 rounded-[1.5rem] flex items-start gap-4 shadow-sm group hover:border-orange-200 transition-colors">
                    <div className="bg-orange-50 p-2 rounded-xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                        <AlertCircle className="h-5 w-5 shrink-0" />
                    </div>
                    <div className="space-y-1">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Dikkat</p>
                        <p className="text-xs md:text-sm font-bold text-gray-900 leading-[1.3]">
                            Daikin sessizdir ancak koku bastırmada risklidir.
                        </p>
                    </div>
                </div>
                <Link href="/senaryolar" className="p-5 bg-gray-950 text-white rounded-[1.5rem] flex items-center justify-between group hover:shadow-xl hover:shadow-accent/20 transition-all border border-transparent hover:border-accent">
                    <div className="space-y-1">
                        <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">Karar Rehberi</p>
                        <p className="text-sm font-bold">Size Özel Senaryoyu Seçin</p>
                    </div>
                    <div className="bg-white/10 p-2 rounded-xl group-hover:bg-accent group-hover:text-white transition-all">
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                </Link>
            </div>

            {/* SUBTLE FOOT note */}
            <p className="text-[9px] md:text-[10px] text-center font-bold text-gray-400 uppercase tracking-[0.3em] pt-4">
                Veriler kullanıcı deneyimi ve laboratuvar testleri bazlı kararlardır.
            </p>
        </div>
    );
}
