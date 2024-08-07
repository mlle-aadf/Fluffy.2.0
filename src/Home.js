import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import { HiArrowLongDown } from "react-icons/hi2";

import FluffyDonutsFullLogo from "./assets/FluffyDonutsFullLogo.png";
import FluffyDonutsName from "./assets/FluffyDonutsTitle.png";
import igIcon from "./assets/igIcon.png";

// import Nav from "./Nav";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Container>

      <FluffyLogo id="homeLogo" className="scale-in-second" src={isMobile ? FluffyDonutsFullLogo : FluffyDonutsName} />
      <Tagline
        width={isMobile ? "55%" : "auto"}>
        PLANT-BASED, COFFEE, DONUTS {isMobile && <br />}& GOOD VIBES
      </Tagline>
      {!isMobile && (
        <IgLink
          href="https://www.instagram.com/fluffydonutsmtl/"
          target="blank"
        >
          <img className="scale-in-second" src={igIcon} alt="igIcon" />
        </IgLink>
      )}

      <Arrow
        align={isMobile ? "center" : "flex-end"}
        padding={isMobile ? "0" : "2.5rem"}
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
  
  /* border: 0.2px solid fuchsia; */
`;

const FluffyLogo = styled.img`
  width: 70vw;
  max-width: 70vw;
  margin-top: 8vh;
`;

const Tagline = styled.p`
  width: ${(props) => props.width};
  font-size: 1.25em;
  text-align: center;
  margin: 1.25em 0 1em 0;
  letter-spacing: 0.1rem;

  background: linear-gradient(270deg, #da8694, #fde9de, #beebd6, #80cbb3, #ffffff);
  background-size: 1000% 1000%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: bg-color 3s ease 2s 1;
  -moz-animation: bg-color 3s ease 2s 1;
  animation: bg-color 3s ease 2s 1, fade-in-second 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 2s both;

  /* @-moz-keyframes bg-color {
    0%{background-position:0% 50%, }
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
  @keyframes bg-color {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
  @-webkit-keyframes bg-color {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
  } */
`;




const IgLink = styled.a`
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
  height: 32px;
`;
