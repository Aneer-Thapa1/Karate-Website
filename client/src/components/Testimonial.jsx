import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const controls = useAnimation();

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ec47167f5ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      quote:
        "Joining Vision Martial Arts has been a transformative experience. The instructors are not just trainers, but mentors who truly care about personal growth.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0fc1feef5473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      quote:
        "The discipline and focus I've learned here go far beyond martial arts. It's changed how I approach challenges in both my personal and professional life.",
      rating: 4.5,
    },
    {
      name: "Emily Rodriguez",
      position: "Entrepreneur",
      image:
        "https://images.unsplash.com/photo-1525134479415-9eb1d7c25a37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      quote:
        "As a busy professional, I was skeptical about starting martial arts. Now, it's my favorite part of the week. The community here is incredible.",
      rating: 5,
    },
  ];

  const handleNext = () => {
    const nextTestimonial = (activeTestimonial + 1) % testimonials.length;
    setActiveTestimonial(nextTestimonial);
  };

  const handlePrev = () => {
    const prevTestimonial =
      (activeTestimonial - 1 + testimonials.length) % testimonials.length;
    setActiveTestimonial(prevTestimonial);
  };

  // Animate on testimonial change
  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      y: [20, 0],
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    });
  }, [activeTestimonial, controls]);

  return (
    <section
      id="testimonials"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="w-[80%] mx-auto relative z-10">
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
            What Our <span className="text-gray-800">Members</span> Say
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
            Hear from our dedicated members who have transformed their lives
            through martial arts.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Testimonial Content */}
          <motion.div
            key={activeTestimonial}
            animate={controls}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Image Container */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 z-0 w-40 h-40 bg-gray-200 rounded-full"></div>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-full h-[500px] object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-10 -right-10 z-0 w-40 h-40 bg-gray-200 rounded-full"></div>
            </div>

            {/* Quote Container */}
            <div className="space-y-6 relative">
              <Quote
                size={80}
                className="absolute -top-10 left-0 text-gray-200 z-0"
                strokeWidth={1}
              />
              <motion.blockquote
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10 text-2xl font-medium text-gray-800 mb-6 pl-4"
              >
                "{testimonials[activeTestimonial].quote}"
              </motion.blockquote>

              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {testimonials[activeTestimonial].name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonials[activeTestimonial].position}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={
                        i < Math.floor(testimonials[activeTestimonial].rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white shadow-lg rounded-full p-3 -ml-6 z-20 hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft size={24} className="text-gray-800" />
            </motion.button>
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white shadow-lg rounded-full p-3 -mr-6 z-20 hover:bg-gray-100 transition-colors"
            >
              <ArrowRight size={24} className="text-gray-800" />
            </motion.button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <motion.div
                key={index}
                onClick={() => setActiveTestimonial(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`
                  w-3 h-3 rounded-full cursor-pointer
                  ${
                    activeTestimonial === index
                      ? "bg-gray-800"
                      : "bg-gray-300 hover:bg-gray-500"
                  }
                  transition-colors
                `}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gray-100 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gray-100 rounded-full opacity-50 blur-2xl"></div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
