// src/app/page.tsx
import Apertura from "@/components/sections/Apertura";
import Work from "@/components/sections/Work";
import Lab from "@/components/sections/Lab";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Apertura />
      <Work />
      <Lab />
      <Contact />
    </main>
  );
}