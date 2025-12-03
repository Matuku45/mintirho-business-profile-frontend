import React from "react";
import { FaTools, FaChartLine, FaHandshake } from "react-icons/fa";

const ProductsServices = () => {
return ( <main className="min-h-screen bg-white px-6 py-20"> <div className="max-w-6xl mx-auto text-center"> <h1 className="text-5xl font-bold mb-12 text-gray-800">Products & Services</h1> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> <div className="card bg-gray-50 shadow-xl p-6 rounded-lg hover:scale-105 transition duration-300"> <FaHandshake className="text-4xl text-yellow-500 mb-4 mx-auto" /> <h3 className="text-2xl font-semibold mb-2">Consulting</h3> <p className="text-gray-600">Expert advice in civil works, project management, and construction solutions.</p> </div> <div className="card bg-gray-50 shadow-xl p-6 rounded-lg hover:scale-105 transition duration-300"> <FaTools className="text-4xl text-green-500 mb-4 mx-auto" /> <h3 className="text-2xl font-semibold mb-2">Civil & Construction</h3> <p className="text-gray-600">Comprehensive construction services for residential and commercial projects.</p> </div> <div className="card bg-gray-50 shadow-xl p-6 rounded-lg hover:scale-105 transition duration-300"> <FaChartLine className="text-4xl text-blue-500 mb-4 mx-auto" /> <h3 className="text-2xl font-semibold mb-2">Plant & Equipment Hire</h3> <p className="text-gray-600">State-of-the-art plant and equipment available for all types of projects.</p> </div> </div> </div> </main>
);
};

export default ProductsServices;
