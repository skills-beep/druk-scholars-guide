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
    image: "/lovable-uploads/ca49cf1d-6768-48fa-babc-3778677e69fa.png",
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
    image: "/lovable-uploads/5acb5c86-f6b7-4e9e-9283-1f3f9e5afe26.png",
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
    image: "/lovable-uploads/d755c64d-e99e-4a0d-ae88-46aeb6fdfc9e.png",
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
    image: "/lovable-uploads/205529c7-8a8d-4b2a-9eeb-b2b1471b1c02.png",
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
    image: "/lovable-uploads/e1ddb59f-b2d6-4380-a57e-9863609cc414.png",
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
    image: "/lovable-uploads/16091366-c259-4d04-b76b-e9972b3ace5f.png",
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
    image: "/lovable-uploads/c1875548-30c5-4d18-8d37-9eb5e4cf6681.png",
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
    image: "/lovable-uploads/e81dfb57-21af-480f-966e-bf4a626320fc.png",
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
    image: "/lovable-uploads/cd391772-4ff1-4ebf-a134-eae719959da6.png",
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
    image: "/lovable-uploads/cf7fa8fe-1347-44cc-ad3b-7a69ca98f74b.png",
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
  },

  // THAILAND (Bangkok)
  {
    id: "int_13",
    name: "Chulalongkorn University",
    country: "Thailand",
    location: "Bangkok, Thailand",
    image: "/lovable-uploads/7f89786e-7fc4-41b5-9258-b5723443e7b6.png",
    description: "Thailand's most prestigious university, offering world-class education with strong international programs.",
    established: 1917,
    type: "Public",
    rating: 4.4,
    programs: {
      undergraduate: ["Bachelor in Engineering", "Bachelor in Business", "Bachelor in Medicine", "Bachelor in Arts"],
      postgraduate: ["Master's programs", "MBA", "International programs"],
      doctorate: ["PhD programs"]
    },
    specializations: ["Engineering", "Medicine", "Business", "International Studies", "Sciences"],
    worldRanking: 208,
    tuitionFees: {
      min: 150000,
      max: 350000,
      currency: "THB"
    },
    livingCosts: {
      min: 300000,
      max: 500000,
      currency: "THB"
    },
    scholarships: [
      {
        name: "Royal Golden Jubilee Scholarship",
        amount: "Full tuition + stipend",
        criteria: "Academic excellence for international students"
      },
      {
        name: "CU International Scholarship",
        amount: "Up to 50% tuition waiver",
        criteria: "Merit-based for international students"
      }
    ],
    admissionRequirements: [
      "Class XII with good grades",
      "English proficiency test",
      "Program-specific requirements"
    ],
    languageRequirements: ["IELTS 6.0 minimum", "TOEFL 79 minimum"],
    contact: {
      email: "international@chula.ac.th",
      website: "https://www.chula.ac.th/en/"
    },
    recognizedByRGOB: true,
    popularPrograms: ["International Engineering", "International Business", "Medicine"],
    avgDuration: "4 years (UG), 2 years (PG)",
    applicationDeadline: "April 2025"
  },
  {
    id: "int_14",
    name: "Mahidol University",
    country: "Thailand",
    location: "Bangkok, Thailand",
    image: "/lovable-uploads/84ba2fd5-e993-40a1-82ea-58176e5ee3f2.png",
    description: "Leading medical and health sciences university in Thailand with strong international recognition.",
    established: 1888,
    type: "Public",
    rating: 4.3,
    programs: {
      undergraduate: ["Medicine", "Health Sciences", "Engineering", "International Studies"],
      postgraduate: ["Medical specializations", "Health Sciences", "International programs"],
      doctorate: ["PhD in Medical Sciences"]
    },
    specializations: ["Medicine", "Health Sciences", "Pharmacy", "Engineering", "International Studies"],
    worldRanking: 255,
    tuitionFees: {
      min: 200000,
      max: 500000,
      currency: "THB"
    },
    livingCosts: {
      min: 350000,
      max: 550000,
      currency: "THB"
    },
    scholarships: [
      {
        name: "Mahidol International Scholarship",
        amount: "Up to 100% tuition waiver",
        criteria: "Academic excellence"
      }
    ],
    admissionRequirements: [
      "Strong academic background",
      "English proficiency",
      "Medical entrance exams for medical programs"
    ],
    languageRequirements: ["IELTS 6.5 minimum", "TOEFL 88 minimum"],
    contact: {
      email: "inter@mahidol.ac.th",
      website: "https://mahidol.ac.th/en/"
    },
    recognizedByRGOB: true,
    popularPrograms: ["Medicine", "International Health Policy", "Pharmacy"],
    avgDuration: "6 years (Medicine), 4 years (Other UG)",
    applicationDeadline: "March 2025"
  },

  // GERMANY
  {
    id: "int_15",
    name: "Technical University of Munich",
    country: "Germany",
    location: "Munich, Germany",
    image: "/lovable-uploads/880d7613-7292-46b9-bb3f-dc61fc9c5193.png",
    description: "One of Europe's top technical universities, renowned for engineering and technology programs.",
    established: 1868,
    type: "Public",
    rating: 4.6,
    programs: {
      undergraduate: ["Bachelor in Engineering", "Bachelor in Natural Sciences", "Bachelor in Management"],
      postgraduate: ["Master's programs", "MBA", "Research programs"],
      doctorate: ["PhD in Engineering and Sciences"]
    },
    specializations: ["Engineering", "Computer Science", "Natural Sciences", "Management", "Medicine"],
    worldRanking: 50,
    tuitionFees: {
      min: 0,
      max: 3000,
      currency: "EUR"
    },
    livingCosts: {
      min: 10000,
      max: 15000,
      currency: "EUR"
    },
    scholarships: [
      {
        name: "DAAD Scholarship",
        amount: "Monthly stipend + tuition coverage",
        criteria: "Academic excellence for international students"
      },
      {
        name: "TUM Graduate School Fellowships",
        amount: "Full funding for PhD",
        criteria: "Outstanding research potential"
      }
    ],
    admissionRequirements: [
      "Strong academic background",
      "German or English proficiency",
      "Program-specific requirements"
    ],
    languageRequirements: ["German C1 or English B2-C1 depending on program", "IELTS 6.5 or TOEFL 88"],
    contact: {
      email: "studium@tum.de",
      website: "https://www.tum.de/en/"
    },
    recognizedByRGOB: true,
    popularPrograms: ["Mechanical Engineering", "Computer Science", "Electrical Engineering"],
    avgDuration: "3 years (Bachelor), 2 years (Master)",
    applicationDeadline: "March 2025"
  },
  {
    id: "int_16",
    name: "University of Heidelberg",
    country: "Germany",
    location: "Heidelberg, Germany",
    image: "/lovable-uploads/94d00c17-1893-44d4-99be-b41cc6245b11.png",
    description: "Germany's oldest university and one of Europe's most prestigious research institutions.",
    established: 1386,
    type: "Public",
    rating: 4.5,
    programs: {
      undergraduate: ["Bachelor in Sciences", "Bachelor in Humanities", "Bachelor in Medicine"],
      postgraduate: ["Master's programs", "Medical specializations"],
      doctorate: ["PhD programs across disciplines"]
    },
    specializations: ["Medicine", "Natural Sciences", "Humanities", "Law", "Social Sciences"],
    worldRanking: 64,
    tuitionFees: {
      min: 0,
      max: 3000,
      currency: "EUR"
    },
    livingCosts: {
      min: 9000,
      max: 14000,
      currency: "EUR"
    },
    scholarships: [
      {
        name: "DAAD Scholarships",
        amount: "Monthly allowance + tuition",
        criteria: "Academic merit"
      },
      {
        name: "Heidelberg Graduate School Scholarships",
        amount: "Full PhD funding",
        criteria: "Research excellence"
      }
    ],
    admissionRequirements: [
      "Excellent academic record",
      "Language proficiency",
      "Entrance exams for some programs"
    ],
    languageRequirements: ["German C1 for most programs", "English programs available with IELTS 6.5"],
    contact: {
      email: "international@uni-heidelberg.de",
      website: "https://www.uni-heidelberg.de/en"
    },
    recognizedByRGOB: true,
    popularPrograms: ["Medicine", "Natural Sciences", "Psychology"],
    avgDuration: "3 years (Bachelor), 2 years (Master)",
    applicationDeadline: "March 2025"
  },

  // More UK Universities
  {
    id: "int_17",
    name: "Imperial College London",
    country: "United Kingdom",
    location: "London, UK",
    image: "/lovable-uploads/edbf9aff-60bc-4ddc-a773-487455a3ddee.png",
    description: "World-leading university specializing in science, engineering, medicine and business.",
    established: 1907,
    type: "Public",
    rating: 4.7,
    programs: {
      undergraduate: ["Engineering", "Natural Sciences", "Medicine", "Computing"],
      postgraduate: ["Master's programs", "MBA", "Research degrees"],
      doctorate: ["PhD programs"]
    },
    specializations: ["Engineering", "Medicine", "Natural Sciences", "Computing", "Business"],
    worldRanking: 9,
    tuitionFees: {
      min: 32000,
      max: 45000,
      currency: "GBP"
    },
    livingCosts: {
      min: 15000,
      max: 20000,
      currency: "GBP"
    },
    scholarships: [
      {
        name: "Imperial College Scholarships",
        amount: "Up to £25,000",
        criteria: "Academic excellence"
      },
      {
        name: "President's Scholarship",
        amount: "Full tuition + stipend",
        criteria: "Outstanding academic achievement"
      }
    ],
    admissionRequirements: [
      "Excellent A-levels or equivalent",
      "Strong mathematics and science background",
      "English proficiency"
    ],
    languageRequirements: ["IELTS 7.0 overall", "TOEFL 100 minimum"],
    contact: {
      email: "admissions@imperial.ac.uk",
      website: "https://www.imperial.ac.uk/"
    },
    recognizedByRGOB: true,
    popularPrograms: ["Engineering", "Medicine", "Computing", "Natural Sciences"],
    avgDuration: "3-4 years (UG), 1 year (PG)",
    applicationDeadline: "October 2024"
  },

  // More US Universities
  {
    id: "int_18",
    name: "Stanford University",
    country: "United States",
    location: "Stanford, CA, USA",
    image: "/lovable-uploads/3e944d10-b5a4-474b-94bc-6b6e63c8503c.png",
    description: "World-renowned private research university known for entrepreneurship and innovation.",
    established: 1885,
    type: "Private",
    rating: 4.9,
    programs: {
      undergraduate: ["Engineering", "Computer Science", "Business", "Humanities"],
      postgraduate: ["Master's programs", "MBA", "Professional degrees"],
      doctorate: ["PhD programs"]
    },
    specializations: ["Computer Science", "Engineering", "Business", "Medicine", "Law"],
    worldRanking: 5,
    tuitionFees: {
      min: 56000,
      max: 60000,
      currency: "USD"
    },
    livingCosts: {
      min: 18000,
      max: 25000,
      currency: "USD"
    },
    scholarships: [
      {
        name: "Stanford Need-Based Aid",
        amount: "Full tuition for families earning under $150k",
        criteria: "Financial need"
      },
      {
        name: "Knight-Hennessy Scholars",
        amount: "Full funding for graduate studies",
        criteria: "Leadership and academic excellence"
      }
    ],
    admissionRequirements: [
      "Exceptional academic record",
      "SAT/ACT scores",
      "Strong extracurricular activities",
      "Essays and recommendations"
    ],
    languageRequirements: ["TOEFL 100 minimum", "IELTS 7.0 minimum"],
    contact: {
      email: "admission@stanford.edu",
      website: "https://www.stanford.edu/"
    },
    recognizedByRGOB: true,
    popularPrograms: ["Computer Science", "Engineering", "Business", "Medicine"],
    avgDuration: "4 years (UG), 1-2 years (MS)",
    applicationDeadline: "January 2025"
  },

  // More Australian Universities
  {
    id: "int_19",
    name: "University of Sydney",
    country: "Australia",
    location: "Sydney, Australia",
    image: "/lovable-uploads/c7102720-6693-41e4-b6e6-490353a4bec9.png",
    description: "Australia's first university and one of the world's leading research institutions.",
    established: 1850,
    type: "Public",
    rating: 4.4,
    programs: {
      undergraduate: ["Bachelor of Science", "Bachelor of Engineering", "Bachelor of Medicine", "Bachelor of Arts"],
      postgraduate: ["Master's programs", "Professional degrees"],
      doctorate: ["PhD programs"]
    },
    specializations: ["Medicine", "Engineering", "Business", "Law", "Arts"],
    worldRanking: 41,
    tuitionFees: {
      min: 45000,
      max: 50000,
      currency: "AUD"
    },
    livingCosts: {
      min: 21000,
      max: 27000,
      currency: "AUD"
    },
    scholarships: [
      {
        name: "Sydney Scholars Awards",
        amount: "Up to AUD 10,000",
        criteria: "Academic merit"
      },
      {
        name: "International Student Scholarship",
        amount: "Up to AUD 40,000",
        criteria: "Outstanding academic achievement"
      }
    ],
    admissionRequirements: [
      "Strong academic background",
      "English proficiency",
      "Program-specific requirements"
    ],
    languageRequirements: ["IELTS 6.5 overall", "TOEFL 85 minimum"],
    contact: {
      email: "international.office@sydney.edu.au",
      website: "https://www.sydney.edu.au/"
    },
    recognizedByRGOB: true,
    popularPrograms: ["Medicine", "Engineering", "Business", "Law"],
    avgDuration: "3-4 years (UG), 1-2 years (PG)",
    applicationDeadline: "January 2025"
  },

  // More Canadian Universities
  {
    id: "int_20",
    name: "McGill University",
    country: "Canada",
    location: "Montreal, Canada",
    image: "/lovable-uploads/29974617-3d2f-4f3b-926a-bf252ce766e7.png",
    description: "One of Canada's most prestigious universities with a strong international reputation.",
    established: 1821,
    type: "Public",
    rating: 4.6,
    programs: {
      undergraduate: ["Bachelor of Science", "Bachelor of Engineering", "Bachelor of Arts", "Bachelor of Commerce"],
      postgraduate: ["Master's programs", "MBA", "Professional degrees"],
      doctorate: ["PhD programs"]
    },
    specializations: ["Medicine", "Engineering", "Business", "Law", "Sciences"],
    worldRanking: 31,
    tuitionFees: {
      min: 50000,
      max: 60000,
      currency: "CAD"
    },
    livingCosts: {
      min: 14000,
      max: 18000,
      currency: "CAD"
    },
    scholarships: [
      {
        name: "McGill Entrance Scholarships",
        amount: "Up to CAD 12,000",
        criteria: "Academic excellence"
      },
      {
        name: "International Student Awards",
        amount: "Up to CAD 10,000",
        criteria: "Merit-based for international students"
      }
    ],
    admissionRequirements: [
      "Excellent academic record",
      "English proficiency",
      "Program-specific prerequisites"
    ],
    languageRequirements: ["IELTS 6.5 minimum", "TOEFL 90 minimum"],
    contact: {
      email: "admissions@mcgill.ca",
      website: "https://www.mcgill.ca/"
    },
    recognizedByRGOB: true,
    popularPrograms: ["Medicine", "Engineering", "Business", "Law"],
    avgDuration: "3-4 years (UG), 1-2 years (PG)",
    applicationDeadline: "January 2025"
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