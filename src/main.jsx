import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// menu provider
import MenuProvider from "./contexts/MenuContext";
// qr provider
import QrProvider from "./contexts/QrContext";
// sidebar provider
import SidebarProvider from "./contexts/SidebarContext";
// cart provider
import CartProvider from "./contexts/CartContext";
// header provider
import HeaderProvider from "./contexts/HeaderContext";
// product provider
import ProductProvider from "./contexts/ProductContext";
// cart provider
import CategoryProvider from "./contexts/CategoryContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MenuProvider>
    <QrProvider>
      <SidebarProvider>
        <CartProvider>
          <HeaderProvider>
            <ProductProvider>
              <CategoryProvider>
                <StrictMode>
                  <App />
                </StrictMode>
              </CategoryProvider>
            </ProductProvider>
          </HeaderProvider>
        </CartProvider>
      </SidebarProvider>
    </QrProvider>
  </MenuProvider>
);
