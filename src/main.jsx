import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import HelloWorld from "./HelloWorld.jsx";
import ProductDetail from "./ProductDetail.jsx";
import { ProductProvider } from "./ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<App />} />
          <Route path="hello" element={<HelloWorld />} />
          <Route path="products/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  </StrictMode>
);
