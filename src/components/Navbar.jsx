import React, { useContext } from "react";
// import useParams
import { useNavigate } from "react-router-dom";
// menu context
import { MenuContext } from "../contexts/MenuContext";
// import qr context
import { QrContext } from "../contexts/QrContext";
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// cart context
import { CartContext } from "../contexts/CartContext";
// header context
import { HeaderContext } from "../contexts/HeaderContext";
// import framer motion
import { motion, AnimatePresence } from "motion/react";

const Header = () => {
  const navigate = useNavigate();
  // header state
  const { isOpenMenu, setIsOpenMenu } = useContext(MenuContext);
  const { isOpenQr, setIsOpenQr } = useContext(QrContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const { isOpenSearch, handleCloseSearch } = useContext(HeaderContext);

  return (
    <nav className="visible fixed bottom-0 z-10 flex h-12 w-full justify-between bg-white py-1.5 px-2 shadow-black shadow-md ltr:left-0 rtl:right-0 md:h-14 lg:hidden">
      <button
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className="cursor-pointer flex h-full items-center justify-center p-2 focus:text-blue-600 focus:outline-0"
        tabIndex="0"
      >
        <span className="sr-only">Menú</span>
        <svg
          width="25.567"
          height="18"
          viewBox="0 0 25.567 18"
          className="false"
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

      <button
        onClick={() => handleCloseSearch()}
        className={`${
          isOpenSearch ? "text-blue-500" : ""
        } cursor-pointer flex h-full items-center justify-center p-2 focus:text-blue-600 focus:outline-0`}
        tabIndex="0"
      >
        <span className="sr-only">Buscar</span>
        <svg viewBox="0 0 17.048 18" width="17.05" height="18">
          <path
            d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z"
            transform="translate(-367.297 -371.285)"
            fill="currentColor"
          ></path>
        </svg>
      </button>

      <button
        onClick={() => navigate("/")}
        className="cursor-pointer flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
        tabIndex="0"
      >
        <span className="sr-only">Inicio</span>
        <svg width="17.996" height="20.442" viewBox="0 0 17.996 20.442">
          <g transform="translate(-30.619 0.236)">
            <path
              d="M48.187,7.823,39.851.182A.7.7,0,0,0,38.9.2L31.03,7.841a.7.7,0,0,0-.211.5V19.311a.694.694,0,0,0,.694.694H37.3A.694.694,0,0,0,38,19.311V14.217h3.242v5.095a.694.694,0,0,0,.694.694h5.789a.694.694,0,0,0,.694-.694V8.335a.7.7,0,0,0-.228-.512ZM47.023,18.617h-4.4V13.522a.694.694,0,0,0-.694-.694H37.3a.694.694,0,0,0-.694.694v5.095H32.2V8.63l7.192-6.98L47.02,8.642v9.975Z"
              transform="translate(0 0)"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.4"
            ></path>
          </g>
        </svg>
      </button>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer product-cart relative flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
        tabIndex="0"
      >
        <span className="sr-only">Carrito</span>
        <svg width="18" height="18" viewBox="0 0 18 18">
          <g transform="translate(-127 -122)">
            <path
              d="M4.7,3.8H17.3a.9.9,0,0,1,.9.9V17.3a.9.9,0,0,1-.9.9H4.7a.9.9,0,0,1-.9-.9V4.7A.9.9,0,0,1,4.7,3.8ZM2,4.7A2.7,2.7,0,0,1,4.7,2H17.3A2.7,2.7,0,0,1,20,4.7V17.3A2.7,2.7,0,0,1,17.3,20H4.7A2.7,2.7,0,0,1,2,17.3ZM11,11C8.515,11,6.5,8.583,6.5,5.6H8.3c0,2.309,1.5,3.6,2.7,3.6s2.7-1.291,2.7-3.6h1.8C15.5,8.583,13.485,11,11,11Z"
              transform="translate(125 120)"
              fill="currentColor"
              fillRule="evenodd"
            ></path>
          </g>
        </svg>
        {/* Contador con animación */}
        <AnimatePresence>
            <motion.span
              key={itemAmount} // esto fuerza la animación al cambiar el número
              initial={{ scale: 0.8, opacity: 1 }}
              animate={
                itemAmount > 0
                  ? { scale: 1.2 }
                  : { scale: 1 }
              }
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className={`absolute top-0 mt-0.5 rounded-full bg-blue-500 py-1 px-1.5 text-[10px] font-normal leading-none text-white ltr:right-0 ltr:-mr-0.5 rtl:left-0 rtl:-ml-0.5 ${
                itemAmount === 0 ? "pointer-events-none" : ""
              }`}
            >
              {itemAmount}
            </motion.span>
        </AnimatePresence>
      </button>

      <button
        onClick={() => setIsOpenQr(!isOpenQr)}
        className="cursor-pointer flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
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
    </nav>
  );
};

export default Header;
