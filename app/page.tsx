import About from "@/components/about";
import { IconCloudDemo } from "@/components/cloud";
import { HeroSection } from "@/components/heroSection";
import Projects from "@/components/projects";
import { Social } from "@/components/social";

export default function Home() {
  return (
    <>
    <HeroSection />
    <About />
    <IconCloudDemo />
    <Projects />
    <Social />
    </>
  );
}
