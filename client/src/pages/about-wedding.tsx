
import styled from "styled-components";
import RSVPPopup from "./../components/RSVPPopup"; // Asegurate de tener el path correcto
import { useState } from "react";
import NosCasamos from "./../assets/img/hero1.jpeg";
import backgroundImage from "./../assets/img/noche.png";
import LugarImage from "./../assets/img/senadordupont.png";
import ConfirmationImage from "./../assets/img/backgrounlejos.png";

import { useGeolocation } from "../hooks/useGeoLocation"; // asegurate de tener el path correcto

//import backgroundImagegift from "./../assets/img/background.jpeg";

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

const Title = styled.h1`
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
const DateTitle = styled.h1`
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

const ImageContainer = styled.div`
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

const SectionContainer = styled.div.withConfig({shouldForwardProp: (prop) => prop !== 'reverse' })<{ reverse?: boolean }>`
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

const Section: React.FC<SectionProps>= ({id, image, title, text}) => {
  return (
    <SectionContainer id={id} >
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

const ConfirmationSection = styled.div`
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

const ImageContainerConfirmation = styled.div`
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

const ConfirmationText = styled.div`
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

function AboutWedding() {
  const coords = useGeolocation(" Delta Buenos Aires, Argentina");

  const [isRSVPOpen, setIsRSVPOpen] = useState(false);
  return (
    <Container>
      <ImageContainer>
        <Title>We're Getting Married!</Title>
      </ImageContainer>

      <div style={{ position: "relative", width: "100%", textAlign: "center", marginTop: "50px" }}>
         <DateTitle>January 24, 2026</DateTitle>
      </div>
     <div style={{  width: "100%", textAlign: "center", marginTop: "150px" }}>
      <Section
  id="location-section"
  title="Where will it be?"
  image={LugarImage}
  text={`We’d love for you to join this special chapter in our story. 
    The ceremony will be held in the chapel of the San Francisco Convent, 
    and the celebration will follow right next door at Senador Dupont.`}
  reverse={false}
/>
  {coords && (
        <div style={{ margin: "30px auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display", color: "#D4AF37" }}>Map of the party location</h2>
          <iframe
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "10px", maxWidth: "800px" }}
            loading="lazy"
            allowFullScreen
           src={`https://www.google.com/maps/embed/v1/view?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&center=${coords.latitude},${coords.longitude}&zoom=15`}
          />
        </div>



      )}
</div>

        <ConfirmationSection>
        <ImageContainerConfirmation />
        <ConfirmationText>
          <button
            onClick={() => setIsRSVPOpen(true)}
            style={{
              padding: "12px 30px",
              fontSize: "1.5rem",
              borderRadius: "10px",
              background: "#D4AF37",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            RSVP
          </button>
     
        </ConfirmationText>
      </ConfirmationSection>

      {isRSVPOpen && <RSVPPopup onClose={() => setIsRSVPOpen(false)} />}
      
 

      <Section
        image={backgroundImage}
        title="And finally remember"
        text="The important thing is that you come with the desire to have a good time. But if you want to give us a gift, here is our account number: .  ~  ~ "
      />
    </Container>
  );
}

export default AboutWedding;
