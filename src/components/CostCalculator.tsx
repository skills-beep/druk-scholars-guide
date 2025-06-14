
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, DollarSign, GraduationCap, Home, Utensils } from 'lucide-react';

const CostCalculator = () => {
  const [tuitionFee, setTuitionFee] = useState<number>(0);
  const [accommodationType, setAccommodationType] = useState<string>('');
  const [mealPlan, setMealPlan] = useState<string>('');
  const [duration, setDuration] = useState<number>(4);
  const [personalExpenses, setPersonalExpenses] = useState<number>(5000);

  const accommodationCosts = {
    hostel: 15000,
    'shared-apartment': 25000,
    'private-apartment': 40000,
    'at-home': 0
  };

  const mealCosts = {
    'college-mess': 12000,
    'self-cooking': 8000,
    'outside-eating': 18000,
    'home-meals': 0
  };

  const calculateTotal = () => {
    const accommodationCost = accommodationCosts[accommodationType as keyof typeof accommodationCosts] || 0;
    const mealCost = mealCosts[mealPlan as keyof typeof mealCosts] || 0;
    const yearlyTotal = tuitionFee + accommodationCost + mealCost + personalExpenses;
    return yearlyTotal * duration;
  };

  const yearlyTotal = tuitionFee + (accommodationCosts[accommodationType as keyof typeof accommodationCosts] || 0) + 
                     (mealCosts[mealPlan as keyof typeof mealCosts] || 0) + personalExpenses;

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
            <Calculator className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold">Education Cost Calculator</CardTitle>
        <CardDescription>
          Estimate your total education expenses for studying in Bhutan
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tuition Fee */}
          <div className="space-y-2">
            <Label htmlFor="tuition" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Annual Tuition Fee (Nu.)
            </Label>
            <Input
              id="tuition"
              type="number"
              placeholder="e.g., 45000"
              value={tuitionFee || ''}
              onChange={(e) => setTuitionFee(Number(e.target.value))}
            />
          </div>

          {/* Duration */}
          <div className="space-y-2">
            <Label htmlFor="duration">Course Duration (Years)</Label>
            <Select value={duration.toString()} onValueChange={(value) => setDuration(Number(value))}>
              <SelectTrigger>
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Year</SelectItem>
                <SelectItem value="2">2 Years</SelectItem>
                <SelectItem value="3">3 Years</SelectItem>
                <SelectItem value="4">4 Years</SelectItem>
                <SelectItem value="5">5 Years</SelectItem>
                <SelectItem value="6">6 Years</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Accommodation */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Accommodation Type
            </Label>
            <Select value={accommodationType} onValueChange={setAccommodationType}>
              <SelectTrigger>
                <SelectValue placeholder="Select accommodation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="at-home">Living at Home (Nu. 0/year)</SelectItem>
                <SelectItem value="hostel">College Hostel (Nu. 15,000/year)</SelectItem>
                <SelectItem value="shared-apartment">Shared Apartment (Nu. 25,000/year)</SelectItem>
                <SelectItem value="private-apartment">Private Apartment (Nu. 40,000/year)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Meal Plan */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Utensils className="h-4 w-4" />
              Meal Plan
            </Label>
            <Select value={mealPlan} onValueChange={setMealPlan}>
              <SelectTrigger>
                <SelectValue placeholder="Select meal plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="home-meals">Home Meals (Nu. 0/year)</SelectItem>
                <SelectItem value="self-cooking">Self Cooking (Nu. 8,000/year)</SelectItem>
                <SelectItem value="college-mess">College Mess (Nu. 12,000/year)</SelectItem>
                <SelectItem value="outside-eating">Outside Eating (Nu. 18,000/year)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Personal Expenses */}
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="personal">Annual Personal Expenses (Nu.)</Label>
            <Input
              id="personal"
              type="number"
              placeholder="Books, transport, entertainment, etc."
              value={personalExpenses}
              onChange={(e) => setPersonalExpenses(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Results */}
        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold mb-4">Cost Breakdown</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Annual Tuition Fee:</span>
                <span className="font-medium">Nu. {tuitionFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Annual Accommodation:</span>
                <span className="font-medium">Nu. {(accommodationCosts[accommodationType as keyof typeof accommodationCosts] || 0).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Annual Meals:</span>
                <span className="font-medium">Nu. {(mealCosts[mealPlan as keyof typeof mealCosts] || 0).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Annual Personal Expenses:</span>
                <span className="font-medium">Nu. {personalExpenses.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-lg font-semibold">
                <span>Annual Total:</span>
                <span className="text-blue-600 dark:text-blue-400">Nu. {yearlyTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xl font-bold border-t pt-2">
                <span>Total Course Cost:</span>
                <span className="text-green-600 dark:text-green-400">Nu. {calculateTotal().toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CostCalculator;
