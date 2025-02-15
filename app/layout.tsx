import Header from "@/components/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import Script from "next/script";

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
            className="!scroll-smooth"
            suppressHydrationWarning={true}
        >
            <body
                className={`relative pt-28 sm:pt-36 bg-gray-900 text-gray-50 text-opacity-90`}
            >
                <div className="grid-background"></div>
                <div className="bg-[#946263] absolute top-[-6rem] right-[11rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
                <div className="bg-[#676394] absolute top-[-1rem] left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

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
        </html>
    );
}
