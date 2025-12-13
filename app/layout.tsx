import Header from "@/components/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
    title: "Ciprian Ionita | Web Developer",
    description: "Ciprian Ionita is a full-stack web developer.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className="scroll-smooth!"
            suppressHydrationWarning={true}
        >
            <body
                className={`relative pt-28 sm:pt-36 bg-gray-900 text-gray-50/90`}
            >
                <div className="grid-background"></div>
                <div className="bg-[#946263] absolute -top-24 right-44 -z-10 h-125 w-125 rounded-full blur-[10rem] sm:w-275"></div>
                <div className="bg-[#676394] absolute -top-4 -left-140 -z-10 h-125 w-200 rounded-full blur-[10rem] sm:w-275 md:-left-132 lg:-left-112 xl:-left-60 2xl:-left-20"></div>

                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <Header />
                        {children}
                        <Footer />
                        <Toaster position="top-right" />
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>
                <Script src="/cursor.js" />
            </body>
            <GoogleAnalytics gaId="G-XTESVHD6WS" />
        </html>
    );
}
