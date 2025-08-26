

import CardList from "./components/CardList";
import CommunitySection from "./components/CommunitySection";
import ConsultingSection from "./components/ConsultingCenter";
import DonateSection from "./components/DonateSection";
import EventCard from "./components/EventCard";
import FloatingCard from "./components/FloatingCard";
import Footer from "./components/Footer";
import FriendlyEvent from "./components/FriendlyEvent";
import HeroSection from "./components/Hero";
import Mission from "./components/Misson";


import Navbar from "./components/Navbar";
import NewsSection from "./components/NewsSection";
import ScrollingText from "./components/ScrollingText";
import SecondScrolling from "./components/SecondScrolling";
import ServiceSection from "./components/ServiceSection";
import Specialist from "./components/Specialist";
import StatsSection from "./components/StatsSection";
import SupportSection from "./components/SupportSection";
import TestimonialSlider from "./components/TestimonialSlider";
import Vision from "./components/Vision";


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ScrollingText />
      <CardList />
      <SupportSection />
      <Mission />
      <Vision />
      <FloatingCard />
      <StatsSection />
      <CommunitySection />
      <ServiceSection />
      <SecondScrolling />
      <FriendlyEvent />
      <EventCard />
      <DonateSection />
      <Specialist />
      <TestimonialSlider />
      <ConsultingSection />
      <NewsSection />
      <Footer />

    </>
  );
}

export default App;