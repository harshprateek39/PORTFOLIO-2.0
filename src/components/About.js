import React, { useState ,useRef} from 'react';
import {easeInOut, motion ,useScroll, useSpring, useTransform} from "framer-motion";
import image from "../assets/profile2.jpg";
const About = () => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
     {target:ref,
      offset:["start end ", "0.3 1"]
    }
    );
    
    
    const scale = useTransform(scrollYProgress, [0 ,1], [0.8, 1]);
    const scaleX= useSpring(scale, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

  const [skills,setSkills]=useState(["C++, "])
  return <motion.div style={{scaleX}} ref={ref} initial={{  opacity:0}} whileInView={{   opacity:1 }}  transition={{  delay:0.4}} className=' scroll-m-0 snap-start min-h-screen md:pl-20 grid grid-flow-row md:grid-cols-2 gap-1 grid-cols-1 md:pr-20 md:pt-14 md:pb-14' id='about'>
  <div className=' flex flex-col '>
  <div className=' flex justify-start items-baseline gap-4'>
  <motion.div initial={{  opacity:0, y:10}} whileInView={{  opacity:[0,1] , y:[10,0]}} transition={{duration:0.3, delay:0.5}} viewport={{once:true}}   className='  whitespace-nowrap text-slate-200 font-semibold text-3xl'>About Me</motion.div>
  <motion.div initial={{scaleX:0 }} whileInView={{scaleX:1 }} viewport={{once:true}}   transition={{ duration:0.3, type:easeInOut, delay:0.7}} className=' bg-slate-200 w-full h-0.5 m-0 p-0 origin-left  rounded-full '></motion.div>
  </div>
  <div className=' md:pt-16  md:w-4/5 self-end'>
  Greetings! I'm Harsh Prateek, a Full Stack Developer with a robust foundation in Data Structures and Algorithms (DSA), 
  currently pursuing my education at Lovely Professional University(2020-2024).<br></br><br></br>
   With a commendable CGPA of 7.79, I am driven by a dual passion for comprehensive web development and efficient algorithmic solutions.<br/><br></br>
   In the vast orchestra of web development, I wield the MERN baton with finesse. From MongoDB's flexible databases to Express.js's seamless server-side scripting,
    React.js's interactive front-end, and Node.js's
     lightning-fast backend, I orchestrate the perfect harmony of technology.I weave middleware spells, sculpting robust APIs and ensuring smooth communication
      between the frontend and backend. Express.js isn't just a tool ,it's my secret sauce.
  </div>
  </div>
  <div className=' md:pt-16 flex flex-col items-center      '>
    <img className='w-1/2 rounded-md shadow-md hover:shadow-2xl grayscale hover:grayscale-0 ring-0 ring-offset-black hover:ring-offset-2 ring-black  hover:shadow-black transition delay-100 ease-linear' src={image} alt=''/>
  </div>
     </motion.div>;
};

export default About;
