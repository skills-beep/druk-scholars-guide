
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
    courses: ['Engineering', 'Business', 'Medicine', 'Arts', 'Science'],
    tags: ['Top Rated', 'Research Excellence'],
    description: 'The premier university of Bhutan offering world-class education across multiple disciplines.',
    established: 2003,
    admissionDeadline: '2024-03-15',
    eligibility: ['12th Grade Completion', 'Entrance Exam', 'Interview'],
    contact: {
      phone: '+975-2-323123',
      email: 'admissions@rub.edu.bt',
      website: 'www.rub.edu.bt'
    },
    scholarships: [
      { name: 'Merit Scholarship', amount: '50% tuition fee', criteria: 'Top 10% academic performance' },
      { name: 'Need-based Aid', amount: 'Up to 75% tuition fee', criteria: 'Family income below BTN 200,000' }
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
    courses: ['Computer Science', 'Information Technology', 'Electronics', 'Mechanical Engineering'],
    tags: ['Technology Focus', 'Industry Partnerships'],
    description: 'Leading technology education institution with strong industry connections.',
    established: 2001,
    admissionDeadline: '2024-03-20',
    eligibility: ['12th Grade Science', 'Mathematics Background', 'Aptitude Test'],
    contact: {
      phone: '+975-5-252123',
      email: 'info@cst.edu.bt',
      website: 'www.cst.edu.bt'
    },
    scholarships: [
      { name: 'Tech Excellence Award', amount: 'BTN 100,000', criteria: 'Outstanding performance in STEM' }
    ],
    careerOpportunities: [
      'Software Developer - E-governance Projects',
      'IT Specialist - Banking & Finance',
      'Electronics Engineer - Renewable Energy',
      'Network Administrator - Telecommunications',
      'Data Analyst - Government Ministries'
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
    courses: ['Primary Education', 'Secondary Education', 'Special Education', 'Educational Psychology'],
    tags: ['Teacher Training', 'Affordable'],
    description: 'Dedicated to preparing the next generation of educators for Bhutan.',
    established: 1968,
    admissionDeadline: '2024-04-01',
    eligibility: ['12th Grade', 'Teaching Aptitude', 'Communication Skills'],
    contact: {
      phone: '+975-8-271123',
      email: 'admissions@pce.edu.bt',
      website: 'www.pce.edu.bt'
    },
    scholarships: [
      { name: 'Future Teachers Grant', amount: 'Full tuition coverage', criteria: 'Commitment to teach in rural areas' }
    ],
    careerOpportunities: [
      'School Principal - Educational Leadership',
      'Primary Teacher - Community Schools',
      'Special Education Coordinator - Inclusive Education',
      'Educational Consultant - Ministry of Education',
      'Curriculum Developer - Educational Resources'
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
    courses: ['Civil Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Architecture'],
    tags: ['Engineering Excellence', 'Modern Facilities'],
    description: 'Premier engineering institution with state-of-the-art facilities and excellent placement records.',
    established: 2014,
    admissionDeadline: '2024-02-28',
    eligibility: ['12th Grade Science', 'JEE Qualification', 'English Proficiency'],
    contact: {
      phone: '+975-7-365123',
      email: 'admissions@jnec.edu.bt',
      website: 'www.jnec.edu.bt'
    },
    scholarships: [
      { name: 'Engineering Excellence Award', amount: 'BTN 150,000 per year', criteria: 'Top 5% in entrance exam' }
    ],
    careerOpportunities: [
      'Civil Engineer - Hydroelectric Projects',
      'Electrical Engineer - Power Grid Development',
      'Architect - Sustainable Building Design',
      'Mechanical Engineer - Manufacturing Industry',
      'Project Manager - Infrastructure Development'
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
    courses: ['Forestry', 'Agriculture', 'Environmental Science', 'Wildlife Biology'],
    tags: ['Sustainability Focus', 'Field Research'],
    description: 'Specializing in natural resource management and environmental conservation.',
    established: 1992,
    admissionDeadline: '2024-03-25',
    eligibility: ['12th Grade Science', 'Interest in Environment', 'Physical Fitness'],
    contact: {
      phone: '+975-2-584123',
      email: 'info@cnr.edu.bt',
      website: 'www.cnr.edu.bt'
    },
    scholarships: [
      { name: 'Green Future Scholarship', amount: '40% tuition fee', criteria: 'Environmental project portfolio' }
    ],
    careerOpportunities: [
      'Forest Officer - Department of Forests',
      'Agricultural Extension Officer - Rural Development',
      'Environmental Consultant - Conservation Projects',
      'Wildlife Biologist - Protected Area Management',
      'Climate Change Specialist - NCHM'
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
    courses: ['Traditional Medicine', 'Herbal Studies', 'Acupuncture', 'Holistic Healing'],
    tags: ['Traditional Knowledge', 'Cultural Heritage'],
    description: 'Preserving and advancing traditional Bhutanese medicine and healing practices.',
    established: 1988,
    admissionDeadline: '2024-04-10',
    eligibility: ['12th Grade', 'Interest in Traditional Medicine', 'Cultural Awareness'],
    contact: {
      phone: '+975-2-323456',
      email: 'admissions@itm.edu.bt',
      website: 'www.itm.edu.bt'
    },
    scholarships: [
      { name: 'Heritage Preservation Grant', amount: 'BTN 80,000', criteria: 'Commitment to traditional practices' }
    ],
    careerOpportunities: [
      'Traditional Medicine Practitioner - Indigenous Healing',
      'Herbal Medicine Specialist - Natural Remedies',
      'Wellness Consultant - Holistic Health Centers',
      'Research Associate - Traditional Medicine Studies',
      'Health Educator - Community Wellness Programs'
    ]
  }
];

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
