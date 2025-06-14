import { College } from '@/types/college';

export const colleges: College[] = [
  {
    id: "1",
    name: "Royal Thimphu College",
    location: "Thimphu",
    image: "/lovable-uploads/6b94c9c8-929a-444c-987f-feb8faac6030.png",
    description: "The first private college in Bhutan, offering a range of undergraduate programs in a serene environment.",
    established: 2009,
    type: "Private",
    rating: 4.5,
    fees: {
      min: 150000,
      max: 250000,
      currency: "BTN"
    },
    courses: [
      "B.A. in Development Economics",
      "B.A. in English",
      "B.Com",
      "B.Sc. in Environmental Science"
    ],
    tags: ["Arts", "Commerce", "Science", "Private"],
    admissionDeadline: "June 30, 2024",
    eligibility: [
      "Class XII passed with minimum 50% aggregate",
      "Relevant subject combinations as per program requirements",
      "Pass in RTC Admission Test"
    ],
    scholarships: [
      {
        name: "RTC Merit Scholarship",
        amount: "Up to 100% tuition fee waiver",
        criteria: "Based on academic performance in Class XII and RTC Admission Test"
      },
      {
        name: "Means-Based Scholarship",
        amount: "Up to 50% tuition fee waiver",
        criteria: "Based on family income and financial need"
      }
    ],
    contact: {
      phone: "+975-2-336336",
      email: "admissions@rtc.bt",
      website: "https://www.rtc.bt/"
    },
    applyUrl: "https://www.rtc.bt/index.php/admissions/how-to-apply",
    facilities: ["Library", "Computer Lab", "Sports Complex", "Cafeteria", "Hostel"],
    accreditation: "Accredited by Royal University of Bhutan",
    campusSize: "50 acres",
    studentCount: 1200,
    facultyCount: 85,
    programs: {
      undergraduate: ["B.A. in Development Economics", "B.A. in English", "B.Com", "B.Sc. in Environmental Science"],
      postgraduate: [],
      doctorate: []
    },
    careerOpportunities: ["Government Service", "Private Sector", "NGOs", "Teaching", "Research"]
  },
  {
    id: "2",
    name: "Gaeddu College of Business Studies",
    location: "Chukha",
    image: "/lovable-uploads/c94e5199-f9f6-4b14-8ef3-d19491151ba2.png",
    description: "A premier business college under the Royal University of Bhutan, offering specialized programs in business and management.",
    established: 2008,
    type: "Public",
    rating: 4.2,
    fees: {
      min: 120000,
      max: 200000,
      currency: "BTN"
    },
    courses: [
      "BBA in Marketing",
      "BBA in Finance",
      "BBA in Human Resources",
      "B.Com"
    ],
    tags: ["Business", "Management", "Commerce", "Public"],
    admissionDeadline: "July 15, 2024",
    eligibility: [
      "Class XII passed with minimum 50% aggregate",
      "English and Mathematics as compulsory subjects",
      "Pass in GCBS Admission Test"
    ],
    scholarships: [
      {
        name: "RUB Merit Scholarship",
        amount: "Full tuition fee waiver",
        criteria: "Based on academic excellence in Class XII and GCBS Admission Test"
      },
      {
        name: "GCBS Need-Based Scholarship",
        amount: "Up to 75% tuition fee waiver",
        criteria: "Based on family income and financial need"
      }
    ],
    contact: {
      phone: "+975-8-271252",
      email: "info@gcbs.edu.bt",
      website: "http://www.gcbs.edu.bt"
    },
    applyUrl: "http://www.gcbs.edu.bt/admission/",
    facilities: ["Business Lab", "Library", "Conference Hall", "Computer Center", "Hostel"],
    accreditation: "Royal University of Bhutan",
    campusSize: "75 acres",
    studentCount: 800,
    facultyCount: 65,
    programs: {
      undergraduate: ["BBA in Marketing", "BBA in Finance", "BBA in Human Resources", "B.Com"],
      postgraduate: [],
      doctorate: []
    },
    careerOpportunities: ["Business Management", "Banking", "Marketing", "Finance", "Consulting"]
  },
  {
    id: "3",
    name: "Paro College of Education",
    location: "Paro",
    image: "/lovable-uploads/d8d18649-00ee-48ef-9703-c38cbc030ad6.png",
    description: "A leading teacher training college under the Royal University of Bhutan, dedicated to excellence in education.",
    established: 1975,
    type: "Public",
    rating: 4.0,
    fees: {
      min: 100000,
      max: 180000,
      currency: "BTN"
    },
    courses: [
      "B.Ed. in Primary Education",
      "B.Ed. in Secondary Education",
      "Post Graduate Diploma in Education"
    ],
    tags: ["Education", "Teacher Training", "Public"],
    admissionDeadline: "June 20, 2024",
    eligibility: [
      "Class XII passed with minimum 50% aggregate",
      "Relevant subject combinations as per program requirements",
      "Pass in PCE Admission Test"
    ],
    scholarships: [
      {
        name: "RUB Scholarship for Teacher Education",
        amount: "Full tuition fee and stipend",
        criteria: "Based on academic performance and commitment to teaching"
      },
      {
        name: "PCE Need-Based Scholarship",
        amount: "Up to 50% tuition fee waiver",
        criteria: "Based on family income and financial need"
      }
    ],
    contact: {
      phone: "+975-8-271475",
      email: "info@pce.edu.bt",
      website: "http://www.pce.edu.bt"
    },
    applyUrl: "http://www.pce.edu.bt/admission/",
    facilities: ["Teaching Practice School", "Library", "Computer Lab", "Science Lab", "Hostel"],
    accreditation: "Royal University of Bhutan",
    campusSize: "60 acres",
    studentCount: 600,
    facultyCount: 45,
    programs: {
      undergraduate: ["B.Ed. in Primary Education", "B.Ed. in Secondary Education"],
      postgraduate: ["Post Graduate Diploma in Education"],
      doctorate: []
    },
    careerOpportunities: ["Primary School Teacher", "Secondary School Teacher", "Educational Administration", "Curriculum Development"]
  },
  {
    id: "4",
    name: "Samtse College of Education",
    location: "Samtse",
    image: "/lovable-uploads/dda7f772-be9d-442f-b557-22fe7bd2d311.png",
    description: "A distinguished college of education under the Royal University of Bhutan, focusing on holistic teacher development.",
    established: 1968,
    type: "Public",
    rating: 4.3,
    fees: {
      min: 110000,
      max: 190000,
      currency: "BTN"
    },
    courses: [
      "B.Ed. in Primary Education",
      "B.Ed. in Dzongkha",
      "B.Ed. in Science"
    ],
    tags: ["Education", "Teacher Training", "Public"],
    admissionDeadline: "June 25, 2024",
    eligibility: [
      "Class XII passed with minimum 50% aggregate",
      "Relevant subject combinations as per program requirements",
      "Pass in SCE Admission Test"
    ],
    scholarships: [
      {
        name: "RUB Scholarship for Teacher Education",
        amount: "Full tuition fee and stipend",
        criteria: "Based on academic performance and commitment to teaching"
      },
      {
        name: "SCE Need-Based Scholarship",
        amount: "Up to 50% tuition fee waiver",
        criteria: "Based on family income and financial need"
      }
    ],
    contact: {
      phone: "+975-3-251139",
      email: "info@sce.edu.bt",
      website: "http://www.sce.edu.bt"
    },
    applyUrl: "http://www.sce.edu.bt/admission/",
    facilities: ["Teaching Practice School", "Library", "Language Lab", "Science Lab", "Cultural Center"],
    accreditation: "Royal University of Bhutan",
    campusSize: "45 acres",
    studentCount: 500,
    facultyCount: 40,
    programs: {
      undergraduate: ["B.Ed. in Primary Education", "B.Ed. in Dzongkha", "B.Ed. in Science"],
      postgraduate: [],
      doctorate: []
    },
    careerOpportunities: ["Dzongkha Teacher", "Science Teacher", "Primary Teacher", "Cultural Preservation"]
  },
  {
    id: "5",
    name: "College of Natural Resources",
    location: "Lobeysa",
    image: "/lovable-uploads/239bcac2-4bdc-47f1-9803-41dfb3900118.png",
    description: "A specialized college under the Royal University of Bhutan, dedicated to sustainable management of natural resources.",
    established: 1992,
    type: "Public",
    rating: 4.1,
    fees: {
      min: 130000,
      max: 210000,
      currency: "BTN"
    },
    courses: [
      "B.Sc. in Agriculture",
      "B.Sc. in Animal Science",
      "B.Sc. in Forestry"
    ],
    tags: ["Agriculture", "Environment", "Science", "Public"],
    admissionDeadline: "July 5, 2024",
    eligibility: [
      "Class XII passed with Science stream",
      "Minimum 50% aggregate marks in PCB",
      "Pass in CNR Admission Test"
    ],
    scholarships: [
      {
        name: "RUB Scholarship for Natural Resources",
        amount: "Full tuition fee and stipend",
        criteria: "Based on academic performance and commitment to natural resource management"
      },
      {
        name: "CNR Need-Based Scholarship",
        amount: "Up to 50% tuition fee waiver",
        criteria: "Based on family income and financial need"
      }
    ],
    contact: {
      phone: "+975-2-376205",
      email: "info@cnr.edu.bt",
      website: "http://www.cnr.edu.bt"
    },
    applyUrl: "http://www.cnr.edu.bt/admission/",
    facilities: ["Research Farm", "Veterinary Hospital", "Forestry Lab", "Greenhouse", "Library"],
    accreditation: "Royal University of Bhutan",
    campusSize: "200 acres",
    studentCount: 400,
    facultyCount: 35,
    programs: {
      undergraduate: ["B.Sc. in Agriculture", "B.Sc. in Animal Science", "B.Sc. in Forestry"],
      postgraduate: [],
      doctorate: []
    },
    careerOpportunities: ["Agricultural Officer", "Forestry Officer", "Veterinarian", "Research Scientist", "Environmental Consultant"]
  },
  {
    id: "6",
    name: "College of Science and Technology",
    location: "Rinchending",
    image: "/lovable-uploads/983d94f4-00b8-4fc7-87c4-0009a1895655.png",
    description: "A leading technology college under the Royal University of Bhutan, offering programs in engineering and technology.",
    established: 2001,
    type: "Public",
    rating: 4.4,
    fees: {
      min: 140000,
      max: 220000,
      currency: "BTN"
    },
    courses: [
      "B.Eng. in Civil Engineering",
      "B.Eng. in Electrical Engineering",
      "B.Eng. in Electronics and Communication Engineering",
      "B.Sc. in Computer Science"
    ],
    tags: ["Engineering", "Technology", "Science", "Public"],
    admissionDeadline: "July 10, 2024",
    eligibility: [
      "Class XII passed with Science stream",
      "Minimum 60% aggregate marks in PCM",
      "Pass in CST Admission Test"
    ],
    scholarships: [
      {
        name: "RUB Scholarship for Engineering",
        amount: "Full tuition fee and stipend",
        criteria: "Based on academic performance and performance in CST entrance exam"
      },
      {
        name: "CST Merit Scholarship",
        amount: "Up to 75% tuition fee waiver",
        criteria: "Based on academic excellence"
      }
    ],
    contact: {
      phone: "+975-3-640222",
      email: "info@cst.edu.bt",
      website: "http://www.cst.edu.bt"
    },
    applyUrl: "http://www.cst.edu.bt/admission/",
    facilities: ["Engineering Workshops", "Computer Lab", "Electronics Lab", "Library", "Research Center"],
    accreditation: "Royal University of Bhutan",
    campusSize: "100 acres",
    studentCount: 1000,
    facultyCount: 75,
    programs: {
      undergraduate: ["B.Eng. in Civil Engineering", "B.Eng. in Electrical Engineering", "B.Eng. in Electronics and Communication Engineering", "B.Sc. in Computer Science"],
      postgraduate: [],
      doctorate: []
    },
    careerOpportunities: ["Software Engineer", "Civil Engineer", "Electrical Engineer", "IT Consultant", "Project Manager"]
  },
  {
    id: "7",
    name: "Jigme Namgyel Engineering College",
    location: "Dewathang",
    image: "/lovable-uploads/880d7613-7292-46b9-bb3f-dc61fc9c5193.png",
    description: "An esteemed engineering college under the Royal University of Bhutan, providing quality technical education.",
    established: 1974,
    type: "Public",
    rating: 4.1,
    fees: {
      min: 120000,
      max: 200000,
      currency: "BTN"
    },
    courses: [
      "B.Eng. in Civil Engineering",
      "B.Eng. in Electrical Engineering",
      "B.Eng. in Mechanical Engineering"
    ],
    tags: ["Engineering", "Technology", "Public"],
    admissionDeadline: "July 8, 2024",
    eligibility: [
      "Class XII passed with Science stream",
      "Minimum 55% aggregate marks in PCM",
      "Pass in JNEC Admission Test"
    ],
    scholarships: [
      {
        name: "RUB Scholarship for Engineering",
        amount: "Full tuition fee and stipend",
        criteria: "Based on academic performance and JNEC entrance exam"
      },
      {
        name: "JNEC Merit Scholarship",
        amount: "Up to 75% tuition fee waiver",
        criteria: "Based on academic excellence"
      }
    ],
    contact: {
      phone: "+975-4-540247",
      email: "info@jnec.edu.bt",
      website: "https://www.jnec.edu.bt/"
    },
    applyUrl: "https://www.jnec.edu.bt/admission/",
    facilities: ["Mechanical Workshop", "Electrical Lab", "Civil Engineering Lab", "Library", "Hostel"],
    accreditation: "Royal University of Bhutan",
    campusSize: "80 acres",
    studentCount: 600,
    facultyCount: 50,
    programs: {
      undergraduate: ["B.Eng. in Civil Engineering", "B.Eng. in Electrical Engineering", "B.Eng. in Mechanical Engineering"],
      postgraduate: [],
      doctorate: []
    },
    careerOpportunities: ["Civil Engineer", "Electrical Engineer", "Mechanical Engineer", "Construction Manager", "Power Engineer"]
  },
  {
    id: "8",
    name: "College of Language and Culture Studies",
    location: "Taktse",
    image: "/lovable-uploads/1923e1a4-da94-4116-b17f-139ee473366e.png",
    description: "A unique college under the Royal University of Bhutan, dedicated to the preservation and promotion of Bhutanese language and culture.",
    established: 1961,
    type: "Public",
    rating: 4.2,
    fees: {
      min: 90000,
      max: 170000,
      currency: "BTN"
    },
    courses: [
      "B.A. in Language and Culture",
      "B.A. in Dzongkha",
      "B.A. in History and Culture"
    ],
    tags: ["Arts", "Culture", "Language", "Public"],
    admissionDeadline: "June 15, 2024",
    eligibility: [
      "Class XII passed with minimum 50% aggregate",
      "Interest in language and culture studies",
      "Pass in CLCS Admission Test"
    ],
    scholarships: [
      {
        name: "RUB Scholarship for Language and Culture",
        amount: "Full tuition fee and stipend",
        criteria: "Based on academic performance and commitment to preserving Bhutanese culture"
      },
      {
        name: "CLCS Need-Based Scholarship",
        amount: "Up to 50% tuition fee waiver",
        criteria: "Based on family income and financial need"
      }
    ],
    contact: {
      phone: "+975-4-721312",
      email: "info@clcs.edu.bt",
      website: "http://www.clcs.edu.bt"
    },
    applyUrl: "http://www.clcs.edu.bt/admission/",
    facilities: ["Cultural Archive", "Language Lab", "Library", "Traditional Arts Center", "Research Center"],
    accreditation: "Royal University of Bhutan",
    campusSize: "30 acres",
    studentCount: 300,
    facultyCount: 25,
    programs: {
      undergraduate: ["B.A. in Language and Culture", "B.A. in Dzongkha", "B.A. in History and Culture"],
      postgraduate: [],
      doctorate: []
    },
    careerOpportunities: ["Cultural Preservation Officer", "Language Teacher", "Museum Curator", "Cultural Researcher", "Media Professional"]
  },
  {
    id: "9",
    name: "Sherubtse College",
    location: "Kanglung",
    image: "/lovable-uploads/107ea1f3-e036-4bdc-af34-72d9bdce78ed.png",
    description: "The oldest college in Bhutan, offering a wide range of undergraduate programs in arts, science, and commerce.",
    established: 1966,
    type: "Public",
    rating: 4.5,
    fees: {
      min: 100000,
      max: 180000,
      currency: "BTN"
    },
    courses: [
      "B.A. in English",
      "B.Sc. in Physics",
      "B.Com",
      "B.Sc. in Mathematics"
    ],
    tags: ["Arts", "Science", "Commerce", "Public"],
    admissionDeadline: "June 22, 2024",
    eligibility: [
      "Class XII passed with minimum 50% aggregate",
      "Relevant subject combinations as per program requirements",
      "Pass in Sherubtse Admission Test"
    ],
    scholarships: [
      {
        name: "RUB Merit Scholarship",
        amount: "Full tuition fee waiver",
        criteria: "Based on academic excellence in Class XII and Sherubtse Admission Test"
      },
      {
        name: "Sherubtse Need-Based Scholarship",
        amount: "Up to 75% tuition fee waiver",
        criteria: "Based on family income and financial need"
      }
    ],
    contact: {
      phone: "+975-4-535203",
      email: "info@sherubtse.edu.bt",
      website: "https://www.sherubtse.edu.bt/"
    },
    applyUrl: "https://www.sherubtse.edu.bt/admission/",
    facilities: ["Central Library", "Science Labs", "Computer Center", "Sports Complex", "Hostels"],
    accreditation: "Royal University of Bhutan",
    campusSize: "120 acres",
    studentCount: 1500,
    facultyCount: 95,
    programs: {
      undergraduate: ["B.A. in English", "B.Sc. in Physics", "B.Com", "B.Sc. in Mathematics"],
      postgraduate: [],
      doctorate: []
    },
    careerOpportunities: ["Government Service", "Teaching", "Banking", "Research", "Private Sector"]
  },
  {
    id: "10",
    name: "Institute of Traditional Medicine",
    location: "Thimphu",
    image: "/lovable-uploads/751e9ff9-99d6-455b-879d-fbcb01a4a767.png",
    description: "Dedicated to preserving and promoting traditional Bhutanese medicine, offering specialized programs in Sowa Rigpa.",
    established: 1967,
    type: "Public",
    rating: 4.3,
    fees: {
      min: 80000,
      max: 160000,
      currency: "BTN"
    },
    courses: [
      "Diploma in Traditional Medicine",
      "Certificate in Traditional Medicine"
    ],
    tags: ["Medical", "Traditional Medicine", "Public"],
    admissionDeadline: "June 10, 2024",
    eligibility: [
      "Class XII passed with Science stream",
      "Interest in traditional medicine",
      "Pass in ITM Admission Test"
    ],
    scholarships: [
      {
        name: "Government Scholarship for Traditional Medicine",
        amount: "Full tuition fee and stipend",
        criteria: "Based on academic performance and commitment to traditional medicine"
      },
      {
        name: "ITM Need-Based Scholarship",
        amount: "Up to 50% tuition fee waiver",
        criteria: "Based on family income and financial need"
      }
    ],
    contact: {
      phone: "+975-2-322525",
      email: "info@itm.gov.bt",
      website: "https://www.moh.gov.bt/"
    },
    applyUrl: "https://www.moh.gov.bt/",
    facilities: ["Traditional Medicine Museum", "Herb Garden", "Research Lab", "Clinic", "Library"],
    accreditation: "Ministry of Health, Bhutan",
    campusSize: "15 acres",
    studentCount: 150,
    facultyCount: 20,
    programs: {
      undergraduate: [],
      postgraduate: [],
      doctorate: [],
      diploma: ["Diploma in Traditional Medicine", "Certificate in Traditional Medicine"]
    },
    careerOpportunities: ["Traditional Medicine Practitioner", "Healthcare Provider", "Research in Traditional Medicine", "Hospital Service"]
  },
  {
    id: "11",
    name: "Gyalpozhing College of Information Technology",
    location: "Gyalpozhing",
    image: "/lovable-uploads/294b0d4f-6b24-4136-8631-f72858b48637.png",
    description: "Focuses on providing high-quality education in information technology and related fields.",
    established: 2010,
    type: "Public",
    rating: 4.0,
    fees: {
      min: 130000,
      max: 210000,
      currency: "BTN"
    },
    courses: [
      "B.Sc. in Information Technology",
      "B.Sc. in Computer Science",
      "Diploma in IT"
    ],
    tags: ["Technology", "IT", "Computer Science", "Public"],
    admissionDeadline: "July 1, 2024",
    eligibility: [
      "Class XII passed with minimum 50% aggregate",
      "Mathematics as a compulsory subject",
      "Pass in GCIT Admission Test"
    ],
    scholarships: [
      {
        name: "RUB Scholarship for IT",
        amount: "Full tuition fee and stipend",
        criteria: "Based on academic performance and GCIT entrance exam"
      },
      {
        name: "GCIT Merit Scholarship",
        amount: "Up to 75% tuition fee waiver",
        criteria: "Based on academic excellence"
      }
    ],
    contact: {
      phone: "+975-7-260260",
      email: "info@gcit.edu.bt",
      website: "http://www.gcit.edu.bt"
    },
    applyUrl: "http://www.gcit.edu.bt/admission",
    facilities: ["Computer Labs", "Software Development Center", "Network Lab", "Library", "Innovation Hub"],
    accreditation: "Royal University of Bhutan",
    campusSize: "40 acres",
    studentCount: 500,
    facultyCount: 35,
    programs: {
      undergraduate: ["B.Sc. in Information Technology", "B.Sc. in Computer Science"],
      postgraduate: [],
      doctorate: [],
      diploma: ["Diploma in IT"]
    },
    careerOpportunities: ["Software Developer", "IT Consultant", "System Administrator", "Web Developer", "Database Administrator"]
  },
  {
    id: "12",
    name: "Apollo Bhutan Institute of Nursing",
    location: "Thimphu",
    image: "/lovable-uploads/7f89786e-7fc4-41b5-9258-b5723443e7b6.png",
    description: "Premier nursing education institute affiliated with Apollo Hospitals, offering world-class healthcare education with modern facilities and experienced faculty.",
    established: 2018,
    type: "Private",
    rating: 4.6,
    fees: {
      min: 280000,
      max: 350000,
      currency: "BTN"
    },
    courses: [
      "Bachelor of Science in Nursing",
      "General Nursing and Midwifery",
      "Post Basic B.Sc. Nursing",
      "Auxiliary Nurse Midwifery"
    ],
    tags: ["Healthcare", "Nursing", "Medical", "Private"],
    admissionDeadline: "May 30, 2024",
    eligibility: [
      "Class XII passed with Science stream (Physics, Chemistry, Biology)",
      "Minimum 50% aggregate marks in Class XII",
      "Age between 17-25 years",
      "Medical fitness certificate required"
    ],
    scholarships: [
      {
        name: "Apollo Merit Scholarship",
        amount: "Up to 50% fee waiver",
        criteria: "For students with exceptional academic performance"
      },
      {
        name: "Need-based Financial Aid",
        amount: "Up to BTN 100,000",
        criteria: "For economically disadvantaged students"
      }
    ],
    contact: {
      phone: "+975-2-336699",
      email: "admissions@apollobhutan.edu.bt",
      website: "https://apollobhutan.edu.bt"
    },
    applyUrl: "https://apollobhutan.edu.bt/admissions",
    facilities: ["Modern Simulation Labs", "Clinical Skills Lab", "Library", "Computer Lab", "Hospital Partnerships"],
    accreditation: "Bhutan Medical and Health Council",
    campusSize: "10 acres",
    studentCount: 200,
    facultyCount: 25,
    programs: {
      undergraduate: ["Bachelor of Science in Nursing", "Post Basic B.Sc. Nursing"],
      postgraduate: [],
      doctorate: [],
      diploma: ["General Nursing and Midwifery", "Auxiliary Nurse Midwifery"]
    },
    careerOpportunities: ["Registered Nurse", "Hospital Administrator", "Clinical Specialist", "Community Health Nurse", "Healthcare Manager"]
  },
  {
    id: "13",
    name: "Khesar Gyalpo University of Medical Sciences of Bhutan",
    location: "Thimphu",
    image: "/lovable-uploads/b765e7c5-40a2-4e65-bad0-104871f77b3d.png",
    description: "Founded in 2013 and renamed in 2015 to honor the King of Bhutan. The first dedicated medical institution in Bhutan, comprising three faculties: Health Sciences, Traditional Medicine, and Postgraduate Medicine.",
    established: 2013,
    type: "Public",
    rating: 4.8,
    fees: {
      min: 200000,
      max: 400000,
      currency: "BTN"
    },
    courses: [
      "MBBS",
      "B.Sc. in Nursing",
      "Bachelor of Traditional Medicine",
      "Post Graduate Medicine",
      "Diploma in Medical Laboratory Technology",
      "Diploma in Pharmacy"
    ],
    tags: ["Medical University", "Healthcare", "Traditional Medicine", "Research", "Government Subsidized"],
    admissionDeadline: "March 31, 2025",
    eligibility: [
      "Class XII passed with Science stream (Physics, Chemistry, Biology)",
      "Minimum 75% aggregate marks for MBBS",
      "Pass in NEET or KGUMSB Entrance Exam",
      "Medical fitness certificate required"
    ],
    scholarships: [
      {
        name: "Royal Government Medical Scholarship",
        amount: "Full tuition fee and stipend",
        criteria: "Based on entrance exam performance and commitment to serve in Bhutan"
      },
      {
        name: "KGUMSB Merit Scholarship",
        amount: "Up to 75% tuition fee waiver",
        criteria: "For academically outstanding students"
      }
    ],
    contact: {
      phone: "+975-2-322525",
      email: "info@kgumsb.edu.bt",
      website: "https://www.kgumsb.edu.bt"
    },
    applyUrl: "https://www.kgumsb.edu.bt/admissions",
    facilities: ["Teaching Hospital", "Medical Simulation Center", "Research Laboratories", "Digital Library", "Traditional Medicine Museum"],
    accreditation: "Medical Council of India Recognition, WHO Listed",
    campusSize: "100 acres",
    studentCount: 800,
    facultyCount: 120,
    programs: {
      undergraduate: ["MBBS", "B.Sc. in Nursing", "Bachelor of Traditional Medicine"],
      postgraduate: ["MD in Various Specialties", "MS in Surgery", "Post Graduate Diploma in Traditional Medicine"],
      doctorate: ["PhD in Medical Sciences"],
      diploma: ["Diploma in Medical Laboratory Technology", "Diploma in Pharmacy"]
    },
    careerOpportunities: ["Medical Doctor", "Specialist Physician", "Surgeon", "Traditional Medicine Practitioner", "Medical Researcher", "Healthcare Administrator"]
  }
];

