import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { scrollToTop } from './utils/scroll';
import { useScrollReveal } from './hooks/useScrollReveal';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/common/ErrorBoundary';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import OurGuards from './pages/OurGuards';
import Careers from './pages/Careers';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import GetQuote from './pages/GetQuote';
import NotFound from './pages/NotFound';

// Styles
import './styles/variables.css';
import './styles/global.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/components.css';
import './styles/responsive.css';
import './components/RotatingSecurityBadge.css';

// Global ScrollToTop & ScrollReveal helper on route change
const AppLifecycleController = () => {
  const { pathname } = useLocation();
  useScrollReveal();

  useEffect(() => {
    // When navigating to a new route, open from absolute top
    scrollToTop('instant');
  }, [pathname]);

  return null;
};

function AppContent() {
  const location = useLocation();

  return (
    <>
      <AppLifecycleController />
      <div className="app-container">
        <Header />
        <main id="main-content" key={location.pathname} className="page-transition-wrapper">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetails />} />
              <Route path="/our-guards" element={<OurGuards />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/get-a-quote" element={<GetQuote />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ErrorBoundary>
        <AppContent />
      </ErrorBoundary>
    </Router>
  );
}

export default App;
