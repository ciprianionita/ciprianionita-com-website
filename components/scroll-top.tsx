"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ScrollToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 600) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    if (!showButton) {
        return null;
    }

    return (
        <Link className="fixed bottom-6 right-6 hover:opacity-60" href="#home">
            <Image
                width={34}
                height={62}
                src="/icon-scroll.svg"
                alt="back to top"
            />
        </Link>
    );
}
