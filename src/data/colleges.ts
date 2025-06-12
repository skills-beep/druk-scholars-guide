import { College } from '@/types/college';

export const colleges: College[] = [
  {
    id: '1',
    name: 'Royal University of Bhutan',
    location: 'Thimphu',
    type: 'University',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop&q=80',
    description: 'The premier university of Bhutan, offering comprehensive higher education programs across multiple disciplines.',
    rating: 4.7,
    established: 2003,
    courses: ['Computer Science', 'Business Administration', 'Environmental Science', 'Engineering'],
    fees: {
      min: 80000,
      max: 150000,
      currency: 'BTN'
    },
    tags: ['Public', 'Research', 'Comprehensive'],
    scholarships: ['Government Merit Scholarship', 'Need-based Financial Aid'],
    facilities: ['Library', 'Laboratory', 'Sports Complex', 'Hostel'],
    accreditation: 'Royal Government of Bhutan',
    campusSize: '120 acres',
    studentCount: 15000,
    facultyCount: 800,
    programs: {
      undergraduate: ['Bachelor of Engineering', 'Bachelor of Business Administration', 'Bachelor of Science'],
      postgraduate: ['Master of Engineering', 'Master of Business Administration', 'Master of Science'],
      doctorate: ['PhD in Engineering', 'PhD in Sciences']
    }
  },
  {
    id: '2',
    name: 'College of Science and Technology',
    location: 'Phuentsholing',
    type: 'College',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=400&fit=crop&q=80',
    description: 'Leading engineering and technology college in Bhutan, known for innovation and research excellence.',
    rating: 4.6,
    established: 1974,
    courses: ['Civil Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Information Technology'],
    fees: {
      min: 90000,
      max: 160000,
      currency: 'BTN'
    },
    tags: ['Engineering', 'Technology', 'Research'],
    scholarships: ['Technical Education Scholarship', 'Engineering Excellence Award'],
    facilities: ['Advanced Labs', 'Workshop', 'Computer Center', 'Library'],
    accreditation: 'Royal Government of Bhutan',
    campusSize: '85 acres',
    studentCount: 3500,
    facultyCount: 180,
    programs: {
      undergraduate: ['Bachelor of Engineering in Civil', 'Bachelor of Engineering in Electrical', 'Bachelor of Engineering in Mechanical'],
      postgraduate: ['Master of Engineering', 'Master of Technology'],
      doctorate: []
    }
  },
  {
    id: '3',
    name: 'College of Natural Resources',
    location: 'Lobesa',
    type: 'College',
    image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1deac?w=800&h=400&fit=crop&q=80',
    description: 'Specialized institution focusing on agriculture, forestry, and natural resource management.',
    rating: 4.4,
    established: 1992,
    courses: ['Agriculture', 'Forestry', 'Animal Science', 'Environmental Management'],
    fees: {
      min: 70000,
      max: 120000,
      currency: 'BTN'
    },
    tags: ['Agriculture', 'Environment', 'Research'],
    scholarships: ['Agricultural Development Scholarship', 'Rural Youth Scholarship'],
    facilities: ['Research Farm', 'Greenhouse', 'Animal Farm', 'Forestry Lab'],
    accreditation: 'Royal Government of Bhutan',
    campusSize: '200 acres',
    studentCount: 2800,
    facultyCount: 120,
    programs: {
      undergraduate: ['Bachelor of Agriculture', 'Bachelor of Forestry', 'Bachelor of Animal Science'],
      postgraduate: ['Master of Agriculture', 'Master of Forestry'],
      doctorate: []
    }
  },
  {
    id: '4',
    name: 'Sherubtse College',
    location: 'Kanglung',
    type: 'College',
    image: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=800&h=400&fit=crop&q=80',
    description: 'Premier liberal arts college offering diverse academic programs in humanities and sciences.',
    rating: 4.5,
    established: 1983,
    courses: ['English Literature', 'History', 'Geography', 'Mathematics', 'Physics', 'Chemistry'],
    fees: {
      min: 60000,
      max: 100000,
      currency: 'BTN'
    },
    tags: ['Liberal Arts', 'Humanities', 'Sciences'],
    scholarships: ['Academic Excellence Scholarship', 'Arts and Literature Grant'],
    facilities: ['Library', 'Science Labs', 'Art Studio', 'Auditorium'],
    accreditation: 'Royal Government of Bhutan',
    campusSize: '95 acres',
    studentCount: 4200,
    facultyCount: 200,
    programs: {
      undergraduate: ['Bachelor of Arts', 'Bachelor of Science', 'Bachelor of Commerce'],
      postgraduate: ['Master of Arts', 'Master of Science'],
      doctorate: []
    }
  },
  {
    id: '5',
    name: 'Jigme Namgyel Engineering College',
    location: 'Dewathang',
    type: 'College',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop&q=80',
    description: 'Modern engineering college with state-of-the-art facilities and industry partnerships.',
    rating: 4.3,
    established: 2014,
    courses: ['Electronics & Communication', 'Computer Engineering', 'Civil Engineering', 'Mechanical Engineering'],
    fees: {
      min: 95000,
      max: 170000,
      currency: 'BTN'
    },
    tags: ['Engineering', 'Innovation', 'Modern'],
    scholarships: ['Engineering Innovation Scholarship', 'Industry Partnership Grant'],
    facilities: ['Modern Labs', 'Innovation Center', 'Industry Hub', 'Digital Library'],
    accreditation: 'Royal Government of Bhutan',
    campusSize: '75 acres',
    studentCount: 2500,
    facultyCount: 140,
    programs: {
      undergraduate: ['Bachelor of Engineering in Electronics', 'Bachelor of Engineering in Computer', 'Bachelor of Engineering in Civil'],
      postgraduate: ['Master of Engineering'],
      doctorate: []
    }
  },
  {
    id: '6',
    name: 'Samtse College of Education',
    location: 'Samtse',
    type: 'College',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&q=80',
    description: 'Leading teacher training institute preparing educators for Bhutan\'s educational system.',
    rating: 4.2,
    established: 1968,
    courses: ['Primary Education', 'Secondary Education', 'Educational Psychology', 'Curriculum Development'],
    fees: {
      min: 50000,
      max: 85000,
      currency: 'BTN'
    },
    tags: ['Education', 'Teaching', 'Training'],
    scholarships: ['Teacher Training Scholarship', 'Rural Education Grant'],
    facilities: ['Teaching Practice Schools', 'Education Resource Center', 'Psychology Lab'],
    accreditation: 'Royal Government of Bhutan',
    campusSize: '60 acres',
    studentCount: 1800,
    facultyCount: 95,
    programs: {
      undergraduate: ['Bachelor of Education Primary', 'Bachelor of Education Secondary'],
      postgraduate: ['Master of Education', 'Postgraduate Certificate in Education'],
      doctorate: []
    }
  }
];
