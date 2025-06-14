
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Users, BookOpen, Award, CheckCircle, ArrowRight, GraduationCap } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Discover Colleges",
      description: "Search through our comprehensive database of colleges and universities in Bhutan and abroad. Filter by location, programs, fees, and more.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BookOpen,
      title: "Compare Programs",
      description: "Use our detailed comparison tools to evaluate different institutions, courses, admission requirements, and career prospects.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Award,
      title: "Find Scholarships",
      description: "Access our scholarship database to discover funding opportunities that match your academic profile and financial needs.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: GraduationCap,
      title: "Apply Successfully",
      description: "Get guided support through the application process with document checklists, deadlines, and expert tips.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const benefits = [
    {
      category: "For Students",
      items: [
        "Free access to comprehensive college information",
        "Personalized recommendations based on your interests",
        "Scholarship matching and application guidance",
        "Career path exploration and planning tools"
      ]
    },
    {
      category: "For Parents",
      items: [
        "Cost calculator for education planning",
        "Transparent information about all expenses",
        "Safety and quality assurance insights",
        "Direct communication with institutions"
      ]
    },
    {
      category: "For Educators",
      items: [
        "Student guidance and counseling resources",
        "Updated curriculum and program information",
        "Partnership opportunities with institutions",
        "Professional development insights"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-sora text-slate-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Your journey to higher education made simple with our step-by-step guidance
          </p>
        </div>

        {/* Step-by-Step Guide */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Your Path to Success
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} p-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-center leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-slate-300 dark:text-slate-600" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Benefits for Everyone
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white flex items-center">
                    <Users className="h-6 w-6 mr-3 text-blue-600" />
                    {benefit.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join thousands of students who have found their perfect college match through DrukScholar
              </p>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3"
                onClick={() => window.location.href = '/'}
              >
                Explore Colleges Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
