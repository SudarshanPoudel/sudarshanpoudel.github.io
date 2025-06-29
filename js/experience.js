let allExperiences = [
    {
      title: "Fuleo Inc. – AI Engineer",
      date: "Feb 2025 – Present",
      tasks: [
        "Integrated AI-powered features into B2B software to streamline business workflows.",
        "Developed an intelligent document scanner that extracts form data from scanned images with high accuracy.",
        "Built a prompt-based data retrieval and visualization feature allowing business users to query and visualize internal data using natural language.",
        "Created a role-based access control system and customer portal with an integrated AI agent system for user assistance.",
        "Implemented an automated email system using Mailtrap and webhooks to notify customers and manage communications.",
        "Worked on a large-scale FastAPI project with PostgreSQL, Alembic, SQLAlchemy, Redis, and Docker; integrated LangGraph-based AI systems seamlessly."
      ],
    },
    {
      title: "Inspiring Lab – AI/ML Intern",
      date: "Nov 2024 – Feb 2025",
      tasks: [
        "Built a robust PDF parsing pipeline for Nepali and English documents using advanced parsing tools and OCR techniques.",
        "Implemented GraphRAG using Neo4j and LangChain’s GraphCypherQA for structured question answering over graph data.",
        "Worked with ElasticSearch and its Python SDK to build fast, flexible retrieval systems.",
        "Explored and experimented with multi-agent frameworks including CrewAI, LangGraph, SmolAgents, and LlamaAgent.",
        "Developed a Python-executing Data Analysis Agent capable of interpreting queries, processing datasets, and generating insights."
      ],
    },
    {
      title: "Fusemachines – AI Fellowship",
      date: "Apr 2024 – Oct 2024",
      tasks: [
        "Completed a 6-month intensive fellowship covering Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI, and MLOps.",
        "Built a study support system as a capstone project using NLP techniques and prompt-based querying.",
        "Engaged in weekly quizzes, assignments, and projects to apply theoretical concepts to real-world problems.",
        "Gained strong foundation in supervised learning, unsupervised learning, neural networks, transformers, GANs, and model evaluation techniques."
      ],
    },
  ];
  

const expTimeline = document.querySelector(".timeline")

expTimeline.innerHTML = ""
allExperiences.forEach(exp =>{
    let taskList = ""
    exp.tasks.forEach(task => {
        taskList += `<li>${task}</li>`
    });

    expTimeline.innerHTML += `
     <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-box">
            <h3>${exp.title}</h3>
            <p>${exp.date}</p>
            <ul>
               ${taskList}
            </ul>
        </div>
    </div>
    `
})