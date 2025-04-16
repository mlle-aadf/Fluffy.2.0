import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { slides } from "../assets/data";
import LanguageContext from "../components/LanguageContext";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useContext(LanguageContext);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const getImageSize = () => {
    if (isMobile) return "small";
    if (isTablet) return "medium";
    return "large";
  };

  const imageSize = getImageSize();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000); // Change slides every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <SectionContainer>
      {slides.map((slide, index) => (
        <SlideContainer
          key={slide.id}
          isMobile={isMobile}
          initial={{ x: index === currentSlide ? "0%" : "100%" }}
          animate={{ x: index === currentSlide ? "0%" : "-100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <ImageContainer bgimage={slide.images[imageSize]} isMobile={isMobile} />
          <TextContainer >
            <Headline fontSize={isMobile ? "1.2rem" : "2rem"} isMobile={isMobile}>
              {slide.text[language][0]}
            </Headline>
            <Text fontSize={isMobile ? "1rem" : "1.5rem"} isMobile={isMobile}>
              {slide.text[language][1]}
            </Text>
          </TextContainer>
        </SlideContainer>
      ))}
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const SlideContainer = styled(motion.div)`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const ImageContainer = styled.div`
  width: ${({ isMobile }) => (isMobile ? "100%" : "55%")};
  height: ${({ isMobile }) => (isMobile ? "60vh" : "100vh")};
  background-image: url(${({ bgimage }) => bgimage});
  background-size: cover;
  background-position: center;
  background-position-y: -1.8rem;
  margin-top: ${({ isMobile }) => (isMobile ? "10vh" : "0")};
`;

const TextContainer = styled.div`
  width: 100%;
  padding:1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    align-items: start;
    text-align: left;
    width: 50%;
    padding: 3rem;
  }
`;

const Headline = styled.h2`
  color: var(--primary);
  opacity: ${({ isMobile }) => (isMobile ? "1" : "0.75")};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 500;
  max-width: 80%;
  line-height: 1.5;
  
`;

const Text = styled.p`
  color: var(--primary);
  opacity: 0.5;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 500;
  max-width: 80%;
  line-height: 1.5;
`;

export default About;
