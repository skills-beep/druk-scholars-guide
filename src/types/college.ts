
export interface College {
  id: string;
  name: string;
  location: string;
  type: 'University' | 'College' | 'Institute';
  image: string;
  rating: number;
  fees: {
    min: number;
    max: number;
    currency: string;
  };
  courses: string[];
  tags: string[];
  description: string;
  established: number;
  admissionDeadline: string;
  eligibility: string[];
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  scholarships: {
    name: string;
    amount: string;
    criteria: string;
  }[];
}

export interface CollegeFilters {
  search: string;
  location: string[];
  courseType: string[];
  feeRange: [number, number];
  rating: number;
  collegeType: string[];
}
