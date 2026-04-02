const projects = [
  {
    title: "Train Delay Prediction Using Machine Learning",
    description: "Built a machine learning based system to predict train delays using historical and real-time railway data. Improved prediction accuracy through data preprocessing, feature selection, and XGBoost modeling, then evaluated results with RMSE, MAE, and R<sup>2</sup> metrics. Published in the International Conference on Innovative Computing and Communication (ICICC).",
    repoUrl: "https://github.com/spoorthika/train_delay_prediction_using_xgboost-",
    paperUrl: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5765482"
  },
  {
    title: "Handwritten Digit Recognition Using CNN",
    description: "Developed a handwritten digit recognition system using Convolutional Neural Networks on the MNIST dataset. Improved classification accuracy through training optimization, image preprocessing, and result evaluation.",
    repoUrl: "https://github.com/spoorthika/handwritten-digit-recognition-using-cnn"
  },
  {
    title: "BMI Calculator Using Web Development",
    description: "Built a responsive BMI Calculator using HTML, CSS, and JavaScript for real-time health metrics, with a user-friendly interface and cross-device compatibility.",
    repoUrl: "https://github.com/spoorthika/bmi_calculator"
  },
  {
    title: "Professional Portfolio Website",
    description: "Designed and developed a professional portfolio website to present my background, skills, projects, resume, and contact details with a clean responsive interface and structured layout.",
    repoUrl: "https://github.com/spoorthika/Portfolio"
  }
];

const projectsGrid = document.getElementById("projects-grid");

projects.forEach((project) => {
  const card = document.createElement("article");
  card.className = "project-card";

  const paperButton = project.paperUrl
    ? `<a class="repo-link repo-link-paper" href="${project.paperUrl}" target="_blank" rel="noopener noreferrer">Research Paper</a>`
    : "";

  card.innerHTML = `
    <div class="project-top">
      <div>
        <h4>${project.title}</h4>
        <p>${project.description}</p>
      </div>
    </div>
    <div class="project-actions">
      <a class="repo-link" href="${project.repoUrl}" target="_blank" rel="noopener noreferrer">Code</a>
      ${paperButton}
    </div>
  `;

  projectsGrid.appendChild(card);
});
