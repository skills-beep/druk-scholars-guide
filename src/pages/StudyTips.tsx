
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Clock, 
  Target, 
  Brain, 
  Calendar, 
  Users, 
  Trophy, 
  Lightbulb,
  CheckCircle,
  Star,
  Timer,
  GraduationCap
} from 'lucide-react';

const StudyTips = () => {
  const [activeSection, setActiveSection] = useState('general');

  const studyTechniques = [
    {
      title: "Pomodoro Technique",
      description: "Study for 25 minutes, then take a 5-minute break. After 4 cycles, take a longer 15-30 minute break.",
      icon: Timer,
      difficulty: "Beginner",
      timeRequired: "25 min cycles"
    },
    {
      title: "Active Recall",
      description: "Test yourself frequently instead of just re-reading notes. Use flashcards or practice questions.",
      icon: Brain,
      difficulty: "Intermediate",
      timeRequired: "Variable"
    },
    {
      title: "Spaced Repetition",
      description: "Review material at increasing intervals to strengthen long-term memory retention.",
      icon: Calendar,
      difficulty: "Intermediate",
      timeRequired: "Daily review"
    },
    {
      title: "Feynman Technique",
      description: "Explain concepts in simple terms as if teaching someone else. Identify gaps in understanding.",
      icon: Users,
      difficulty: "Advanced",
      timeRequired: "30-60 min"
    }
  ];

  const examStrategies = [
    {
      title: "Create a Study Schedule",
      description: "Plan your study sessions weeks in advance, breaking down topics into manageable chunks.",
      tips: ["Start early", "Be realistic with time", "Include breaks", "Review regularly"]
    },
    {
      title: "Practice Past Papers",
      description: "Familiarize yourself with exam format and question types by solving previous years' papers.",
      tips: ["Time yourself", "Identify weak areas", "Review mistakes", "Simulate exam conditions"]
    },
    {
      title: "Form Study Groups",
      description: "Collaborate with classmates to discuss difficult concepts and share knowledge.",
      tips: ["Keep groups small (3-4 people)", "Stay focused", "Teach each other", "Share resources"]
    },
    {
      title: "Manage Exam Stress",
      description: "Develop healthy coping mechanisms to handle exam pressure effectively.",
      tips: ["Get adequate sleep", "Exercise regularly", "Practice relaxation", "Eat well"]
    }
  ];

  const subjectGuides = {
    mathematics: {
      title: "Mathematics",
      icon: Target,
      tips: [
        "Practice problems daily",
        "Understand concepts before memorizing formulas",
        "Work through examples step by step",
        "Keep a formula sheet for quick reference"
      ]
    },
    science: {
      title: "Science",
      icon: Lightbulb,
      tips: [
        "Connect theory with practical applications",
        "Use diagrams and visual aids",
        "Conduct experiments when possible",
        "Form study groups for discussions"
      ]
    },
    languages: {
      title: "Languages",
      icon: BookOpen,
      tips: [
        "Read extensively in the target language",
        "Practice speaking with others",
        "Keep a vocabulary journal",
        "Watch movies/shows with subtitles"
      ]
    },
    social: {
      title: "Social Studies",
      icon: Users,
      tips: [
        "Create timelines for historical events",
        "Use maps and visual aids",
        "Connect past events to current affairs",
        "Practice essay writing regularly"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-sora bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Study Tips & Guides
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Master your studies with proven techniques, exam strategies, and subject-specific guidance designed for Bhutanese students.
            </p>
          </div>

          {/* Navigation Tabs */}
          <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="general">Study Techniques</TabsTrigger>
              <TabsTrigger value="exams">Exam Strategies</TabsTrigger>
              <TabsTrigger value="subjects">Subject Guides</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            {/* Study Techniques Tab */}
            <TabsContent value="general" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {studyTechniques.map((technique, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <technique.icon className="h-6 w-6 text-blue-600" />
                        <CardTitle className="text-lg">{technique.title}</CardTitle>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary">{technique.difficulty}</Badge>
                        <Badge variant="outline">{technique.timeRequired}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">{technique.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Tips Section */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Quick Study Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      "Find your peak study hours",
                      "Eliminate distractions",
                      "Take regular breaks",
                      "Stay hydrated",
                      "Use multiple senses",
                      "Teach others",
                      "Set specific goals",
                      "Review before sleeping",
                      "Use mind maps"
                    ].map((tip, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Exam Strategies Tab */}
            <TabsContent value="exams" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {examStrategies.map((strategy, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">{strategy.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-300">{strategy.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Key Points:</h4>
                        <ul className="space-y-1">
                          {strategy.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Subject Guides Tab */}
            <TabsContent value="subjects" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(subjectGuides).map(([key, subject]) => (
                  <Card key={key} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <subject.icon className="h-6 w-6 text-purple-600" />
                        {subject.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {subject.tips.map((tip, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Online Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-2">
                      <a href="https://www.khanacademy.org" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">Khan Academy</a>
                      <a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">Coursera</a>
                      <a href="https://www.edx.org" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">edX</a>
                      <a href="https://www.youtube.com/education" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">YouTube Education</a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Study Apps</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-2">
                      <div className="text-sm">
                        <strong>Anki</strong> - Flashcard app with spaced repetition
                      </div>
                      <div className="text-sm">
                        <strong>Forest</strong> - Focus timer with gamification
                      </div>
                      <div className="text-sm">
                        <strong>Notion</strong> - All-in-one workspace for notes
                      </div>
                      <div className="text-sm">
                        <strong>Quizlet</strong> - Study sets and practice tests
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Local Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-2">
                      <div className="text-sm">
                        <strong>National Library</strong> - Thimphu
                      </div>
                      <div className="text-sm">
                        <strong>Jigme Namgyel Library</strong> - Study spaces
                      </div>
                      <div className="text-sm">
                        <strong>College Libraries</strong> - Free access to students
                      </div>
                      <div className="text-sm">
                        <strong>Study Groups</strong> - Join local student communities
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Study Schedule Template */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Weekly Study Schedule Template
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse border border-gray-300 dark:border-gray-600">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800">
                          <th className="border border-gray-300 dark:border-gray-600 p-2">Time</th>
                          <th className="border border-gray-300 dark:border-gray-600 p-2">Monday</th>
                          <th className="border border-gray-300 dark:border-gray-600 p-2">Tuesday</th>
                          <th className="border border-gray-300 dark:border-gray-600 p-2">Wednesday</th>
                          <th className="border border-gray-300 dark:border-gray-600 p-2">Thursday</th>
                          <th className="border border-gray-300 dark:border-gray-600 p-2">Friday</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 p-2 font-medium">6:00-7:00</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">Math Review</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">Science Study</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">Language Practice</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">Math Practice</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">Review Week</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 p-2 font-medium">7:00-8:00</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">Breakfast & Prep</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">Breakfast & Prep</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">Breakfast & Prep</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">Breakfast & Prep</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">Breakfast & Prep</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                    Customize this template based on your class schedule and personal preferences.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudyTips;
