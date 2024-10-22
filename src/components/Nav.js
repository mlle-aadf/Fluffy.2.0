import { useMediaQuery } from "react-responsive";

import NavMobile from "./NavMobile";
// import NavMobile from "../components/NavMobile";
import NavDesktop from "./NavDesktop";

const Nav = () => {
  


const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {isMobile ? <NavMobile/> : <NavDesktop/>}
    </>

  );
};

export default Nav;
