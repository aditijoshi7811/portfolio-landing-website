import './App.css';
import SpinningBorderAvatar from './components/SpinningBorderAvatar/SpinningBorderAvatar';
import SpinningBorderCard from './components/SpinningBorderCard/SpinningBorderCard';
function App() {
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
    </div>
  );
}

export default App;
