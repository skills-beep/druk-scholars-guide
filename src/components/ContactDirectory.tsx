
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Globe, Search, Building, GraduationCap, Award } from 'lucide-react';
import { colleges } from '@/data/colleges';

interface Contact {
  id: string;
  name: string;
  type: 'college' | 'scholarship' | 'counselor' | 'government';
  organization: string;
  phone?: string;
  email?: string;
  address?: string;
  website?: string;
  location: string;
  description: string;
}

const ContactDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  // Convert colleges data to contacts
  const collegeContacts: Contact[] = colleges.map(college => ({
    id: `college-${college.id}`,
    name: college.name,
    type: 'college' as const,
    organization: college.name,
    phone: college.contact.phone,
    email: college.contact.email,
    website: college.contact.website,
    address: college.location,
    location: college.location.split(',').pop()?.trim() || college.location,
    description: college.description.length > 150 
      ? college.description.substring(0, 150) + '...' 
      : college.description
  }));

  const otherContacts: Contact[] = [
    // Scholarship Providers
    {
      id: '4',
      name: 'Scholarship Division',
      type: 'scholarship',
      organization: 'Ministry of Education',
      phone: '+975-2-323725',
      email: 'scholarship@education.gov.bt',
      address: 'Kawajangsa, Thimphu',
      location: 'Thimphu',
      description: 'Government scholarships and financial aid'
    },
    {
      id: '5',
      name: 'Student Financial Aid',
      type: 'scholarship',
      organization: 'Druk Padma Karpo School',
      phone: '+975-2-371494',
      email: 'aid@dpks.edu.bt',
      address: 'Shaba, Paro',
      location: 'Paro',
      description: 'Merit-based scholarships and support'
    },
    {
      id: '6',
      name: 'CST Scholarship Office',
      type: 'scholarship',
      organization: 'Colombo Plan Staff College',
      phone: '+975-2-351004',
      email: 'scholarships@cpsc.edu.bt',
      address: 'Semtokha, Thimphu',
      location: 'Thimphu',
      description: 'International scholarship opportunities'
    },

    // Career Counselors
    {
      id: '7',
      name: 'Career Guidance Unit',
      type: 'counselor',
      organization: 'Department of Youth & Sports',
      phone: '+975-2-323763',
      email: 'career@dys.gov.bt',
      address: 'Thimphu',
      location: 'Thimphu',
      description: 'Career counseling and job placement services'
    },
    {
      id: '8',
      name: 'Student Counseling Center',
      type: 'counselor',
      organization: 'Bhutan Foundation',
      phone: '+975-2-323456',
      email: 'counseling@bhutanfound.org',
      address: 'Thimphu',
      location: 'Thimphu',
      description: 'Academic and personal counseling services'
    },

    // Government Offices
    {
      id: '9',
      name: 'Education Services',
      type: 'government',
      organization: 'Ministry of Education & Skills Development',
      phone: '+975-2-323725',
      email: 'info@education.gov.bt',
      website: 'https://www.education.gov.bt',
      address: 'Kawajangsa, Thimphu',
      location: 'Thimphu',
      description: 'Education policy and general inquiries'
    },
    {
      id: '10',
      name: 'Skills Development',
      type: 'government',
      organization: 'Technical & Vocational Education',
      phone: '+975-2-323789',
      email: 'tvet@education.gov.bt',
      address: 'Thimphu',
      location: 'Thimphu',
      description: 'Technical and vocational training programs'
    }
  ];

  // Combine all contacts
  const allContacts: Contact[] = [...collegeContacts, ...otherContacts];

  const filteredContacts = allContacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || contact.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'college': return <GraduationCap className="h-4 w-4" />;
      case 'scholarship': return <Award className="h-4 w-4" />;
      case 'counselor': return <Building className="h-4 w-4" />;
      case 'government': return <Building className="h-4 w-4" />;
      default: return <Phone className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'college': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'scholarship': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'counselor': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'government': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
            <Phone className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold">Contact Directory</CardTitle>
        <CardDescription>
          Find contact information for colleges, scholarship providers, and career counselors
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by name, organization, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={selectedType === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedType('all')}
            >
              All
            </Button>
            <Button
              variant={selectedType === 'college' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedType('college')}
            >
              Colleges
            </Button>
            <Button
              variant={selectedType === 'scholarship' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedType('scholarship')}
            >
              Scholarships
            </Button>
            <Button
              variant={selectedType === 'counselor' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedType('counselor')}
            >
              Counselors
            </Button>
            <Button
              variant={selectedType === 'government' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedType('government')}
            >
              Government
            </Button>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredContacts.map((contact) => (
            <Card key={contact.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{contact.name}</CardTitle>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                      {contact.organization}
                    </p>
                  </div>
                  <Badge className={`${getTypeColor(contact.type)} flex items-center gap-1`}>
                    {getTypeIcon(contact.type)}
                    {contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}
                  </Badge>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                  {contact.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0 space-y-3">
                {contact.phone && (
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <a href={`tel:${contact.phone}`} className="hover:underline">
                      {contact.phone}
                    </a>
                  </div>
                )}
                
                {contact.email && (
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-green-600" />
                    <a href={`mailto:${contact.email}`} className="hover:underline">
                      {contact.email}
                    </a>
                  </div>
                )}
                
                {contact.address && (
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-red-600" />
                    <span>{contact.address}</span>
                  </div>
                )}
                
                {contact.website && (
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="h-4 w-4 text-purple-600" />
                    <a 
                      href={contact.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredContacts.length === 0 && (
          <div className="text-center py-8">
            <p className="text-slate-500 dark:text-slate-400">
              No contacts found matching your search criteria.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactDirectory;
