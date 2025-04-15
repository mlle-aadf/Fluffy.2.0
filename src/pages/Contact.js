import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import newLogo from "../assets/NEWlogo.png";
import igIcon from "../assets/igIcon.png";
import tiktokIcon from "../assets/tiktokIcon.png";

import { colors } from "../assets/data";
import LanguageContext from "../components/LanguageContext";

const Contact = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { language, texts } = useContext(LanguageContext);
  const { contact } = texts[language];
  const contactDetails = Object.entries(contact);

  return (
    <FlexContainer fontSize={isMobile ? "1.1rem" : "1.75rem"}>
      {!isMobile && (
        <LeftContainer>
          <FluffyLogo
            src={newLogo}
            alt="Fluffy Donuts Café logo"
            loading="lazy"
          />
        </LeftContainer>
      )}
      <RightContainer>
        <ContactDetails $padding={isMobile ? "0" : "30px"}>
          {contactDetails.map((detail, i) => {
            const [key, value] = detail;
            const { label, text, href } = value;
            return (
              <ContactDetail
                color={colors[i]}
                key={key}
                isLabel={["HOURS", "ADDRESS", "EMAIL", "PHONE"].includes(label)}
              >
                <span>{label}:</span>
                <a href={href} target="blank">
                  {text}
                </a>
              </ContactDetail>
            );
          })}
        </ContactDetails>
        <IconContainer>
          <IgLink href="https://www.instagram.com/fluffysmtl/" target="blank">
            <img
              src={igIcon}
              alt="Instagram Icon"
              height={isMobile ? "45px" : "50px"}
              loading="lazy"
            />
          </IgLink>
          <TikTokLink href="https://www.tiktok.com/@fluffysmtl" target="blank">
            <img
              src={tiktokIcon}
              alt="TikTok Icon"
              height={isMobile ? "40px" : "50px"}
              loading="lazy"
            />
          </TikTokLink>
        </IconContainer>
      </RightContainer>
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  padding: 20px;
  font-size: ${({ fontSize }) => fontSize};

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const LeftContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex: 1;
    justify-content: end;
    align-items: center;
  }
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex: 1.5;
    padding-left: 3rem;
    margin-top: -50px;
  }
`;

const ContactDetails = styled.ul`
  list-style: none;
  padding: ${({ $padding }) => $padding};
  line-height: 1.5;
`;

const ContactDetail = styled.li`
  color: var(--primary-color);
  font-weight: ${({ isLabel }) => (isLabel ? "500" : "300")};
  padding-bottom: 1.75rem;
  line-height: 1.5;

  a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 300;

    &:active {
      color: var(--primary-color);
    }
    &:hover {
      font-style: italic;
    }
  }

  span {
    font-weight: ${({ isLabel }) => (isLabel ? "500" : "300")};
    margin-right: 10px;

    @media (max-width: 767px) {
      display: block;
      margin-right: 0;
    }
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  
  @media (min-width: 768px) {
    padding-left: 20px;
  }
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

const TikTokLink = styled.a`
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
  width: 400px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s;
  }
`;

export default Contact;
