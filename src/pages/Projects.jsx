import React from "react";
import BritsWorkshop from '../assets/Brits-FET-Campus-workshop.png';
import Capricon from '../assets/capricon.png';
import DipTank from '../assets/DIP-TANK-WITH-PROOF-PHOKENG.png';
import LetabaCollege from '../assets/Letaba-fet-college.png';
import MidoroniClinic from '../assets/midoroniclinic.png';
import WorkInProgress from '../assets/Mintirho-work-in-progress.png';

const projectData = [
{ src: BritsWorkshop, title: 'Brits FET Campus Workshop' },
{ src: Capricon, title: 'Capricon Construction Site' },
{ src: DipTank, title: 'DIP TANK Proof Phokeng' },
{ src: LetabaCollege, title: 'Letaba FET College Project' },
{ src: MidoroniClinic, title: 'Midoroni Clinic Development' },
{ src: WorkInProgress, title: 'Current Work in Progress' },
];

const Projects = () => {
return ( <main className="min-h-screen bg-gray-50 px-6 py-20"> <div className="max-w-7xl mx-auto text-center"> <h1 className="text-5xl font-bold mb-12 text-gray-800">Our Projects</h1> <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{projectData.map((project, index) => ( <div key={index} className="card bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transition duration-300"> <img src={project.src} alt={project.title} className="w-full h-64 object-cover" /> <div className="p-6"> <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3> </div> </div>
))} </div> </div> </main>
);
};

export default Projects;
