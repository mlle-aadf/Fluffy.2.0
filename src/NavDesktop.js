import styled from "styled-components";

import MmDonut from "./assets/mm_donut.PNG"
import { useEffect, useState } from "react";

const NavDesktop = () => {
    const links = [
        {
            text: "HOME",
            color: "var(--darkGreen)",
            active: false
        },
        {
            text: "ABOUT",
            color: "var(--lightGreen)",
            active: false
        },
        {
            text: "CONTACT",
            color: "var(--darkPink)",
            active: false
        },
        {
            text: "FR",
            color: "var(--lightPink)",
            active: false
        },
    ];

    const [welcomeAnimate, setWelcomeAnimate] = useState("scale-in-first")
    const [linkInfo, setLinkInfo] = useState(links)
    // const [linkActive, setLinkActive] = useState()


    useEffect(()=> {
        
        const welcomeIN = setTimeout(()=> {
            setWelcomeAnimate("scale-out")
        }, 1000)
        
        const welcomeOUT = setTimeout(()=> {
            document.getElementById("welcome").style.display = "none"
            document.getElementById("links").style.display = "flex"
        }, 3000)
        
        return () => {
            clearTimeout(welcomeIN, welcomeOUT)
        }
    }, [])

    

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const clientHeight = window.innerHeight;
    //         const entirePage = document.body.scrollHeight;
    //         const currentHeight = window.scrollY;

    //         const onHome = currentHeight < clientHeight
    //         const onAbout = currentHeight >= clientHeight-200 && currentHeight < clientHeight*2
    //         const onContact = currentHeight >= clientHeight*2

    //         if (onHome) {
    //             console.log("home page!")
    //         } else if (onAbout){
    //             console.log("about page!")
    //         } else if (onContact) {
    //             console.log("contact page!")
                
    //         }

    //         console.log(`ENTIRE: ${entirePage} CLIENT: ${clientHeight} CURRENT: ${currentHeight}`);

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
                <Text>WELCOME 👋</Text>
            </Welcome>

            <Links id="links" className="fade-in-first">
                {linkInfo.map((link) => {

                    const {text, color, active} = link
                    return (

                        <DesktopLink href={`#${text}`} hoverColor={color} activeColor={active === true ? color : "white"} >{text}</DesktopLink>
                    )
                }
                    
                )}
            </Links>
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
  z-index: 1;
`;

const Welcome = styled.div`
    display: flex;
    align-items: center;
`

const Links = styled.div`
    display: none;
    align-items: center;
`

const DesktopLink = styled.a`
    align-self: center;
    text-decoration: none;
    /* color: white; */
    color: ${(props) => props.activeColor};
    padding: 1rem 2.5rem 0 2.5rem;
    transition: transform 0.2s;
    cursor: pointer;
    
    &:hover {
        color: ${(props) => props.hoverColor};
        transform: scale(1.2);
        transition: transform 0.3s;
    }
`;

const Text = styled.h1`
    align-self: center;
    font-weight: lighter;
    margin: 3vh 1rem 0 1rem;

    /* border: 2px solid fuchsia; */
`

const Donut = styled.img`
  height: 4rem;
  padding-top: 3vh;
`;