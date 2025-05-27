import React, { useState, useEffect, useContext } from "react";
// import link
import { Link } from "react-router-dom";
// import logo
import Logo from "../assets/img/Logo.webp";

import { motion, AnimatePresence } from "motion/react";

// import menu context
import { MenuContext } from "../contexts/MenuContext";
// import qr context
import { QrContext } from "../contexts/QrContext";
// import header context
import { HeaderContext } from "../contexts/HeaderContext";

const Header = () => {
  // header state
  const [ isActive, setIsActive ] = useState(false);
  const { isOpenMenu, setIsOpenMenu } = useContext(MenuContext);
  const { isOpenQr, setIsOpenQr } = useContext(QrContext);
  const {
    searchTerm,
    setSearchTerm,
    inputRef,
    isOpenSearch,
    handleCloseSearch,
  } = useContext(HeaderContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-white"
      } fixed border-b border-gray-200 w-full z-10 py-3 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/">
          <div>
            <img className="object-cover relative w-32 overflow-hidden md:w-[8.625rem]" src={Logo} alt="" />
          </div>
        </Link>
        {/* Bsucador */}
        <AnimatePresence>
          {isOpenSearch && (
            <motion.div
              key="search-bar"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex absolute top-0 z-20 h-full w-full items-center justify-center space-x-4 border-b-blue-300 bg-white px-5 py-1.5 backdrop-blur ltr:left-0 rtl:right-0 rtl:space-x-reverse lg:border lg:bg-opacity-30 lg:bg-light shadow-sm"
            >
              <form className="w-full lg:max-w-3xl">
                <div className="relative flex rounded md:rounded-lg h-11 md:h-12">
                  <label htmlFor="Buscador" className="sr-only">
                    Encuentra tus productos aquí...
                  </label>
                  <input
                    id="Buscador"
                    type="text"
                    autoComplete="off"
                    ref={inputRef}
                    className="search item-center flex h-full w-full appearance-none overflow-hidden truncate rounded-lg text-sm text-heading placeholder-gray-500 transition duration-300 ease-in-out focus:outline-0 focus:ring-0 lg:border-blue-400 bg-gray-100 ltr:pl-10 rtl:pr-10 ltr:pr-4 rtl:pl-4 ltr:md:pl-14 rtl:md:pr-14 border border-transparent focus:border-blue-500 focus:bg-light"
                    name="search"
                    placeholder="Encuentra tus productos aquí..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute flex h-full w-10 items-center justify-center text-body transition-colors duration-200 text-gray-500 focus:outline-0 ltr:left-0 rtl:right-0 md:w-14">
                    <span className="sr-only">Buscar</span>
                    <svg viewBox="0 0 17.048 18" className="h-4 w-4">
                      <path
                        d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z"
                        transform="translate(-367.297 -371.285)"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </form>
              <button
                onClick={() => handleCloseSearch()}
                data-variant="custom"
                className="cursor-pointer inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700 py-0 h-12 border border-blue-400 bg-gray-100 px-4 text-blue-400 lg:inline-flex transition duration-300"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center lg:space-x-4 rtl:space-x-reverse">
          <button
            onClick={() => handleCloseSearch()}
            className="cursor-pointer justify-center shrink-0 leading-none outline-none transition duration-300 ease-in-out focus:outline-0 focus:ring-blue-700 px-5 py-0 hidden h-[38px] w-[38px] items-center gap-2 rounded-full border border-gray-200 bg-light !p-1 text-sm !font-normal focus:!shadow-none focus:!ring-0 md:text-base lg:!flex"
          >
            <svg viewBox="0 0 17.048 18" className="h-4 w-4">
              <path
                d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z"
                transform="translate(-367.297 -371.285)"
                fill="currentColor"
              ></path>
            </svg>
          </button>

          <button
            onClick={() => setIsOpenQr(!isOpenQr)}
            className="hidden lg:inline-flex cursor-pointer h-full items-center justify-center p-2 hover:fill-blue-500 focus:fill-blue-600 transition duration-300 focus:outline-0"
            tabIndex="0"
          >
            <span className="sr-only">QR</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 32 32"
              xmlSpace="preserve"
              fillRule="evenodd"
            >
              <g>
                <path
                  d="M22 31h6a3 3 0 0 0 3-3v-6a1 1 0 0 0-2 0v6a1 1 0 0 1-1 1h-6a1 1 0 0 0 0 2zm-12-2H4a1 1 0 0 1-1-1v-6a1 1 0 0 0-2 0v6a3 3 0 0 0 3 3h6a1 1 0 0 0 0-2zm5-9v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0zm-2 0a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1zm14 0a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1zm-16 1v4H7v-4zm14 0v4h-4v-4zm-10-4h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2zm-9 0h5a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2zm18-2h1v1a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0 0 2zm-3 1v-5h1a1 1 0 0 0 0-2h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0zm-6-6v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zm-2-4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1zm-3-5H4a3 3 0 0 0-3 3v6a1 1 0 0 0 2 0V4a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2zm1 6v4H7V7zm11-4h6a1 1 0 0 1 1 1v6a1 1 0 0 0 2 0V4a3 3 0 0 0-3-3h-6a1 1 0 0 0 0 2zm-6 4h9v3a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1H16a1 1 0 0 0 0 2z"
                  fill="#000000"
                  opacity="1"
                  data-original="#000000"
                ></path>
              </g>
            </svg>
          </button>

          <div className="hidden md:inline-flex">
            <a
              href="https://wa.link/m65jd9"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer inline-flex items-center justify-center shrink-0 leading-none rounded outline-none transition duration-300 ease-in-out bg-blue-500 focus:outline-0 focus:shadow focus:ring-1 focus:bg-blue-600 bg-accent text-white border border-transparent hover:bg-blue-600 px-3 py-0 text-sm h-9 font-semibold"
            >
              Contáctanos
            </a>
          </div>

          <div className="hidden lg:inline-flex">
            <button
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="cursor-pointer flex h-full items-center justify-center p-2 focus:outline-0"
              tabIndex="0"
            >
              <span className="sr-only">Menú</span>
              <svg
                width="25.567"
                height="18"
                viewBox="0 0 25.567 18"
                className="-scale-x-100"
              >
                <g transform="translate(-776 -462)">
                  <rect
                    width="12.749"
                    height="2.499"
                    rx="1.25"
                    transform="translate(776 462)"
                    fill="currentColor"
                  ></rect>
                  <rect
                    width="25.567"
                    height="2.499"
                    rx="1.25"
                    transform="translate(776 469.75)"
                    fill="currentColor"
                  ></rect>
                  <rect
                    width="17.972"
                    height="2.499"
                    rx="1.25"
                    transform="translate(776 477.501)"
                    fill="currentColor"
                  ></rect>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
