
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, FileText, Phone, Newspaper, ArrowLeft } from 'lucide-react';
import CostCalculator from '@/components/CostCalculator';
import DocumentChecklist from '@/components/DocumentChecklist';
import ContactDirectory from '@/components/ContactDirectory';
import NewsUpdates from '@/components/NewsUpdates';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

type Tool = 'overview' | 'calculator' | 'checklist' | 'contacts' | 'news';

const PracticalTools = () => {
  const [selectedTool, setSelectedTool] = useState<Tool>('overview');

  const tools = [
    {
      id: 'calculator' as Tool,
      title: 'Cost Calculator',
      description: 'Estimate total education costs including fees, accommodation, and living expenses',
      icon: Calculator,
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
    },
    {
      id: 'checklist' as Tool,
      title: 'Document Checklist',
      description: 'Track required documents for applications and scholarships',
      icon: FileText,
      color: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400'
    },
    {
      id: 'contacts' as Tool,
      title: 'Contact Directory',
      description: 'Easy access to college admissions offices, scholarship providers, and career counselors',
      icon: Phone,
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400'
    },
    {
      id: 'news' as Tool,
      title: 'News & Updates',
      description: 'Latest updates about education policies, new programs, and opportunities in Bhutan',
      icon: Newspaper,
      color: 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400'
    }
  ];

  const renderSelectedTool = () => {
    switch (selectedTool) {
      case 'calculator':
        return <CostCalculator />;
      case 'checklist':
        return <DocumentChecklist />;
      case 'contacts':
        return <ContactDirectory />;
      case 'news':
        return <NewsUpdates />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedTool === 'overview' ? (
            <>
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-sora text-slate-900 dark:text-white mb-6">
                  Practical Tools
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                  Essential tools to help you navigate your educational journey in Bhutan
                </p>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {tools.map((tool) => {
                  const IconComponent = tool.icon;
                  return (
                    <Card 
                      key={tool.id}
                      className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2 hover:border-blue-200 dark:hover:border-blue-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm"
                      onClick={() => setSelectedTool(tool.id)}
                    >
                      <CardHeader className="text-center">
                        <div className="flex items-center justify-center mb-4">
                          <div className={`p-4 rounded-full ${tool.color}`}>
                            <IconComponent className="h-8 w-8" />
                          </div>
                        </div>
                        <CardTitle className="text-xl font-semibold mb-2">
                          {tool.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {tool.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <Button className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          Use Tool
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Benefits Section */}
              <Card className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-slate-800/80 dark:to-slate-700/80 border-0 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">
                    Why Use Our Practical Tools?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">💰</span>
                      </div>
                      <h3 className="font-semibold mb-2">Financial Planning</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Plan your education budget with accurate cost estimates
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📋</span>
                      </div>
                      <h3 className="font-semibold mb-2">Stay Organized</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Keep track of important documents and deadlines
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📞</span>
                      </div>
                      <h3 className="font-semibold mb-2">Easy Access</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Find contact information and stay updated with news
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              {/* Back Button */}
              <div className="mb-6">
                <Button
                  variant="outline"
                  onClick={() => setSelectedTool('overview')}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Tools
                </Button>
              </div>

              {/* Selected Tool */}
              {renderSelectedTool()}
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PracticalTools;
