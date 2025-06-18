import { useState, useEffect } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";


const HeaderContainer = styled.header`
  background: #fdf8f4;
  color: #4a2e19;
  padding: 16px 32px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Logo = styled.a`
  font-size: 2.2rem;
  font-family: "Playfair Display", serif;
  font-weight: bold;
  text-decoration: none;
  color: #4a2e19;
  transition: color 0.3s ease;

  &:hover {
    color: #d9a7b5;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CountdownContainer = styled.div`
  font-size: 1.2rem;
  font-family: "Playfair Display", serif;
  background: rgba(20, 40, 100, 0.3);
  color: white;
  padding: 5px 15px;
  border-radius: 25px;
  margin: 0 20px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin: 5px;
    padding: 3px 10px;
  }
`;
interface HeaderProps {
  language: 'en' | 'es';
  setLanguage: React.Dispatch<React.SetStateAction<'en' | 'es'>>;
}

const CountdownTimer = ({ language }: { language: 'en' | 'es' }) => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("January 24, 2026").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
    return { days: Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0) };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

   const label = language === 'es' ? `Faltan ${timeLeft.days} días` : `Countdown ${timeLeft.days} Days`;

  return <CountdownContainer>{label}</CountdownContainer>;
};

// function scrollToSection() {
//   const section = document.getElementById("location-section");
//   if (section) {
//     section.scrollIntoView({ behavior: "smooth" });
//   }
// }

function Header({ language, setLanguage }: HeaderProps) {

 
  return (
    <HeaderContainer>
      <Logo href="/">Trini & Jeremiah</Logo>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <Navigation language={language} setLanguage={setLanguage} />
       
      </div>

      <CountdownTimer  language={language} />
    </HeaderContainer>
  );
}

export default Header;
//