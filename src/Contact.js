import styled from "styled-components";

import FluffyDonutsFullLogo from "../src/assets/FluffyDonutsFullLogo.png";
import igIcon from "../src/assets/igIcon.png";

const Contact = () => {
  return (
    <Container>
      <FlexBox>
        <div>
          <SpanDiv>
            <ColoredSpan color="#BEEBD6">HOURS: </ColoredSpan>
            <ColoredSpan>L à D, 8h à 17h</ColoredSpan>
          </SpanDiv>
          <SpanDiv>
            <ColoredSpan color="#FDE9DE">ADDRESS: </ColoredSpan>
            <ColoredSpan>123 PLACEHOLDER STREET</ColoredSpan>
          </SpanDiv>
          <SpanDiv>
            <ColoredSpan color="#DA8694">EMAIL: </ColoredSpan>
            <ColoredSpan>FLUFFYDONUTS@GMAIL.COM</ColoredSpan>
          </SpanDiv>
          <SpanDiv>
            <ColoredSpan color="#80CBB3">PHONE: </ColoredSpan>
            <ColoredSpan>514-514-5514</ColoredSpan>
          </SpanDiv>
          <IgLink
            href="https://www.instagram.com/fluffydonutsmtl/"
            target="blank"
          >
            <img src={igIcon} alt="igIcon" />
          </IgLink>
        </div>
        <div>
          <FluffyLogo src={FluffyDonutsFullLogo} alt="FluffyDonutsLogo" />
        </div>
      </FlexBox>
    </Container>
  );
};

const Container = styled.div``;

const FlexBox = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  height: 100vh;
`;

const ColoredSpan = styled.span`
  color: ${(props) => props.color};
  font-size: 30px;
`;

const SpanDiv = styled.div`
  margin-bottom: 30px;
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

const FluffyLogo = styled.img`
  width: 500px;

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s;
  }
`;

export default Contact;
