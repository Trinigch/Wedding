import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { useState } from 'react';

const Nav = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)<{ $active: boolean }>`
  background-color: ${({ $active }) => ($active ? '#e76f51' : '#f4a261')};
  color: white;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: ${({ $active }) =>
    $active ? '0 4px 8px rgba(0,0,0,0.2)' : 'none'};
  white-space: normal;
  text-align: center;
  max-width: 130px;

  &:hover {
    background-color: #e76f51;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 8px 16px;
    max-width: 120px;
  }
  @media (max-width: 390px) {
    font-size: 0.70rem;
    padding: 8px 16px;
    max-width: 120px;
  }
`;

const FlagButton = styled.button<{ selected: boolean }>`
  background: transparent;
  border: ${({ selected }) => (selected ? '2px solid #e76f51' : '1px solid transparent')};
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 4px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;
interface NavigationProps {
  language: 'en' | 'es';
  setLanguage: React.Dispatch<React.SetStateAction<'en' | 'es'>>;
}

function Navigation({ language, setLanguage }: NavigationProps) {
  const location = useLocation();

  const sections = [
    { name: language === 'es' ? '¿Dónde?' : 'Where?', path: '/about-wedding#location-section' },
    ...(language === 'en' ? [{ name: 'Trips', path: '/about-trip' }] : []),
    { name: language === 'es' ? '¿Quién viene?' : "Who's Coming?", path: '/about-who' },
  ];

  return (
    <Nav>
      <NavList>
        {sections.map(({ name, path }) => (
          <li key={name}>
            <StyledLink to={path} $active={location.pathname === path}>
              {name}
            </StyledLink>
          </li>
        ))}
        <li>
          <FlagButton
            onClick={() => setLanguage('es')}
            selected={language === 'es'}
            aria-label="Español"
            title="Español"
          >
            🇦🇷
          </FlagButton>
        </li>
        <li>
          <FlagButton
            onClick={() => setLanguage('en')}
            selected={language === 'en'}
            aria-label="English"
            title="English"
          >
            🇺🇸
          </FlagButton>
        </li>
      </NavList>
    </Nav>
  );
}

export default Navigation;