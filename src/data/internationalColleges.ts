export interface InternationalCollege {
  id: string;
  name: string;
  country: string;
  location: string;
  image: string;
  description: string;
  established: number;
  type: "Public" | "Private";
  rating: number;
  programs: {
    undergraduate: string[];
    postgraduate: string[];
    doctorate: string[];
  };
  specializations: string[];
  worldRanking?: number;
  tuitionFees: {
    min: number;
    max: number;
    currency: string;
  };
  livingCosts: {
    min: number;
    max: number;
    currency: string;
  };
  scholarships: Array<{
    name: string;
    amount: string;
    criteria: string;
  }>;
  admissionRequirements: string[];
  languageRequirements: string[];
  contact: {
    email: string;
    website: string;
  };
  recognizedByRGOB: boolean;
  popularPrograms: string[];
  avgDuration: string;
  applicationDeadline: string;
}

export const internationalColleges: InternationalCollege[] = [
  // INDIA
  {
    id: "int_1",
    name: "Indian Institute of Technology (IIT) Delhi",
    country: "India",
    location: "New Delhi, India",
    image: "/lovable-uploads/026022d8-b0d4-44a7-9956-072ccfc3bc3a.png",
    description: "Premier engineering and technology institute in India, recognized for excellence in technical education.",
    established: 1961,
    type: "Public",
    rating: 4.8,
    programs: {
      undergraduate: ["B.Tech in Computer Science", "B.Tech in Electrical Engineering", "B.Tech in Mechanical Engineering", "B.Tech in Civil Engineering"],
      postgraduate: ["M.Tech", "M.Sc", "MBA", "M.Des"],
      doctorate: ["Ph.D in Engineering", "Ph.D in Sciences", "Ph.D in Management"]
    },
    specializations: ["Engineering", "Technology", "Management", "Design", "Sciences"],
    worldRanking: 185,
    tuitionFees: {
      min: 200000,
      max: 250000,
      currency: "INR"
    },
    livingCosts: {
      min: 60000,
      max: 120000,
      currency: "INR"
    },
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Up to 100% tuition fee waiver",
        criteria: "Based on academic merit and family income"
      },
      {
        name: "INSPIRE Scholarship",
        amount: "INR 80,000 per year",
        criteria: "For top 1% students in Class XII"
      }
    ],
    admissionRequirements: [
      "JEE Advanced qualification",
      "Class XII with Physics, Chemistry, Mathematics",
      "Minimum 75% in Class XII (65% for reserved categories)"
    ],
    languageRequirements: ["English proficiency", "IELTS 6.0 or equivalent (for some programs)"],
    contact: {
      email: "admissions@iitd.ac.in",
      website: "https://home.iitd.ac.in/"
    },
    recognizedByRGOB: true,
    popularPrograms: ["Computer Science Engineering", "Electrical Engineering", "Mechanical Engineering"],
    avgDuration: "4 years (B.Tech), 2 years (M.Tech)",
    applicationDeadline: "June 2024"
  },
  {
    id: "int_2",
    name: "All India Institute of Medical Sciences (AIIMS)",
    country: "India",
    location: "New Delhi, India",
    image: "/lovable-uploads/239bcac2-4bdc-47f1-9803-41dfb3900118.png",
    description: "India's premier medical institute, renowned for excellence in medical education and research.",
    established: 1956,
    type: "Public",
    rating: 4.9,
    programs: {
      undergraduate: ["MBBS", "B.Sc Nursing", "B.Sc in Medical Technology"],
      postgraduate: ["MD", "MS", "M.Sc", "DM", "M.Ch"],
      doctorate: ["Ph.D in Medical Sciences"]
    },
    specializations: ["Medicine", "Surgery", "Nursing", "Medical Technology", "Research"],
    worldRanking: 1,
    tuitionFees: {
      min: 5000,
      max: 50000,
      currency: "INR"
    },
    livingCosts: {
      min: 80000,
      max: 150000,
      currency: "INR"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "INR 1000 per month",
        criteria: "Top performers in NEET"
      },
      {
        name: "Financial Assistance",
        amount: "Up to INR 50,000",
        criteria: "Based on family income below INR 5 lakhs"
      }
    ],
    admissionRequirements: [
      "NEET qualification with top ranks",
      "Class XII with Physics, Chemistry, Biology",
      "Minimum 50% in Class XII"
    ],
    languageRequirements: ["English proficiency"],
    contact: {
      email: "deanacad@aiims.edu",
      website: "https://www.aiims.edu/"
    },
    recognizedByRGOB: true,
    popularPrograms: ["MBBS", "MD Internal Medicine", "MS Surgery"],
    avgDuration: "5.5 years (MBBS), 3 years (MD/MS)",
    applicationDeadline: "Based on NEET schedule"
  },
  {
    id: "int_3",
    name: "Delhi University",
    country: "India",
    location: "New Delhi, India",
    image: "/lovable-uploads/2f97789b-e9c7-4492-9f79-65c8d70cb99d.png",
    description: "One of India's largest and most prestigious universities offering diverse academic programs.",
    established: 1922,
    type: "Public",
    rating: 4.3,
    programs: {
      undergraduate: ["B.A.", "B.Sc.", "B.Com", "B.Tech", "BBA"],
      postgraduate: ["M.A.", "M.Sc.", "M.Com", "MBA", "M.Tech"],
      doctorate: ["Ph.D in various disciplines"]
    },
    specializations: ["Arts", "Sciences", "Commerce", "Engineering", "Management", "Law"],
    worldRanking: 521,
    tuitionFees: {
      min: 15000,
      max: 100000,
      currency: "INR"
    },
    livingCosts: {
      min: 70000,
      max: 140000,
      currency: "INR"
    },
    scholarships: [
      {
        name: "Single Girl Child Scholarship",
        amount: "100% fee waiver",
        criteria: "For single girl child families with income below INR 8 lakhs"
      },
      {
        name: "Merit Scholarship",
        amount: "Up to INR 50,000",
        criteria: "Based on Class XII performance"
      }
    ],
    admissionRequirements: [
      "Class XII from recognized board",
      "Minimum 50% aggregate (varies by course)",
      "Entrance exam for specific courses"
    ],
    languageRequirements: ["English proficiency"],
    contact: {
      email: "info@du.ac.in",
      website: "http://www.du.ac.in/"
    },
    recognizedByRGOB: true,
    popularPrograms: ["English Honours", "Economics Honours", "Computer Science"],
    avgDuration: "3 years (UG), 2 years (PG)",
    applicationDeadline: "May-June 2024"
  },

  // AUSTRALIA
  {
    id: "int_4",
    name: "University of Melbourne",
    country: "Australia",
    location: "Melbourne, Australia",
    image: "/lovable-uploads/34f316e6-f47b-4d70-bdb4-af0b3ca5cf38.png",
    description: "Australia's leading university, consistently ranked among the world's top institutions.",
    established: 1853,
    type: "Public",
    rating: 4.7,
    programs: {
      undergraduate: ["Bachelor of Science", "Bachelor of Arts", "Bachelor of Commerce", "Bachelor of Engineering"],
      postgraduate: ["Master of Engineering", "MBA", "Master of Science", "Master of Arts"],
      doctorate: ["Ph.D in various disciplines"]
    },
    specializations: ["Engineering", "Medicine", "Business", "Arts", "Sciences", "Law"],
    worldRanking: 33,
    tuitionFees: {
      min: 45000,
      max: 48000,
      currency: "AUD"
    },
    livingCosts: {
      min: 20000,
      max: 25000,
      currency: "AUD"
    },
    scholarships: [
      {
        name: "Melbourne International Undergraduate Scholarship",
        amount: "Up to AUD 56,000",
        criteria: "Based on academic excellence"
      },
      {
        name: "Graduate Research Scholarship",
        amount: "Full tuition + stipend",
        criteria: "For research degree students"
      }
    ],
    admissionRequirements: [
      "Class XII with minimum 85%",
      "English proficiency test",
      "Subject prerequisites vary by course"
    ],
    languageRequirements: ["IELTS 6.5 overall", "TOEFL 79 minimum", "PTE Academic 58"],
    contact: {
      email: "int-admissions@unimelb.edu.au",
      website: "https://www.unimelb.edu.au/"
    },
    recognizedByRGOB: true,
    popularPrograms: ["Engineering", "Business", "Medicine", "Computer Science"],
    avgDuration: "3-4 years (UG), 1-2 years (PG)",
    applicationDeadline: "October-December 2024"
  },
  {
    id: "int_5",
    name: "Australian National University",
    country: "Australia",
    location: "Canberra, Australia",
    image: "/lovable-uploads/4a97fc19-1607-4935-9f26-3a97596599b5.png",
    description: "Australia's national university, renowned for research and academic excellence.",
    established: 1946,
    type: "Public",
    rating: 4.6,
    programs: {
      undergraduate: ["Bachelor of Philosophy", "Bachelor of Science", "Bachelor of Arts", "Bachelor of Engineering"],
      postgraduate: ["Master degrees in various fields", "MBA"],
      doctorate: ["Ph.D programs"]
    },
    specializations: ["Research", "Sciences", "Engineering", "Arts", "Policy Studies"],
    worldRanking: 30,
    tuitionFees: {
      min: 43000,
      max: 47000,
      currency: "AUD"
    },
    livingCosts: {
      min: 21000,
      max: 26000,
      currency: "AUD"
    },
    scholarships: [
      {
        name: "ANU Excellence Scholarship",
        amount: "Up to AUD 25,000",
        criteria: "Outstanding academic achievement"
      },
      {
        name: "Research Training Program",
        amount: "Full tuition + stipend",
        criteria: "For PhD students"
      }
    ],
    admissionRequirements: [
      "Class XII with excellent grades",
      "English proficiency requirement",
      "Course-specific prerequisites"
    ],
    languageRequirements: ["IELTS 6.5 overall", "TOEFL 80 minimum"],
    contact: {
      email: "student.recruitment@anu.edu.au",
      website: "https://www.anu.edu.au/"
    },
    recognizedByRGOB: true,
    popularPrograms: ["Philosophy", "International Relations", "Computer Science", "Engineering"],
    avgDuration: "3 years (UG), 1-2 years (PG)",
    applicationDeadline: "December 2024"
  },

  // CANADA
  {
    id: "int_6",
    name: "University of Toronto",
    country: "Canada",
    location: "Toronto, Canada",
    image: "/lovable-uploads/4f32198a-128f-4ab6-a8fc-0ee870d58832.png",
    description: "Canada's top university, globally recognized for research and academic excellence.",
    established: 1827,
    type: "Public",
    rating: 4.8,
    programs: {
      undergraduate: ["Bachelor of Science", "Bachelor of Arts", "Bachelor of Engineering", "Bachelor of Commerce"],
      postgraduate: ["Master's programs", "MBA", "Professional degrees"],
      doctorate: ["Ph.D programs in all disciplines"]
    },
    specializations: ["Medicine", "Engineering", "Business", "Arts & Sciences", "Research"],
    worldRanking: 21,
    tuitionFees: {
      min: 58000,
      max: 65000,
      currency: "CAD"
    },
    livingCosts: {
      min: 15000,
      max: 20000,
      currency: "CAD"
    },
    scholarships: [
      {
        name: "Lester B. Pearson International Scholarship",
        amount: "Full tuition + living expenses",
        criteria: "Exceptional academic achievement and leadership"
      },
      {
        name: "University of Toronto Scholar",
        amount: "CAD 7,500",
        criteria: "Outstanding students entering first year"
      }
    ],
    admissionRequirements: [
      "Class XII with minimum 85%",
      "English proficiency test",
      "Subject prerequisites"
    ],
    languageRequirements: ["IELTS 6.5 minimum", "TOEFL 100 minimum"],
    contact: {
      email: "admissions.help@utoronto.ca",
      website: "https://www.utoronto.ca/"
    },
    recognizedByRGOB: true,
    popularPrograms: ["Computer Science", "Engineering", "Business", "Medicine"],
    avgDuration: "4 years (UG), 1-2 years (PG)",
    applicationDeadline: "January 2025"
  },
  {
    id: "int_7",
    name: "University of British Columbia",
    country: "Canada",
    location: "Vancouver, Canada",
    image: "/lovable-uploads/5585d4c4-48c6-4b24-8dbb-75e1882721dd.png",
    description: "One of Canada's top research universities with a beautiful campus and diverse programs.",
    established: 1908,
    type: "Public",
    rating: 4.5,
    programs: {
      undergraduate: ["Bachelor programs in Arts, Science, Engineering, Commerce"],
      postgraduate: ["Master's and Professional programs"],
      doctorate: ["Ph.D in various fields"]
    },
    specializations: ["Engineering", "Business", "Sciences", "Medicine", "Arts"],
    worldRanking: 47,
    tuitionFees: {
      min: 52000,
      max: 58000,
      currency: "CAD"
    },
    livingCosts: {
      min: 16000,
      max: 22000,
      currency: "CAD"
    },
    scholarships: [
      {
        name: "Outstanding International Student Award",
        amount: "Up to CAD 10,000",
        criteria: "Academic excellence for international students"
      },
      {
        name: "International Major Entrance Scholarship",
        amount: "CAD 5,000",
        criteria: "High academic achievement"
      }
    ],
    admissionRequirements: [
      "Class XII with minimum 84%",
      "English language proficiency",
      "Course-specific requirements"
    ],
    languageRequirements: ["IELTS 6.5 overall", "TOEFL 90 minimum"],
    contact: {
      email: "international.admissions@ubc.ca",
      website: "https://www.ubc.ca/"
    },
    recognizedByRGOB: true,
    popularPrograms: ["Engineering", "Computer Science", "Business", "Sciences"],
    avgDuration: "4 years (UG), 1-3 years (PG)",
    applicationDeadline: "January 2025"
  },

  // UNITED KINGDOM
  {
    id: "int_8",
    name: "University of Oxford",
    country: "United Kingdom",
    location: "Oxford, UK",
    image: "/lovable-uploads/57688415-c22e-465c-b8a6-f015f834a4eb.png",
    description: "One of the world's oldest and most prestigious universities, renowned for academic excellence.",
    established: 1096,
    type: "Public",
    rating: 4.9,
    programs: {
      undergraduate: ["BA/BSc in various subjects", "MEng", "MSci"],
      postgraduate: ["Master's programs", "MBA", "BCL/MJur"],
      doctorate: ["DPhil (PhD) programs"]
    },
    specializations: ["Humanities", "Sciences", "Medicine", "Law", "Business"],
    worldRanking: 5,
    tuitionFees: {
      min: 28000,
      max: 46000,
      currency: "GBP"
    },
    livingCosts: {
      min: 14000,
      max: 18000,
      currency: "GBP"
    },
    scholarships: [
      {
        name: "Rhodes Scholarship",
        amount: "Full tuition + living expenses",
        criteria: "Outstanding academic achievement and leadership potential"
      },
      {
        name: "Clarendon Scholarship",
        amount: "Full tuition + grant",
        criteria: "Academic excellence for graduate students"
      }
    ],
    admissionRequirements: [
      "A-levels or equivalent with A*A*A",
      "Admission test for most courses",
      "Interview process"
    ],
    languageRequirements: ["IELTS 7.0 minimum", "TOEFL 100 minimum"],
    contact: {
      email: "undergraduate.admissions@admin.ox.ac.uk",
      website: "https://www.ox.ac.uk/"
    },
    recognizedByRGOB: true,
    popularPrograms: ["PPE", "Medicine", "Law", "Engineering", "Computer Science"],
    avgDuration: "3 years (UG), 1-2 years (PG)",
    applicationDeadline: "October 2024"
  },
  {
    id: "int_9",
    name: "University of Cambridge",
    country: "United Kingdom",
    location: "Cambridge, UK",
    image: "/lovable-uploads/5a7843b7-e744-4b66-b1ca-350f55efed17.png",
    description: "World-renowned university with a rich history of academic excellence and innovation.",
    established: 1209,
    type: "Public",
    rating: 4.9,
    programs: {
      undergraduate: ["BA/BSc in various subjects", "MEng", "MSci"],
      postgraduate: ["Master's programs", "MBA", "LLM"],
      doctorate: ["PhD programs"]
    },
    specializations: ["Sciences", "Engineering", "Humanities", "Medicine", "Business"],
    worldRanking: 3,
    tuitionFees: {
      min: 27000,
      max: 46000,
      currency: "GBP"
    },
    livingCosts: {
      min: 13000,
      max: 17000,
      currency: "GBP"
    },
    scholarships: [
      {
        name: "Gates Cambridge Scholarship",
        amount: "Full cost of study + maintenance",
        criteria: "Outstanding academic ability and leadership potential"
      },
      {
        name: "Cambridge International Scholarship",
        amount: "Full tuition fee",
        criteria: "Academic excellence for international students"
      }
    ],
    admissionRequirements: [
      "A-levels with A*A*A",
      "Admission assessment",
      "Interview"
    ],
    languageRequirements: ["IELTS 7.5 overall", "TOEFL 110 minimum"],
    contact: {
      email: "admissions@cam.ac.uk",
      website: "https://www.cam.ac.uk/"
    },
    recognizedByRGOB: true,
    popularPrograms: ["Natural Sciences", "Engineering", "Medicine", "Computer Science", "Economics"],
    avgDuration: "3 years (UG), 1-2 years (PG)",
    applicationDeadline: "October 2024"
  },

  // UNITED STATES
  {
    id: "int_10",
    name: "Massachusetts Institute of Technology",
    country: "United States",
    location: "Cambridge, MA, USA",
    image: "/lovable-uploads/5bc4af1a-50bd-415e-9501-2080f1d1fe72.png",
    description: "World's leading university in technology, engineering, and innovation.",
    established: 1861,
    type: "Private",
    rating: 4.9,
    programs: {
      undergraduate: ["Bachelor of Science in various engineering and science fields"],
      postgraduate: ["Master's programs", "MBA", "PhD programs"],
      doctorate: ["PhD in all departments"]
    },
    specializations: ["Engineering", "Computer Science", "Physics", "Economics", "Management"],
    worldRanking: 1,
    tuitionFees: {
      min: 55000,
      max: 60000,
      currency: "USD"
    },
    livingCosts: {
      min: 17000,
      max: 22000,
      currency: "USD"
    },
    scholarships: [
      {
        name: "MIT Need-Based Financial Aid",
        amount: "Full tuition for families earning under $90k",
        criteria: "Based on family income and need"
      },
      {
        name: "Presidential Fellowship",
        amount: "Full funding for PhD students",
        criteria: "Outstanding academic achievement"
      }
    ],
    admissionRequirements: [
      "SAT/ACT scores",
      "Excellent Class XII grades",
      "Strong math and science background",
      "Essays and recommendations"
    ],
    languageRequirements: ["TOEFL 90 minimum", "IELTS 7.0 minimum"],
    contact: {
      email: "admissions@mit.edu",
      website: "https://web.mit.edu/"
    },
    recognizedByRGOB: true,
    popularPrograms: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Physics"],
    avgDuration: "4 years (UG), 1-2 years (MS), 4-6 years (PhD)",
    applicationDeadline: "January 2025"
  },

  // SINGAPORE
  {
    id: "int_11",
    name: "National University of Singapore",
    country: "Singapore",
    location: "Singapore",
    image: "/lovable-uploads/6b94c9c8-929a-444c-987f-feb8faac6030.png",
    description: "Asia's leading global university centred in Singapore, with world-class research and education.",
    established: 1905,
    type: "Public",
    rating: 4.6,
    programs: {
      undergraduate: ["Bachelor programs in Engineering, Science, Arts, Business"],
      postgraduate: ["Master's programs", "MBA", "Professional degrees"],
      doctorate: ["PhD programs"]
    },
    specializations: ["Engineering", "Computer Science", "Business", "Medicine", "Law"],
    worldRanking: 11,
    tuitionFees: {
      min: 38000,
      max: 45000,
      currency: "SGD"
    },
    livingCosts: {
      min: 12000,
      max: 18000,
      currency: "SGD"
    },
    scholarships: [
      {
        name: "NUS Global Merit Scholarship",
        amount: "Full tuition + allowance",
        criteria: "Outstanding academic achievement"
      },
      {
        name: "ASEAN Undergraduate Scholarship",
        amount: "Full tuition + allowance",
        criteria: "For ASEAN nationals with excellent academics"
      }
    ],
    admissionRequirements: [
      "Class XII with excellent grades",
      "SAT/A-levels or equivalent",
      "English proficiency"
    ],
    languageRequirements: ["IELTS 6.0 minimum", "TOEFL 85 minimum"],
    contact: {
      email: "nusenquiry@nus.edu.sg",
      website: "https://www.nus.edu.sg/"
    },
    recognizedByRGOB: true,
    popularPrograms: ["Computer Science", "Engineering", "Business", "Medicine"],
    avgDuration: "3-4 years (UG), 1-2 years (PG)",
    applicationDeadline: "March 2025"
  },

  // JAPAN
  {
    id: "int_12",
    name: "University of Tokyo",
    country: "Japan",
    location: "Tokyo, Japan",
    image: "/lovable-uploads/751e9ff9-99d6-455b-879d-fbcb01a4a767.png",
    description: "Japan's most prestigious university, leading in research and academic excellence.",
    established: 1877,
    type: "Public",
    rating: 4.7,
    programs: {
      undergraduate: ["PEAK Programs in English", "Regular programs in Japanese"],
      postgraduate: ["Master's programs", "Professional degrees"],
      doctorate: ["PhD programs"]
    },
    specializations: ["Engineering", "Sciences", "Medicine", "Law", "Economics"],
    worldRanking: 23,
    tuitionFees: {
      min: 535800,
      max: 535800,
      currency: "JPY"
    },
    livingCosts: {
      min: 800000,
      max: 1200000,
      currency: "JPY"
    },
    scholarships: [
      {
        name: "MEXT Scholarship",
        amount: "Full tuition + monthly allowance",
        criteria: "Academic excellence for international students"
      },
      {
        name: "PEAK Scholarship",
        amount: "Partial tuition waiver",
        criteria: "For international students in PEAK programs"
      }
    ],
    admissionRequirements: [
      "Excellent Class XII grades",
      "EJU or SAT scores",
      "English proficiency for PEAK programs"
    ],
    languageRequirements: ["TOEFL 100+ or IELTS 7.0+ for English programs", "Japanese proficiency for regular programs"],
    contact: {
      email: "peak.adm@gs.mail.u-tokyo.ac.jp",
      website: "https://www.u-tokyo.ac.jp/en/"
    },
    recognizedByRGOB: true,
    popularPrograms: ["Engineering", "Computer Science", "Medicine", "Economics"],
    avgDuration: "4 years (UG), 2 years (MS)",
    applicationDeadline: "December 2024"
  }
];

export const getCollegesByCountry = () => {
  const collegesByCountry = internationalColleges.reduce((acc, college) => {
    if (!acc[college.country]) {
      acc[college.country] = [];
    }
    acc[college.country].push(college);
    return acc;
  }, {} as Record<string, InternationalCollege[]>);
  
  return collegesByCountry;
};

export const getCountries = () => {
  return Array.from(new Set(internationalColleges.map(college => college.country))).sort();
};

export const getAllSpecializations = () => {
  const allSpecs = internationalColleges.flatMap(college => college.specializations);
  return Array.from(new Set(allSpecs)).sort();
};