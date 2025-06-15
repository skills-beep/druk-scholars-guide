
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Brain, Star, MapPin, DollarSign, GraduationCap } from 'lucide-react';
import { College } from '@/types/college';
import { colleges } from '@/data/colleges';

interface UserPreferences {
  budget: number[];
  preferredLocation: string;
  fieldOfStudy: string;
  collegeType: string;
  priorityFactor: 'fees' | 'rating' | 'location' | 'reputation';
  academicBackground: string;
}

interface RecommendationScore {
  college: College;
  score: number;
  matchReasons: string[];
}

interface CollegeRecommendationsProps {
  onViewCollege: (college: College) => void;
}

const CollegeRecommendations = ({ onViewCollege }: CollegeRecommendationsProps) => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    budget: [100000],
    preferredLocation: '',
    fieldOfStudy: '',
    collegeType: '',
    priorityFactor: 'rating',
    academicBackground: ''
  });
  const [recommendations, setRecommendations] = useState<RecommendationScore[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const calculateRecommendations = () => {
    setIsAnalyzing(true);
    console.log('Calculating recommendations for preferences:', preferences);

    // Simulate AI processing delay
    setTimeout(() => {
      const scoredColleges = colleges.map(college => {
        let score = 0;
        const matchReasons: string[] = [];

        // Budget compatibility (0-30 points)
        if (college.fees.min <= preferences.budget[0]) {
          const budgetScore = Math.max(0, 30 - ((college.fees.min / preferences.budget[0]) * 10));
          score += budgetScore;
          if (budgetScore > 20) {
            matchReasons.push('Within your budget range');
          }
        }

        // Location preference (0-25 points)
        if (preferences.preferredLocation && college.location.toLowerCase().includes(preferences.preferredLocation.toLowerCase())) {
          score += 25;
          matchReasons.push('Matches preferred location');
        }

        // Field of study (0-25 points)
        if (preferences.fieldOfStudy) {
          const hasMatchingCourse = college.courses.some(course => 
            course.toLowerCase().includes(preferences.fieldOfStudy.toLowerCase())
          );
          if (hasMatchingCourse) {
            score += 25;
            matchReasons.push('Offers your field of study');
          }
        }

        // College type preference (0-10 points)
        if (preferences.collegeType && college.type.toLowerCase().includes(preferences.collegeType.toLowerCase())) {
          score += 10;
          matchReasons.push('Matches college type preference');
        }

        // Priority factor bonus (0-15 points)
        switch (preferences.priorityFactor) {
          case 'rating':
            score += college.rating * 3;
            if (college.rating >= 4.5) matchReasons.push('Highly rated institution');
            break;
          case 'fees':
            score += college.fees.min < 50000 ? 15 : college.fees.min < 100000 ? 10 : 5;
            if (college.fees.min < 50000) matchReasons.push('Very affordable fees');
            break;
          case 'reputation':
            if (college.established < 1980) {
              score += 15;
              matchReasons.push('Well-established institution');
            }
            break;
        }

        // Academic background compatibility (0-10 points)
        if (preferences.academicBackground) {
          const relevantPrograms = Object.values(college.programs).flat();
          const hasMatchingProgram = relevantPrograms.some(program => 
            program.toLowerCase().includes(preferences.academicBackground.toLowerCase())
          );
          if (hasMatchingProgram) {
            score += 10;
            matchReasons.push('Aligns with academic background');
          }
        }

        return { college, score, matchReasons };
      });

      // Sort by score and take top 6
      const topRecommendations = scoredColleges
        .sort((a, b) => b.score - a.score)
        .slice(0, 6);

      console.log('Top recommendations:', topRecommendations);
      setRecommendations(topRecommendations);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300';
    if (score >= 60) return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300';
    if (score >= 40) return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300';
    return 'text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-300';
  };

  return (
    <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-slate-100">
          <Brain className="h-5 w-5 text-purple-600" />
          AI College Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="budget" className="text-slate-700 dark:text-slate-300">Budget Range (BTN)</Label>
            <div className="px-3">
              <Slider
                id="budget"
                min={25000}
                max={500000}
                step={25000}
                value={preferences.budget}
                onValueChange={(value) => setPreferences(prev => ({ ...prev, budget: value }))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mt-1">
                <span>BTN 25K</span>
                <span className="font-medium">BTN {preferences.budget[0].toLocaleString()}</span>
                <span>BTN 500K</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-slate-700 dark:text-slate-300">Preferred Location</Label>
            <Input
              id="location"
              placeholder="e.g., Thimphu, Paro"
              value={preferences.preferredLocation}
              onChange={(e) => setPreferences(prev => ({ ...prev, preferredLocation: e.target.value }))}
              className="dark:bg-gray-800 dark:border-gray-600"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="field" className="text-slate-700 dark:text-slate-300">Field of Study</Label>
            <Input
              id="field"
              placeholder="e.g., Engineering, Business, Medicine"
              value={preferences.fieldOfStudy}
              onChange={(e) => setPreferences(prev => ({ ...prev, fieldOfStudy: e.target.value }))}
              className="dark:bg-gray-800 dark:border-gray-600"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type" className="text-slate-700 dark:text-slate-300">College Type</Label>
            <Select onValueChange={(value) => setPreferences(prev => ({ ...prev, collegeType: value }))}>
              <SelectTrigger className="dark:bg-gray-800 dark:border-gray-600">
                <SelectValue placeholder="Select college type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="private">Private</SelectItem>
                <SelectItem value="government">Government</SelectItem>
                <SelectItem value="autonomous">Autonomous</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="priority" className="text-slate-700 dark:text-slate-300">Priority Factor</Label>
            <Select onValueChange={(value: any) => setPreferences(prev => ({ ...prev, priorityFactor: value }))}>
              <SelectTrigger className="dark:bg-gray-800 dark:border-gray-600">
                <SelectValue placeholder="What matters most?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">High Rating</SelectItem>
                <SelectItem value="fees">Low Fees</SelectItem>
                <SelectItem value="location">Location</SelectItem>
                <SelectItem value="reputation">Reputation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="background" className="text-slate-700 dark:text-slate-300">Academic Background</Label>
            <Input
              id="background"
              placeholder="e.g., Science, Commerce, Arts"
              value={preferences.academicBackground}
              onChange={(e) => setPreferences(prev => ({ ...prev, academicBackground: e.target.value }))}
              className="dark:bg-gray-800 dark:border-gray-600"
            />
          </div>
        </div>

        <Button 
          onClick={calculateRecommendations}
          disabled={isAnalyzing}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
        >
          {isAnalyzing ? (
            <>
              <Brain className="mr-2 h-4 w-4 animate-spin" />
              Analyzing Preferences...
            </>
          ) : (
            <>
              <Brain className="mr-2 h-4 w-4" />
              Get AI Recommendations
            </>
          )}
        </Button>

        {recommendations.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
              Top Recommendations for You
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendations.map((rec, index) => (
                <Card key={rec.college.id} className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-100 line-clamp-2">
                          {rec.college.name}
                        </h4>
                        <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 mt-1">
                          <MapPin className="h-3 w-3" />
                          {rec.college.location}
                        </div>
                      </div>
                      <Badge className={`text-xs px-2 py-1 ${getScoreColor(rec.score)}`}>
                        {Math.round(rec.score)}% match
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="text-slate-600 dark:text-slate-400">{rec.college.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                        <DollarSign className="h-3 w-3" />
                        <span className="font-medium">{rec.college.fees.min.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs font-medium text-slate-700 dark:text-slate-300">Why this matches:</p>
                      {rec.matchReasons.slice(0, 2).map((reason, idx) => (
                        <p key={idx} className="text-xs text-slate-600 dark:text-slate-400">• {reason}</p>
                      ))}
                    </div>

                    <Button
                      onClick={() => onViewCollege(rec.college)}
                      size="sm"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CollegeRecommendations;
