import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, LinkedinIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import sushantImg from "../assets/sushant.jpg"
import shivaImg from "../assets/shiva.jpg"
const instructorsData = [
  {
    id: 1,
    name: "Shiva Manandhar",
    role: "Chief Instructor",
    bio: "With over 15 years of martial arts experience, Sensai Shiva specializes in traditional techniques and modern training methodologies.",
    image: shivaImg,
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
    achievements: [
      "2nd Degree Black Belt",
      "National Martial Arts Champion",
      "International Training Certifications",
    ],
  },
  {
    id: 2,
    name: "Sushant Budhathoki Chhetri",
    role: "Senior Instructor",
    bio: "A dynamic instructor with a passion for youth development and advanced martial arts techniques.",
    image: sushantImg,
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
    achievements: [
      "2nd Degree Black Belt",
      "Youth Training Specialist",
      "Fitness and Conditioning Expert",
    ],
  }, 
  {
    id: 3,
    name: "Sabin Subedi",
    role: "Advanced Training Instructor",
    bio: "Brings a unique blend of traditional martial arts and modern self-defense techniques.",
    image: "/api/placeholder/400/400",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
    achievements: [
      "3th Degree Black Belt",
      "Self-Defense Methodology Innovator",
      "International Competition Judge",
    ],
  },
];

const InstructorsModal = ({ isOpen, onClose, instructor }) => {
  if (!isOpen || !instructor) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-secondary-dark rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-primary/10 hover:bg-primary/20 p-2 rounded-full transition-all"
        >
          <X className="text-primary" size={24} />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Image Section */}
          <div className="flex flex-col items-center">
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-full max-w-sm rounded-2xl shadow-lg object-cover aspect-square"
            />
            <div className="flex gap-4 mt-6">
              {Object.entries(instructor.socialLinks).map(
                ([platform, link]) => {
                  const Icon =
                    platform === "linkedin"
                      ? LinkedinIcon
                      : platform === "instagram"
                      ? InstagramIcon
                      : TwitterIcon;
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

          {/* Details Section */}
          <div>
            <h2 className="text-3xl font-bold mb-2 text-primary">
              {instructor.name}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              {instructor.role}
            </p>

            <p className="text-gray-700 dark:text-gray-400 mb-6">
              {instructor.bio}
            </p>

            <div className="bg-primary/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Key Achievements
              </h3>
              <ul className="space-y-2">
                {instructor.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const InstructorsSection = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Our Expert Instructors
        </h2>
        <p className="text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          Meet the passionate professionals who bring decades of martial arts
          expertise to Vision Martial Arts
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {instructorsData.map((instructor) => (
          <motion.div
            key={instructor.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-secondary-dark rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => setSelectedInstructor(instructor)}
          >
            <div className="relative">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className="text-xl font-semibold">{instructor.name}</h3>
                  <p className="text-sm">{instructor.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedInstructor && (
          <InstructorsModal
            key="instructor-modal"
            isOpen={!!selectedInstructor}
            onClose={() => setSelectedInstructor(null)}
            instructor={selectedInstructor}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default InstructorsSection;
