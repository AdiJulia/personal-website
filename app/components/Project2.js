export default function Project2() {
  return (
    <section className="projects">
      <div className="container-project">
        <h2>Some Cool Stuff I Made</h2>
        <div className="projects-grid">
          {/* project 1 */}
          <div className="project-card">
            <img
              src="assets/img/project/klinik.png"
              alt="Project 1"
              className="project-image"
            />
            <div className="project-overlay">
              <div className="overlay-text">
                <h3>
                  Klinik Utama RiA PiLAR is a healthcare application built using
                  the PHP Laravel framework. My first freelance project working
                  directly with a client.
                </h3>
              </div>

              <div className="overlay-tools">
                <img src="assets/img/skills/bootstrap.png" alt="PHP" />
                <img src="assets/img/skills/php.png" alt="PHP" />
                <img src="assets/img/skills/laravel.png" alt="Laravel" />
                <img src="assets/img/skills/mysql.png" alt="MySQL" />
              </div>

              <a
                href="https://klinikutamariapilar.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-project"
              >
                Visit Project
              </a>
            </div>
          </div>
          {/* project 2 */}
          <div className="project-card">
            <img
              src="assets/img/project/sentilearn.png"
              alt="Project 1"
              className="project-image"
            />
            <div className="project-overlay">
              <div className="overlay-text">
                <h3>
                  SentiLearn is a web-based sentiment analysis app that helps
                  analyze public perceptions of the development of "Ibu Kota
                  Nusantara", Indonesia’s new capital city.
                </h3>
              </div>

              <div className="overlay-tools">
                <img src="assets/img/skills/python.png" alt="PHP" />
                <img src="assets/img/skills/bootstrap.png" alt="Laravel" />
                <img src="assets/img/skills/flask.png" alt="PHP" />
                <img src="assets/img/skills/mysql.png" alt="MySQL" />
              </div>

              <a
                href="https://github.com/AdiJulia/SentiLearn.git"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-project"
              >
                Visit Project
              </a>
            </div>
          </div>
          {/* project 3 */}
          <div className="project-card">
            <img
              src="assets/img/project/erp.png"
              alt="Project 1"
              className="project-image"
            />
            <div className="project-overlay">
              <div className="overlay-text">
                <h3>
                  A final project website for the Enterprise Resource Planning
                  (ERP) course, designed to integrate and manage diverse
                  business processes effectively.
                </h3>
              </div>

              <div className="overlay-tools">
                <img src="assets/img/skills/bootstrap.png" alt="PHP" />
                <img src="assets/img/skills/php.png" alt="PHP" />
                <img src="assets/img/skills/laravel.png" alt="Laravel" />
                <img src="assets/img/skills/mysql.png" alt="MySQL" />
              </div>

              <a
                href="https://github.com/AdiJulia/ERP-Tugas-Akhir.git"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-project"
              >
                Visit Project
              </a>
            </div>
          </div>
          {/* project 4 */}
          <div className="project-card">
            <img
              src="assets/img/project/si.png"
              alt="Project 1"
              className="project-image"
            />
            <div className="project-overlay">
              <div className="overlay-text">
                <h3>
                  My first college project, a warehouse information system
                  website for furniture management, including employee
                  management, product data, and more.
                </h3>
              </div>

              <div className="overlay-tools">
                <img src="assets/img/skills/bootstrap.png" alt="PHP" />
                <img src="assets/img/skills/php.png" alt="PHP" />
                <img src="assets/img/skills/laravel.png" alt="Laravel" />
                <img src="assets/img/skills/mysql.png" alt="MySQL" />
              </div>

              <a
                href="https://github.com/AdiJulia/Sistem-Informasi---SCM2---Pergudangan-Furniture-Public.git"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-project"
              >
                Visit Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
