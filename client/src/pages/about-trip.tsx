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

const IntroText = styled.p`
  font-style: italic;
  text-align: center;
  font-size: 2rem;
  color: #5a5a5a;
  margin: 40px 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
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
            <IntroText>
              The wedding is 4 days and 3 nights on an island north of Buenos Aires.
During your stay on the island, we’ve covered the cost of the venue and all meals. We’ll also take a few excursions off the island while we're there.

We’re planning additional trips within Argentina before and after the wedding, and everyone is welcome to join — I’ll be your tour guide!

Before the wedding, we’ll visit the breathtaking Iguazú Falls (3 days, 2 nights).

After the wedding, we’ll explore Patagonia to see its famous mountains, lakes, and glaciers (5 days, 4 nights).
            </IntroText>
              <Section
                id="location-section"
                title="Iguazu Falls"
                image={IguazuFalls}
                reverse={false}
                text={
                    <>
                    <p>
                      <b>  Anyone who want to come to Iguazu Falls: </b> 
Tuesday Jan 20th fly in to Buenos Air to the international airport Ezeiza, EZE, take a taxi or a Bus to the Domestic Airport, its called Aeroparque Jorge Newbery, or AEP. Fly from AEP very near downtown Buenos Aires to Cataratas Del Iguazu, IGR.
We will meet at a Hotel yet to be choosen.~ we will update~
Weds Jan 21st we will take the entire day to tour Iguazu falls.
Thursday Jan 22nd we will fly back to Buenos Aires, stay in San Telmo and the San Telmo Suites.
Friday Jan 23rd Take boat to Wedding island.
                    </p>
                    <ExternalButton
                        href="https://iguazuargentina.com/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="More info about Iguazu Falls"
                    >
                       IGUAZU FALLS
                    </ExternalButton>
                    </>
                }
            />
         <Section  
          image={FitzRoy}
          title="Patagonia Trip"
          text={
            <p style={{ fontStyle: "italic", textAlign: "center" }}>
             On Monday, January 26th, we’ll leave the wedding island and head to Aeroparque (AEP), the domestic airport near downtown Buenos Aires. From there, we’ll fly to El Calafate Airport (FTE). After landing, we’ll take a 2-hour transfer to El Chaltén, a charming town nestled at the base of Mount Fitz Roy.
On Tuesday, January 27th, we’ll hike through stunning landscapes filled with scenic views, crystal-clear lakes, and snow-capped mountains topped with glaciers.
On Wednesday, January 28th, we’ll return to El Calafate and rest up for the following day.
On Friday, January 29th, we’ll visit the breathtaking Perito Moreno Glacier.
Saturday, January 30th is flexible — you’re welcome to stay longer or begin your journey home.
            </p>
          }
          reverse={true}
        />   
   
    </Container>

    )
}

export default Abouttrip;