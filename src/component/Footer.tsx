import styled from "./Footer.module.css";
import { MdAccessTime } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { MdPhoneEnabled } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import enamad from "../logo.png";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={styled.Footer}>
        <div className={styled.FooterTop}>
          <div className={styled.TimeIcon}>
            <h3>
              <b>ساعت کاری پشتیبانی</b>
              <br />
              شنبه تا پنجشنبه 9 الی 18
            </h3>
            <div className={styled.Icon1}>
              <MdAccessTime />
            </div>
          </div>
          <div>
            <div className={styled.Email}>
              <h4>
                ایمیل <br />
                shahmohammadi64@gmail.com
              </h4>
              <div className={styled.EmailIcon}>
                <MdOutlineMail />
              </div>
            </div>
          </div>
          <div>
            <div className={styled.Contact}>
              <h4>
                <b>شماره تماس </b>
                <br />
                09128982040
              </h4>
              <div className={styled.PhoneIcon}>
                <MdPhoneEnabled />
              </div>
            </div>
          </div>
          <div>
            <div className={styled.Location}>
              <h4>
                <b>آدرس </b>
                <br />
                تهران - خ شیریعتی -<br /> خ موسیوند - پلاک 10{" "}
              </h4>
              <div className={styled.LocationIcon}>
                <MdLocationPin />
              </div>
            </div>
          </div>
        </div>
        <div className={styled.FooterInfo}>
          <div className={styled.FooterInfo1}>
            <p>مقالات آموزشی</p>
            <div>
              <div className={styled.Text1}>
                <p>
                  <MdKeyboardArrowLeft />
                  پارکینگ هوشمند
                </p>
                <p>
                  <MdKeyboardArrowLeft />
                  هوشمند سازی اتاق سرور
                </p>
                <p>
                  <MdKeyboardArrowLeft />
                  سیستم آبیاری هوشمند
                </p>
                <p>
                  <MdKeyboardArrowLeft />
                  سناریو خانه هوشمند
                </p>
              </div>
            </div>
          </div>

          <div className={styled.FooterInfo2}>
            <p>دسترسی سریع</p>
            <div>
              <div className={styled.Text2}>
                <p>
                  <MdKeyboardArrowLeft />
                  محصولات
                </p>
                <p>
                  <MdKeyboardArrowLeft />
                  دوره آموزشی
                </p>
                <p>
                  <MdKeyboardArrowLeft />
                  مقالات
                </p>
                <p>
                  <MdKeyboardArrowLeft />
                  درباره ما
                </p>
              </div>
            </div>
          </div>

          <div className={styled.FooterInfo3}>
            <p>خدمات مشتریان</p>
            <div>
              <div className={styled.Text3}>
                <p>
                  <MdKeyboardArrowLeft />
                  مشاوره تلفنی
                </p>
                <p>
                  <MdKeyboardArrowLeft />
                  ارسال سریع
                </p>
                <p>
                  <MdKeyboardArrowLeft />
                  ضمانت اصالت
                </p>
                <p>
                  <MdKeyboardArrowLeft />
                  ضمانت برگشت
                </p>
              </div>
            </div>
          </div>

          <div className={styled.FooterInfo4}>
            <p>درباره ما</p>
            <div>
              <div className={styled.Text4}>
                <p>
                  <MdKeyboardArrowLeft />{" "}
                  <p>
                    <b> : آدرس </b>
                    <br />
                    تهران - خ شیریعتی <br /> خ موسیوند - پلاک 10{" "}
                  </p>
                </p>
                <p>
                  <MdKeyboardArrowLeft />
                  <p>
                    <b> ساعت کاری پشتیبانی</b>
                    <br />
                    <br />
                    شنبه تا پنجشنبه 9 الی 18
                    <br />
                    <br />
                  </p>
                </p>
                <p>
                  <MdKeyboardArrowLeft />
                  <p>
                    ایمیل <br />
                    shahmohammadi64@gmail.com
                  </p>
                </p>
                <p>
                  <MdKeyboardArrowLeft />
                  <p>
                    <b>شماره تماس </b>
                    <br />
                    <br />
                    09128982040
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styled.FooterDetails}>
          <div>
            <p>
              <b>
                تجربه زندگی هوشمند <br />
              </b>
              بیش از یک دهه تجربه در حوزه هوشمندسازی ساختمان ما را بر آن داشت که
              شرکت آیوت" را به عنوان فروشگاه اینترنتی تجهیزات هوشمندسازی ساختمان
              در کشور عزیزمان ایران تاسیس کنیم. فروشگاه اینترنتی آیوتگ با هدف
              ایجاد یک وب سایت تخصصی و یکپارچه در زمینه تامین کالاهای هوشمند و
              ارائه خدمات فنی و مهندسی راه را برای هوشمندسازی هموار ساخته است و
              با ایجاد یک شبکه مرکزی از متخصصان، مهندسان و فعالان صنعت برق ضمن
              به حداقل رساندن هزینه های خدمات فنی و مهندسی در پروژه ها، اجرای بی
              نقص این سیستم ها را به مشتریان تضمین میکند. تامین تجهیزات از
              برترین برندهای جهانی، ثبت سفارش، امکان مقایسه و ارزیابی کالاها،
              مشاوره رایگان به مشتریان و آموزش هدفمند به مشتریان و فعالان این
              حوزه از مهم ترین برنامه های آیوتگ است
            </p>
          </div>
          <div className={styled.FooterDetailsPart2}>
            {/* <div className={styled.FooterInfo3}>
              <p>خدمات مشتریان</p>
              <div>
                <div className={styled.Text3}>
                  <p>
                    <MdKeyboardArrowLeft />
                    text2
                  </p>
                  <p>
                    <MdKeyboardArrowLeft />
                    text2
                  </p>
                  <p>
                    <MdKeyboardArrowLeft />
                    text2
                  </p>
                  <p>
                    <MdKeyboardArrowLeft />
                    text2
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          <div className={styled.Nemad}>
            <p>نمادها و مجوزها</p>
            {/* <img src={enamad} alt="enamad" /> */}
          </div>
        </div>
        <div className={styled.CopyRight}>
          <h3>کلیه حقوق این وب سایت متعلق به آیوتگ است </h3>
          <div className={styled.SocialMedia}>
            <Link to="">
              <FaTelegram />
            </Link>
            <Link to="">
              <FaWhatsapp />
            </Link>
            <Link to="">
              <FaInstagram />
            </Link>
            <Link to="">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
