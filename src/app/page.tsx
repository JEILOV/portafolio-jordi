// src/app/page.tsx
import Navbar from "@/components/layout/Navbar";
import Apertura from "@/components/sections/Apertura";
import Work from "@/components/sections/Work";
import Lab from "@/components/sections/Lab";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Apertura />
      <Work />
      <Lab />
      <Contact />
    </main>
  );
}