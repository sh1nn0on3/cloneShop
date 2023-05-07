import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = (props) => {
  const [productDetail, setProductDetail] = useState();

  return (
    <ProductContext.Provider value={[productDetail, setProductDetail]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
