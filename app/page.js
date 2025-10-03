"use client";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import ButtonMode from "./components/ButtonMode";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Project2 from "./components/Project2";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ButtonFloat from "./components/ButtonFloat";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Navbar */}
      {/* <Navbar /> */}

      {/*Floating Button Dark Light Mode*/}
      {/* <ButtonMode /> */}

      {/* About Me */}
      <AboutMe />

      {/* Skills */}
      <Skills />

      {/* Project */}
      <Project2 />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />

      {/* ButtonFloat */}
      <ButtonFloat />
    </>
  );
}
