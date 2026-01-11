import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ProcessPage from './components/pages/ProcessPage';
import WorkPage from './components/pages/WorkPage';
import AboutPage from './components/pages/AboutPage';
import StartHerePage from './components/pages/StartHerePage';
import ReviewPage from './components/pages/ReviewPage';
import BlueprintPage from './components/pages/BlueprintPage';
import StudioCollaborationPage from './components/pages/StudioCollaborationPage';
import CareersPage from './components/pages/CareersPage';
import ContactPage from './components/pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/start-here" element={<StartHerePage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/blueprint" element={<BlueprintPage />} />
        <Route path="/studio-collaboration" element={<StudioCollaborationPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
