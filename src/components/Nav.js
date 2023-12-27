import React, { useState } from 'react';
import {BiHomeAlt,BiUser} from 'react-icons/bi'
import {BsClipboardData,BsBriefcase,BsChatSquare} from 'react-icons/bs'
import {TiContacts} from 'react-icons/ti'
import { Link } from 'react-scroll';
import {motion, AnimatePresence} from 'framer-motion';
import MenuButtons from './miniComponents/MenuButtons';
import { icons } from 'react-icons';

const Nav = () => {
  const [id, setId]=useState("");
  
  const  menuData=[
    {
      id:'home',
      name:'Home',
      icon:<BiHomeAlt/>
    },
    {
      id:'about',
      name:'About',
      icon:<BiUser/>
    },
    {
      id:'project',
      name:'Projects',
      icon:<BsBriefcase/>
    },
    {
      id:'services',
      name:'Services',
      icon:<BsClipboardData/>
    },
    {
      id:'contact',
      name:'Contact',
      icon:<TiContacts/>
    }
  ]
  return<nav className='fixed md:bottom-2 md:h-full md:w-[50px] bottom-0 w-full     z-50 flex md:flex-col md:justify-center '>
   <div className='  bg-black/20 backdrop-blur-2xl md:rounded-full md:h-1/2 w-full md:pb-0 pb-4 
     px-5 flex md:flex-col gap-4 justify-between items-center text-l text-white/50 py-3'> 
      {menuData.map((item)=>{return (<MenuButtons icon={item.icon} id={item.id} name={item.name} activeElement={id} key={item.id}  setterFunction={setId} />)})}
     </div>
   </nav>
};

export default Nav;
