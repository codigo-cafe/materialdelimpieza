import React, { useState, createContext } from "react";
// create context
// eslint-disable-next-line react-refresh/only-export-components
export const QrContext = createContext();

const QrProvider = ({ children }) => {
  // sidebar state
  const [isOpenQr, setIsOpenQr] = useState(false);

  const handleCloseQr = () => {
    setIsOpenQr(false);
  };

  return (
    <QrContext.Provider
      value={{ isOpenQr, setIsOpenQr, handleCloseQr }}
    >
      {children}
    </QrContext.Provider>
  );
};

export default QrProvider;
