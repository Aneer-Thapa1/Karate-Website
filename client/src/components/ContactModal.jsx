import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Mail, Phone, FileText, Check } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";

const ContactModal = ({ isOpen, onClose, selectedPlan }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: selectedPlan || "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (now compulsory)
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please correct the errors in the form", {
        icon: "⚠️",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        "service_dwf9xde",
        "template_nf1de81",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          plan: formData.plan || "Consultation",
          message: formData.message,
          to_email: "anir234thapa@gmail.com",
        },
        "bWSI0NfonPHlh47Or"
      );

      // Customized success toast with more details
      toast.success(
        `Inquiry for ${
          formData.plan || "Consultation"
        } submitted successfully!`,
        {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#4B5563",
            color: "#fff",
            borderRadius: "10px",
          },
          icon: "✅",
        }
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        plan: selectedPlan || "",
        message: "",
      });
      // Close modal
      onClose();
    } catch (error) {
      // Error toast with more context
      toast.error(
        "Unable to submit inquiry. Please try again or contact support.",
        {
          duration: 4000,
          style: {
            borderRadius: "10px",
            background: "#ff4b4b",
            color: "#fff",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#ff4b4b",
          },
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Prevent modal from closing if clicking inside
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <>
      <Toaster
        position="top-right"
        containerStyle={{
          top: 60,
          right: 20,
        }}
      />
      <motion.div
        className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto relative"
          onClick={handleModalClick}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors z-10 p-2 rounded-full hover:bg-gray-100"
          >
            <X size={24} />
          </button>

          {/* Modal Content */}
          <div className="p-8 pt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              {selectedPlan ? `${selectedPlan} Plan` : "Consultation"} Inquiry
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-sm mx-auto">
              Fill out the form below, and our team will get back to you
              promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Input Component */}
              {[
                {
                  name: "name",
                  type: "text",
                  placeholder: "Full Name",
                  icon: User,
                },
                {
                  name: "email",
                  type: "email",
                  placeholder: "Email Address",
                  icon: Mail,
                },
                {
                  name: "phone",
                  type: "tel",
                  placeholder: "Phone Number",
                  icon: Phone,
                },
              ].map(({ name, type, placeholder, icon: Icon }) => (
                <div key={name}>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Icon size={20} className="text-gray-400" />
                    </div>
                    <input
                      type={type}
                      id={name}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className={`
                        w-full pl-10 pr-3 py-3 border-b-2 
                        ${
                          errors[name]
                            ? "border-red-500 focus:border-red-700"
                            : "border-gray-300 focus:border-gray-800"
                        }
                        bg-transparent text-gray-900 placeholder-gray-500
                        focus:outline-none transition-colors duration-300
                        text-base
                      `}
                      placeholder={placeholder}
                    />
                  </div>
                  {errors[name] && (
                    <p className="mt-1 text-sm text-red-500">{errors[name]}</p>
                  )}
                </div>
              ))}

              {/* Message Input */}
              <div>
                <div className="relative">
                  <div className="absolute top-3 left-0 pl-3 pointer-events-none">
                    <FileText size={20} className="text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="
                      w-full pl-10 pr-3 py-3 border-b-2 border-gray-300 
                      bg-transparent text-gray-900 placeholder-gray-500
                      focus:outline-none focus:border-gray-800
                      transition-colors duration-300
                      text-base
                    "
                    placeholder="Additional Notes (Optional)"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{
                  scale: isSubmitting ? 1 : 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  },
                }}
                whileTap={{
                  scale: isSubmitting ? 1 : 0.98,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  },
                }}
                className={`
                  w-full py-4 rounded-lg font-semibold transition-colors 
                  flex items-center justify-center
                  ${
                    isSubmitting
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-gray-800 text-white hover:bg-gray-900"
                  }
                  text-base
                `}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Submit Inquiry
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ContactModal;
