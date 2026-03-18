import Hero from "../components/hero";
import AboutSection from "../components/about-section";
import SkillsSection from "../components/skills-section";
import QuestsSection from "../components/quests-section";
import XpSection from "../components/xp-section";
import ContactSection from "../components/contact-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <SkillsSection />

      <QuestsSection />

      <XpSection />

      <ContactSection />
    </main>
  );
}