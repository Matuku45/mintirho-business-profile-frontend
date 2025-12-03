import React from "react";

const Home = () => {
  return (
    // The entire content is now wrapped in a single, clean <main> tag as the root element.
    <main className="font-sans">

      {/* Hero Section - Fixed Syntax and Added Professional Styling */}
      <section id="hero" className="bg-blue-700 text-white py-24 md:py-32 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeIn">
          Welcome to Mintirho Business Enterprises
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
          Empowering your business with professional solutions and modern strategies in **Construction, Civil Works, and Consulting**.
        </p>
        <a
          href="#services"
          className="bg-yellow-400 text-blue-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-500 transition duration-300 shadow-xl inline-block mt-4"
        >
          Explore Our Services
        </a>
      </section>

      {/* About Section - Enhanced for Clarity */}
      <section id="about" className="about-section py-20 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Mintirho Business Enterprises, established in 2002, is a dedicated and 100% Black-owned company. We are committed to helping businesses grow and succeed by offering innovative solutions, expert guidance, and personalized support across the civil and construction sectors.
        </p>
        <div className="mt-8">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full border border-green-300">
            Level 1 B-BBEE Contributor
          </span>
        </div>
      </section>

      {/* Core Strengths & Identity Section (New content based on Company Profile page purpose) */}
      <section id="strengths" className="strengths-section py-20 px-6 text-center bg-gray-50">
        <h2 className="text-4xl font-bold mb-12 text-blue-700">Our Strategic Foundation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Vision */}
          <div className="strength-item p-8 rounded-xl bg-white shadow-lg transition duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">Vision</h3>
            <p className="text-gray-600">
              To be the leading, most reliable, and sustainable business enterprise in Africa, setting the benchmark for quality and ethical operations.
            </p>
          </div>
          {/* Mission */}
          <div className="strength-item p-8 rounded-xl bg-white shadow-lg transition duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">Mission</h3>
            <p className="text-gray-600">
              To deliver innovative and professional solutions in construction and civil works, ensuring client success through integrity, expertise, and precision.
            </p>
          </div>
          {/* Values */}
          <div className="strength-item p-8 rounded-xl bg-white shadow-lg transition duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">Core Values</h3>
            <p className="text-gray-600">
              Integrity, Professionalism, Quality Assurance, Safety, and Sustainable Growth are at the heart of everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Existing Structure, Minor Styling Polish */}
      <section id="services" className="services-section bg-gray-100 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="service-card bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Consulting</h3>
            <p className="text-gray-600">Professional business consulting to optimize your operations, construction strategy, and project planning.</p>
            <a href="/products-services" className="text-blue-500 text-sm mt-3 block hover:underline">Learn More →</a>
          </div>
          <div className="service-card bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Civil & Construction</h3>
            <p className="text-gray-600">Comprehensive civil engineering, road construction, earthworks, and general building services.</p>
            <a href="/products-services" className="text-blue-500 text-sm mt-3 block hover:underline">View Portfolio →</a>
          </div>
          <div className="service-card bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Plant & Equipment Hire</h3>
            <p className="text-gray-600">Access to modern tech solutions and a full inventory of high-capacity plant and equipment for hire.</p>
            <a href="/equipment" className="text-blue-500 text-sm mt-3 block hover:underline">View Inventory →</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Existing Structure */}
      <section id="testimonials" className="testimonials-section py-20 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="testimonial-card p-8 bg-gray-50 rounded-xl shadow-md border-l-4 border-yellow-400">
            <p className="italic text-gray-700">"Mintirho transformed our business approach and helped us achieve record growth. Their professionalism and quality of work are unmatched. Highly recommended!"</p>
            <h4 className="mt-4 font-bold text-blue-700">– John Doe, CEO, Alpha Corp</h4>
          </div>
          <div className="testimonial-card p-8 bg-gray-50 rounded-xl shadow-md border-l-4 border-yellow-400">
            <p className="italic text-gray-700">"The team is professional, knowledgeable, and always responsive to our needs. The project was completed on time and well within budget."</p>
            <h4 className="mt-4 font-bold text-blue-700">– Jane Smith, Marketing Director, Beta Industries</h4>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Existing Structure, Minor Styling Polish */}
      <section id="contact" className="cta-section bg-blue-600 text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Take Your Business to the Next Level?</h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg opacity-90">
          Contact Mintirho Business Enterprises today and start your journey towards growth, compliance, and guaranteed success.
        </p>
        <a
          href="/contact"
          className="bg-yellow-400 text-blue-600 px-8 py-4 rounded-lg font-extrabold text-xl hover:bg-yellow-500 transition duration-300 shadow-2xl"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
};

export default Home;