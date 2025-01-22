import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import FluffyDonutsFullLogo from "../assets/fd_fullLogo.png";
import igIcon from "../assets/igIcon.png";

import { colors } from "../assets/data";
import LanguageContext from "../components/LanguageContext";

const Contact = () => { // TODO refactor *** smaller font/ more padding? for FR ***
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { language, texts } = useContext(LanguageContext)
  const {contact} = texts[language]

  const contactDetails = Object.entries(contact)
  
  return (
    <>
      <FlexContainer fontSize={isMobile ? "1.25rem" : "30px"}>
        
        <ContactDetails>
          
          {contactDetails.map((detail, i) => {
            const [key, value] = detail
            const {label, text, href} = value
            return (
            <div key={key} >
              <ContactDetail color={colors[i]}>
                  {label}: <a href={href} target="blank">{text}</a>
                </ContactDetail>
                <br />  
            </div>
            )
          })}
          <IgDiv justify={isMobile ? "center" : undefined} top={isMobile ? "64px" : undefined}>
            <IgLink
              href="https://www.instagram.com/fluffydonutsmtl/"
              target="blank"
            >
              <img src={igIcon} alt="igIcon" height={isMobile ? "40px" : undefined} /> {/* Conditionally set height */}
            </IgLink>
          </IgDiv>
        </ContactDetails>


        {!isMobile && 
          <div>
            <FluffyLogo src={FluffyDonutsFullLogo} alt="FluffyDonutsLogo" />
          </div>
        }
      </FlexContainer>
    </>
  );
};

const FlexContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  height: 100vh;
  font-size: ${(props) => props.fontSize};
`;

const ContactDetails = styled.ul`
  margin-bottom: 30px;
  list-style: none;
`;

const ContactDetail = styled.li` 
  color: ${(props) => props.color};

  a {
    color: white;
    text-decoration: none;

    &:active {
      color: ${(props) => props.color};
    }
    &:hover {
      font-style: italic;
    }
  }
`

const IgDiv = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  margin-top: ${(props) => props.top};

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
