import styled from "styled-components";
// import { useEffect } from "react";

const NavDesktop = () => {

    const links = [
        {
            text: "HOME",
            color: "#FFF",
        },
        {
            text: "ABOUT",
            color: "#FFF",
        },
        {
            text: "CONTACT",
            color: "#FFF",
        },
        {
            text: "FR",
            color: "#FFF",
        },
    ];

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const clientHeight = document.body.clientHeight;
    //         const entirePage = document.body.scrollHeight;
    //         const currentHeight = window.scrollY;

    //         // console.log(`CLIENT: ${clientHeight} CURRENT: ${currentHeight}`);
    //         // console.log(`ENTIRE: ${entirePage}`);

    //     };
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    return (
        <DesktopContainer>
            {/* <Welcome>WELCOME</Welcome> */}

            {links.map((link) =>
                <DesktopLink href={`#${link.text}`}>{link.text}</DesktopLink>
            )}
        </DesktopContainer>
    );
};

export default NavDesktop;

const DesktopContainer = styled.div`
  width: 100%;
  height: 20vh;
  margin-bottom: -16vh;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  position: sticky;
  top: 0%;
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0.34) 90%, rgba(0,0,0,0.15) 95%, rgba(0,0,0,0) 100%);
  letter-spacing: 0.2rem;
  
  /* border: 2px solid aqua; */
  `;

const DesktopLink = styled.a`
    align-self: center;
    text-decoration: none;
    color: white;
    padding: 1rem 4rem 0 4rem;
    font-size: 1.5rem;
    cursor: pointer;
    
    /* border: 2px solid fuchsia; */
    `;

// const Welcome = styled.h1`
//     align-self: end;
//     padding-top: 7vh;
//     font-size: 3rem;
//     font-weight: 300;

//     /* border: 2px solid fuchsia; */
// `
// animate
// welcome scale-in 1s
// plant-based delay 1s bg-pan 2
// welcome delay 3s scale-out  1s
// links delay 4s fade-in 1s

