import './App.css';
import SpinningBorderAvatar from './components/SpinningBorderAvatar/SpinningBorderAvatar';
import SpinningBorderCard from './components/SpinningBorderCard/SpinningBorderCard';
import TiltingCard from './components/TiltingCard/TiltingCard';
import ExperienceCard from './components/ExperienceCard/ExperienceCard';
import Timeline from './components/Timeline/Timeline';
import HeroCard from './components/HeroCard/HeroCard';
import Nabvar from './components/Navbar/Navbar';
import SectionTitle from './components/SectionTitle/SectionTitle';
import ShortProfile from './components/ShortProfile/ShortProfile';

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
    firstName: "Aditi",
    lastName: "Joshi",
    tagline: "Front-end Specialist & Full-Stack Developer | Pragmatic, delivery-oriented professional",
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

  const shortProfileData = {
    laptopCard: {
      title: "Developer who has built clean, reliable systems for e-commerce, real-time auctions, and stock exchanges",
      imageUrl: "/flat-lay-workstation-with-copy-space-laptop.jpg" // Example image URL
    },
    languagesCard: {
      title: "Fluent in Japanese, English, and Mongolian"
    },
    techStackCard: {
      primary: "NEXT.JS",
      stack: ["ReactJS", ".NET", "Express", "Python", "Typescript", "NextJS"]
    },
    architectCard: {
      title: "Software Architect designer"
    },
    emailCard: {
      title: "Do you want to ask a question?",
      buttonText: "Copy my email address",
      email: "your.email@example.com"
    },
    learningCard: {
      subtitle: "The Inside Scoop",
      title: "Currently learning at university while working",
      code: `// Importing a single module
import moduleName from 'modulePath';

// Importing multiple modules
import { module1, module2 } from 'modulePath';`,
      language: "JavaScript"
    }
  };

  const MyCircularImage = () => (
    <div className="h-64 w-64 md:h-80 md:w-80 rounded-full bg-zinc-800 border-2 border-green-400 flex items-center justify-center text-zinc-500">
      {/* Your actual image would go here */}
      <p>My Image</p>
    </div>
  );

  return (
    <div className="lg:w-[85%] mx-auto">
      <Nabvar />

      {/* Hero Component */}
      <HeroCard
        data={myLandingData}
        imageComponent={<SpinningBorderAvatar
          src="/profile.jpeg"
          size={250}
          speed={8}
          borderWidth={6}
        />}
      />

      {/* Experiences */}
      <SectionTitle title={"Education"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
      } />
      <div className="p-10">
        <div className='flex flex-wrap justify-center gap-8'>
          {educationData.map((edu, index) => (
            <>
              <ExperienceCard
                key={index}
                degree={edu.degree}
                title={edu.title}
                dateRange={edu.dateRange}
                score={edu.score}
                institution={edu.institution}
                isActive={false}
              />
              &nbsp;
            </>
          ))}
        </div>
      </div>

      {/* Projects */}
      <SectionTitle
        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        </svg>

        }
        title="My Experience"
      />
      <SpinningBorderCard
        title="Full-Stack Developer"
        description="Built and maintained a scalable e-commerce platform. Proficient in Node.js, React, and MongoDB. Passionate about cloud infrastructure and CI/CD."
        avatarUrl="/another-avatar.png"
      />

      <SectionTitle title={"Projects"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
      } />
      {/* Project Card */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center'>
        <TiltingCard
          title={projectData.title}
          description={projectData.description}
          imageUrl={projectData.imageUrl}
          liveSiteUrl={projectData.liveSiteUrl}
          techStackIcons={projectData.techStackIcons}
        />

        <TiltingCard
          title={projectData.title}
          description={projectData.description}
          imageUrl={projectData.imageUrl}
          liveSiteUrl={projectData.liveSiteUrl}
          techStackIcons={projectData.techStackIcons}
        />
      </div>

      <SectionTitle
        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
        }
        title="Short Profile"
      />
      <ShortProfile data={shortProfileData} />

      <div className="min-h-screen px-4 py-16 sm:px-8 md:px-24">
        <div className="mx-auto max-w-4xl">
          <Timeline data={timelineData} />
        </div>
      </div>

    </div>
  );
}

export default App;
