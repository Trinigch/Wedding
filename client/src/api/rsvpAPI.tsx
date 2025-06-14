export const sendRSVP = async (rsvpData: {
  name: string;
  email: string;
 wedding: boolean | null;
  iguazu: boolean | null;
  fitzRoy: boolean | null;
}) => {
  const res = await fetch("/api/rsvp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(rsvpData)
  });

  if (!res.ok) {
    throw new Error("Failed to send RSVP");
  }

  return res.json();
};