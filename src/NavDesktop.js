import styled from "styled-components";

import MmDonut from "./assets/mm_donut.PNG"
import { useEffect, useState } from "react";
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

    const [welcomeAnimate, setWelcomeAnimate] = useState("scale-in-center")

    useEffect(()=> {
        const welcomeID = setTimeout(()=> {
            setWelcomeAnimate("scale-out-center")
        }, 1000)
        
        const removeWelcome = setTimeout(()=> {
            document.getElementById("welcome").style.display = "none"
        }, 4000)
        
        return () => {
            clearTimeout(welcomeID, removeWelcome)
        }
    }, [])

    

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
        <Container>
            <Welcome id="welcome" className={welcomeAnimate}>
                <Donut src={MmDonut}/>
                <Text>WELCOME</Text>
                <Donut src={MmDonut}/>
            </Welcome>

            {links.map((link) =>
                <DesktopLink href={`#${link.text}`}>{link.text}</DesktopLink>
            )}
        </Container>
    );
};

export default NavDesktop;

const Container = styled.div`
  width: 100%;
  height: 20vh;
  margin-bottom: -16vh;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0%;
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0.34) 90%, rgba(0,0,0,0.15) 95%, rgba(0,0,0,0) 100%);
  letter-spacing: 0.2rem;
  
  /* border: 2px solid aqua; */
  `;

const Welcome = styled.div`
    display: flex;
    align-items: center;
`

const DesktopLink = styled.a`
    align-self: center;
    text-decoration: none;
    color: white;
    padding: 1rem 3rem 0 3rem;
    cursor: pointer;
    
    /* border: 2px solid fuchsia; */
`;

const Text = styled.h1`
    align-self: center;
    font-weight: lighter;
    margin: 3vh 1rem 0 1rem;

    /* border: 2px solid fuchsia; */
`

const Donut = styled.img`
  height: 2rem;
  padding-top: 3vh;
`;
// animate
// welcome scale-in 1s
// plant-based delay 1s bg-pan 2
// welcome delay 3s scale-out  1s
// links delay 4s fade-in 1s

