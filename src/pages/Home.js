import { useContext } from "react";
import { HiArrowLongDown } from "react-icons/hi2";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import { default as FluffyDonutsFullLogo, default as FluffyDonutsName } from "../assets/NEWlogo.webp";
import igIcon from "../assets/igIcon.webp";
import tiktokIcon from "../assets/tiktokIcon.webp"; // Import the TikTok icon
import LanguageContext from "../components/LanguageContext";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { language, texts } = useContext(LanguageContext);

  const { tagline } = texts[language];

  return (
    <Container>
      <FluffyLogo
        id="homeLogo"
        className="scale-fluffy"
        src={isMobile ? FluffyDonutsFullLogo : FluffyDonutsName}
        alt="fluffy's logo"
        // loading="lazy"
      />
      <Tagline width={isMobile ? "54%" : "auto"}>{tagline}</Tagline>
      {!isMobile && (
        <SocialLinks>
          <IgLink
            className="scale-fluffy"
            href="https://www.instagram.com/fluffysmtl/"
            target="blank"
            aria-label="Instagram"
          >
            <img src={igIcon} alt="Instagram Icon" loading="lazy" />
          </IgLink>
          <TikTokLink
            className="scale-fluffy"
            href="https://www.tiktok.com/@fluffysmtl"
            target="blank"
            aria-label="TikTok"
          >
            <img src={tiktokIcon} alt="TikTok Icon" height="55px" loading="lazy" />
          </TikTokLink>
        </SocialLinks>
      )}

      <Arrow
        align={isMobile ? "center" : "flex-end"}
        padding={isMobile ? "0" : "3.5rem"}
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FluffyLogo = styled.img`
  width: 50vw;
  max-width: 70vw;
  margin-bottom: 2rem;
  
  animation: scale-fluffy 2.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.5s both;
  -webkit-animation: scale-fluffy 2.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
  0.5s both;
  @media (min-width: 768px) {
    height: 50vh;
    width: auto;
    margin: 15vh auto 2.5rem auto;
  }
`;

const Tagline = styled.p`
  width: ${(props) => props.width};
  font-size: 1.25em;
  word-spacing: 0.2rem;
  line-height: 2em;
  text-align: center;
  margin: 1em 0;
  letter-spacing: 0.1rem;
  color: var(--primary-color);
  animation: fade-in-right 1s cubic-bezier(0.39, 0.575, 0.565, 1) 1s 1 both;
  -webkit-animation: fade-in-right 1s cubic-bezier(0.39, 0.575, 0.565, 1) 1s 1 both;
  -moz-animation: fade-in-right 1s cubic-bezier(0.39, 0.575, 0.565, 1) 1s 1 both;
  
  @media (min-width: 768px) {
    word-spacing: normal;
    font-size: 1.5em;
    line-height: 1;
    margin-bottom: 2em;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const IgLink = styled.a`
  animation: scale-fluffy 2.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.5s 1 both;
  -webkit-animation: scale-fluffy 2.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    0.5s 1 both;
  cursor: pointer;

  img {
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.2);
      transition: transform 0.3s;
    }
  }
`;

const TikTokLink = styled.a`
  animation: scale-fluffy 2.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.5s 1 both;
  -webkit-animation: scale-fluffy 2.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    0.5s 1 both;
  cursor: pointer;

  img {
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.2);
      transition: transform 0.3s;
    }
  }
`;

const Arrow = styled(HiArrowLongDown)`
  align-self: ${(props) => props.align};
  padding-right: ${(props) => props.padding};
  font-size: 1.5rem;
  -webkit-animation: fade-in 1s linear 1s both;
  -moz-animation: fade-in 1s linear 3s both;
  animation: fade-in 1s linear 3s both;
`;
