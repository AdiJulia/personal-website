"use client";
import { useRouter } from "next/navigation";

import Link from "next/link";

export default function ButtonFloat() {
  const router = useRouter();

  const handleClick = () => {
    if (window.location.pathname === "/") {
      document.getElementById("header")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      router.push("/#header");
    }
  };

  return (
    <footer className="floating-footer">
      {/* <Link href="/resume">
        <i className="bi bi-house"></i>
      </Link> */}
      <button onClick={handleClick} className="icon-btn">
        <i className="bi bi-person-circle"></i>
      </button>
      <Link href="/resume">
        <i className="bi bi-file-earmark-text-fill"></i>
      </Link>
      {/* <Link href="/projects">
        <i className="bi bi-card-checklist"></i>
      </Link> */}
      <Link
        href="https://github.com/AdiJulia/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-github"></i>
      </Link>
      <Link
        href="https://www.linkedin.com/in/adijulias/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-linkedin"></i>
      </Link>
    </footer>
  );
}
