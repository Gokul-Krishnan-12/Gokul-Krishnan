
import Character from "@/utils/Character";
import SectionHeading from "./SectionHeading";
const AboutBanner = () => {
 const paragraph="Been coding since 2020, and the search for that sneaky semicolon continues!";
  return (
    <div className='bg-black min-h-screen  relative  flex items-center justify-center rounded-t-3xl'>
        <div className="flex flex-col justify-center items-center w-full h-full my-20">
        <SectionHeading heading="About Me"/>
          <Character className="nameText--aboutText" paragraph={paragraph} />
          </div>
 
 </div>
  )
};

export default AboutBanner;
