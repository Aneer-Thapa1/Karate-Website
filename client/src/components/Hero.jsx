const slideVariants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};
import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Play, X, ZoomIn } from "lucide-react";
import image1 from "../assets/image1.avif";
import image2 from "../assets/image2.avif";
import image3 from "../assets/image3.avif";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoModal, setVideoModal] = useState(false);
  const [imageModal, setImageModal] = useState(null);
  const controls = useAnimation();

  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % heroSlides.length;
        console.log(heroSlides[nextSlide].image); // Logs the correct image
        return nextSlide;
      });
    }, 7000);

    return () => clearInterval(interval);
  }, [currentSlide]); // ✅ Add currentSlide as a dependency

  // Animate current slide
  useEffect(() => {
    controls.start("visible");
  }, [currentSlide, controls]);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroSlides = [
    {
      title: "TRANSFORM THROUGH DISCIPLINE",
      subtitle:
        "Discover the power of martial arts training for mind and body.",
      image: image1,
      position: "center",
    },
    {
      title: "TRAIN WITH THE BEST",
      subtitle: "Expert instruction in a professional, supportive environment.",
      image: image2,
      position: "center",
    },
    {
      title: "BUILD LASTING CONFIDENCE",
      subtitle: "Develop skills that translate to all areas of life.",
      image: image3,
      position: "center",
    },
  ];

  const galleryImages = [
    {
      id: "img1",
      src: "https://images.unsplash.com/photo-1593810450967-f9c42742e326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Martial arts students in training",
      size: "large",
      title: "Kids Program",
    },
    {
      id: "img2",
      src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      alt: "Martial arts competition",
      size: "small",
      title: "Competition Team",
    },
    {
      id: "img3",
      src: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2007&q=80",
      alt: "Adult martial arts training",
      size: "small",
      title: "Adult Classes",
    },
    {
      id: "img4",
      src: "https://img.freepik.com/free-photo/confident-korean-man-kimono-practicing-hand-hand-combat-martial-arts-young-male-fighter-with-black-belt-training-gradient-background-neon-light-concept-healthy-lifestyle-sport_155003-37213.jpg?uid=R189824694&ga=GA1.1.1673792348.1740976464&semt=ais_hybrid",
      alt: "Private martial arts lesson",
      size: "medium",
      title: "Private Lessons",
    },
  ];

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={controls}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
              style={{
                backgroundImage: `url(${heroSlides[currentSlide].image})`,
                backgroundSize: "cover", // Ensure full coverage
                backgroundPosition: "center", // Keep images properly aligned
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            {/* Animated Patterns */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,0 L100,0 L100,100 L0,100 Z"
                strokeWidth="0.25"
                stroke="#fff"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="w-[80%] mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block bg-black bg-opacity-70 border-l-4 border-gray-600 px-3 py-1 text-sm font-medium tracking-wider text-gray-300 mb-4">
                PROFESSIONAL MARTIAL ARTS TRAINING
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
                    {heroSlides[currentSlide].title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
                    {heroSlides[currentSlide].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
            >
              <button
                onClick={() => handleNavClick("classes")}
                className="px-8 py-3 bg-gray-900 hover:bg-gray-800 rounded-md font-medium text-lg transition-colors text-white flex items-center group"
              >
                Explore Programs
                <ChevronRight className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => setVideoModal(true)}
                className="px-8 py-3 border-2 border-white hover:bg-white hover:text-gray-900 rounded-md font-medium text-lg transition-colors text-white flex items-center justify-center group"
              >
                <Play className="mr-2 w-5 h-5 fill-current" />
                Watch Video
              </button>
            </motion.div>

            {/* Slide Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center space-x-3"
            >
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "w-10 bg-white"
                      : "w-4 bg-gray-500 hover:bg-gray-400"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </motion.div>
          </div>

          {/* Image Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-5 h-full"
          >
            <div className="grid grid-cols-12 grid-rows-12 gap-3 h-full">
              {/* Large central image */}
              <motion.div
                className="col-span-8 row-span-8 col-start-3 row-start-3 relative overflow-hidden rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setImageModal(galleryImages[0])}
              >
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-opacity duration-300"></div>
              </motion.div>

              {/* Top left */}
              <motion.div
                className="col-span-4 row-span-4 col-start-1 row-start-1 relative overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setImageModal(galleryImages[1])}
              >
                <img
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-opacity duration-300"></div>
              </motion.div>

              {/* Bottom left */}
              <motion.div
                className="col-span-4 row-span-5 col-start-1 row-start-8 relative overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setImageModal(galleryImages[2])}
              >
                <img
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-opacity duration-300"></div>
              </motion.div>

              {/* Top right */}
              <motion.div
                className="col-span-4 row-span-6 col-start-9 row-start-1 relative overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setImageModal(galleryImages[3])}
              >
                <img
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-opacity duration-300"></div>
              </motion.div>
            </div>

            {/* No statistics bar */}
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <button
          onClick={() => handleNavClick("about")}
          className="text-white animate-bounce opacity-70 hover:opacity-100 transition-opacity"
        >
          <ChevronDown size={30} />
        </button>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
            onClick={() => setVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative bg-black rounded-lg overflow-hidden w-full max-w-4xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors"
                onClick={() => setVideoModal(false)}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video bg-gray-900">
                {/* Replace with your actual video embed */}
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center p-8">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">
                      Your promotional video would appear here
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Replace this placeholder with your actual video embed code
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Modal */}
      <AnimatePresence>
        {imageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-95"
            onClick={() => setImageModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 z-10 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors"
                onClick={() => setImageModal(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={imageModal.src}
                alt={imageModal.alt}
                className="w-full h-auto rounded-lg shadow-2xl"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 rounded-b-lg">
                <h3 className="text-white text-lg font-bold">
                  {imageModal.title}
                </h3>
                <p className="text-gray-300 text-sm">{imageModal.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
