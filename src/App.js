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
import { projectData, educationData, timelineData, myLandingData, shortProfileData } from './utils/constants';
import Footer from './components/Footer/Footer';
import LetsTalk from './components/LetsTalk/LetsTalk';

function App() {
  return (
    <>
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
        <SectionTitle extraClasses={"lg:mt-0"} title={"Education"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
        } />
        <div className="p-10">
          {/* The flex container is correct, no changes needed here */}
          <div className='flex flex-wrap justify-center gap-8'>
            {educationData.map((edu, index) => (
              // --- THIS IS THE FIX ---
              // Wrap each card in a div to control its flex behavior and width.
              <div key={index} className="flex-1 min-w-[380px] max-w-lg">
                <ExperienceCard
                  degree={edu.degree}
                  title={edu.title}
                  dateRange={edu.dateRange}
                  score={edu.score}
                  institution={edu.institution}
                  isActive={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <SectionTitle
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
          </svg>

          }
          title="My Experience"
        />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center p-2'>
          <SpinningBorderCard
            title="Senior Front-End Developer | ContractPodAI"
            description="Spearheaded frontend modernization and performance improvements using React and Vue.js, boosting UI speed, usability, and scalability for a global CLM platform."
            avatarUrl="/3d-design.png"
          />

          <SpinningBorderCard
            title="Senior Software Developer | Kalido"
            description="Delivered scalable front- and back-end solutions (Vue 3, Golang, gRPC) that accelerated hiring workflows and improved platform reliability with ~80% test coverage."
            avatarUrl="/3d-lamp.png"
          />

          <SpinningBorderCard
            title="Senior Software Developer | Xlpat Labs"
            description="Revamped legacy systems into modern Vue.js apps, optimized backend performance, and built widely adopted dashboards to enhance patent search efficiency."
            avatarUrl="/hacker.png"
          />

          <SpinningBorderCard
            title="Software Developer Intern | Xlpat Labs"
            description="Supported SaaS product development through UI/UX analysis, reusable component creation, and QA testing, reducing front-end defects by 15%."
            avatarUrl="/hacker.png"
          />
        </div>


        {/* Project Card */}
        <SectionTitle title={"Projects"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
        } />

        <div id="projects" className='grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center'>
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

        {/* Short profile */}
        <SectionTitle
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          }
          title="Short Profile"
        />
        <ShortProfile data={shortProfileData} />


        {/* Timeline */}
        <SectionTitle
          icon={
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207" />
            </svg>

          }
          title="My journey report"
        />
        <div className="min-h-screen px-4 py-16 sm:px-8 md:px-24">
          <div className="mx-auto max-w-4xl">
            <Timeline data={timelineData} />
          </div>
        </div>

        {/* Let's Talk */}
        <LetsTalk />
      </div>
      <Footer />
    </>

  );
}

export default App;
