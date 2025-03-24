import profile_pic from "./me.jpg";
import avatar from "./avatar.jpg";
import Surveillance from "./Surveillance.png";
import ShiftHandover from "./ShiftHandover.png";
import Portfolio from "./Portfolio.png";
import Emotion from "./Emotion.png";
import DocGo from "./DocGo.png";
import HateSpeech from "./HateSpeech.png";
import LandingPage from "./LandingPage.png";

export const assets = {
  profile_pic,
  avatar,
  Surveillance,
  ShiftHandover,
  Portfolio,
  Emotion,
  DocGo,
  LandingPage,
  HateSpeech,
};

export const projectsData = [
  {
    id: 1,
    title: "Surveillance-System-Using-Yolov8s",
    description:
      "A Computer Vision-Based Surveillance System Utilizing the YOLOv8s Model",
    longDescription:
      "This intelligent parking system uses computer vision and deep learning to identify available parking spots in real-time. The solution implements YOLOv8 for object detection, paired with a user-friendly dashboard for parking management.",
    image: assets.Surveillance, // Replace with actual image path
    demoLink: "https://demo.smartparking.com",
    codeLink: "https://github.com/Vikram-353/Surveillance-System-Using-Yolov8s",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Python",
      "YOLOv8",
      "TensorFlow",
      "Flask",
    ],
    featured: true,
    category: "CV",
  },
  {
    id: 2,
    title: "Coal Mines Manager",
    description:
      "A shift handover system with real-time reports, safety checks, and employee tracking.",
    longDescription:
      "Developed for the mining industry, this comprehensive management system streamlines shift handovers, generates automated reports, conducts safety checks, and provides real-time employee tracking for enhanced operational efficiency and safety compliance.",
    image: assets.ShiftHandover, // Replace with actual image path
    // demoLink: "https://demo.coalminesmanager.com",
    codeLink: "https://github.com/Vikram-353/Code-Streak-SIH-2024/tree/main",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    featured: true,
    category: "Web App",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A 3D interactive portfolio showcasing my skills and projects.",
    longDescription:
      "This portfolio website features interactive 3D elements built with Three.js and React Three Fiber. It showcases my projects, skills, and experience in an engaging and visually appealing manner.",
    image: assets.Portfolio, // Replace with actual image path
    demoLink: "#",
    codeLink: "https://github.com/Vikram-353/My-Portfolio",
    technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    featured: false,
    category: "Web App",
  },
  {
    id: 4,
    title: "Emotion Detection",
    description:
      "A web application leveraging deep learning and computer vision to analyze facial expressions and detect mood and emotions.",
    longDescription:
      "A web application utilizing cv2 for image processing and Ultralytics YOLOv8 for real-time facial expression detection. It employs deep learning models to analyze emotions and mood from facial images. Gemenai enhances prediction accuracy, ensuring reliable emotion recognition.",
    image: assets.Emotion, // Replace with actual image path
    // demoLink: "https://demo.ai-image-generator.com",
    codeLink: "https://github.com/Vikram-353/Emotion-Detection",
    technologies: ["cv2", "Ultralytics", "Yolov8", "Gemenai"],
    featured: true,
    category: "CV",
  },
  {
    id: 5,
    title: "Doctor Management App",
    description:
      "A MERN-based doctor management web app for streamlined scheduling and patient management.",
    longDescription:
      "A **MERN-based Doctor Management Web App** enables seamless appointment scheduling and management. Built with **React, Node.js, Express, and MongoDB**, it supports three user roles: **Patients** can book appointments, **Doctors** can manage their schedules, and **Admins** oversee doctors. **JWT Authentication** ensures secure access, while **Cloudinary** handles image uploads. **Postman** is used for API testing and development.",
    image: assets.DocGo, // Replace with actual image path
    // demoLink: "https://demo.task-manager.com",
    codeLink: "https://github.com/Vikram-353/DocGo",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Postman",
      "Cloudinary",
      "JWT Authentication",
    ],
    featured: false,
    category: "Web App",
  },
  // {
  //   id: 6,
  //   title: "Simple-MERN-Stack-CRUD-Project",
  //   description: "A MERN based product management web app.",
  //   longDescription:
  //     "A MERN-based Product Management Web App is designed to streamline the process of adding, updating, organizing, and tracking products efficiently. Built using MongoDB, Express.js, React.js, and Node.js, this full-stack solution provides a user-friendly interface for managing product inventories, categories, and details. It ensures seamless communication between the front end and back end for real-time product management.",
  //   image: assets.profile_pic, // Replace with actual image path",
  //   //     demoLink: "https://demo.weather-dashboard.com",
  //   codeLink: "https://github.com/username/weather-dashboard",
  //   technologies: ["React", "Node.js", "MongoDB", "Express"],
  //   featured: false,
  //   category: "Web App",
  // },
  {
    id: 7,
    title: "Landing Page",
    description: "A React based landing page of software developer.",
    longDescription:
      "A React-based landing page for a software developer showcasing skills, projects, and contact details in a visually appealing layout. It features a modern, responsive design with smooth animations and interactive elements. Built using React, Tailwind CSS, and Framer Motion, it highlights the developer’s expertise, portfolio, and social links effectively. 🚀",
    //     demoLink: "https://demo.weather-dashboard.com",
    image: assets.LandingPage, // Replace with actual image path",

    codeLink: "https://github.com/Vikram-353/React-Landing-Page",
    technologies: ["React"],
    featured: false,
    category: "Web App",
  },
  {
    id: 8,
    title: "Hate Speech Detection",
    description: "Hate speech detection using machine learning classifiers.",
    longDescription:
      "This project focuses on Hate Speech Detection using a dataset from Kaggle. Various classification algorithms, including Decision Tree, Gaussian Naïve Bayes, K-Nearest Neighbors (KNN), and Support Vector Classifier (SVC), were implemented to identify hateful comments. After evaluation, SVC demonstrated the best predictive performance and accuracy. The model helps in automating content moderation and preventing the spread of hate speech.",
    //     demoLink: "https://demo.weather-dashboard.com",
    image: assets.HateSpeech, // Replace with actual image path",

    codeLink: "https://github.com/Vikram-353/Hate_Speech_Detection",
    technologies: [
      "Jupiter Notebook, Python, NLTK, Numpy, Pandas, Matplotlib, WordCloud",
    ],
    featured: false,
    category: "ML",
  },
];
