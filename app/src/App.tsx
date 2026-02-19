import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Problems } from '@/sections/Problems';
import { Services } from '@/sections/Services';
import { WhyNow } from '@/sections/WhyNow';
import { Transformation } from '@/sections/Transformation';
import { Trust } from '@/sections/Trust';
import { FAQ } from '@/sections/FAQ';
import { Booking } from '@/sections/Booking';
import { Footer } from '@/sections/Footer';
import { StickyBar } from '@/components/StickyBar';

// Service Pages
import HormoneMetabolicHealth from '@/pages/services/HormoneMetabolicHealth';
import SexualHealth from '@/pages/services/SexualHealth';
import PeptideTherapy from '@/pages/services/PeptideTherapy';
import WeightLoss from '@/pages/services/WeightLoss';
import PerformanceOptimization from '@/pages/services/PerformanceOptimization';
import BiohackingLongevity from '@/pages/services/BiohackingLongevity';
import IVTherapy from '@/pages/services/IVTherapy';
import MensAesthetics from '@/pages/services/MensAesthetics';
import HairRestoration from '@/pages/services/HairRestoration';
import PreventiveCare from '@/pages/services/PreventiveCare';

// Home Page Component
function HomePage() {
  return (
    <div className="relative min-h-screen bg-obsidian">
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Problems />
        <Services />
        <WhyNow />
        <Transformation />
        <Trust />
        <FAQ />
        <Booking />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Sticky Booking Bar */}
      <StickyBar />
    </div>
  );
}

// Service Page Layout (without sticky bar and with simplified nav)
function ServicePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-obsidian">
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Service Pages */}
        <Route path="/services/hormone-metabolic-health" element={
          <ServicePageLayout><HormoneMetabolicHealth /></ServicePageLayout>
        } />
        <Route path="/services/sexual-health" element={
          <ServicePageLayout><SexualHealth /></ServicePageLayout>
        } />
        <Route path="/services/peptide-therapy" element={
          <ServicePageLayout><PeptideTherapy /></ServicePageLayout>
        } />
        <Route path="/services/weight-loss" element={
          <ServicePageLayout><WeightLoss /></ServicePageLayout>
        } />
        <Route path="/services/performance-optimization" element={
          <ServicePageLayout><PerformanceOptimization /></ServicePageLayout>
        } />
        <Route path="/services/biohacking-longevity" element={
          <ServicePageLayout><BiohackingLongevity /></ServicePageLayout>
        } />
        <Route path="/services/iv-therapy" element={
          <ServicePageLayout><IVTherapy /></ServicePageLayout>
        } />
        <Route path="/services/mens-aesthetics" element={
          <ServicePageLayout><MensAesthetics /></ServicePageLayout>
        } />
        <Route path="/services/hair-restoration" element={
          <ServicePageLayout><HairRestoration /></ServicePageLayout>
        } />
        <Route path="/services/preventive-care" element={
          <ServicePageLayout><PreventiveCare /></ServicePageLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
