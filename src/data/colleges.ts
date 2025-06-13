import { College } from '@/types/college';

export const governmentScholarships = [
  {
    name: "Government Merit Scholarship",
    duration: "4 years",
    criteria: "Academic excellence with minimum 80% in Class XII",
    coverage: "Full tuition fees and monthly stipend"
  },
  {
    name: "Need-based Financial Aid",
    duration: "Annual",
    criteria: "Family income below BTN 100,000 annually",
    coverage: "Partial tuition fees and accommodation"
  },
  {
    name: "Technical Education Scholarship",
    duration: "4 years",
    criteria: "Engineering and technical courses enrollment",
    coverage: "Full tuition and equipment allowance"
  },
  {
    name: "Rural Development Scholarship",
    duration: "4 years",
    criteria: "Students from rural areas with commitment to serve",
    coverage: "Full education expenses and living allowance"
  },
  {
    name: "Teacher Training Scholarship",
    duration: "3-4 years",
    criteria: "Education course enrollment with teaching commitment",
    coverage: "Full tuition and training materials"
  },
  {
    name: "Healthcare Professional Scholarship",
    duration: "5-6 years",
    criteria: "Medical and nursing program students",
    coverage: "Complete education and clinical training costs"
  }
];

export const colleges: College[] = [
  {
    id: '1',
    name: 'Royal Thimphu College',
    location: 'Ngabiphu, Thimphu',
    type: 'College',
    image: '/lovable-uploads/072154cd-7fda-4258-abda-845af9aab121.png',
    description: 'Premier private college in Bhutan offering comprehensive undergraduate programs in business, nursing, environmental management, and humanities with both regular and continuing education options.',
    rating: 4.7,
    established: 2009,
    courses: ['Business Administration', 'Nursing & Midwifery', 'Environmental Management', 'English Studies', 'Development Economics', 'Social Sciences', 'Anthropology', 'Communication Arts', 'Sports & Health Sciences'],
    fees: {
      min: 170000,
      max: 255000,
      currency: 'BTN'
    },
    tags: ['Private', 'Liberal Arts', 'Management', 'Healthcare'],
    scholarships: [
      { name: 'Academic Excellence Scholarship', amount: 'BTN 150,000/year', criteria: 'Top 10% students with outstanding academic performance' },
      { name: 'Need-based Financial Aid', amount: 'BTN 80,000/year', criteria: 'Students from low-income families with academic merit' }
    ],
    facilities: ['Modern Library', 'Computer Labs', 'Sports Complex', 'Cafeteria', 'Auditorium', 'Nursing Labs', 'Environmental Science Labs'],
    accreditation: 'Royal Government of Bhutan',
    campusSize: '45 acres',
    studentCount: 1800,
    facultyCount: 100,
    programs: {
      undergraduate: [
        'Bachelor of Business Administration (BBA)',
        'Bachelor of Commerce (BCom)',
        'Bachelor of Science in Nursing & Midwifery',
        'Bachelor of Science in Environmental Management',
        'Bachelor of Arts in English Studies',
        'Bachelor of Arts in Development Economics',
        'Bachelor of Arts in Social Sciences',
        'Bachelor of Arts in Anthropology',
        'Bachelor of Arts in Communication Arts & Creative Media',
        'Bachelor of Sports & Health Sciences (BSHS)'
      ],
      postgraduate: ['Master of Business Administration', 'Master of Development Economics'],
      doctorate: []
    },
    admissionDeadline: 'March 31, 2024',
    eligibility: [
      'Class XII completion with minimum 65% aggregate',
      'English proficiency test',
      'Interview and aptitude test',
      'Character certificate from school',
      'Entrance tests apply for Sports & Health Sciences'
    ],
    contact: {
      phone: '+975-2-336000',
      email: 'info@rtc.bt',
      website: 'www.rtc.bt'
    },
    careerOpportunities: [
      'Corporate Management',
      'Healthcare & Nursing',
      'Environmental Consulting',
      'Media & Communications',
      'Banking and Finance',
      'International Business',
      'Sports & Fitness Industry',
      'Entrepreneurship and Startups'
    ],
    applyUrl: 'https://www.rtc.bt/'
  },
  {
    id: '2',
    name: 'Gyalpozhing College of Information Technology',
    location: 'Gyalpozhing, Mongar District',
    type: 'College',
    image: '/lovable-uploads/13fca3a1-74cc-4153-a50c-5ac8864cea0e.png',
    description: 'Modern IT college established as a Centre of Excellence in Information Technology, offering specialized programs in computer science, AI, blockchain, and cybersecurity with a "Learning by Doing" approach.',
    rating: 4.5,
    established: 2017,
    courses: ['Computer Science', 'AI & Data Science', 'Blockchain Development', 'Full-stack Development', 'Interactive Design', 'Information & Communications Technology', 'Cybersecurity'],
    fees: {
      min: 95000,
      max: 98000,
      currency: 'BTN'
    },
    tags: ['Technology', 'IT', 'Innovation', 'Modern'],
    scholarships: [
      { name: 'IT Excellence Scholarship', amount: 'BTN 80,000/year', criteria: 'Outstanding performance in computer science and mathematics' },
      { name: 'Innovation Grant', amount: 'BTN 60,000/year', criteria: 'Students with innovative tech projects and coding skills' }
    ],
    facilities: ['Modern Computer Labs', 'AI Research Center', 'Blockchain Lab', 'Cybersecurity Lab', 'Digital Library', 'Hackathon Spaces', 'Outdoor Recreation Areas'],
    accreditation: 'Royal Government of Bhutan',
    campusSize: '54 acres',
    studentCount: 800,
    facultyCount: 45,
    programs: {
      undergraduate: [
        'Bachelor of Science in Computer Science (AI & Data Science track)',
        'Bachelor of Science in Computer Science (Blockchain Development track)',
        'Bachelor of Science in Computer Science (Full-stack Development track)',
        'Bachelor of Science in Computer Science (Interactive Design & Development track)',
        'Bachelor of Information & Communications Technology (BICT)'
      ],
      postgraduate: [],
      doctorate: []
    },
    admissionDeadline: 'March 15, 2024',
    eligibility: [
      'Class XII with Science/Mathematics background',
      'Strong foundation in Mathematics and logical reasoning',
      'Computer literacy assessment',
      'Interview and programming aptitude test'
    ],
    contact: {
      phone: '+975-4-744227',
      email: 'info.gcit@rub.edu.bt',
      website: 'www.gcit.edu.bt'
    },
    careerOpportunities: [
      'Software Development',
      'AI & Machine Learning Engineering',
      'Blockchain Development',
      'Cybersecurity Specialist',
      'Full-stack Web Development',
      'Data Science & Analytics',
      'IT Consulting',
      'Technology Startups'
    ],
    applyUrl: 'https://www.gcit.edu.bt/'
  },
  {
    id: '3',
    name: 'College of Science and Technology',
    location: 'Rinchending, Phuentsholing',
    type: 'College',
    image: '/lovable-uploads/880d7613-7292-46b9-bb3f-dc61fc9c5193.png',
    description: 'Leading engineering and technology college in Bhutan, known for innovation and research excellence.',
    rating: 4.6,
    established: 2001,
    courses: ['Civil Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Computer Science', 'Information Technology'],
    fees: {
      min: 90000,
      max: 160000,
      currency: 'BTN'
    },
    tags: ['Engineering', 'Technology', 'Research'],
    scholarships: [
      { name: 'Technical Education Scholarship', amount: 'BTN 140,000/year', criteria: 'Engineering and technical courses enrollment' },
      { name: 'Engineering Excellence Award', amount: 'BTN 80,000/year', criteria: 'Top 10% academic performance in engineering' }
    ],
    facilities: ['Advanced Labs', 'Workshop', 'Computer Center', 'Library'],
    accreditation: 'Royal Government of Bhutan',
    campusSize: '85 acres',
    studentCount: 3500,
    facultyCount: 180,
    programs: {
      undergraduate: ['Bachelor of Engineering in Civil', 'Bachelor of Engineering in Electrical', 'Bachelor of Engineering in Mechanical'],
      postgraduate: ['Master of Engineering', 'Master of Technology'],
      doctorate: []
    },
    admissionDeadline: 'April 15, 2024',
    eligibility: [
      'Class XII with Science stream (PCM)',
      'Minimum 70% in Mathematics and Physics',
      'Engineering entrance test qualification',
      'English proficiency requirement'
    ],
    contact: {
      phone: '+975-5-252423',
      email: 'info@cst.edu.bt',
      website: 'www.cst.edu.bt'
    },
    careerOpportunities: [
      'Construction and Infrastructure',
      'IT and Software Development',
      'Manufacturing Industries',
      'Government Technical Services',
      'Consulting Engineering Firms'
    ],
    applyUrl: 'http://www.cst.edu.bt'
  },
  {
    id: '4',
    name: 'College of Natural Resources',
    location: 'Lobesa, Punakha',
    type: 'College',
    image: '/lovable-uploads/ccaa2937-dd94-47e7-bcad-c9bbcee60b88.png',
    description: 'Specialized institution focusing on agriculture, forestry, and natural resource management.',
    rating: 4.4,
    established: 1992,
    courses: ['Agriculture', 'Forestry', 'Animal Science', 'Environmental Science'],
    fees: {
      min: 70000,
      max: 120000,
      currency: 'BTN'
    },
    tags: ['Agriculture', 'Environment', 'Research'],
    scholarships: [
      { name: 'Agricultural Development Scholarship', amount: 'BTN 100,000/year', criteria: 'Rural students pursuing agriculture with service commitment' },
      { name: 'Rural Youth Scholarship', amount: 'BTN 75,000/year', criteria: 'Students from farming families with academic merit' }
    ],
    facilities: ['Research Farm', 'Greenhouse', 'Animal Farm', 'Forestry Lab'],
    accreditation: 'Royal Government of Bhutan',
    campusSize: '200 acres',
    studentCount: 2800,
    facultyCount: 120,
    programs: {
      undergraduate: ['Bachelor of Agriculture', 'Bachelor of Forestry', 'Bachelor of Animal Science'],
      postgraduate: ['Master of Agriculture', 'Master of Forestry'],
      doctorate: []
    },
    admissionDeadline: 'March 20, 2024',
    eligibility: [
      'Class XII completion (any stream)',
      'Interest in agriculture and environment',
      'Physical fitness for field work',
      'Rural background preferred'
    ],
    contact: {
      phone: '+975-2-584075',
      email: 'cnr@rub.edu.bt',
      website: 'www.cnr.edu.bt'
    },
    careerOpportunities: [
      'Ministry of Agriculture',
      'Forestry Department',
      'Agricultural Extension Services',
      'Research Institutes',
      'Agribusiness and Farming'
    ],
    applyUrl: 'http://www.cnr.edu.bt'
  },
  {
    id: '5',
    name: 'Sherubtse College',
    location: 'Kanglung, Trashigang',
    type: 'College',
    image: '/lovable-uploads/239bcac2-4bdc-47f1-9803-41dfb3900118.png',
    description: 'Premier liberal arts college offering diverse academic programs in humanities and sciences.',
    rating: 4.5,
    established: 1966,
    courses: ['English Literature', 'History', 'Geography', 'Project Management', 'Data Science', 'Mathematics'],
    fees: {
      min: 60000,
      max: 100000,
      currency: 'BTN'
    },
    tags: ['Liberal Arts', 'Humanities', 'Sciences'],
    scholarships: [
      { name: 'Academic Excellence Scholarship', amount: 'BTN 85,000/year', criteria: 'Top 5% students in liberal arts and sciences' },
      { name: 'Arts and Literature Grant', amount: 'BTN 50,000/year', criteria: 'Outstanding performance in humanities subjects' }
    ],
    facilities: ['Library', 'Science Labs', 'Art Studio', 'Auditorium'],
    accreditation: 'Royal Government of Bhutan',
    campusSize: '95 acres',
    studentCount: 4200,
    facultyCount: 200,
    programs: {
      undergraduate: ['Bachelor of Arts', 'Bachelor of Science', 'Bachelor of Commerce'],
      postgraduate: ['Master of Arts', 'Master of Science'],
      doctorate: []
    },
    admissionDeadline: 'April 5, 2024',
    eligibility: [
      'Class XII in relevant stream',
      'Minimum 60% aggregate marks',
      'Subject-specific requirements',
      'Interview for some programs'
    ],
    contact: {
      phone: '+975-4-741456',
      email: 'sherubtse@rub.edu.bt',
      website: 'www.sherubtse.edu.bt'
    },
    careerOpportunities: [
      'Teaching and Education',
      'Government Administrative Services',
      'Media and Journalism',
      'Research and Academia',
      'Cultural and Heritage Organizations'
    ],
    applyUrl: 'https://www.sherubtse.edu.bt/'
  },
  {
    id: '6',
    name: 'Jigme Namgyel Engineering College',
    location: 'Dewathang, Samdrup Jongkhar',
    type: 'College',
    image: '/lovable-uploads/5a7843b7-e744-4b66-b1ca-350f55efed17.png',
    description: 'Modern engineering college with state-of-the-art facilities and industry partnerships.',
    rating: 4.3,
    established: 1972,
    courses: ['Electronics & Communication', 'Computer Engineering', 'Civil Engineering', 'Mechanical Engineering'],
    fees: {
      min: 80000,
      max: 140000,
      currency: 'BTN'
    },
    tags: ['Engineering', 'Innovation', 'Modern'],
    scholarships: [
      { name: 'Engineering Innovation Scholarship', amount: 'BTN 150,000/year', criteria: 'Excellence in STEM subjects with innovation projects' },
      { name: 'Industry Partnership Grant', amount: 'BTN 100,000/year', criteria: 'Students with industry internship commitments' }
    ],
    facilities: ['Modern Labs', 'Innovation Center', 'Industry Hub', 'Digital Library'],
    accreditation: 'Royal Government of Bhutan',
    campusSize: '75 acres',
    studentCount: 2500,
    facultyCount: 140,
    programs: {
      undergraduate: ['Bachelor of Engineering in Electronics', 'Bachelor of Engineering in Computer', 'Bachelor of Engineering in Civil'],
      postgraduate: ['Master of Engineering'],
      doctorate: []
    },
    admissionDeadline: 'April 20, 2024',
    eligibility: [
      'Class XII Science with minimum 75%',
      'Strong foundation in Mathematics and Physics',
      'Engineering aptitude test',
      'English language proficiency'
    ],
    contact: {
      phone: '+975-7-365421',
      email: 'jnec@rub.edu.bt',
      website: 'www.jnec.edu.bt'
    },
    careerOpportunities: [
      'Software Development',
      'Electronics and Communication',
      'Construction Engineering',
      'Manufacturing and Design',
      'Technology Startups'
    ],
    applyUrl: 'https://www.jnec.edu.bt/'
  },
  {
    id: '7',
    name: 'Samtse College of Education',
    location: 'Samtse',
    type: 'College',
    image: '/lovable-uploads/e3c09321-8cc8-49d8-9611-48155075d8d1.png',
    description: 'Leading teacher training institute preparing educators for Bhutan\'s educational system.',
    rating: 4.2,
    established: 1968,
    courses: ['Primary Education', 'Secondary Education', 'Educational Psychology', 'Curriculum Development'],
    fees: {
      min: 60000,
      max: 100000,
      currency: 'BTN'
    },
    tags: ['Education', 'Teaching', 'Training'],
    scholarships: [
      { name: 'Teacher Training Scholarship', amount: 'BTN 70,000/year', criteria: 'Education course enrollment with teaching commitment' },
      { name: 'Rural Education Grant', amount: 'BTN 45,000/year', criteria: 'Commitment to teach in rural schools for 5 years' }
    ],
    facilities: ['Teaching Practice Schools', 'Education Resource Center', 'Psychology Lab'],
    accreditation: 'Royal Government of Bhutan',
    campusSize: '60 acres',
    studentCount: 1800,
    facultyCount: 95,
    programs: {
      undergraduate: ['Bachelor of Education Primary', 'Bachelor of Education Secondary'],
      postgraduate: ['Master of Education', 'Postgraduate Certificate in Education'],
      doctorate: []
    },
    admissionDeadline: 'March 15, 2024',
    eligibility: [
      'Class XII completion',
      'Interest in teaching profession',
      'Communication skills assessment',
      'Teaching aptitude test'
    ],
    contact: {
      phone: '+975-5-365123',
      email: 'sce@rub.edu.bt',
      website: 'www.sce.edu.bt'
    },
    careerOpportunities: [
      'Primary School Teaching',
      'Secondary School Teaching',
      'Educational Administration',
      'Curriculum Development',
      'Educational Research'
    ],
    applyUrl: 'http://www.sce.edu.bt/index.php'
  },
  {
    id: '8',
    name: 'Paro College of Education',
    location: 'Paro',
    type: 'College',
    image: '/lovable-uploads/bb671b00-066e-40d9-b057-2f1693a11928.png',
    description: 'Premier teacher training college focusing on secondary education and educational leadership.',
    rating: 4.3,
    established: 1974,
    courses: ['Secondary Education', 'Mathematics Education', 'Science Education', 'Educational Leadership'],
    fees: {
      min: 55000,
      max: 90000,
      currency: 'BTN'
    },
    tags: ['Education', 'Secondary Teaching', 'Leadership'],
    scholarships: [
      { name: 'Secondary Education Scholarship', amount: 'BTN 75,000/year', criteria: 'Excellence in subject specialization' },
      { name: 'Educational Leadership Grant', amount: 'BTN 60,000/year', criteria: 'Leadership potential in education sector' }
    ],
    facilities: ['Science Labs', 'Mathematics Lab', 'Language Lab', 'Teaching Practice Center'],
    accreditation: 'Royal Government of Bhutan',
    campusSize: '55 acres',
    studentCount: 1764,
    facultyCount: 85,
    programs: {
      undergraduate: ['Bachelor of Education Secondary', 'Bachelor of Education Mathematics', 'Bachelor of Education Science'],
      postgraduate: ['Master of Education', 'Educational Leadership Program'],
      doctorate: []
    },
    admissionDeadline: 'March 25, 2024',
    eligibility: [
      'Class XII with relevant subject background',
      'Teaching aptitude assessment',
      'Subject knowledge test',
      'Interview and group discussion'
    ],
    contact: {
      phone: '+975-8-271234',
      email: 'pce@rub.edu.bt',
      website: 'www.pce.edu.bt'
    },
    careerOpportunities: [
      'Secondary School Teaching',
      'Educational Management',
      'Curriculum Development',
      'Teacher Training',
      'Educational Research'
    ],
    applyUrl: 'http://www.pce.edu.bt'
  },
  {
    id: '9',
    name: 'College of Language and Culture Studies',
    location: 'Taktse, Trongsa',
    type: 'College',
    image: '/lovable-uploads/d60ffa49-67ca-4ccf-bc27-4d3e7c9f8e23.png',
    description: 'Specialized institution preserving and promoting Bhutanese language, culture, and traditional arts.',
    rating: 4.1,
    established: 2003,
    courses: ['Dzongkha Studies', 'Buddhist Studies', 'Traditional Arts', 'Linguistics'],
    fees: {
      min: 60000,
      max: 100000,
      currency: 'BTN'
    },
    tags: ['Language', 'Culture', 'Traditional Arts'],
    scholarships: [
      { name: 'Cultural Heritage Scholarship', amount: 'BTN 60,000/year', criteria: 'Excellence in Dzongkha and cultural studies' },
      { name: 'Traditional Arts Grant', amount: 'BTN 45,000/year', criteria: 'Proficiency in traditional Bhutanese arts' }
    ],
    facilities: ['Cultural Museum', 'Traditional Arts Workshop', 'Language Lab', 'Library'],
    accreditation: 'Royal Government of Bhutan',
    campusSize: '40 acres',
    studentCount: 800,
    facultyCount: 45,
    programs: {
      undergraduate: ['Bachelor of Arts in Dzongkha', 'Bachelor of Buddhist Studies', 'Bachelor of Traditional Arts'],
      postgraduate: ['Master of Arts in Dzongkha', 'Master of Buddhist Philosophy'],
      doctorate: []
    },
    admissionDeadline: 'April 1, 2024',
    eligibility: [
      'Class XII completion',
      'Proficiency in Dzongkha language',
      'Interest in Bhutanese culture',
      'Interview and cultural assessment'
    ],
    contact: {
      phone: '+975-6-234567',
      email: 'clcs@rub.edu.bt',
      website: 'www.clcs.edu.bt'
    },
    careerOpportunities: [
      'Cultural Preservation',
      'Translation Services',
      'Tourism and Cultural Guidance',
      'Media and Broadcasting',
      'Government Cultural Affairs'
    ],
    applyUrl: 'http://www.clcs.edu.bt'
  },
  {
    id: '10',
    name: 'Gaeddu College of Business Studies',
    location: 'Gedu, Chukha',
    type: 'College',
    image: '/lovable-uploads/1a0decb5-d9c1-49cd-ba71-692f02a30ef3.png',
    description: 'Leading business education institution offering comprehensive programs in commerce and management.',
    rating: 4.4,
    established: 2001,
    courses: ['Business Administration', 'Accounting', 'Economics', 'Marketing'],
    fees: {
      min: 80000,
      max: 140000,
      currency: 'BTN'
    },
    tags: ['Business', 'Commerce', 'Management'],
    scholarships: [
      { name: 'Business Excellence Scholarship', amount: 'BTN 120,000/year', criteria: 'Outstanding performance in commerce subjects' },
      { name: 'Entrepreneurship Grant', amount: 'BTN 90,000/year', criteria: 'Innovative business ideas and leadership potential' }
    ],
    facilities: ['Business Lab', 'Computer Center', 'Conference Hall', 'Career Center'],
    accreditation: 'Royal Government of Bhutan',
    campusSize: '65 acres',
    studentCount: 2200,
    facultyCount: 110,
    programs: {
      undergraduate: ['Bachelor of Commerce', 'Bachelor of Business Administration', 'Bachelor of Economics'],
      postgraduate: ['Master of Business Administration', 'Master of Commerce'],
      doctorate: []
    },
    admissionDeadline: 'March 28, 2024',
    eligibility: [
      'Class XII completion (Commerce/Arts/Science)',
      'Mathematics requirement for some programs',
      'Entrance test and interview',
      'English proficiency assessment'
    ],
    contact: {
      phone: '+975-5-367890',
      email: 'gcbs@rub.edu.bt',
      website: 'www.gcbs.edu.bt'
    },
    careerOpportunities: [
      'Corporate Management',
      'Banking and Finance',
      'Accounting and Auditing',
      'Marketing and Sales',
      'Entrepreneurship'
    ],
    applyUrl: 'http://www.gcbs.edu.bt'
  },
  {
    id: '11',
    name: 'Institute of Traditional Medicine',
    location: 'Thimphu',
    type: 'Institute',
    image: '/lovable-uploads/ca332d23-53f8-4e12-a921-723fdf365d75.png',
    description: 'Specialized institute for traditional Bhutanese medicine (Sowa Rigpa) and alternative healing practices.',
    rating: 4.0,
    established: 1988,
    courses: ['Traditional Medicine', 'Herbal Medicine', 'Acupuncture', 'Meditation Therapy'],
    fees: {
      min: 60000,
      max: 100000,
      currency: 'BTN'
    },
    tags: ['Traditional Medicine', 'Healthcare', 'Alternative Therapy'],
    scholarships: [
      { name: 'Traditional Medicine Scholarship', amount: 'BTN 80,000/year', criteria: 'Commitment to serve in rural healthcare' },
      { name: 'Sowa Rigpa Excellence Award', amount: 'BTN 55,000/year', criteria: 'Outstanding performance in traditional medicine studies' }
    ],
    facilities: ['Herbal Garden', 'Traditional Medicine Lab', 'Clinic', 'Research Center'],
    accreditation: 'Royal Government of Bhutan',
    campusSize: '25 acres',
    studentCount: 400,
    facultyCount: 30,
    programs: {
      undergraduate: ['Bachelor of Traditional Medicine', 'Diploma in Sowa Rigpa'],
      postgraduate: ['Master of Traditional Medicine'],
      doctorate: []
    },
    admissionDeadline: 'March 10, 2024',
    eligibility: [
      'Class XII with Biology/Science background preferred',
      'Interest in traditional healing practices',
      'Physical and mental fitness assessment',
      'Interview with traditional medicine practitioners'
    ],
    contact: {
      phone: '+975-2-345678',
      email: 'itm@health.gov.bt',
      website: 'www.itm.gov.bt'
    },
    careerOpportunities: [
      'Traditional Medicine Practice',
      'Government Health Services',
      'Research in Alternative Medicine',
      'Community Healthcare',
      'Wellness Centers'
    ],
    applyUrl: 'https://www.moh.gov.bt/'
  }
];
