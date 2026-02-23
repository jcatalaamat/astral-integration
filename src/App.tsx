import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { FreemiumProvider } from './context/FreemiumContext';
import HomePage from './components/pages/HomePage';
import WorkPage from './components/pages/WorkPage';
import AccessPage from './components/pages/AccessPage';
import PractitionersPage from './components/pages/PractitionersPage';
import CaseStudyPage from './components/pages/CaseStudyPage';
import HowItWorksPage from './components/pages/HowItWorksPage';
import ToolsHub from './components/pages/ToolsHub';
import { LifeOSLanding, LifeOSApp } from './components/pages/life-os';
import { ContentStudioLanding, ContentStudioApp } from './components/pages/content-studio';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <FreemiumProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Agency site */}
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="/access" element={<AccessPage />} />
          <Route path="/practitioners" element={<PractitionersPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />

          {/* Tools Hub */}
          <Route path="/tools" element={<ToolsHub />} />

          {/* Life OS */}
          <Route path="/tools/life-os" element={<LifeOSLanding />} />
          <Route path="/tools/life-os/app" element={<LifeOSApp />} />

          {/* Content Studio */}
          <Route path="/tools/content-studio" element={<ContentStudioLanding />} />
          <Route path="/tools/content-studio/app" element={<ContentStudioApp />} />

          {/* Legacy redirects */}
          <Route path="/life-os" element={<Navigate to="/tools/life-os" replace />} />
          <Route path="/content-studio" element={<Navigate to="/tools/content-studio" replace />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </FreemiumProvider>
  );
}

export default App;
