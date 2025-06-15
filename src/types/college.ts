
export interface College {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  established: number;
  type: "Public" | "Private";
  rating: number;
  fees: {
    min: number;
    max: number;
    currency: string;
  };
  courses: string[];
  tags: string[];
  admissionDeadline: string;
  eligibility: string[];
  scholarships: Scholarship[];
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  applyUrl: string;
  facilities: string[];
  accreditation: string;
  campusSize: string;
  studentCount: number;
  facultyCount: number;
  programs: {
    undergraduate: string[];
    postgraduate: string[];
    doctorate: string[];
    diploma?: string[];
  };
  careerOpportunities: string[];
  degreePrograms?: string[];
  popularity?: number;
  vision?: string | {
    undergraduate?: string;
    postgraduate?: string;
  };
  mission?: string[] | {
    undergraduate?: string;
    postgraduate?: string;
  };
}

export interface Scholarship {
  name: string;
  amount: string;
  criteria: string;
}

export interface CollegeFilters {
  search: string;
  location: string[];
  courseType: string[];
  feeRange: [number, number];
  rating: number;
  collegeType: string[];
  accreditation: string[];
  degreeProgram: string;
  sortBy: 'popularity' | 'alphabetical' | 'rating' | 'newest';
}
