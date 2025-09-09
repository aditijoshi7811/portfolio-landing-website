import './App.css';
import SpinningBorderAvatar from './components/SpinningBorderAvatar/SpinningBorderAvatar';
import SpinningBorderCard from './components/SpinningBorderCard/SpinningBorderCard';
import TiltingCard from './components/TiltingCard/TiltingCard';

function App() {
  const projectData = {
    title: "Gobi Deluxe Hotel&Resorts",
    description: "A SaaS platform for resort management, integrating payment and booking systems for seamless operation.",
    imageUrl: "https://i.imgur.com/8Q2Wb0k.png",
    liveSiteUrl: "https://gobideluxe.mn",
    techStackIcons: ["N", "ex", "TS", "~", "/"] 
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <SpinningBorderAvatar
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
      />
    </div>
  );
}

export default App;
