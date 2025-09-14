import React, { useState } from 'react';

// --- Sub-components for each card type ---

const LaptopCard = ({ title, imageUrl }) => (
  <div className="relative col-span-1 row-span-2 flex items-end rounded-2xl bg-zinc-800 p-6 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
    <p className="font-mono text-2xl font-bold text-white max-w-xs text-shadow-md">{title}</p>
  </div>
);

const ListCard = ({ title }) => (
  <div className="rounded-2xl bg-zinc-800 p-6">
    <p className="font-mono text-2xl font-bold text-white">{title}</p>
  </div>
);

const TechStackCard = ({ primary, stack }) => (
  <div className="rounded-2xl bg-zinc-800 p-6">
    <p className="font-mono text-sm text-zinc-400 mb-2">My primary tech stack</p>
    <p className="font-mono text-4xl font-bold text-white mb-6">{primary}</p>
    <div className="grid grid-cols-2 gap-2">
      {stack.map(tech => (
        <span key={tech} className="rounded-md bg-zinc-700 px-3 py-1 text-center font-mono text-sm text-zinc-300">{tech}</span>
      ))}
    </div>
  </div>
);

const SmallInfoCard = ({ title, children }) => (
  <div className="rounded-2xl bg-zinc-800 p-6">
    <p className="font-mono text-xl font-bold text-white">{title}</p>
    {children}
  </div>
);

const CodeSnippetCard = ({ title, subtitle, code, language }) => (
  <div className="col-span-1 row-span-2 rounded-2xl bg-zinc-800 p-6">
    <p className="font-mono text-sm text-zinc-400">{subtitle}</p>
    <p className="font-mono text-2xl font-bold text-white mb-4">{title}</p>
    <pre className="rounded-lg bg-[#1e1e2d] p-4 text-sm overflow-x-auto relative">
      <code className="font-mono text-zinc-300">{code}</code>
      <span className="absolute bottom-2 right-4 font-mono text-xs text-zinc-500">{language}</span>
    </pre>
  </div>
);

const EmailCard = ({ title, buttonText, email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // This is a reliable way to copy text in modern browsers
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="rounded-2xl bg-gradient-to-br from-purple-700 to-indigo-900 p-6 flex flex-col justify-between">
      <p className="font-mono text-2xl font-bold text-white">{title}</p>
      <button 
        onClick={handleCopy}
        className="mt-4 flex w-full items-center justify-center gap-3 rounded-md bg-black/50 py-3 text-center font-mono text-sm text-white backdrop-blur-sm transition hover:bg-black/70"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
        {copied ? 'Copied!' : buttonText}
      </button>
    </div>
  );
};

// --- Main ShortProfile Component ---
const ShortProfile = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 m-4">
      <LaptopCard {...data.laptopCard} />
      <ListCard {...data.languagesCard} />
      <TechStackCard {...data.techStackCard} />
      <SmallInfoCard {...data.architectCard}>
        <div className="mt-2 h-1 w-16 bg-zinc-700 rounded-full"></div>
      </SmallInfoCard>
      <EmailCard {...data.emailCard} />
    </div>
  );
};

export default ShortProfile;