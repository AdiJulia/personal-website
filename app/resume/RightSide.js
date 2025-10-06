import Project from "./partright/Project";
import Experience from "./partright/Experience";
import Certif from "./partright/Certif";

export default function RightSide() {
  return (
    <main className="right-column">
      <section className="cv-section" id="education">
        <h2>Education</h2>
        <div className="entry">
          <div className="date">08/2021 - 04/2025</div>
          <div>
            <h3 className="title">Bachelor of Informatics Engineering</h3>
            <p className="subtitle">
              National Institute of Technology Malang <br></br> Malang, East
              Java • GPA : 3.63/4.00
            </p>
          </div>
        </div>
      </section>

      <section className="cv-section" id="project">
        <h2>Project</h2>
        <Project />
      </section>

      <section className="cv-section" id="experience">
        <h2>Experience</h2>
        <Experience />
      </section>

      <section className="cv-section" id="certifications">
        <h2>Certifications</h2>
        <Certif />
      </section>
    </main>
  );
}
