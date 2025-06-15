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
  Map,
  TrendingUp,
  BarChart3,
  Activity
} from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const StudyTips = () => {
  const [activeSection, setActiveSection] = useState('general');
  const [expandedTechnique, setExpandedTechnique] = useState<number | null>(null);
  const [pomodoroTimer, setPomodoroTimer] = useState({ minutes: 25, seconds: 0, isRunning: false });
  const [selectedMetric, setSelectedMetric] = useState('effectiveness');

  // Enhanced chart data for study technique effectiveness
  const effectivenessData = [
    { 
      technique: 'Active Recall', 
      effectiveness: 92, 
      retention: 88, 
      timeRequired: 30, 
      difficulty: 3, 
      color: '#10b981',
      description: 'Testing yourself without looking at notes'
    },
    { 
      technique: 'Feynman', 
      effectiveness: 90, 
      retention: 85, 
      timeRequired: 45, 
      difficulty: 4, 
      color: '#8b5cf6',
      description: 'Explaining concepts in simple terms'
    },
    { 
      technique: 'Spaced Rep', 
      effectiveness: 88, 
      retention: 95, 
      timeRequired: 20, 
      difficulty: 2, 
      color: '#f59e0b',
      description: 'Reviewing at increasing intervals'
    },
    { 
      technique: 'Dual Coding', 
      effectiveness: 87, 
      retention: 82, 
      timeRequired: 35, 
      difficulty: 3, 
      color: '#06b6d4',
      description: 'Combining visual and verbal learning'
    },
    { 
      technique: 'Cornell Notes', 
      effectiveness: 86, 
      retention: 78, 
      timeRequired: 25, 
      difficulty: 2, 
      color: '#ef4444',
      description: 'Structured note-taking system'
    },
    { 
      technique: 'Pomodoro', 
      effectiveness: 85, 
      retention: 75, 
      timeRequired: 25, 
      difficulty: 1, 
      color: '#3b82f6',
      description: 'Time-blocked focused study sessions'
    },
    { 
      technique: 'Interleaved', 
      effectiveness: 89, 
      retention: 90, 
      timeRequired: 60, 
      difficulty: 4, 
      color: '#f97316',
      description: 'Mixing different topics in one session'
    },
    { 
      technique: 'Mind Mapping', 
      effectiveness: 82, 
      retention: 80, 
      timeRequired: 30, 
      difficulty: 2, 
      color: '#84cc16',
      description: 'Visual representation of information'
    },
    { 
      technique: 'Elaborative', 
      effectiveness: 84, 
      retention: 83, 
      timeRequired: 40, 
      difficulty: 3, 
      color: '#ec4899',
      description: 'Asking why and how questions'
    }
  ];

  // Radar chart data for comparing techniques
  const radarData = effectivenessData.slice(0, 6).map(item => ({
    technique: item.technique,
    effectiveness: item.effectiveness,
    retention: item.retention,
    easeOfUse: 100 - (item.difficulty * 20),
    timeEfficiency: 100 - item.timeRequired
  }));

  const pomodoroStatsData = [
    { name: 'Focused Time', value: 75, color: '#10b981' },
    { name: 'Break Time', value: 25, color: '#f59e0b' }
  ];

  const getMetricData = () => {
    switch (selectedMetric) {
      case 'retention':
        return effectivenessData.map(item => ({ ...item, value: item.retention }));
      case 'difficulty':
        return effectivenessData.map(item => ({ ...item, value: 100 - (item.difficulty * 20) }));
      case 'timeRequired':
        return effectivenessData.map(item => ({ ...item, value: 100 - item.timeRequired }));
      default:
        return effectivenessData.map(item => ({ ...item, value: item.effectiveness }));
    }
  };

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
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sora bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Study Tips & Guides
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Master your studies with proven techniques, exam strategies, and subject-specific guidance designed for Bhutanese students.
            </p>
          </div>

          {/* Navigation Tabs */}
          <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6 md:mb-8">
              <TabsTrigger value="general" className="text-xs md:text-sm">Study Techniques</TabsTrigger>
              <TabsTrigger value="exams" className="text-xs md:text-sm">Exam Strategies</TabsTrigger>
              <TabsTrigger value="subjects" className="text-xs md:text-sm">Subject Guides</TabsTrigger>
            </TabsList>

            {/* Study Techniques Tab */}
            <TabsContent value="general" className="space-y-6">
              {/* Enhanced Effectiveness Dashboard */}
              <div className="grid lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                {/* Main Chart */}
                <Card className="lg:col-span-2 group hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-2 md:pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                        <Trophy className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
                        Study Technique Performance
                      </CardTitle>
                      <div className="flex gap-1 md:gap-2 flex-wrap">
                        <Button
                          variant={selectedMetric === 'effectiveness' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setSelectedMetric('effectiveness')}
                          className="text-xs h-8"
                        >
                          <TrendingUp className="h-3 w-3 mr-1" />
                          <span className="hidden sm:inline">Effectiveness</span>
                          <span className="sm:hidden">Effect</span>
                        </Button>
                        <Button
                          variant={selectedMetric === 'retention' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setSelectedMetric('retention')}
                          className="text-xs h-8"
                        >
                          <Brain className="h-3 w-3 mr-1" />
                          <span className="hidden sm:inline">Retention</span>
                          <span className="sm:hidden">Ret</span>
                        </Button>
                        <Button
                          variant={selectedMetric === 'difficulty' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setSelectedMetric('difficulty')}
                          className="text-xs h-8"
                        >
                          <Activity className="h-3 w-3 mr-1" />
                          Ease
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="w-full overflow-x-auto">
                      <div className="min-w-[500px] h-[300px] md:h-[400px]">
                        <ChartContainer
                          config={{
                            value: {
                              label: selectedMetric === 'effectiveness' ? "Effectiveness %" : 
                                     selectedMetric === 'retention' ? "Retention %" : 
                                     selectedMetric === 'difficulty' ? "Ease %" : "Time Efficiency %",
                              color: "hsl(var(--chart-1))",
                            },
                          }}
                          className="w-full h-full"
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={getMetricData()} margin={{ top: 20, right: 10, left: 10, bottom: 80 }}>
                              <XAxis 
                                dataKey="technique" 
                                angle={-45}
                                textAnchor="end"
                                height={80}
                                fontSize={10}
                                interval={0}
                              />
                              <YAxis fontSize={10} />
                              <ChartTooltip 
                                content={({ active, payload, label }) => {
                                  if (active && payload && payload.length) {
                                    const data = payload[0].payload;
                                    return (
                                      <div className="bg-white dark:bg-gray-800 p-3 md:p-4 rounded-lg shadow-lg border max-w-xs">
                                        <h3 className="font-semibold text-sm md:text-lg mb-2">{label}</h3>
                                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-3">{data.description}</p>
                                        <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                                          <div className="flex justify-between">
                                            <span>Effectiveness:</span>
                                            <span className="font-semibold">{data.effectiveness}%</span>
                                          </div>
                                          <div className="flex justify-between">
                                            <span>Retention:</span>
                                            <span className="font-semibold">{data.retention}%</span>
                                          </div>
                                          <div className="flex justify-between">
                                            <span>Time Required:</span>
                                            <span className="font-semibold">{data.timeRequired} min</span>
                                          </div>
                                          <div className="flex justify-between">
                                            <span>Difficulty:</span>
                                            <div className="flex">
                                              {[...Array(5)].map((_, i) => (
                                                <Star 
                                                  key={i} 
                                                  className={`h-2 w-2 md:h-3 md:w-3 ${i < data.difficulty ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                                                />
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  }
                                  return null;
                                }}
                              />
                              <Bar 
                                dataKey="value" 
                                radius={[4, 4, 0, 0]}
                                fill="url(#colorGradient)"
                              />
                              <defs>
                                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={1}/>
                                  <stop offset="100%" stopColor="#1d4ed8" stopOpacity={0.8}/>
                                </linearGradient>
                              </defs>
                            </BarChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <div className="space-y-3 md:space-y-4">
                  <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-blue-700 dark:text-blue-300 text-sm md:text-base">Top Performer</h3>
                        <Trophy className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
                      </div>
                      <p className="text-lg md:text-2xl font-bold text-blue-900 dark:text-blue-100">Active Recall</p>
                      <p className="text-xs md:text-sm text-blue-600 dark:text-blue-400">92% effectiveness</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-green-700 dark:text-green-300 text-sm md:text-base">Best Retention</h3>
                        <Brain className="h-4 w-4 md:h-5 md:w-5 text-green-500" />
                      </div>
                      <p className="text-lg md:text-2xl font-bold text-green-900 dark:text-green-100">Spaced Repetition</p>
                      <p className="text-xs md:text-sm text-green-600 dark:text-green-400">95% retention rate</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 border-purple-200 dark:border-purple-800">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-purple-700 dark:text-purple-300 text-sm md:text-base">Easiest to Start</h3>
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-purple-500" />
                      </div>
                      <p className="text-lg md:text-2xl font-bold text-purple-900 dark:text-purple-100">Pomodoro</p>
                      <p className="text-xs md:text-sm text-purple-600 dark:text-purple-400">Beginner friendly</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Technique Comparison Radar Chart - Mobile Optimized */}
              <Card className="mb-6 md:mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                    <BarChart3 className="h-4 w-4 md:h-5 md:w-5 text-indigo-500" />
                    Technique Comparison Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 md:p-6">
                  <div className="w-full overflow-x-auto">
                    <div className="min-w-[320px]">
                      <ChartContainer
                        config={{
                          effectiveness: {
                            label: "Effectiveness",
                            color: "#3b82f6",
                          },
                          retention: {
                            label: "Retention",
                            color: "#10b981",
                          },
                          easeOfUse: {
                            label: "Ease of Use",
                            color: "#f59e0b",
                          },
                          timeEfficiency: {
                            label: "Time Efficiency",
                            color: "#ef4444",
                          },
                        }}
                        className="h-[280px] sm:h-[350px] md:h-[400px] w-full"
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <RadarChart data={radarData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <PolarGrid />
                            <PolarAngleAxis 
                              dataKey="technique" 
                              fontSize={8}
                              className="text-xs"
                            />
                            <PolarRadiusAxis 
                              angle={90} 
                              domain={[0, 100]} 
                              fontSize={6}
                              className="text-xs"
                            />
                            <Radar
                              name="Effectiveness"
                              dataKey="effectiveness"
                              stroke="#3b82f6"
                              fill="#3b82f6"
                              fillOpacity={0.1}
                              strokeWidth={2}
                            />
                            <Radar
                              name="Retention"
                              dataKey="retention"
                              stroke="#10b981"
                              fill="#10b981"
                              fillOpacity={0.1}
                              strokeWidth={2}
                            />
                            <Radar
                              name="Ease of Use"
                              dataKey="easeOfUse"
                              stroke="#f59e0b"
                              fill="#f59e0b"
                              fillOpacity={0.1}
                              strokeWidth={2}
                            />
                            <ChartTooltip />
                          </RadarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-3 md:mt-4">
                    <div className="flex items-center gap-1 md:gap-2">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-500"></div>
                      <span className="text-xs md:text-sm">Effectiveness</span>
                    </div>
                    <div className="flex items-center gap-1 md:gap-2">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                      <span className="text-xs md:text-sm">Retention</span>
                    </div>
                    <div className="flex items-center gap-1 md:gap-2">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                      <span className="text-xs md:text-sm">Ease of Use</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Study Techniques */}
              <div className="space-y-4">
                {studyTechniques.map((technique, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader className="cursor-pointer" onClick={() => toggleTechnique(index)}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <technique.icon className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                          <div>
                            <CardTitle className="text-base md:text-lg">{technique.title}</CardTitle>
                            <div className="flex flex-wrap gap-1 md:gap-2 mt-2">
                              <Badge variant="secondary" className="text-xs">{technique.difficulty}</Badge>
                              <Badge variant="outline" className="text-xs">{technique.timeRequired}</Badge>
                              <Badge className="bg-green-100 text-green-700 text-xs">{technique.effectiveness}% effective</Badge>
                            </div>
                          </div>
                        </div>
                        {expandedTechnique === index ? <ChevronUp className="h-4 w-4 md:h-5 md:w-5" /> : <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />}
                      </div>
                    </CardHeader>
                    
                    {expandedTechnique === index && (
                      <CardContent className="space-y-4 md:space-y-6">
                        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{technique.description}</p>
                        
                        <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
                          <div>
                            <h4 className="font-semibold mb-2 text-sm md:text-base">How it works:</h4>
                            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-4">
                              {technique.detailedInfo.howItWorks}
                            </p>
                            
                            <h4 className="font-semibold mb-2 text-sm md:text-base">Benefits:</h4>
                            <ul className="space-y-1">
                              {technique.detailedInfo.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-center gap-2 text-xs md:text-sm">
                                  <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2 text-sm md:text-base">Step-by-step process:</h4>
                            <ol className="space-y-1 mb-4">
                              {technique.detailedInfo.steps.map((step, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs md:text-sm">
                                  <span className="bg-blue-100 text-blue-700 rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                                    {i + 1}
                                  </span>
                                  {step}
                                </li>
                              ))}
                            </ol>
                            
                            <h4 className="font-semibold mb-2 text-sm md:text-base">Pro Tips:</h4>
                            <ul className="space-y-1">
                              {technique.detailedInfo.tips.map((tip, i) => (
                                <li key={i} className="flex items-center gap-2 text-xs md:text-sm">
                                  <Star className="h-3 w-3 text-yellow-500 flex-shrink-0" />
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Special interactive elements for Pomodoro */}
                        {technique.title === "Pomodoro Technique" && (
                          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 md:p-4 rounded-lg">
                            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Interactive Pomodoro Timer</h4>
                            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                              <div className="text-xl md:text-2xl font-mono">
                                {String(pomodoroTimer.minutes).padStart(2, '0')}:
                                {String(pomodoroTimer.seconds).padStart(2, '0')}
                              </div>
                              <Button size="sm" className="flex items-center gap-2 text-xs md:text-sm">
                                {pomodoroTimer.isRunning ? <Pause className="h-3 w-3 md:h-4 md:w-4" /> : <Play className="h-3 w-3 md:h-4 md:w-4" />
                                }
                                {pomodoroTimer.isRunning ? 'Pause' : 'Start'}
                              </Button>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="font-medium mb-2 text-sm">Time Distribution</h5>
                                <ChartContainer
                                  config={{
                                    value: {
                                      label: "Percentage",
                                      color: "hsl(var(--chart-1))",
                                    },
                                  }}
                                  className="h-[120px] md:h-[150px]"
                                >
                                  <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                      <Pie
                                        data={pomodoroStatsData}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={40}
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
                                <h5 className="font-medium mb-2 text-sm">Daily Goals</h5>
                                <div className="space-y-2">
                                  <div className="flex justify-between text-xs md:text-sm">
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
              <Card className="mt-6 md:mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                    <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
                    Quick Study Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
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
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500 flex-shrink-0" />
                        <span className="text-xs md:text-sm">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Exam Strategies Tab */}
            <TabsContent value="exams" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {examStrategies.map((strategy, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-base md:text-lg">{strategy.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{strategy.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Key Points:</h4>
                        <ul className="space-y-1">
                          {strategy.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-center gap-2 text-xs md:text-sm">
                              <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
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
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {Object.entries(subjectGuides).map(([key, subject]) => (
                  <Card key={key} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-base md:text-lg">
                        <subject.icon className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
                        {subject.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {subject.tips.map((tip, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500 flex-shrink-0" />
                            <span className="text-xs md:text-sm">{tip}</span>
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
