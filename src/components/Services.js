import React, { useRef, useState } from 'react';

import { motion,easeInOut, useTransform  ,useScroll, useSpring} from 'framer-motion';

const Services = () => {

  const ref=useRef(null);
  const { scrollYProgress } = useScroll({
     target:ref,
     offset:[  "start end", "0.3 1"]
  });
 
  const scaleX= useTransform( scrollYProgress, [0 ,1], [0.5, 1]);
  const scale= useSpring(scaleX, {
    stiffness: 100,
      damping: 30,
      restDelta: 0.001
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });
  const handleChange = (e) =>{
  
    setFormData({
      ...formData, 
      [e.target.id]:e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here, for example, sending data to the server
    console.log('Form submitted with data:', formData);
  };
  return <motion.div ref={ref} initial={{ opacity:0, scaleX:0.9 }} style={{scaleX:scale}} whileInView={{ opacity:1}}  viewport={{once:true}} transition={{ delay:0.5}} className=' scroll-m-0 min-h-screen md:pl-20 grid grid-flow-row md:grid-cols-1 gap-1 grid-cols-1 md:pr-20 md:pt-14 md:pb-14 px-2 pt-5 mt-1 ' id='services'>
  <div className='  flex flex-col text-white '>
  {/* heading */}
  <div className=' flex justify-start items-baseline gap-4'>
  <motion.div initial={{scaleX:0 }} whileInView={{scaleX:1 }} viewport={{once:true}}   transition={{ duration:0.3, type:easeInOut, delay:0.7}} className=' bg-slate-200 w-full h-0.5 m-0 p-0 origin-right  rounded-full '></motion.div>
  <motion.div initial={{  opacity:0, y:10}} whileInView={{  opacity:[0,1] , y:[10,0]}} transition={{duration:0.3, delay:0.5}} viewport={{once:true}}   className='  whitespace-nowrap text-slate-200 font-semibold text-3xl'>Feel Free to Contact</motion.div>
  <motion.div initial={{scaleX:0 }} whileInView={{scaleX:1 }} viewport={{once:true}}   transition={{ duration:0.3, type:easeInOut, delay:0.7}} className=' bg-slate-200 w-full h-0.5 m-0 p-0 origin-left  rounded-full '></motion.div>
  </div>
  <div className=' scroll-m-0  md:pl-20 grid grid-flow-row md:grid-cols-2 gap-1 grid-cols-1 md:pr-20 md:pt-14 md:pb-14'>

    {/* form */}

    <form onSubmit={handleSubmit}>
  <div class="mb-5">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
    <input value={formData.name}  onChange={handleChange} type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Your Name Please' required/>
  </div>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
    <input value={formData.email} onChange={handleChange} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@etc.com"  required/>
  </div>
  <div class="mb-5">
    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
    <textarea value={formData.description} onChange={handleChange} type="text"   id="description" class="bg-gray-50 border min-h-[100px] flex border-gray-300 py-1 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  px-2.5   w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Message...' required/>
  </div>
  
  <button type="submit"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </div>
    <div className=' bg-sky-800'></div>
  </div>
  </motion.div>
  
};

export default Services;
