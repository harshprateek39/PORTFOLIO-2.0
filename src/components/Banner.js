import React, { useRef } from 'react';
import Image from "../assets/avatar.svg"
import Graph from "../assets/graph.png"
import image from "../assets/figma3.png";
import {FaGithub,FaYoutube, Fadribbble} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';

import { motion, AnimatePresence, easeInOut, easeIn, spring, useScroll } from 'framer-motion';
import {fadeIn} from "../variants"


const Banner = () => {
  const ref = useRef(null);
  
  return<AnimatePresence> <motion.section initial={{ x:-100 ,opacity:0}} whileInView={{ x:0, opacity:1}}  transition={{  duration: 1, staggerChildren:0.5 ,delayChildren:1 }}   className='   min-h-screen md:pl-14 md:grid flex flex-col gap-5 grid-flow-row md:grid-cols-2 gap-1 grid-cols-1 md:pr-14  ' id='home' >
   <div className=' lg:p-28 lg:h-auto h-[80%] flex      justify-center items-center   '>
   <motion.img  className=' lg:w-full h-full  brightness-75  aspect-square object-cover  ' initial={{scale:1, rotateZ:0  }}  whileHover={{  scale:1,   }}  src={image} alt=''/>
    </div>
    
    <motion.div  transition={{ delayChildren:10 ,staggerChildren:1}} className='  flex  flex-col justify-center  md:items-start  pl-3 md:pr-32'>
     <motion.h1 className='  py-2  ' initial={{scale:0 , rotateZ:-0}} whileInView={{ scale:1 ,  rotateZ:-2}} viewport={{once:true}}  transition={{duration:1, delay:1 , type: "spring" ,damping:5}} >Hey !!</motion.h1>
     <motion.h2 ref={ref} initial={{opacity:[0,0] , y:[20,20]}} whileInView={{ opacity:[0,1] , y:[20,0]}} viewport={{once:true}} transition={{duration:0.2  ,delay:1.3 ,type:"spring", damping:5 ,stiffness:100, }} className=' text-4xl font-semibold'> Harsh Prateek <motion.span className=' text-blue-400 text-xl '  >Here</motion.span></motion.h2>
     <motion.h3  initial={{x:300, opacity:0}} whileInView={{x:0, opacity:1, rotateZ:-2}} viewport={{once:true}} transition={{  duration:1, delay:1.8,type:"spring", damping:10 ,stiffness:100, }} className=' lg:text-2xl p-1 '>From front-end finesse to back-end brilliance, I'm the full stack developer who crafts digital
     masterpieces and eats bugs for  
     breakfast. I speak JavaScript, HTML, and CSS  
      fluently, but my most fluent language is emoji.</motion.h3> 

    </motion.div>
       
  </motion.section></AnimatePresence>;
};

export default Banner;
