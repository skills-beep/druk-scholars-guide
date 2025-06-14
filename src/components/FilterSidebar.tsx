
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, Filter, ChevronDown, ChevronUp, MapPin, Building2, GraduationCap, Star, Banknote, Search, Award, BookOpen, ArrowUpDown } from 'lucide-react';
import { CollegeFilters } from '@/types/college';

interface FilterSidebarProps {
  filters: CollegeFilters;
  onFiltersChange: (filters: CollegeFilters) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const FilterSidebar = ({ filters, onFiltersChange, isOpen, onToggle }: FilterSidebarProps) => {
  const [openSections, setOpenSections] = useState({
    location: true,
    collegeType: true,
    courseType: true,
    fees: true,
    rating: true,
    accreditation: true,
    degreeProgram: true,
    sorting: true
  });

  const locations = ['Thimphu', 'Paro', 'Phuntsholing', 'Dewathang', 'Lobesa'];
  const courseTypes = ['Engineering', 'Business', 'Medicine', 'Arts', 'Science', 'Education', 'Traditional Medicine'];
  const collegeTypes = ['University', 'College', 'Institute'];
  const accreditations = ['Royal University of Bhutan', 'International Accreditation', 'National Board', 'Professional Bodies'];
  const degreePrograms = [
    'Bachelor of Engineering',
    'Bachelor of Business Administration',
    'Bachelor of Medicine',
    'Bachelor of Arts',
    'Bachelor of Science',
    'Master of Engineering',
    'Master of Business Administration',
    'Diploma in Education',
    'Certificate Programs'
  ];

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleLocationChange = (location: string, checked: boolean) => {
    const newLocations = checked 
      ? [...filters.location, location]
      : filters.location.filter(l => l !== location);
    onFiltersChange({ ...filters, location: newLocations });
  };

  const handleCourseTypeChange = (courseType: string, checked: boolean) => {
    const newCourseTypes = checked 
      ? [...filters.courseType, courseType]
      : filters.courseType.filter(c => c !== courseType);
    onFiltersChange({ ...filters, courseType: newCourseTypes });
  };

  const handleCollegeTypeChange = (collegeType: string, checked: boolean) => {
    const newCollegeTypes = checked 
      ? [...filters.collegeType, collegeType]
      : filters.collegeType.filter(c => c !== collegeType);
    onFiltersChange({ ...filters, collegeType: newCollegeTypes });
  };

  const handleAccreditationChange = (accreditation: string, checked: boolean) => {
    const newAccreditations = checked 
      ? [...filters.accreditation, accreditation]
      : filters.accreditation.filter(a => a !== accreditation);
    onFiltersChange({ ...filters, accreditation: newAccreditations });
  };

  const clearFilters = () => {
    onFiltersChange({
      search: '',
      location: [],
      courseType: [],
      feeRange: [0, 400000],
      rating: 0,
      collegeType: [],
      accreditation: [],
      degreeProgram: '',
      sortBy: 'popularity'
    });
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <Button
        onClick={onToggle}
        variant="default"
        size="lg"
        className="lg:hidden fixed bottom-6 right-6 z-40 rounded-full h-16 w-16 shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-2 border-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-lg"
      >
        <Filter className="h-7 w-7" />
      </Button>

      {/* Sidebar */}
      <div className={`
        fixed lg:relative top-0 right-0 h-full w-80 
        transform transition-transform duration-300 ease-in-out z-30
        ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
      `}>
        <Card className="h-full rounded-2xl border-0 overflow-y-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-2xl">
          <CardHeader className="sticky top-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg z-10 border-b border-white/20 dark:border-gray-700/50 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-white">
                <Filter className="h-5 w-5 text-blue-600" />
                Advanced Filters
              </CardTitle>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors"
                >
                  Clear All
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onToggle}
                  className="lg:hidden"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 space-y-4">
            {/* Search */}
            <div className="space-y-2">
              <Label htmlFor="search" className="text-sm font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                <Search className="h-4 w-4 text-blue-600" />
                Search
              </Label>
              <Input
                id="search"
                placeholder="College name or keyword..."
                value={filters.search}
                onChange={(e) => onFiltersChange({ ...filters, search: e.target.value })}
                className="rounded-xl border-slate-200 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:bg-white dark:focus:bg-gray-700 transition-all"
              />
            </div>

            <Separator className="bg-slate-200 dark:bg-gray-600" />

            {/* Sorting */}
            <Collapsible open={openSections.sorting} onOpenChange={() => toggleSection('sorting')}>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700/50 transition-colors">
                <Label className="text-sm font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2 cursor-pointer">
                  <ArrowUpDown className="h-4 w-4 text-purple-600" />
                  Sort By
                </Label>
                {openSections.sorting ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <Select value={filters.sortBy} onValueChange={(value) => onFiltersChange({ ...filters, sortBy: value as any })}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Choose sorting option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Most Popular</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="alphabetical">A-Z</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </CollapsibleContent>
            </Collapsible>

            <Separator className="bg-slate-200 dark:bg-gray-600" />

            {/* Degree Program Search */}
            <Collapsible open={openSections.degreeProgram} onOpenChange={() => toggleSection('degreeProgram')}>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700/50 transition-colors">
                <Label className="text-sm font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2 cursor-pointer">
                  <BookOpen className="h-4 w-4 text-indigo-600" />
                  Degree Program
                </Label>
                {openSections.degreeProgram ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <Select value={filters.degreeProgram} onValueChange={(value) => onFiltersChange({ ...filters, degreeProgram: value === 'all' ? '' : value })}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select degree program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Programs</SelectItem>
                    {degreePrograms.map((program) => (
                      <SelectItem key={program} value={program}>{program}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CollapsibleContent>
            </Collapsible>

            <Separator className="bg-slate-200 dark:bg-gray-600" />

            {/* Accreditation Filter */}
            <Collapsible open={openSections.accreditation} onOpenChange={() => toggleSection('accreditation')}>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700/50 transition-colors">
                <Label className="text-sm font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2 cursor-pointer">
                  <Award className="h-4 w-4 text-yellow-600" />
                  Accreditation
                </Label>
                {openSections.accreditation ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 mt-2">
                {accreditations.map((accreditation) => (
                  <div key={accreditation} className="flex items-center space-x-2 p-1">
                    <Checkbox
                      id={`accreditation-${accreditation}`}
                      checked={filters.accreditation.includes(accreditation)}
                      onCheckedChange={(checked) => 
                        handleAccreditationChange(accreditation, checked as boolean)
                      }
                      className="border-slate-300 dark:border-gray-600"
                    />
                    <Label 
                      htmlFor={`accreditation-${accreditation}`}
                      className="text-sm font-normal cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors"
                    >
                      {accreditation}
                    </Label>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>

            <Separator className="bg-slate-200 dark:bg-gray-600" />

            {/* Location Filter */}
            <Collapsible open={openSections.location} onOpenChange={() => toggleSection('location')}>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700/50 transition-colors">
                <Label className="text-sm font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2 cursor-pointer">
                  <MapPin className="h-4 w-4 text-green-600" />
                  Location
                </Label>
                {openSections.location ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 mt-2">
                {locations.map((location) => (
                  <div key={location} className="flex items-center space-x-2 p-1">
                    <Checkbox
                      id={`location-${location}`}
                      checked={filters.location.includes(location)}
                      onCheckedChange={(checked) => 
                        handleLocationChange(location, checked as boolean)
                      }
                      className="border-slate-300 dark:border-gray-600"
                    />
                    <Label 
                      htmlFor={`location-${location}`}
                      className="text-sm font-normal cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors"
                    >
                      {location}
                    </Label>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>

            <Separator className="bg-slate-200 dark:bg-gray-600" />

            {/* College Type Filter */}
            <Collapsible open={openSections.collegeType} onOpenChange={() => toggleSection('collegeType')}>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700/50 transition-colors">
                <Label className="text-sm font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2 cursor-pointer">
                  <Building2 className="h-4 w-4 text-purple-600" />
                  Institution Type
                </Label>
                {openSections.collegeType ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 mt-2">
                {collegeTypes.map((type) => (
                  <div key={type} className="flex items-center space-x-2 p-1">
                    <Checkbox
                      id={`type-${type}`}
                      checked={filters.collegeType.includes(type)}
                      onCheckedChange={(checked) => 
                        handleCollegeTypeChange(type, checked as boolean)
                      }
                      className="border-slate-300 dark:border-gray-600"
                    />
                    <Label 
                      htmlFor={`type-${type}`}
                      className="text-sm font-normal cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors"
                    >
                      {type}
                    </Label>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>

            <Separator className="bg-slate-200 dark:bg-gray-600" />

            {/* Course Type Filter */}
            <Collapsible open={openSections.courseType} onOpenChange={() => toggleSection('courseType')}>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700/50 transition-colors">
                <Label className="text-sm font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2 cursor-pointer">
                  <GraduationCap className="h-4 w-4 text-blue-600" />
                  Field of Study
                </Label>
                {openSections.courseType ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 mt-2">
                {courseTypes.map((courseType) => (
                  <div key={courseType} className="flex items-center space-x-2 p-1">
                    <Checkbox
                      id={`course-${courseType}`}
                      checked={filters.courseType.includes(courseType)}
                      onCheckedChange={(checked) => 
                        handleCourseTypeChange(courseType, checked as boolean)
                      }
                      className="border-slate-300 dark:border-gray-600"
                    />
                    <Label 
                      htmlFor={`course-${courseType}`}
                      className="text-sm font-normal cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors"
                    >
                      {courseType}
                    </Label>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>

            <Separator className="bg-slate-200 dark:bg-gray-600" />

            {/* Fee Range Filter */}
            <Collapsible open={openSections.fees} onOpenChange={() => toggleSection('fees')}>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700/50 transition-colors">
                <Label className="text-sm font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2 cursor-pointer">
                  <Banknote className="h-4 w-4 text-emerald-600" />
                  Annual Fees (BTN)
                </Label>
                {openSections.fees ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-3 mt-2">
                <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                  {filters.feeRange[0].toLocaleString()} - {filters.feeRange[1].toLocaleString()}
                </div>
                <Slider
                  value={filters.feeRange}
                  onValueChange={(value) => 
                    onFiltersChange({ ...filters, feeRange: value as [number, number] })
                  }
                  max={400000}
                  min={0}
                  step={10000}
                  className="mt-2"
                />
              </CollapsibleContent>
            </Collapsible>

            <Separator className="bg-slate-200 dark:bg-gray-600" />

            {/* Rating Filter */}
            <Collapsible open={openSections.rating} onOpenChange={() => toggleSection('rating')}>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700/50 transition-colors">
                <Label className="text-sm font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2 cursor-pointer">
                  <Star className="h-4 w-4 text-amber-500" />
                  Minimum Rating
                </Label>
                {openSections.rating ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-3 mt-2">
                <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                  {filters.rating || 'Any'} {filters.rating > 0 && '★'}
                </div>
                <Slider
                  value={[filters.rating]}
                  onValueChange={(value) => 
                    onFiltersChange({ ...filters, rating: value[0] })
                  }
                  max={5}
                  min={0}
                  step={0.5}
                  className="mt-2"
                />
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 lg:hidden"
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default FilterSidebar;
