"use client";
import EmbedPopup from "@/app/popup/EmbedPopup";
import ImageView from "@/app/popup/ImageView";
import Contact from "@/components/Contact";
import { petrixUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import Cursor from "./Cursor";
import Footer from "./Footer";
import Header from "./Header";
const PetrixLayout = ({ children, noContactForm }) => {
  useEffect(() => {
    petrixUtility.headingRevel();
    petrixUtility.imgToSVG();
    petrixUtility.buttonHover();
    petrixUtility.normalHover();
    petrixUtility.menuFix();
  }, []);
  return (
    <Fragment>
      <EmbedPopup />
      <ImageView />
      <Header />
      {children}
      {!noContactForm && <Contact />}
      <Footer />
      <Cursor />
    </Fragment>
  );
};
export default PetrixLayout;
