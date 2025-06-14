import styled from "styled-components";

interface WhoscomingProps {
  weddingNames: string[];
  iguazuNames: string[];
  fitzRoyNames: string[];
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

const Whoscoming: React.FC<WhoscomingProps> = ({
  weddingNames,
  iguazuNames,
  fitzRoyNames
}) => {
  return (
    <Container>
      <Grid>
        <Card>
          <CardTitle>💒 Wedding</CardTitle>
         {weddingNames.length > 0 ? (
        <ul>
          {weddingNames
            .filter(name => name.trim() !== "") // evita strings vacíos
            .map((name, i) => (
              <Name key={i}>{name}</Name>
            ))}
        </ul>
      ) : <p>No RSVPs yet</p>}
        </Card>

        <Card>
          <CardTitle>🌴 Iguazú Trip</CardTitle>
          {iguazuNames.length > 0 ? (
            <ul>
              {iguazuNames
                .filter(name => name.trim() !== "")
                .map((name, i) => <Name key={i}>{name}</Name>)}
            </ul>
          ) : <p>No RSVPs yet</p>}
        </Card>

        <Card>
          <CardTitle>🏔 Fitz Roy Trip</CardTitle>
          {fitzRoyNames.length > 0 ? (
            <ul>
              {fitzRoyNames
                .filter(name => name.trim() !== "")
                .map((name, i) => <Name key={i}>{name}</Name>)}
            </ul>
          ) : <p>No RSVPs yet</p>}
        </Card>
      </Grid>
    </Container>
  );
};

export default Whoscoming;