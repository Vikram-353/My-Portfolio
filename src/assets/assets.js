import profile_pic from "./me.jpg";
import avatar from "./avatar.jpg";
import Surveillance from "./Surveillance.png";
import ShiftHandover from "./ShiftHandover.png";
import Portfolio from "./Portfolio.png";
import Emotion from "./Emotion.png";
import DocGo from "./DocGo.png";
import HateSpeech from "./HateSpeech.png";
import LandingPage from "./LandingPage.png";
import Code4Cause from "./Code4Cause.png";
import DTU from "./DTU.png";
import GFGMeetUp from "./GFGMeetUp.png";
import ICDMA from "./ICDMA.png";
import IotProject from "./IotProject.jpg";
import MAITRunnerUp from "./MAITRunnerUp.jpg";
import PosterPresentation from "./PosterPresentation.jpg";
import UDEMY from "./UDEMY.jpg";
import Patent from "./Patent.pdf";
import HumanActivity from "./HumanActivity.png";
import SIH from "./SIH.jpg";
import JIMS from "./JIMS.jpg";
import logo from "./logo.svg";
import app from "./app.png";
import resume from "./Vikram Ranjan Resume.pdf";
import CDAC from "./CDAC.png";
import rag_app from "./rag-app.png";
import straemspeak from "./streamspeak.png";
import CSI from "./CSI.jpg";

export const assets = {
  Patent,
  profile_pic,
  avatar,
  Surveillance,
  ShiftHandover,
  Portfolio,
  Emotion,
  DocGo,
  logo,
  LandingPage,
  HateSpeech,
  Code4Cause,
  GFGMeetUp,
  DTU,
  ICDMA,
  IotProject,
  MAITRunnerUp,
  PosterPresentation,
  UDEMY,
  HumanActivity,
  SIH,
  JIMS,
  app,
  resume,
  rag_app,
  straemspeak,
  CSI,
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
    featured: false,
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
    featured: false,
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
  // {
  //   id: 4,
  //   title: "StreamSpeak",
  //   description: "Text and Vedio Chat Application ",
  //   longDescription:
  //     "Built a full-featured real-time chat application using the MERN stack. The platform supports both text and video communication, friend requests, and secure login through JWT authentication.    image: assets.Emotion, // Replace with actual image path",
  //   //     // demoLink: "https://demo.ai-image-generator.com",
  //   codeLink: "https://github.com/Vikram-353/StreamSpeak",
  //   image: assets.Portfolio, // Replace with actual image path

  //   technologies: ["MERN", "Zustand", "ReactQuery", "Stream"],
  //   featured: true,
  //   category: "Web App",
  // },
  {
    id: 5,
    title: "Doctor Management App",
    description:
      "A MERN-based doctor management web app for streamlined scheduling and patient management.",
    longDescription:
      "A MERN-based Doctor Management Web App enables seamless appointment scheduling and management. Built with React, Node.js, Express, and MongoDB, it supports three user roles: Patients can book appointments, Doctors can manage their schedules, and Admins oversee doctors. JWT Authentication ensures secure access, while Cloudinary handles image uploads. Postman is used for API testing and development.",
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
    featured: true,
    category: "Web App",
  },
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
    image: assets.HateSpeech,

    codeLink: "https://github.com/Vikram-353/Hate_Speech_Detection",
    technologies: [
      "Jupiter Notebook, Python, NLTK, Numpy, Pandas, Matplotlib, WordCloud",
    ],
    featured: false,
    category: "ML",
  },
  {
    id: 9,
    title: "Task Manager",
    description: "Task manager app using flutter, django",
    longDescription:
      "A task management app built with Flutter and Django, offering CRUD operations, user authentication with SimpleJWT, task filtering, and local notifications for overdue tasks.",
    image: assets.app,

    codeLink: "https://github.com/Vikram-353/Task-Manager/",
    technologies: [
      "Flutter",
      "Django",
      "MySQL",
      "SimpleJWT",
      "Local Notifications",
    ],
    featured: false,
    category: "Android App",
  },
  {
    id: 10,
    title: "StreamSpeak",
    description: "Social app with chat & feed",
    longDescription:
      "A full-featured social media web app enabling users to create and share text, image, and video posts. Users can like, comment, send/accept friend requests, and receive real-time notifications. The app also supports real-time chat and video calling between friends for seamless communication.",
    image: assets.straemspeak,

    codeLink: "https://github.com/Vikram-353/StreamSpeak",
    technologies: [
      "MERN",
      "React Query",
      "Zustand",
      "JWT (jsonwebtoken)",
      "GetStream.io",
    ],
    featured: true,
    category: "Web App",
  },
  {
    id: 11,
    title: "RAG-APP",
    description: "Chat with Your Documents (Gemini + Qdrant)",
    longDescription:
      "This is a Streamlit-based RAG (Retrieval-Augmented Generation) application that allows users to upload documents (.pdf, .docx, .txt) and interact with them through a chatbot powered by Google Gemini and LangChain. It leverages Qdrant for semantic vector search and HuggingFace embeddings to enable intelligent document understanding.",
    image: assets.rag_app,

    codeLink: "https://github.com/Vikram-353/RAG-APP",
    technologies: [
      "Streamlit",
      "LangChain ",
      "Qdrant",
      "HuggingFace Transformers",
      "Google Generative AI (Gemini)",
      "Python",
    ],
    featured: true,
    category: "GenAI",
  },
];

