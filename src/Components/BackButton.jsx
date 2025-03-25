import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import ScrollToTop from "./ScrollToTop";

export default function BackButton() {
  const navigate = useNavigate();
  const [canGoBack, setCanGoBack] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check if history navigation is possible
    setCanGoBack(window.history.state !== null);
  }, []);

  if (!canGoBack) return null; // Hide button if no history

  return (
    <>
      <ScrollToTop />
      <button
        onClick={() => navigate(-1)}
        className={`p-2 rounded-full transition duration-300 flex items-center ${
          scrolled
            ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
            : "text-white hover:bg-white/10 hover:text-blue-300"
        }`}
      >
        <ArrowLeft size={20} />
      </button>
    </>
  );
}
