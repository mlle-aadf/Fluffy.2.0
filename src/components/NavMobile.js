import { useContext, useEffect, useState } from "react";

import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import styled from "styled-components";
import burgerMenu from "../assets/burger-menu.webp";
import IgIcon from "../assets/igIcon.webp";
import TikTokIcon from "../assets/tiktokIcon.webp"; // Import the TikTok icon

import { colors } from "../assets/data";
import LanguageContext from "./LanguageContext";

const NavMobile = () => {
  const { language, texts, toggleLanguage } = useContext(LanguageContext);
  const { nav } = texts[language];

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const mobileNav = document.getElementById("mobileNav");
    mobileNav.style.opacity = 0;

    const handleScroll = () => {
      const clientHeight = window.innerHeight;
      const currentHeight = window.scrollY;

      mobileNav.style.opacity = currentHeight >= clientHeight - 100 ? 1 : 0;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      const container = document.getElementById("menuContainer");
      if (expanded && container && !container.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  const toggleLanguageHandler = (isLanguageLink) => {
    setExpanded(!expanded);
    return isLanguageLink === true ? toggleLanguage() : null;
  };

  return (
    <>
      <MenuIcon
        id="mobileNav"
        src={burgerMenu}
        alt="Menu Icon"
        onClick={() => setExpanded(!expanded)}
      />
      <Container id="menuContainer" expanded={expanded}>
        <CloseIcon onClick={() => setExpanded(!expanded)} />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {nav.map((link, i) => {
            const isLanguageLink = i === 3;

            return (
              <MobileLink
                key={`navLink-${link}-${expanded}`}
                color={colors[i]}
                delay={i * 0.2}
              >
                <Link
                  to={`section-${i}`}
                  onClick={() => toggleLanguageHandler(isLanguageLink)}
                >
                  {link}
                </Link>
              </MobileLink>
            );
          })}
          <SocialIcons key={expanded ? 'expanded' : 'collapsed'} delay={nav.length * 0.2}>
            <IgLink
              href="https://www.instagram.com/fluffysmtl/"
              target="blank"
              aria-label="Instagram"
            >
              <img src={IgIcon} alt="Instagram Icon" />
            </IgLink>
            <TikTokLink
              href="https://www.tiktok.com/@fluffysmtl"
              target="blank"
              aria-label="TikTok"
            >
              <img src={TikTokIcon} alt="TikTok Icon" />
            </TikTokLink>
          </SocialIcons>
        </div>
      </Container>
    </>
  );
};

export default NavMobile;

const MenuIcon = styled.img`
  cursor: pointer;
  display: block;
  height: 2.5rem;
  position: fixed;
  right: 2.5rem;
  top: 2.5rem;
  width: 2.5rem;
  z-index: 2;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  text-align: right;
  padding: 0 2.5rem 0 0;
  position: fixed;
  right: 0;
  width: 50%;
  z-index: 3;
  opacity: ${({ expanded }) => (expanded ? 1 : 0)};
  visibility: ${({ expanded }) => (expanded ? "visible" : "hidden")};
  transition: opacity 0.2s ease, visibility 0.2s ease;
`;

const MobileLink = styled.li`
  color: var(--background-color);
  font-family: "Jost", sans-serif;
  font-size: 1.75rem;
  font-weight: 400;
  letter-spacing: 0.15rem;
  list-style-type: none;
  margin: 1.5rem 0;
  text-decoration: none;
  opacity: 0;
  transform: translateX(20px);
  animation: fadeInRight 0.5s ease forwards;
  animation-delay: ${({ delay }) => delay}s;

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const CloseIcon = styled(IoCloseOutline)`
  color: white;
  font-size: 3rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  margin: 3rem 0 0 auto;
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
  animation-delay: 1s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const IgLink = styled.a`
  img {
    width: 40px;
    height: 40px;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const TikTokLink = styled.a`
  img {
    width: 30px;
    height: 30px;
    transition: transform 0.3s;
  }
`;
