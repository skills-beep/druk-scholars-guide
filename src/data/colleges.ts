
import { College } from '@/types/college';

export const colleges: College[] = [
  {
    id: '1',
    name: 'Royal University of Bhutan',
    location: 'Thimphu',
    type: 'University',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop',
    rating: 4.8,
    fees: { min: 150000, max: 300000, currency: 'BTN' },
    courses: ['Engineering', 'Business', 'Medicine', 'Arts', 'Science', 'Law', 'Education'],
    tags: ['Top Rated', 'Research Excellence', 'Government University'],
    description: 'The premier university of Bhutan offering world-class education across multiple disciplines with strong research focus and international collaborations.',
    established: 2003,
    admissionDeadline: '2024-03-15',
    eligibility: ['12th Grade Completion', 'Entrance Exam', 'Interview', 'Medical Fitness'],
    contact: {
      phone: '+975-2-323123',
      email: 'admissions@rub.edu.bt',
      website: 'www.rub.edu.bt'
    },
    scholarships: [
      { name: 'Royal Government Scholarship', amount: 'Full tuition + stipend', criteria: 'Top 5% national rank holders' },
      { name: 'Merit Scholarship', amount: '75% tuition fee', criteria: 'Top 10% academic performance' },
      { name: 'Rural Development Scholarship', amount: 'Full coverage', criteria: 'Students from remote areas with teaching commitment' }
    ],
    careerOpportunities: [
      'Civil Engineer - Infrastructure Development',
      'Software Engineer - Digital Bhutan Initiative', 
      'Doctor - Healthcare System',
      'Business Analyst - Tourism Industry',
      'Research Scientist - Environmental Conservation'
    ]
  },
  {
    id: '2',
    name: 'College of Science and Technology',
    location: 'Phuntsholing',
    type: 'College',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
    rating: 4.6,
    fees: { min: 120000, max: 250000, currency: 'BTN' },
    courses: ['Computer Science', 'Information Technology', 'Electronics', 'Mechanical Engineering', 'Civil Engineering'],
    tags: ['Technology Focus', 'Industry Partnerships', 'RUB Constituent'],
    description: 'Leading technology education institution with strong industry connections and modern laboratories for practical learning.',
    established: 2001,
    admissionDeadline: '2024-03-20',
    eligibility: ['12th Grade Science', 'Mathematics Background', 'Aptitude Test', 'English Proficiency'],
    contact: {
      phone: '+975-5-252123',
      email: 'info@cst.edu.bt',
      website: 'www.cst.edu.bt'
    },
    scholarships: [
      { name: 'STEM Excellence Scholarship', amount: 'BTN 100,000 annually', criteria: 'Outstanding performance in STEM subjects' },
      { name: 'Industry Partnership Grant', amount: '50% tuition fee', criteria: 'Internship completion with partner companies' }
    ],
    careerOpportunities: [
      'Software Developer - E-governance Projects',
      'IT Specialist - Banking & Finance',
      'Electronics Engineer - Renewable Energy',
      'Network Administrator - Telecommunications'
    ]
  },
  {
    id: '3',
    name: 'Paro College of Education',
    location: 'Paro',
    type: 'College',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop',
    rating: 4.4,
    fees: { min: 80000, max: 150000, currency: 'BTN' },
    courses: ['Primary Education', 'Secondary Education', 'Special Education', 'Educational Psychology', 'Curriculum Studies'],
    tags: ['Teacher Training', 'Affordable', 'Government Supported'],
    description: 'Dedicated to preparing qualified educators for Bhutan with focus on child-centered learning and inclusive education.',
    established: 1968,
    admissionDeadline: '2024-04-01',
    eligibility: ['12th Grade', 'Teaching Aptitude Test', 'Communication Skills', 'Character Certificate'],
    contact: {
      phone: '+975-8-271123',
      email: 'admissions@pce.edu.bt',
      website: 'www.pce.edu.bt'
    },
    scholarships: [
      { name: 'Teacher Training Scholarship', amount: 'Full tuition + monthly allowance', criteria: '5-year rural teaching commitment' },
      { name: 'Special Education Grant', amount: 'Complete fee waiver', criteria: 'Specialization in special needs education' }
    ],
    careerOpportunities: [
      'School Principal - Educational Leadership',
      'Primary Teacher - Community Schools',
      'Special Education Coordinator - Inclusive Education',
      'Educational Consultant - Ministry of Education'
    ]
  },
  {
    id: '4',
    name: 'Jigme Namgyel Engineering College',
    location: 'Dewathang',
    type: 'College',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
    rating: 4.7,
    fees: { min: 180000, max: 320000, currency: 'BTN' },
    courses: ['Civil Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Architecture', 'Environmental Engineering'],
    tags: ['Engineering Excellence', 'Modern Facilities', 'Research Focus'],
    description: 'Premier engineering institution with state-of-the-art facilities, excellent placement records, and strong industry partnerships.',
    established: 2014,
    admissionDeadline: '2024-02-28',
    eligibility: ['12th Grade Science', 'JEE Qualification', 'English Proficiency', 'Technical Aptitude'],
    contact: {
      phone: '+975-7-365123',
      email: 'admissions@jnec.edu.bt',
      website: 'www.jnec.edu.bt'
    },
    scholarships: [
      { name: 'Engineering Excellence Award', amount: 'BTN 150,000 per year', criteria: 'Top 5% in entrance exam' },
      { name: 'Hydropower Development Scholarship', amount: 'Full sponsorship', criteria: 'Commitment to hydropower sector' }
    ],
    careerOpportunities: [
      'Civil Engineer - Hydroelectric Projects',
      'Electrical Engineer - Power Grid Development',
      'Architect - Sustainable Building Design',
      'Environmental Engineer - Climate Projects'
    ]
  },
  {
    id: '5',
    name: 'College of Natural Resources',
    location: 'Lobesa',
    type: 'College',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
    rating: 4.3,
    fees: { min: 100000, max: 180000, currency: 'BTN' },
    courses: ['Forestry', 'Agriculture', 'Environmental Science', 'Wildlife Biology', 'Animal Husbandry'],
    tags: ['Sustainability Focus', 'Field Research', 'Environmental Excellence'],
    description: 'Specializing in natural resource management, environmental conservation, and sustainable agriculture practices.',
    established: 1992,
    admissionDeadline: '2024-03-25',
    eligibility: ['12th Grade Science', 'Environmental Awareness', 'Physical Fitness', 'Field Work Aptitude'],
    contact: {
      phone: '+975-2-584123',
      email: 'info@cnr.edu.bt',
      website: 'www.cnr.edu.bt'
    },
    scholarships: [
      { name: 'Green Bhutan Scholarship', amount: '60% tuition fee', criteria: 'Environmental conservation project portfolio' },
      { name: 'Agriculture Development Grant', amount: 'Full coverage + equipment', criteria: 'Rural farming background' }
    ],
    careerOpportunities: [
      'Forest Officer - Department of Forests',
      'Agricultural Extension Officer - Rural Development',
      'Environmental Consultant - Conservation Projects',
      'Wildlife Biologist - Protected Area Management'
    ]
  },
  {
    id: '6',
    name: 'Institute of Traditional Medicine',
    location: 'Thimphu',
    type: 'Institute',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop',
    rating: 4.5,
    fees: { min: 90000, max: 160000, currency: 'BTN' },
    courses: ['Traditional Medicine', 'Herbal Studies', 'Acupuncture', 'Holistic Healing', 'Pharmacology'],
    tags: ['Traditional Knowledge', 'Cultural Heritage', 'Healthcare Alternative'],
    description: 'Preserving and advancing traditional Bhutanese medicine with integration of modern medical knowledge and research.',
    established: 1988,
    admissionDeadline: '2024-04-10',
    eligibility: ['12th Grade', 'Interest in Traditional Medicine', 'Cultural Awareness', 'Basic Science Knowledge'],
    contact: {
      phone: '+975-2-323456',
      email: 'admissions@itm.edu.bt',
      website: 'www.itm.edu.bt'
    },
    scholarships: [
      { name: 'Traditional Medicine Preservation Grant', amount: 'BTN 80,000 annually', criteria: 'Research in traditional practices' },
      { name: 'Rural Healthcare Scholarship', amount: 'Full tuition waiver', criteria: '3-year rural service commitment' }
    ],
    careerOpportunities: [
      'Traditional Medicine Practitioner - Indigenous Healing',
      'Herbal Medicine Specialist - Natural Remedies',
      'Wellness Consultant - Holistic Health Centers',
      'Research Associate - Traditional Medicine Studies'
    ]
  },
  {
    id: '7',
    name: 'Samtse College of Education',
    location: 'Samtse',
    type: 'College',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=250&fit=crop',
    rating: 4.2,
    fees: { min: 75000, max: 140000, currency: 'BTN' },
    courses: ['Primary Education', 'Mathematics Education', 'Science Education', 'English Education', 'Dzongkha Education'],
    tags: ['Teacher Training', 'Multilingual Education', 'Cultural Preservation'],
    description: 'Focused on preparing teachers with strong foundation in Bhutanese culture and modern pedagogical methods.',
    established: 2003,
    admissionDeadline: '2024-04-05',
    eligibility: ['12th Grade', 'Language Proficiency', 'Teaching Interest', 'Community Service Experience'],
    contact: {
      phone: '+975-5-365789',
      email: 'info@sce.edu.bt',
      website: 'www.sce.edu.bt'
    },
    scholarships: [
      { name: 'Border Area Teaching Scholarship', amount: 'Full sponsorship', criteria: 'Teaching commitment in border areas' },
      { name: 'Dzongkha Promotion Grant', amount: '80% fee waiver', criteria: 'Excellence in Dzongkha language' }
    ],
    careerOpportunities: [
      'Primary School Teacher - Government Schools',
      'Language Instructor - Cultural Centers',
      'Curriculum Developer - Education Ministry',
      'Educational Supervisor - District Level'
    ]
  },
  {
    id: '8',
    name: 'Sherubtse College',
    location: 'Kanglung',
    type: 'College',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
    rating: 4.6,
    fees: { min: 110000, max: 200000, currency: 'BTN' },
    courses: ['Arts', 'Commerce', 'Science', 'Economics', 'Political Science', 'History', 'Geography'],
    tags: ['Liberal Arts', 'Research Excellence', 'Historic Institution'],
    description: 'Oldest degree-granting institution in Bhutan, known for liberal arts education and research in humanities and social sciences.',
    established: 1983,
    admissionDeadline: '2024-03-30',
    eligibility: ['12th Grade', 'Subject Specific Requirements', 'English Proficiency', 'Interview'],
    contact: {
      phone: '+975-4-441234',
      email: 'admissions@sherubtse.edu.bt',
      website: 'www.sherubtse.edu.bt'
    },
    scholarships: [
      { name: 'Liberal Arts Excellence Award', amount: 'BTN 120,000', criteria: 'Outstanding academic performance in humanities' },
      { name: 'Research Scholarship', amount: '50% tuition + research grant', criteria: 'Research proposal approval' }
    ],
    careerOpportunities: [
      'Civil Servant - Government Ministries',
      'Journalist - National Media',
      'Researcher - Policy Think Tanks',
      'Diplomat - Foreign Service'
    ]
  },
  {
    id: '9',
    name: 'Gaeddu College of Business Studies',
    location: 'Gedu',
    type: 'College',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
    rating: 4.4,
    fees: { min: 130000, max: 220000, currency: 'BTN' },
    courses: ['Business Administration', 'Accounting', 'Finance', 'Marketing', 'International Business', 'Entrepreneurship'],
    tags: ['Business Excellence', 'Industry Connect', 'Entrepreneurship Hub'],
    description: 'Leading business education institution fostering entrepreneurship and preparing future business leaders for Bhutan.',
    established: 2001,
    admissionDeadline: '2024-03-18',
    eligibility: ['12th Grade', 'Mathematics Background', 'Business Aptitude Test', 'English Communication'],
    contact: {
      phone: '+975-8-271456',
      email: 'admissions@gcbs.edu.bt',
      website: 'www.gcbs.edu.bt'
    },
    scholarships: [
      { name: 'Business Leadership Scholarship', amount: 'BTN 100,000 per year', criteria: 'Leadership potential and business acumen' },
      { name: 'Entrepreneurship Grant', amount: 'Seed funding + mentorship', criteria: 'Viable business plan submission' }
    ],
    careerOpportunities: [
      'Business Manager - Tourism Industry',
      'Financial Analyst - Banking Sector',
      'Marketing Executive - Corporate Sector',
      'Entrepreneur - Start-up Ventures'
    ]
  },
  {
    id: '10',
    name: 'Institute of Language and Cultural Studies',
    location: 'Semtokha',
    type: 'Institute',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop',
    rating: 4.3,
    fees: { min: 85000, max: 155000, currency: 'BTN' },
    courses: ['Dzongkha Studies', 'English Literature', 'Tibetan Studies', 'Translation Studies', 'Cultural Research'],
    tags: ['Cultural Heritage', 'Language Studies', 'Research Institute'],
    description: 'Dedicated to preserving and promoting Bhutanese language, literature, and cultural heritage through academic excellence.',
    established: 1961,
    admissionDeadline: '2024-04-15',
    eligibility: ['12th Grade', 'Language Proficiency', 'Cultural Interest', 'Writing Skills Assessment'],
    contact: {
      phone: '+975-2-351234',
      email: 'info@ilcs.edu.bt',
      website: 'www.ilcs.edu.bt'
    },
    scholarships: [
      { name: 'Cultural Preservation Scholarship', amount: '70% tuition waiver', criteria: 'Cultural research project' },
      { name: 'Translation Excellence Grant', amount: 'BTN 90,000', criteria: 'Multilingual proficiency' }
    ],
    careerOpportunities: [
      'Translator - Government Agencies',
      'Cultural Officer - Tourism Ministry',
      'Language Teacher - Educational Institutions',
      'Cultural Researcher - Academic Institutions'
    ]
  },
  {
    id: '11',
    name: 'Norbuling Rigter College',
    location: 'Paro',
    type: 'College',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=250&fit=crop',
    rating: 4.1,
    fees: { min: 95000, max: 170000, currency: 'BTN' },
    courses: ['Buddhist Studies', 'Philosophy', 'Meditation Studies', 'Tibetan Medicine', 'Astrology'],
    tags: ['Buddhist Education', 'Traditional Studies', 'Spiritual Development'],
    description: 'Specialized in Buddhist studies and traditional knowledge systems with emphasis on spiritual and philosophical development.',
    established: 1967,
    admissionDeadline: '2024-04-20',
    eligibility: ['12th Grade', 'Buddhist Background', 'Spiritual Interest', 'Character Reference'],
    contact: {
      phone: '+975-8-272345',
      email: 'admissions@nrc.edu.bt',
      website: 'www.nrc.edu.bt'
    },
    scholarships: [
      { name: 'Dharma Studies Scholarship', amount: 'Full tuition + accommodation', criteria: 'Monastic background or deep spiritual commitment' },
      { name: 'Traditional Knowledge Grant', amount: '60% fee reduction', criteria: 'Research in traditional practices' }
    ],
    careerOpportunities: [
      'Buddhist Teacher - Monastic Institutions',
      'Cultural Guide - Tourist Sites',
      'Meditation Instructor - Wellness Centers',
      'Traditional Healer - Community Health'
    ]
  },
  {
    id: '12',
    name: 'College of Law and Judiciary',
    location: 'Thimphu',
    type: 'College',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop',
    rating: 4.5,
    fees: { min: 140000, max: 280000, currency: 'BTN' },
    courses: ['Law', 'Judiciary Studies', 'Constitutional Law', 'Criminal Law', 'Corporate Law', 'International Law'],
    tags: ['Legal Education', 'Judiciary Training', 'Professional Excellence'],
    description: 'Premier legal education institution preparing lawyers, judges, and legal professionals for Bhutan\'s judicial system.',
    established: 2015,
    admissionDeadline: '2024-02-25',
    eligibility: ['Law Entrance Exam', 'Bachelor\'s Degree', 'English Proficiency', 'Character Certificate'],
    contact: {
      phone: '+975-2-334567',
      email: 'admissions@clj.edu.bt',
      website: 'www.clj.edu.bt'
    },
    scholarships: [
      { name: 'Judicial Service Scholarship', amount: 'Full sponsorship', criteria: '5-year judiciary service commitment' },
      { name: 'Legal Aid Scholarship', amount: '75% tuition waiver', criteria: 'Commitment to public legal service' }
    ],
    careerOpportunities: [
      'Judge - District and High Courts',
      'Lawyer - Private Practice',
      'Legal Officer - Government Ministries',
      'Corporate Counsel - Private Sector'
    ]
  },
  {
    id: '13',
    name: 'Royal Institute of Health Sciences',
    location: 'Thimphu',
    type: 'Institute',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop',
    rating: 4.7,
    fees: { min: 200000, max: 400000, currency: 'BTN' },
    courses: ['Medicine', 'Nursing', 'Pharmacy', 'Public Health', 'Medical Laboratory', 'Physiotherapy'],
    tags: ['Medical Excellence', 'Healthcare Leadership', 'Clinical Training'],
    description: 'Premier medical education institution training healthcare professionals with modern facilities and international standards.',
    established: 2014,
    admissionDeadline: '2024-02-15',
    eligibility: ['Medical Entrance Exam', '12th Grade Science', 'Medical Fitness', 'English Proficiency'],
    contact: {
      phone: '+975-2-345678',
      email: 'admissions@rihs.edu.bt',
      website: 'www.rihs.edu.bt'
    },
    scholarships: [
      { name: 'Government Medical Scholarship', amount: 'Full sponsorship + stipend', criteria: '10-year government service bond' },
      { name: 'Rural Healthcare Scholarship', amount: 'Complete coverage', criteria: '5-year rural posting commitment' },
      { name: 'Specialist Training Grant', amount: 'Advanced study funding', criteria: 'Post-graduation specialization' }
    ],
    careerOpportunities: [
      'Doctor - National Referral Hospital',
      'Specialist Physician - Healthcare System',
      'Public Health Officer - Health Ministry',
      'Medical Researcher - Health Institutes'
    ]
  },
  {
    id: '14',
    name: 'Institute of Information Technology',
    location: 'Thimphu',
    type: 'Institute',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop',
    rating: 4.4,
    fees: { min: 125000, max: 235000, currency: 'BTN' },
    courses: ['Computer Science', 'Software Engineering', 'Data Science', 'Cybersecurity', 'AI & Machine Learning'],
    tags: ['Technology Innovation', 'Digital Bhutan', 'Industry Ready'],
    description: 'Cutting-edge IT education supporting Digital Bhutan initiative with focus on emerging technologies and innovation.',
    established: 2018,
    admissionDeadline: '2024-03-10',
    eligibility: ['12th Grade Science', 'Programming Aptitude', 'Mathematics Proficiency', 'Technical Interview'],
    contact: {
      phone: '+975-2-356789',
      email: 'admissions@iit.edu.bt',
      website: 'www.iit.edu.bt'
    },
    scholarships: [
      { name: 'Digital Bhutan Scholarship', amount: 'BTN 150,000 annually', criteria: 'Excellence in programming and innovation' },
      { name: 'Tech Innovation Grant', amount: 'Project funding + mentorship', criteria: 'Innovative technology project' }
    ],
    careerOpportunities: [
      'Software Developer - Tech Companies',
      'Data Scientist - Government Analytics',
      'Cybersecurity Specialist - National Security',
      'AI Engineer - Innovation Labs'
    ]
  },
  {
    id: '15',
    name: 'Bhutan Media and Communications Institute',
    location: 'Thimphu',
    type: 'Institute',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop',
    rating: 4.2,
    fees: { min: 105000, max: 185000, currency: 'BTN' },
    courses: ['Journalism', 'Mass Communication', 'Digital Media', 'Broadcasting', 'Public Relations', 'Film Studies'],
    tags: ['Media Excellence', 'Digital Content', 'Creative Arts'],
    description: 'Training media professionals for Bhutan\'s growing media landscape with emphasis on responsible journalism and digital innovation.',
    established: 2016,
    admissionDeadline: '2024-03-22',
    eligibility: ['12th Grade', 'Communication Skills', 'Creative Portfolio', 'Language Proficiency'],
    contact: {
      phone: '+975-2-367890',
      email: 'admissions@bmci.edu.bt',
      website: 'www.bmci.edu.bt'
    },
    scholarships: [
      { name: 'Media Development Scholarship', amount: '65% tuition reduction', criteria: 'Outstanding communication skills' },
      { name: 'Rural Journalism Grant', amount: 'Full coverage', criteria: 'Commitment to rural media development' }
    ],
    careerOpportunities: [
      'Journalist - National Broadcasting',
      'Content Creator - Digital Platforms',
      'Public Relations Officer - Government',
      'Documentary Filmmaker - Cultural Media'
    ]
  }
];

