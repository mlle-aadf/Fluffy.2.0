import styled from "styled-components";
import { IoCloseOutline, IoMenu } from "react-icons/io5";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";



const NavMobile = () => {
    
    const [expanded, setExpanded] = useState(false)

    // toggles menu visibility after scrolling past first page
     const handleScroll = (event) => {
        const mobileNav = document.getElementById("mobileNav")
        
        window.scrollY > window.innerHeight 
        ? mobileNav.style.opacity = 1 
        : mobileNav.style.opacity = 0
    }

    const isMobile = useMediaQuery({ maxWidth: 767 });

    isMobile && window.addEventListener('scroll', handleScroll);

    return (
        <>
            <MenuIcon id="mobileNav" onClick={() => setExpanded(!expanded)} style={{display:`${expanded === false ? "block" : "none"}`}}/>
            <Container style={{display:`${expanded === false ? "none" : "flex"}`}}>
                <CloseIcon onClick={() => setExpanded(!expanded)}/>
                <LinkText href="#home">HOME</LinkText>
                <LinkText href="#about">ABOUT</LinkText>
                <LinkText href="#contact">CONTACT</LinkText>
                {/* <Text>FR</Text> */}
            </Container>
        </>
    );
};

export default NavMobile;

const MenuIcon = styled(IoMenu)`
    font-size: 2.5rem;
    position: fixed;
    top: 1rem;
    float: right;
    right: 1.5rem;
`

const Container = styled.div`
    flex-direction: column;
    align-items: end;
    background-color: var(--lightPink);
    color: var(--darkPink);
    width: 60%;
    height: 100vh;
    position: fixed;
    right: 0;
    padding-right: 2rem;
`

const LinkText = styled.a`
    text-decoration: none;
    font-size: 1.75rem;
    font-weight: 100;
    margin: 1.5rem 0;
    color: var(--darkPink);
`

const CloseIcon = styled(IoCloseOutline)`
    font-size: 2.5rem;
    margin-top: 2rem;
    color: var(--darkGreen)
`