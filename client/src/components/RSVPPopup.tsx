// src/components/RSVPPopup.tsx
import React, { useState } from "react";
import styled from "styled-components";
import { sendRSVP } from "../api/rsvpAPI";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff8f0;
  padding: 40px 30px;
  border-radius: 15px;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-family: "Playfair Display", serif;
  color: #333;
`;

const Label = styled.label`
  display: block;
  color: #333;
  text-align: left;
  margin: 15px 0 5px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  color: #333;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #d4af37;
  }
`;

const YesNoContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 5px;
`;

const YesNoButton = styled.button<{ selected: boolean }>`
  flex: 1;
  padding: 10px 0;
  border: 2px solid ${({ selected }) => (selected ? "#d4af37" : "#ccc")};
  background-color: ${({ selected }) => (selected ? "#d4af37" : "white")};
  color: ${({ selected }) => (selected ? "white" : "#333")};
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    border-color: #d4af37;
  }
`;

const SubmitButton = styled.button`
  margin-top: 25px;
  width: 100%;
  padding: 12px;
  background-color: #d4af37;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background-color: #c49e2e;
  }
`;

const CloseButton = styled.button`
  margin-top: 20px;
  background: transparent;
  border: none;
  color: #555;
  font-size: 0.9rem;
  text-decoration: underline;
  cursor: pointer;
`;

interface RSVPPopupProps {
  onClose: () => void;
}

const RSVPPopup: React.FC<RSVPPopupProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
const [wedding, setWedding] = useState<boolean | null>(null);
const [iguazu, setIguazu] = useState<boolean | null>(null);
const [fitzRoy, setFitzRoy] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    // Enviar datos a la db wedding_db
  try {
    await sendRSVP({ name, email, wedding, iguazu, fitzRoy });
    alert("Thank you for confirming!");
    onClose();
  } catch (err) {
    console.error("Error sending RSVP", err);
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        <Title>Confirm Your Attendance</Title>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            required
          />

                <Label>Wedding</Label>
          <YesNoContainer>
            <YesNoButton
              type="button"
              selected={wedding === true}
              onClick={() => setWedding(true)}
              aria-label="Yes"
            >
              ✅
            </YesNoButton>
            <YesNoButton
              type="button"
              selected={wedding === false}
              onClick={() => setWedding(false)}
           aria-label="No"
            >
             ❌
            </YesNoButton>
          </YesNoContainer>

          <Label>Iguazú Falls Trip</Label>           
          <YesNoContainer>
            <YesNoButton
              type="button"
              selected={iguazu === true}
              onClick={() => setIguazu(true)}
            >
              ✅
            </YesNoButton>
            <YesNoButton
              type="button"
              selected={iguazu === false}
              onClick={() => setIguazu(false)}
            aria-label="No"
            >
              ❌
            </YesNoButton>
          </YesNoContainer>

          <Label>Fitz Roy Trip</Label>
          <YesNoContainer>
            <YesNoButton
              type="button"
              selected={fitzRoy === true}
              onClick={() => setFitzRoy(true)}
            >
              ✅
            </YesNoButton>
            <YesNoButton
              type="button"
              selected={fitzRoy === false}
              onClick={() => setFitzRoy(false)}
             aria-label="No"
              >
                ❌
            </YesNoButton>
          </YesNoContainer>

          <Label htmlFor="email">Email (optional)</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e : React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />

          <SubmitButton type="submit">Send RSVP</SubmitButton>
        </form>

        <CloseButton onClick={onClose}>Cancel</CloseButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default RSVPPopup;