
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
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Play,
  Pause,
  FileText,
  Video,
  Music,
  Repeat,
  Eye,
  Zap,
  Map
} from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const StudyTips = () => {
  const [activeSection, setActiveSection] = useState('general');
  const [expandedTechnique, setExpandedTechnique] = useState<number | null>(null);
  const [pomodoroTimer, setPomodoroTimer] = useState({ minutes: 25, seconds: 0, isRunning: false });

  // Chart data for study technique effectiveness
  const effectivenessData = [
    { technique: 'Pomodoro', effectiveness: 85, color: '#3b82f6' },
    { technique: 'Active Recall', effectiveness: 92, color: '#10b981' },
    { technique: 'Spaced Rep', effectiveness: 88, color: '#f59e0b' },
    { technique: 'Feynman', effectiveness: 90, color: '#8b5cf6' },
    { technique: 'Mind Mapping', effectiveness: 82, color: '#ef4444' },
    { technique: 'Cornell Notes', effectiveness: 86, color: '#06b6d4' }
  ];

  const pomodoroStatsData = [
    { name: 'Focused Time', value: 75, color: '#10b981' },
    { name: 'Break Time', value: 25, color: '#f59e0b' }
  ];

  const studyTechniques = [
    {
      title: "Pomodoro Technique",
      description: "Study for 25 minutes, then take a 5-minute break. After 4 cycles, take a longer 15-30 minute break.",
      icon: Timer,
      difficulty: "Beginner",
      timeRequired: "25 min cycles",
      effectiveness: 85,
      detailedInfo: {
        howItWorks: "The Pomodoro Technique breaks work into 25-minute focused intervals followed by short breaks. This method leverages your brain's natural attention spans and prevents mental fatigue.",
        benefits: [
          "Improves focus and concentration",
          "Reduces mental fatigue",
          "Increases productivity",
          "Helps track time spent studying"
        ],
        steps: [
          "Choose a task to work on",
          "Set timer for 25 minutes",
          "Work on the task until timer rings",
          "Take a 5-minute break",
          "After 4 pomodoros, take a 15-30 minute break"
        ],
        tips: [
          "Turn off all notifications during work periods",
          "Use breaks for physical movement",
          "Track completed pomodoros to measure progress",
          "Adjust timing if needed (some prefer 50/10 minute cycles)"
        ]
      }
    },
    {
      title: "Active Recall",
      description: "Test yourself frequently instead of just re-reading notes. Use flashcards or practice questions.",
      icon: Brain,
      difficulty: "Intermediate",
      timeRequired: "Variable",
      effectiveness: 92,
      detailedInfo: {
        howItWorks: "Active recall involves retrieving information from memory without looking at the source material. This strengthens neural pathways and improves long-term retention.",
        benefits: [
          "Significantly improves memory retention",
          "Identifies knowledge gaps",
          "Builds confidence in recall ability",
          "More effective than passive review"
        ],
        steps: [
          "Read or study material initially",
          "Close books/notes and try to recall key points",
          "Write down what you remember",
          "Check accuracy and note gaps",
          "Repeat process focusing on weak areas"
        ],
        tips: [
          "Use the 'blank page' method - write everything you know",
          "Create practice questions for yourself",
          "Use spaced intervals for recall practice",
          "Teach concepts to others without notes"
        ]
      }
    },
    {
      title: "Spaced Repetition",
      description: "Review material at increasing intervals to strengthen long-term memory retention.",
      icon: Calendar,
      difficulty: "Intermediate",
      timeRequired: "Daily review",
      effectiveness: 88,
      detailedInfo: {
        howItWorks: "Spaced repetition schedules reviews at optimal intervals based on forgetting curves. Information is reviewed just before you're likely to forget it.",
        benefits: [
          "Dramatically improves long-term retention",
          "Efficient use of study time",
          "Prevents cramming",
          "Works for any subject"
        ],
        steps: [
          "Learn new material thoroughly",
          "Review after 1 day",
          "Review after 3 days",
          "Review after 1 week",
          "Continue with increasing intervals"
        ],
        tips: [
          "Use apps like Anki for automated scheduling",
          "Be consistent with daily reviews",
          "Focus on difficult items more frequently",
          "Keep review sessions short but regular"
        ]
      }
    },
    {
      title: "Feynman Technique",
      description: "Explain concepts in simple terms as if teaching someone else. Identify gaps in understanding.",
      icon: Users,
      difficulty: "Advanced",
      timeRequired: "30-60 min",
      effectiveness: 90,
      detailedInfo: {
        howItWorks: "Named after physicist Richard Feynman, this technique involves explaining complex concepts in simple language to identify and fill knowledge gaps.",
        benefits: [
          "Deepens understanding of concepts",
          "Identifies knowledge gaps",
          "Improves ability to explain ideas",
          "Works for complex subjects"
        ],
        steps: [
          "Choose a concept to learn",
          "Explain it in simple terms (as if to a child)",
          "Identify areas where explanation breaks down",
          "Return to source material for gaps",
          "Simplify and create analogies"
        ],
        tips: [
          "Use everyday language, avoid jargon",
          "Create analogies and examples",
          "Actually teach someone if possible",
          "Record yourself explaining concepts"
        ]
      }
    },
    {
      title: "Mind Mapping",
      description: "Create visual diagrams that connect ideas and concepts using colors, images, and branches.",
      icon: Map,
      difficulty: "Beginner",
      timeRequired: "20-45 min",
      effectiveness: 82,
      detailedInfo: {
        howItWorks: "Mind mapping uses visual elements to represent information hierarchically, starting from a central concept and branching out to related ideas.",
        benefits: [
          "Enhances visual memory",
          "Shows relationships between concepts",
          "Encourages creative thinking",
          "Great for brainstorming and planning"
        ],
        steps: [
          "Start with main topic in the center",
          "Add major subtopics as main branches",
          "Add details as smaller branches",
          "Use colors and images for visual appeal",
          "Review and refine connections"
        ],
        tips: [
          "Use different colors for different themes",
          "Keep words short and descriptive",
          "Add drawings or symbols when possible",
          "Use curved lines instead of straight ones"
        ]
      }
    },
    {
      title: "Cornell Note-Taking System",
      description: "Divide your notes into three sections: notes, cues, and summary for effective organization.",
      icon: FileText,
      difficulty: "Beginner",
      timeRequired: "During lectures",
      effectiveness: 86,
      detailedInfo: {
        howItWorks: "The Cornell system divides each page into three sections: a narrow left column for cues/questions, a wider right column for notes, and a bottom section for summary.",
        benefits: [
          "Organized and systematic note-taking",
          "Built-in review system",
          "Encourages active listening",
          "Easy to review and study from"
        ],
        steps: [
          "Divide page into three sections",
          "Take notes in the right column during class",
          "Add keywords/questions in left column after class",
          "Write summary at bottom of page",
          "Use left column for self-testing"
        ],
        tips: [
          "Review and fill in gaps within 24 hours",
          "Use abbreviations and symbols",
          "Focus on main ideas, not every word",
          "Number your pages for easy reference"
        ]
      }
    },
    {
      title: "Elaborative Interrogation",
      description: "Continuously ask 'why' and 'how' questions to deepen understanding of material.",
      icon: Lightbulb,
      difficulty: "Intermediate",
      timeRequired: "Throughout study",
      effectiveness: 84,
      detailedInfo: {
        howItWorks: "This technique involves generating explanations for why facts or concepts are true, creating deeper connections in memory.",
        benefits: [
          "Improves comprehension",
          "Creates stronger memory connections",
          "Develops critical thinking",
          "Helps identify knowledge gaps"
        ],
        steps: [
          "Read a fact or concept",
          "Ask 'Why is this true?'",
          "Generate your own explanation",
          "Verify your reasoning",
          "Connect to other known concepts"
        ],
        tips: [
          "Don't accept information at face value",
          "Look for cause-and-effect relationships",
          "Connect new info to prior knowledge",
          "Question everything systematically"
        ]
      }
    },
    {
      title: "Dual Coding (Visual + Verbal)",
      description: "Combine visual elements with verbal information to enhance memory through multiple channels.",
      icon: Eye,
      difficulty: "Intermediate",
      timeRequired: "Variable",
      effectiveness: 87,
      detailedInfo: {
        howItWorks: "Dual coding theory suggests that information processed both visually and verbally is better remembered than information processed through one channel alone.",
        benefits: [
          "Enhances memory retention",
          "Appeals to different learning styles",
          "Creates multiple retrieval pathways",
          "Improves understanding of complex topics"
        ],
        steps: [
          "Read/listen to verbal information",
          "Create visual representations (diagrams, charts)",
          "Combine words with images",
          "Practice recalling both visual and verbal elements",
          "Use both channels during review"
        ],
        tips: [
          "Draw simple diagrams while reading",
          "Use colors to categorize information",
          "Create mental images for abstract concepts",
          "Combine written notes with visual aids"
        ]
      }
    },
    {
      title: "Interleaved Practice",
      description: "Mix different types of problems or subjects within a single study session rather than blocking them.",
      icon: Repeat,
      difficulty: "Advanced",
      timeRequired: "Full study sessions",
      effectiveness: 89,
      detailedInfo: {
        howItWorks: "Instead of studying one topic at a time (blocked practice), interleaving mixes different but related topics, forcing your brain to actively differentiate between them.",
        benefits: [
          "Improves discrimination between concepts",
          "Enhances transfer of learning",
          "Builds flexibility in problem-solving",
          "Better prepares for real-world application"
        ],
        steps: [
          "Identify related topics or problem types",
          "Create a mixed practice schedule",
          "Switch between topics every 10-15 minutes",
          "Force yourself to identify which approach to use",
          "Review connections between different topics"
        ],
        tips: [
          "Start with closely related topics",
          "Don't switch too frequently (confusing)",
          "Focus on understanding differences",
          "Use this for math, science, and languages"
        ]
      }
    }
  ];

  const toggleTechnique = (index: number) => {
    setExpandedTechnique(expandedTechnique === index ? null : index);
  };

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
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="general">Study Techniques</TabsTrigger>
              <TabsTrigger value="exams">Exam Strategies</TabsTrigger>
              <TabsTrigger value="subjects">Subject Guides</TabsTrigger>
            </TabsList>

            {/* Study Techniques Tab */}
            <TabsContent value="general" className="space-y-6">
              {/* Effectiveness Chart */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    Study Technique Effectiveness
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      effectiveness: {
                        label: "Effectiveness %",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={effectivenessData}>
                        <XAxis dataKey="technique" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="effectiveness" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Detailed Study Techniques */}
              <div className="space-y-4">
                {studyTechniques.map((technique, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader className="cursor-pointer" onClick={() => toggleTechnique(index)}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <technique.icon className="h-6 w-6 text-blue-600" />
                          <div>
                            <CardTitle className="text-lg">{technique.title}</CardTitle>
                            <div className="flex gap-2 mt-2">
                              <Badge variant="secondary">{technique.difficulty}</Badge>
                              <Badge variant="outline">{technique.timeRequired}</Badge>
                              <Badge className="bg-green-100 text-green-700">{technique.effectiveness}% effective</Badge>
                            </div>
                          </div>
                        </div>
                        {expandedTechnique === index ? <ChevronUp /> : <ChevronDown />}
                      </div>
                    </CardHeader>
                    
                    {expandedTechnique === index && (
                      <CardContent className="space-y-6">
                        <p className="text-gray-600 dark:text-gray-300">{technique.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">How it works:</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                              {technique.detailedInfo.howItWorks}
                            </p>
                            
                            <h4 className="font-semibold mb-2">Benefits:</h4>
                            <ul className="space-y-1">
                              {technique.detailedInfo.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                  <CheckCircle className="h-3 w-3 text-green-500" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Step-by-step process:</h4>
                            <ol className="space-y-1 mb-4">
                              {technique.detailedInfo.steps.map((step, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <span className="bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                                    {i + 1}
                                  </span>
                                  {step}
                                </li>
                              ))}
                            </ol>
                            
                            <h4 className="font-semibold mb-2">Pro Tips:</h4>
                            <ul className="space-y-1">
                              {technique.detailedInfo.tips.map((tip, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                  <Star className="h-3 w-3 text-yellow-500" />
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Special interactive elements for Pomodoro */}
                        {technique.title === "Pomodoro Technique" && (
                          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                            <h4 className="font-semibold mb-4">Interactive Pomodoro Timer</h4>
                            <div className="flex items-center gap-4 mb-4">
                              <div className="text-2xl font-mono">
                                {String(pomodoroTimer.minutes).padStart(2, '0')}:
                                {String(pomodoroTimer.seconds).padStart(2, '0')}
                              </div>
                              <Button size="sm" className="flex items-center gap-2">
                                {pomodoroTimer.isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                                {pomodoroTimer.isRunning ? 'Pause' : 'Start'}
                              </Button>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="font-medium mb-2">Time Distribution</h5>
                                <ChartContainer
                                  config={{
                                    value: {
                                      label: "Percentage",
                                      color: "hsl(var(--chart-1))",
                                    },
                                  }}
                                  className="h-[150px]"
                                >
                                  <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                      <Pie
                                        data={pomodoroStatsData}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={50}
                                      >
                                        {pomodoroStatsData.map((entry, index) => (
                                          <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                      </Pie>
                                      <ChartTooltip content={<ChartTooltipContent />} />
                                    </PieChart>
                                  </ResponsiveContainer>
                                </ChartContainer>
                              </div>
                              
                              <div>
                                <h5 className="font-medium mb-2">Daily Goals</h5>
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span>Pomodoros completed:</span>
                                    <span className="font-semibold">0/8</span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    )}
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
                      "Use mind maps",
                      "Practice active recall",
                      "Create a study schedule",
                      "Use the 2-minute rule"
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
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudyTips;
