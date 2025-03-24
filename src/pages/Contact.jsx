import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_z0h52gj", // Replace with your EmailJS service ID
        "template_y5eif46", // Replace with your EmailJS template ID
        formData,
        "ESpK9mN0GEgaaDZmY" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send message. Please try again.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-6">
      {/* <div className="max-w-3xl w-full bg-gray-800 p-8 rounded-lg shadow-lg"> */}
      <section id="contact" className="px-8 md:px-20 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Have a project in mind? Let's discuss how I can help bring your
              ideas to life.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border placeholder-gray-500 border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border placeholder-gray-500 border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300 shadow-lg shadow-blue-500/50"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
    // </div>
  );
}

export default Contact;
