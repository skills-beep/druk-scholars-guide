
import { useState, useEffect, useMemo } from 'react';
import { Search, Filter, Globe, MapPin, GraduationCap, Star, Calendar, DollarSign, ToggleLeft, ToggleRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';
import LoadingAnimation from '@/components/LoadingAnimation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { colleges } from '@/data/colleges';
import { internationalColleges, getCountries, getAllSpecializations, InternationalCollege } from '@/data/internationalColleges';
import { College } from '@/types/college';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showInternational, setShowInternational] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const countries = getCountries();
  const specializations = getAllSpecializations();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };

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

  if (isLoading) {
    return <LoadingAnimation />;
  }

  const currentColleges = showInternational ? filteredInternationalColleges : filteredBhutaneseColleges;
  const groupedInternationalColleges = showInternational ? 
    filteredInternationalColleges.reduce((acc, college) => {
      if (!acc[college.country]) {
        acc[college.country] = [];
      }
      acc[college.country].push(college);
      return acc;
    }, {} as Record<string, InternationalCollege[]>) : {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      
      <main>
        <HeroSection onSearch={handleSearch} />
        <StatsSection />
        
        {/* College Directory Section */}
        <div className="container mx-auto px-4 py-16">
          {/* Header with Toggle */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Explore Colleges
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover the best educational institutions in Bhutan and RGOB-recognized universities worldwide
            </p>
            
            {/* Toggle Button */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`font-medium transition-colors ${!showInternational ? 'text-primary' : 'text-muted-foreground'}`}>
                Colleges in Bhutan
              </span>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setShowInternational(!showInternational)}
                className="p-2"
              >
                {showInternational ? (
                  <ToggleRight className="w-12 h-6 text-primary" />
                ) : (
                  <ToggleLeft className="w-12 h-6 text-muted-foreground" />
                )}
              </Button>
              <span className={`font-medium transition-colors ${showInternational ? 'text-primary' : 'text-muted-foreground'}`}>
                International Colleges
              </span>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-8 border border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder={`Search ${showInternational ? 'international' : 'Bhutanese'} colleges, programs...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {showInternational && (
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
                )}
                
                {showInternational && (
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
                )}
                
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

          {/* Results */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">
                {showInternational ? 'RGOB-Recognized International Colleges' : 'Colleges in Bhutan'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {showInternational 
                  ? `Explore ${filteredInternationalColleges.length} world-class institutions recognized by the Royal Government of Bhutan`
                  : `Discover ${filteredBhutaneseColleges.length} institutions across the Kingdom of Bhutan`
                }
              </p>
            </div>

            {/* College Grid */}
            {!showInternational ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBhutaneseColleges.map(college => (
                  <BhutaneseCollegeCard key={college.id} college={college} />
                ))}
              </div>
            ) : (
              // Group international colleges by country when showing all countries
              selectedCountry === 'all' ? (
                <div className="space-y-12">
                  {Object.entries(groupedInternationalColleges).map(([country, collegesList]) => (
                    <div key={country} className="space-y-6">
                      <div className="flex items-center gap-3">
                        <Globe className="w-6 h-6 text-primary" />
                        <h4 className="text-xl font-semibold">{country}</h4>
                        <Badge variant="outline">{collegesList.length} colleges</Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {collegesList.map(college => (
                          <InternationalCollegeCard key={college.id} college={college} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredInternationalColleges.map(college => (
                    <InternationalCollegeCard key={college.id} college={college} />
                  ))}
                </div>
              )
            )}
            
            {currentColleges.length === 0 && (
              <div className="text-center py-12">
                {showInternational ? (
                  <Globe className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                ) : (
                  <GraduationCap className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                )}
                <h3 className="text-xl font-semibold mb-2">No colleges found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
