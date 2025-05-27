import React, { createContext, useState, useRef } from "react";

// create context
// eslint-disable-next-line react-refresh/only-export-components
export const HeaderContext = createContext();

const HeaderProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const inputRef = useRef(null);

  const handleCloseSearch = () => {
    setIsOpenSearch(!isOpenSearch);

    // Espera al siguiente ciclo del render para asegurar que el input está en el DOM
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <HeaderContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        inputRef,
        isOpenSearch,
        setIsOpenSearch,
        handleCloseSearch,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
