"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    useEffect(() => {
        sendGAEvent({ event: "page_not_found", url: window.location.href });
    }, []);

    return (
        <div className="container mx-auto px-4 py-24 text-center space-y-8">
            <div className="space-y-4">
                <h1 className="text-6xl font-black text-gray-900 tracking-tighter italic">404</h1>
                <h2 className="text-2xl font-bold uppercase tracking-widest text-accent">Yolunuzu mu kaybettiniz?</h2>
            </div>
            <p className="max-w-md mx-auto text-gray-500 font-medium">
                Aradığınız sayfa laboratuvarımızdan kaçmış olabilir. En iyi hava temizleyiciyi bulmak için anasayfaya dönebilirsiniz.
            </p>
            <div className="pt-8">
                <Link href="/" className="inline-flex items-center gap-2 bg-gray-950 text-white px-8 py-3 rounded-xl font-bold hover:bg-accent transition-all">
                    <ArrowLeft className="h-5 w-5" /> Anasayfaya Dön
                </Link>
            </div>
        </div>
    );
}
