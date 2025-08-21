import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  BookOpen, 
  Headphones, 
  PenTool, 
  MessageSquare, 
  CheckCircle, 
  Target, 
  Calendar,
  Star,
  Globe,
  Award,
  Users,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const IELTSGuide = () => {
  const [selectedLevel, setSelectedLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate');
  const [studyProgress, setStudyProgress] = useState({
    listening: 65,
    reading: 45,
    writing: 30,
    speaking: 70
  });

  const testSections = [
    {
      name: 'Listening',
      icon: Headphones,
      duration: '30 minutes',
      questions: 40,
      description: 'Four recorded passages with everyday and academic contexts',
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400',
      tips: [
        'Listen to English podcasts daily',
        'Practice identifying speaker attitudes',
        'Focus on keywords and synonyms',
        'Don\'t dwell on missed questions'
      ]
    },
    {
      name: 'Reading',
      icon: BookOpen,
      duration: '60 minutes',
      questions: 40,
      description: 'Three passages with various question types',
      color: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400',
      tips: [
        'Practice skim-reading for main ideas',
        'Scan for specific information',
        'Manage time: 20 minutes per passage',
        'Understand different question types'
      ]
    },
    {
      name: 'Writing',
      icon: PenTool,
      duration: '60 minutes',
      questions: 2,
      description: 'Task 1: Report/Letter, Task 2: Essay',
      color: 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400',
      tips: [
        'Plan before writing',
        'Learn essay structures',
        'Practice describing data/trends',
        'Focus on coherence and cohesion'
      ]
    },
    {
      name: 'Speaking',
      icon: MessageSquare,
      duration: '11-14 minutes',
      questions: 3,
      description: 'Face-to-face interview in three parts',
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400',
      tips: [
        'Practice speaking English daily',
        'Extend answers with examples',
        'Use natural expressions',
        'Maintain eye contact'
      ]
    }
  ];

  const bandScores = [
    { band: 9, level: 'Expert', description: 'Full operational command' },
    { band: 8, level: 'Very Good', description: 'Fully operational with occasional unsystematic inaccuracies' },
    { band: 7, level: 'Good', description: 'Operational command with occasional inaccuracies' },
    { band: 6.5, level: 'Competent+', description: 'Generally effective command' },
    { band: 6, level: 'Competent', description: 'Generally effective command with some inaccuracies' },
    { band: 5.5, level: 'Modest+', description: 'Partial command with frequent problems' },
    { band: 5, level: 'Modest', description: 'Partial command, copes with overall meaning' }
  ];

  const studyTimeline = {
    beginner: {
      duration: '3-6 months',
      phases: [
        { week: '1-4', focus: 'Basic Grammar & Vocabulary', progress: 20 },
        { week: '5-8', focus: 'Listening & Speaking Practice', progress: 40 },
        { week: '9-12', focus: 'Reading Comprehension', progress: 60 },
        { week: '13-20', focus: 'Writing Skills & Test Practice', progress: 80 },
        { week: '21-24', focus: 'Mock Tests & Improvement', progress: 100 }
      ]
    },
    intermediate: {
      duration: '2-3 months',
      phases: [
        { week: '1-2', focus: 'Diagnostic Test & Weak Areas', progress: 25 },
        { week: '3-6', focus: 'Skill Building & Question Types', progress: 50 },
        { week: '7-10', focus: 'Practice Tests & Timing', progress: 75 },
        { week: '11-12', focus: 'Final Review & Strategy', progress: 100 }
      ]
    },
    advanced: {
      duration: '4-6 weeks',
      phases: [
        { week: '1', focus: 'Full Practice Test & Analysis', progress: 30 },
        { week: '2-3', focus: 'Question Type Mastery', progress: 60 },
        { week: '4-5', focus: 'Timing & Strategy Refinement', progress: 85 },
        { week: '6', focus: 'Final Preparation', progress: 100 }
      ]
    }
  };

  const resources = [
    {
      category: 'Official Materials',
      items: [
        'Cambridge IELTS Practice Tests',
        'IELTS.org Official Practice',
        'British Council IELTS Prep App',
        'IDP IELTS Official App'
      ]
    },
    {
      category: 'Books',
      items: [
        'Barron\'s IELTS Superpack',
        'Target Band 7',
        'Cambridge IELTS Trainer',
        'Official Cambridge Guide to IELTS'
      ]
    },
    {
      category: 'Online Resources',
      items: [
        'IELTS Liz (ieltsliz.com)',
        'IELTS Simon',
        'British Council LearnEnglish',
        'IELTS Advantage'
      ]
    },
    {
      category: 'Apps',
      items: [
        'IELTS Test Pro',
        'Magoosh IELTS Prep',
        'IELTS Skills by Macmillan',
        'British Council IELTS Word Power'
      ]
    }
  ];

  const bhutaneseSpecificTips = [
    {
      title: 'Leverage Your English Foundation',
      description: 'Build on Bhutan\'s strong English education system. Focus on active practice outside the classroom.',
      icon: BookOpen
    },
    {
      title: 'Practice Different Accents',
      description: 'Familiarize yourself with British, Australian, and American accents through international media.',
      icon: Headphones
    },
    {
      title: 'Build Speaking Confidence',
      description: 'Overcome shyness by treating the speaking test as a friendly conversation.',
      icon: MessageSquare
    },
    {
      title: 'Master Time Management',
      description: 'Practice timed tests regularly to avoid running out of time on exam day.',
      icon: Clock
    },
    {
      title: 'Use Local Resources',
      description: 'Join English language courses or study groups in Thimphu for additional support.',
      icon: Users
    },
    {
      title: 'Stay Updated',
      description: 'Register through British Council India and keep track of test dates and procedures.',
      icon: Globe
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-sora text-slate-900 dark:text-white mb-4">
          IELTS Preparation Guide
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
          Comprehensive IELTS preparation guide for Bhutanese students
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Badge variant="secondary" className="text-lg py-2 px-4">
            <Globe className="h-4 w-4 mr-2" />
            Internationally Recognized
          </Badge>
          <Badge variant="secondary" className="text-lg py-2 px-4">
            <Award className="h-4 w-4 mr-2" />
            UK, Canada, Australia, NZ
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sections">Test Sections</TabsTrigger>
          <TabsTrigger value="timeline">Study Timeline</TabsTrigger>
          <TabsTrigger value="scoring">Scoring</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="bhutan">For Bhutanese</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Test Format Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6" />
                IELTS Test Format
              </CardTitle>
              <CardDescription>
                International English Language Testing System - recognized worldwide
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Academic IELTS</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      For university study abroad
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Professional registration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Academic texts and contexts
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">General Training IELTS</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      For immigration purposes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Vocational training
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Daily life contexts
                    </li>
                  </ul>
                </div>
              </div>
              
              <Alert>
                <Star className="h-4 w-4" />
                <AlertDescription>
                  <strong>For Bhutanese Students:</strong> Most students choose Academic IELTS for overseas university applications. 
                  The test is administered through British Council India with centers available regionally.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Progress Tracking */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Your Progress Tracker
              </CardTitle>
              <CardDescription>
                Track your preparation progress across all four skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(studyProgress).map(([skill, progress]) => (
                  <div key={skill} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium capitalize">{skill}</span>
                      <span className="text-sm text-slate-600">{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-3" />
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setStudyProgress(prev => ({
                          ...prev,
                          [skill]: Math.min(100, progress + 10)
                        }))}
                      >
                        +10%
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setStudyProgress(prev => ({
                          ...prev,
                          [skill]: Math.max(0, progress - 10)
                        }))}
                      >
                        -10%
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sections" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {testSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <Card key={section.name} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-3 rounded-full ${section.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle>{section.name}</CardTitle>
                        <div className="flex gap-4 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {section.duration}
                          </span>
                          <span>{section.questions} questions</span>
                        </div>
                      </div>
                    </div>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Key Strategies:</h4>
                    <ul className="space-y-2">
                      {section.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-6 w-6" />
                Study Timeline by Level
              </CardTitle>
              <CardDescription>
                Choose your current English proficiency level to see a customized study plan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-6">
                {Object.keys(studyTimeline).map((level) => (
                  <Button
                    key={level}
                    variant={selectedLevel === level ? "default" : "outline"}
                    onClick={() => setSelectedLevel(level as any)}
                    className="capitalize"
                  >
                    {level}
                  </Button>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold capitalize">{selectedLevel} Level</h3>
                  <Badge variant="secondary">
                    Duration: {studyTimeline[selectedLevel].duration}
                  </Badge>
                </div>

                {studyTimeline[selectedLevel].phases.map((phase, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">Week {phase.week}</span>
                        <p className="text-sm text-slate-600">{phase.focus}</p>
                      </div>
                      <span className="text-sm">{phase.progress}%</span>
                    </div>
                    <Progress value={phase.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scoring" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-6 w-6" />
                IELTS Band Scores
              </CardTitle>
              <CardDescription>
                Understanding the 9-band scoring system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bandScores.map((score) => (
                  <div key={score.band} className="flex items-center gap-4 p-4 rounded-lg border">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{score.band}</div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{score.level}</div>
                      <div className="text-sm text-slate-600">{score.description}</div>
                    </div>
                    <div className="w-32">
                      <Progress value={score.band * 11.11} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>

              <Alert className="mt-6">
                <Target className="h-4 w-4" />
                <AlertDescription>
                  <strong>Target Scores for Bhutanese Students:</strong> Most universities require 6.0-7.0 overall, 
                  with no individual band below 5.5-6.0. Check specific requirements for your chosen institution.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((category) => (
              <Card key={category.category}>
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="bhutan" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bhutaneseSpecificTips.map((tip) => {
              const IconComponent = tip.icon;
              return (
                <Card key={tip.title} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">{tip.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {tip.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Registration Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-6 w-6" />
                Registration Information for Bhutan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Test Centers</h3>
                  <p className="text-sm text-slate-600">
                    IELTS in Bhutan is administered through British Council India. 
                    Register online at the British Council website.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Required Documents</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Valid passport or Bhutanese ID</li>
                    <li>• Recent passport-sized photographs</li>
                    <li>• Registration confirmation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Test Day Tips</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Arrive 30 minutes early</li>
                    <li>• Dress neatly and professionally</li>
                    <li>• Warm up with English before the test</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Fees & Booking</h3>
                  <p className="text-sm text-slate-600">
                    Book well in advance as test dates fill up quickly. 
                    Check the British Council website for current fees and available dates.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IELTSGuide;