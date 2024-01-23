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
    axios.get(`http://localhost:7100/subproducts/${params.id}`).then((res) => {
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
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div
          className="flex flex-row-reverse m-16 border-2 w-full justify-evenly py-6 [&>*]:border-2 text-center 
         sm:flex flex-wrap my-4 space-y-4"
        >
          <div className="rounded-md shadow-md w-3/12 square-aspect flex justify-center items-center max-sm:w-9/12 ">
            <img src={data.image} className="h-aspect-square w-full" alt="" />
          </div>

          <div className="rounded-md shadow-md w-12/12 h-fit p-8 text-right justify-center leading-8 aspect-square space-y-2 text-sm xl:w-6/12 lg:w-6/12 sm:w-12/12 ">
            <h2>{data.title}</h2>
            <p>{data.someDescription}</p>
            <p></p>
            <div className="p-4 text-yellow-500 flex space-x-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center w-3/12 aspect-square spacee-y-6 p-6 rounded-md shadow-md max-sm:w-9/12">
            <div className="w-3/12 aspect-square">{data.price} تومان</div>
            <div className="flex flex-col w-9/12 p-2 items-center justify-center space-y-8">
              <div>
                <p className="text-center">{data.quantity}</p>
                <p className="text-right">عدد در انبار</p>
              </div>

              <button className=" bg-[#F70101] w-full h-fit py-2 px-4 rounded-full text-white cursor-pointer hover:border-2">
                خرید
              </button>
              <div className="flex w-6/12 rounded-full items-center justify-center [&>*]:border-2">
                <button
                  onClick={increaseHandle}
                  className="w-3/12  bg-blue-600 rounded-full text-white"
                >
                  +
                </button>
                <p className="w-16">{counter}</p>
                <button
                  onClick={decreaseHandle}
                  className="w-3/12 bg-blue-600 rounded-full text-white"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex w-11/12 shadow-2xl h-96 pb-16 ">
          <div className="w-8/12 h-full shadow-md text-center">video</div>
          <div className="w-4/12 h-full shadow-md text-center">others</div>
        </div> */}
        {/* <div className="flex  overflow-hidden w-full h-60 border-2">
          <ProductsCart />
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default SubProducts;
