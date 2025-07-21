import { useState, useMemo } from 'react';
import { Search, Filter, Globe, MapPin, GraduationCap, Star, Calendar, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { colleges } from '@/data/colleges';
import { internationalColleges, getCollegesByCountry, getCountries, getAllSpecializations, InternationalCollege } from '@/data/internationalColleges';
import { College } from '@/types/college';

const CollegeDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const countries = getCountries();
  const specializations = getAllSpecializations();
  const collegesByCountry = getCollegesByCountry();

  // Filter Bhutanese colleges
  const filteredBhutaneseColleges = useMemo(() => {
    return colleges.filter(college => {
      const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           college.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           college.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesType = selectedType === 'all' || college.type === selectedType;
      
      return matchesSearch && matchesType;
    });
  }, [searchTerm, selectedType]);

  // Filter international colleges
  const filteredInternationalColleges = useMemo(() => {
    return internationalColleges.filter(college => {
      const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           college.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           college.specializations.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCountry = selectedCountry === 'all' || college.country === selectedCountry;
      const matchesSpecialization = selectedSpecialization === 'all' || 
                                   college.specializations.includes(selectedSpecialization);
      const matchesType = selectedType === 'all' || college.type === selectedType;
      
      return matchesSearch && matchesCountry && matchesSpecialization && matchesType;
    });
  }, [searchTerm, selectedCountry, selectedSpecialization, selectedType]);

  const BhutaneseCollegeCard = ({ college }: { college: College }) => (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={college.image} 
          alt={college.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <Badge variant={college.type === 'Public' ? 'default' : 'secondary'}>
            {college.type}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-lg group-hover:text-primary transition-colors">
          {college.name}
        </CardTitle>
        <div className="flex items-center text-sm text-muted-foreground gap-1">
          <MapPin className="w-4 h-4" />
          {college.location}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {college.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{college.rating}</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Est. {college.established}
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="text-sm font-medium">Popular Programs:</div>
          <div className="flex flex-wrap gap-1">
            {college.courses.slice(0, 3).map((course, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {course}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            <span>{college.fees.min.toLocaleString()} - {college.fees.max.toLocaleString()} {college.fees.currency}</span>
          </div>
        </div>
        
        <Button 
          className="w-full"
          onClick={() => window.open(college.contact.website, '_blank')}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );

  const InternationalCollegeCard = ({ college }: { college: InternationalCollege }) => (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={college.image} 
          alt={college.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <Badge variant={college.type === 'Public' ? 'default' : 'secondary'}>
            {college.type}
          </Badge>
          <Badge className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
            RGOB Recognized
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-lg group-hover:text-primary transition-colors">
          {college.name}
        </CardTitle>
        <div className="flex items-center text-sm text-muted-foreground gap-1">
          <Globe className="w-4 h-4" />
          {college.location}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {college.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{college.rating}</span>
          </div>
          {college.worldRanking && (
            <div className="text-sm text-muted-foreground">
              World Rank: #{college.worldRanking}
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="text-sm font-medium">Specializations:</div>
          <div className="flex flex-wrap gap-1">
            {college.specializations.slice(0, 3).map((spec, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {spec}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              <span>Tuition: {college.tuitionFees.min.toLocaleString()} - {college.tuitionFees.max.toLocaleString()} {college.tuitionFees.currency}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Apply by: {college.applicationDeadline}</span>
          </div>
        </div>
        
        <Button 
          className="w-full"
          onClick={() => window.open(college.contact.website, '_blank')}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            College Directory
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore colleges in Bhutan and RGOB-recognized institutions worldwide. 
            Find the perfect place to pursue your higher education dreams.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-8 border border-gray-200 dark:border-gray-700">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search colleges, locations, programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  {countries.map(country => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Field" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specializations</SelectItem>
                  {specializations.map(spec => (
                    <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="College Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Public">Public</SelectItem>
                  <SelectItem value="Private">Private</SelectItem>
                </SelectContent>
              </Select>
              
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCountry('all');
                  setSelectedSpecialization('all');
                  setSelectedType('all');
                }}
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Clear Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs for Bhutanese vs International */}
        <Tabs defaultValue="bhutan" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="bhutan" className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Colleges in Bhutan
            </TabsTrigger>
            <TabsTrigger value="international" className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              International Colleges
            </TabsTrigger>
          </TabsList>

          {/* Bhutanese Colleges */}
          <TabsContent value="bhutan" className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Colleges in Bhutan</h2>
              <p className="text-muted-foreground mb-6">
                Discover {filteredBhutaneseColleges.length} institutions across the Kingdom of Bhutan
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBhutaneseColleges.map(college => (
                <BhutaneseCollegeCard key={college.id} college={college} />
              ))}
            </div>
            
            {filteredBhutaneseColleges.length === 0 && (
              <div className="text-center py-12">
                <GraduationCap className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No colleges found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria</p>
              </div>
            )}
          </TabsContent>

          {/* International Colleges */}
          <TabsContent value="international" className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">RGOB-Recognized International Colleges</h2>
              <p className="text-muted-foreground mb-6">
                Explore {filteredInternationalColleges.length} world-class institutions recognized by the Royal Government of Bhutan
              </p>
            </div>

            {/* Group by Country */}
            {selectedCountry === 'all' ? (
              <div className="space-y-12">
                {countries.map(country => {
                  const countryColleges = filteredInternationalColleges.filter(college => college.country === country);
                  if (countryColleges.length === 0) return null;
                  
                  return (
                    <div key={country} className="space-y-6">
                      <div className="flex items-center gap-3">
                        <Globe className="w-6 h-6 text-primary" />
                        <h3 className="text-xl font-semibold">{country}</h3>
                        <Badge variant="outline">{countryColleges.length} colleges</Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {countryColleges.map(college => (
                          <InternationalCollegeCard key={college.id} college={college} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredInternationalColleges.map(college => (
                  <InternationalCollegeCard key={college.id} college={college} />
                ))}
              </div>
            )}
            
            {filteredInternationalColleges.length === 0 && (
              <div className="text-center py-12">
                <Globe className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No colleges found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default CollegeDirectory;