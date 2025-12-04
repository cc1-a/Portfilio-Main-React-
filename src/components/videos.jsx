import { ArrowRight, ExternalLink, Github } from "lucide-react"

const videos=[
    {
        id:1,
        title:"Fashion Video-1",
        descroption:"Video Direction and Concept by Yehansa Suriyaarachchi, a Fashion and Marketing student at AOD. Edited by Amodh Gunawardana.",
        image:"/videos/video_1.png",
        tags:["Premier Pro"],
        demoUrl:"https://www.instagram.com/reel/DIyNlu9KQlH/",
    },
    {
        id:2,
        title:"Fashion Video-2",
        descroption:"Video Direction and Concept by Yehansa Suriyaarachchi, a Fashion and Marketing student at AOD. Edited by Amodh Gunawardana.",
        image:"/videos/video_2.png",
        tags:["DaVinci Resolve"],
        demoUrl:"https://www.instagram.com/reel/DJZfM6DyDcu/",
    },
    {
        id:3,
        title:"Fashion Video-3",
        descroption:"Video Direction and Concept by Yehansa Suriyaarachchi, a Fashion and Marketing student at AOD. Edited by Amodh Gunawardana.",
        image:"/videos/video_3.png",
        tags:["Cap Cut"],
        demoUrl:"https://www.instagram.com/reel/DJalyCTyhqZ/",
    },
    {
        id:4,
        title:"Fashion Video-4",
        descroption:"Video Direction and Concept by Yehansa Suriyaarachchi, a Fashion and Marketing student at AOD. Edited by Amodh Gunawardana.",
        image:"/videos/video_4.png",
        tags:["Cap Cut"],
        demoUrl:"https://www.instagram.com/reel/DQCZBGhkh3e/",
    },
    {
        id:5,
        title:"Interact outgoing video",
        descroption:"Video Concept and Editing by Amodh Gunawardana.",
        image:"/videos/video_5.png",
        tags:["Premier Pro"],
        demoUrl:"https://www.instagram.com/reel/C9rZ5otoovO/",
    },    {
        id:6,
        title:"Haloween Video",
        descroption:"Video Concept and Editing by Amodh Gunawardana.",
        image:"/videos/video_6.png",
        tags:["Premier Pro"],
        demoUrl:"https://www.instagram.com/p/CxKU1SFtRNZ/",
    }
]

export const VideoGraphics=()=>{
    return <section id="videos" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Featured<span className="text-primary"> Videos</span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recently edited videos.</p>

            <div className="grid grid=cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((project,key)=>(
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title}  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag)=>(
                                    <span className="px-2 py-1 border text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                                ))}
                            </div>

                        
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.descroption}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-color duration 300" target="_blank"><ExternalLink size={20}/></a>
                            </div>
                        </div>
                        </div>

                    </div>
                ))}
            </div>
            
        </div>
    </section>
}
