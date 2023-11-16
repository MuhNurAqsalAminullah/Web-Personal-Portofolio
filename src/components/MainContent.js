import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import * as VscIcons from "react-icons/vsc";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";

const MainContent = ({ t }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qe6fcma",
        "template_aurlpoa",
        form.current,
        "iePxYksHGILoE-9jD"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Successfully sent email");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <main className="sm:pt-24 md:pt-28">
      <div className="sm:px-5 sm:pb-28 md:px-[100px] lg:px-[200px]">
        <h5 className='sm:text-sm  sm:mb-5 md:text-base lg:text-lg text-[#0EE6B7] font-["Inconsolata"]'>
          {t("Hello.1")}
        </h5>
        <h1 className='sm:text-2xl sm:mb-5 md:text-4xl lg:text-6xl text-[#CED8FF] font-bold font-["Roboto Condensed"]'>
          Muh Nur Aqsal Aminullah
        </h1>
        <h1 className='sm:text-2xl sm:mb-5 md:text-4xl lg:text-6xl text-[#AEAEAE] font-bold font-["Roboto Condensed"]'>
          {t("Hello.2")}
        </h1>
        <p className="sm:text-xs sm:mb-5 md:text-sm lg:text-base md:w-[80%] lg:w-[50%] text-[#A8A8A8]">
          {t("Hello.3")}
        </p>
        <a
          href="CV Muh Nur Aqsal Aminullah.pdf"
          download={"CV Muh Nur Aqsal Aminullah.pdf"}
        >
          <button className="sm:text-xs sm:mt-5 sm:px-4 sm:py-2 md:text-sm lg:text-base rounded text-[#0EE6B7] border border-[#0EE6B7]">
            {t("Hello.4")}
          </button>
        </a>
      </div>

      <div
        id="about"
        className="sm:pt-24 sm:px-5 md:pt-32 md:px-[150px] lg:px-[250px] lg:pt-38 sm:pb-20"
      >
        <div className="sm:flex sm:items-center sm:gap-x-3">
          <VscIcons.VscTriangleRight size={30} color="#0EE6B7" />
          <h1 className="sm:text-xl md:text-2xl lg:text-3xl font-bold">
            {t("About.1")}
          </h1>
          <div className="border-t border-white sm:w-[100px]"></div>
        </div>
        <div className="sm:mt-5">
          <div className="lg:flex lg:flex-row-reverse lg:justify-between">
            <div className="sm:flex sm:justify-center lg:justify-end lg:w[30%]">
              <div className="sm:relative sm:mt-5 lg:mt-0 rounded-lg overflow-hidden">
                <img
                  src={require("../assets/image/profile.jpg")}
                  className="sm:w-[150px] lg:w-[300px]"
                  alt=""
                />
              </div>
            </div>
            <div className="sm:mt-5 lg:w-[70%] lg:mt-0 lg:pr-14">
              <p className="sm:text-xs md:text-sm lg:text-base text-[#A8A8A8]">
                {t("About.2")}
              </p>
              <br />
              <p className="sm:text-xs md:text-sm lg:text-base text-[#A8A8A8]">
                {t("About.3")}
              </p>
              <div className="sm:flex sm:gap-x-10 sm:mt-3">
                <ul>
                  <li className="flex items-center gap-x-3 mb-3">
                    <VscIcons.VscTriangleRight color="#0EE6B7" />
                    <a
                      href="https://www.w3schools.com/html/"
                      target={"_blank"}
                      className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'
                    >
                      Html
                    </a>
                  </li>
                  <li className="flex items-center gap-x-3 mb-3">
                    <VscIcons.VscTriangleRight color="#0EE6B7" />
                    <a
                      href="https://www.w3schools.com/css/"
                      target={"_blank"}
                      className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'
                    >
                      Css
                    </a>
                  </li>
                  <li className="flex items-center gap-x-3 mb-3">
                    <VscIcons.VscTriangleRight color="#0EE6B7" />
                    <a
                      href="https://www.w3schools.com/js/"
                      target={"_blank"}
                      className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'
                    >
                      JavaScript
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="flex items-center gap-x-3 mb-3">
                    <VscIcons.VscTriangleRight color="#0EE6B7" />
                    <a
                      href="https://reactjs.org/"
                      target={"_blank"}
                      className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'
                    >
                      ReactJs
                    </a>
                  </li>
                  <li className="flex items-center gap-x-3 mb-3">
                    <VscIcons.VscTriangleRight color="#0EE6B7" />
                    <a
                      href="https://tailwindcss.com/"
                      target={"_blank"}
                      className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'
                    >
                      Tailwindcss
                    </a>
                  </li>
                  <li className="flex items-center gap-x-3 mb-3">
                    <VscIcons.VscTriangleRight color="#0EE6B7" />
                    <a
                      href="https://getbootstrap.com/"
                      target={"_blank"}
                      className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'
                    >
                      Bootstrap
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="flex items-center gap-x-3 mb-3">
                    <VscIcons.VscTriangleRight color="#0EE6B7" />
                    <a
                      href="https://www.niagahoster.co.id/blog/api-adalah/"
                      target={"_blank"}
                      className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'
                    >
                      API
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="project"
        className="sm:pt-24 sm:px-5 md:pt-32 md:px-[100px] lg:px-[200px] lg:pt-38 sm:pb-20"
      >
        <div className="sm:flex sm:items-center sm:gap-x-3">
          <VscIcons.VscTriangleRight size={30} color="#0EE6B7" />
          <h1 className="sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#CED8FF]">
            {t("Project.1")}
          </h1>
          <div className="border-t border-white sm:w-[100px]"></div>
        </div>
        <div className="sm:mt-10">
          {/* Projek 1 */}
          <div className="lg:flex sm:mb-14 lg:mb-32">
            <div className="md:flex md:justify-center lg:justify-start lg:w-[60%]">
              <Swiper
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src={require("../assets/image/birich1.jpg")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../assets/image/birich2.jpg")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../assets/image/birich3.jpg")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../assets/image/birich4.jpg")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
              {/* <img
                src={require("../assets/image/projek1.jpg")}
                className="rounded"
                alt=""
              /> */}
            </div>
            <div className="sm:mt-2 lg:mt-0 lg:w-[40%] lg:flex lg:flex-col lg:justify-center lg:items-end z-10">
              <h5 className='sm:text-sm md:text-base lg:text-lg text-[#0EE6B7] font-["Inconsolata"]'>
                {t("Project.1_1")}
              </h5>
              <h4 className="sm:text-lg sm:mb-1 md:text-xl lg:text-2xl text-[#CED8FF] font-bold">
                Berich Premium
              </h4>
              <p className="sm:text-xs sm:mb-2 md:text-sm lg:text-base lg:bg-[#141C3D] lg:relative lg:w-[500px] lg:p-3 lg:rounded lg:shadow-lg lg:shadow-black text-[#A8A8A8]">
                {t("Project.1_2")}
              </p>
              <ul className="flex gap-x-3 sm:mb-2 lg:justify-end">
                <li className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'>
                  <a href="https://reactjs.org/" target={"_blank"}>
                    ReactJs
                  </a>
                </li>
                <li className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'>
                  <a href="https://tailwindcss.com/" target={"_blank"}>
                    Tailwind
                  </a>
                </li>
                <li className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'>
                  <a href="https://mui.com/core/" target={"_blank"}>
                    MUI/Core
                  </a>
                </li>
              </ul>
              <div className="sm:flex lg:hidden md:justify-end gap-x-3">
                {/* <VscIcons.VscGithub /> */}
                <a href="https://berichpremium.com/" target={"_blank"}>
                  {/* <FiIcons.FiExternalLink size={25} className='cursor-pointer hover:text-[#0EE6B7]' /> */}
                  <FiIcons.FiExternalLink />
                </a>
              </div>
              <div className="sm:hidden lg:flex md:justify-end gap-x-3">
                {/* <VscIcons.VscGithub size={25} className='cursor-pointer hover:text-[#0EE6B7]' /> */}
                <a href="https://berichpremium.com/" target={"_blank"}>
                  <FiIcons.FiExternalLink
                    size={25}
                    className="cursor-pointer hover:text-[#0EE6B7]"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Projek 2 */}
          <div className="lg:flex lg:flex-row-reverse sm:mb-14 lg:mb-32">
            <div className="md:flex md:justify-center lg:justify-end lg:w-[60%]">
              <Swiper
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src={require("../assets/image/zonaEnglish1.jpg")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../assets/image/zonaEnglish2.jpg")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../assets/image/zonaEnglish3.jpg")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../assets/image/zonaEnglish4.jpg")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="sm:mt-2 lg:mt-0 lg:w-[40%] lg:flex lg:flex-col lg:justify-center lg:items-start z-10">
              <h5 className='sm:text-sm md:text-base lg:text-lg text-[#0EE6B7] font-["Inconsolata"]'>
                {t("Project.2_1")}
              </h5>
              <h4 className="sm:text-lg sm:mb-1 md:text-xl lg:text-2xl text-[#CED8FF] font-bold">
                Zona English
              </h4>
              <p className="sm:text-xs sm:mb-2 md:text-sm lg:text-base lg:bg-[#141C3D] lg:relative lg:w-[500px] lg:p-3 lg:rounded lg:shadow-lg lg:shadow-black text-[#A8A8A8]">
                {t("Project.2_2")}
              </p>
              <ul className="flex gap-x-3 sm:mb-2 lg:justify-end">
                <li className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'>
                  <a href="href='https://reactjs.org/" target={"_blank"}>
                    ReactJs
                  </a>
                </li>
                <li className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'>
                  <a href="https://www.w3schools.com/css/" target={"_blank"}>
                    Css
                  </a>
                </li>
              </ul>
              <div className="sm:flex lg:hidden md:justify-end gap-x-3">
                <a
                  href="https://github.com/MuhNurAqsalAminullah/ZonaEnglish"
                  target={"_blank"}
                >
                  {/* <VscIcons.VscGithub size={25} className='cursor-pointer hover:text-[#0EE6B7]' /> */}
                  <VscIcons.VscGithub />
                </a>
                <a href="https://www.zonaenglish.id/" target={"_blank"}>
                  <FiIcons.FiExternalLink />
                  {/* <FiIcons.FiExternalLink size={25} className='cursor-pointer hover:text-[#0EE6B7]' /> */}
                </a>
              </div>
              <div className="sm:hidden lg:flex md:justify-end gap-x-3">
                <a
                  href="https://github.com/MuhNurAqsalAminullah/ZonaEnglish"
                  target={"_blank"}
                >
                  <VscIcons.VscGithub
                    size={25}
                    className="cursor-pointer hover:text-[#0EE6B7]"
                  />
                </a>
                <a href="https://www.zonaenglish.id/" target={"_blank"}>
                  <FiIcons.FiExternalLink
                    size={25}
                    className="cursor-pointer hover:text-[#0EE6B7]"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Projek 3 */}
          <div className="lg:flex sm:mb-14 lg:mb-32">
            <div className="md:flex md:justify-center lg:justify-start lg:w-[60%]">
              <Swiper
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src={require("../assets/image/notes1.jpg")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../assets/image/notes2.jpg")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../assets/image/notes3.jpg")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="sm:mt-2 lg:mt-0 lg:w-[40%] lg:flex lg:flex-col lg:justify-center lg:items-end z-10">
              <h5 className='sm:text-sm md:text-base lg:text-lg text-[#0EE6B7] font-["Inconsolata"]'>
                {t("Project.3_1")}
              </h5>
              <h4 className="sm:text-lg sm:mb-1 md:text-xl lg:text-2xl text-[#CED8FF] font-bold">
                Notes App CRUD Integrate API
              </h4>
              <p className="sm:text-xs sm:mb-2 md:text-sm lg:text-base lg:bg-[#141C3D] lg:relative lg:w-[500px] lg:p-3 lg:rounded lg:shadow-lg lg:shadow-black text-[#A8A8A8]">
                {t("Project.3_2")}
              </p>
              <ul className="flex gap-x-3 sm:mb-2 lg:justify-end">
                <li className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'>
                  <a href="https://reactjs.org/" target={"_blank"}>
                    ReactJs
                  </a>
                </li>
                <li className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'>
                  <a href="https://redux-toolkit.js.org/" target={"_blank"}>
                    Redux Toolkit
                  </a>
                </li>
                <li className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'>
                  <a
                    href="https://www.dewaweb.com/blog/apa-itu-crud/"
                    target={"_blank"}
                  >
                    CRUD
                  </a>
                </li>
                <li className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'>
                  <a
                    href="https://www.niagahoster.co.id/blog/api-adalah/"
                    target={"_blank"}
                  >
                    API
                  </a>
                </li>
              </ul>
              <div className="sm:flex lg:hidden md:justify-end gap-x-3">
                <a
                  href="https://github.com/MuhNurAqsalAminullah/app-notes"
                  target={"_blank"}
                >
                  {/* <VscIcons.VscGithub size={25} className='cursor-pointer hover:text-[#0EE6B7]' /> */}
                  <VscIcons.VscGithub />
                </a>
                <a
                  href="https://notes-app-steel-alpha.vercel.app/"
                  target={"_blank"}
                >
                  <FiIcons.FiExternalLink
                    className="cursor-pointer hover:text-[#0EE6B7]"
                  />
                </a>
                {/* <FiIcons.FiExternalLink /> */}
              </div>
              <div className="sm:hidden lg:flex md:justify-end gap-x-3">
                <a
                  href="https://github.com/MuhNurAqsalAminullah/app-notes"
                  target={"_blank"}
                >
                  <VscIcons.VscGithub
                    size={25}
                    className="cursor-pointer hover:text-[#0EE6B7]"
                  />
                </a>
                <a
                  href="https://notes-app-steel-alpha.vercel.app/"
                  target={"_blank"}
                >
                  <FiIcons.FiExternalLink
                    size={25}
                    className="cursor-pointer hover:text-[#0EE6B7]"
                  />
                </a>
                {/* <FiIcons.FiExternalLink size={25} className='cursor-pointer hover:text-[#0EE6B7]' /> */}
              </div>
            </div>
          </div>

          {/* Projek 4 */}
          <div className="lg:flex lg:flex-row-reverse sm:mb-14 lg:mb-32">
            <div className="md:flex md:justify-center lg:justify-end lg:w-[60%]">
              <Swiper
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src={require("../assets/image/dash1.jpg")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../assets/image/dash2.jpg")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../assets/image/dash3.jpg")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="sm:mt-2 lg:mt-0 lg:w-[40%] lg:flex lg:flex-col lg:justify-center lg:items-start z-10">
              <h5 className='sm:text-sm md:text-base lg:text-lg text-[#0EE6B7] font-["Inconsolata"]'>
                {t("Project.4_1")}
              </h5>
              <h4 className="sm:text-lg sm:mb-1 md:text-xl lg:text-2xl text-[#CED8FF] font-bold">
                Warehousing Dashboard
              </h4>
              <p className="sm:text-xs sm:mb-2 md:text-sm lg:text-base lg:bg-[#141C3D] lg:relative lg:w-[500px] lg:p-3 lg:rounded lg:shadow-lg lg:shadow-black text-[#A8A8A8]">
                {t("Project.4_2")}
              </p>
              <ul className="flex gap-x-3 sm:mb-2 lg:justify-end">
                <li className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'>
                  <a href="href='https://reactjs.org/" target={"_blank"}>
                    ReactJs
                  </a>
                </li>
                <li className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'>
                  <a href="https://redux-toolkit.js.org/" target={"_blank"}>
                    Redux Toolkit
                  </a>
                </li>
                <li className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'>
                  <a href="https://tailwindcss.com/" target={"_blank"}>
                    Tailwind
                  </a>
                </li>
              </ul>
              <div className="sm:flex lg:hidden md:justify-end gap-x-3">
                <a
                  href="https://github.com/MuhNurAqsalAminullah/Warehousing-Dashboard"
                  target={"_blank"}
                >
                  {/* <VscIcons.VscGithub size={25} className='cursor-pointer hover:text-[#0EE6B7]' /> */}
                  <VscIcons.VscGithub />
                </a>
              </div>
              <div className="sm:hidden lg:flex md:justify-end gap-x-3">
                <a
                  href="https://github.com/MuhNurAqsalAminullah/Warehousing-Dashboard"
                  target={"_blank"}
                  className="flex gap-x-1 cursor-pointer hover:text-[#0EE6B7]"
                >
                  [
                  <p>
                    FE
                  </p>
                  <VscIcons.VscGithub
                    size={25}
                  />
                  ]
                </a>
                <a
                  href="https://github.com/MuhNurAqsalAminullah/Backend-Warehousing-Dashboard"
                  target={"_blank"}
                  className="flex gap-x-1 cursor-pointer hover:text-[#0EE6B7]"
                >
                  [
                  <p>
                    BE
                  </p>
                  <VscIcons.VscGithub
                    size={25}
                  />
                  ]
                </a>
              </div>
            </div>
          </div>

          {/* Projek 5 */}
          <div className="lg:flex sm:mb-14 lg:mb-32">
            <div className="md:flex md:justify-center lg:justify-start lg:w-[60%]">
              <Swiper
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src={require("../assets/image/dicoding1.jpg")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../assets/image/dicoding2.jpg")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="sm:mt-2 lg:mt-0 lg:w-[40%] lg:flex lg:flex-col lg:justify-center lg:items-end z-10">
              <h5 className='sm:text-sm md:text-base lg:text-lg text-[#0EE6B7] font-["Inconsolata"]'>
                {t("Project.5_1")}
              </h5>
              <h4 className="sm:text-lg sm:mb-1 md:text-xl lg:text-2xl lg:text-end text-[#CED8FF] font-bold">
                Final Submission Dicoding Frontend Expert
              </h4>
              <p className="sm:text-xs sm:mb-2 md:text-sm lg:text-base lg:bg-[#141C3D] lg:relative lg:w-[500px] lg:p-3 lg:rounded lg:shadow-lg lg:shadow-black text-[#A8A8A8]">
                {t("Project.5_2")}
              </p>
              <ul className="flex gap-x-3 sm:mb-2 lg:justify-end">
                <li className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'>
                  <a href="https://www.javascript.com/" target={"_blank"}>
                    Javascript
                  </a>
                </li>
                <li className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'>
                  <a href="https://www.w3schools.com/css/" target={"_blank"}>
                    Css
                  </a>
                </li>
                <li className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'>
                  <a href="https://webpack.js.org/" target={"_blank"}>
                    Webpack
                  </a>
                </li>
                <li className='sm:text-xs md:text-sm lg:text-base text-[#A8A8A8] font-["Inconsolata"] hover:text-[#0EE6B7]'>
                  <a
                    href="https://www.niagahoster.co.id/blog/api-adalah/"
                    target={"_blank"}
                  >
                    API
                  </a>
                </li>
              </ul>
              <div className="sm:flex lg:hidden md:justify-end gap-x-3">
                <a
                  href="https://github.com/MuhNurAqsalAminullah/Submission-Dicoding-Menjadi-Front-End-Web-Developer-Expert"
                  target={"_blank"}
                >
                  {/* <VscIcons.VscGithub size={25} className='cursor-pointer hover:text-[#0EE6B7]' /> */}
                  <VscIcons.VscGithub />
                </a>
                <a
                  href="https://restonyam.netlify.app/"
                  target={"_blank"}
                >
                  <FiIcons.FiExternalLink
                    className="cursor-pointer hover:text-[#0EE6B7]"
                  />
                </a>
                {/* <FiIcons.FiExternalLink /> */}
              </div>
              <div className="sm:hidden lg:flex md:justify-end gap-x-3">
                <a
                  href="https://github.com/MuhNurAqsalAminullah/Submission-Dicoding-Menjadi-Front-End-Web-Developer-Expert"
                  target={"_blank"}
                >
                  <VscIcons.VscGithub
                    size={25}
                    className="cursor-pointer hover:text-[#0EE6B7]"
                  />
                </a>
                <a
                  href="https://restonyam.netlify.app/"
                  target={"_blank"}
                >
                  <FiIcons.FiExternalLink
                    size={25}
                    className="cursor-pointer hover:text-[#0EE6B7]"
                  />
                </a>
                {/* <FiIcons.FiExternalLink size={25} className='cursor-pointer hover:text-[#0EE6B7]' /> */}
              </div>
            </div>
          </div>
        </div>

        {/* Button list all projek in github */}
        <div className="flex flex-col items-center mt-20">
          <button className="border border-[#0EE6B7] rounded px-8 py-2 mb-3 hover:bg-[#0EE6B7] hover:text-[#131A35]">
            <a href="https://github.com/MuhNurAqsalAminullah" target={"_blank"}>
              {t("Project.4")}
            </a>
          </button>
          <div className="flex items-center gap-x-2 text-[#A8A8A8]">
            <p className="text-center">{t("Project.5")} </p>
            <VscIcons.VscGithub
              size={25}
              className="cursor-pointer hover:text-[#0EE6B7]"
            />
          </div>
        </div>
      </div>

      <div
        id="kontak"
        className="sm:pt-24 sm:px-5 md:pt-32 md:px-[100px] lg:px-[200px] lg:pt-38 sm:pb-20 "
      >
        <div className="sm:flex sm:items-center sm:gap-x-3">
          <VscIcons.VscTriangleRight size={30} color="#0EE6B7" />
          <h1 className="sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#CED8FF]">
            {t("Contact.1")}
          </h1>
          <div className="border-t border-white sm:w-[100px]"></div>
        </div>
        <div className="mt-10">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <p className="sm:text-xs sm:mb-5 md:text-sm lg:text-base lg:pr-3 text-[#A8A8A8]">
                {t("Contact.2")} <br />
                <br /> {t("Contact.3")}
              </p>
              <p className="sm:text-xs sm:mb-2 md:text-sm lg:text-base lg:pr-3 text-[#0EE6B7]">
                Gmail : muhnuraqsalaminullah@gmail.com
              </p>
              <div className="flex gap-x-3">
                {/* <div className='border-2 border-white rounded-3xl flex justify-center items-center shadow-lg shadow-black sm:w-[30px] sm:h-[30px]'>
                                    <img src={require('../assets/icons/linkedin.svg').default} className='sm:w-[15px] sm:w-[15px]' alt="" />
                                </div>
                                <div className='border-2 border-white rounded-3xl flex justify-center items-center shadow-lg shadow-black sm:w-[30px] sm:h-[30px]'>
                                    <img src={require('../assets/icons/instagram.svg').default} alt="" />
                                </div> */}
                <a href="https://t.me/MuhAqsal04" target={"_blank"}>
                  <div className="border-2 border-white rounded-3xl flex justify-center items-center shadow-lg shadow-black sm:w-[30px] sm:h-[30px]">
                    <img
                      src={require("../assets/icons/telegram.svg").default}
                      alt=""
                    />
                  </div>
                </a>
                <a href="https://wa.me/6281914753612" target={"_blank"}>
                  <div className="border-2 border-white rounded-3xl flex justify-center items-center shadow-lg shadow-black sm:w-[30px] sm:h-[30px]">
                    <img
                      src={require("../assets/icons/whatsapp.svg").default}
                      alt=""
                    />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/muh_aqsal04/"
                  target={"_blank"}
                >
                  <div className="border-2 border-white rounded-3xl flex justify-center items-center shadow-lg shadow-black sm:w-[30px] sm:h-[30px]">
                    {/* <img src={require('../assets/icons/whatsapp.svg').default} alt="" /> */}
                    <AiIcons.AiFillInstagram color="white" />
                  </div>
                </a>
              </div>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col sm:mt-10 lg:w-1/2 lg:mt-0"
            >
              <input
                name="to_name"
                type="text"
                placeholder={t("Contact.4")}
                className="sm:text-xs sm:mb-2 md:text-sm lg:text-base rounded pl-2 py-2 bg-black/[.3] outline-none"
              />
              <input
                name="reply_to"
                type="text"
                placeholder={t("Contact.5")}
                className="sm:text-xs sm:mb-2 md:text-sm lg:text-base rounded pl-2 py-2 bg-black/[.3] outline-none"
              />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder={t("Contact.6")}
                className="sm:text-xs md:text-sm lg:text-base bg-black/[.3] outline-none pl-2 py-3"
              ></textarea>
              <div className="flex justify-end">
                <button
                  type="submit"
                  value="Send"
                  className="sm:text-xs sm:mt-5 sm:px-10 sm:py-2 md:text-sm lg:text-base rounded text-[#0EE6B7] border border-[#0EE6B7]"
                >
                  {t("Contact.7")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white sm:mx-5 md:mx-[100px] lg:mx-[150px] py-1">
        <p className="sm:text-xs md:text-sm lg:text-base text-center">
          {t("Footer.1")}{" "}
          <span className="text-[#0EE6B7]">Muh Nur Aqsal Aminullah </span>
          {t("Footer.2")} <span className="text-[#0EE6B7]">Reactjs</span>{" "}
          {t("Footer.3")} <span className="text-[#0EE6B7]">Tailwindcss</span>
        </p>
      </div>
    </main>
  );
};

export default MainContent;
