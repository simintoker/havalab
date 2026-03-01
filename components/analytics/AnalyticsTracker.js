"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { sendGAEvent } from "@next/third-parties/google";

export default function AnalyticsTracker() {
    const pathname = usePathname();
    const previousPathname = useRef(null);

    useEffect(() => {
        // 1. Page Based Tracking
        if (pathname.startsWith("/senaryolar/")) {
            const scenarioId = pathname.split("/").pop();
            if (scenarioId && scenarioId !== "senaryolar") {
                sendGAEvent({ event: "view_scenario", scenario_id: scenarioId });
            }
        } else if (pathname.startsWith("/modeller/")) {
            const modelId = pathname.split("/").pop();
            if (modelId && modelId !== "modeller") {
                sendGAEvent({ event: "view_model", model_id: modelId });
            }
        } else if (pathname === "/karsilastirma") {
            sendGAEvent({ event: "view_comparison" });
        } else if (pathname === "/nasil-secilir") {
            sendGAEvent({ event: "view_guide" });
        } else if (pathname === "/lab") {
            sendGAEvent({ event: "view_lab_info" });
        }

        // 2. Journey Tracking (Funnel Support)
        const handleInternalClick = (e) => {
            const link = e.target.closest("a");
            if (link && link.href && link.href.startsWith(window.location.origin)) {
                const toPage = new URL(link.href).pathname;
                if (toPage !== pathname) {
                    sendGAEvent({
                        event: "internal_click",
                        from_page: pathname,
                        to_page: toPage,
                    });
                }
            }
        };

        document.addEventListener("click", handleInternalClick);

        // Store previous path for reference if needed
        previousPathname.current = pathname;

        return () => {
            document.removeEventListener("click", handleInternalClick);
        };
    }, [pathname]);

    return null;
}
