import { useEffect, useState } from "react";
// import axios from "axios"; // Descomentar si se usa la API

interface Coordinates {
  latitude: number;
  longitude: number;
}

export function useGeolocation(address: string): Coordinates | null {
  const [coords, setCoords] = useState<Coordinates | null>(null);

  useEffect(() => {
    const fetchCoords = async () => {
      try {
        // --- PARA USAR LA API (descomentar las siguientes líneas) ---
        // const apiKey = import.meta.env.VITE_POSITIONSTACK_API_KEY;
        // const response = await axios.get("https://api.positionstack.com/v1/forward", {
        //   params: {
        //     access_key: apiKey,
        //     query: address,
        //   },
        // });
        // let result = response.data.data?.[0];
        // console.log("original result from API:", result);

        // --- POSICIÓN FIJA (usada por ahora) ---
        const result = {
          latitude: -34.39894540041092,
          longitude: -58.596108107934924,
        };

        setCoords({ latitude: result.latitude, longitude: result.longitude });

      } catch (error) {
        console.error("Error al obtener coordenadas:", error);
      }
    };

    fetchCoords();
  }, [address]);

  return coords;
}