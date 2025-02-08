import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import FluffyDonutsFullLogo from "../assets/fd_fullLogo.png";
import igIcon from "../assets/igIcon.png";

import { colors } from "../assets/data";
import LanguageContext from "../components/LanguageContext";

const Contact = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { language, texts } = useContext(LanguageContext);
  const { contact } = texts[language];
  const contactDetails = Object.entries(contact);

  return (
    <FlexContainer fontSize={isMobile ? "1.1rem" : "1.75rem"}>
      <ContactDetails $padding={isMobile ? "0" : "30px"}>
        {contactDetails.map((detail, i) => {
          const [key, value] = detail;
          const { label, text, href } = value;
          return (
            <ContactDetail color={colors[i]} key={key}>
              {label}:{isMobile && <br />}{" "}
              <a href={href} target="blank">
                {text}
              </a>
              <br />
            </ContactDetail>
          );
        })}
        <IgDiv
          $justify={isMobile ? "center" : undefined}
          $top={isMobile ? "64px" : undefined}
        >
          <IgLink href="https://www.instagram.com/fluffysmtl/" target="blank">
            <img
              src={igIcon}
              alt="igIcon"
              height={isMobile ? "40px" : undefined}
            />
          </IgLink>
        </IgDiv>
      </ContactDetails>

      {!isMobile && (
        <div>
          <FluffyLogo src={FluffyDonutsFullLogo} alt="FluffyDonutsLogo" />
        </div>
      )}
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  height: 100vh;
  font-size: ${({ fontSize }) => fontSize};
`;

const ContactDetails = styled.ul`
  margin-bottom: 30px;
  list-style: none;
  padding: ${({ $padding }) => $padding};
`;

const ContactDetail = styled.li`
  color: ${({ color }) => color};

  a {
    color: white;
    text-decoration: none;

    &:active {
      color: ${({ color }) => color};
    }
    &:hover {
      font-style: italic;
    }
  }
`;

const IgDiv = styled.div`
  display: flex;
  justify-content: ${({ $justify }) => $justify};
  margin-top: ${({ $top }) => $top};
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
