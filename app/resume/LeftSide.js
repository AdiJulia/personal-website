export default function LeftSide() {
  return (
    <aside className="left-column">
      <div className="avatar">
        <img
          src="assets/img/profile/adi square4.jpg"
          alt="Adi Julia"
          className="profile-img"
        />
      </div>
      <h1>Adi Julia Saputra</h1>
      <p>
        Hi, I'm Adi Julia, an Informatics Engineering graduate passionate about
        creating websites and digital solutions. This is where I share my
        projects and journey in tech.
      </p>

      <ul className="contact-info">
        <li>
          <i className="bi bi-geo-alt-fill"></i> South Jakarta
        </li>
        <li>
          <i className="bi bi-envelope-fill" ></i> adijulias@proton.me
        </li>
        <li>
          <i className="bi bi-telephone-fill"></i> (+62)857-9119-3190
        </li>
      </ul>

      <a
        href="assets/cv/CV Adi Julia.pdf"
        // download="CV Adi Julia.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-download"
        id="downloadBtn"
      >
        Download CV
      </a>
    </aside>
  );
}
