"use client";
import { t } from "i18next";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = ({ dir }) => {
  console.log(dir);
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-secand z-10 pt-16 pb-8 px-4 ">
      <div className="relative mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row  items-center justify-between mb-10">
          <Link href={`/`} className="flex items-center">
            <Image
              src="/rital-logo-white.png"
              width={150}
              height={150}
              alt="logo"
            />
          </Link>
        </div>
        <div
          className={` grid grid-cols-1 text-center md:text-start gap-0 md:gap-8 lg:gap-16 xl:gap-28 md:grid-cols-4`}
        >
          <div className="md:col-span-2">
            <div className="text-white mb-8 ">
              <div className="flex items-center mb-3 justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-map-pinned mx-2"
                >
                  <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
                  <circle cx="12" cy="8" r="2" />
                  <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />
                </svg>
                <h1 className="font-bold "> {t("Address")}</h1>
              </div>

              <div className="text-sm space-y-2">
                <p>{t("Iraq - Sulaymaniyah")}</p>
                <p>
                  {t(
                    "arbat road stores complex of sulaymaniyah chamber of commerce, wharehouse number 417"
                  )}
                </p>
              </div>
            </div>
            <div className="text-white mb-8">
              <div className="flex items-center mb-3 justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-phone-call mx-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                  <path d="M14.05 6A5 5 0 0 1 18 10" />
                </svg>
                <h1 className="font-bold ">{t("Phone")}</h1>
              </div>
              <div className="text-sm space-y-2">
                {dir !== "ar" && (
                  <>
                    <p>+964 7703710808</p> <p>+964 7703710909</p>
                  </>
                )}
                {dir === "ar" && (
                  <>
                    <p>7703710808 964+</p>
                    <p>7703710909 964+</p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="">
            <div className="text-white mb-8">
              <div className="flex items-center mb-3 justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-mail mx-2"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <h1 className="font-bold ">{t("Email")}</h1>
              </div>
              <div className="text-sm space-y-2">
                {/* <p>Salim@ritalelectric.com</p> */}
                <p>info@ritalelectric.com</p>
              </div>
            </div>
            <div className="text-white mb-8">
              <div className="flex items-center mb-3 justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-user-check mx-2"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <polyline points="16 11 18 13 22 9" />
                </svg>
                <h1 className="font-bold ">{t("Follow Us")}</h1>
              </div>
              <div className="text-sm space-y-2">
                <p>
                  <Link href="https://www.facebook.com/rital.electric">
                    {t("Facabook")}
                  </Link>
                </p>
                <p>
                  <Link href="https://www.instagram.com/rital.electric">
                    {t("Instagram")}
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="text-white mb-8">
            <div className="flex items-center mb-3 justify-center md:justify-start ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-sticky-note mx-2"
              >
                <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" />
                <path d="M15 3v4a2 2 0 0 0 2 2h4" />
              </svg>
              <h1 className="font-bold ">{t("Pages")}</h1>
            </div>

            <ul
              className={`font-medium space-y-2 lg:text-start flex flex-col   `}
            >
              <li>
                <Link href="/">{t("home")}</Link>
              </li>
              <li>
                <Link href="/products">{t("products")}</Link>
              </li>
              <li>
                <Link href="/about">{t("about")}</Link>
              </li>
              <li>
                <Link href="/contact">{t("contact")}</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-white ">
          {t("Privacy Policy © Rital")} {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
