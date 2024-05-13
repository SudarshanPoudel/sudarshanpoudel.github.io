const urlParams = new URLSearchParams(window.location.search);
let id = parseInt(urlParams.get("id"));
if(!id) id = 1

let project = allProjects.find((obj) => obj.id == id);

document.querySelector(".heading").innerHTML = `Project ${project.id} : ${project.name}`;
document.querySelector(".project-img").innerHTML = `<img src="Images/project/project-${project.id}.png" alt="project" srcset="">`;
document.querySelector(".desc").innerHTML = `<p> ${project.desc} </p> <ol> Features : ${generateFeatures()}`;
document.querySelector(".languages").innerHTML = `${generatetechStack()}`;
document.querySelector(".links").innerHTML = `${generateLinks()}`;

function generateFeatures() {
  featureList = "";
  project.features.forEach((f) => {
    featureList += `<li>${f}</li>`;
  });
  return featureList;
}

function generatetechStack(){
    techStack = ''
    project.tech.forEach(t =>{
        techStack += `<div class="language">${t}</div>`
    })
    return techStack
}

function generateLinks(){
    links = ''
    project.links.forEach(l=>{
        links+=
        `<a href="${l.url}" target="_blank">
        ${l.logo} ${l.title}
        </a>`
    })
    return links
}
