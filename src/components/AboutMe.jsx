import { Code, MonitorPlay ,Feather} from "lucide-react"


export const AboutMe=()=>{
    return <section id="about"className="py-24 px-4 relative">
        {""}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About<span className="text-primary"> ME</span>
            </h2>
{/* section 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Code, Create, Design: The Full-Stack Maker</h3>
                    <p className="text-muted-foreground">
                       I am a driven 19-year-old and recent Edexcel A-Level graduate with a strong background in creative communication. I have significant experience in maintaining and creating compelling posters and videos for various organizations, including school Interact clubs and the Colombo Gavel Club. Furthermore, I own a business for which I actively create content. I am currently seeking professional work experience to apply my leadership and media skills. 
                    </p>
                    <p className="text-muted-foreground">
                        I bring digital projects to life through code and creativity. My core development stack includes React.js, alongside backend frameworks like Flask and Django, with additional proficiency in Flutter and PHP. Creatively, I master video production with Premiere Pro and After Effects, and deliver polished graphic design using Photoshop and Canva.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {""}
                            Get In Touch</a>
                        <a href="#contact" className="px-6 py-2 rounded-full border-primary text-primary hover:bg-primary transition-colors duration-300 hover:text-white">Download CV</a>
                    </div>
                </div>
                {/* section 2 */}
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10"><Code className="h-6 w-6 text-primary" /></div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg">Web Development</h4>
                                <p className="font-muted-foreground">Creating responsive websites and web applications with modern frameworks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10"><MonitorPlay className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg">Video Editing</h4>
                                <p className="font-muted-foreground">Crafting professional video content and dynamic motion graphics using Adobe Premiere Pro and After Effects.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10"><Feather className="h-6 w-6 text-primary" /></div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg">Graphic Design</h4>
                                <p className="font-muted-foreground">Designing high-quality visuals, from social media assets to intricate graphics, with Adobe Photoshop and Canva.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    </section>
}