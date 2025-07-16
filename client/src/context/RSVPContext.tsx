import  { createContext, useState, useContext, ReactNode } from "react";

interface RSVP {
  name: string;
  email: string;
  wedding: boolean | null;
  iguazu: boolean | null;
  fitzRoy: boolean | null;
}

interface RSVPContextType {
  rsvps: RSVP[];
  addRSVP: (newRSVP: RSVP) => void;
}

const RSVPContext = createContext<RSVPContextType | undefined>(undefined);

export const useRSVPContext = () => {
  const context = useContext(RSVPContext);
  if (!context) throw new Error("RSVPContext must be used within RSVPProvider");
  return context;
};

export const RSVPProvider = ({ children }: { children: ReactNode }) => {
  const [rsvps, setRsvps] = useState<RSVP[]>([]);

  const addRSVP = (newRSVP: RSVP) => {
    setRsvps(prev => [...prev, newRSVP]);
  };

  return (
    <RSVPContext.Provider value={{ rsvps, addRSVP }}>
      {children}
    </RSVPContext.Provider>
  );
};
