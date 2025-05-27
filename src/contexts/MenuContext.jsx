import React, { useState, createContext } from "react";
// create context
// eslint-disable-next-line react-refresh/only-export-components
export const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  // sidebar state
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <MenuContext.Provider
      value={{ isOpenMenu, setIsOpenMenu, handleCloseMenu }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
