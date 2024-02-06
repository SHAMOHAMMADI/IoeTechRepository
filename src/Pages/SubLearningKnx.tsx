import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import LearningComponent from "../component/LearningComponent";
import styled from "./Learning.module.css";
import LogoBanner from "../component/LogoBanner";
import { FaCartPlus } from "react-icons/fa";
import { useShoppingCart } from "../component/Context/ShoppingCartContext";
import { ProductsCartProps } from "../component/ProductCartData";

export default function SubLearningKnx(props: ProductsCartProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();

  return (
    <>
      <NavBar />
      <div className={styled.Learning}>
        <div className="bg-blue-300 text-right w-full border-2 flex justify-end ">
          <div className="bg-gray-600 border-2 w-5/12 p-2 h-80 mt-8 absolute left-8 mx-auto overflow-visible xl:h-72">
            {/* <iframe
              className="w-full h-48"
              src="https://freebies.faradars.org/video/fvee9310/720/fvee9310-00_intro.mp4"
            ></iframe> */}

            <iframe
              src="https://www.aparat.com/video/video/embed/videohash/wEDtA/vt/frame?titleShow=true&autoplay=true&recom=self"
              allow="play"
              className="w-11/12 h-80 mx-auto"
              // webkitallowfullscreen="true"
              // mozallowfullscreen="true"
            ></iframe>
            {/* <iframe
              src="https://www.aparat.com/video/video/embed/videohash/N6wZr/vt/frame"
              // allowFullScreen="true"
              // webkitallowfullscreen="true"
              // mozallowfullscreen="true"
              height="400"
              width="600"
            ></iframe> */}
            {/* <button className="flex justify-center w-full rounded-full bg-blue-500 text-white py-2 px-4 mx-auto my-4">
              سفارش دوره
            </button> */}
          </div>
          <div className="leading-8 h-fit p-6 w-6/12 ">
            <div>ارائه دهنده: آیوتگ</div>
            <div>دوره غیرحضوری (آنلاین) آموزش پیشرفته KNX</div>
            <div> 95% (27,788 رای) سطح: مقدماتی</div>
            <div>
              زمان مورد نیاز برای گذارندن دوره: 57 ساعت مجموع محتوای آموزشی: 5
              ساعت ویدئو - 52 ساعت تمرین و پروژه مهلت دوره: 7 هفته
            </div>
            <div>
              حد نصاب قبولی در دوره: 70 نمره فارغ‌التحصیل شدن در این دوره نیاز
              به ارسال تمرین‌ها و پروژه‌های الزامی دارد
            </div>
            <div> گواهینامه این دوره توسط آیوتگ ارائه می‌شود</div>
          </div>
        </div>
        <div className="p-6 text-right flex justify-evenly my-10">
          <div className="w-6/12 shadow-xl rounded border-2 me-0 leading-8 p-6">
            <h3>پیش نیازها</h3>
            <p>آموزش برنامه نویسسی زبان سی</p>
            <p>اصول اولیه الکترونیک</p>
            <p>میکروپروسسور</p>
          </div>
          <div className="w-6/12 shadow-xl rounded border-2 mx-2 leading-8 p-6">
            <h4>این آموزش برای رشته های زیر مفید است :</h4>
            <p>مهندسی برق</p>
            <p>مهندسی کامپیوتر</p>
            <p>رباتیک</p>
            <p>مکاترونیک</p>
          </div>
        </div>
        <div className="h-fit shadow-md w-11/12 m-4 flex flex-row-reverse leading-10 justify-evenly items-center mx-auto ">
          <div className="flex justify-center flex-col items-center py-4">
            <p>هزینه آموزش</p>
            <p> با تخفیف</p>
          </div>

          <div>
            <p> تومان 3600000</p>
            <p>3400000 تومان</p>
          </div>
        </div>
        <button
          onClick={() => increaseCartQuantity(props.id)}
          className="  flex justify-center w-6/12 rounded-full bg-blue-500 text-white py-2 px-4 mx-auto items-center space-x-4"
        >
          <p>افزودن به سبد سفارش</p>
          <FaCartPlus />
        </button>
        <div className="w-11/12 py-6 px-6 mx-auto text-right space-y-6 leading-8 rounded h-fit flex flex-col justify-center my-8 bg-blue-50 shadow-xl rounded">
          <h4>سرفصل مطالب</h4>
          <p className="flex flex-col">
            <p className="text-center"></p>
            <ul className="px-6">
              <p>
                طراحی پیشرفته در پروژه ها و کاربرد سنسورهای خاص مانند ایستگاه
                هواشناسی شامل برنامه نویسی تحت ETS
              </p>
              <p>فلگها شامل برنامه نویسی تحت ETS تعامل کاری ذر KNX</p>
              <p>تلگرام KNX</p>
              <p>کوپلرها و راه اندازی آنها شامل برنامه نویسی تحت ETS</p>

              <p>اپلیکیشن های خاص در KNX</p>
              <p>ارتباط امن در KNX شامل برنامه نویسی تحت ETS</p>
              <p>ارتباط تحت IP در KNX شامل برنامه نویسی ETS</p>
              <p>
                شبکه DALI و کنترا روشنایی در آن همراه با ارتباط با KNX شامل
                برنامه نویسی تحت ETS
              </p>

              <p>تعریف لایه های منطق در پروژه شامل برنامه نویسی تحت ETS</p>
              <p>سیستم امنیتی و دزگیر شامل برنامه نویسی تحت ETS</p>
              <p>
                مانیتورینگ ، کنترل از موبایل و HMI شامل برنامه نویسی تحت ETSا
              </p>
            </ul>
          </p>
        </div>
        <div>
          <LogoBanner />
        </div>
      </div>
      <Footer />
    </>
  );
}
