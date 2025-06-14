
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Clock, 
  Users, 
  Calendar, 
  BookOpen, 
  Target, 
  TrendingUp, 
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface CourseDetailsProps {
  courseName: string;
  college: string;
  duration: string;
  level: string;
  mode: string;
  onBack: () => void;
}

const CourseDetails = ({ courseName, college, duration, level, mode, onBack }: CourseDetailsProps) => {
  // Sample course data - in real app this would come from props or API
  const courseData = {
    description: `The ${courseName} program is designed to provide comprehensive knowledge and practical skills in the field. Our curriculum combines theoretical foundations with hands-on experience, preparing students for successful careers in their chosen field.`,
    prerequisites: [
      "High School Diploma or equivalent",
      "Minimum 60% in qualifying examination",
      "English proficiency",
      "Mathematics background (for technical courses)"
    ],
    curriculum: [
      { semester: "Semester 1", subjects: ["Foundation Studies", "Mathematics", "English Communication", "Computer Basics"] },
      { semester: "Semester 2", subjects: ["Core Subject I", "Research Methods", "Statistics", "Elective I"] },
      { semester: "Semester 3", subjects: ["Core Subject II", "Practical Training", "Project Work", "Elective II"] },
      { semester: "Semester 4", subjects: ["Advanced Topics", "Internship", "Thesis/Capstone", "Industry Seminar"] }
    ],
    careerOutcomes: [
      "Government Sector Opportunities",
      "Private Industry Positions",
      "Research and Development",
      "Entrepreneurship Opportunities",
      "International Career Prospects",
      "Further Education Pathways"
    ],
    skills: [
      "Analytical Thinking",
      "Problem Solving",
      "Communication Skills",
      "Technical Expertise",
      "Leadership Abilities",
      "Research Capabilities"
    ]
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="text-white hover:bg-white/20 mb-4"
        >
          ← Back to Colleges
        </Button>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-white/20 text-white border-0">
              {level}
            </Badge>
            <Badge className="bg-white/20 text-white border-0">
              {mode}
            </Badge>
            <Badge className="bg-white/20 text-white border-0">
              {duration}
            </Badge>
          </div>
          
          <h1 className="text-4xl font-bold font-sora">{courseName}</h1>
          <p className="text-xl opacity-90">at {college}</p>
          
          <div className="flex flex-wrap gap-6 mt-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>25-30 students per batch</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>Applications open year-round</span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Course Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {courseData.description}
          </p>
        </CardContent>
      </Card>

      {/* Prerequisites */}
      <Card>
        <CardHeader>
          <CardTitle>Prerequisites & Eligibility</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courseData.prerequisites.map((prerequisite, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{prerequisite}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Curriculum */}
      <Card>
        <CardHeader>
          <CardTitle>Curriculum Structure</CardTitle>
          <CardDescription>
            Detailed breakdown of courses and subjects covered throughout the program
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {courseData.curriculum.map((sem, index) => (
              <div key={index}>
                <h4 className="font-semibold text-lg mb-3 text-primary">
                  {sem.semester}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {sem.subjects.map((subject, subIndex) => (
                    <div key={subIndex} className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{subject}</span>
                    </div>
                  ))}
                </div>
                {index < courseData.curriculum.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Skills & Career Outcomes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Skills You'll Develop
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {courseData.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Career Outcomes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {courseData.careerOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-green-600" />
                  <span className="text-sm">{outcome}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Application CTA */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Ready to Apply?</h3>
            <p className="text-muted-foreground">
              Start your journey towards a successful career in {courseName}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Apply Now
              </Button>
              <Button variant="outline" size="lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseDetails;
