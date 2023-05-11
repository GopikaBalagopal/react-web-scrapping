import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { useCallback, useEffect, useState } from "react";
import Products from "./components/Products";
import axios from "axios";
import { debounce } from "@mui/material";
import { scrapProducts } from "./utils/utils";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  const debounceValidation = debounce(async (value) => {
    const data = await scrapProducts(value);
  }, 3000);

  console.log({ products });
  return (
    <div className="App">
      <Header
        setProducts={setProducts}
        debounceValidation={debounceValidation}
      />
      <ProductList products={products} />
    </div>
  );
}

export default App;
