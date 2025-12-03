import React from "react";
import { MdLocationOn, MdPhone, MdFax, MdBusiness } from "react-icons/md";
import { TbBuildingFactory } from "react-icons/tb";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";

const offices = [
  {
    name: "Polokwane Office",
    address: "22 Voortrekker street, Polokwane, 0699",
    tel: "015 291 2142",
    fax: "086 616 4687",
  },
  {
    name: "Eastern Cape Office",
    address: "16 Donald road, Vincent, East London, 5247",
    tel: "043 726 6321",
    fax: "086 616 4687",
  },
  {
    name: "Gauteng Office",
    address: "202a Lourgadia Building, Cnr Embarkment & Hendrick Verwoerd Drive, Centurion 0164",
    tel: "012 740 7300",
    fax: "086 616 4687",
  },
  {
    name: "Western Cape Office",
    address: "39 Belgravia Road, Imperial Building, Athlone 7760",
    tel: "021 823 1502",
    cell: "084 500 0507",
    fax: "086 616 4687",
  },
];

const companyInfo = [
  { label: "Business Name", value: "Mintirho Business Enterprises", icon: <MdBusiness /> },
  { label: "Close Corporation Reg. No.", value: "2002/104 966/23" },
  { label: "VAT Number", value: "404 021 6469" },
  { label: "PAYE Registration", value: "745 076 4917" },
  { label: "SDL", value: "L4507 649 17" },
  { label: "UIF", value: "U4507 649 17" },
  { label: "CIDB Number", value: "100821" },
  { label: "NHBRC Number", value: "34722" },
  { label: "COIDA Reg. No.", value: "0705 644 0500" },
  { label: "MBA Membership No.", value: "–" },
];

const Contact = () => {
  return (
    <main className="relative min-h-screen bg-gray-900 text-gray-100 px-6 py-20 overflow-hidden">
      {/* Moving Stars / Particle Background */}
      <Particles
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 80 },
            size: { value: 2 },
            color: { value: "#facc15" },
            move: { enable: true, speed: 0.6, outModes: { default: "out" } },
            opacity: { value: 0.8 },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 text-yellow-400"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-lg md:text-xl mb-16 text-gray-200"
        >
          Reach out to Mintirho Business Enterprises for inquiries, quotes, or project collaborations. Our team is ready to assist you across South Africa.
        </motion.p>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {offices.map((office, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-1 rounded-3xl bg-gradient-to-r from-blue-400 via-yellow-400 to-pink-500 animate-gradient-x"
            >
              <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl text-left">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-400">
                  <TbBuildingFactory className="text-3xl" /> {office.name}
                </h3>
                <p className="flex items-center gap-2 mb-2">
                  <MdLocationOn className="text-blue-400" /> {office.address}
                </p>
                <p className="flex items-center gap-2 mb-2">
                  <MdPhone className="text-green-400" /> {office.tel}
                </p>
                {office.cell && (
                  <p className="flex items-center gap-2 mb-2">
                    <MdPhone className="text-green-400" /> {office.cell}
                  </p>
                )}
                <p className="flex items-center gap-2">
                  <MdFax className="text-red-400" /> {office.fax}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-400 animate-gradient-x rounded-3xl p-1 mb-16"
        >
          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-yellow-400 flex items-center justify-center gap-2">
              <MdBusiness /> Company Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200">
              {companyInfo.map((info, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  {info.icon && <span className="text-blue-400">{info.icon}</span>}
                  <span className="font-semibold">{info.label}:</span>
                  <span>{info.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <form className="bg-gray-800 shadow-2xl rounded-3xl p-8 max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
              Send Us a Message
            </h3>
            <div className="mb-4">
              <label className="block text-gray-200 font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-200 font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-200 font-semibold mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;
