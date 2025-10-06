"use client";
import Link from "next/link";

export default function Header() {
  return (
    <div className="container" id="header">
      <header>
        <div className="hero-text">
          <h1>
            Hello! <br /> I'm Adi Julia
          </h1>
          <h2>
            A Web Developer Based in <br /> South Jakarta, Indonesia.
          </h2>
          <p>Every line of code tells a story.</p>
          <div className="hero-buttons">
            <Link href="/contact" className="btn">
              Say Hello
            </Link>
            <Link href="/resume" className="btn2">
              Resume & Experience
            </Link>
          </div>
        </div>
        <div className="hero-avatar">
          <img src="assets/img/profile/adi square3.jpg" alt="Profile" />
        </div>
      </header>
    </div>
  );
}