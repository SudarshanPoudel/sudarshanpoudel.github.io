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
        name: "Pandas",
        progress: 70,
      },
      {
        name: "Matplotlib",
        progress: 60,
      },
      {
        name: "Scikit learn",
        progress: 70,
      },
      {
        name: "Pytorch",
        progress: 20,
      },
      {
        name: "NLTK",
        progress: 30,
      },
    ],
  },
  {
    title: "Web",
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

let allProjects = [
  {
    id: 1,
    name: "Screen Score",
    intro: "Complete Frontend Movie Website",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    desc: "Screenscore is a sleek, responsive frontend project designed for movie enthusiasts. It utilizes the TMDB API to fetch real-time movie data, offering users a feature-rich platform to explore and manage their favorite films.",
    features: [
      "Optimized for all devices with a focus on great UI/UX.",
      "Always updated with the latest movies and data from TMDB.",
      "Easily search for movies by name and use filters like genre, ratings, and release date to find the perfect movie.",
      "Add movies to a personalized favorites list for quick access.",
      "Sort movie reviews by time or up votes to see what's most relevant.",
      "Get suggestions based on ratings, popularity, and new releases.",
      "Choose from multiple themes to personalize the browsing experience.",
    ],
    links: [
      {
        title: "View Code",
        logo: '<i class="fa-brands fa-github"></i>',
        url: "https://github.com/SudarshanPoudel/ScreenScore",
      },
      {
        title: "Live Demo",
        logo: '<i class="fa-solid fa-laptop"></i>',
        url: "https://sudarshanpoudel.github.io/ScreenScore/Html/homepage.html",
      },
    ],
  },
  {
    id: 2,
    name: "CineMatch",
    intro: "Movie recommendation system",
    tech: ["Python", "NLTK", "Sklearn", "Streamlit"],
    desc:"This project harnesses a content-based recommendation algorithm to suggest the top movies similar to any selected film, utilizing detailed metadata including descriptions, genres, and actors from a dataset of 10,000 movies sourced from TMDB.",
    features : [
      'Content-based filtering techniques to recommend movies based on similarities in descriptions, genres, actors, and release years.',
      'Integrates a dataset of 10,000 movies sourced from The Movie Database (TMDB) to gather comprehensive information for accurate recommendations.',
      'The system generates a curated list of the top most similar movies to a user-selected film, ensuring a focused and relevant suggestion list.',
      'It features a user-friendly interface created with Streamlit, enhancing user experience and making movie exploration intuitive and enjoyable.'
  ],
  
    links: [
      {
        title: "View Code",
        logo: '<i class="fa-brands fa-github"></i>',
        url: "https://github.com/SudarshanPoudel/ScreenScore",
      },
      {
        title: "Live Demo",
        logo: '<i class="fa-solid fa-laptop"></i>',
        url: "https://sudarshanpoudel-movie-recommandation-app-6yxcrw.streamlit.app/",
      },
    ],
  },
  {
    id: 3,
    name: "AskAlign",
    intro: "Duplicate question detection",
    tech: ["Python", "Sklearn", "Nltk", "Streamlit"],
    desc: `This is a duplicate question detection tool trained on the Quora Duplicate Question Pair dataset,
    achieving over 80% accuracy. Leveraging a RandomForest classifier, the tool swiftly identifies duplicate 
    questions, streamlining content moderation and enhancing user experience on Q&A platforms`,
    features : [
      "Interactive user interface for easy input and output handling",
      "Real-time duplicate question detection with high accuracy",
      "Ability to process large datasets efficiently for comprehensive analysis",
      "Hosted online for seamless accessibility and collaboration"
    ],
    links: [
      {
        title: "View Code",
        logo: '<i class="fa-brands fa-github"></i>',
        url: "https://github.com/SudarshanPoudel/Duplicate_question_detection",
      },
      {
        title: "Live Demo",
        logo: '<i class="fa-solid fa-laptop"></i>',
        url: "https://sudarshanpoudel-duplicate-question-detection-app-i6yghp.streamlit.app/",
      },
    ],
  },
  {
    id: 4,
    name: "CommentViz",
    intro: "Youtube comments analysis Tool",
    tech: ["Python", "Pandas", "Matplotlib", "Streamlit"],
    desc: `
    Comments analyzer is a data visualization project designed for youtubers or general audience
    who wants to extract and visualize incites of comment section from any youtube video.
    It utilizes the google API to fetch real-time data and perform data preprocessing and visualization
    with clean UI created using streamlit`,

    features: [
      "Fetch all youtube comments using google API",
      "Display nordcloud for whole comment section",
      "Display top 20 most repeated words",
      "Display timeline of comment section",
    ],
    links: [
      {
        title: "View Code",
        logo: '<i class="fa-brands fa-github"></i>',
        url: "https://github.com/SudarshanPoudel/YT_Comments_Analysis/",
      },
      {
        title: "Live Demo",
        logo: '<i class="fa-solid fa-laptop"></i>',
        url: "https://sudarshanpoudel-yt-comments-analysis-streamlitappapp-whf95s.streamlit.app/",
      },
    ],
  }
];