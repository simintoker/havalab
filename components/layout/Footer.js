import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 bg-gray-50 py-12 mt-20">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="text-xl font-bold tracking-tighter text-foreground uppercase">
                            HAVA<span className="text-accent">LAB</span>
                        </Link>
                        <p className="text-sm text-gray-500">
                            Gerçek kullanıcı deneyimlerinden beslenen, senaryo bazlı karar rehberi. Teknolojiyi değil, havayı temizliyoruz.
                        </p>
                        <p className="text-xs text-gray-400">
                            Son güncelleme: 2026-03-01
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Senaryolar</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/senaryolar/sigara-icilen-ev">İhtiyaca göre seç</Link></li>
                            <li><Link href="/modeller">Modeller</Link></li>
                            <li><Link href="/karsilastirma">Karşılaştırma</Link></li>
                            <li><Link href="/nasil-secilir">Nasıl seçilir?</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Hızlı Erişim</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/lab">Lab</Link></li>
                            <li><Link href="/lab#iletisim">İletişim / Künye</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold mb-4">Kullanıcı Deneyimi</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Teknik veriler yerine gerçek yorumlar.</li>
                            <li>Yorum yerine sonuç sunan analiz.</li>
                            <li>Net ve karşılaştırılabilir karar cümleleri.</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-400">
                    © 2026 HavaLab. Tüm hakları saklıdır.
                </div>
            </div>
        </footer>
    );
}
