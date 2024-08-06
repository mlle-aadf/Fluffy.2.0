import styled from "styled-components";
import { useEffect } from "react";

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

    useEffect(() => {
        const handleScroll = () => {
            const clientHeight = document.body.clientHeight;
            const entirePage = document.body.scrollHeight;
            const currentHeight = window.scrollY;

            // console.log(`CLIENT: ${clientHeight} CURRENT: ${currentHeight}`);
            // console.log(`ENTIRE: ${entirePage}`);

        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <DesktopContainer>
            {links.map((link) =>
                <DesktopLink href={`#${link.text}`}>{link.text}</DesktopLink>
            )}
        </DesktopContainer>
    );
};

export default NavDesktop;

const DesktopContainer = styled.div`
  width: 100%;
  height: calc(8vh + 1.5rem);
  margin-top: -6vh;
  display: flex;
  align-items: end;
  justify-content: space-evenly;
  position: sticky;
  top: 0%;
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.8579364851409313) 73%, rgba(0,0,0,0.3425303226759454) 88%, rgba(0,0,0,0) 100%);
  `;

const DesktopLink = styled.a`
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 100;
    color: white;
    cursor: pointer;
`;