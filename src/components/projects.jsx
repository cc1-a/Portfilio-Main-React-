import React from 'react';
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Portfolio",
        description: "My First Portfolio",
        image: "/projects/project1.png",
        tags: ["React", "TailwindCSS"],
        demoUrl: "#home",
        githubUrl: "https://github.com/cc1-a/Portfilio-Main-React-",
    },
        {
        id: 2,
        title: "Google Sheet Automation",
        description: "Using an API(Gspread) it updates the googlesheet of a school hockey team.

            Username: username
            Password: password
            ",
        image: "/projects/project2.png",
        tags: ["Flask", "Google Api"],
        demoUrl: "https://dshockey.vercel.app/",
        githubUrl: "https://dshockey.vercel.app/",
    }
];

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                    Featured<span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="px-2 py-1 border text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a 
                                            href={project.demoUrl} 
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a 
                                            href={project.githubUrl} 
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                        href="https://github.com/cc1-a/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
};
