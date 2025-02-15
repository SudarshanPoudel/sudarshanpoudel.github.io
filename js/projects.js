let allProjects = [
    {
        "id": 1,
        "name": "Data Analysis Agent",
        "tags": ["Agent", "LangGraph", "Automation"],
        "image": "data_analysis_agent.png",
        "description": "Agentic system capable of answering user queries, generating plots and analysis report of provided dataset.",
        "url": "https://github.com/SudarshanPoudel/Data_analysis_agent.git"
    },
    {
        "id": 2,
        "name": "Pdf Parsing Pipeline",
        "tags": ["Parsing", "Ocr", "Docling"],
        "image": "pdf_parsing.png",
        "description": "High accuracy PDF to Markdown conversion pipeline capable of parsing all types of pdfs by combing both OCR and metadata parsing.",
        "url": "https://github.com/SudarshanPoudel/PDF_Parsing_Pipeline.git"
    },
    {
        "id": 3,
        "name": "Nepali Trip Planner",
        "tags": ["RAG", "FastAPI", "Langchain"],
        "image": "trip_planner.png",
        "description": "A trip planner RAG system focused on Nepal, allowing users to create detailed trip plans based on preference and budget.",
        "url": "https://github.com/SudarshanPoudel/SmartYatra.git"
    },
    {
        "id": 4,
        "name": "Study Support",
        "tags": ["RAG", "LLM", "Chroma"],
        "image": "study_support.png",
        "description": "RAG system that allows users to upload their study pdfs and ask questions, generate self test quiz, flashcards and summaries.",
        "url": "https://github.com/SudarshanPoudel/Study_Support.git"
    },
    {
        "id": 5,
        "name": "Movie Recommendation System",
        "tags": ["NLP", "Embeddings", "NLTK"],
        "image": "movie_recommand.png",
        "description": "Simple and fast movie recommendation system that suggests movies based on content similarity",
        "url": "https://github.com/SudarshanPoudel/Movie_recommandation.git"
    },
    {
        "id": 6,
        "name": "Movie Website",
        "tags": ["Frontend", "JavaScript", "API"],
        "image": "screenscore.png",
        "description": "Website that aggregates and displays detailed information about movies using TMDB API",
        "url": "https://github.com/SudarshanPoudel/ScreenScore.git"
    }
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