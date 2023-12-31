import React from "react";
import { useState } from "react";
import * as GiIcons from "react-icons/gi";
import * as VscIcons from "react-icons/vsc";

const Navbar = ({ t, clickLanguage }) => {
  const [burger, setBurger] = useState(false);
  const [fixScroll, setFixScroll] = useState(false);

  const burgerToggle = () => {
    setBurger(!burger);
  };

  const fixedScroll = () => {
    if (window.scrollY >= 20) {
      setFixScroll(true);
    } else {
      setFixScroll(false);
    }
  };

  window.addEventListener("scroll", fixedScroll);
  return (
    <div
      className={
        fixScroll
          ? "sm:bg-[#141C3D] fixed w-full z-20 md:h-fit md:bg-[#141C3D] md:duration-300 shadow-custome"
          : "fixed w-full z-10 md:duration-300"
      }
    >
      <div className="sm:flex sm:items-center sm:justify-between sm:px-5 sm:py-4 sm:text-white md:px-[50px] lg:[100px]">
        <div>
          <a href="#">
            <h3 className="sm:text-3xl sm:font-semibold lg:text-3xl tracking-widest">
              {t("Header.1")}
            </h3>
          </a>
        </div>

        <div
          className={
            burger
              ? "sm:bg-[#141C3D]/[.2] backdrop-blur-sm sm:absolute sm:right-0 sm:top-0 sm:w-[100%] sm:h-screen sm:flex sm:flex-col sm:justify-evenly sm:items-center sm:translate-x-0 sm:ease-in sm:duration-100"
              : "sm:bg-[#141C3D]/[.0] backdrop-blur-sm sm:absolute sm:right-0 sm:top-0 sm:w-[100%] sm:h-screen sm:flex sm:flex-col sm:justify-evenly sm:items-center sm:translate-x-full sm:ease-in sm:duration-100 md:translate-x-0 md:relative md:flex-row md:h-fit md:bg-transparent md:w-fit md:gap-10 lg:gap-20"
          }
        >
          <ul
            className={
              burger
                ? "sm:bg-[#141C3D] sm:absolute sm:right-0 sm:top-0 sm:w-[80%] sm:h-[70vh] sm:flex sm:flex-col sm:justify-evenly sm:items-center sm:translate-x-0 sm:ease-in sm:duration-300"
                : "sm:bg-[#141C3D] sm:absolute sm:right-0 sm:top-0 sm:w-[80%] sm:h-[70vh] sm:flex sm:flex-col sm:justify-evenly sm:items-center sm:translate-x-full sm:ease-in sm:duration-300 md:translate-x-0 md:relative md:flex-row md:h-fit md:bg-transparent md:w-fit md:gap-10 lg:gap-20"
            }
          >
            <li className="sm:border-b sm:border-white sm:py-2 sm:flex sm:items-center sm:gap-x-2 md:border-0 md:py-0 sm:text-sm lg:text-base">
              <VscIcons.VscTriangleRight color="#0EE6B7" />
              <a
                href="#about"
                className='font-["Inconsolata"] hover:text-[#0EE6B7]'
              >
                {t("About.1")}
              </a>
            </li>
            <li className="sm:border-b sm:border-white sm:py-2 sm:flex sm:items-center sm:gap-x-2 md:border-0 md:py-0 sm:text-sm lg:text-base">
              <VscIcons.VscTriangleRight color="#0EE6B7" />
              <a
                href="#project"
                className='font-["Inconsolata"] hover:text-[#0EE6B7]'
              >
                {t("Project.1")}
              </a>
            </li>
            <li className="sm:border-b sm:border-white sm:py-2 sm:flex sm:items-center sm:gap-x-2 md:border-0 md:py-0 sm:text-sm lg:text-base">
              <VscIcons.VscTriangleRight color="#0EE6B7" />
              <a
                href="#kontak"
                className='font-["Inconsolata"] hover:text-[#0EE6B7]'
              >
                {t("Contact.1")}
              </a>
            </li>
            <li className="sm:border-b sm:border-white sm:py-2 sm:flex sm:items-center sm:gap-x-2 md:border-0 md:py-0 sm:text-sm lg:text-base cursor-pointer">
              <VscIcons.VscTriangleRight color="#0EE6B7" />
              <p
                onClick={() => clickLanguage("en")}
                className='font-["Inconsolata"] hover:text-[#0EE6B7]'
              >
                EN
              </p>
              <span>/</span>
              <p
                onClick={() => clickLanguage("id")}
                className='font-["Inconsolata"] hover:text-[#0EE6B7]'
              >
                ID
              </p>
            </li>
          </ul>
        </div>
        {/* <li className="sm:border-b sm:border-white sm:py-2 sm:flex sm:items-center sm:gap-x-2 md:border-0 md:py-0 sm:text-xs md:text-sm lg:text-base">
            <VscIcons.VscTriangleRight color="#0EE6B7" />
            <p
              onClick={() => clickLanguage("id")}
              className='font-["Inconsolata"] hover:text-[#0EE6B7]'
            >
              ID
            </p>
          </li> */}

        <GiIcons.GiHamburgerMenu
          onClick={burgerToggle}
          size={30}
          className="z-10 md:hidden"
        />
      </div>
    </div>
  );
};

export default Navbar;
