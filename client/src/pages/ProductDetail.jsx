import axios from "axios";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const [demo, setDemo] = useState([]);
  const [input, setInput] = useState({
    id: "1",
  })
  // console.log("🚀 ~ file: ProductDetail.jsx:6 ~ ProductDetail ~ demo:", demo);
  console.log("🚀 ~ file: ProductDetail.jsx:8 ~ ProductDetail ~ input:", input)
  useEffect(() => {
    axios
      .post("http://localhost:8000/get-product-data", input)
      .then((items) => {
        console.log("🚀 ~ file: ProductDetail.jsx:12 ~ .then ~ items:", items)
        // setDemo(items);
      })
      .catch((error) => console.log(error));

    return () => {};
  }, [input]);
  // const filterProduct = demo.filter((props) => props.id === 10 )
  // console.log("🚀 ~ file: ProductDetail.jsx:18 ~ ProductDetail ~ filterProduct:", filterProduct)

  return <></>;
};

export default ProductDetail;
