
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { X, Filter } from 'lucide-react';
import { CollegeFilters } from '@/types/college';

interface FilterSidebarProps {
  filters: CollegeFilters;
  onFiltersChange: (filters: CollegeFilters) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const FilterSidebar = ({ filters, onFiltersChange, isOpen, onToggle }: FilterSidebarProps) => {
  const locations = ['Thimphu', 'Paro', 'Phuntsholing', 'Dewathang', 'Lobesa'];
  const courseTypes = ['Engineering', 'Business', 'Medicine', 'Arts', 'Science', 'Education', 'Traditional Medicine'];
  const collegeTypes = ['University', 'College', 'Institute'];

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

  const clearFilters = () => {
    onFiltersChange({
      search: '',
      location: [],
      courseType: [],
      feeRange: [0, 400000],
      rating: 0,
      collegeType: []
    });
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <Button
        onClick={onToggle}
        variant="outline"
        size="lg"
        className="md:hidden fixed bottom-6 right-6 z-40 rounded-full h-14 w-14 shadow-lg"
      >
        <Filter className="h-6 w-6" />
      </Button>

      {/* Sidebar */}
      <div className={`
        fixed md:relative top-0 right-0 h-full w-80 bg-background border-l md:border-l-0 md:border-r 
        transform transition-transform duration-300 ease-in-out z-30
        ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
      `}>
        <Card className="h-full rounded-none border-0 overflow-y-auto">
          <CardHeader className="sticky top-0 bg-background z-10 border-b">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters
              </CardTitle>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onToggle}
                  className="md:hidden"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            {/* Search */}
            <div>
              <Label htmlFor="search" className="text-sm font-medium mb-2 block">
                Search
              </Label>
              <Input
                id="search"
                placeholder="College name or keyword..."
                value={filters.search}
                onChange={(e) => onFiltersChange({ ...filters, search: e.target.value })}
              />
            </div>

            <Separator />

            {/* Location */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Location</Label>
              <div className="space-y-2">
                {locations.map((location) => (
                  <div key={location} className="flex items-center space-x-2">
                    <Checkbox
                      id={`location-${location}`}
                      checked={filters.location.includes(location)}
                      onCheckedChange={(checked) => 
                        handleLocationChange(location, checked as boolean)
                      }
                    />
                    <Label 
                      htmlFor={`location-${location}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {location}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* College Type */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Institution Type</Label>
              <div className="space-y-2">
                {collegeTypes.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={`type-${type}`}
                      checked={filters.collegeType.includes(type)}
                      onCheckedChange={(checked) => 
                        handleCollegeTypeChange(type, checked as boolean)
                      }
                    />
                    <Label 
                      htmlFor={`type-${type}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Course Type */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Field of Study</Label>
              <div className="space-y-2">
                {courseTypes.map((courseType) => (
                  <div key={courseType} className="flex items-center space-x-2">
                    <Checkbox
                      id={`course-${courseType}`}
                      checked={filters.courseType.includes(courseType)}
                      onCheckedChange={(checked) => 
                        handleCourseTypeChange(courseType, checked as boolean)
                      }
                    />
                    <Label 
                      htmlFor={`course-${courseType}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {courseType}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Fee Range */}
            <div>
              <Label className="text-sm font-medium mb-3 block">
                Annual Fees (BTN): {filters.feeRange[0].toLocaleString()} - {filters.feeRange[1].toLocaleString()}
              </Label>
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
            </div>

            <Separator />

            {/* Rating */}
            <div>
              <Label className="text-sm font-medium mb-3 block">
                Minimum Rating: {filters.rating || 'Any'} {filters.rating > 0 && '★'}
              </Label>
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
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default FilterSidebar;
