import { useEffect, useState } from 'react';

import axios from 'axios';
import Whoscoming from '../components/Whoscoming';


interface RSVP {
  name: string;
  wedding: boolean |  null;
  iguazu: boolean | null;
  fitzRoy: boolean | null;
}

function WhoPage() {
  const [weddingNames, setWeddingNames] = useState<string[]>([]);
  const [iguazuNames, setIguazuNames] = useState<string[]>([]);
  const [fitzRoyNames, setFitzRoyNames] = useState<string[]>([]);

 useEffect(() => {
    const fetchNames = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/rsvp');
        const data: RSVP[] = response.data;
console.log("RSVP data from API:", data);
        const wedding = data.filter(p => p.wedding === true).map(p => p.name).sort();
        const iguazu = data.filter(p => p.iguazu === true).map(p => p.name).sort();
        const fitzRoy = data.filter(p => p.fitzRoy === true).map(p => p.name).sort();

        setWeddingNames(wedding);
        setIguazuNames(iguazu);
        setFitzRoyNames(fitzRoy);
      } catch (error) {
        console.error('Error fetching RSVP names:', error);
      }
    };

    fetchNames();
  }, []);

  return (
    <Whoscoming

      iguazuNames={iguazuNames}
      weddingNames={weddingNames}
      fitzRoyNames={fitzRoyNames}
    />
  );
}

export default WhoPage;
