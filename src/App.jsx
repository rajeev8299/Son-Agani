import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { scrollToTop } from './utils/scroll';
import { useScrollReveal } from './hooks/useScrollReveal';
import { ROUTES } from './config/routes';

// Layout & Common Components
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/common/ErrorBoundary';
import LoadingFallback from './components/common/LoadingFallback';

// Route-level code-splitting (Lazy Loading)
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));
const OurGuards = lazy(() => import('./pages/OurGuards'));
const Careers = lazy(() => import('./pages/Careers'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));
const GetQuote = lazy(() => import('./pages/GetQuote'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Global Styles
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
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.ABOUT} element={<About />} />
                <Route path={ROUTES.SERVICES} element={<Services />} />
                <Route path={ROUTES.SERVICE_DETAILS} element={<ServiceDetails />} />
                <Route path={ROUTES.OUR_GUARDS} element={<OurGuards />} />
                <Route path={ROUTES.CAREERS} element={<Careers />} />
                <Route path={ROUTES.TESTIMONIALS} element={<Testimonials />} />
                <Route path={ROUTES.CONTACT} element={<Contact />} />
                <Route path={ROUTES.GET_QUOTE} element={<GetQuote />} />
                <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
              </Routes>
            </Suspense>
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
