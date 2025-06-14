import { College } from '@/types/college';

export const colleges: College[] = [
  {
    id: 'rtc',
    name: 'Royal Thimphu College',
    location: 'Ngabiphu, Thimphu',
    type: 'Private College',
    image: '/lovable-uploads/47ecaad4-ec05-42f4-9c0e-ad608e18b1b0.png',
    description: 'Premier private college in Bhutan offering comprehensive undergraduate programs in business, nursing, environmental management, and humanities with modern facilities and experienced faculty.',
    rating: 4.5,
    established: 2009,
    courses: ['Business Administration', 'Environmental Management', 'Nursing', 'Information Technology', 'English Literature'],
    fees: { min: 120000, max: 180000, currency: 'BTN' },
    tags: ['Private', 'Undergraduate', 'Modern Campus'],
    scholarships: [
      { name: 'Merit Scholarship', amount: '50% tuition fee', criteria: 'Academic excellence with minimum 85% marks' },
      { name: 'Need-based Aid', amount: '25% tuition fee', criteria: 'Financial need assessment and good academic standing' }
    ],
    facilities: ['Modern Library', 'Computer Labs', 'Sports Complex', 'Cafeteria', 'Hostels'],
    accreditation: 'Royal University of Bhutan',
    campusSize: '15 acres',
    studentCount: 1200,
    facultyCount: 65,
    programs: {
      undergraduate: ['BBA', 'BEN', 'BSc Environmental Management', 'BSc Nursing'],
      postgraduate: ['MBA'],
      doctorate: []
    },
    admissionDeadline: 'March 31, 2024',
    eligibility: ['Class 12 completion', 'Minimum 60% marks', 'English proficiency'],
    contact: {
      phone: '+975-2-336000',
      email: 'info@rtc.bt',
      website: 'https://www.rtc.bt/'
    },
    careerOpportunities: ['Business Management', 'Environmental Consulting', 'Healthcare', 'IT Services'],
    applyUrl: 'https://www.rtc.bt/',
    degreePrograms: ['Bachelor of Business Administration', 'Bachelor of Environmental Management', 'Bachelor of Science in Nursing'],
    popularity: 95
  },
  {
    id: 'gcit',
    name: 'Gyalpozhing College of Information Technology',
    location: 'Gyalpozhing, Mongar District',
    type: 'Public College',
    image: '/lovable-uploads/5585d4c4-48c6-4b24-8dbb-75e1882721dd.png',
    description: 'Modern IT college established as a Centre of Excellence in Information Technology, offering specialized programs in computer science, software engineering, and blockchain technology.',
    rating: 4.3,
    established: 2001,
    courses: ['Computer Science', 'Information Technology', 'Software Engineering', 'Electronics', 'Information Systems'],
    fees: { min: 45000, max: 75000, currency: 'BTN' },
    tags: ['Public', 'IT Focused', 'Research'],
    scholarships: [
      { name: 'Government Scholarship', amount: 'Full tuition', criteria: 'Top performers in national exams' },
      { name: 'IT Excellence Award', amount: '75% tuition fee', criteria: 'Outstanding performance in IT subjects' }
    ],
    facilities: ['Advanced Computer Labs', 'Research Centers', 'Library', 'Sports Facilities'],
    accreditation: 'Royal University of Bhutan',
    campusSize: '25 acres',
    studentCount: 800,
    facultyCount: 45,
    programs: {
      undergraduate: ['BSc Computer Science', 'BSc Information Technology', 'BSc Electronics'],
      postgraduate: ['MSc Computer Science'],
      doctorate: []
    },
    admissionDeadline: 'February 28, 2024',
    eligibility: ['Class 12 with Science/Commerce', 'Mathematics and English', 'Entrance examination'],
    contact: {
      phone: '+975-4-744227',
      email: 'info.gcit@rub.edu.bt',
      website: 'http://www.gcit.edu.bt'
    },
    careerOpportunities: ['Software Development', 'IT Consulting', 'System Administration', 'Data Analysis'],
    applyUrl: 'http://www.gcit.edu.bt',
    degreePrograms: ['Bachelor of Science in Computer Science', 'Bachelor of Science in Information Technology'],
    popularity: 88
  },
  {
    id: 'gcbs',
    name: 'Gaeddu College of Business Studies',
    location: 'Gedu, Chukha District',
    type: 'Public College',
    image: '/lovable-uploads/34f316e6-f47b-4d70-bdb4-af0b3ca5cf38.png',
    description: 'Leading business college in Bhutan offering undergraduate and postgraduate programs in business administration, economics, and finance with a focus on ethical leadership and sustainable business practices.',
    rating: 4.2,
    established: 2008,
    courses: ['Business Administration', 'Economics', 'Finance', 'Marketing', 'Human Resources'],
    fees: { min: 50000, max: 80000, currency: 'BTN' },
    tags: ['Public', 'Business', 'Management'],
    scholarships: [
      { name: 'Academic Excellence Scholarship', amount: '60% tuition fee', criteria: 'Top academic performers' },
      { name: 'Bhutan Economic Forum Award', amount: '40% tuition fee', criteria: 'Business plan competition winners' }
    ],
    facilities: ['Business Labs', 'Case Study Library', 'Auditorium', 'Hostels'],
    accreditation: 'Royal University of Bhutan',
    campusSize: '20 acres',
    studentCount: 950,
    facultyCount: 50,
    programs: {
      undergraduate: ['BBA', 'BA Economics', 'BCom'],
      postgraduate: ['MBA'],
      doctorate: []
    },
    admissionDeadline: 'March 15, 2024',
    eligibility: ['Class 12 with Commerce/Arts', 'English and Mathematics', 'Interview'],
    contact: {
      phone: '+975-5-376200',
      email: 'info@gcbs.edu.bt',
      website: 'http://www.gcbs.edu.bt'
    },
    careerOpportunities: ['Banking', 'Finance', 'Management Consulting', 'Entrepreneurship'],
    applyUrl: 'http://www.gcbs.edu.bt',
    degreePrograms: ['Bachelor of Business Administration', 'Bachelor of Arts in Economics'],
    popularity: 82
  },
  {
    id: 'pce',
    name: 'Paro College of Education',
    location: 'Paro',
    type: 'Public College',
    image: '/lovable-uploads/0cc696d9-2745-40a5-9001-6fbb7bff621d.png',
    description: 'Dedicated to excellence in teacher education, offering undergraduate and postgraduate programs with a focus on innovative teaching methodologies and holistic development.',
    rating: 4.0,
    established: 1975,
    courses: ['Primary Education', 'Secondary Education', 'Early Childhood Care', 'Educational Leadership'],
    fees: { min: 35000, max: 60000, currency: 'BTN' },
    tags: ['Public', 'Education', 'Teacher Training'],
    scholarships: [
      { name: 'Teacher Training Scholarship', amount: 'Full tuition', criteria: 'Commitment to teaching in Bhutan' },
      { name: 'Education Leadership Award', amount: '50% tuition fee', criteria: 'Leadership potential in education' }
    ],
    facilities: ['Education Labs', 'Research Library', 'Model Classrooms', 'Hostels'],
    accreditation: 'Royal University of Bhutan',
    campusSize: '30 acres',
    studentCount: 700,
    facultyCount: 40,
    programs: {
      undergraduate: ['BEd Primary', 'BEd Secondary'],
      postgraduate: ['MEd'],
      doctorate: []
    },
    admissionDeadline: 'February 20, 2024',
    eligibility: ['Class 12 with good grades', 'Interest in teaching', 'Interview'],
    contact: {
      phone: '+975-8-271475',
      email: 'info@pce.edu.bt',
      website: 'http://www.pce.edu.bt'
    },
    careerOpportunities: ['Teaching', 'Educational Administration', 'Curriculum Development'],
    applyUrl: 'http://www.pce.edu.bt',
    degreePrograms: ['Bachelor of Education in Primary Education', 'Bachelor of Education in Secondary Education'],
    popularity: 78
  },
  {
    id: 'sce',
    name: 'Samtse College of Education',
    location: 'Samtse',
    type: 'Public College',
    image: '/lovable-uploads/c6d4bf97-c459-451e-89fd-7e79bd965dbd.png',
    description: 'Focuses on preparing educators with a strong foundation in pedagogy and research, offering specialized programs in inclusive education and counseling.',
    rating: 3.9,
    established: 1968,
    courses: ['Inclusive Education', 'Counseling', 'Primary Teaching', 'Secondary Teaching'],
    fees: { min: 30000, max: 55000, currency: 'BTN' },
    tags: ['Public', 'Education', 'Specialized Programs'],
    scholarships: [
      { name: 'Inclusive Education Grant', amount: 'Full tuition', criteria: 'Commitment to inclusive practices' },
      { name: 'Rural Education Support', amount: '60% tuition fee', criteria: 'Serving in rural schools' }
    ],
    facilities: ['Special Education Labs', 'Counseling Center', 'Research Facilities', 'Hostels'],
    accreditation: 'Royal University of Bhutan',
    campusSize: '28 acres',
    studentCount: 650,
    facultyCount: 38,
    programs: {
      undergraduate: ['BEd Inclusive Education', 'BEd Counseling'],
      postgraduate: ['MEd'],
      doctorate: []
    },
    admissionDeadline: 'February 25, 2024',
    eligibility: ['Class 12 with relevant subjects', 'Interest in special education', 'Interview'],
    contact: {
      phone: '+975-17603044',
      email: 'principal@sce.edu.bt',
      website: 'http://www.sce.edu.bt'
    },
    careerOpportunities: ['Special Education Teacher', 'School Counselor', 'Educational Researcher'],
    applyUrl: 'http://www.sce.edu.bt',
    degreePrograms: ['Bachelor of Education in Inclusive Education', 'Bachelor of Education in Counseling'],
    popularity: 75
  },
  {
    id: 'cnr',
    name: 'College of Natural Resources',
    location: 'Lobeysa, Punakha',
    type: 'Public College',
    image: '/lovable-uploads/d0a7bf41-d634-47a7-b02e-9d7edefd7588.png',
    description: 'Focuses on sustainable management of natural resources, offering programs in agriculture, forestry, and environmental science with hands-on field experience.',
    rating: 4.1,
    established: 1992,
    courses: ['Agriculture', 'Forestry', 'Environmental Science', 'Animal Science'],
    fees: { min: 40000, max: 70000, currency: 'BTN' },
    tags: ['Public', 'Agriculture', 'Environment'],
    scholarships: [
      { name: 'Sustainable Agriculture Grant', amount: 'Full tuition', criteria: 'Innovative farming practices' },
      { name: 'Forest Conservation Award', amount: '50% tuition fee', criteria: 'Commitment to forest preservation' }
    ],
    facilities: ['Agriculture Labs', 'Forestry Research Center', 'Environmental Monitoring Stations', 'Hostels'],
    accreditation: 'Royal University of Bhutan',
    campusSize: '35 acres',
    studentCount: 600,
    facultyCount: 35,
    programs: {
      undergraduate: ['BSc Agriculture', 'BSc Forestry', 'BSc Environmental Science'],
      postgraduate: ['MSc Sustainable Development'],
      doctorate: []
    },
    admissionDeadline: 'March 5, 2024',
    eligibility: ['Class 12 with Science', 'Interest in environment', 'Field work aptitude'],
    contact: {
      phone: '+975-2-376252',
      email: 'info@cnr.edu.bt',
      website: 'http://www.cnr.edu.bt'
    },
    careerOpportunities: ['Agricultural Management', 'Forestry Officer', 'Environmental Consultant'],
    applyUrl: 'http://www.cnr.edu.bt',
    degreePrograms: ['Bachelor of Science in Agriculture', 'Bachelor of Science in Forestry'],
    popularity: 80
  },
  {
    id: 'cst',
    name: 'College of Science and Technology',
    location: 'Rinchending, Phuentsholing',
    type: 'Public College',
    image: '/lovable-uploads/983d94f4-00b8-4fc7-87c4-0009a1895655.png',
    description: 'Offers a range of engineering and technology programs, focusing on innovation and practical skills to meet the demands of the modern industry.',
    rating: 4.4,
    established: 2001,
    courses: ['Civil Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Architecture'],
    fees: { min: 55000, max: 90000, currency: 'BTN' },
    tags: ['Public', 'Engineering', 'Technology'],
    scholarships: [
      { name: 'Engineering Excellence Scholarship', amount: 'Full tuition', criteria: 'Top engineering students' },
      { name: 'Innovation Grant', amount: '70% tuition fee', criteria: 'Innovative project proposals' }
    ],
    facilities: ['Engineering Labs', 'Design Studios', 'Technology Workshops', 'Hostels'],
    accreditation: 'Royal University of Bhutan',
    campusSize: '40 acres',
    studentCount: 850,
    facultyCount: 48,
    programs: {
      undergraduate: ['BEng Civil', 'BEng Electrical', 'BEng Mechanical', 'BArch'],
      postgraduate: ['MEng'],
      doctorate: []
    },
    admissionDeadline: 'March 10, 2024',
    eligibility: ['Class 12 with Science and Math', 'Engineering aptitude', 'Entrance exam'],
    contact: {
      phone: '+975-5-252177',
      email: 'info@cst.edu.bt',
      website: 'http://www.cst.edu.bt'
    },
    careerOpportunities: ['Civil Engineer', 'Electrical Engineer', 'Mechanical Engineer', 'Architect'],
    applyUrl: 'http://www.cst.edu.bt',
    degreePrograms: ['Bachelor of Engineering in Civil Engineering', 'Bachelor of Architecture'],
    popularity: 89
  },
  {
    id: 'jnec',
    name: 'Jigme Namgyel Engineering College',
    location: 'Dewathang, Samdrup Jongkhar',
    type: 'Public College',
    image: '/lovable-uploads/35430063-ea9a-4dd1-be56-49dc4dafabdc.png',
    description: 'Provides specialized engineering education with a focus on practical skills and innovation, preparing graduates for leadership roles in technology and infrastructure development.',
    rating: 4.2,
    established: 1974,
    courses: ['Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Surveying'],
    fees: { min: 50000, max: 85000, currency: 'BTN' },
    tags: ['Public', 'Engineering', 'Technical'],
    scholarships: [
      { name: 'Technical Skills Scholarship', amount: 'Full tuition', criteria: 'Excellence in technical subjects' },
      { name: 'Infrastructure Development Grant', amount: '65% tuition fee', criteria: 'Projects related to infrastructure' }
    ],
    facilities: ['Engineering Workshops', 'Surveying Labs', 'CAD Studios', 'Hostels'],
    accreditation: 'Royal University of Bhutan',
    campusSize: '45 acres',
    studentCount: 750,
    facultyCount: 42,
    programs: {
      undergraduate: ['BEng Electrical', 'BEng Mechanical', 'BEng Civil'],
      postgraduate: ['MEng'],
      doctorate: []
    },
    admissionDeadline: 'March 20, 2024',
    eligibility: ['Class 12 with Science and Math', 'Technical aptitude', 'Entrance exam'],
    contact: {
      phone: '+975-7-260301',
      email: 'info@jnec.edu.bt',
      website: 'https://www.jnec.edu.bt/'
    },
    careerOpportunities: ['Electrical Engineer', 'Mechanical Engineer', 'Civil Engineer', 'Surveyor'],
    applyUrl: 'https://www.jnec.edu.bt/',
    degreePrograms: ['Bachelor of Engineering in Electrical Engineering', 'Bachelor of Engineering in Civil Engineering'],
    popularity: 85
  },
  {
    id: 'clcs',
    name: 'College of Language and Culture Studies',
    location: 'Taktse, Trongsa',
    type: 'Public College',
    image: '/lovable-uploads/e12278e2-b3ab-4795-ab82-e91a54ec4a43.png',
    description: 'Dedicated to preserving and promoting Bhutanese language, culture, and traditions through comprehensive academic programs and research.',
    rating: 4.3,
    established: 1961,
    courses: ['Dzongkha', 'Bhutanese Culture', 'History', 'Tourism'],
    fees: { min: 38000, max: 65000, currency: 'BTN' },
    tags: ['Public', 'Culture', 'Language'],
    scholarships: [
      { name: 'Cultural Preservation Scholarship', amount: 'Full tuition', criteria: 'Commitment to cultural heritage' },
      { name: 'Language Proficiency Award', amount: '60% tuition fee', criteria: 'Excellence in Dzongkha' }
    ],
    facilities: ['Cultural Research Center', 'Language Labs', 'Museum', 'Hostels'],
    accreditation: 'Royal University of Bhutan',
    campusSize: '50 acres',
    studentCount: 550,
    facultyCount: 32,
    programs: {
      undergraduate: ['BA Dzongkha', 'BA Culture Studies'],
      postgraduate: ['MA Culture Studies'],
      doctorate: []
    },
    admissionDeadline: 'February 15, 2024',
    eligibility: ['Class 12 with good grades', 'Interest in culture', 'Language proficiency'],
    contact: {
      phone: '+975-3-471240',
      email: 'info@clcs.edu.bt',
      website: 'http://www.clcs.edu.bt'
    },
    careerOpportunities: ['Cultural Officer', 'Historian', 'Tourism Expert', 'Linguist'],
    applyUrl: 'http://www.clcs.edu.bt',
    degreePrograms: ['Bachelor of Arts in Dzongkha', 'Bachelor of Arts in Culture Studies'],
    popularity: 79
  },
  {
    id: 'sherubtse',
    name: 'Sherubtse College',
    location: 'Kanglung, Trashigang',
    type: 'Public College',
    image: '/lovable-uploads/dd3c52f7-0bcb-40de-8091-6ac7fabc46b6.png',
    description: 'The oldest college in Bhutan, offering a wide range of programs in science, humanities, and social sciences, fostering critical thinking and academic excellence.',
    rating: 4.6,
    established: 1966,
    courses: ['Physics', 'Chemistry', 'Mathematics', 'Economics', 'Political Science'],
    fees: { min: 42000, max: 75000, currency: 'BTN' },
    tags: ['Public', 'Science', 'Humanities'],
    scholarships: [
      { name: 'Academic Merit Scholarship', amount: 'Full tuition', criteria: 'Top academic performers' },
      { name: 'Science Research Grant', amount: '60% tuition fee', criteria: 'Innovative research proposals' }
    ],
    facilities: ['Science Labs', 'Research Library', 'Social Science Data Center', 'Hostels'],
    accreditation: 'Royal University of Bhutan',
    campusSize: '60 acres',
    studentCount: 900,
    facultyCount: 52,
    programs: {
      undergraduate: ['BSc Physics', 'BSc Chemistry', 'BA Economics', 'BA Political Science'],
      postgraduate: ['MSc Environmental Science'],
      doctorate: []
    },
    admissionDeadline: 'February 28, 2024',
    eligibility: ['Class 12 with relevant subjects', 'Academic excellence', 'Entrance exam'],
    contact: {
      phone: '+975-4-535203',
      email: 'info@sherubtse.edu.bt',
      website: 'https://www.sherubtse.edu.bt/'
    },
    careerOpportunities: ['Scientist', 'Economist', 'Political Analyst', 'Researcher'],
    applyUrl: 'https://www.sherubtse.edu.bt/',
    degreePrograms: ['Bachelor of Science in Physics', 'Bachelor of Arts in Economics'],
    popularity: 92
  },
  {
    id: 'itm',
    name: 'Institute of Traditional Medicine',
    location: 'Thimphu',
    type: 'Public College',
    image: '/lovable-uploads/0c691c67-b90d-496c-9969-56075593069b.png',
    description: 'Offers specialized programs in traditional Bhutanese medicine, focusing on herbal remedies, acupuncture, and holistic healthcare practices.',
    rating: 4.0,
    established: 1979,
    courses: ['Traditional Medicine', 'Herbal Medicine', 'Acupuncture', 'Holistic Healthcare'],
    fees: { min: 35000, max: 60000, currency: 'BTN' },
    tags: ['Public', 'Medicine', 'Traditional'],
    scholarships: [
      { name: 'Traditional Medicine Scholarship', amount: 'Full tuition', criteria: 'Commitment to traditional practices' },
      { name: 'Herbal Research Grant', amount: '55% tuition fee', criteria: 'Innovative research in herbal medicine' }
    ],
    facilities: ['Herbal Garden', 'Acupuncture Clinic', 'Traditional Medicine Labs', 'Hostels'],
    accreditation: 'Ministry of Health, Bhutan',
    campusSize: '20 acres',
    studentCount: 400,
    facultyCount: 25,
    programs: {
      undergraduate: ['Diploma in Traditional Medicine'],
      postgraduate: [],
      doctorate: []
    },
    admissionDeadline: 'January 30, 2024',
    eligibility: ['Class 12 with Science/Arts', 'Interest in medicine', 'Interview'],
    contact: {
      phone: '+975-2-322657',
      email: 'info@itm.gov.bt',
      website: 'https://www.moh.gov.bt/'
    },
    careerOpportunities: ['Traditional Medicine Practitioner', 'Herbal Medicine Specialist', 'Acupuncturist'],
    applyUrl: 'https://www.moh.gov.bt/',
    degreePrograms: ['Diploma in Traditional Medicine'],
    popularity: 70
  }
];

