
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import Index from "./pages/Index";
import Scholarships from "./pages/Scholarships";
import About from "./pages/About";
import PracticalTools from "./pages/PracticalTools";
import StudyTips from "./pages/StudyTips";
import CollegeUpdates from "./pages/CollegeUpdates";
import Community from "./pages/Community";
import Auth from "./pages/Auth";
import CareerFinder from "./pages/CareerFinder";
import CollegeDirectory from "./pages/CollegeDirectory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <DarkModeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/about" element={<About />} />
            <Route path="/tools" element={<PracticalTools />} />
            <Route path="/study-tips" element={<StudyTips />} />
            <Route path="/updates" element={<CollegeUpdates />} />
            <Route path="/community" element={<Community />} />
            <Route path="/career-finder" element={<CareerFinder />} />
            <Route path="/college-directory" element={<CollegeDirectory />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </DarkModeProvider>
  </QueryClientProvider>
);

export default App;
