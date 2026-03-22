import HeroSection from "../components/HeroSection";
import StatsBanner from "../components/StatsBanner";
import CoursesSection from "../components/CoursesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import NewsSection from "../components/NewsSection";
import CTABlock from "../components/CTABlock";
import PageTitle from "../components/PageTitle";
import usePageTitle from "../hooks/usePageTitle";

export default function Home() {
  return (
    <div>
      {usePageTitle("Home")}
      <HeroSection />
      <StatsBanner />
      <CoursesSection />
      <WhyChooseUs />
      <NewsSection />
      <CTABlock />
    </div>
  );
}
