import React from 'react';
import Logo from "../assets/image.png";
const Logodesign={width: "150px"}
const Header = () => {
  return <header className='bg-transparent bg-red-400'>
    <div className='container mx-auto'>
      <div>
        <a href = "#">
          <img style={Logodesign} src={Logo} alt=''/>
        </a>
      </div>
    </div>
  </header>;
};

export default Header;
