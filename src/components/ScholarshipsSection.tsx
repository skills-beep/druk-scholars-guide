
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Crown, Heart, Users, Search, Phone, Mail } from 'lucide-react';

const ScholarshipsSection = () => {
  const governmentScholarships = [
    {
      id: 1,
      title: "DAHE (RGoB) Scholarship",
      icon: <GraduationCap className="h-6 w-6" />,
      category: "Government",
      description: "Administered by the Department of Adult & Higher Education under the Ministry of Education",
      coverage: "Fully funded for undergrad, postgrad, and vocational studies within Bhutan and abroad (incl. India, Bangladesh)",
      benefits: ["Tuition fees", "Stipend", "Travel allowance"],
      priorityFields: ["Engineering", "Medicine", "IT", "Education", "Priority sectors"],
      specialInfo: "Indian Embassy scholarships: ~90 seats/year for Bhutanese in India (MBBS, Engineering, B.Sc., etc.) via DAHE nomination"
    },
    {
      id: 2,
      title: "King's Scholarship",
      icon: <Crown className="h-6 w-6" />,
      category: "Royal",
      description: "Prestigious merit-based award funded by the Royal Civil Service Commission & DAHE",
      coverage: "Fully funded for overseas degrees in various disciplines",
      slots: "Around 9 annually for high-performing students",
      contacts: [
        {
          name: "Ms. Tshering Lhamo (HR Officer, RCSC)",
          phone: "322491",
          email: "tsheringlhamo@rcsc.gov.bt"
        },
        {
          name: "Sherub Gyeltshen (Chief Program Officer, DAHE)",
          phone: "17389849",
          email: "gyeltshens@moe.gov.bt"
        }
      ]
    }
  ];

  const ngoScholarships = [
    {
      id: 3,
      title: "YDF – Queen Mother Tseyring Pem Wangchuck Scholarships",
      icon: <Heart className="h-6 w-6" />,
      category: "NGO",
      description: "Bhutan Youth Development Fund supporting students from economically disadvantaged backgrounds",
      coverage: "Primary through higher secondary students",
      programs: ["Golden Youth Award", "IBDP at UWC funding"],
      categories: [
        "Basic (Pre-primary–Class X)",
        "Higher Secondary (Class XI–XII)",
        "UWC/International study awardees"
      ]
    },
    {
      id: 4,
      title: "RTC–YDF Need-Based Scholarship",
      icon: <Users className="h-6 w-6" />,
      category: "Institutional",
      description: "Offered jointly by Royal Thimphu College and YDF",
      coverage: "Full tuition, accommodation, living expenses",
      eligibility: "Bhutanese ≤22 yrs, ≥50% academic score, with financial need"
    },
    {
      id: 5,
      title: "Trongsa Penlop Scholarship",
      icon: <Search className="h-6 w-6" />,
      category: "National",
      description: "Sponsored by RCSC for leadership and merit-based study in Bhutan",
      applicationInfo: "Annual intake: Announcements and applications by Feb each year in the scholarship section"
    }
  ];

  return (
    <section id="scholarships" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sora text-slate-900 dark:text-white mb-6">
            🏛️ Government-Sponsored Scholarships
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive scholarship opportunities for Bhutanese students to pursue higher education
          </p>
        </div>

        {/* Government Scholarships */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Government Scholarships
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {governmentScholarships.map((scholarship) => (
              <Card key={scholarship.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-600 dark:text-blue-400">
                      {scholarship.icon}
                    </div>
                    <div>
                      <CardTitle className="text-slate-900 dark:text-white">{scholarship.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">{scholarship.category}</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    {scholarship.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Coverage:</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{scholarship.coverage}</p>
                  </div>
                  
                  {scholarship.benefits && (
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {scholarship.benefits.map((benefit, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {scholarship.priorityFields && (
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Priority Fields:</h4>
                      <div className="flex flex-wrap gap-2">
                        {scholarship.priorityFields.map((field, index) => (
                          <Badge key={index} variant="outline" className="text-xs bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300">
                            {field}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {scholarship.slots && (
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Available Slots:</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{scholarship.slots}</p>
                    </div>
                  )}

                  {scholarship.contacts && (
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Contact Information:</h4>
                      <div className="space-y-3">
                        {scholarship.contacts.map((contact, index) => (
                          <div key={index} className="bg-slate-50 dark:bg-gray-700/50 p-3 rounded-lg">
                            <p className="font-medium text-slate-900 dark:text-white text-sm">{contact.name}</p>
                            <div className="flex items-center gap-4 mt-2">
                              <div className="flex items-center gap-1">
                                <Phone className="h-3 w-3 text-slate-500" />
                                <span className="text-xs text-slate-600 dark:text-slate-300">{contact.phone}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Mail className="h-3 w-3 text-slate-500" />
                                <span className="text-xs text-slate-600 dark:text-slate-300">{contact.email}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {scholarship.specialInfo && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <p className="text-blue-800 dark:text-blue-300 text-sm">{scholarship.specialInfo}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* NGO & Institutional Scholarships */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            🌐 NGO & Institutional Scholarships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ngoScholarships.map((scholarship) => (
              <Card key={scholarship.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-600 dark:text-purple-400">
                      {scholarship.icon}
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">{scholarship.category}</Badge>
                      <CardTitle className="text-slate-900 dark:text-white text-lg leading-tight">{scholarship.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    {scholarship.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {scholarship.coverage && (
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1 text-sm">Coverage:</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{scholarship.coverage}</p>
                    </div>
                  )}

                  {scholarship.programs && (
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1 text-sm">Programs:</h4>
                      <div className="flex flex-wrap gap-1">
                        {scholarship.programs.map((program, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {program}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {scholarship.categories && (
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1 text-sm">Category Levels:</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        {scholarship.categories.map((category, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            {category}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {scholarship.eligibility && (
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1 text-sm">Eligibility:</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{scholarship.eligibility}</p>
                    </div>
                  )}

                  {scholarship.applicationInfo && (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded-lg">
                      <p className="text-yellow-800 dark:text-yellow-300 text-sm">{scholarship.applicationInfo}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipsSection;
