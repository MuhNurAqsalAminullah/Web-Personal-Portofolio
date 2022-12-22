import React from "react";
import * as VscIcons from "react-icons/vsc";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";

const MainContent = () => {
  return (
    <main className="sm:pt-24 md:pt-28">
      <div className="sm:px-5 sm:pb-28 md:px-[100px] lg:px-[200px]">
        <h5 className='sm:text-sm  sm:mb-5 md:text-base lg:text-lg text-[#0EE6B7] font-["Inconsolata"]'>
          Halo, perkenalkan nama saya
        </h5>
        <h1 className='sm:text-2xl sm:mb-5 md:text-4xl lg:text-6xl text-[#CED8FF] font-bold font-["Roboto Condensed"]'>
          Muh Nur Aqsal Aminullah
        </h1>
        <h1 className='sm:text-2xl sm:mb-5 md:text-4xl lg:text-6xl text-[#AEAEAE] font-bold font-["Roboto Condensed"]'>
          Saya seorang frontend developer.
        </h1>
        <p className="sm:text-xs sm:mb-5 md:text-sm lg:text-base md:w-[80%] lg:w-[50%] text-[#A8A8A8]">
          Saya adalah seorang web programmer yang mengfokuskan sebuah keahlian
          dibidang frontend developer terutama dalam hal pembuatan tampilan user
          interface sebuah website. Oleh karena itu saya menyukai
          mengimplementasikan sebuah desain web UI agar menjadi sebuah website.
        </p>
        <a
          href="CV Muh Nur Aqsal Aminullah.pdf"
          download={"CV Muh Nur Aqsal Aminullah.pdf"}
        >
          <button className="sm:text-xs sm:mt-5 sm:px-4 sm:py-2 md:text-sm lg:text-base rounded text-[#0EE6B7] border border-[#0EE6B7]">
            Lihat cv saya
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
            Tentang saya
          </h1>
          <div className="border-t border-white sm:w-[100px]"></div>
        </div>
        <div className="sm:mt-5">
          <div className="lg:flex lg:flex-row-reverse lg:justify-between">
            <div className="sm:flex sm:justify-center lg:justify-end lg:w[30%]">
              <div className="sm:relative sm:mt-5 lg:mt-0">
                <img
                  src={require("../assets/image/aqsalini.jpg")}
                  className="sm:w-[150px] lg:w-[300px]"
                  alt=""
                />
              </div>
            </div>
            <div className="sm:mt-5 lg:w-[70%] lg:mt-0 lg:pr-14">
              <p className="sm:text-xs md:text-sm lg:text-base text-[#A8A8A8]">
                Halo!, perkenalkan nama saya Muh Nur Aqsal Aminullah, S.Kom,
                seorang lulusan program studi Informatika dari Universitas
                Muhammadiyah Makassar pada tahun 2022. Saya seorang yang pekerja
                keras, disiplin serta selalu fokus dalam melakukan sebuah
                pekerjaan dan juga mampu bekerja dalam sebuah tim.
              </p>
              <br />
              <p className="sm:text-xs md:text-sm lg:text-base text-[#A8A8A8]">
                Berikut ini adalah teknologi - teknologi yang saya gunakan untuk
                melakukan pekerjaan saya sebagai frontend developer untuk
                membangun sebuah website:
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
            Project
          </h1>
          <div className="border-t border-white sm:w-[100px]"></div>
        </div>
        <div className="sm:mt-10">
          <div className="lg:flex sm:mb-14 lg:mb-32">
            <div className="md:flex md:justify-center lg:justify-start lg:w-[60%]">
              <img
                src={require("../assets/image/projek1.jpg")}
                className="rounded"
                alt=""
              />
            </div>
            <div className="sm:mt-2 lg:mt-0 lg:w-[40%] lg:flex lg:flex-col lg:justify-center lg:items-end">
              <h5 className='sm:text-sm md:text-base lg:text-lg text-[#0EE6B7] font-["Inconsolata"]'>
                Build web app
              </h5>
              <h4 className="sm:text-lg sm:mb-1 md:text-xl lg:text-2xl text-[#CED8FF] font-bold">
                Berich Premium
              </h4>
              <p className="sm:text-xs sm:mb-2 md:text-sm lg:text-base lg:bg-[#141C3D] lg:relative lg:w-[500px] lg:p-3 lg:rounded lg:shadow-lg lg:shadow-black text-[#A8A8A8]">
                Berich Premium adalah sebuah web aplikasi yang berjenis MLM
                (Multi Level Marketing) yang di mana adalah sebuah aplikasi yang
                dapat membantu sebuah bisnis untuk mengatasi komplesitas
                pemasaran multi level dalam waktu singkat. Pembuatan web
                aplikasi Berich Premium yang saya kerjakan pada sisi frontendnya
                menggunakan ReactJs, Tailwindcss dalam pembuatanya dan sedikit
                menggunkanan Material UI Core untuk beberapa component
                didalamnya.
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
                    src={require("../assets/image/zonaEnglish1.png")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../assets/image/zonaEnglish2.png")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../assets/image/zonaEnglish3.png")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../assets/image/zonaEnglish4.png")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="sm:mt-2 lg:mt-0 lg:w-[40%] lg:flex lg:flex-col lg:justify-center lg:items-start z-10">
              <h5 className='sm:text-sm md:text-base lg:text-lg text-[#0EE6B7] font-["Inconsolata"]'>
                Build web landing page
              </h5>
              <h4 className="sm:text-lg sm:mb-1 md:text-xl lg:text-2xl text-[#CED8FF] font-bold">
                Zona English
              </h4>
              <p className="sm:text-xs sm:mb-2 md:text-sm lg:text-base lg:bg-[#141C3D] lg:relative lg:w-[500px] lg:p-3 lg:rounded lg:shadow-lg lg:shadow-black text-[#A8A8A8]">
                ZonaEnglish adalah sebuah web landing page yang bertemakan
                pendidikan dengan memberikan sebuah informasikan sebuah aplikasi
                untuk kursus belajar berbahasa inggris dengan mengenalkan
                fitur-fitur yang tersedia pada aplikasi tersebut beberapa
                informasi lainya. Pembuatan Web Landing page yang saya kerjakan
                pada sisi frontend-nya menggunakan ReactJs dan hanya menggunakan
                Css biasa tanpa menggunakan framework Css.
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

          <div className="lg:flex">
            <div className="md:flex md:justify-center lg:justify-start lg:w-[60%]">
              <Swiper
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src={require("../assets/image/login page.png")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../assets/image/position list.png")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../assets/image/employees list.png")}
                    className="rounded"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="sm:mt-2 lg:mt-0 lg:w-[40%] lg:flex lg:flex-col lg:justify-center lg:items-end z-10">
              <h5 className='sm:text-sm md:text-base lg:text-lg text-[#0EE6B7] font-["Inconsolata"]'>
                Build web app
              </h5>
              <h4 className="sm:text-lg sm:mb-1 md:text-xl lg:text-2xl text-[#CED8FF] font-bold">
                Frontend CRUD Integrate API
              </h4>
              <p className="sm:text-xs sm:mb-2 md:text-sm lg:text-base lg:bg-[#141C3D] lg:relative lg:w-[500px] lg:p-3 lg:rounded lg:shadow-lg lg:shadow-black text-[#A8A8A8]">
                Membuat sebuah Website yang dapat melakukan Create, Read,
                Update, dan Delete pada data yang telah ditentukan dengan
                mengintegrasikan sebuah API dan dapat melakukan login untuk
                dapat mengakses data yang ada didalamnya dengan menggunakan
                sistem Token API Autentikasi. Pada Website ini saya menggunkan
                React dan juga Tailwindcss dalam pembuatannya.
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
                  href="https://github.com/MuhNurAqsalAminullah/crud-todolist"
                  target={"_blank"}
                >
                  {/* <VscIcons.VscGithub size={25} className='cursor-pointer hover:text-[#0EE6B7]' /> */}
                  <VscIcons.VscGithub />
                </a>
                {/* <FiIcons.FiExternalLink /> */}
              </div>
              <div className="sm:hidden lg:flex md:justify-end gap-x-3">
                <a
                  href="https://github.com/MuhNurAqsalAminullah/crud-todolist"
                  target={"_blank"}
                >
                  <VscIcons.VscGithub
                    size={25}
                    className="cursor-pointer hover:text-[#0EE6B7]"
                  />
                </a>
                {/* <FiIcons.FiExternalLink size={25} className='cursor-pointer hover:text-[#0EE6B7]' /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-20">
          <button className="border border-[#0EE6B7] rounded px-8 py-2 mb-3 hover:bg-[#0EE6B7] hover:text-[#131A35]">
            <a href="https://github.com/MuhNurAqsalAminullah" target={"_blank"}>
              View all
            </a>
          </button>
          <div className="flex items-center gap-x-2 text-[#A8A8A8]">
            <p className="text-center">
              Lihat semua portofolio saya yang terdapat pada Github{" "}
            </p>
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
            Kontak
          </h1>
          <div className="border-t border-white sm:w-[100px]"></div>
        </div>
        <div className="mt-10">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <p className="sm:text-xs sm:mb-5 md:text-sm lg:text-base lg:pr-3 text-[#A8A8A8]">
                Saya aktif di beberapa media sosial untuk berkomunikasi, jika
                anda memiliki sebuah keperluan atau ingin menyapa. <br />
                <br /> Anda bisa menghubungi media sosial atau form yang telah
                disediakan.
              </p>
              <p className="sm:text-xs sm:mb-2 md:text-sm lg:text-base lg:pr-3 text-[#A8A8A8]">
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
            <div className="flex flex-col sm:mt-10 lg:w-1/2 lg:mt-0">
              <input
                disabled
                type="text"
                placeholder="Name"
                className="sm:text-xs sm:mb-2 md:text-sm lg:text-base rounded pl-2 py-2 bg-black/[.3] outline-none"
              />
              <input
                disabled
                type="text"
                placeholder="Enter Email"
                className="sm:text-xs sm:mb-2 md:text-sm lg:text-base rounded pl-2 py-2 bg-black/[.3] outline-none"
              />
              <textarea
                disabled
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Pesan anda"
                className="sm:text-xs md:text-sm lg:text-base bg-black/[.3] outline-none pl-2 py-3"
              ></textarea>
              <div className="flex justify-end">
                <button className="sm:text-xs sm:mt-5 sm:px-10 sm:py-2 md:text-sm lg:text-base rounded text-[#0EE6B7] border border-[#0EE6B7]">
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white sm:mx-5 md:mx-[100px] lg:mx-[150px] py-1">
        <p className="sm:text-xs md:text-sm lg:text-base text-center">
          Dibuat oleh{" "}
          <span className="text-[#0EE6B7]">Muh Nur Aqsal Aminullah</span>,
          menggunkan <span className="text-[#0EE6B7]">Reactjs</span> dan{" "}
          <span className="text-[#0EE6B7]">Tailwindcss</span>
        </p>
      </div>
    </main>
  );
};

export default MainContent;
