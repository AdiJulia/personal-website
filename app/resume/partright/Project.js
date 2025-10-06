export default function Project() {
  return (
    <div>
      {/* PROJECT 1 */}
      <div className="entry">
        <div className="date">06/2025 - 09/2025</div>
        <div>
          <h3 className="title">Klinik Utama RIA PILAR - Clinic Website</h3>
          <ul className="description">
            <li>
              Built a web-based clinic management system using PHP Laravel for
              Klinik Utama RIA Pilar Karawang, including patient registration,
              doctor scheduling, and appointment booking features.
            </li>
            <li>
              Designed and implemented a responsive UI to ensure an optimal user
              experience on both desktop and mobile devices.
            </li>
          </ul>
        </div>
      </div>
      {/* PROJECT 2 */}
      <div className="entry">
        <div className="date">10/2024 - 03/2025</div>
        <div>
          <h3 className="title">SentiLearn - Sentiment Analysis Website</h3>
          <ul className="description">
            <li>
              Design the user interface and backend web using HTML, CSS, and
              JavaScript, while building the server-side logic with Flask.
            </li>
            <li>
              Develop and deploy a machine learning using logistic regression
              model, to collect and preprocess text data to understand public
              sentiment.
            </li>
          </ul>
        </div>
      </div>
      {/* PROJECT 3 */}
      <div className="entry">
        <div className="date">10/2024 - 03/2025</div>
        <div>
          <h3 className="title">
            {" "}
            FrojenFuud - Enterprise Resource Planning (ERP) Website Project
          </h3>
          <ul className="description">
            <li>
              Built the web application with PHP Laravel framework. Laravel
              handled the server-side logic, managing user interactions and the
              entire data flow for the ERP system.
            </li>
            <li>
              Integrate core Enterprise Resource Planning (ERP) principles
              directly into the website. This involves incorporating various
              business functions such as inventory, finance, or human resources
              to streamline operations and centralize data management.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
