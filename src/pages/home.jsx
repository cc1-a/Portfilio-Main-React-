import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { HomeSection } from "../components/HomeSection"
import { AboutMe } from "../components/AboutMe"
import { ProjectSection } from "../components/projects"
import { ContactSection } from "../components/contact"
import { FooterSection } from "../components/footer"
import { VideoGraphics } from "../components/videos"
import { DesignGraphics } from "../components/designs"

export const Home=()=>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Toggle */}
             <ThemeToggle/>



            {/* bg effects */}
            <StarBackground/>



            {/* nav*/}

            <Navbar/>

            {/* main content */}

            <main>
                <HomeSection/>
                <AboutMe/>
                <ProjectSection/>
                <VideoGraphics/>
                <DesignGraphics/>
                <ContactSection/>
                <FooterSection/>
                
            </main>

            {/* footer */}







        </div>
}