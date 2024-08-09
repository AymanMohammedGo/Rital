"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secand z-10 pt-16 pb-8 px-4 ">
      <div className="relative mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row  items-center justify-between mb-10">
          <Link href={`/`} className=" flex items-center  ">
            <Image
              src="/rital-logo-white.png"
              width={150}
              height={150}
              alt="logo"
            />
          </Link>
          <ul
            className={`font-medium text-center flex flex-col pt-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 `}
          >
            <li>
              <Link
                href="/"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className={` block font-normal py-2 px-3 hover:bg-primary text-white rounded-lg transition-all`}
              >
                HOME
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
                PRODUCTS
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
                ABOUT
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
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={` grid grid-cols-1 text-center md:text-start gap-0 md:gap-8 md:grid-cols-2 lg:grid-cols-2`}
        >
          <div>
            <div className="text-white mb-8">
              <h1 className="font-bold mb-3">Address</h1>
              <div className="text-sm">
                <p>Iraq - Sulaymaniyah</p>
                <span>25566 Hc 1, Glenallen, Alaska, 99588</span>
              </div>
            </div>
            <div className="text-white mb-8">
              <h1 className="font-bold mb-3">Phone</h1>
              <div className="text-sm">
                <p>077 123 456 1245</p>
                <p>077 123 456 1245</p>
              </div>
            </div>
          </div>
          <div>
            <div className="text-white mb-8">
              <h1 className="font-bold mb-3">Email</h1>
              <div className="text-sm">
                <p>Rital@gmail.com</p>
                <p>Rital@gmail.com</p>
              </div>
            </div>
            <div className="text-white mb-8">
              <h1 className="font-bold mb-3">Follow Us</h1>
              <div className="text-sm">
                <p>Facabook</p>
                <p>Instgram</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-white ">
          Privacy Policy © Rital {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
