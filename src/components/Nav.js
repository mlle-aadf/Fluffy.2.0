import { useMediaQuery } from "react-responsive";

import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Nav = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return <>{isMobile ? <NavMobile /> : <NavDesktop />}</>;
};

export default Nav;