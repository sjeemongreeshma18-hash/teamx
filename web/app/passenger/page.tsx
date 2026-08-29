import type { Metadata } from "next";
import { PlaceholderScreen } from "@/components/placeholder-screen";

export const metadata: Metadata = {
  title: "Passenger",
};

export default function PassengerPage() {
  return (
    <PlaceholderScreen
      title="Passenger search"
      description="Placeholder for From/To search, time filters, and trip results. The working search flow is still in frontend/index.html."
    />
  );
}
