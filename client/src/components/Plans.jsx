import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Check, X, TrendingUp } from "lucide-react";
import ContactModal from "./ContactModal";

const PlansSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const plans = [
    {
      name: "Basic one session a week",
      price: 25,
      sessions: 1,
      features: [
        "One Group Training Sessions per Week",
        "Access to Shared Training Facilities",
        "Basic Performance Tracking",
        "Community Support",
      ],
      unavailableFeatures: [
        "Private Coaching",
        "Advanced Performance Analysis",
        "Personalized Nutrition Guidance",
      ],
      recommended: false,
    },
    
    {
      name: "Basic Two session a week",
      price: 35,
      sessions: 2,
      features: [
        "Two Group Training Sessions per Week",
        "Access to Shared Training Facilities",
        "Basic Performance Tracking",
        "Community Support",
      ],
      unavailableFeatures: [
        "Private Coaching",
        "Advanced Performance Analysis",
        "Personalized Nutrition Guidance",
      ],
      recommended: false,
    },

    {
      name: "Private class",
      price: 50,
      sessions: 1,
      features: [
        "One Private Training Sessions per Week",
        "Comprehensive Facility Access",
        "Advanced Performance Tracking",
        "Personalized Coaching",
        "Nutrition Consultation",
        "Community Support",
      ],
      unavailableFeatures: [],
      recommended: true,
    },

    {
      name: "Private class",
      price: 80,
      sessions: 2,
      features: [
        "Two Private Training Sessions per Week",
        "Comprehensive Facility Access",
        "Advanced Performance Tracking",
        "Personalized Coaching",
        "Nutrition Consultation",
        "Community Support",
      ],
      unavailableFeatures: [],
      recommended: true,
    },
  ];

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

  const handleChoosePlan = (planName) => {
    setSelectedPlan(planName);
    setIsContactModalOpen(true);
  };

  const handleCloseModal = useCallback(() => {
    // Immediate closing will be handled by the modal
    setIsContactModalOpen(false);
    setSelectedPlan(null);
  }, []);

  return (
    <section id="plans" className="py-24 bg-white">
      <div className="w-[80%] mx-auto">
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
            Training <span className="text-gray-800">Plans</span>
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
            Choose the plan that best fits your martial arts journey and
            personal development goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`
                border border-gray-200 rounded-xl p-8 relative overflow-hidden
                ${plan.recommended ? "border-gray-800 shadow-lg" : ""}
                transition-all duration-300
                hover:shadow-xl hover:scale-[1.02]
              `}
              whileHover={{
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                },
              }}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-gray-800 text-white px-4 py-2 text-sm uppercase tracking-wider">
                  Recommended
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {plan.name} Plan
                </h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900 mr-2">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600">AUD / Week</span>
                </div>
                <div className="text-gray-600 mb-6">
                  {plan.sessions} Training Sessions per Week
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-800">
                  What's Included
                </h4>
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center mb-3 text-gray-700"
                  >
                    <Check
                      size={20}
                      className="mr-3 text-green-600"
                      strokeWidth={2.5}
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {plan.unavailableFeatures.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">
                    Not Included
                  </h4>
                  {plan.unavailableFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center mb-3 text-gray-500"
                    >
                      <X
                        size={20}
                        className="mr-3 text-red-500"
                        strokeWidth={2.5}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              <motion.button
                onClick={() => handleChoosePlan(plan.name)}
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
                className={`
                  w-full py-3 rounded-md font-semibold transition-colors
                  ${
                    plan.recommended
                      ? "bg-gray-800 text-white hover:bg-gray-900"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }
                `}
              >
                {plan.recommended ? "Get Started" : "Choose Plan"}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
            delay: 0.4,
          }}
          className="text-center mt-16 bg-gray-50 p-12 rounded-xl"
        >
          <div className="flex justify-center items-center mb-6">
            <TrendingUp size={40} className="text-gray-800 mr-4" />
            <h3 className="text-3xl font-bold">
              Upgrade Your Martial Arts Journey
            </h3>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Not sure which plan is right for you? Our expert instructors can
            help you choose the perfect program to meet your fitness and martial
            arts goals.
          </p>
          <motion.button
            onClick={() => {
              setSelectedPlan(null);
              setIsContactModalOpen(true);
            }}
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
            Book a Consultation
            <span className="ml-2">→</span>
          </motion.button>
        </motion.div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseModal}
        selectedPlan={selectedPlan}
      />
    </section>
  );
};

export default PlansSection;
