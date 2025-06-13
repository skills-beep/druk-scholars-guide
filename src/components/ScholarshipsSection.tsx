
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Crown, Heart, Users, Search, Phone, Mail, Globe, Calendar, FileText } from 'lucide-react';
import { governmentScholarships } from '@/data/colleges';

const ScholarshipsSection = () => {
  const lodenScholarships = governmentScholarships.filter(s => s.provider.includes('Loden'));
  const governmentOnlyScholarships = governmentScholarships.filter(s => !s.provider.includes('Loden'));

  return (
    <section id="scholarships" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sora text-slate-900 dark:text-white mb-6">
            🏛️ Scholarship Opportunities in Bhutan
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive scholarship and financial aid opportunities for Bhutanese students
          </p>
        </div>

        {/* Loden Foundation Scholarships */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            🌟 Loden Foundation Scholarships
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {lodenScholarships.map((scholarship, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 text-green-600 dark:text-green-400">
                      <Heart className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-slate-900 dark:text-white text-lg leading-tight">{scholarship.name}</CardTitle>
                      <Badge variant="secondary" className="mt-1 bg-green-100 text-green-800">Loden Foundation</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      Coverage & Benefits
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{scholarship.coverage}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Eligibility
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{scholarship.criteria}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Duration & Deadline
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      <strong>Duration:</strong> {scholarship.duration}<br/>
                      <strong>Deadline:</strong> {scholarship.deadline}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Application Process
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{scholarship.applicationProcess}</p>
                  </div>

                  <div className="bg-slate-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Contact Information</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="h-3 w-3 text-slate-500" />
                        <span className="text-xs text-slate-600 dark:text-slate-300">{scholarship.contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-3 w-3 text-slate-500" />
                        <span className="text-xs text-slate-600 dark:text-slate-300">{scholarship.contact.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-3 w-3 text-slate-500" />
                        <span className="text-xs text-slate-600 dark:text-slate-300">{scholarship.contact.website}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Government Scholarships */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            🏛️ Government Scholarships
          </h3>
          <div className="grid grid-cols-1 gap-8">
            {governmentOnlyScholarships.map((scholarship, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-600 dark:text-blue-400">
                      <Crown className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-slate-900 dark:text-white text-lg leading-tight">{scholarship.name}</CardTitle>
                      <Badge variant="secondary" className="mt-1 bg-blue-100 text-blue-800">Government</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    {scholarship.provider}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        Coverage
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{scholarship.coverage}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Eligibility
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{scholarship.criteria}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Duration & Deadline
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        <strong>Duration:</strong> {scholarship.duration}<br/>
                        <strong>Deadline:</strong> {scholarship.deadline}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Application Process
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{scholarship.applicationProcess}</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Contact Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="flex items-center gap-2">
                        <Phone className="h-3 w-3 text-blue-600" />
                        <span className="text-xs text-blue-700 dark:text-blue-300">{scholarship.contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-3 w-3 text-blue-600" />
                        <span className="text-xs text-blue-700 dark:text-blue-300">{scholarship.contact.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-3 w-3 text-blue-600" />
                        <span className="text-xs text-blue-700 dark:text-blue-300">{scholarship.contact.website}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
          <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-center">💡 Application Tips</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <h5 className="font-medium mb-2">For Loden Scholarships:</h5>
              <ul className="space-y-1">
                <li>• Apply early during announcement periods</li>
                <li>• Prepare financial documentation for need-based aid</li>
                <li>• Visit loden.org regularly for updates</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">For Government Scholarships:</h5>
              <ul className="space-y-1">
                <li>• Apply immediately after Class 12 results</li>
                <li>• Maintain excellent academic performance</li>
                <li>• Check DAHE website for latest announcements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipsSection;