export const governmentScholarships = [
  {
    name: "Royal Government of Bhutan Scholarship",
    provider: "Department of Adult and Higher Education",
    coverage: "Full tuition fees, accommodation, meals, and monthly stipend for undergraduate studies",
    criteria: "Bhutanese nationals with excellent academic performance in Class XII",
    duration: "3-4 years depending on program",
    deadline: "Within 2 weeks of Class XII results announcement",
    applicationProcess: "Apply through respective colleges or DAHE website",
    contact: {
      phone: "+975-2-323725",
      email: "info@education.gov.bt",
      website: "http://www.education.gov.bt"
    }
  },
  {
    name: "Loden Foundation Scholarship",
    provider: "Loden Foundation",
    coverage: "Partial to full tuition fee support based on financial need",
    criteria: "Academically deserving students from economically disadvantaged families",
    duration: "Throughout the program duration",
    deadline: "Applications accepted year-round",
    applicationProcess: "Apply online through Loden Foundation website with required documents",
    contact: {
      phone: "+975-2-336699",
      email: "scholarships@loden.org",
      website: "https://www.loden.org"
    }
  },
  {
    name: "Loden Foundation Merit Award",
    provider: "Loden Foundation",
    coverage: "Recognition awards and educational support for outstanding academic achievement",
    criteria: "Students with exceptional academic performance and leadership potential",
    duration: "One-time award with renewal possibilities",
    deadline: "End of each academic year",
    applicationProcess: "Nomination by educational institutions or self-application with academic transcripts",
    contact: {
      phone: "+975-2-336699",
      email: "awards@loden.org", 
      website: "https://www.loden.org"
    }
  }
];
