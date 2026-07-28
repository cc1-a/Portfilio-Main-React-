import React, { useRef } from 'react';
import { ArrowRight, ExternalLink, Github, MessageCircle, LayoutTemplate } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { 
    id: 1, 
    title: "Syncravix Automation Engine", 
    demoUrl: "https://www.syncravix.com/",
    description: "A robust, event-driven automation engine built to orchestrate complex enterprise workflows. Integrates smart routing, automated data processing, and custom AI agents to replace manual operational bottlenecks."
  },
  { 
    id: 2, 
    title: "Paper Genius", 
    demoUrl: "https://papergenius.vercel.app",
    description: "An intelligent document processing application leveraging Large Language Models (LLMs) and NLP. It automates the extraction, summarization, and structural validation of unstructured text documents."
  },
  { 
    id: 3, 
    title: "Vera", 
    demoUrl: "https://vera-two.vercel.app",
    description: "A conversational AI assistant platform utilizing advanced prompt chaining and context-aware memory to handle customer inquiries, internal knowledge base queries, and task execution."
  },
  { 
    id: 4, 
    title: "Rotaract Platform Ecosystem", 
    demoUrl: "https://rotaractcinnamongardens.org/",
    description: "A comprehensive ecosystem for organizational management. Features a highly scalable Next.js frontend and a resilient backend architecture designed to handle large-scale data and real-time member synchronization."
  },
  { 
    id: 5, 
    title: "Rotaract Intelligent Onboarding", 
    demoUrl: "https://onboarding.rotaractcinnamongardens.org/",
    description: "A frictionless, automated user onboarding application leveraging Vercel serverless edge functions to automatically verify and categorize new member data, minimizing administrative overhead."
  },
  { 
    id: 6, 
    title: "Saizen Acuity", 
    demoUrl: "https://saizen-acuity-prod.vercel.app",
    description: "A sophisticated data analytics and BI dashboard. Processes high-volume telemetry data and visualizes complex metrics in real-time for executive decision-making."
  },
  { 
    id: 7, 
    title: "Customer Portal", 
    demoUrl: "https://portal.syncravix.com",
    description: "A secure, authenticated client portal built for seamless B2B interactions, featuring role-based access control (RBAC) and automated support ticketing workflows."
  },
  { 
    id: 8, 
    title: "World Jobs", 
    demoUrl: "https://world-jobs-sandy.vercel.app",
    description: "A modern Applicant Tracking System (ATS) and job board utilizing semantic matchmaking algorithms to connect candidates with opportunities based on deep skill-profile analysis."
  },
  { 
    id: 9, 
    title: "DS Hockey", 
    demoUrl: "https://dshockey.vercel.app",
    description: "A sports analytics and team management dashboard, streamlining roster management, performance tracking, and event scheduling through automated Python/Flask backend pipelines."
  },
  { 
    id: 10, 
    title: "Coms Outlet", 
    demoUrl: "https://comsoutlet.vercel.app",
    description: "A high-throughput e-commerce platform optimized for speed and conversion. Features server-side rendering (SSR) for optimal SEO and instantaneous product load times."
  },
  { 
    id: 11, 
    title: "Eleven Wears", 
    demoUrl: "https://eleven-wears-website.vercel.app",
    description: "A modern fashion brand platform incorporating dynamic product displays and seamless checkout flows, leveraging headless commerce architecture."
  },
  { 
    id: 12, 
    title: "Psycho Parade", 
    demoUrl: "https://www.psychoparade.com",
    description: "An avant-garde e-commerce storefront with a highly interactive 3D animated UI designed to maximize user engagement and brand retention."
  },
  { 
    id: 13, 
    title: "YMS Music", 
    demoUrl: "https://yms-music.vercel.app",
    description: "A rich-media streaming application capable of handling high-bandwidth audio delivery with a responsive, app-like user interface."
  },
  { 
    id: 14, 
    title: "Galle Forts Tour", 
    demoUrl: "https://galle-forts-tour.vercel.app",
    description: "An immersive, interactive tourism experience utilizing 3D web technologies to provide virtual tours and location-based historical data."
  },
  { 
    id: 15, 
    title: "Origin Exp", 
    demoUrl: "https://originexp.vercel.app",
    description: "An interactive educational brand platform focused on experiential digital storytelling, utilizing micro-animations and seamless page transitions."
  },
  { 
    id: 16, 
    title: "Jenzu", 
    demoUrl: "https://jenzu.vercel.app",
    description: "A beautifully crafted, responsive communication interface designed with semantic HTML and modern CSS for optimal accessibility and performance."
  },
  { 
    id: 17, 
    title: "Developer Portfolio", 
    demoUrl: "https://amodhgunawardana.vercel.app",
    description: "A high-performance personal portfolio showcasing technical capabilities, project architectures, and a deep understanding of modern web standards."
  }
];

