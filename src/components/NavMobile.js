import { useContext, useEffect, useState } from "react";
import { IoCloseOutline, IoMenu } from "react-icons/io5";
import styled from "styled-components";

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
            <MenuIcon id="mobileNav" onClick={() => setExpanded(!expanded)} />
            <Container style={{ display: `${expanded === false ? "none" : "flex"}` }}>
                <CloseIcon onClick={() => setExpanded(!expanded)} />

                {nav.map((link, i) => {
                    const href = `#section-${i}`
                    const isLanguageLink = i === 3

                    return (
                        <LinkText
                            href={href}
                            onClick={() => toggleLanguageHandler(isLanguageLink)}
                        >
                            {link}
                        </LinkText>
                    )
                })}
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
    display: block;
    z-index: 2;
    `;

const Container = styled.div`
    flex-direction: column;
    align-items: end;
    background-color: rgba(0,0,0, 0.8);
    width: 60%;
    height: 100vh;
    position: fixed;
    right: 0;
    padding-right: 2rem;
    z-index: 3;
`;

const LinkText = styled.a`
    text-decoration: none;
    font-size: 1.75rem;
    font-weight: 100;
    margin: 1.5rem 0;
    color: var(--lightPink);
`;

const CloseIcon = styled(IoCloseOutline)`
    font-size: 2.5rem;
    margin-top: 2rem;
    color: var(--darkGreen);
`;
