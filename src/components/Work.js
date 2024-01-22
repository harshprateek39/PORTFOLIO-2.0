import {
  AnimatePresence,
  easeInOut,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { GiClick } from "react-icons/gi";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import React, { useState ,useRef, useEffect } from "react";
import {data3} from "../assets/data" ;
import { BsGithub } from "react-icons/bs";
import { useMediaQuery } from 'react-responsive'
const Work = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const data2 = [
    {
      button: "Agumentik",
      title: "Agumentik Group of companies",
      description:
        "This is a website for a company which provides services like web development, app development, digital marketing, etc. This website is made using React and Tailwind CSS.",
      durations: "10-12-23 - 22-12-29",
    },
    {
      button: "Cipher",
      title: "Cipher Schools",
      describe: " just testing",
      durations: "10-12-23 - 22-12-29",
    },
    {
      button: "Cipher",
      title: "Cipher Schools",
      describe: " just testing",
      durations: "10-12-23 - 22-12-29",
    },
    {
      button: "Cipher",
      title: "Cipher Schools",
      describe: " just testing",
      durations: "10-12-23 - 22-12-29",
    },
    {
      button: "Cipher",
      title: "Cipher Schools",
      describe: " just testing",
      durations: "10-12-23 - 22-12-29",
    },
    {
      button: "Cipher",
      title: "Cipher Schools",
      describe: " just testing",
      durations: "10-12-23 - 22-12-29",
    },
    {
      button: "Cipher",
      title: "Cipher Schools",
      describe: " just testing",
      durations: "10-12-23 - 22-12-29",
    },
  ];
  
  const ref2 = useRef(null);
  const { scrollYProgress } = useScroll(
     {target:ref2,
      offset:["start end", "0.3 1"],
      
    }
    );
    const scale = useTransform(scrollYProgress, [0 ,1], [0.8, 1]);
    const scaleX= useSpring(scale, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
  const [hoverControl, setHoverControl] = useState({ value: -1, active: 0 });
   
  const [index, setIndex] = useState(0);
  const [ projectIndex, setProjectIndex] = useState(-1);
  const x=document.getElementById("project1");
  useEffect(() => {
    console.log(scale.get(scrollYProgress));
    if(scale.get(scale)===1){
      x.scrollBy({ top:500, behavior:"smooth"})
    }
  }, [scale.get(scale)])

  return (
    <AnimatePresence>
      <motion.div ref={ref2}  style={{scaleX}}
        className="  min-h-screen md:pl-24   lg:grid-flow-row lg:grid-cols-7 gap-4 lg:gap-1 flex flex-col lg:grid lg:pr-24 lg:pt-14 lg:pb-14 overflow-visible mx-2 "
        id="project"
      >
        <motion.div initial={{ x:-10}} whileInView={{ x:0}} transition={{ type:"spring", duration:0.5, delay:0.2}} className=" flex flex-col  overflow-visible  md:col-span-3  ">
          <div className=" flex justify-start items-baseline gap-4 pb-8  ">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: [0, 1], y: [10, 0] }}
              transition={{ duration: 0.3, delay: 0.5 }}
              viewport={{ once: true }}
              className="  whitespace-nowrap text-slate-200 my-4 lg:my-1 font-semibold text-3xl"
            >
              Experience
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, type: easeInOut, delay: 0.7 }}
              className=" bg-slate-200 w-full h-0.5 m-0 p-0 origin-left  rounded-full "
            ></motion.div>
          </div>
          <div className=" overflow-x-auto gap-1   flex overflow-visible mb-5 ">
            {data2.map((item, indexx) => {
              return (
                <button
                  onMouseEnter={() =>
                    setHoverControl({ value: indexx, active: 1 })
                  }
                  onMouseLeave={() => setHoverControl({ value: -1, active: 0 })}
                  onClick={() => {
                    setIndex(indexx);
                  }}
                  className=" bg-black/20 hover:bg-black/30 backdrop-blur-2xl px-2 flex-col flex"
                >
                  {item.button}
                  {index === indexx && (
                    <motion.div key={hoverControl.value} className=" w-full h-0.5   bg-indigo-600"></motion.div>
                  )}
                  {hoverControl.value === indexx &&
                    hoverControl.active &&
                    hoverControl.value !== index && (
                      <AnimatePresence  exitBeforeEnter ><motion.div
                      key={hoverControl.value}
                        className=" w-full h-0.5  bg-indigo-600 origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: 0.5, type: "spring" }}
                      ></motion.div></AnimatePresence>
                    )}
                </button>
              );
            })}
          </div>
          <AnimatePresence exitBeforeEnter  >
          <motion.div key={index} initial={{opacity:0}} animate={{opacity:1}} exit={{ opacity:0}} transition={{ duration:0.2}} className=" flex flex-col gap-1  md:pl-4 grow justify-start outline-dashed outline-1 rounded-md  pt-2 ">
            <motion.h1  className=" text-2xl font-semibold ">{data2[index].title} </motion.h1>
            <p className=" grow md:pl-5 ">{data2[index].description} </p>
            <p className=" self-end px-4 ">
              {data2[index].durations}
            </p>
          </motion.div></AnimatePresence>
        </motion.div>

   {/* project section */}

        <motion.div initial={{ x:10}} whileInView={{ x:0}} transition={{ type:"spring", duration:0.5, delay:0.2}} className=" md:col-span-4    ">
          <div className=" flex justify-end items-baseline gap-4 lg:pl-4 ">
          <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
             
              transition={{ duration: 0.3, type: easeInOut, delay: 0.7  }}
              className=" bg-slate-200 w-full h-0.5 m-0 p-0 origin-right  rounded-full "
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: [0, 1], y: [10, 0] }}
              transition={{ duration: 0.3, delay: 0.5 }}
              viewport={{ once: true }}
              
              className="  whitespace-nowrap text-slate-200  lg:my-1 my-8 font-semibold text-3xl"
            >
              Projects
            </motion.div>
           
          </div>
          <motion.div initial={ { scrollBy:0 }} id="project1"  whileInView={{ scrollBy:300 }}   className=" scroll-smooth flex md:flex-col snap-y gap-2 md:overflow-y-scroll overflow-y-clip overflow-x-scroll  md:overflow-x-clip  md:max-h-[80vh] lg:pl-4  " 
          transition= {{
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
          }}>
          {!isTabletOrMobile?data3.map((data,index)=>{return (
            <motion.div  key={index} initial={{ opacity:0,  y:20 ,scaleX:0.7}}  onMouseEnter={()=>setProjectIndex(index)} onMouseLeave={()=>setProjectIndex(-1)}   whileInView={{opacity:1 ,y:0 ,scaleX:1 } } transition={{duration:0.5, type:"spring"}} className=" w-[80vw] h-[40vh] md:h-auto  md:w-full drop-shadow-2xl shadow-inner px-2 shadow-blue-600/25  bg-black/20 rounded-md flex flex-col">
              <div className=" flex justify-end"> <h1 className=" px-2 py-2 font-semibold text-xl   "> {data.title}</h1></div> 
              <div className=" grid grid-flow-col  grid-cols-5 ">
                <div className="  col-span-3">{data.description}</div>
                 <motion.div className="  rounded-md col-span-2 overflow-hidden"><motion.img initial={{ scale:1 }} whileHover={{scale:1.2,  rotateZ:5 }} className=" rounded-md" src={data.image}></motion.img></motion.div> 
              </div>
              <div  className="  flex justify-between items-center">
                <div className="  flex gap-2 items-center  ">
                  {data.tech.map((item)=>{return (<div className=" text-base flex  items-center text-indigo-500 "><VscDebugBreakpointLog />{item}</div>)})}
                </div>
                <div className="  flex gap-4 py-2 "> 
                 <a href={data.link}> <button className=" flex gap-1 items-center text-xs p-1 bg-blue-600/25 hover:bg-blue-600/50 hover:scale-105 transition duration-100 rounded-full "> <GiClick  className=" text-2xl" />
</button></a>
                <a href={data.github}>  <button> <BsGithub className=" text-3xl bg-blue-600/25 p-1 hover:bg-blue-600/50 hover:scale-105 duration-100 transition rounded-full " /></button></a>
                </div>

              </div>
            </motion.div>
          )}):data3.map((data,index)=>{return (
            <motion.div  key={index} initial={{ opacity:0,  y:20 ,scaleX:0.7}}  onMouseEnter={()=>setProjectIndex(index)} onMouseLeave={()=>setProjectIndex(-1)}   whileInView={{opacity:1 ,y:0 ,scaleX:1 } } transition={{duration:0.5, type:"spring"}} className="  my-4  min-w-[95vw]   max-w-[96vw]  drop-shadow-2xl shadow-inner px-2 shadow-blue-600/25  bg-black/20 rounded-md gap-4 flex flex-col ">
            <h1 className=" text-right font-semibold">{data.title}</h1>
            
              <img className=" w-[100%] h-[20vh] object-cover  " src={data.image}/>
              <h1 className=" text-xm">{data.description}</h1>
              <div className=" flex flex-wrap gap-3">
              {data.tech.map((data)=>
                <div className=" text-base flex  items-center text-indigo-500 "><VscDebugBreakpointLog />{data}</div>
                
              )}
              
              </div>
              <div className="  flex gap-4 py-2 justify-end "> 
                 <a href={data.link}> <button className=" flex gap-1 items-center text-xs p-1 bg-blue-600/25 hover:bg-blue-600/50 hover:scale-105 transition duration-100 rounded-full "> <GiClick  className=" text-2xl" />
</button></a>
                <a href={data.github}>  <button> <BsGithub className=" text-3xl bg-blue-600/25 p-1 hover:bg-blue-600/50 hover:scale-105 duration-100 transition rounded-full " /></button></a>
                </div>
         
            </motion.div>)})
            }
           
           </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Work;