export const ProjectSection = () => {
    const containerRef = useRef(null);
    const scrollRef = useRef(null);

    useGSAP(() => {
        if (!scrollRef.current || !containerRef.current) return;
        
        const sections = gsap.utils.toArray(".project-card-wrapper");
        
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                end: () => "+=" + scrollRef.current.offsetWidth,
            }
        });
    }, { scope: containerRef });

    return (
        <section id="projects" className="py-24 relative overflow-hidden" ref={containerRef}>
            <div className="container mx-auto max-w-7xl px-4 mb-8">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
                    Featured<span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto text-lg">
                    A collection of my recent work across scalable full-stack applications, generative AI (Groq, Gemini, OpenAI), advanced RAG Architectures, Vector Databases, and modern frontend ecosystems. Scroll horizontally to explore.
                </p>
            </div>

            {/* Horizontal scroll container */}
            <div ref={scrollRef} className="flex w-max items-stretch px-4 md:px-12 py-10 h-auto">
                {projects.map((project, index) => (
                    <div key={index} className="project-card-wrapper w-[90vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 px-4 h-full">
                        <div className="group gradient-border card-hover flex flex-col h-full overflow-hidden p-0 bg-background/80 backdrop-blur-sm border border-border/50">
                            
                            {/* Project Thumbnail via iframe */}
                            <div className="h-[250px] md:h-[350px] overflow-hidden relative bg-muted/10 group-hover:bg-muted/20 transition-colors pointer-events-none">
                                {project.demoUrl ? (
                                    <iframe 
                                        src={project.demoUrl} 
                                        title={project.title} 
                                        className="absolute top-0 left-0 w-[200%] h-[200%] origin-top-left scale-50 border-none opacity-80 group-hover:opacity-100 transition-all duration-500"
                                        tabIndex="-1"
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-primary/20">
                                        <LayoutTemplate size={64} className="text-primary mb-4 opacity-40 group-hover:scale-110 transition-transform duration-500" />
                                        <span className="text-primary font-semibold tracking-widest uppercase text-sm opacity-80">Application</span>
                                    </div>
                                )}
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                                
                                <p className="text-muted-foreground text-base mb-6 whitespace-pre-line flex-grow">
                                    {project.description}
                                </p>
                                
                                {project.tags && (
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="px-3 py-1.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                
                                <div className="flex justify-start space-x-6 items-center mt-auto pt-6 border-t border-border/50">
                                    {project.demoUrl && (
                                        <a 
                                            href={project.demoUrl} 
                                            className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1.5 text-sm font-medium z-10" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink size={18}/> Live Demo
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a 
                                            href={project.githubUrl} 
                                            className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1.5 text-sm font-medium z-10" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <Github size={18}/> Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8 pb-16">
                <a 
                    className="cosmic-button w-fit flex items-center gap-2" 
                    href="https://github.com/cc1-a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Check My Github <ArrowRight size={16}/>
                </a>
                
                <a 
                    className="cosmic-button w-fit flex items-center gap-2 bg-green-500/10 text-green-500 border-green-500/30 hover:bg-green-500 hover:text-white" 
                    href="https://wa.me/94724786229" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <MessageCircle size={16}/> Let's Chat on WhatsApp
                </a>
            </div>
        </section>
    );
};

