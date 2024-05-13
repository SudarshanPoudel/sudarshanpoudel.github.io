// Navbar Mobile
let menuBtn = document.querySelector(".menu-btn");
let menuBtnX = document.querySelector(".menu-btn-x");
let mobileNav = document.querySelector(".mobile-nav");
let blackBg = document.querySelector(".black-bg");
let menuItems = document.querySelectorAll(".menu-item");

menuBtn.addEventListener("click", () => {
  mobileNav.style.left = "0";
  blackBg.style.display = "block";
});

menuBtnX.addEventListener("click", () => {
  mobileNav.style.left = "-60vw";
  blackBg.style.display = "none";
});

blackBg.addEventListener("click", () => {
  mobileNav.style.left = "-60vw";
  blackBg.style.display = "none";
});
document.querySelector(".hire-btn-mob").addEventListener("click", () => {
  mobileNav.style.left = "-60vw";
  blackBg.style.display = "none";
});

menuItems.forEach((e) => {
  e.addEventListener("click", () => {
    mobileNav.style.left = "-60vw";
    blackBg.style.display = "none";
  });
});

// projects Scrolling
const wrapper = document.querySelector(".project-wrapper");
const carousel = document.querySelector(".projects-grid");
const firstCardWidth =
  parseInt(carousel.querySelector(".project-item").offsetWidth) + 16;
const arrowBtns = document.querySelectorAll(".project-wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false,
  startX,
  startScrollLeft;

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft +=
      btn.id == "left-scroll" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);


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

let projectGrid = document.querySelector(".projects-grid");

displayProjects();
function displayProjects() {
  projectGrid.innerHTML = "";
  allProjects.forEach((e) => {
    projectBox = document.createElement("div");
    projectBox.className = "project-item";
    projectBox.innerHTML = `
    <div class="project-image"><img src="Images/project/project-${e.id}.png" alt="${e.name}"></div>
    <div class="project-details">
        <h2>${e.name}</h2>
        <p>"${e.intro}"</p>
    </div>
    <div class="project-bg-blur"></div>
    <a href="project.html?id=${e.id}" class="project-view-more">View More</a>
    `;
    projectGrid.appendChild(projectBox);
  });
}
