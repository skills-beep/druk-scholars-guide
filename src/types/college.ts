
export interface College {
  id: string;
  name: string;
  location: string;
  type: string;
  image: string;
  description: string;
  rating: number;
  established: number;
  courses: string[];
  fees: {
    min: number;
    max: number;
    currency: string;
  };
  tags: string[];
  scholarships: Array<{
    name: string;
    amount: string;
    criteria: string;
  }>;
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
  admissionDeadline: string;
  eligibility: string[];
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  careerOpportunities: string[];
  applyUrl: string;
}
