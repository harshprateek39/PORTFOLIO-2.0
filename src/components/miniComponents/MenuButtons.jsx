import React, { useState } from 'react'
import { Link } from 'react-scroll';
 import { motion, AnimatePresence } from 'framer-motion';
const MenuButtons = ( {name , icon , id  ,setterFunction, activeElement}) => {
    
  return (
    <Link to={id}   activeClass='active' onMouseEnter={()=>{setterFunction(id); }} onMouseLeave={()=>{ setterFunction("")}} smooth={true} spy={true}  className=' relative cursor-pointer w-[30px] h-[30px] flex items-center justify-center m-0  '>
     {icon}<AnimatePresence>  {
      (id==activeElement)?<motion.h1 id='app'   initial={{x:0, y:10 , opacity:0, scale:0 }}  animate={{x:[0,0] , y:0, opacity:[1,1] , scale:[1,1] }}  exit={{  opacity:[1,0],x:[5,0] ,scale:[1,0] } } transition={{duration:0.2}}    className=' absolute md:left-full md:top-1 h-6 bg-  top-full md:text-base text-xs bottom-full text-stone-50  drop-shadow-2xl    rounded-tr-lg rounded-br-lg pr-1 '>{name}</motion.h1>:""}</AnimatePresence> 
     </Link>
  )
}  

export default MenuButtons;