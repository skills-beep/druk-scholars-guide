
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, FileText, Users, CheckCircle, Clock, AlertCircle, BookOpen } from 'lucide-react';

const AdmissionGuide = () => {
  const admissionSteps = [
    {
      step: 1,
      title: "Class XII Completion",
      description: "Complete Class XII from a recognized board (BHSEC, CBSE, ISC, etc.)",
      timeline: "May-June",
      requirements: ["Valid Class XII marksheet", "Character certificate", "Medical certificate"]
    },
    {
      step: 2,
      title: "Entrance Examinations",
      description: "Appear for relevant entrance exams based on your chosen field",
      timeline: "June-July",
      requirements: ["BHUTAN SAT for general courses", "Specific entrance exams for professional courses", "Valid admit card"]
    },
    {
      step: 3,
      title: "Application Submission",
      description: "Submit online/offline applications with required documents",
      timeline: "July-August",
      requirements: ["Completed application form", "Academic transcripts", "Entrance exam scores", "Application fee"]
    },
    {
      step: 4,
      title: "Merit List & Selection",
      description: "Wait for merit list publication and seat allocation",
      timeline: "August-September",
      requirements: ["Meet cutoff marks", "Choice filling for colleges", "Document verification"]
    },
    {
      step: 5,
      title: "Admission Confirmation",
      description: "Complete admission formalities and fee payment",
      timeline: "September",
      requirements: ["Admission fee payment", "Original document submission", "Medical examination"]
    }
  ];

  const collegeTypes = [
    {
      type: "Royal University of Bhutan Colleges",
      process: "Centralized admission through BHUTAN SAT",
      eligibility: "Class XII with minimum 50% aggregate",
      icon: GraduationCap,
      color: "bg-blue-100 text-blue-600"
    },
    {
      type: "Professional Colleges",
      process: "Separate entrance examinations",
      eligibility: "Specific subject requirements and minimum marks",
      icon: BookOpen,
      color: "bg-green-100 text-green-600"
    },
    {
      type: "Private Colleges",
      process: "Individual college-based admission",
      eligibility: "Varies by institution",
      icon: Users,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const importantDates = [
    { event: "Class XII Results", period: "May-June" },
    { event: "BHUTAN SAT Registration", period: "June" },
    { event: "BHUTAN SAT Examination", period: "July" },
    { event: "Application Period", period: "July-August" },
    { event: "Merit List Publication", period: "August" },
    { event: "Admission Process", period: "September" }
  ];

  const requiredDocuments = [
    "Class XII Marksheet (Original & Photocopies)",
    "Class X Marksheet",
    "Character Certificate from School",
    "Medical Certificate",
    "Citizenship Identity Card",
    "Recent Passport Size Photographs",
    "Entrance Exam Scorecard",
    "Migration Certificate (if applicable)",
    "Caste Certificate (if applicable)",
    "Income Certificate (for scholarships)"
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Admission Guide
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Complete guide to college admission procedures in Bhutan
        </p>
      </div>

      {/* College Types */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            Types of Colleges & Admission Processes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collegeTypes.map((college) => {
              const IconComponent = college.icon;
              return (
                <div key={college.type} className="p-4 border rounded-lg">
                  <div className={`p-3 rounded-full ${college.color} w-fit mb-3`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{college.type}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">{college.process}</p>
                  <Badge variant="secondary" className="text-xs">{college.eligibility}</Badge>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Admission Steps */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-green-600" />
            Step-by-Step Admission Process
          </CardTitle>
          <CardDescription>
            Follow these steps for a smooth admission process
          </CardDescription>
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

      {/* Important Dates */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-orange-600" />
              Important Dates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {importantDates.map((date, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <span className="font-medium">{date.event}</span>
                  <Badge variant="outline">{date.period}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-purple-600" />
              Required Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {requiredDocuments.map((doc, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{doc}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tips and Important Notes */}
      <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
            <AlertCircle className="h-6 w-6" />
            Important Tips
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2 text-amber-800 dark:text-amber-200">Before Application:</h4>
              <ul className="space-y-1 text-sm text-amber-700 dark:text-amber-300">
                <li>• Research colleges and their requirements thoroughly</li>
                <li>• Prepare for entrance exams well in advance</li>
                <li>• Keep all documents ready and verified</li>
                <li>• Check eligibility criteria carefully</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-amber-800 dark:text-amber-200">During Process:</h4>
              <ul className="space-y-1 text-sm text-amber-700 dark:text-amber-300">
                <li>• Submit applications before deadlines</li>
                <li>• Keep multiple backup options</li>
                <li>• Stay updated with official announcements</li>
                <li>• Maintain original documents safely</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Royal University of Bhutan</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                📞 +975-2-351-348<br/>
                📧 info@rub.edu.bt<br/>
                🌐 www.rub.edu.bt
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Ministry of Education</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                📞 +975-2-326-725<br/>
                📧 info@education.gov.bt<br/>
                🌐 www.education.gov.bt
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdmissionGuide;
