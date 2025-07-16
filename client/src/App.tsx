import { Outlet } from 'react-router-dom';
import { useState } from "react";
import Header from './components/Header';
//import Navigation from './components/Navigation';
import styled from "styled-components";
import Footer from './components/Footer';
import { RSVPProvider } from "./context/RSVPContext";

// Estilos
const AppContainer = styled.div`
  background: linear-gradient(to bottom, #fdf8f4, #fff);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Playfair Display", serif;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 0px;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

function App() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  return (
     <RSVPProvider>
    <AppContainer>
      <Header language={language} setLanguage={setLanguage}/>
      <MainContent>
         
        <Outlet context={{ language }}/> {/* Esto renderiza Home o Feedback según la ruta */}
      </MainContent>
      <Footer />
    </AppContainer>
    </RSVPProvider>
  );
}

export default App;

// <Navigation language={language} setLanguage={setLanguage} />