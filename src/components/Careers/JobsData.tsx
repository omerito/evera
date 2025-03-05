export interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  skills: string[];
  requirements?: string[];
  responsibilities?: string[];
  details?: string;
}

const jobsData: Job[] = [
  {
    id: "senior-data-scientist",
    title: "Senior Data Scientist",
    type: "Full-time",
    location: "Remote / Hybrid",
    description: "Join our data science team to develop advanced analytics solutions and machine learning models that drive business insights and innovation.",
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization", "Statistical Analysis"],
    requirements: [
      "Master's or PhD in Computer Science, Statistics, or related field",
      "5+ years of experience in data science or machine learning",
      "Strong programming skills in Python and SQL",
      "Experience with machine learning frameworks (TensorFlow, PyTorch, etc.)",
      "Excellent communication and problem-solving skills"
    ],
    responsibilities: [
      "Develop and implement machine learning models to solve complex business problems",
      "Analyze large datasets to extract actionable insights",
      "Collaborate with cross-functional teams to identify opportunities for data-driven solutions",
      "Present findings and recommendations to stakeholders",
      "Stay current with the latest advancements in data science and machine learning"
    ],
    details: "As a Senior Data Scientist, you'll be responsible for developing and implementing machine learning models to solve complex business problems, analyzing large datasets to extract actionable insights, collaborating with cross-functional teams to identify opportunities for data-driven solutions, presenting findings and recommendations to stakeholders, and staying current with the latest advancements in data science and machine learning."
  },
  {
    id: "cloud-solutions-architect",
    title: "Cloud Solutions Architect",
    type: "Full-time",
    location: "Remote / Hybrid",
    description: "Design and implement scalable, secure, and cost-effective cloud solutions for our clients using AWS, Azure, or GCP.",
    skills: ["AWS", "Azure", "GCP", "Infrastructure as Code", "Microservices", "Kubernetes"],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "5+ years of experience in cloud architecture",
      "Certifications in major cloud platforms (AWS, Azure, GCP)",
      "Experience with infrastructure as code (Terraform, CloudFormation)",
      "Strong understanding of security best practices in cloud environments"
    ],
    responsibilities: [
      "Design and implement cloud-based solutions for clients",
      "Develop migration strategies from on-premises to cloud",
      "Optimize cloud resources for performance and cost",
      "Implement security controls and best practices",
      "Provide technical leadership and mentorship to junior team members"
    ],
    details: "As a Cloud Solutions Architect, you'll be responsible for designing and implementing cloud-based solutions for clients, developing migration strategies from on-premises to cloud, optimizing cloud resources for performance and cost, implementing security controls and best practices, and providing technical leadership and mentorship to junior team members."
  },
  {
    id: "digital-marketing-specialist",
    title: "Digital Marketing Specialist",
    type: "Full-time",
    location: "Remote / Hybrid",
    description: "Drive our digital marketing strategies to increase brand awareness, generate leads, and support business growth objectives.",
    skills: ["SEO/SEM", "Content Marketing", "Social Media", "Analytics", "Email Marketing"],
    requirements: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "3+ years of experience in digital marketing",
      "Proficiency with marketing automation tools and CRM systems",
      "Experience with SEO/SEM, content marketing, and social media campaigns",
      "Strong analytical skills and data-driven approach"
    ],
    responsibilities: [
      "Develop and execute digital marketing campaigns across multiple channels",
      "Manage SEO/SEM initiatives to improve online visibility",
      "Create engaging content for website, blog, and social media",
      "Track and analyze campaign performance using analytics tools",
      "Collaborate with sales team to generate and nurture leads"
    ],
    details: "As a Digital Marketing Specialist, you'll be responsible for developing and executing digital marketing campaigns across multiple channels, managing SEO/SEM initiatives to improve online visibility, creating engaging content for website, blog, and social media, tracking and analyzing campaign performance using analytics tools, and collaborating with sales team to generate and nurture leads."
  }
];

export default jobsData;
