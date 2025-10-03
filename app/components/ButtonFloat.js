"use client";

import Link from "next/link";

export default function ButtonFloat() {
  const scrollToHeader = () => {
    document.getElementById("header")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="floating-footer">
      <button onClick={scrollToHeader} className="icon-btn">
        <i className="bi bi-person-circle"></i>
      </button>
      <Link href="/resume">
        <i className="bi bi-file-earmark-text-fill"></i>
      </Link>
      <Link href="/projects">
        <i className="bi bi-card-checklist"></i>
      </Link>
      <Link href="https://github.com/AdiJulia/">
        <i className="bi bi-github"></i>
      </Link>
      <Link href="https://www.linkedin.com/in/adijulias/">
        <i className="bi bi-linkedin"></i>
      </Link>
    </footer>
  );
}
