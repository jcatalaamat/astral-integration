import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ContentCreator from './components/pages/ContentCreator';
import LifeOS from './components/pages/LifeOS';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Internal tools */}
        <Route path="/content-studio" element={<ContentCreator />} />
        <Route path="/life-os" element={<LifeOS />} />
        {/* Redirect all old routes to homepage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
