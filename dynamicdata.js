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
        name: "Regression",
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
    name: "Comments analyzer",
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
  },
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
    name: "Comments analyzer",
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
  },
];