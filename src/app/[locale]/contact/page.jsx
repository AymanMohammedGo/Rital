"use client";
import React, { useState } from "react";
import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_pce0725",
        "template_5cbxt4l",
        formData,
        "3VDT7N1sfotFdWbgp"
      )
      .then(
        (result) => {
          setResponseMessage("Message sent successfully");
          setFormData({ firstName: "", email: "", subject: "", message: "" });
          setTimeout(() => {
            setResponseMessage("");
          }, 3000);
        },
        (error) => {
          setResponseMessage("Failed to send message");
        }
      );

    setIsSubmitting(false);
  };
  return (
    <>
      <div>
        <ImageOverlaysCenter
          title="Contact Us"
          des="Reach out to us for electrifying solutions!"
          imgURL="/contact.jpg"
        />
      </div>
      <div className="max-w-screen-xl p-2 w-full my-3 lg:my-5 mx-auto ">
        <div className=" rounded-lg  md:flex">
          <div className="md:w-1/2 py-5 lg:px-5">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-lg lg:text-xl font-medium text-gray-700"
                >
                  {t("FirstName")}
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block text-sm lg:text-base w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg lg:text-xl font-medium text-gray-700"
                >
                  {t("Your email")}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block text-sm lg:text-base w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-lg lg:text-xl font-medium text-gray-700"
                >
                  {t("Subject")}
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block text-sm lg:text-base w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg lg:text-xl font-medium text-gray-700"
                >
                  {t("Your message")}
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block text-sm lg:text-base w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-lg lg:text-xl text-white font-semibold py-2 px-4 rounded-md hover:bg-secand transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? t("Sending...") : t("Send Message")}
              </button>
              {responseMessage && (
                <p
                  className={`${
                    responseMessage === "Message sent successfully"
                      ? "text-green-500"
                      : "text-red-500"
                  } mt-4 text-lg text-center`}
                >
                  {t(`${responseMessage}`)}
                </p>
              )}
            </form>
          </div>
          <div className="md:w-1/2 py-5 lg:px-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89547.20751935034!2d9.333618653506816!3d45.46274824496751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1493f1275e7%3A0x3cffcd13c6740e8d!2z2YXZitmE2KfZhtmI2Iwg2YXZgtin2LfYudipINmF2YrZhNin2YbZiNiMINil2YrYt9in2YTZitin!5e0!3m2!1sar!2siq!4v1725223615073!5m2!1sar!2siq"
              className="w-full h-64 md:h-full rounded-md shadow-lg"
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
