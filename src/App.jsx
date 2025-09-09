import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Appointment from "./pages/Appointment";
import HeroSection from "./components/Hero";
import CardList from "./components/CardList";
import CommunitySection from "./components/CommunitySection";
import ConsultingSection from "./components/ConsultingCenter";
import DonateSection from "./components/DonateSection";
import EventCard from "./components/EventCard";
import FloatingCard from "./components/FloatingCard";
import Footer from "./components/Footer";
import FriendlyEvent from "./components/FriendlyEvent";
import Mission from "./components/Misson";
import NewsSection from "./components/NewsSection";
import ScrollingText from "./components/ScrollingText";
import SecondScrolling from "./components/SecondScrolling";
import ServiceSection from "./components/ServiceSection";
import Specialist from "./components/Specialist";
import StatsSection from "./components/StatsSection";
import SupportSection from "./components/SupportSection";
import TestimonialSlider from "./components/TestimonialSlider";
import Vision from "./components/Vision";
import Donate from "./pages/Donate";
import ErrorPage from "./pages/Error";

function App() {
  return (
    <Router>
      <Nav /> {/* Navbar is always visible */}

      <Routes>
        <Route
          path="/"
          element={
            <>
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
          }
        />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="error" element={<ErrorPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
