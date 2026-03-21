import CoursesSection from "../components/CoursesSection";
import HeroSection from "../components/HeroSection";
import StatsBanner from "../components/StatsBanner";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsBanner />
      <CoursesSection />
      <WhyChooseUs/>
    </div>
  );
}
