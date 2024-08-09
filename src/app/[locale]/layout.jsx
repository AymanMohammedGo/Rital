import "./globals.css";
import i18nConfig from "../../../i18nConfig";
import { dir } from "i18next";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const i18nNamespaces = ["Home"];
import { Great_Vibes } from "next/font/google";

export const metadata = {
  title: "Rital",
  description: "",
};

const great_Vibes = Great_Vibes({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],

  variable: "--font-great_Vibes",
});
export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}
export default async function RootLayout({ children, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <html
        lang={locale}
        dir={locale === "kr" ? "rtl" : dir(locale)}
        className={`${great_Vibes.variable} `}
      >
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </TranslationsProvider>
  );
}
