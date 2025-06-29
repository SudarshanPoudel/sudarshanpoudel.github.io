let allProjects = [
    {
      id: 1,
      name: "Agentic RAG Library",
      tags: ["Python", "RAG", "Library", "Agentic"],
      image: "agenticrag1.png",
      description: "Python library designed to simplify building Retrieval-Augmented Generation (RAG) applications with agentic workflows.",
      url: "https://github.com/SudarshanPoudel/agenticrag.git",
    },
    {
        id: 2,
        name: "Nepali Trip Planner",
        tags: ["RAG", "FastAPI", "Redis", "Neo4j", "LangChain", "Multi-Agent", "Ongoing"],
        image: "trip_planner.png",
        description: "A prompt-driven multi-agent system for creating personalized trip plans. Uses FastAPI, Redis, Neo4j, and LangChain to dynamically generate detailed itineraries based on user preferences and budget.",
        url: "https://github.com/SudarshanPoudel/Holiday_Nepal_Backend.git",
    },      
    {
      id: 3,
      name: "Data Analysis Agent",
      tags: ["Agent", "LangGraph", "Automation"],
      image: "data_analysis_agent.png",
      description: "Agentic system capable of answering user queries, generating plots and analysis reports from datasets.",
      url: "https://github.com/SudarshanPoudel/Data_analysis_agent.git",
    },
    {
      id: 4,
      name: "Study Support",
      tags: ["RAG", "LLM", "Chroma"],
      image: "study_support.png",
      description: "RAG system that allows users to upload their study PDFs and ask questions, generate self-test quizzes, flashcards, and summaries.",
      url: "https://github.com/SudarshanPoudel/Study_Support.git",
    },
    {
      id: 5,
      name: "Pdf Parsing Pipeline",
      tags: ["Parsing", "OCR", "Docling"],
      image: "pdf_parsing.png",
      description: "High accuracy PDF to Markdown conversion pipeline capable of parsing all types of PDFs by combining OCR and metadata extraction.",
      url: "https://github.com/SudarshanPoudel/PDF_Parsing_Pipeline.git",
    },
    {
      id: 6,
      name: "Movie Recommendation System",
      tags: ["NLP", "Embeddings", "NLTK"],
      image: "movie_recommand.png",
      description: "Simple and fast movie recommendation system that suggests movies based on content similarity.",
      url: "https://github.com/SudarshanPoudel/Movie_recommandation.git",
    },
  ];
  
  

const projectGrid = document.querySelector(".projects-grid")
projectGrid.innerHTML = ""

const imagesFolder = "Images/project/"

allProjects.forEach(project => {
    let tags = ""
    project.tags.forEach(e => {
        tags += `<span class='tag'>${e}</span>`
    });

    projectGrid.innerHTML += `
     <div class="project-item">
        <div class="project-image">
            <img src="${imagesFolder + project.image}" alt="Project-${project.id} image">
        </div>
        <div class="project-tags">${tags}</div>
        <div class="project-bg-blur"></div>
        <div class="project-details">
            <h2>${project.name}</h2>
            <p>${project.description}</p>
        </div>
        <a href="${project.url}" class="project-view-more">View Details</a>
    </div>
    `
});