export type ProjectCredibilityStatus = {
  built: boolean;
  tested: boolean;
  deployed: boolean;
  expertFeedback: boolean;
  validated: boolean; // Clinical or widespread school validation
};

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  statusBadge: string;
  stage: 'development' | 'deployed_prototype' | 'foundation';
  githubUrl?: string;
  isPrivateRepo?: boolean;
  liveUrl?: string;
  problem: {
    title: string;
    description: string;
    context: string;
  };
  idea: string;
  howItWorks: string;
  technology: string[];
  whatIBuilt: string[];
  testing: {
    methodology: string;
    details: string;
  };
  results: string[];
  limitations: string[];
  whatILearned: string[];
  whatsNext: string[];
  credibility: ProjectCredibilityStatus;
}

export interface PythonProject {
  id: string;
  title: string;
  repoUrl: string;
  conceptLearned: string;
  description: string;
  date: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  year: string;
  category: 'academic' | 'olympiad' | 'international' | 'extracurricular';
  resultStatus: string;
  type: 'Award' | 'Honorable Mention' | 'Qualification' | 'Star Recognition' | 'Participation';
  details: string;
  importantContext?: string;
}

export interface OutreachEntry {
  researcherName?: string;
  role?: string;
  institution: string;
  note: string;
  category: 'featured' | 'outreach_network';
}
