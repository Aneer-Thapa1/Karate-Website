import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building, Trophy, FileText, Brain, Users, Star } from "lucide-react";

const AboutSection = () => {
  const [activeValue, setActiveValue] = useState(null);
  const [activeFeature, setActiveFeature] = useState(null);

  // Stagger animation variants for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Core values with images
  const coreValues = [
    {
      label: "Respect",
      value:
        "Building mutual respect and courtesy in all interactions, both in and outside the dojo.",
      image:
        "https://images.unsplash.com/photo-1553545204-4f7d339aa06a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    },
    {
      label: "Discipline",
      value:
        "Developing focus, self-control, and dedication through consistent practice and mindful training.",
      image:
        "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      label: "Perseverance",
      value:
        "Cultivating determination, resilience, and grit to overcome challenges on the martial arts journey.",
      image:
        "https://images.unsplash.com/photo-1616279969885-33a5fa9be7a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    },
    {
      label: "Integrity",
      value:
        "Fostering honesty, strong moral principles, and authentic self-expression in all aspects of life.",
      image:
        "https://images.unsplash.com/photo-1591600970349-aaa74069333d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  // Features with icons
  const features = [
    {
      title: "State-of-the-Art Facility",
      description:
        "Train in our modern, fully-equipped 5,000 sq. ft. facility with dedicated training zones and premium safety equipment.",
      icon: Building,
    },
    {
      title: "Certified Instructors",
      description:
        "Learn from our team of certified instructors who bring decades of combined experience and competitive achievements.",
      icon: Trophy,
    },
    {
      title: "Comprehensive Programs",
      description:
        "Choose from a variety of martial arts styles and specialized programs tailored to different age groups and skill levels.",
      icon: FileText,
    },
    {
      title: "Character Development",
      description:
        "Our curriculum integrates character development with physical training to build well-rounded individuals.",
      icon: Brain,
    },
    {
      title: "Supportive Community",
      description:
        "Join a supportive community of practitioners who encourage and motivate each other to achieve their goals.",
      icon: Users,
    },
    {
      title: "Proven Results",
      description:
        "Our students have achieved remarkable results in competitions, personal fitness goals, and everyday confidence.",
      icon: Star,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="w-[80%] mx-auto">
        {/* Header */}
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
          className="text-center mb-20"
        >
          <h2 className="relative inline-block text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gray-800">Vision</span>
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
            Established in 2010, Vision Martial Arts is dedicated to providing
            exceptional martial arts training in a respectful and supportive
            environment for students of all ages and skill levels.
          </p>
        </motion.div>

        {/* About Content with Large Image */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center mb-24">
          {/* Image column - spans 3 of 5 columns */}
          <motion.div
            className="lg:col-span-3 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.8,
            }}
          >
            <div className="relative overflow-hidden rounded-lg">
              {/* Multiple layer effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gray-800 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
              <motion.div
                className="relative overflow-hidden rounded-lg aspect-[16/9]"
                whileHover={{
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  },
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1574618463836-b309bda76b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                  alt="Our Training Facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md p-4 rounded-lg inline-block">
                    <span className="text-white font-bold text-sm tracking-wider uppercase">
                      Established 2010
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text column - spans 2 of 5 columns */}
          <motion.div
            className="lg:col-span-2 text-gray-700"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <h3 className="text-3xl font-bold mb-6">Our Philosophy</h3>
            <div className="w-16 h-1 bg-gray-800 mb-6"></div>
            <p className="mb-6 text-gray-600">
              At Vision Martial Arts, we believe that martial arts training
              extends beyond physical techniques. Our comprehensive approach
              focuses on developing the mind, body, and character of each
              student.
            </p>
            <p className="mb-8 text-gray-600">
              Whether you're looking to improve fitness, learn self-defense, or
              develop mental focus, our structured programs provide a clear path
              to achieving your goals while instilling core values of respect,
              discipline, perseverance, and integrity.
            </p>

            {/* Animated statistics */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { value: "1,500+", label: "Students Trained" },
                { value: "15+", label: "Years Experience" },
                { value: "8", label: "Black Belt Instructors" },
                { value: "4", label: "Martial Arts Styles" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    duration: 0.4,
                    delay: 0.3 + index * 0.1,
                  }}
                  className="text-center p-3 border border-gray-200 rounded-lg"
                >
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core Values with Interactive Cards */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
          }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer h-64"
                whileHover={{
                  scale: 1.03,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  },
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                onMouseEnter={() => setActiveValue(index)}
                onMouseLeave={() => setActiveValue(null)}
                onClick={() =>
                  setActiveValue(activeValue === index ? null : index)
                }
              >
                <div className="absolute inset-0">
                  <img
                    src={value.image}
                    alt={value.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <h4 className="text-xl font-bold text-white">
                    {value.label}
                  </h4>

                  <AnimatePresence>
                    {activeValue === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="bg-white bg-opacity-90 p-4 rounded-lg"
                      >
                        <p className="text-sm text-gray-800">{value.value}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us - Animated Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Choose Vision Martial Arts
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 ${
                    activeFeature === index
                      ? "shadow-lg transform scale-105"
                      : ""
                  }`}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.15)",
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                    },
                  }}
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 text-gray-800">
                      <FeatureIcon size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-gray-900">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
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
          className="text-center mt-16 bg-gray-50 p-12 rounded-xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Take the first step toward mastering martial arts and transforming
            your life. Join our community of dedicated practitioners.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 10,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 10,
              },
            }}
            className="bg-gray-800 text-white px-8 py-3 rounded-md font-medium text-lg inline-flex items-center hover:bg-gray-900 transition-colors"
          >
            Start Your Free Trial
            <span className="ml-2">→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
