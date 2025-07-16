import styled from "styled-components";
import { useRSVPContext } from "../context/RSVPContext";
import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from "react";
interface RSVP {
  name: string;
  email: string;
  wedding: boolean | null;
  iguazu: boolean | null;
  fitzRoy: boolean | null;
}
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fdf8f4;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1000px;
`;

const Card = styled.div`
  background-color: #ffffff;
  border: 2px solid #e76f51;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

const CardTitle = styled.h3`
  color: #e76f51;
  margin-bottom: 16px;
`;

const Name = styled.li`
  list-style: none;
  font-weight: 500;
  margin: 4px 0;
`;

const Whoscoming = () => {
  const [rsvps, setRsvps] = useState<RSVP[]>([]);

useEffect(() => {
  const stored = localStorage.getItem("rsvpList");
  if (stored) {
    setRsvps(JSON.parse(stored));
  }
}, []);

  const { language } = useOutletContext<{ language: 'en' | 'es' }>();

  const weddingNames = rsvps.filter(r => r.wedding).map(r => r.name);
  const iguazuNames = rsvps.filter(r => r.iguazu).map(r => r.name);
  const fitzRoyNames = rsvps.filter(r => r.fitzRoy).map(r => r.name);
 return (
    <Container>
      <Grid>
        <Card>
          <CardTitle>💒 {language === 'es' ? 'Boda' : 'Wedding'}</CardTitle>
          <ul>
            {weddingNames.length > 0
              ? weddingNames.map((name, i) => <Name key={i}>{name}</Name>)
              : <p>No RSVPs yet</p>}
          </ul>
        </Card>

        {language === 'en' && (
          <>
            <Card>
              <CardTitle>🌴 Iguazú Trip</CardTitle>
              <ul>
                {iguazuNames.length > 0
                  ? iguazuNames.map((name, i) => <Name key={i}>{name}</Name>)
                  : <p>No RSVPs yet</p>}
              </ul>
            </Card>

            <Card>
              <CardTitle>🏔 Fitz Roy Trip</CardTitle>
              <ul>
                {fitzRoyNames.length > 0
                  ? fitzRoyNames.map((name, i) => <Name key={i}>{name}</Name>)
                  : <p>No RSVPs yet</p>}
              </ul>
            </Card>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default Whoscoming;