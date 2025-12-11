import React, { useState, useEffect } from "react";
import { TbBuildingCommunity, TbTools } from "react-icons/tb";
import { FaAward } from "react-icons/fa";

const carouselImages = [1, 2, 3, 4, 5];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="font-sans">

      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">
        {carouselImages.map((_, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              background: "linear-gradient(135deg, #1e3a8a, #3b82f6, #facc15)",
              backgroundSize: "300% 300%",
              animation: "gradientShift 10s ease infinite",
            }}
          >
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
                Welcome to Mintirho Business Enterprises
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl text-white opacity-90">
                Delivering excellence in{" "}
                <strong>Construction, Civil Engineering, Consulting, and Project Management</strong> across South Africa.
              </p>
              <a
                href="#services"
                className="bg-yellow-400 text-blue-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-500 transition duration-300 shadow-xl inline-block mt-4"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-4 h-4 rounded-full transition-colors ${
                index === current ? "bg-yellow-400" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          Mintirho Business Enterprises is a proudly South African company founded in <strong>2002</strong>. 
          With over two decades of experience, we have evolved into a trusted partner for government, 
          private companies, and community-driven projects. Our work is guided by integrity, 
          service excellence, and a commitment to long-term development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <TbBuildingCommunity className="text-5xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be a leading African enterprise known for reliability, innovation, and sustainable development.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <TbTools className="text-5xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To deliver high-quality construction, civil works, and technical solutions through professionalism and expertise.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <FaAward className="text-5xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Core Values</h3>
            <p className="text-gray-600">
              Integrity, Quality, Safety, Innovation, and Excellence form the foundation of every project we undertake.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Why Partner With Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-blue-700 mb-3">Proven Track Record</h3>
            <p className="text-gray-600">
              Successful delivery of multi-million-rand projects for government and private organisations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-blue-700 mb-3">Experienced Workforce</h3>
            <p className="text-gray-600">
              Skilled contract managers, engineers, artisans, and safety professionals with decades of combined experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-blue-700 mb-3">Reliable & Compliant</h3>
            <p className="text-gray-600">
              Fully registered with CIDB, NHBRC, SARS, Department of Labour, and other regulatory bodies.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-50 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Consulting</h3>
            <p className="text-gray-600">
              Business consulting, feasibility studies, project planning, and strategic advice.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Civil & Construction</h3>
            <p className="text-gray-600">
              Roads, stormwater systems, earthworks, building construction, renovations, and site development.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Plant & Equipment Hire</h3>
            <p className="text-gray-600">
              A wide range of heavy machinery and specialised equipment available for hire.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-50 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Client Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="p-8 bg-white rounded-xl shadow-lg border-l-4 border-yellow-500">
            <p className="italic text-gray-700">
              "Mintirho delivered our project with outstanding professionalism and efficiency. Their team exceeded expectations."
            </p>
            <h4 className="mt-4 font-bold text-blue-700">– CEO, Infrastructure Group</h4>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-lg border-l-4 border-yellow-500">
            <p className="italic text-gray-700">
              "Excellent service and high quality workmanship. We would gladly work with them again."
            </p>
            <h4 className="mt-4 font-bold text-blue-700">– Project Manager, Government Department</h4>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-blue-700 text-white text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-6">Let’s Build Something Great Together</h2>
        <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">
          Whether you're planning a new project or need expert consulting, Mintirho Business Enterprises is ready to assist.
        </p>
        <a
          href="/contact"
          className="bg-yellow-400 text-blue-700 font-bold px-10 py-4 rounded-full text-xl shadow-xl hover:bg-yellow-500 transition"
        >
          Contact Us Today
        </a>
      </section>

    </main>
  );
};

export default Home;
