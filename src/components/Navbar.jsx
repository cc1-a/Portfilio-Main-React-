import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const navItems=[
    {name:"Home",href:"#home"},
    {name:"About",href:"#about"},
    {name:"Projects",href:"#projects"},
    {name:"Contact Me",href:"#contact"},
]

export const Navbar=()=>{

    const [isScrolled,setIsScrolled]=useState(false)
    const [isMenuOpen,setIsMenuOpen]=useState(false)


    useEffect(()=>{
        const handleScroll=()=>{
            setIsScrolled(window.screenY>10)
        }
        window.addEventListener("scroll",handleScroll)
        return()=>window.removeEventListener("scroll",handleScroll)
    },[])
    



    return <nav className={cn("fixed w-full z-40 transition-all duration-300",
        isScrolled? "py-3 bg-background/80 backdrop-blur-md shadow-xs":"py-5"
    )}>

        <div className="container flex items-center justify-between">
            <a className="text-xl font-bold text-primary flex items-center" href="#home">
                <span className="relative z-10">
                    <span className="text-glow text-foreground">Amodh Gunwaradana</span> Portfilio
                </span>
            </a>

            {/* Desktop part */}

            <div className="hidden md:flex space-x-8">{navItems.map((item,key)=>(
                <a className="text-foreground/80 hover:text-primary transition-colors duration-300" key={key} href={item.href} >{item.name}</a>
            ))}
            </div>



            {/* Mobile part */}

            <button className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen? "Close Menu":"Open Menu"}

             onClick={()=> setIsMenuOpen((prev)=>!prev)}>

                {""}

                {isMenuOpen? <X size={24}/>:<Menu size={24}/>}

            </button>

            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col justify-center","transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"
            )}>

            <div className="flex flex-col space-y-8 text-xl">{navItems.map((item,key)=>(
                <a className="text-foreground/80 hover:text-primary transition-colors duration-300"
                 key={key}
                 href={item.href} 
                 onClick={()=>setIsMenuOpen(false)}
                 >{item.name}</a>
            ))}
            </div>
            </div>


        </div>
    </nav>
}