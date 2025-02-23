import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Target,
  Globe,
  Rocket,
  Medal,
  Layers,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

const About = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const keyHighlights = [
    {
      icon: Target,
      title: "Precision Training",
      description:
        "Meticulously crafted programs that focus on technique, discipline, and personal growth.",
      color: "text-primary",
      background: "bg-orange-50 dark:bg-orange-900/20",
      details: [
        "Advanced skill development",
        "Technique-focused curriculum",
        "Continuous performance tracking",
      ],
    },
    {
      icon: Globe,
      title: "Global Standards",
      description:
        "International-level training methodologies adapted to individual needs.",
      color: "text-green-500",
      background: "bg-green-50 dark:bg-green-900/20",
      details: [
        "Certified international instructors",
        "World-class training techniques",
        "Multicultural learning environment",
      ],
    },
    {
      icon: Rocket,
      title: "Accelerated Progress",
      description:
        "Innovative approach to martial arts that rapidly develops skills and confidence.",
      color: "text-blue-500",
      background: "bg-blue-50 dark:bg-blue-900/20",
      details: [
        "Personalized skill acceleration",
        "Mental and physical development",
        "Breakthrough learning methods",
      ],
    },
  ];

  const achievementHighlights = [
    {
      icon: Medal,
      title: "Championship Success",
      value: "50+",
      description: "National and international competition victories",
    },
    {
      icon: Layers,
      title: "Training Expertise",
      value: "25+",
      description: "Years of martial arts instruction and development",
    },
  ];

  const instructors = [
    {
      name: "Master John Rodriguez",
      role: "Chief Instructor",
      image: "/api/placeholder/400/400",
      bio: "With 25 years of martial arts experience, John brings unparalleled expertise and passion to our training.",
      socialLinks: {
        linkedin: "#",
        instagram: "#",
        twitter: "#",
      },
      achievements: [
        "5th Degree Black Belt",
        "National Champion",
        "International Training Certified",
      ],
    },
    {
      name: "Sarah Kim",
      role: "Senior Instructor",
      image: "/api/placeholder/400/400",
      bio: "Specializing in youth development and advanced techniques, Sarah transforms lives through martial arts.",
      socialLinks: {
        linkedin: "#",
        instagram: "#",
        twitter: "#",
      },
      achievements: [
        "3rd Degree Black Belt",
        "Youth Training Specialist",
        "Community Leadership Award",
      ],
    },
    {
      name: "Marcus Thompson",
      role: "Advanced Training Coach",
      image: "/api/placeholder/400/400",
      bio: "Combining traditional wisdom with modern training methods, Marcus brings innovation to every class.",
      socialLinks: {
        linkedin: "#",
        instagram: "#",
        twitter: "#",
      },
      achievements: [
        "4th Degree Black Belt",
        "Self-Defense Methodology Expert",
        "International Competition Judge",
      ],
    },
  ];

  return (
    <div className="relative w-full bg-background-light dark:bg-background-dark text-black dark:text-white font-poppins">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-black mb-4 text-primary tracking-tight">
            Vision Martial Arts
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
            Transforming lives through a holistic approach to martial arts,
            empowering individuals to unlock their ultimate potential and inner
            strength.
          </p>
        </motion.div>

        {/* Key Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {keyHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`${highlight.background} rounded-2xl p-6 border border-transparent 
                         hover:border-primary/20 transition-all duration-300 
                         transform hover:-translate-y-2 group`}
              onMouseEnter={() => setActiveSection(index)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className="flex items-center mb-4">
                <highlight.icon
                  className={`${highlight.color} mr-4`}
                  size={48}
                  strokeWidth={1.5}
                />
                <h2 className="text-2xl font-bold text-black dark:text-white">
                  {highlight.title}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {highlight.description}
              </p>

              <AnimatePresence>
                {activeSection === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      transition: { duration: 0.3 },
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      transition: { duration: 0.2 },
                    }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      {highlight.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center">
                          <span className="w-2 h-2 mr-2 bg-primary rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-white dark:bg-secondary-dark rounded-2xl shadow-lg p-12 grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Our Journey of Excellence
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Vision Martial Arts has been at the forefront of martial arts
              training, combining traditional wisdom with innovative techniques.
              Our commitment to excellence has transformed countless lives,
              helping individuals discover their inner strength and potential.
            </p>
            <button className="flex items-center text-primary hover:text-primary/80 transition-colors">
              Discover Our Story
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {achievementHighlights.map((achievement, index) => (
              <div
                key={achievement.title}
                className="bg-gray-50 dark:bg-background-dark/50 rounded-xl p-6 text-center"
              >
                <achievement.icon
                  className={`mx-auto mb-4 ${
                    achievement.color || "text-primary"
                  }`}
                  size={48}
                  strokeWidth={1.5}
                />
                <h3 className="text-4xl font-black text-primary mb-2">
                  {achievement.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Instructors Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Expert Instructors
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              Meet the passionate professionals who bring decades of martial
              arts expertise to Vision Martial Arts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-secondary-dark rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                onClick={() => setSelectedInstructor(instructor)}
              >
                <div className="relative">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold">{instructor.name}</h3>
                      <p className="text-sm">{instructor.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Instructor Modal */}
      <AnimatePresence>
        {selectedInstructor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setSelectedInstructor(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-secondary-dark rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2">
                <div>
                  <img
                    src={selectedInstructor.image}
                    alt={selectedInstructor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <button
                    onClick={() => setSelectedInstructor(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                  <h2 className="text-3xl font-bold mb-2 text-primary">
                    {selectedInstructor.name}
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                    {selectedInstructor.role}
                  </p>
                  <p className="text-gray-700 dark:text-gray-400 mb-6">
                    {selectedInstructor.bio}
                  </p>

                  <div className="bg-gray-50 dark:bg-background-dark/50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      Key Achievements
                    </h3>
                    <ul className="space-y-2">
                      {selectedInstructor.achievements.map(
                        (achievement, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                          >
                            <span className="w-2 h-2 bg-primary rounded-full" />
                            {achievement}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="flex space-x-4">
                    {Object.entries(selectedInstructor.socialLinks).map(
                      ([platform, link]) => {
                        const Icon =
                          platform === "linkedin"
                            ? Linkedin
                            : platform === "instagram"
                            ? Instagram
                            : Twitter;
                        return (
                          <a
                            key={platform}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            <Icon size={24} />
                          </a>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