export const governmentScholarships = [
  {
    name: "Royal Government of Bhutan Scholarship",
    provider: "Department of Adult and Higher Education (DAHE)",
    coverage: "Full tuition fees, accommodation, and monthly stipend for undergraduate studies in Bhutan and abroad",
    criteria: "Academic excellence (minimum 75% in Class 12), Bhutanese citizenship, financial need assessment",
    duration: "Full degree duration (3-4 years)",
    deadline: "June 30, 2024",
    applicationProcess: "Apply through DAHE portal with academic transcripts, recommendation letters, and personal statement",
    contact: {
      phone: "+975-2-323762",
      email: "dahe@education.gov.bt",
      website: "https://www.education.gov.bt/"
    }
  },
  {
    name: "Loden Foundation Academic Excellence Scholarship",
    provider: "Loden Foundation",
    coverage: "Full tuition fees and living allowance for outstanding students pursuing higher education",
    criteria: "Exceptional academic performance (top 10% of class), leadership qualities, community service",
    duration: "Full degree duration",
    deadline: "March 31, 2024",
    applicationProcess: "Online application through Loden Foundation website with essays, transcripts, and interviews",
    contact: {
      phone: "+975-2-336922",
      email: "scholarships@loden.org",
      website: "https://www.loden.org/"
    }
  },
  {
    name: "Loden Foundation Need-Based Scholarship",
    provider: "Loden Foundation",
    coverage: "Partial to full tuition support based on financial need and academic merit",
    criteria: "Financial hardship documentation, good academic standing (minimum 65%), Bhutanese citizenship",
    duration: "Annual renewal based on performance",
    deadline: "April 15, 2024",
    applicationProcess: "Submit financial documentation, academic records, and personal statement through Loden portal",
    contact: {
      phone: "+975-2-336922",
      email: "scholarships@loden.org",
      website: "https://www.loden.org/"
    }
  },
  {
    name: "Technical and Vocational Education Scholarship",
    provider: "Royal Government of Bhutan - Ministry of Education",
    coverage: "Full tuition and training costs for technical and vocational programs",
    criteria: "Class 12 completion, interest in technical fields, aptitude test performance",
    duration: "1-3 years depending on program",
    deadline: "May 15, 2024",
    applicationProcess: "Apply through designated technical institutes with aptitude test and interview",
    contact: {
      phone: "+975-2-323762",
      email: "tvet@education.gov.bt",
      website: "https://www.education.gov.bt/"
    }
  }
];
