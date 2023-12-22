import { useParams } from "react-router-dom";
import LogoBanner from "../component/LogoBanner";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductsCartProps } from "../component/ProductCartData";
import NavBar from "../component/NavBar";
import { FaStar } from "react-icons/fa";
import Footer from "../component/Footer";
import ProductsCart from "../component/ProductsCart";

const SubProducts = () => {
  const [data, setData] = useState<ProductsCartProps>({});
  const params = useParams();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:3011/article/${params.id}`).then((res) => {
      setData(res.data);
    });
    console.log(data);
  }, []);

  const increaseHandle = () => {
    setCounter((counter) => counter + 1);
  };

  const decreaseHandle = () => {
    if (counter > 0) {
      setCounter((counter) => counter - 1);
    }
  };

  return (
    <>
      <NavBar />
      <LogoBanner />
      <div className="flex flex-col justify-evenly space-y-4 w-12/12 sm:w-12/12">
        <div className="flex flex-col justify-center w-full items-center shadow-md p-10 m-6 rounded space-y-4">
          <h2 className="text-red-600 font-bold text-left">{data.title}</h2>
          <p className="">{data.someDescription}</p>
          <p className="text-center leading-8">{data.description}</p>
        </div>
        <p>{}</p>
      </div>

      <Footer />
    </>
  );
};

export default SubProducts;
