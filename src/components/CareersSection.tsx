
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, DollarSign, ChevronRight } from 'lucide-react';
import { inDemandCareers } from '@/data/careers';
import { colleges } from '@/data/colleges';

const CareersSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCollegesByIds = (collegeIds: string[]) => {
    return colleges.filter(college => collegeIds.includes(college.id));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-sora text-slate-900 dark:text-white mb-6">
            In-Demand Careers in
            <span className="text-blue-600 dark:text-blue-400 block">Bhutan</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore high-growth career opportunities across Bhutan's evolving economy. 
            Each career path is mapped to specific colleges offering relevant programs.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover-scale">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">75+</h3>
              <p className="text-slate-600 dark:text-slate-300">High-Demand Jobs</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover-scale">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                  <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">15+</h3>
              <p className="text-slate-600 dark:text-slate-300">Industry Sectors</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover-scale">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-full">
                  <DollarSign className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">25%</h3>
              <p className="text-slate-600 dark:text-slate-300">Average Growth Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Career Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inDemandCareers.map((category, index) => (
            <Card 
              key={category.category}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2 hover:border-blue-200 dark:hover:border-blue-700"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fade-in 0.6s ease-out forwards'
              }}
              onClick={() => setSelectedCategory(selectedCategory === category.category ? null : category.category)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-3xl">{category.icon}</span>
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {category.category}
                  </CardTitle>
                </div>
                <CardDescription className="text-sm text-slate-600 dark:text-slate-300">
                  {category.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {category.jobs.length} Jobs Available
                  </Badge>
                  <ChevronRight 
                    className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${
                      selectedCategory === category.category ? 'rotate-90' : 'group-hover:translate-x-1'
                    }`} 
                  />
                </div>

                {/* Expanded Job Details */}
                {selectedCategory === category.category && (
                  <div className="space-y-4 animate-fade-in">
                    {category.jobs.map((job, jobIndex) => (
                      <div key={jobIndex} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                            {job.title}
                          </h4>
                          <Badge variant="outline" className="text-xs text-green-600 border-green-600">
                            {job.growth}
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">
                          Salary: {job.salary} annually
                        </p>
                        
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-slate-700 dark:text-slate-200">
                            Available at:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {getCollegesByIds(job.collegeIds).map((college) => (
                              <Badge 
                                key={college.id} 
                                variant="secondary" 
                                className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                              >
                                {college.name}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
          >
            Explore All Colleges
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
