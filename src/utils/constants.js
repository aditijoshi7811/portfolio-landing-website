const projectData = {
    title: "Gobi Deluxe Hotel&Resorts",
    description: "A SaaS platform for resort management, integrating payment and booking systems for seamless operation.",
    imageUrl: "https://i.imgur.com/8Q2Wb0k.png",
    liveSiteUrl: "https://gobideluxe.mn",
    techStackIcons: ["N", "ex", "TS", "~", "/"]
};

const educationData = [
  {
    degree: "High School",
    title: "Certificate",
    dateRange: "Sept 2013 – May 2015",
    score: "92%",
    institution: "Govt. Model Sr. Sec. School, Chandigarh",
    isActive: false,
  },
  {
    degree: "Bachelor's in Engineering (HONS)",
    title: "Computer Science / Software Engineering",
    dateRange: "May 2015 – Sept 2019",
    score: "8.2 / 10 GPA",
    institution: "Panjab University",
    isActive: true, // highest completed education
  },
];


// You can place this data in a separate file or directly in your App component
const timelineData = [
  
  {
    year: "2023 – 2025",
    description: "Worked at ContractPodAi as a Senior Frontend Developer on a leading AI-powered Contract Lifecycle Management (CLM) platform.",
    features: [
      "Redesigned Legal Dashboard UI with dynamic widgets, speeding decision-making by 30%",
      "Converted 25+ legacy ASPX pages into Vue components for better maintainability",
      "Boosted performance by consolidating API calls and centralizing state management with Redux",
      "Implemented lazy loading & caching, enhancing performance on low-bandwidth networks"
    ],
    images: [
    ],
  },
  {
    year: "2021 – 2023",
    description: "Worked at Kalido as a Senior Software Engineer, building AI-driven platforms to connect people and opportunities.",
    features: [
      "Developed responsive Vuejs components improving hiring flow by 30%",
      "Built unary & bidirectional gRPC endpoints in Golang with ~80% test coverage",
      "Integrated SendGrid across stack, reducing ops overhead and email errors"
    ],
    images: [
    ],
  },
  {
    year: "2019 – 2021",
    description: "Joined Xlpat Labs, an AI-powered patent research platform, first as an intern and later as a Software Product Developer.",
    features: [
      "Migrated AngularJS/jQuery app to Vue.js, reducing build times by ~40%",
      "Optimized PHP endpoints to improve response times by 20%",
      "Built interactive dashboards with AmCharts – most-used feature of the platform",
      "Integrated MySQL, MongoDB, and Elasticsearch for powerful search functionality"
    ],
    images: [
    ],
  },
  {
    year: "2015 – 2019",
    description: "Completed Bachelor’s in Engineering (HONS) at Panjab University with a GPA of 8.2/10, building a strong foundation in computer science and software development.",
    features: [
      "Core coursework in software engineering, databases, and web technologies",
      "Hands-on projects showcasing problem-solving and development skills"
    ],
    images: [
    ],
  }
];


const myLandingData = {
  jobTitle: "Senior Frontend Developer",
  greeting: "Hello, I'm",
  firstName: "Aditi",
  lastName: "Joshi",
  tagline: "Frontend Specialist & Full-Stack Developer | Experienced in building scalable, high-performance web applications",
  cvUrl: "https://docs.google.com/document/d/1f6ZYQH_HOtKZ3PslqlxmYpjrtdzcZUz09Y9xvrMZaJc", // update with your actual CV file path
  socialLinks: [
    { name: 'linkedin', url: 'https://www.linkedin.com/in/aditi-joshi-463680166/' }, // replace with your LinkedIn URL
    { name: 'github', url: 'https://github.com/aditijoshi7811' },        // replace with your GitHub
    { name: 'instagram', url: 'https://www.instagram.com/aditi0997/' },  
    { name: 'portfolio', url:'#projects'}       // replace with your portfolio site if available
  ],
  stats: [
    { value: "28", label: "Age" },
    { value: "6", label: "Years of Experience" },
    { value: "5", label: "Projects Delivered" },
    { value: "10", label: "Major Deployments" },
  ],
};


const shortProfileData = {
  laptopCard: {
    title: "Front-end Specialist who has built scalable, performant systems for contract lifecycle management, AI-driven hiring platforms, and patent intelligence solutions",
    imageUrl: "/flat-lay-workstation-with-copy-space-laptop.jpg" // Replace with a relevant image
  },
  languagesCard: {
    title: "Fluent in English, Hindi, and Punjabi"
  },
  techStackCard: {
    primary: "Vue.js",
    stack: ["React", "Vue.js", "Angular", "TypeScript", "JavaScript", "Golang", "PHP", "MongoDB", "MySQL","Elasticsearch"]
  },
  architectCard: {
    title: "Frontend & Full-Stack Solution Developer",
  },
  emailCard: {
    title: "Do you want to ask a question?",
    buttonText: "Copy my email address",
    email: "aditijoshi7811@gmail.com"
  },
  learningCard: {
    subtitle: "The Inside Scoop",
    title: "Currently mastering advanced system design, scalable frontend architectures, and backend integrations",
    code: `// Vue 3 Composition API Example
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const increment = () => count.value++;
    return { count, increment };
  }
};`,
    language: "JavaScript"
  }
};

export { projectData, educationData, timelineData, myLandingData, shortProfileData };