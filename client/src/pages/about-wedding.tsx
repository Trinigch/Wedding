

import RSVPPopup from "./../components/RSVPPopup"; // Asegurate de tener el path correcto
import { useState } from "react";
import { useOutletContext } from 'react-router-dom';
import backgroundImage from "./../assets/img/noche.png";
import LugarImage from "./../assets/img/senadordupont.png";

import { useGeolocation } from "../hooks/useGeoLocation"; // asegurate de tener el path correcto
import { SectionContainer, TextContainer, SectionText, SectionTitle, StyledImage, Container, ImageContainer, Title, DateTitle, ConfirmationSection, ConfirmationText, ImageContainerConfirmation } from "./about-wedding.styles";
//import backgroundImagegift from "./../assets/img/background.jpeg";
interface LanguageContextType {
  language: 'en' | 'es';
}interface SectionProps {
  id?: string;
  image: string;  // Si 'image' es una URL de imagen
  title: string;
  text: string | JSX.Element;  
  reverse?: boolean; 
}

export const Section: React.FC<SectionProps>= ({id, image, title, text}) => {
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
function AboutWedding() {
    const { language } = useOutletContext<LanguageContextType>();
  const coords = useGeolocation(" Delta Buenos Aires, Argentina");

  const [isRSVPOpen, setIsRSVPOpen] = useState(false);
  return (
    <Container>
      <ImageContainer>
        <Title>{language === 'es' ? '¡Nos casamos!' : "We're Getting Married!"}</Title>
      </ImageContainer>

      <div style={{ position: "relative", width: "100%", textAlign: "center", marginTop: "50px" }}>
        <DateTitle>{language === 'es' ? '24 de enero de 2026' : 'January 24, 2026'}</DateTitle>
      </div>
     <div style={{  width: "100%", textAlign: "center", marginTop: "150px" }}>
        <Section
        id="location-section"
        title={language === 'es' ? '¿Dónde será?' : 'Where will it be?'}
        image={LugarImage}
        text={
          language === 'es'
            ? 'Queremos que seas parte de este capítulo especial en nuestra historia. La ceremonia se llevará a cabo en la capilla del Convento San Francisco y la celebración será justo al lado, en Senador Dupont.'
            : `We’d love for you to join this special chapter in our story. 
              The ceremony will be held in the chapel of the San Francisco Convent, 
              and the celebration will follow right next door at Senador Dupont.`
        }
      />
  {coords && (
        <div style={{ margin: "30px auto", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Playfair Display", color: "#D4AF37" }}>
            {language === 'es' ? 'Mapa del lugar de la fiesta' : 'Map of the party location'}
        </h2>
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
            {language === 'es' ? 'Confirmar asistencia' : 'RSVP'}
          </button>
     
        </ConfirmationText>
      </ConfirmationSection>

      {isRSVPOpen && <RSVPPopup onClose={() => setIsRSVPOpen(false)} />}
      
      <Section
        image={backgroundImage}
        title={language === 'es' ? 'Y por último recuerda' : 'And finally remember'}
        text={
          language === 'es'
            ? 'Lo importante es que vengas con ganas de pasarla bien. Pero si querés hacernos un regalo, acá está nuestro número de cuenta:CBU: 0720109388000002786472 Alias: PILA.DECIDIO.LUZ'
            : 'The important thing is that you come with the desire to have a good time. But if you want to give us a gift, here is our account number: Venmo ~ Ask Jeremiah'
        }
      />
    </Container>
  );
}

export default AboutWedding;
