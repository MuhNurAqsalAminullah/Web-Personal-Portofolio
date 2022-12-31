import React from "react";
import { useTranslation } from "react-i18next";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";

const Home = () => {
  const { t, i18n } = useTranslation();

  function clickLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div>
      <Navbar t={t} clickLanguage={clickLanguage} />
      <MainContent t={t} />
    </div>
  );
};

export default Home;
