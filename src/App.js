import './App.css';
import SpinningBorderAvatar from './components/SpinningBorderAvatar/SpinningBorderAvatar';
import SpinningBorderCard from './components/SpinningBorderCard/SpinningBorderCard';
import TiltingCard from './components/TiltingCard/TiltingCard';
import ExperienceCard from './components/ExperienceCard/ExperienceCard';
import Timeline from './components/Timeline/Timeline';
import HeroCard from './components/HeroCard/HeroCard';
function App() {
  const projectData = {
    title: "Gobi Deluxe Hotel&Resorts",
    description: "A SaaS platform for resort management, integrating payment and booking systems for seamless operation.",
    imageUrl: "https://i.imgur.com/8Q2Wb0k.png",
    liveSiteUrl: "https://gobideluxe.mn",
    techStackIcons: ["N", "ex", "TS", "~", "/"] 
  };

  const educationData = [
    {
      degree: "High school",
      title: "Certificate",
      dateRange: "Aug 31, 2019 - Jun 14, 2022",
      score: "98.5",
      institution: "Oyunii Ireedui Complex - Honorary student",
      isActive: false,
    },
    {
      degree: "Bachelor in",
      title: "Information Technology",
      dateRange: "Aug 31, 2022 - Jun 14, 2026",
      score: "3.7",
      institution: "National University of Mongolia",
      isActive: true, // This one will have the filled radio button
    },
  ];

  // You can place this data in a separate file or directly in your App component
const timelineData = [
  {
    year: "2025",
    description: "It's been quite an exciting year! While studying at uni and working, I developed core dealer-broker systems and successfully organized annual general meetings online for around 10 companies including Khan Bank. I was fortunate to win the Fibo Cloud scholarship among 200+ students, and separately, completed a one-month internship in Japan at Academic Express, where I worked entirely in Japanese! On the side, I've been working with friends on various business projects. It's been challenging balancing everything, but I'm loving every moment of growth and learning.",
    features: [],
    images: [
      { src: "https://i.imgur.com/L5zX0c3.png", alt: "Broker system UI" },
      { src: "https://i.imgur.com/uF15z0n.png", alt: "Gobi Deluxe Hotel website" },
      { src: "https://i.imgur.com/3i4lT2S.png", alt: "Fibo Cloud scholarship winners" },
      { src: "https://i.imgur.com/k2y6n4j.png", alt: "Presenting at Academic Express in Japan" }
    ],
  },
  {
    year: "Early 2024",
    description: "(First job as 2nd year student) Joined BDSEC Securities Company, a financial institution with over 1 million clients, as an IT professional. Worked on the following projects to improve my foundational skills:",
    features: [
      "Dashboard Development - developing dashboard that help keep track of financial data.",
      "Automations - for putting taxes in every stocks transaction with NodeJS app",
      "API Integration - Used datas from two different exchanges to display real-time stocks data",
      "Personal Projects - Learned new technologies in my free time. Built a social media app using PostgreSQL and Supabase for the backend, and TypeScript with Next.js for the frontend"
    ],
    images: [
      { src: "https://i.imgur.com/1BXI89C.png", alt: "Dashboard UI showing financial data" },
      { src: "https://i.imgur.com/rL45eRi.png", alt: "Code editor with a rich text component" }
    ],
  },
  {
    year: "2024",
    description: "Designed and successfully implemented the architecture for a real-time mining commodity exchange system. The system was audited and has an ISO-compliant secure Back-end system. Also implemented non-functional requirements such as periodic archiving and operation logging. This was my first major successful project implementation.",
    features: [],
    images: [
      { src: "https://i.imgur.com/uH79arc.png", alt: "Mining commodity exchange system dashboard" },
      { src: "https://i.imgur.com/NlS0b0s.png", alt: "Mobile and desktop views of the exchange system" }
    ],
  }
];

const myLandingData = {
  jobTitle: "Software Engineer",
  greeting: "Hello I'm",
  firstName: "Radnaabazar",
  lastName: "Bulgan",
  tagline: "IT Specialist & Full-Stack Developer | Pragmatic, delivery-oriented professional",
  cvUrl: "/radnaabazar-bulgan-cv.pdf",
  socialLinks: [
    { name: 'facebook', url: 'https://facebook.com' },
    { name: 'instagram', url: 'https://instagram.com' },
    { name: 'github', url: 'https://github.com' },
  ],
  stats: [
    { value: "21", label: "Age" },
    { value: "3", label: "Years of experience" },
    { value: "20", label: "Projects worked on" },
    { value: "5", label: "Projects Deployed" },
  ],
};

const MyCircularImage = () => (
  <div className="h-64 w-64 md:h-80 md:w-80 rounded-full bg-zinc-800 border-2 border-green-400 flex items-center justify-center text-zinc-500">
    {/* Your actual image would go here */}
    <p>My Image</p>
  </div>
);
  
  return (
    <div>
      {/* <SpinningBorderAvatar
        src="/profile.jpeg"
        size={250}
        speed={8}
        borderWidth={6}
      />
      <SpinningBorderCard
          title="Full-Stack Developer"
          description="Built and maintained a scalable e-commerce platform. Proficient in Node.js, React, and MongoDB. Passionate about cloud infrastructure and CI/CD."
          avatarUrl="/another-avatar.png"
      />
      <TiltingCard
        title={projectData.title}
        description={projectData.description}
        imageUrl={projectData.imageUrl}
        liveSiteUrl={projectData.liveSiteUrl}
        techStackIcons={projectData.techStackIcons}
      /> */}

      {/* {educationData.map((edu, index) => (
        <>
        <ExperienceCard
          key={index}
          degree={edu.degree}
          title={edu.title}
          dateRange={edu.dateRange}
          score={edu.score}
          institution={edu.institution}
          isActive={edu.isActive}
        />
        &nbsp;
        </>
      ))} */}

      {/* <div className="min-h-screen bg-zinc-900 px-4 py-16 sm:px-8 md:px-24">
      <div className="mx-auto max-w-4xl">
        <Timeline data={timelineData} />
      </div>
    </div> */}

    <HeroCard 
        data={myLandingData} 
        imageComponent={<SpinningBorderAvatar
        src="/profile.jpeg"
        size={250}
        speed={8}
        borderWidth={6}
      />} 
      />
    </div>
  );
}

export default App;
