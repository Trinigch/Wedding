import styled from "styled-components";

import IguazuFalls from "./../assets/img/iguazu.png";
import FitzRoy from "./../assets/img/Fitz_Roy.jpg";

interface SectionProps {
  id?: string;
  image: string;  // Si 'image' es una URL de imagen
  title: string;
  text: string | JSX.Element;  
  reverse?: boolean; 
}

const Container = styled.div`
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

const SectionContainer = styled.div<{ reverse?: boolean }>`
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
const ExternalButton = styled.a`
  background-color: #f4a261;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
  transition: background 0.3s;

  &:hover {
    background-color: #e76f51;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin: 15px auto;
    padding: 5px 15px;
  }
`;
const Section: React.FC<SectionProps>= ({id, image, title, text, reverse = false }) => {
  
  return (
    <SectionContainer id={id} reverse={reverse || false}>
      <TextContainer>
        <SectionTitle>{title}</SectionTitle>
        <SectionText>{text}</SectionText>
      </TextContainer>
      <StyledImage image={image} />
    </SectionContainer>
  );
};

const StyledImage = styled.div<{ image: string }>`
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

const TextContainer = styled.div`
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

const SectionTitle = styled.h2`
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

const SectionText = styled.p`
  font-size: 1.5rem;
  color: #5a5a5a;
  font-style: italic;
  margin-top: 15px 0px;
`;

function Abouttrip (){

    return (
    <Container>
        <Section
                id="location-section"
                title="Befour the wedding ~ Iguazu Falls"
                image={IguazuFalls}
                reverse={false}
                text={
                    <>
                    <p>
                        Before the wedding – 3 days, 2 nights, and 1 full day at the Iguazú Falls park.
                    </p>
                    <ExternalButton
                        href="https://iguazuargentina.com/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="More info about Iguazu Falls"
                    >
                        IGUAZÚ INFO
                    </ExternalButton>
                    </>
                }
            />
         <Section  
          image={FitzRoy}
          title="After the wedding ~ Fitz roy"
          text={
            <p style={{ fontStyle: "italic", textAlign: "center" }}>
              treking activitis 3 days
            </p>
          }
          reverse={true}
        />   
   
    </Container>

    )
}

export default Abouttrip;