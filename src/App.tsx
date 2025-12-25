import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import EventPreview from './components/EventPreview';
import PlacePreview from './components/PlacePreview';
import HomePage from './components/pages/HomePage';
import ReviewPage from './components/pages/ReviewPage';
import LinksPage from './components/pages/LinksPage';
import ResourcesPage from './components/pages/ResourcesPage';
import BufoScreeningPage from './components/pages/BufoScreeningPage';
import BufoConsentPage from './components/pages/BufoConsentPage';
import BufoContraindicationsPage from './components/pages/BufoContraindicationsPage';
import BookingPage from './components/pages/BookingPage';
import OnePagerBackup from './components/pages/OnePagerBackup';
import ScrollToTop from './components/ScrollToTop';

// Event Route Component
function EventRoute() {
  const { id } = useParams<{ id: string }>();
  const [language] = useState<'en' | 'es'>('en');

  return <EventPreview eventId={id || ''} language={language} />;
}

// Place Route Component
function PlaceRoute() {
  const { id } = useParams<{ id: string }>();
  const [language] = useState<'en' | 'es'>('en');

  return <PlacePreview placeId={id || ''} language={language} />;
}

// Main App with Routing
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/review" element={<ReviewPage />} />
        {/* Oracle content moved to private route - not linked publicly */}
        <Route path="/private/oracle" element={<OnePagerBackup />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/bufo-screening" element={<BufoScreeningPage />} />
        <Route path="/bufo-consent" element={<BufoConsentPage />} />
        <Route path="/bufo-contraindications" element={<BufoContraindicationsPage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/event/:id" element={<EventRoute />} />
        <Route path="/place/:id" element={<PlaceRoute />} />
        {/* Catch all other routes and redirect to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
