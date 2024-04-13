// Skills

let allSkills = [
  {
    title: "AI/ML",
    icon: '<i class="fa-solid fa-robot"></i>',
    isActive: true,
    skills: [
      {
        name: "Python",
        progress: 60,
      },
      {
        name: "Numpy",
        progress: 70,
      },
      {
        name: "Pandas",
        progress: 70,
      },
      {
        name: "Matplotlib",
        progress: 40,
      },
      {
        name: "Seaborn",
        progress: 50,
      },
      {
        name: "Flask",
        progress: 30,
      },
    ],
  },
  {
    title: "Web Development",
    icon: '<i class="fa-solid fa-code"></i>',
    isActive: false,
    skills: [
      {
        name: "HTML",
        progress: 90,
      },
      {
        name: "CSS",
        progress: 80,
      },
      {
        name: "JavaScript",
        progress: 70,
      },
      {
        name: "PHP",
        progress: 40,
      },
      {
        name: "UI/UX",
        progress: 30,
      },
      {
        name: "Tailwind/Bootstrap",
        progress: 50,
      },
    ],
  },
  {
    title: "Mathematics",
    icon: '<i class="fa-solid fa-chart-simple"></i>',
    isActive: false,
    skills: [
      {
        name: "Linear Algebra",
        progress: 70,
      },
      {
        name: "Calculus",
        progress: 60,
      },
      {
        name: "Regression and Classification",
        progress: 80,
      },
      {
        name: "Probability",
        progress: 70,
      },
      {
        name: "Data Visualization",
        progress: 50,
      },
      {
        name: "Hypothesis Testing",
        progress: 50,
      },
    ],
  },
  {
    title: "Other Skills",
    icon: '<i class="fa-solid fa-bars"></i>',
    isActive: false,
    skills: [
      {
        name: "Problem Solving",
        progress: 60,
      },
      {
        name: "DSA",
        progress: 70,
      },
      {
        name: "SQL",
        progress: 50,
      },
      {
        name: "React Native",
        progress: 30,
      },
      {
        name: "C/C++",
        progress: 30,
      },
      {
        name: "Unity/C#",
        progress: 40,
      },
    ],
  },
];

// Display Skills
let skillsTypeBox = document.querySelector(".skills-type-box");
let skillDetailBox = document.querySelector(".skills-details-box");

displaySkills();
function displaySkills() {
  skillsTypeBox.innerHTML = "";

  allSkills.forEach((s) => {
    skillBtn = document.createElement("button");
    skillBtn.className = "skill-type-item";
    if (s.isActive) {
      skillBtn.classList.add("active-skill");
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

    skillBtn.innerHTML = s.icon + s.title;
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
}
