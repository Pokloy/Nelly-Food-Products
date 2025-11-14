
import HerSection from '@/components/aboutUsPage/hero-section';
import ValuesSection from '@/components/aboutUsPage/values-section';
import AwardsSection from '@/components/aboutUsPage/awards-section';
import TeamSection from "@/components/aboutUsPage/team-section";
import WebinarsSection from "@/components/aboutUsPage/webinars-section";
import StatsSection from '@/components/aboutUsPage/stats-section';

export default function AboutUs() {
  return (
    <main className="pt-24 min-h-screen">
      {/* Hero Section */}
      <HerSection />

      {/* Values Section */}
      <ValuesSection />

      {/* Awards and Recognition Section */}
      <AwardsSection />

      {/* Team Section */}
      <TeamSection />

      {/* Webinars Section */}
      <WebinarsSection />

      {/* Stats Section */}
      <StatsSection />

    </main>
  );
}