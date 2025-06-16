import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

// const StyledLink = styled(Link)<{ $active: boolean }>`
//   background-color: ${({ $active }) => ($active ? '#e76f51' : '#f4a261')};
//   color: white;
//   padding: 10px 22px;
//   border-radius: 30px;
//   font-size: 1rem;
//   font-weight: 600;
//   text-decoration: none;
//   transition: background-color 0.3s, transform 0.2s;
//   box-shadow: ${({ $active }) =>
//     $active ? '0 4px 8px rgba(0,0,0,0.2)' : 'none'};

//   &:hover {
//     background-color: #e76f51;
//     transform: scale(1.05);
//   }

//   @media (max-width: 768px) {
//     font-size: 0.85rem;
//     padding: 8px 16px;
//   }
// `;
const StyledLink = styled(Link)<{ $active: boolean }>`
  background-color: ${({ $active }) => ($active ? '#e76f51' : '#f4a261')};
  color: white;
  padding: 10px 22px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: ${({ $active }) =>
    $active ? '0 4px 8px rgba(0,0,0,0.2)' : 'none'};
  
  /* Permitir salto de línea en el texto */
  white-space: normal;
  text-align: center;
  max-width: 150px; /* límite de ancho para que no se expanda mucho */

  &:hover {
    background-color: #e76f51;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 8px 16px;
    max-width: 120px; /* un poco más estrecho en pantallas chicas */
  }
`;
function Navigation() {
  const location = useLocation();
  const sections = [
    { name: 'Where', path: '/about-wedding#location-section' },
    { name: 'Trips', path: '/about-trip' },
        { name: 'Who\'s Coming?', path: '/about-who' },
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
      </NavList>
    </Nav>
  );
}

export default Navigation;