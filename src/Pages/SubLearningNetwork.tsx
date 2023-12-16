import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import LearningComponent from "../component/LearningComponent";
import styled from "./Learning.module.css";
import LogoBanner from "../component/LogoBanner";
import { FaCartPlus } from "react-icons/fa";

export default function SubLearningNetwork() {
  return (
    <>
      <NavBar />
      <div className={styled.Learning}>
        <div className="bg-blue-300 text-right w-full border-2 flex justify-end ">
          <div className="bg-gray-600 border-2 w-5/12 p-4 h-96 mt-16 absolute left-8 mx-auto overflow-visible ">
            <video
              autoPlay
              className="w-full"
              src="https://freebies.faradars.org/video/fvee9310/720/fvee9310-00_intro.mp4"
            ></video>
            <button className="flex justify-center w-full rounded-full bg-blue-500 text-white py-2 px-4 mx-auto my-4">
              سفارش دوره
            </button>
          </div>
          <div className="leading-8 h-96 p-6 w-6/12">
            <div>ارائه دهنده: آیوتگ</div>
            <div>AVR آموزش مقدماتی</div>
            <div> 95% (27,788 رای) سطح: مقدماتی</div>
            <div>
              زمان مورد نیاز برای گذارندن دوره: 57 ساعت مجموع محتوای آموزشی: 5
              ساعت ویدئو - 52 ساعت تمرین و پروژه مهلت دوره: 7 هفته
            </div>
            <div>
              حد نصاب قبولی در دوره: 70 نمره فارغ‌التحصیل شدن در این دوره نیاز
              به ارسال تمرین‌ها و پروژه‌های الزامی دارد
            </div>
            <div> گواهینامه این دوره توسط مکتب‌خونه ارائه می‌شود</div>
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
            <p>تخفیف</p>
          </div>

          <div>
            تومان<p></p>
            تومان<p></p>
          </div>
        </div>
        <button className="  flex justify-center w-6/12 rounded-full bg-blue-500 text-white py-2 px-4 mx-auto items-center space-x-4">
          <p>افزودن به سبد سفارش</p>
          <FaCartPlus />
        </button>
        <div className="w-11/12 py-6 px-6 mx-auto text-right space-y-6 leading-8 rounded h-fit flex flex-col justify-center my-8 bg-blue-50 shadow-xl rounded">
          <h4>سرفصل‌های دوره آموزش میکروکنترلر ای وی آر و کدویژن – مقدماتی</h4>
          <p className="flex flex-col">
            <p className="text-center ">آشنایی اولیه با میکروکنترلرهای AVR</p>
            <ul className="px-6">
              <p>میکروکنترلرهای این خانواده</p>
              <p>مفهوم فیوز بیت (Fuse bits) و بیت قفل</p>
              <p>منابع کلاک سیستم</p>
              <p>منابع Reset سیستم</p>

              <b>ساختار حافظه</b>
              <p>حافظه برنامه (Flash)</p>
              <p>حافظه داده (RAM)</p>
              <p>حافظه EEPROM</p>

              <b>ساختار پورت ها</b>
              <p>مفهوم پورت، ورودی و خروجی</p>
              <p>معرفی رجیسترهای مربوط به پورت ها</p>

              <b>کار با نرم افزار CodevisionAVR</b>
              <p>آشنایی اولیه با محیط نرم افزار</p>
              <p>ساخت پروژه، نوشتن برنامه و کامپایل کردن آن</p>
              <p>برنامه ریزی IC میکروکنترلر</p>

              <b>
                انجام چند پروژه نمونه و شبیه سازی در نرم افزار پروتئوس (Proteus)
              </b>
              <p>کار با پورت ها (کلید فشاری، LED و سون سگمنت)</p>
              <p>اتصال صفحه کلید ماتریسی</p>
              <p>اتصال LCD کاراکتری</p>
              <p>پروژه قفل رمزی دیجیتال</p>
              <p>پروژه راه اندازی استپر موتور (Stepper motor)</p>
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
