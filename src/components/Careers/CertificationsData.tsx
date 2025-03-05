export interface Certification {
  id: string;
  title: string;
  provider: string;
  duration: string;
  description: string;
  skills: string[];
  benefits?: string[];
  requirements?: string[];
  details: string;
  level: string;
  format: string;
}

const certificationsData: Certification[] = [
  {
    id: "aws-solutions-architect",
    title: "AWS Certified Solutions Architect",
    provider: "Amazon Web Services",
    duration: "6 months",
    description: "Validate your expertise in designing distributed systems on AWS. We sponsor and support your certification journey.",
    skills: ["AWS", "Cloud Architecture", "Security", "Networking", "Storage Solutions"],
    benefits: [
      "Fully sponsored certification costs",
      "Dedicated study time during work hours",
      "Bonus upon successful completion",
      "Career advancement opportunities",
      "Access to AWS training resources"
    ],
    requirements: [
      "1+ years of hands-on experience with AWS",
      "Basic understanding of distributed systems",
      "Networking knowledge",
      "Commitment to complete within 6 months"
    ],
    details: "As a Senior Software Engineer, you'll be responsible for designing and implementing complex features, mentoring junior developers, and contributing to architectural decisions.",
    level: "Intermediate",
    format: "Online"
  },
  {
    id: "data-science-professional",
    title: "Data Science Professional Certificate",
    provider: "IBM",
    duration: "3-6 months",
    description: "Master data science, machine learning, and AI techniques with hands-on projects and real-world applications.",
    skills: ["Python", "Machine Learning", "Data Analysis", "AI", "Statistical Methods"],
    benefits: [
      "Fully sponsored certification costs",
      "Mentorship from senior data scientists",
      "Practical project opportunities",
      "Career growth in data science track",
      "Access to IBM Cloud resources"
    ],
    requirements: [
      "Basic programming knowledge",
      "Understanding of mathematics and statistics",
      "Analytical thinking",
      "Commitment to complete within 6 months"
    ],
    details: "As a Senior Software Engineer, you'll be responsible for designing and implementing complex features, mentoring junior developers, and contributing to architectural decisions.",
    level: "Intermediate",
    format: "Online"
  },
  {
    id: "scrum-master",
    title: "Certified Scrum Master (CSM)",
    provider: "Scrum Alliance",
    duration: "2-3 months",
    description: "Learn to facilitate Scrum processes and help teams deliver high-value products through iterative development.",
    skills: ["Agile Methodologies", "Scrum Framework", "Team Facilitation", "Project Management", "Servant Leadership"],
    benefits: [
      "Fully sponsored certification costs",
      "Dedicated training sessions",
      "Immediate application in project teams",
      "Leadership development opportunities",
      "Access to Scrum Alliance resources"
    ],
    requirements: [
      "Basic understanding of project management",
      "Interest in agile methodologies",
      "Good communication skills",
      "Commitment to complete within 3 months"
    ],
    details: "As a Senior Software Engineer, you'll be responsible for designing and implementing complex features, mentoring junior developers, and contributing to architectural decisions.",
    level: "Intermediate",
    format: "Online"
  }
];

export default certificationsData;
