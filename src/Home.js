import styled from "styled-components";
import { HiArrowLongDown } from "react-icons/hi2";

import FluffyDonutsName from "./assets/FluffyDonutsTitle.png";
import igIcon from "./assets/igIcon.png";

const Home = () => {
  return (
    <Container style={{ height: "100vh" }}>
      <FluffyName src={FluffyDonutsName} />
      <Tagline>PLANT-BASED, COFFEE, DONUTS & GOOD VIBES</Tagline>
      <IgLink href="https://www.instagram.com/fluffydonutsmtl/" target="blank">
        <img src={igIcon} alt="igIcon" />
      </IgLink>
      <Arrow />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FluffyName = styled.img`
  height: 50vh;
`;

const Tagline = styled.p`
  font-size: 1.25em;
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
  align-self: flex-end;
  padding-right: 2.5rem;
  height: 32px;
`;
