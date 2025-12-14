import React from "react";

import BritsWorkshop from "../assets/Brits-FET-Campus-workshop.png";
import Capricon from "../assets/capricon.png";
import DipTank from "../assets/DIP-TANK-WITH-PROOF-PHOKENG.png";
import LetabaCollege from "../assets/Letaba-fet-college.png";
import MidoroniClinic from "../assets/midoroniclinic.png";
import WorkInProgress from "../assets/Mintirho-work-in-progress.png";

/* ============================
   FEATURED PROJECTS (CARDS)
============================ */
const projectData = [
  {
    title: "Brits FET Campus Workshop",
    description: "Construction of a new technical workshop facility.",
    client: "Brits FET College",
    contactPerson: "Steve Khumalo",
    contactNumber: "083 597 6423",
    contractAmount: "R 3 165 391",
    contractPeriod: "8 Months",
    startDate: "Jan 2007",
    scheduleCompletion: "Sept 2007",
    actualCompletion: "Sept 2007",
    status: "Completed",
    image: BritsWorkshop,
  },
  {
    title: "Capricorn FET College Campus",
    description: "Construction of a 3-storey academic building.",
    client: "Capricorn FET College",
    contactPerson: "Khathu Mahuwa & Sam Manyathela",
    contactNumber: "015 296 4570",
    contractAmount: "R 3 999 000",
    contractPeriod: "10 Months",
    startDate: "Nov 2006",
    scheduleCompletion: "Sept 2007",
    actualCompletion: "Nov 2007",
    status: "Completed",
    image: Capricon,
  },
  {
    title: "DIP Tank – Phokeng",
    description: "Construction of single-quarter residential units.",
    client: "Dept of Water Affairs and Forestry",
    contactPerson: "Grobler",
    contactNumber: "082 807 5396",
    contractAmount: "R 3 977 107",
    contractPeriod: "6 Months",
    startDate: "Aug 2008",
    scheduleCompletion: "Mar 2009",
    actualCompletion: "Mar 2009",
    status: "Completed",
    image: DipTank,
  },
  {
    title: "Letaba FET College Development",
    description: "New classrooms, laboratories, and ablution facilities.",
    client: "Letaba FET College",
    contactPerson: "Vic Osmers (Tekiniplan)",
    contactNumber: "015 307 5455",
    contractAmount: "R 1 452 030",
    contractPeriod: "6 Months",
    startDate: "Jul 2008",
    scheduleCompletion: "Feb 2009",
    actualCompletion: "Feb 2009",
    status: "Completed",
    image: LetabaCollege,
  },
  {
    title: "Midoroni Clinic",
    description: "Construction of a fully equipped public healthcare clinic.",
    client: "Department of Health",
    contactPerson: "Creswell Phasha",
    contactNumber: "079 929 7594",
    contractAmount: "R 12 551 571",
    contractPeriod: "12 Months",
    startDate: "Mar 2011",
    scheduleCompletion: "Mar 2012",
    actualCompletion: "Mar 2012",
    status: "Completed",
    image: MidoroniClinic,
  },
  {
    title: "Work in Progress",
    description: "Multiple ongoing construction and civil projects.",
    client: "Various Clients",
    contactPerson: "Project Managers",
    contactNumber: "Varies",
    contractAmount: "Varies",
    contractPeriod: "Ongoing",
    startDate: "2023",
    scheduleCompletion: "Ongoing",
    actualCompletion: "Ongoing",
    status: "Ongoing",
    image: WorkInProgress,
  },
];

/* ============================
   RECORD OF WORK EXPERIENCE
============================ */
const workExperience = [
  {
    project: "Ntshebani 200 Unit Houses",
    client: "Dept of Human Settlements",
    amount: "R 16 963 686",
    period: "24 Months",
    start: "Nov 2014",
    completion: "Jun 2016",
  },
  {
    project: "990 Pipeline",
    client: "Lepelle Northern Water",
    amount: "R 30 979 890",
    period: "24 Months",
    start: "Nov 2018",
    completion: "Aug 2020",
  },
  {
    project: "N2 – Sidbury Regravelling",
    client: "COEGA",
    amount: "R 32 850 000",
    period: "22 Months",
    start: "Nov 2017",
    completion: "Jul 2019",
  },
  {
    project: "Primary School Construction",
    client: "Coega Development Corporation",
    amount: "R 15 855 000",
    period: "12 Months",
    start: "Mar 2013",
    completion: "Nov 2014",
  },
  {
    project: "Polokwane Place of Safety",
    client: "Public Works",
    amount: "R 10 274 760",
    period: "10 Months",
    start: "Oct 2008",
    completion: "Sept 2009",
  },
];

const Projects = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 px-6 py-20">

      {/* PAGE HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Our Projects & Work Experience
        </h1>
        <p className="text-gray-600 text-lg max-w-4xl mx-auto">
          Below is a selection of completed and ongoing projects that demonstrate
          Mintirho Business Enterprises’ proven capability, financial capacity,
          and commitment to quality delivery across South Africa.
        </p>
      </div>

      {/* PROJECT CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl overflow-hidden hover:scale-105 transition duration-500"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-3">{project.description}</p>

              <p><strong>Client:</strong> {project.client}</p>
              <p><strong>Contract Value:</strong> {project.contractAmount}</p>
              <p><strong>Period:</strong> {project.contractPeriod}</p>

              <span
                className={`inline-block mt-4 px-4 py-1 rounded-full text-sm font-semibold ${
                  project.status === "Ongoing"
                    ? "bg-yellow-200 text-yellow-800"
                    : "bg-green-200 text-green-800"
                }`}
              >
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* RECORD OF WORK EXPERIENCE TABLE */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-xl p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Record of Work Experience
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-3 text-left">Project</th>
                <th className="p-3 text-left">Client</th>
                <th className="p-3 text-left">Contract Amount</th>
                <th className="p-3 text-left">Contract Period</th>
                <th className="p-3 text-left">Start Date</th>
                <th className="p-3 text-left">Completion Date</th>
              </tr>
            </thead>
            <tbody>
              {workExperience.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="p-3">{item.project}</td>
                  <td className="p-3">{item.client}</td>
                  <td className="p-3">{item.amount}</td>
                  <td className="p-3">{item.period}</td>
                  <td className="p-3">{item.start}</td>
                  <td className="p-3">{item.completion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Projects;
