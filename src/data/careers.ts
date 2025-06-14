
import { College } from '@/types/college';

export interface CareerCategory {
  category: string;
  description: string;
  icon: string;
  jobs: {
    title: string;
    salary: string;
    growth: string;
    collegeIds: string[];
  }[];
}

export const inDemandCareers: CareerCategory[] = [
  {
    category: 'Technology & Digital Innovation',
    description: 'Leading Bhutan\'s digital transformation and e-governance initiatives',
    icon: '💻',
    jobs: [
      { title: 'Software Engineer', salary: 'BTN 400K-800K', growth: '+25%', collegeIds: ['2'] },
      { title: 'Data Scientist', salary: 'BTN 500K-900K', growth: '+30%', collegeIds: ['2'] },
      { title: 'Cybersecurity Specialist', salary: 'BTN 450K-850K', growth: '+35%', collegeIds: ['2'] },
      { title: 'Mobile App Developer', salary: 'BTN 350K-700K', growth: '+28%', collegeIds: ['2'] },
      { title: 'AI/ML Engineer', salary: 'BTN 600K-1200K', growth: '+40%', collegeIds: ['2'] }
    ]
  },
  {
    category: 'Healthcare & Medical Services',
    description: 'Providing quality healthcare across urban and rural Bhutan',
    icon: '🏥',
    jobs: [
      { title: 'General Physician', salary: 'BTN 600K-1000K', growth: '+20%', collegeIds: ['1'] },
      { title: 'Nurse Practitioner', salary: 'BTN 300K-500K', growth: '+22%', collegeIds: ['1'] },
      { title: 'Traditional Medicine Doctor', salary: 'BTN 400K-700K', growth: '+15%', collegeIds: ['6'] },
      { title: 'Public Health Specialist', salary: 'BTN 450K-750K', growth: '+18%', collegeIds: ['1'] },
      { title: 'Mental Health Counselor', salary: 'BTN 350K-600K', growth: '+25%', collegeIds: ['1'] }
    ]
  },
  {
    category: 'Engineering & Infrastructure',
    description: 'Building sustainable infrastructure for Bhutan\'s future',
    icon: '🏗️',
    jobs: [
      { title: 'Civil Engineer', salary: 'BTN 500K-900K', growth: '+20%', collegeIds: ['4'] },
      { title: 'Electrical Engineer', salary: 'BTN 450K-800K', growth: '+18%', collegeIds: ['4'] },
      { title: 'Mechanical Engineer', salary: 'BTN 400K-750K', growth: '+15%', collegeIds: ['4'] },
      { title: 'Environmental Engineer', salary: 'BTN 500K-850K', growth: '+22%', collegeIds: ['4', '5'] },
      { title: 'Renewable Energy Engineer', salary: 'BTN 550K-950K', growth: '+30%', collegeIds: ['4'] }
    ]
  },
  {
    category: 'Education & Training',
    description: 'Shaping future generations through quality education',
    icon: '📚',
    jobs: [
      { title: 'Secondary School Teacher', salary: 'BTN 250K-450K', growth: '+12%', collegeIds: ['3'] },
      { title: 'Vocational Trainer', salary: 'BTN 300K-500K', growth: '+15%', collegeIds: ['3'] },
      { title: 'Educational Administrator', salary: 'BTN 400K-700K', growth: '+10%', collegeIds: ['3'] },
      { title: 'Curriculum Developer', salary: 'BTN 350K-600K', growth: '+14%', collegeIds: ['3'] },
      { title: 'Special Education Teacher', salary: 'BTN 280K-480K', growth: '+18%', collegeIds: ['3'] }
    ]
  },
  {
    category: 'Tourism & Hospitality',
    description: 'Promoting high-value, low-impact sustainable tourism',
    icon: '🏔️',
    jobs: [
      { title: 'Tourism Marketing Manager', salary: 'BTN 400K-700K', growth: '+20%', collegeIds: ['1'] },
      { title: 'Hotel Operations Manager', salary: 'BTN 350K-650K', growth: '+15%', collegeIds: ['1'] },
      { title: 'Cultural Heritage Guide', salary: 'BTN 200K-400K', growth: '+25%', collegeIds: [] },
      { title: 'Eco-tourism Developer', salary: 'BTN 450K-750K', growth: '+22%', collegeIds: ['5'] },
      { title: 'Adventure Tourism Coordinator', salary: 'BTN 300K-550K', growth: '+18%', collegeIds: [] }
    ]
  },
  {
    category: 'Agriculture & Food Security',
    description: 'Ensuring food security and sustainable farming practices',
    icon: '🌾',
    jobs: [
      { title: 'Agricultural Extension Officer', salary: 'BTN 300K-500K', growth: '+15%', collegeIds: ['5'] },
      { title: 'Organic Farming Specialist', salary: 'BTN 350K-600K', growth: '+20%', collegeIds: ['5'] },
      { title: 'Food Processing Technician', salary: 'BTN 250K-450K', growth: '+18%', collegeIds: ['5'] },
      { title: 'Agricultural Research Scientist', salary: 'BTN 450K-750K', growth: '+12%', collegeIds: ['5'] },
      { title: 'Livestock Development Officer', salary: 'BTN 320K-520K', growth: '+16%', collegeIds: ['5'] }
    ]
  },
  {
    category: 'Environmental Conservation',
    description: 'Protecting Bhutan\'s pristine environment and biodiversity',
    icon: '🌿',
    jobs: [
      { title: 'Forest Conservation Officer', salary: 'BTN 350K-600K', growth: '+18%', collegeIds: ['5'] },
      { title: 'Wildlife Biologist', salary: 'BTN 400K-700K', growth: '+20%', collegeIds: ['5'] },
      { title: 'Climate Change Analyst', salary: 'BTN 450K-750K', growth: '+25%', collegeIds: ['5'] },
      { title: 'Environmental Impact Assessor', salary: 'BTN 400K-650K', growth: '+22%', collegeIds: ['5'] },
      { title: 'Conservation Project Manager', salary: 'BTN 500K-800K', growth: '+15%', collegeIds: ['5'] }
    ]
  },
  {
    category: 'Finance & Banking',
    description: 'Supporting Bhutan\'s growing economy and financial inclusion',
    icon: '💰',
    jobs: [
      { title: 'Financial Analyst', salary: 'BTN 400K-700K', growth: '+20%', collegeIds: ['1'] },
      { title: 'Banking Operations Manager', salary: 'BTN 500K-850K', growth: '+15%', collegeIds: ['1'] },
      { title: 'Investment Advisor', salary: 'BTN 450K-800K', growth: '+18%', collegeIds: ['1'] },
      { title: 'Risk Management Specialist', salary: 'BTN 480K-780K', growth: '+22%', collegeIds: ['1'] },
      { title: 'Microfinance Officer', salary: 'BTN 300K-500K', growth: '+25%', collegeIds: ['1'] }
    ]
  },
  {
    category: 'Government & Public Service',
    description: 'Serving the people and implementing government policies',
    icon: '🏛️',
    jobs: [
      { title: 'Policy Analyst', salary: 'BTN 400K-650K', growth: '+12%', collegeIds: ['1'] },
      { title: 'Public Administration Officer', salary: 'BTN 350K-550K', growth: '+10%', collegeIds: ['1'] },
      { title: 'Development Project Coordinator', salary: 'BTN 450K-700K', growth: '+15%', collegeIds: ['1'] },
      { title: 'Legal Advisor', salary: 'BTN 500K-900K', growth: '+18%', collegeIds: ['1'] },
      { title: 'Social Welfare Officer', salary: 'BTN 300K-500K', growth: '+20%', collegeIds: ['1'] }
    ]
  },
  {
    category: 'Media & Communications',
    description: 'Promoting Bhutanese culture and connecting communities',
    icon: '📺',
    jobs: [
      { title: 'Digital Marketing Specialist', salary: 'BTN 350K-600K', growth: '+30%', collegeIds: ['1', '2'] },
      { title: 'Content Creator', salary: 'BTN 250K-450K', growth: '+35%', collegeIds: ['1'] },
      { title: 'Public Relations Manager', salary: 'BTN 400K-700K', growth: '+20%', collegeIds: ['1'] },
      { title: 'Broadcast Journalist', salary: 'BTN 300K-550K', growth: '+15%', collegeIds: ['1'] },
      { title: 'Social Media Manager', salary: 'BTN 280K-500K', growth: '+40%', collegeIds: ['1', '2'] }
    ]
  },
  {
    category: 'Arts & Cultural Preservation',
    description: 'Preserving and promoting Bhutan\'s rich cultural heritage',
    icon: '🎨',
    jobs: [
      { title: 'Cultural Heritage Curator', salary: 'BTN 300K-500K', growth: '+15%', collegeIds: ['1'] },
      { title: 'Traditional Arts Teacher', salary: 'BTN 250K-400K', growth: '+12%', collegeIds: ['3'] },
      { title: 'Museum Administrator', salary: 'BTN 350K-550K', growth: '+10%', collegeIds: ['1'] },
      { title: 'Cultural Event Coordinator', salary: 'BTN 280K-480K', growth: '+18%', collegeIds: ['1'] },
      { title: 'Documentary Filmmaker', salary: 'BTN 300K-600K', growth: '+25%', collegeIds: ['1'] }
    ]
  },
  {
    category: 'Sports & Recreation',
    description: 'Promoting physical fitness and sports development',
    icon: '⚽',
    jobs: [
      { title: 'Sports Coach', salary: 'BTN 200K-400K', growth: '+20%', collegeIds: ['3'] },
      { title: 'Fitness Trainer', salary: 'BTN 180K-350K', growth: '+25%', collegeIds: [] },
      { title: 'Sports Physiotherapist', salary: 'BTN 350K-600K', growth: '+22%', collegeIds: ['1'] },
      { title: 'Recreation Program Director', salary: 'BTN 300K-500K', growth: '+15%', collegeIds: ['3'] },
      { title: 'Sports Event Manager', salary: 'BTN 250K-450K', growth: '+18%', collegeIds: ['1'] }
    ]
  },
  {
    category: 'Manufacturing & Crafts',
    description: 'Supporting local industries and traditional craftsmanship',
    icon: '🏭',
    jobs: [
      { title: 'Production Manager', salary: 'BTN 400K-650K', growth: '+15%', collegeIds: ['4'] },
      { title: 'Quality Control Specialist', salary: 'BTN 300K-500K', growth: '+18%', collegeIds: ['4'] },
      { title: 'Traditional Crafts Designer', salary: 'BTN 250K-450K', growth: '+20%', collegeIds: [] },
      { title: 'Supply Chain Coordinator', salary: 'BTN 350K-550K', growth: '+22%', collegeIds: ['1'] },
      { title: 'Industrial Safety Officer', salary: 'BTN 320K-520K', growth: '+16%', collegeIds: ['4'] }
    ]
  },
  {
    category: 'Transportation & Logistics',
    description: 'Connecting communities and facilitating trade',
    icon: '🚛',
    jobs: [
      { title: 'Logistics Coordinator', salary: 'BTN 300K-500K', growth: '+20%', collegeIds: ['1'] },
      { title: 'Transportation Planner', salary: 'BTN 400K-650K', growth: '+18%', collegeIds: ['4'] },
      { title: 'Fleet Manager', salary: 'BTN 350K-550K', growth: '+15%', collegeIds: ['1'] },
      { title: 'Supply Chain Analyst', salary: 'BTN 380K-580K', growth: '+22%', collegeIds: ['1'] },
      { title: 'Warehouse Operations Manager', salary: 'BTN 320K-520K', growth: '+16%', collegeIds: ['1'] }
    ]
  },
  {
    category: 'Renewable Energy & Sustainability',
    description: 'Leading the transition to clean and sustainable energy',
    icon: '🔋',
    jobs: [
      { title: 'Solar Energy Technician', salary: 'BTN 300K-500K', growth: '+30%', collegeIds: ['4'] },
      { title: 'Hydropower Engineer', salary: 'BTN 500K-850K', growth: '+25%', collegeIds: ['4'] },
      { title: 'Energy Efficiency Consultant', salary: 'BTN 450K-750K', growth: '+28%', collegeIds: ['4'] },
      { title: 'Green Building Specialist', salary: 'BTN 400K-700K', growth: '+32%', collegeIds: ['4'] },
      { title: 'Carbon Footprint Analyst', salary: 'BTN 380K-650K', growth: '+35%', collegeIds: ['5'] }
    ]
  }
];