export const galleryItems = [
  {
    id: 1,
    src: UDEMY,
    alt: "ML Course",
    category: "Course",
    date: "March 2024",
    description: "Completed Machine Learning Course From Udemy. ",
    location: "UDEMY",
  },
  {
    id: 2,
    src: GFGMeetUp,
    alt: "Geeks For Geeks Office",
    category: "MeetUp",
    date: "March 2024",
    description: "Student Meetup at Geek For Geek Office Noida.",
    issuer: "HackWithIndia",
  },
  {
    id: 3,
    src: MAITRunnerUp,
    alt: "TechFest",
    category: "hackathon",
    date: "April 2024",
    description: "Secured 2nd Price at MAIT TechFest in Frontend Competition.",
    location: "MAIT",
  },
  {
    id: 4,
    src: DTU,
    alt: "DTU Hackathon",
    category: "certificate",
    date: "April 2024",
    description:
      "Successfully advanced through two rounds of Hackathon Vihaan007.",
    issuer: "Vihaan007",
  },
  {
    id: 5,
    src: HumanActivity,
    alt: "IC-AMSI 2024",
    category: "certificate",
    date: "July 2024",
    description:
      "Poster Presentation of Research paper on YOLOv8 Powered Security System in Conference at VIPS-TC.",
    issuer: "IC-AMSI",
  },
  {
    id: 6,
    src: ICDMA,
    alt: "ICDMA",
    category: "certificate",
    date: "June 2024",
    description:
      "Presented a research paper at the International Conference on Innovative Computing & Communication (ICICC) 2024.",
    issuer: "ICDMA",
  },
  {
    id: 7,
    src: IotProject,
    alt: "IotProject",
    category: "presentation",
    date: "November 2024",
    description: "Presented iot Project on Smart GPS Tracking System.",
    location: "VIPS-TC",
  },
  {
    id: 8,
    src: PosterPresentation,
    alt: "Poster Presentation",
    category: "presentation",
    date: "August 2024",
    description:
      "Poster Presentation of Research paper on YOLOv8 Powered Security System in Conference at VIPS-TC.",
    location: "VIPS-TC",
  },
  {
    id: 9,
    src: SIH,
    alt: "SIH",
    category: "hackathon",
    date: "September 2024",
    description:
      "Qualified for the Smart India Hackathon (SIH) through the internal hackathon.",
    location: "VIPS-TC",
  },
  {
    id: 10,
    src: JIMS,
    alt: "JIMS",
    category: "hackathon",
    date: "February 2025",
    description:
      "Successfully advanced through two rounds of the Code Kshetra 2.0 Hackathon.",
    location: "JIMS Rohini",
  },
  {
    id: 11,
    src: CDAC,
    alt: "CDAC",
    category: "certificate",
    date: "July 2025",
    description:
      "Completed certification in Foundation of Big Data and Data Science by CDAC Noida.",
    location: "CDAC Noida",
  },
  {
    id: 12,
    src: CSI,
    alt: "CSI2025",
    category: "Internship",
    date: "August 2025",
    description: "Office Visit at Celebal Technologies Noida ",
    location: "CT Noida",
  },
].reverse();
