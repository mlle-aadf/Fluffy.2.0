import { useContext, useEffect, useState } from "react";

import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import styled from "styled-components";
import burgerMenu from "../assets/burger-menu.png";

import { colors } from "../assets/data";
import LanguageContext from "./LanguageContext";

const NavMobile = () => {

    const { language, texts, toggleLanguage } = useContext(LanguageContext)
    const {nav} = texts[language] 

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const mobileNav = document.getElementById("mobileNav");
        mobileNav.style.opacity = 0;

        const handleScroll = () => {
            const clientHeight = window.innerHeight;
            const currentHeight = window.scrollY;

            currentHeight >= clientHeight-100
                ? (mobileNav.style.opacity = 1)
                : (mobileNav.style.opacity = 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleLanguageHandler = (isLanguageLink) => {
        setExpanded(!expanded)
        return isLanguageLink=== true ? toggleLanguage() : null
    }

    return (
        <>
            <MenuIcon
                id="mobileNav"
                src={burgerMenu}
                alt="Menu Icon"
                onClick={() => setExpanded(!expanded)}
            />
            <Container style={{ display: `${expanded === false ? "none" : "flex"}` }}>
                <CloseIcon onClick={() => setExpanded(!expanded)} />

                {nav.map((link, i) => {
    
                    const isLanguageLink = i === 3

                    return (
                        <MobileLink key={`navLink-${link}`} color={colors[i]}>
                            <Link   
                            to={`section-${i}`}
                            onClick={() => toggleLanguageHandler(isLanguageLink)}>{link}</Link>
                        </MobileLink>
                    )
                })}
            </Container>
        </>
    );
};

export default NavMobile;

const MenuIcon = styled.img`
    cursor: pointer;
    display: block;
    height: 2.5rem;
    position: fixed;
    right: 2.5rem;
    top: 2.5rem;
    width: 2.5rem;
    z-index: 2;
`;

const Container = styled.div`
    align-items: end;
    background-color: rgba(0, 0, 0, 0.8);
    flex-direction: column;
    height: 100vh;
    padding-right: 2rem;
    position: fixed;
    right: 0;
    width: 60%;
    z-index: 3;
`;

const MobileLink = styled.li`
    color: ${({ color }) => color};
    font-size: 1.75rem;
    font-weight: 100;
    list-style-type: none;
    margin: 1.5rem 0;
    text-decoration: none;
`;

const CloseIcon = styled(IoCloseOutline)`
    color: white;
    font-size: 2.5rem;
    margin-top: 2rem;
`;
