import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [aiData, setAiData] = useState([]);

  useEffect(() => {
    fetch("api.json")
      .then((res) => res.json())
      .then((data) => {
        setAiData(data);
        // console.log(data);
      });
  }, []);

  const info = {
    aiData,
  };

  return <ProductContext.Provider value={info}> {children} </ProductContext.Provider>;
};
