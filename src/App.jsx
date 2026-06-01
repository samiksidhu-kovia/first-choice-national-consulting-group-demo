import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ProtectedRoute from '@/components/ProtectedRoute';

// Layout
import SiteLayout from '@/components/layout/SiteLayout';

// Public pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Values from '@/pages/Values';
import Capabilities from '@/pages/Capabilities';
import Services from '@/pages/Services';
import BusinessConsulting from '@/pages/services/BusinessConsulting';
import HumanResources from '@/pages/services/HumanResources';
import LeadershipDevelopment from '@/pages/services/LeadershipDevelopment';
import DEI from '@/pages/services/DEI';
import Work from '@/pages/Work';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Contact from '@/pages/Contact';

// Auth pages
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';

// Admin pages
import BlogAdmin from '@/pages/admin/BlogAdmin';

const AuthenticatedApp = () => {
  const { isLoadingPublicSettings } = useAuth();

  if (isLoadingPublicSettings) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-warm-white">
        <div className="w-8 h-8 border-4 border-sage-light border-t-sage rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Auth routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Protected admin routes */}
      <Route element={<ProtectedRoute unauthenticatedElement={<Navigate to="/login" replace />} />}>
        <Route path="/admin/blog" element={<BlogAdmin />} />
      </Route>

      {/* Public site routes */}
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/values" element={<Values />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/business-consulting" element={<BusinessConsulting />} />
        <Route path="/services/human-resources" element={<HumanResources />} />
        <Route path="/services/leadership-development" element={<LeadershipDevelopment />} />
        <Route path="/services/dei" element={<DEI />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App