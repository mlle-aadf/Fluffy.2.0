import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

const Nav = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>{isMobile ? <NavMobile /> : <NavDesktop>I AM A NAVBAR</NavDesktop>}</>
  );
};

export default Nav;

// const NavDesktop = styled.div`
//   width: 100vw;
//   height: 8vh;


//   /* border: 1px solid white; */
// `;
