import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { HeroEditorial } from "@/components/sections/HeroEditorial";

const Manifesto = dynamic(() => import("@/components/sections/Manifesto").then((mod) => mod.Manifesto), {
  loading: () => <div className="w-full min-h-[50vh] bg-background" />,
});
const EngineeringApproach = dynamic(() => import("@/components/sections/EngineeringApproach").then((mod) => mod.EngineeringApproach), {
  loading: () => <div className="w-full min-h-[50vh] bg-background" />,
});
const EditorialWork = dynamic(() => import("@/components/sections/EditorialWork").then((mod) => mod.EditorialWork), {
  loading: () => <div className="w-full min-h-[50vh] bg-background" />,
});
const HumanContact = dynamic(() => import("@/components/sections/HumanContact").then((mod) => mod.HumanContact), {
  loading: () => <div className="w-full min-h-[50vh] bg-background" />,
});
const Footer = dynamic(() => import("@/components/layout/Footer").then((mod) => mod.Footer));

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10 w-full">
        <HeroEditorial />
        <Manifesto />
        <EngineeringApproach />
        <EditorialWork />
        <HumanContact />
      </main>
      <Footer />
    </>
  );
}
