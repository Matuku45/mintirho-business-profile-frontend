import React from "react";
import { FaUserTie, FaUsers } from "react-icons/fa";

const Management = () => {
return ( <main className="min-h-screen bg-gray-50 px-6 py-20"> <div className="max-w-6xl mx-auto text-center"> <h1 className="text-5xl font-bold mb-10 text-gray-800">Management Team</h1> <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> <div className="card bg-white shadow-xl rounded-lg p-6"> <FaUserTie className="text-6xl text-blue-700 mb-4 mx-auto" /> <h3 className="text-2xl font-bold mb-2">Thabiso Mapoulo</h3> <p className="text-gray-600">CEO & Founder</p> </div> <div className="card bg-white shadow-xl rounded-lg p-6"> <FaUsers className="text-6xl text-green-500 mb-4 mx-auto" /> <h3 className="text-2xl font-bold mb-2">Management Team</h3> <p className="text-gray-600">Experienced professionals in civil, construction, and consulting sectors.</p> </div> </div> </div> </main>
);
};

export default Management;
