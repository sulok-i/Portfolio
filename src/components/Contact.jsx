// src/components/Contact.jsx
import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaRegCommentDots,
  FaPaperPlane,
  FaSpinner,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import Swal from "sweetalert2";

// Reusable Input Field Component
const InputField = ({
  id,
  label,
  type = "text",
  placeholder,
  icon,
  value,
  onChange,
  error,
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
      {label}
    </label>
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
        {icon}
      </span>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className={`w-full bg-gray-900/60 border border-purple-500/20 rounded-xl py-3.5 pl-12 pr-5 text-gray-200 
                   placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 
                   transition-all duration-300 backdrop-blur-md shadow-lg
                   ${error ? "border-red-500/50 focus:ring-red-500" : ""}`}
      />
      {error && <p className="text-xs text-red-400 mt-1.5 ml-1">{error}</p>}
    </div>
  </div>
);

// Animation variants
const iconMotion = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { type: "spring", stiffness: 300, damping: 12 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    let newErrors = { ...errors };
    if (name === "name") {
      if (!value.trim()) newErrors.name = "Name is required";
      else delete newErrors.name;
    }
    if (name === "email") {
      if (!/^\S+@\S+\.\S+$/.test(value)) newErrors.email = "Invalid email format";
      else delete newErrors.email;
    }
    if (name === "message") {
      if (!value.trim()) newErrors.message = "Message is required";
      else delete newErrors.message;
    }
    setErrors(newErrors);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    const accessKey = "da9e1e6b-a1d1-4390-b2da-8062951732e0"; // api key

    const payload = {
      access_key: accessKey,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      from_name: formData.name,
      replyto: formData.email,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Message Sent!",
          text: "Thank you! I'll get back to you soon.",
          icon: "success",
          timer: 2200,
          showConfirmButton: false,
          customClass: { popup: "animate__animated animate__fadeInUp" },
        });

        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        toast.error(result.message || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-5 sm:px-8 lg:px-12 relative z-10">
      <Toaster
        position="top-center"
        toastOptions={{
          className: "bg-gray-900 text-white border border-purple-500/30 shadow-xl",
          duration: 4500,
        }}
      />

      <motion.div
        className="max-w-lg mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>

          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-full" />

          <p className="mt-6 text-lg text-gray-300/90 leading-relaxed">
            Got a project idea, question, or just want to say hi? Drop me a message — I reply fast!
          </p>
        </motion.div>

        {/* Form */}
        <motion.form onSubmit={onSubmit} className="space-y-6">
          <motion.div variants={itemVariants}>
            <InputField
              id="name"
              label="Your Name"
              placeholder="Sulok Pokhrel"
              icon={<FaUser className="w-5 h-5" />}
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <InputField
              id="email"
              label="Email Address"
              type="email"
              placeholder="sulok@example.com"
              icon={<FaEnvelope className="w-5 h-5" />}
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your idea or question..."
              required
              className={`w-full bg-gray-900/60 border border-purple-500/20 rounded-xl py-4 px-5 text-gray-200 
                         placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 
                         transition-all duration-300 backdrop-blur-md shadow-lg resize-none
                         ${errors.message ? "border-red-500/50 focus:ring-red-500" : ""}`}
            />
            {errors.message && <p className="text-xs text-red-400 mt-1.5 ml-1">{errors.message}</p>}
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4">
            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 py-4 px-8 font-semibold text-white 
                         bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg shadow-purple-900/40
                         hover:shadow-2xl hover:shadow-purple-700/50 hover:from-purple-500 hover:to-indigo-500
                         transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <>
                  <FaSpinner className="animate-spin w-5 h-5" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <FaPaperPlane className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.form>

        {/* Social Icons */}
        <motion.div
          className="mt-12 flex justify-center gap-6 sm:gap-8"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/sulok-i" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover="hover"
            initial="rest"
            variants={iconMotion}
            className="group bg-gray-900/60 border border-purple-500/20 p-4 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-purple-900/40 transition-all duration-500"
          >
            <FaGithub className="w-8 h-8 text-gray-300 group-hover:text-purple-400 transition-colors duration-300" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sulok-pokhrel/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover="hover"
            initial="rest"
            variants={iconMotion}
            className="group bg-gray-900/60 border border-blue-500/20 p-4 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-blue-900/40 transition-all duration-500"
          >
            <FaLinkedin className="w-8 h-8 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
          </motion.a>
        </motion.div>

       
        <motion.p
          variants={itemVariants}
          className="mt-8 text-center text-gray-400 text-sm"
        >
          or reach me directly at{" "}
          <a
            href="mailto:sulok.pokharel123@gmail.com" 
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            sulok.pokharel123@gmail.com
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Contact;