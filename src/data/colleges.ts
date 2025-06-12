import { College } from '@/types/college';

export const colleges: College[] = [
  {
    id: '1',
    name: 'Royal University of Bhutan',
    location: 'Thimphu',
    established: 2003,
    type: 'Public University',
    rating: 4.8,
    image: 'https://www.rub.edu.bt/images/gallery/campus1.jpg',
    description: 'The Royal University of Bhutan is the national university system of Bhutan, established to provide quality higher education and foster research and innovation.',
    courses: [
      'Bachelor of Engineering',
      'Bachelor of Science',
      'Master of Business Administration',
      'Master of Arts',
      'Bachelor of Medicine',
      'Bachelor of Education',
      'Bachelor of Arts',
      'Diploma in Engineering'
    ],
    fees: {
      min: 25000,
      max: 85000,
      currency: 'BTN'
    },
    tags: ['Public', 'Research University', 'Engineering'],
    scholarships: [
      {
        name: 'RUB Merit Scholarship',
        amount: 'Full Tuition',
        criteria: 'Academic excellence and financial need'
      },
      {
        name: 'Research Excellence Grant',
        amount: 'BTN 50,000',
        criteria: 'Outstanding research proposal'
      }
    ],
    admissionDeadline: 'June 30, 2024',
    eligibility: [
      'Class XII completion with minimum 60% marks',
      'Entrance examination or merit-based selection',
      'Medical fitness certificate',
      'Character certificate from previous institution'
    ],
    careerOpportunities: [
      'Government Civil Service',
      'Engineering Consultant',
      'Research Scientist',
      'Healthcare Professional',
      'Education Sector',
      'Private Industry'
    ],
    contact: {
      phone: '+975-2-336-209',
      email: 'info@rub.edu.bt',
      website: 'www.rub.edu.bt'
    }
  },
  {
    id: '2',
    name: 'College of Science and Technology',
    location: 'Rinchending, Phuentsholing',
    established: 2001,
    type: 'Engineering College',
    rating: 4.7,
    image: 'https://www.cst.edu.bt/images/campus/main-building.jpg',
    description: 'Premier engineering institution under RUB, offering cutting-edge programs in science and technology.',
    courses: [
      'Civil Engineering',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Electronics & Communication',
      'Computer Science Engineering',
      'Information Technology',
      'Environmental Engineering'
    ],
    fees: {
      min: 35000,
      max: 75000,
      currency: 'BTN'
    },
    tags: ['Engineering', 'Technology', 'STEM'],
    scholarships: [
      {
        name: 'CST Engineering Scholarship',
        amount: 'BTN 40,000',
        criteria: 'Top 10% in entrance examination'
      }
    ],
    admissionDeadline: 'July 15, 2024',
    eligibility: [
      'Class XII Science with minimum 65% marks',
      'Mathematics and Physics mandatory',
      'Entrance examination required'
    ],
    careerOpportunities: [
      'Software Engineer',
      'Civil Engineer',
      'Electrical Engineer',
      'Project Manager',
      'Technical Consultant'
    ],
    contact: {
      phone: '+975-5-252-423',
      email: 'info@cst.edu.bt',
      website: 'www.cst.edu.bt'
    }
  },
  {
    id: '3',
    name: 'College of Natural Resources',
    location: 'Lobesa, Punakha',
    established: 2001,
    type: 'Agricultural College',
    rating: 4.6,
    image: 'https://www.cnr.edu.bt/images/campus-view.jpg',
    description: 'Leading institution for natural resources, agriculture, and environmental studies in Bhutan.',
    courses: [
      'Bachelor of Science in Agriculture',
      'Forestry Science',
      'Animal Science',
      'Environmental Management',
      'Horticulture',
      'Agricultural Engineering',
      'Food Technology'
    ],
    fees: {
      min: 20000,
      max: 55000,
      currency: 'BTN'
    },
    tags: ['Agriculture', 'Environment', 'Sustainability'],
    scholarships: [
      {
        name: 'Sustainable Agriculture Scholarship',
        amount: 'BTN 30,000',
        criteria: 'Rural background students with good academics'
      }
    ],
    admissionDeadline: 'June 25, 2024',
    eligibility: [
      'Class XII with minimum 55% marks',
      'Science background preferred',
      'Interest in agriculture and environment'
    ],
    careerOpportunities: [
      'Agricultural Officer',
      'Forest Officer',
      'Environmental Consultant',
      'Research Scientist',
      'Extension Officer'
    ],
    contact: {
      phone: '+975-2-584-207',
      email: 'info@cnr.edu.bt',
      website: 'www.cnr.edu.bt'
    }
  },
  {
    id: '4',
    name: 'Sherubtse College',
    location: 'Kanglung, Trashigang',
    established: 1983,
    type: 'Liberal Arts College',
    rating: 4.5,
    image: 'https://www.sherubtse.edu.bt/images/college-campus.jpg',
    description: 'Oldest and most prestigious degree-granting institution in Bhutan, known for liberal arts education.',
    courses: [
      'Bachelor of Arts',
      'Bachelor of Science',
      'Bachelor of Commerce',
      'English Literature',
      'Economics',
      'Political Science',
      'Mathematics',
      'Physics',
      'Chemistry',
      'Biology'
    ],
    fees: {
      min: 18000,
      max: 45000,
      currency: 'BTN'
    },
    tags: ['Liberal Arts', 'Historic', 'Research'],
    scholarships: [
      {
        name: 'Sherubtse Excellence Award',
        amount: 'BTN 25,000',
        criteria: 'Academic merit and leadership qualities'
      }
    ],
    admissionDeadline: 'July 10, 2024',
    eligibility: [
      'Class XII completion with minimum 50% marks',
      'English proficiency required',
      'Personal interview may be conducted'
    ],
    careerOpportunities: [
      'Civil Service',
      'Teaching Profession',
      'Banking & Finance',
      'Media & Journalism',
      'Research & Academia'
    ],
    contact: {
      phone: '+975-4-541-247',
      email: 'info@sherubtse.edu.bt',
      website: 'www.sherubtse.edu.bt'
    }
  },
  {
    id: '5',
    name: 'Jigme Namgyel Engineering College',
    location: 'Dewathang, Samdrup Jongkhar',
    established: 2014,
    type: 'Engineering College',
    rating: 4.4,
    image: 'https://www.jnec.edu.bt/images/main-campus.jpg',
    description: 'Modern engineering college focusing on sustainable technology and innovation.',
    courses: [
      'Civil Engineering',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Electronics Engineering',
      'Computer Engineering',
      'Architecture'
    ],
    fees: {
      min: 40000,
      max: 80000,
      currency: 'BTN'
    },
    tags: ['Engineering', 'Innovation', 'Modern'],
    scholarships: [
      {
        name: 'JNEC Innovation Scholarship',
        amount: 'BTN 35,000',
        criteria: 'Innovation projects and academic performance'
      }
    ],
    admissionDeadline: 'July 20, 2024',
    eligibility: [
      'Class XII Science with minimum 70% marks',
      'Strong foundation in Mathematics and Physics',
      'Aptitude test required'
    ],
    careerOpportunities: [
      'Design Engineer',
      'Project Engineer',
      'Technical Consultant',
      'R&D Engineer',
      'Construction Manager'
    ],
    contact: {
      phone: '+975-7-365-142',
      email: 'info@jnec.edu.bt',
      website: 'www.jnec.edu.bt'
    }
  },
  {
    id: '6',
    name: 'Paro College of Education',
    location: 'Paro',
    established: 2003,
    type: 'Education College',
    rating: 4.3,
    image: 'https://www.pce.edu.bt/images/college-building.jpg',
    description: 'Premier teacher training institution preparing educators for Bhutan\'s education system.',
    courses: [
      'Bachelor of Education (Primary)',
      'Bachelor of Education (Secondary)',
      'Post Graduate Diploma in Education',
      'Master of Education',
      'Special Education',
      'Early Childhood Education'
    ],
    fees: {
      min: 15000,
      max: 40000,
      currency: 'BTN'
    },
    tags: ['Education', 'Teacher Training', 'Pedagogy'],
    scholarships: [
      {
        name: 'Future Teachers Scholarship',
        amount: 'BTN 20,000',
        criteria: 'Commitment to rural teaching for 3 years'
      }
    ],
    admissionDeadline: 'June 15, 2024',
    eligibility: [
      'Class XII with minimum 55% marks',
      'Teaching aptitude and communication skills',
      'Interview and group discussion'
    ],
    careerOpportunities: [
      'Primary School Teacher',
      'Secondary School Teacher',
      'Educational Administrator',
      'Curriculum Developer',
      'Educational Consultant'
    ],
    contact: {
      phone: '+975-8-271-456',
      email: 'info@pce.edu.bt',
      website: 'www.pce.edu.bt'
    }
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
    name: 'His Majesty\'s Scholarship',
    duration: '4 years',
    coverage: 'Full tuition, accommodation, and stipend',
    criteria: 'Outstanding academic performance and leadership potential'
  },
  {
    name: 'Merit-based Scholarship',
    duration: '4 years',
    coverage: 'Tuition fees and partial living expenses',
    criteria: 'Top 5% of Class XII graduates'
  },
  {
    name: 'Need-based Financial Aid',
    duration: 'As required',
    coverage: 'Partial to full tuition based on family income',
    criteria: 'Annual family income below BTN 100,000'
  },
  {
    name: 'Rural Development Scholarship',
    duration: '4 years',
    coverage: 'Full tuition with service commitment',
    criteria: 'Students from remote areas committed to rural service'
  },
  {
    name: 'STEM Excellence Award',
    duration: '4 years',
    coverage: 'Full tuition and research funding',
    criteria: 'Excellence in Science, Technology, Engineering, or Mathematics'
  },
  {
    name: 'Women in STEM Scholarship',
    duration: '4 years',
    coverage: 'Full tuition and mentorship program',
    criteria: 'Female students pursuing STEM fields'
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
