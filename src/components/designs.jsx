import { ArrowRight, ExternalLink, Github } from "lucide-react"

const graphics=[
    {
        id:1,
        title:"Graphic-1",
        descroption:"Video Direction and Concept by Yehansa Suriyaarachchi, a Fashion and Marketing student at AOD. Edited by Amodh Gunawardana.",
        image:"/graphics/img1.jpg",
        tags:["Photoshop"],
        demoUrl:"/graphics/img1.jpg",
    },
    {
        id:2,
        title:"Graphic-2",
        descroption:"Video Direction and Concept by Yehansa Suriyaarachchi, a Fashion and Marketing student at AOD. Edited by Amodh Gunawardana.",
        image:"/graphics/img-2.png",
        tags:["Photoshop"],
        demoUrl:"/graphics/img-2.png",
    },
    {
        id:3,
        title:"Graphic-3",
        descroption:"Video Direction and Concept by Yehansa Suriyaarachchi, a Fashion and Marketing student at AOD. Edited by Amodh Gunawardana.",
        image:"/graphics/img3.png",
        tags:["Canva"],
        demoUrl:"/graphics/img3.png",
    },
    {
        id:4,
        title:"Graphic-4",
        descroption:"Video Direction and Concept by Yehansa Suriyaarachchi, a Fashion and Marketing student at AOD. Edited by Amodh Gunawardana.",
        image:"/graphics/img4.png",
        tags:["Canva"],
        demoUrl:"/graphics/img4.png",
    },
    {
        id:5,
        title:"Graphic-5",
        descroption:"Video Concept and Editing by Amodh Gunawardana.",
        image:"/graphics/img-5.png",
        tags:["Canva"],
        demoUrl:"/graphics/img-5.png",
    },
    {
        id:6,
        title:"Graphic-6",
        descroption:"Video Concept and Editing by Amodh Gunawardana.",
        image:"/graphics/img-6.png",
        tags:["Canva"],
        demoUrl:"/graphics/img-6.png",
    },    {
        id:7,
        title:"Graphic-7",
        descroption:"Video Concept and Editing by Amodh Gunawardana.",
        image:"/graphics/img7.png",
        tags:["Photoshop"],
        demoUrl:"/graphics/img7.png",
    },    {
        id:8,
        title:"Graphic-8",
        descroption:"Video Concept and Editing by Amodh Gunawardana.",
        image:"/graphics/img8.png",
        tags:["Photoshop"],
        demoUrl:"/graphics/img8.png",
    },    {
        id:9,
        title:"Graphic-9",
        descroption:"Video Concept and Editing by Amodh Gunawardana.",
        image:"/graphics/img9.png",
        tags:["Photoshop"],
        demoUrl:"/graphics/img9.png",
    },    {
        id:10,
        title:"Graphic-10",
        descroption:"Video Concept and Editing by Amodh Gunawardana.",
        image:"/graphics/img10.png",
        tags:["Photoshop"],
        demoUrl:"/graphics/img10.png",
    },    {
        id:11,
        title:"Graphic-11",
        descroption:"Video Concept and Editing by Amodh Gunawardana.",
        image:"/graphics/img11.png",
        tags:["Photoshop"],
        demoUrl:"/graphics/img11.png",

]

export const DesignGraphics=()=>{
    return <section id="graphics" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Featured<span className="text-primary"> Graphics</span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recently edited Graphics.</p>

            <div className="grid grid=cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {graphics.map((project,key)=>(
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

                        
                       
                        
                        <div className="flex justify-between items-center">
                             <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
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
