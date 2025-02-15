let allExperiences = [
    {
        "title": "Inspiring Lab - AI/ML Intern",
        "date": "Nov 2024 - Feb 2025",
        "tasks": [
            "Developed a high-accuracy PDF parsing pipeline for Nepali and English documents using advanced parsing techniques and libraries.",
            "Implemented GraphRAG with Neo4j and Langchain’s GraphCypherQA for efficient graph-based data retrieval and question answering.",
            "Gained expertise in ElasticSearch and its Python API.",
            "Explored and implemented multi-agent frameworks like CrewAI, LangGraph, SmolAgents, and LlamaAgent, with a focus on architecture and agent interactions.",
            "Created a Data Analysis Agent to process user queries, execute Python code, and generate structured insights from datasets."
        ]
    },
    {
        "title": "Fusemachines - AI Fellowship",
        "date": "Apr 2024 - Oct 2024",
        "tasks": [
            "Completed a 6-month AI Fellowship, covering key areas including Machine Learning, Deep Learning, Computer Vision, NLP, Generative AI, and MLOps.",
            "Developed a study support system as a final project.",
            "Participated in weekly quizzes, assignments, and hands-on practical exercises to apply theoretical knowledge in real-world projects.",
            "Gained proficiency in core machine learning concepts, including regression, classification, clustering, ensemble learning, Neural Networks, GAN, etc."
        ]
    }
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