import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import newLogo from "../assets/NEWlogo.png";
import igIcon from "../assets/igIcon.png";
import tiktokIcon from "../assets/tiktokIcon.png"; /* Add TikTok icon to your assets */

import { colors } from "../assets/data";
import LanguageContext from "../components/LanguageContext";

const Contact = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { language, texts } = useContext(LanguageContext);
  const { contact } = texts[language];
  const contactDetails = Object.entries(contact);

  return (
    <FlexContainer fontSize={isMobile ? "1.1rem" : "1.75rem"}>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
                <br />
                <a href={href} target="blank">
                  {text}
                </a>
              </ContactDetail>
            );
          })}
        </ContactDetails>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <IgLink href="https://www.instagram.com/fluffysmtl/" target="blank">
            <img
              src={igIcon}
              alt="Instagram Icon"
              height={isMobile ? "45px" : undefined}
              // height="45px"
              loading="lazy"
            />
          </IgLink>
          <TikTokLink href="https://www.tiktok.com/@fluffysmtl" target="blank">
            <img
              src={tiktokIcon}
              alt="TikTok Icon"
              height={isMobile ? "40px" : "55px"}
              loading="lazy"
            />
          </TikTokLink>
        </div>
      </div>

      {!isMobile && (
        <div>
          <FluffyLogo
            src={newLogo}
            alt="Fluffy Donuts Café logo"
            loading="lazy"
          />
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
  line-height: 1.5;
`;

const ContactDetail = styled.li`
  /* color: var(--primary-color); */
  color: fuchsia;
  font-weight: ${({ isLabel }) => (isLabel ? "500" : "300")};
  padding-bottom: 1.75rem;

  a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 300; /* Explicitly set lighter weight for links */

    &:active {
      color: var(--primary-color);
    }
    &:hover {
      font-style: italic;
    }
  }

  span {
    font-weight: ${({ isLabel }) => (isLabel ? "500" : "300")};
  }
`;

const IgLink = styled.a`
  cursor: pointer;
  align-self: center;
  margin-right: 20px;

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
  align-self: center;

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
