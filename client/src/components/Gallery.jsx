import React, { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1564974640028-4fdf9ab clean/ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Training Session",
      height: "h-64",
    },
    {
      src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Sparring Practice",
      height: "h-80",
    },
    {
      src: "https://images.unsplash.com/photo-1549763342-14427aa7d568?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      title: "Group Training",
      height: "h-96",
    },
    {
      src: "https://images.unsplash.com/photo-1581418983065-305be6b0f856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Meditation",
      height: "h-72",
    },
    {
      src: "https://images.unsplash.com/photo-1604223016847-4a5d30c9eeca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Technique Demonstration",
      height: "h-80",
    },
    {
      src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Advanced Training",
      height: "h-64",
    },
    {
      src: "https://images.unsplash.com/photo-1530577197743-7adf26ec5d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Warm-up Session",
      height: "h-96",
    },
    {
      src: "https://images.unsplash.com/photo-1520607162295-c010c4358354?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      title: "Strength Training",
      height: "h-72",
    },
    {
      src: "https://images.unsplash.com/photo-1521492673106-5ffe3ae1d36c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      title: "Fitness Class",
      height: "h-80",
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="w-[80%] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
          }}
          className="text-center mb-16"
        >
          <h2 className="relative inline-block text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gray-800">Gallery</span>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gray-800"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.8,
                delay: 0.3,
              }}
            />
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our training moments, from intense sessions to peaceful
            practices.
          </p>
        </motion.div>

        {/* Pinterest-style Gallery */}
        <div className="gallery-grid gap-4 columns-2 md:columns-3 lg:columns-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.1,
              }}
              className={`
                gallery-item relative mb-4 group overflow-hidden 
                ${image.height}
              `}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                onClick={() => handleImageClick(image)}
                className="
                  absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 
                  transition-all duration-300 cursor-pointer
                  flex items-center justify-center
                "
              >
                <Maximize2
                  className="
                    text-white opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300
                  "
                  size={32}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2"
          >
            <X size={32} />
          </button>
          <motion.img
            src={selectedImage.src}
            alt={selectedImage.title}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="max-w-full max-h-full object-contain"
          />
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center">
            <p className="text-xl font-semibold">{selectedImage.title}</p>
          </div>
        </motion.div>
      )}

      {/* Custom CSS for Masonry-like Layout */}
      <style jsx>{`
        .gallery-grid {
          column-gap: 1rem;
        }
        .gallery-item {
          break-inside: avoid;
          page-break-inside: avoid;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
