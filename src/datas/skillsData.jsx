import {
  FaAws,
  FaBootstrap,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaPhp,
  FaReact,
  FaServer,
} from "react-icons/fa";
import {
  SiCodeigniter,
  SiPostman,
  SiStripe,
  SiTailwindcss,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const getProficiencyLevel = (percentage) => {
  if (percentage >= 90) return "Expert";
  if (percentage >= 70) return "Advanced";
  if (percentage >= 50) return "Intermediate";
  return "Beginner";
};

export const skills = [
  // Backend
  {
    id: 1,
    name: "Laravel",
    level: 95,
    proficiency: "Expert",
    category: "backend",
    icon: <FaLaravel className="text-red-500" />,
  },
  {
    id: 2,
    name: "CodeIgniter",
    level: 90,
    proficiency: "Expert",
    category: "backend",
    icon: <SiCodeigniter className="text-[#dd4814]" />,
  },
  {
    id: 3,
    name: "MySQL",
    level: 95,
    proficiency: "Expert",
    category: "backend",
    icon: <FaDatabase className="text-blue-500" />,
  },
  {
    id: 4,
    name: "REST APIs",
    level: 90,
    proficiency: "Expert",
    category: "backend",
    icon: <FaServer className="text-green-500" />,
  },
  {
    id: 5,
    name: "PHP",
    level: 90,
    proficiency: "Expert",
    category: "backend",
    icon: <FaPhp className="text-[#777BB3]" />,
  },

  // Frontend
  {
    id: 6,
    name: "Bootstrap",
    level: 90,
    proficiency: "Expert",
    category: "frontend",
    icon: <FaBootstrap className="text-[#7952B3]" />,
  },
  {
    id: 7,
    name: "JQuery",
    level: 80,
    proficiency: "Advanced",
    category: "frontend",
    icon: <FaJs className="text-[#0769AD]" />,
  },
  {
    id: 8,
    name: "JavaScript",
    level: 60,
    proficiency: "Intermediate",
    category: "frontend",
    icon: <FaJs className="text-yellow-400" />,
  },
  {
    id: 9,
    name: "AJAX",
    level: 60,
    proficiency: "Intermediate",
    category: "frontend",
    icon: <FaJs className="text-blue-400" />,
  },
  {
    id: 10,
    name: "HTML/CSS",
    level: 95,
    proficiency: "Expert",
    category: "frontend",
    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    id: 11,
    name: "React JS",
    level: 20,
    proficiency: "Beginner",
    category: "frontend",
    icon: <FaReact className="text-blue-400" />,
  },
  {
    id: 12,
    name: "Tailwind CSS",
    level: 50,
    proficiency: "Intermediate",
    category: "frontend",
    icon: <SiTailwindcss className="text-cyan-400" />,
  },

  // Tools
  {
    id: 13,
    name: "Git/GitHub",
    level: 70,
    proficiency: "Advanced",
    category: "tools",
    icon: <FaGitAlt className="text-orange-600" />,
  },
  {
    id: 14,
    name: "Postman",
    level: 80,
    proficiency: "Advanced",
    category: "tools",
    icon: <SiPostman className="text-[#FF6C37]" />,
  },
  {
    id: 15,
    name: "VS Code",
    level: 90,
    proficiency: "Expert",
    category: "tools",
    icon: <VscCode className="text-blue-500" />,
  },

  // services
  {
    id: 16,
    name: "AWS (S3, SNS)",
    level: 70,
    proficiency: "Advanced",
    category: "services",
    icon: <FaAws className="text-[#FF9900]" />,
  },
  {
    id: 17,
    name: "Stripe",
    level: 70,
    proficiency: "Advanced",
    category: "services",
    icon: <SiStripe className="text-[#6772E5]" />,
  },
].map((skill) => ({
  ...skill,
  proficiency: getProficiencyLevel(skill.level),
}));

export const categories = [
  { id: "all", name: "All Skills" },
  { id: "backend", name: "Backend" },
  { id: "frontend", name: "Frontend" },
  { id: "tools", name: "Tools" },
  { id: "services", name: "Services" },
];
