import React from 'react';

const LetsTalk = () => {
  return (
    <section className="py-20 md:py-32 text-center font-mono">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's <span className="text-green-400">Talk</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          What led you here? What are you looking for? I would love to hear from you over a virtual coffee chat!
        </p>

        {/* Button */}
        <a
          href="mailto:aditijoshi7811@gmail.com" // <-- Replace with your email address
          className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white
                     rounded-lg bg-zinc-800 border-2 border-transparent transition-all duration-300
                     hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-400
                     relative overflow-hidden group"
          style={{
            // Custom styles for the gradient border effect
            backgroundImage: 'linear-gradient(to right, #4ade80, #22d3ee, #6366f1)', // Adjust colors as needed
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
            backgroundSize: '200% 100%', // For hover animation
            backgroundPosition: '100% 0', // Initial position
            transition: 'background-position 0.5s ease-out, border-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundPosition = '0% 0')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundPosition = '100% 0')}
        >
          Let's get in touch
          <span className="ml-2">
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
        </a>
        <p className="text-zinc-500 mt-4 text-sm">
          (Click to open your email client)
        </p>
      </div>
    </section>
  );
};

export default LetsTalk;