// Government scholarships available in Bhutan
export const governmentScholarships = [
  {
    name: 'Royal Government of Bhutan Scholarship',
    amount: 'Full tuition + monthly stipend',
    criteria: 'Top 1% national exam performers',
    duration: 'Complete program duration',
    coverage: 'Tuition, accommodation, stipend, medical'
  },
  {
    name: 'Thimphu TechPark Scholarship',
    amount: 'BTN 200,000 annually',
    criteria: 'STEM excellence with innovation project',
    duration: '4 years',
    coverage: 'Tuition fees and project funding'
  },
  {
    name: 'Rural Development Scholarship',
    amount: 'Full sponsorship',
    criteria: '5-year rural service commitment',
    duration: 'Program duration + 5 years service',
    coverage: 'All educational expenses'
  },
  {
    name: 'Teacher Training Scholarship',
    amount: 'Complete coverage + allowance',
    criteria: 'Teaching commitment in underserved areas',
    duration: 'Study period + 5 years teaching',
    coverage: 'Education costs and living allowance'
  },
  {
    name: 'Healthcare Professional Scholarship',
    amount: 'Full medical education sponsorship',
    criteria: '10-year government hospital service',
    duration: 'Medical program + 10 years service',
    coverage: 'All medical education expenses'
  },
  {
    name: 'Cultural Preservation Grant',
    amount: 'BTN 150,000 per year',
    criteria: 'Research in Bhutanese culture and traditions',
    duration: '3-4 years',
    coverage: 'Research and education costs'
  },
  {
    name: 'Environmental Conservation Scholarship',
    amount: '80% tuition waiver',
    criteria: 'Environmental science with conservation focus',
    duration: 'Program duration',
    coverage: 'Tuition and research expenses'
  },
  {
    name: 'Border Area Development Scholarship',
    amount: 'Full educational support',
    criteria: 'Students from border regions with service commitment',
    duration: 'Education + 3 years border service',
    coverage: 'Complete educational expenses'
  },
  {
    name: 'Women in STEM Scholarship',
    amount: 'BTN 175,000 annually',
    criteria: 'Female students in science and technology',
    duration: '4 years',
    coverage: 'Tuition and research support'
  },
  {
    name: 'Digital Bhutan Initiative Scholarship',
    amount: 'Full tech education sponsorship',
    criteria: 'Excellence in IT with innovation potential',
    duration: 'Program duration + 2 years service',
    coverage: 'All technology education costs'
  }
];

