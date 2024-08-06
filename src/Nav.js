import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

const Nav = () => {
  


const isMobile = useMediaQuery({ maxWidth: 767 });

// const [deskDisplay, setDeskDisplay] = useState(false)

// useEffect(() => {
//     const handleScroll = () => {
//       const clientHeight = document.body.clientHeight;
//       const entirePage = document.body.scrollHeight;
//       const currentHeight = window.scrollY;

//       if (isMobile=== true) {
        
        
//         console.log("is mobile")
//         currentHeight >= clientHeight && console.log("moved") 
        
//       } else {
//         console.log("not mobile")
//       }



//         // console.log(`CLIENT: ${clientHeight} CURRENT: ${currentHeight}`);
//         // console.log(`ENTIRE: ${entirePage}`);

//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//         window.removeEventListener("scroll", handleScroll);
//     };
// }, []);
  
  

  return (
    <>
      {isMobile ? <NavMobile/> : <NavDesktop/>}
    </>

  );
};

export default Nav;
