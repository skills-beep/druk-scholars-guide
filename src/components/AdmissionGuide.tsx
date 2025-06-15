
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, FileText, Users, CheckCircle, Clock, AlertCircle, BookOpen, Globe, Building2 } from 'lucide-react';

const AdmissionGuide = () => {
  const admissionSteps = [
    {
      step: 1,
      title: "Check Eligibility Criteria",
      description: "Each college or university has its own minimum academic requirements",
      timeline: "Before Application",
      requirements: [
        "Pass BHSEC/Class 12 or equivalent",
        "Minimum percentage (usually 50-60% aggregate)",
        "Subject-specific criteria (PCM for engineering, PCB for nursing)"
      ]
    },
    {
      step: 2,
      title: "Choose Institution Type",
      description: "Select between Government colleges (RUB), Medical colleges (KGUMSB), or Private colleges",
      timeline: "January-February",
      requirements: ["Research different colleges", "Check specific course requirements", "Compare fee structures"]
    },
    {
      step: 3,
      title: "Apply Online through CAS",
      description: "For RUB colleges, use the Centralized Admission System (CAS)",
      timeline: "February-March",
      requirements: [
        "Visit RUB website",
        "Register with CID/BHSEC index number",
        "Upload documents & pay application fee (Nu.300-500)"
      ]
    },
    {
      step: 4,
      title: "Shortlisting & Selection",
      description: "Merit-based ranking from BHSEC marks with possible entrance tests",
      timeline: "April-May",
      requirements: ["Meet cutoff marks", "Attend entrance test if required", "Wait for merit list"]
    },
    {
      step: 5,
      title: "Admission Confirmation",
      description: "Complete admission formalities and document verification",
      timeline: "May-June",
      requirements: ["Pay admission fees", "Submit original documents", "Medical fitness certificate"]
    }
  ];

  const institutionTypes = [
    {
      type: "Government Colleges under RUB",
      description: "Royal University of Bhutan colleges with centralized admission",
      process: "Apply through CAS portal (rub.edu.bt)",
      examples: ["Sherubtse College", "CST (College of Science & Technology)", "Paro College of Education", "Gaeddu College of Business Studies"],
      icon: GraduationCap,
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
    },
    {
      type: "Health & Medical Colleges (KGUMSB)",
      description: "Khesar Gyalpo University of Medical Sciences colleges",
      process: "Separate application with entrance tests and interviews",
      examples: ["Faculty of Nursing and Public Health", "KGUMSB Medical Programs"],
      icon: Building2,
      color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
    },
    {
      type: "Private Colleges",
      description: "Independent institutions with individual admission processes",
      process: "Apply directly to each college with separate requirements",
      examples: ["Royal Thimphu College (RTC)", "Norbuling Rigter College", "Apollo Bhutan Institute of Nursing"],
      icon: Users,
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400"
    }
  ];

  const timeline = [
    { month: "January-February", activity: "BHSEC Results Declared", status: "preparation" },
    { month: "February-March", activity: "Online Applications Open (RUB, etc)", status: "active" },
    { month: "March-April", activity: "Application Deadline", status: "deadline" },
    { month: "April-May", activity: "Shortlist & Admission Offers", status: "waiting" },
    { month: "June", activity: "College Opens/Classes Begin", status: "start" }
  ];

  const casSteps = [
    "Visit the CAS portal during admission window (Feb-Mar)",
    "Register using your CID/BHSEC index number",
    "Select college and course preferences",
    "Upload required documents (Class 10 & 12 Mark Sheets, CID, passport photo)",
    "Pay application fee (Nu.300 – Nu.500 typically)",
    "You can choose multiple programs in order of preference"
  ];

  const requiredDocuments = [
    "Class XII Marksheet (Original & Photocopies)",
    "Class X Marksheet",
    "Character Certificate from School",
    "Medical Certificate/Fitness Certificate",
    "Citizenship Identity Card (CID)",
    "Recent Passport Size Photographs",
    "Entrance Exam Scorecard (if applicable)",
    "Migration Certificate (if applicable)"
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'preparation': return 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300';
      case 'active': return 'bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-300';
      case 'deadline': return 'bg-red-100 text-red-600 dark:bg-red-800 dark:text-red-300';
      case 'waiting': return 'bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-300';
      case 'start': return 'bg-purple-100 text-purple-600 dark:bg-purple-800 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          General Admission Procedure After Class 12 in Bhutan (2025 Guide)
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Complete step-by-step guide to college admission procedures in Bhutan
        </p>
      </div>

      {/* Institution Types */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-blue-600" />
            Types of Institutions in Bhutan
          </CardTitle>
          <CardDescription>
            Choose the right type of institution based on your career goals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {institutionTypes.map((institution) => {
              const IconComponent = institution.icon;
              return (
                <div key={institution.type} className="p-6 border rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${institution.color} flex-shrink-0`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{institution.type}</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-3">{institution.description}</p>
                      <div className="mb-4">
                        <Badge variant="outline" className="mb-2">{institution.process}</Badge>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Examples:</h4>
                        <div className="flex flex-wrap gap-2">
                          {institution.examples.map((example, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Step-by-Step Process */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-green-600" />
            Step-by-Step Admission Process
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {admissionSteps.map((step) => (
              <div key={step.step} className="flex gap-4 p-4 border rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{step.title}</h3>
                    <Badge variant="outline">{step.timeline}</Badge>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-3">{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.requirements.map((req, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CAS Application Process */}
      <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
            <Globe className="h-6 w-6" />
            Centralized Admission System (CAS) - RUB Colleges
          </CardTitle>
          <CardDescription className="text-blue-700 dark:text-blue-300">
            Website: https://www.rub.edu.bt
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {casSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <span className="text-blue-800 dark:text-blue-200">{step}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-6 w-6 text-orange-600" />
            Important Timeline (2025)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="font-medium">{item.month}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-600 dark:text-slate-300">{item.activity}</span>
                  <Badge variant="secondary" className={getStatusColor(item.status)}>
                    {item.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Required Documents */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-purple-600" />
            Required Documents Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requiredDocuments.map((doc, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{doc}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Important Tips */}
      <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
            <AlertCircle className="h-6 w-6" />
            Important Tips for Success
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-amber-800 dark:text-amber-200">For RUB Colleges:</h4>
              <ul className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
                <li>• You can choose multiple programs in order of preference</li>
                <li>• Merit-based ranking from BHSEC marks is used</li>
                <li>• Apply early during the admission window</li>
                <li>• Keep application fee ready (Nu.300-500)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-amber-800 dark:text-amber-200">For Medical/Private Colleges:</h4>
              <ul className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
                <li>• Apply separately to each institution</li>
                <li>• Prepare for entrance tests and interviews</li>
                <li>• Check individual college websites for requirements</li>
                <li>• Submit applications before individual deadlines</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Important Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Royal University of Bhutan</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                📞 +975-2-351-348<br/>
                📧 info@rub.edu.bt<br/>
                🌐 www.rub.edu.bt
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Royal Thimphu College</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                📞 +975-2-351-348<br/>
                📧 info@rtc.bt<br/>
                🌐 www.rtc.bt
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Apollo Bhutan Institute</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                📞 Contact through website<br/>
                🌐 apollobhutan.edu.bt
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdmissionGuide;