// In-demand jobs data with college mappings
export const inDemandJobs = [
  {
    category: 'Technology & Digital',
    jobs: [
      'Software Engineer - Digital Bhutan Initiative',
      'IT Specialist - E-governance',
      'Data Analyst - Government Analytics',
      'Cybersecurity Specialist - National Security',
      'Web Developer - Tourism Promotion'
    ]
  },
  {
    category: 'Healthcare',
    jobs: [
      'Doctor - Rural Healthcare',
      'Nurse - Community Health',
      'Traditional Medicine Practitioner',
      'Public Health Specialist',
      'Mental Health Counselor'
    ]
  },
  {
    category: 'Engineering & Infrastructure',
    jobs: [
      'Civil Engineer - Hydroelectric Projects',
      'Electrical Engineer - Power Grid',
      'Environmental Engineer - Sustainability',
      'Mechanical Engineer - Manufacturing',
      'Architect - Green Buildings'
    ]
  },
  {
    category: 'Education & Training',
    jobs: [
      'School Teacher - Remote Areas',
      'Vocational Trainer - Skills Development',
      'Educational Administrator',
      'Curriculum Developer',
      'Adult Education Coordinator'
    ]
  },
  {
    category: 'Tourism & Hospitality',
    jobs: [
      'Tour Guide - Cultural Heritage',
      'Hotel Manager - Sustainable Tourism',
      'Tourism Marketing Specialist',
      'Event Coordinator - Festivals',
      'Eco-tourism Developer'
    ]
  },
  {
    category: 'Agriculture & Environment',
    jobs: [
      'Agricultural Extension Officer',
      'Forest Officer - Conservation',
      'Climate Change Specialist',
      'Organic Farming Consultant',
      'Wildlife Conservation Officer'
    ]
  }
];
