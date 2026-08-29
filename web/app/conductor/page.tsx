import type { Metadata } from "next";
import { PlaceholderScreen } from "@/components/placeholder-screen";

export const metadata: Metadata = {
  title: "Conductor",
};

export default function ConductorPage() {
  return (
    <PlaceholderScreen
      title="Conductor dashboard"
      description="Placeholder for conductor login, bus-code lookup, and service updates. The working conductor flow is still in frontend/conductor.html."
    />
  );
}
