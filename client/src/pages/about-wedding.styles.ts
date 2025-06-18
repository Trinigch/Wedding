import styled from "styled-components";
import NosCasamos from "./../assets/img/hero1.jpeg";
import ConfirmationImage from "./../assets/img/backgrounlejos.png";


export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fdf8f4;
  padding: 10px 0px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 5rem;
  color: #fef6e4;
  position: absolute;
  margin-top:30px;
  top: 5%;
  left: 50%;
  transform: translate(-50%);
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
   @media (max-width: 800px) {
     margin-top:80px;
    font-size: 4rem;
     
  }
    @media (max-width: 650px) {
      margin-top:80px;
      font-size: 3rem;
  }
     @media (max-width: 450px) {
        margin-top:80px;
        font-size: 2rem;
  }
  
`;
export const DateTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 4.5rem;
  color: #D4AF37; /* Color dorado */
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4); /* Sombra sutil para resaltar */
  margin-top: 20px;

  @media (max-width: 800px) {
    font-size: 2.5rem;
  }
  @media (max-width: 450px) {
    font-size: 2rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  
  max-width: 1200px; 

  background-image: url(${NosCasamos});
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  margin: 50px 50px;
  @media (max-width: 800px) {
      width: 100%;
      height: 100vh;
      margin: 20px;
  }
  
`;

export const SectionContainer = styled.div.withConfig({shouldForwardProp: (prop) => prop !== 'reverse' })<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 140px 0px;
  padding: 20px 0px;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  
  @media (max-width: 768px) {
    flex-direction: column-reverse; /* Imagen arriba en pantallas pequeñas */
    align-items: center;
    text-align: center;
  }
`;


export const StyledImage = styled.div<{ image: string }>`
  width: 50%;
  max-width: 600px; 
  height: 450px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin: 50px auto; /* Centra y añade margen lateral */
  margin-bottom: 20px 0; /* Espaciado con el texto */
  @media (max-width: 768px) {
    width: 200px; /* Ajusta el tamaño de la imagen */
    height: 200px; 
    border-radius: 50%; /* Hace la imagen circular */
    margin-bottom: 20px 0; /* Espaciado con el texto */
  }
  @media (max-width: 280px) {
  display: none
  }
`;

export const TextContainer = styled.div`
  width: 45%;
  text-align: center;
   @media (max-width: 768px) {
   font-size: 1rem;
  };
    @media (max-width: 600px) {
    width: 100%;  /* Hace que el texto ocupe todo el ancho */
    font-size: 1rem;
    padding: 0 20px; /* Agrega algo de padding para evitar que el texto toque los bordes */
  }
`;

export const SectionTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 3.5rem;
  font-weight: bold;
  color: #333;
  text-align: center; 
   @media (max-width: 768px) {
      font-size: 1.5rem;
      padding: 10px;
  }
`;

export const SectionText = styled.p`
  font-size: 1.5rem;
  color: #5a5a5a;
  font-style: italic;
  margin-top: 15px 0px;
`;

export const ConfirmationSection = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  position: relative;
   @media (max-width: 450px) {
      font-size: 1rem;
      border-radius: 50px;
  
  }
`;

export const ImageContainerConfirmation = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${ConfirmationImage});
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  position: absolute;
    @media (max-width: 450px) {
      font-size: 1rem;
      border-radius: 100px;
  
  }
`;

 export const ConfirmationText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2.5rem;
  font-style: italic;
  padding: 2px;
  text-align: center;
   @media (max-width: 450px) {
      font-size: 2rem;
      border-radius: 100px;
  }
`;
