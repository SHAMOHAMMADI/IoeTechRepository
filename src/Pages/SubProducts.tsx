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

  useEffect(() => {
    axios.get(`http://localhost:3009/subproducts/${params.id}`).then((res) => {
      setData(res.data);
    });
    console.log(data);
  }, []);
  return (
    <>
      <NavBar />
      <div className="w-full h-full flex flex-col justify-center items-center border-2 ">
        <div className="flex flex-row-reverse w-full justify-evenly items-center h-96 [&>*]:border-2 text-center">
          <div className="w-3/12 h-36 square-aspect flex justify-center items-center">
            {" "}
            <img src={data.image} className="h-aspect-square w-full" alt="" />
          </div>

          <div className="w-3/12 aspect-square space-y-4 text-sm">
            <h2>{data.title}</h2>
            <p>ویژگی‌ها</p>
            <p>بخشی از توضیحات</p>
            <p>تعداد ستاره ها</p>
            <p></p>
            <div className="text-yellow-500">
              <FaStar />
            </div>
          </div>

          <div className="w-3/12 aspect-square">
            <div className="w-3/12 aspect-square">{data.price}</div>
            <p>تنها 2 عدد در انبار</p>
            <div className="flex justify-content-end">
              <button className=" bg-[#F70101] w-9/12 h-fit py-2 px-4 rounded-full text-white cursor-pointer hover:border-2">
                خرید
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-11/12 shadow-2xl h-96 pb-16 ">
          <div className="w-8/12 h-full shadow-md text-center">video</div>
          <div className="w-4/12 h-full shadow-md text-center">others</div>
        </div>
        {/* <div className="flex  overflow-hidden w-full h-60 border-2">
          <ProductsCart />
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default SubProducts;
