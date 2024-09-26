import React from "react";
import img1 from "../assets/alberto-castillo-q-mx4mSkK9zeo-unsplash.jpg"

interface HeroImageProps {
    name: string;
    location?: string;
    type?: string;
    year?: number;
}

const HeroImage: React.FC<HeroImageProps> = ({name, location, type, year}) => {
    function toTitleCase(name?: string): string {
        if (!name) return '';
        let firstChar = name.charAt(0).toUpperCase();
        let otherChars = name.slice(1).toLowerCase(); 
        return firstChar + otherChars;
    }

  return (
    <div className="relative">
      <img src={img1} className="w-screen aspect-video "/>
        {/* <span>Hello world</span>
      </img> */}
      <div className="sticky bottom-0 grid grid-cols-4 gap-4 w-full p-16">
        <div className="col-span-4 justify-self-end text-black"><h1 className="text-8xl">{name}</h1></div>
        <span className="text-3xl text-white">{toTitleCase(location)}</span>
        <span className="text-3xl col-start-3 text-white">{toTitleCase(type)}</span>
        <span className="text-3xl justify-self-end text-white">{year || ""}</span>
      </div>
    </div>
  )
}

export default HeroImage