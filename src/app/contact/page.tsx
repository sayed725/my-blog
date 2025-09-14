"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsappSquare,
} from "react-icons/fa";

const ContactPage = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log('Form submitted:', formData);
    alert("Message Send successfully!");
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="min-h-screen blog-container">
      <div className="text-center mb-12">
        <p className="text-lg font-semibold text-blue-600">Category</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 capitalize">
          Contact
        </h1>
      </div>

      <div id="contact" className="py-5 lg:py-10 w-11/12 mx-auto lg:w-full">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info Section */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: <FaHome className="text-primary  text-2xl" />,
                title: "Dhaka, Bangladesh",
                subtitle: "Nawabjong, Dhaka 1320",
              },
              {
                icon: <FaPhoneAlt className="text-primary  text-2xl" />,
                title: "+8801627142598",
                subtitle: "Sun to Thu 9am to 8pm",
              },
              {
                icon: <FaEnvelope className="text-primary  text-2xl" />,
                title: "abusayedkhan.pro@gmail.com",
                subtitle: "Send me query anytime!",
              },
              {
                icon: <FaWhatsappSquare className="text-primary  text-2xl" />,
                title: "+8801627142598",
                subtitle: "Available 24/7!",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                {item.icon}
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 grid sm:grid-cols-2 gap-5"
          >
            <div className="flex flex-col gap-5">
              {[
                {
                  type: "text",
                  name: "name",
                  placeholder: "Enter your name",
                  value: formData.name,
                },
                {
                  type: "email",
                  name: "email",
                  placeholder: "Enter email address",
                  value: formData.email,
                },
                {
                  type: "text",
                  name: "subject",
                  placeholder: "Enter subject",
                  value: formData.subject,
                },
              ].map((input, index) => (
                <input
                  key={index}
                  type={input.type}
                  name={input.name}
                  value={input.value}
                  onChange={handleChange}
                  placeholder={input.placeholder}
                  className="p-3 border rounded-lg w-full"
                  required
                />
              ))}
            </div>
            <div className="flex flex-col gap-5">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Message"
                className="p-3 border rounded-lg w-full h-[140px]"
                required
              ></textarea>
              <Button
                type="submit"
                className="bg-primary text-white  rounded-md font-semibold"
              >
                SEND MESSAGE
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
