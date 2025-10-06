"use client";
import "bootstrap-icons/font/bootstrap-icons.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import ButtonMode from "../components/ButtonMode";
import Footer from "../components/Footer";
import ButtonFloat from "../components/ButtonFloat";

export default function Resume() {
  return (
    <div>
      <div className="cv-container">
        <ButtonMode />

        <LeftSide />

        <RightSide />

        <ButtonFloat />
      </div>
      <Footer />
    </div>
  );
}
