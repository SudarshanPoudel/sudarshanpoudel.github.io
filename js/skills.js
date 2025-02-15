let allSkills = [
  {
    title: "Machine Learning & Deep Learning",
    icon: '<i class="fa-solid fa-robot"></i>',
    isActive: false,
    skills: [
      { name: "Classical ML", progress: 95 },
      { name: "Data Analysis", progress: 60 },
      { name: "Ensemble Learning", progress: 85 },
      { name: "Feature Engineering", progress: 75 },
      { name: "Neural Networks", progress: 90 },
      { name: "Image Processing & CNN", progress: 40 },
      { name: "RNN & LSTM", progress: 85 },
      { name: "Transformers", progress: 80 },
    ],
  },
  {
    title: "Natural Language Processing",
    icon: '<i class="fa-solid fa-language"></i>',
    isActive: false,
    skills: [
      { name: "Text Processing", progress: 90 },
      { name: "Document Parsing", progress: 90 },
      { name: "Lexical & Semantic Analysis", progress: 85 },
      { name: "Linguistic Feature Extraction", progress: 75 },
      { name: "Text Embeddings", progress: 80 },
      { name: "Semantic Search", progress: 85 },
      { name: "OCR", progress: 50 },
      { name: "Web Scraping", progress: 40 },
    ],
  },
  {
    title: "Generative AI, LLMs & Agents",
    icon: '<i class="fa-solid fa-brain"></i>',
    isActive: true,
    skills: [
      { name: "Prompt Engineering", progress: 95 },
      { name: "RAG", progress: 90 },
      { name: "Agent Automation", progress: 80 },
      { name: "LangChain", progress: 90 },
      { name: "LlamaIndex", progress: 80 },
      { name: "LangGraph", progress: 80 },
      { name: "Crew AI", progress: 70 },
      { name: "SmolAgents", progress: 90 },
    ],
  },
  {
    title: "Languages & Libraries",
    icon: '<i class="fa-solid fa-code"></i>',
    isActive: false,
    skills: [
      { name: "Python", progress: 95 },
      { name: "JavaScript", progress: 70 },
      { name: "Pandas, NumPy & Matplotlib", progress: 85 },
      { name: "FastAPI & Flask", progress: 75 },
      { name: "Scikit-learn", progress: 85 },
      { name: "NLTK", progress: 60 },
      { name: "PyTorch", progress: 40 },
      { name: "SQL", progress: 40 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: '<i class="fa-solid fa-tools"></i>',
    isActive: false,
    skills: [
      { name: "Git & GitHub", progress: 80 },
      { name: "Jupyter Notebook", progress: 90 },
      { name: "Docker", progress: 30 },
      { name: "Hugging Face", progress: 40 },
      { name: "Neo4j", progress: 35 },
      { name: "ElasticSearch", progress: 30 },
      { name: "Linux", progress: 35 },
      { name: "Ollama", progress: 30 },
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
