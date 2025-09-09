import './App.css';
import SpinningBorderAvatar from './components/SpinningBorderAvatar/SpinningBorderAvatar';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <SpinningBorderAvatar
        src="/profile.jpeg"
        size={250}
        speed={8}
        borderWidth={6}
      />
    </div>
  );
}

export default App;
