import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("");

        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        try {
            // Send data to our new Vercel API file
            const response = await fetch('/api/whatsapp', {
                method: 'POST',
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                setStatus("✅ Message sent to WhatsApp!");
                e.target.reset();
            } else {
                console.error("API Error:", result);
                setStatus(`❌ Error: ${result.error}`);
            }

        } catch (error) {
            console.error("Fetch Error:", error);
            setStatus("❌ Failed to send. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary">Touch</span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project idea in mind or interested in a collaboration? I'm always open to discussing new opportunities. Feel free to connect with me to start the conversation!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium"> Email</h4>
                                    <a href="mailto:amodhgunawardana@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">amodhgunawardana@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium"> Phone</h4>
                                    <a href="tel:+94772223323" className="text-muted-foreground hover:text-primary transition-colors">077 222 3323</a>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium"> Location</h4>
                                    <span className="text-muted-foreground">Colombo, Sri Lanka</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/amodh-gunawardana-54734333a/">
                                    <Linkedin />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/amodh.official/">
                                    <Instagram />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/profile.php?id=61553986731546">
                                    <Facebook />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Your Name..."
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="example@gmail.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about"
                                    required
                                />
                            </div>
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="cosmic-button w-full flex items-center justify-between px-6 disabled:opacity-50 cursor-pointer"
                            >
                                <span className="flex-grow text-center">
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </span>
                                <Send size={16} />
                            </button>
                            {status && <p className="text-center text-sm mt-4 font-bold text-primary">{status}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
