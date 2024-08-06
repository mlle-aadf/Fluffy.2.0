import styled from "styled-components";

const NavDesktop = () => {
    
    return (
        <Container>
            <Link href="#home">HOME</Link>
            <Link href="#about">ABOUT</Link>
            <Link href="#contact">CONTACT</Link>
            <Link>FR</Link>
        </Container>
    );
};


export default NavDesktop;

const Container = styled.div`
  width: 80vw;
  height: 8vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.75rem;
  padding: 1.5rem;
  `;

const Link = styled.a`
    text-decoration: none;
    font-weight: 100;
    color: white;
    cursor: pointer;
`