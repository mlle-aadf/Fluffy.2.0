import { useContext, useEffect, useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import LanguageContext from "./LanguageContext";

const NavDesktop = () => {
  const [isScrolledPast95vh, setIsScrolledPast95vh] = useState(false); // State for 95vh
  const [isScrolledBefore200vh, setIsScrolledBefore200vh] = useState(false); // State for 200vh
  const { language, texts, toggleLanguage } = useContext(LanguageContext);
  const { greeting, nav } = texts[language];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      setIsScrolledPast95vh(scrollY > viewportHeight * 0.95); // Check if scrolled past 95vh
      setIsScrolledBefore200vh(scrollY < viewportHeight * 2); // Check if scrolled before 200vh
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container isScrolledPast95vh={isScrolledPast95vh}>
      {/* <Welcome id="welcome" className={"scale-welcome"}>
        <Donut src={MmDonut} alt="donut" loading="lazy" />
        <Text>{greeting} 👋</Text>
      </Welcome> */}

      <Links id="links">
        {nav.map((link, i) => (
          <DesktopLinkItem
            key={`navLink-${link}`}
            link={link}
            to={`section-${i}`}
            isLanguageLink={i === 3}
            isHomeOrAbout={isScrolledPast95vh && isScrolledBefore200vh && i < 2} // "HOME" and "ABOUT" condition
            toggleLanguage={toggleLanguage}
          />
        ))}
      </Links>
    </Container>
  );
};

const DesktopLinkItem = ({ link, to, isLanguageLink, isHomeOrAbout, toggleLanguage }) => (
  <DesktopLink isHomeOrAbout={isHomeOrAbout}>
    <Link
      to={to}
      smooth={true}
      duration={500}
      onClick={isLanguageLink ? toggleLanguage : null}
    >
      {link}
    </Link>
  </DesktopLink>
);

export default NavDesktop;

const Container = styled.div`
  width: 100%;
  height: 20vh;
  margin-bottom: -16vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0%;
  background: ${({ isScrolledPast95vh }) =>
    isScrolledPast95vh
      ? "transparent"
      : "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 75%, rgba(255, 255, 255, 0.7) 85%, rgba(255, 255, 255, 0.5) 90%, rgba(255, 255, 255, 0.3) 93%, rgba(255, 255, 255, 0.1) 95%, rgba(255, 255, 255, 0) 100%)"};
  letter-spacing: 0.2rem;
  z-index: 9;
`;

const Links = styled.ul`
  display: flex;
  align-items: center;
  animation: fade-in-right 1s cubic-bezier(0.39, 0.575, 0.565, 1) 2s both;
  width: 50vw;
  justify-content: space-between;
`;

const DesktopLink = styled.li`
  align-self: center;
  color: ${({ isHomeOrAbout }) =>
    isHomeOrAbout ? "var(--background-color)" : "var(--primary-color)"};
  list-style-type: none;
  font-weight: 400;
  font-size: 1.1rem;
  padding-top: 1rem;
  transition: transform 0.2s, color 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.2s;
  }
`;