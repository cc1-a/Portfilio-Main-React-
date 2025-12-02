import React from 'react';
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects=[
    {
        id:1,
        title:"Portfolio",
        descroption:"My First Portfolio",
        image:"https://placehold.co/600x400/1e293b/ffffff?text=Portfolio+Site",
        tags:["React","TailwindCSS",],
        demoUrl:"#home",
        githubUrl:"https://github.com/cc1-a/Portfilio-Main-React-",
    },
    {
        id:2,
        title:"Attendance & Payment Checking",
        descroption:"An app for the school hockey team to manage player rosters and schedules.username: username psswd: password to view",
        image:"https://placehold.co/600x400/22c55e/ffffff?text=Hockey+App",
        tags:["Flask","Google Sheet API","TailwindCSS",],
        demoUrl:"https://dshockey.vercel.app/",
        githubUrl:"https://github.com/cc1-a/donz_hockey_app_attendace_checker",
    }
];

export default function App() {
    return (
        <div className="min-h-screen bg-gray-900 font-inter">
            <section id="projects" className="py-24 px-4 relative min-h-screen text-white">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGZpbGw9IiNmZmYiPgogICAgICAgICAgICA8cGF0aCBkPSJNNCA2YzEuNjU3IDAgMyAxLjM0MyAzIDMgMCAxLjY1Ny0xLjM0MyAzLTMgMy0xLjY1NyAwLTMtMS4zNDMtMy0zIDAtMS42NTcgMS4zNDMtMyAzLTMiIG9wYWNpdHk9Ii4xIi8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNzMgMTc1YzEuNjU3IDAgMyAxLjM0MyAzIDMgMCAxLjY1Ny0xLjM0MyAzLTMgMy0xLjY1NyAwLTMtMS4zNDMtMy0zIDAtMS42NTcgMS4zNDMtMyAzLTMiIG9wYWNpdHk9Ii4wOCIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMjEgMTg1YzEuNjU3IDAgMyAxLjM0MyAzIDMgMCAxLjY1Ny0xLjM0MyAzLTMgMy0xLjY1NyAwLTMtMS4zNDMtMy0zIDAtMS42NTcgMS4zNDMtMyAzLTMiIG9wYWNpdHk9Ii4wNSIvPgogICAgICAgICAgICA8cGF0aCBkPSJNODIgNDRjLjg3IDAgMS41Ljc2IDEuNSAxLjcgMCAuOTQtLjYzIDEuNy0xLjUgMS43LS44NyAwLTEuNS0uNzYtMS41LTEuNyAwLS45NC42My0xLjcgMS41LTEuNyIgb3BhY2l0eT0iLjIiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=')] bg-repeat bg-center"></div>
                </div>
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10"></div>
                
                <div className="container mx-auto max-w-5xl z-20 relative">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center tracking-tight">Featured<span className="text-green-400"> Projects</span></h2>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Here are some of my recent projects.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project,key)=>(
                            <div key={key} className="group bg-gray-800 border border-gray-700/50 rounded-xl overflow-hidden shadow-xl transition-all duration-300 transform hover:shadow-green-500/30 hover:-translate-y-1">
                                
                                <div className="h-48 overflow-hidden bg-gray-700">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/374151/ffffff?text=Image+Load+Error"; }}
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, tagIndex)=>(
                                            <span key={tagIndex} className="px-3 py-1 bg-green-900/40 text-green-300 text-xs font-semibold rounded-full border border-green-700">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-xl font-bold mb-1 tracking-tight">{project.title}</h3>
                                    
                                    <p 
                                        className="text-gray-400 text-sm mb-4"
                                        dangerouslySetInnerHTML={{ __html: project.descroption }}
                                    />
                                    
                                    <div className="flex justify-start items-center">
                                        <div className="flex space-x-4">
                                            <a 
                                                href={project.demoUrl} 
                                                className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-1 group/link" 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Demo <ExternalLink size={18} className="transition-transform group-hover/link:-translate-y-0.5"/>
                                            </a>
                                            <a 
                                                href={project.githubUrl}
                                                className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-1 group/link" 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Code <Github size={18} className="transition-transform group-hover/link:scale-110"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <a 
                            className="w-fit inline-flex items-center mx-auto gap-2 py-3 px-6 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 font-semibold text-lg shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70 transform hover:scale-[1.02]" 
                            href="https://github.com/cc1-a/" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Check My Github <ArrowRight size={18}/>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
