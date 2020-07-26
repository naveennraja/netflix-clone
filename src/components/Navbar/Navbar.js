import React, { useEffect, useState } from "react";
import "./Navbar.css";
function Navbar() {
     const [nav, dimNavBar] = useState(false);

     useEffect(() => {
          window.addEventListener("scroll", () => {
               window.scrollY > 80 ? dimNavBar(true) : dimNavBar(false);
               return () => {
                    window.removeEventListener("scroll");
               };
          });
     }, []);
     return (
          <div className={`navbar ${nav && `dim__navbar `}`}>
               <img
                    className='logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png'
                    alt='Netflix logo'
               />
               <img className='profile' src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png' alt='Netflix logo' />
          </div>
     );
}

export default Navbar;
