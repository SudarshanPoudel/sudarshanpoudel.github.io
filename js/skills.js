let allSkills = [
  {
    title: "LLMs & Applied AI",
    icon: '<i class="fa-solid fa-brain"></i>',
    isActive: true,
    skills: [
      { name: "Prompt Engineering", progress: 95 },
      { name: "RAG Pipelines", progress: 90 },
      { name: "Multi-Agent Systems", progress: 85 },
      { name: "LangChain & LangGraph", progress: 95 },
      { name: "LlamaIndex", progress: 85 },
      { name: "Local & Cloud LLMs", progress: 80 },
    ],
  },
  {
    title: "Natural Language Processing",
    icon: '<i class="fa-solid fa-language"></i>',
    isActive: false,
    skills: [
      { name: "Text Cleaning & Tokenization", progress: 90 },
      { name: "Embeddings & Semantic Search", progress: 85 },
      { name: "NER & Information Extraction", progress: 75 },
      { name: "Document Parsing & OCR", progress: 95 },
      { name: "Text Classification", progress: 75 },
      { name: "spaCy / NLTK / Hugging Face", progress: 60 },
    ],
  },
  {
    title: "Backend Engineering",
    icon: '<i class="fa-solid fa-server"></i>',
    isActive: false,
    skills: [
      { name: "FastAPI", progress: 95 },
      { name: "PostgreSQL + Alembic", progress: 90 },
      { name: "Redis", progress: 75 },
      { name: "Celery (Async Tasks)", progress: 70 },
      { name: "Docker & Docker Compose", progress: 60 },
      { name: "REST API Design", progress: 85 },
    ],
  },
  {
    title: "Programming & Data",
    icon: '<i class="fa-solid fa-code"></i>',
    isActive: false,
    skills: [
      { name: "Python", progress: 95 },
      { name: "Pandas & NumPy", progress: 85 },
      { name: "Matplotlib & Seaborn", progress: 65 },
      { name: "Typing & Pydantic", progress: 90 },
      { name: "Scikit-learn", progress: 75 },
      { name: "SQL", progress: 75 },
    ],
  },
  {
    title: "Dev Tools & Platforms",
    icon: '<i class="fa-solid fa-tools"></i>',
    isActive: false,
    skills: [
      { name: "Git & GitHub", progress: 85 },
      { name: "Linux (Ubuntu)", progress: 75 },
      { name: "Docker Images & Volumes", progress: 70 },
      { name: "Neo4j", progress: 70 },
      { name: "S3 File Storage", progress: 60 },
      { name: "ElasticSearch", progress: 50 },
    ],
  },
];

let skillsTypeBox = document.querySelector(".skills-type-box");
let skillDetailBox = document.querySelector(".skills-details-box");
let skillDetailText = document.querySelector(".skill-type-mobile")
displaySkills();
function displaySkills() {
  skillsTypeBox.innerHTML = "";
  allSkills.forEach((s) => {
    skillBtn = document.createElement("button");
    skillBtn.className = "skill-type-item";
    if (s.isActive) {
      skillBtn.classList.add("active-skill");
      skillDetailText.innerHTML = s.title;
      displaySkillDetails(s.skills);
    } else {
      skillBtn.addEventListener("click", () => {
        allSkills.forEach((s) => {
          s.isActive = false;
        });
        s.isActive = true;
        displaySkills();
      });
    }
    skillBtn.innerHTML = `
    ${s.icon} <span class='skill-type-title'>${s.title}</span>
    `;
    skillsTypeBox.appendChild(skillBtn);
  });
}

function displaySkillDetails(skills) {
  skillDetailBox.innerHTML = "";
  skills.forEach((s) => {
    box = document.createElement("div");
    box.className = "skills-detail-item";
    box.innerHTML = `
        <div class="skill-name">${s.name}</div>
        <div class="bar">
            <div class="skill-bar"  style="width:${s.progress}%;">
                <div class="progress">${s.progress}%</div>
            </div>
        </div>`;

    skillDetailBox.appendChild(box);
  });
  skillDetailBox.innerHTML += `<p class="skill-percentage-info">*Percentage represents my relative proficiency, not exact expertise.</p>`
}
