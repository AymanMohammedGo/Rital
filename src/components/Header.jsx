"use client";
import { useState } from "react";
import LanguageChanger from "./LanguageChanger";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <header className="absolute w-full z-20">
        <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-6">
          <Link
            href={`/`}
            className=" flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/rital-logo-white.png"
              width="100"
              height="100"
              alt="rital"
            />
          </Link>
          <div className="flex md:hidden  items-center justify-center">
            <LanguageChanger />

            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              type="button"
              className="flex items-center p-2 w-10 h-10 justify-center    md:hidden focus:outline-none "
            >
              <svg
                className="w-5 h-5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
          >
            {" "}
            <ul
              className={`font-medium flex flex-col pt-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 `}
            >
              <li>
                <Link
                  href="/"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className={` block font-normal py-2 px-3 hover:bg-primary text-white rounded-lg transition-all`}
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className={` block font-normal py-2 px-3 hover:bg-primary text-white rounded-lg transition-all`}
                >
                  {t("products")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className={` block font-normal py-2 px-3 hover:bg-primary text-white rounded-lg transition-all`}
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className={` block font-normal py-2 px-3 hover:bg-primary text-white rounded-lg transition-all`}
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:flex ">
            <LanguageChanger />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
