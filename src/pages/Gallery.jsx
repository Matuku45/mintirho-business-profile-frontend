import React from "react";
import BritsWorkshop from '../assets/Brits-FET-Campus-workshop.png';
import Capricon from '../assets/capricon.png';
import DipTank from '../assets/DIP-TANK-WITH-PROOF-PHOKENG.png';
import LetabaCollege from '../assets/Letaba-fet-college.png';
import MidoroniClinic from '../assets/midoroniclinic.png';
import WorkInProgress from '../assets/Mintirho-work-in-progress.png';

const galleryImages = [
{ src: BritsWorkshop, alt: 'Brits FET Campus Workshop' },
{ src: Capricon, alt: 'Capricon Project Site' },
{ src: DipTank, alt: 'DIP TANK Proof Phokeng' },
{ src: LetabaCollege, alt: 'Letaba FET College Project' },
{ src: MidoroniClinic, alt: 'Midoroni Clinic Development' },
{ src: WorkInProgress, alt: 'Current Work in Progress' },
];

const Gallery = () => {
return ( <main className="min-h-screen bg-gray-50 px-6 py-20"> <div className="max-w-7xl mx-auto text-center"> <h1 className="text-5xl font-bold mb-12 text-gray-800">Gallery</h1> <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{galleryImages.map((image, index) => ( <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition duration-300"> <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" /> </div>
))} </div> </div> </main>
);
};

export default Gallery;
