
import Navigation from '@/components/Navigation';
import ScholarshipsSection from '@/components/ScholarshipsSection';
import Footer from '@/components/Footer';

const Scholarships = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      
      <div className="pt-16">
        <ScholarshipsSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Scholarships;
