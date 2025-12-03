import React from "react";
import { FaCogs, FaTruck, FaHammer } from "react-icons/fa";

const equipmentList = [
{ name: "Excavators", icon: <FaCogs className="text-4xl text-blue-700 mx-auto mb-2" /> },
{ name: "Dump Trucks", icon: <FaTruck className="text-4xl text-green-600 mx-auto mb-2" /> },
{ name: "Concrete Mixers", icon: <FaHammer className="text-4xl text-yellow-500 mx-auto mb-2" /> },
];

const Equipment = () => {
return ( <main className="min-h-screen bg-white px-6 py-20"> <div className="max-w-6xl mx-auto text-center"> <h1 className="text-5xl font-bold mb-12 text-gray-800">Our Equipment</h1> <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{equipmentList.map((equipment, index) => ( <div key={index} className="card bg-gray-50 shadow-xl p-6 rounded-lg hover:scale-105 transition duration-300">
{equipment.icon} <h3 className="text-2xl font-semibold mb-2 text-gray-800">{equipment.name}</h3> <p className="text-gray-600">High-quality equipment ready for your construction needs.</p> </div>
))} </div> </div> </main>
);
};

export default Equipment;
