import {
  ExternalLink,
  BookOpen,
  Brain,
  Award,
  FileText,
  Zap,
  TrendingUp,
  Shield,
} from "lucide-react";
import { assets } from "../assets/assets";

export const researchData = [
  {
    title: "Cyberbullying Behavior Analysis",
    description:
      "Analyzing cyberbullying behavior in social media using supervised machine learning & natural language processing",
    link: "https://scholar.google.com/citations?hl=en&user=8fP0PUUAAAAJ&view_op=list_works&gmla=ANZ5fUPQlsMPR0kwVHUbRswk_EP7jz-eS_a0p0AHOP7PHKRrdGcSEgvAqS7q_WrO81lxuRCqMymD7t88SBoUmJky9sm3CMXQs5jZZmPv1Qr1nJ8dQ8krZba3Vx5SxCD08PgPX9E",
    linkText: "Google Scholar",
    icon: Shield,
    type: "Research Paper",
    year: "2024",
  },
  {
    title: "AQI Prediction and Sustainable Pollution Control Solutions",
    description:
      "Performance Evaluation of Various Machine Learning Models and Its Implications for Informed Air Policy Decisions: A Comparative Study for Delhi",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=8fP0PUUAAAAJ&citation_for_view=8fP0PUUAAAAJ:u-x6o8ySG0sC",
    linkText: "Google Scholar",
    icon: TrendingUp,
    type: "Research Paper",
    year: "2025",
  },
  {
    title:
      "Real time image processing and smart healthcare using eXplainable artificial intelligence (XAI)",
    description:
      "Conducted qualitative and quantitative analysis for mental stress detection using physiological and behavioral data. Integrated advanced AI techniques for enhanced emotion recognition accuracy.",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=8fP0PUUAAAAJ&citation_for_view=8fP0PUUAAAAJ:d1gkVwhDpl0C",
    linkText: "Google Scholar",
    icon: Brain,
    type: "Journal Article",
    year: "2025",
  },
  {
    title: "Enterprise AI Chatbots",
    description: "Enterprise AI Chatbots: Enhancing with RAG and LLaMA 3.2",
    link: assets.Patent,
    linkText: "View Patent",
    icon: Zap,
    type: "Patent",
    year: "2025",
  },
];
