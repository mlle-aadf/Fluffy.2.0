import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { slides } from "../assets/data";
import LanguageContext from "../components/LanguageContext";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useContext(LanguageContext);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000); // Change slides every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <SectionContainer>
      <AnimatePresence>
        {/* <Slide
          key={currentSlide}
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 2 }}
          bgimage={
            isMobile
              ? slides[currentSlide].mobileImage
              : slides[currentSlide].image
          }
          width={isMobile ? "100%" : "70vw"}
          left={isMobile ? "0" : "15vw"}
          aria-label={slides[currentSlide].altText}
        >
          <Overlay />
          <TextContainer
            width={isMobile ? "90%" : "55vw"}
            $top={isMobile ? "20%" : "30%"}
          >
            <Text fontSize={isMobile ? "1.75rem" : "2.5rem"}>
              {slides[currentSlide][language]}
            </Text>
          </TextContainer>
        </Slide> */}
      </AnimatePresence>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const Slide = styled(motion.div)`
  position: absolute;
  top: 0;
  left: ${({ left }) => left};
  width: ${({ width }) => width};
  height: 100vh;
  background-image: url(${({ bgimage }) => bgimage});
  background-size: cover;
  display: flex;
  justify-content: center;
`;

const Overlay = styled.div`
  /* 50% shadow overlay */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const TextContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: ${({ $top }) => $top};
  display: flex;
  width: ${({ width }) => width};
  align-items: center;
  justify-content: space-around;
`;

const Text = styled.h2`
  color: white;
  opacity: 0.75;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 500;
  max-width: 80%;
  line-height: 1.5;
`;

export default About;
