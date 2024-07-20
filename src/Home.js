import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import { HiArrowLongDown } from "react-icons/hi2";

import FluffyDonutsFullLogo from "./assets/FluffyDonutsFullLogo.png";
import FluffyDonutsName from "./assets/FluffyDonutsTitle.png";
import igIcon from "./assets/igIcon.png";


const Home = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
   
    return (
        <Container style={{ height: "100vh" }}>
            <FluffyLogo src={isMobile ? FluffyDonutsFullLogo : FluffyDonutsName} />
            <Tagline width={isMobile ? "45%" : "auto"}>
                PLANT-BASED, COFFEE, DONUTS {isMobile && <br />}& GOOD VIBES
            </Tagline>
            {!isMobile && (
                <IgLink
                    href="https://www.instagram.com/fluffydonutsmtl/"
                    target="blank"
                >
                    <img src={igIcon} alt="igIcon" />
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
`;

const FluffyLogo = styled.img`
  height: 50vh;
  max-width: 100vw;
`;

const Tagline = styled.p`
  width: ${(props) => props.width};
  font-size: 1.25em;
  text-align: center;
  margin-bottom: 2em;
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
