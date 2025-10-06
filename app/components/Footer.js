import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container-project footer-content">
        <p>© 2025 AdiJuliaS</p>
        <div className="footer-links">
          <a
            href="mailto:adijulias@proton.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-envelope-at"></i>
          </a>
          <a
            href="https://medium.com/@adijulias"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-medium"></i>
          </a>
          <a
            href="https://www.instagram.com/adijulia_s/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/adijulias/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/AdiJulia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
