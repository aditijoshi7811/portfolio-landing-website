import React, { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

// --- Icon Components (can be moved to a separate file) ---
const DownloadIcon = () => ( <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> );
const FacebookIcon = () => ( <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg> );
const InstagramIcon = () => ( <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919 4.919 1.266.058 1.644.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg> );
const GithubIcon = () => ( <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> );
const iconMap = { facebook: <FacebookIcon />, instagram: <InstagramIcon />, github: <GithubIcon /> };

// --- NEW Animated StatItem Sub-component ---
const StatItem = ({ value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animate only once

  useEffect(() => {
    if (isInView) {
      // THE FIX: Convert the 'value' prop from a string to a number
      animate(0, Number(value), {
        duration: 2,
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.round(latest);
          }
        },
      });
    }
  }, [isInView, value]);

  return (
    <div className="flex items-baseline gap-2">
      <span ref={ref} className="font-mono text-4xl md:text-5xl font-bold text-white">0</span>
      <span className="font-mono text-zinc-500">{label}</span>
    </div>
  );
};

// --- Main Landing Component ---
const HeroCard = ({ data, imageComponent }) => {
  const { jobTitle, greeting, firstName, lastName, tagline, cvUrl, socialLinks, stats } = data;

  return (
    <section className="hero-card min-h-screen text-zinc-300 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        
        {/* Left Column: Bio and Links */}
        <div className="flex flex-1 flex-col gap-5 items-center text-center md:items-start md:text-left">
          <span className="font-mono text-sm uppercase tracking-wider text-zinc-500">
            {jobTitle}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            {greeting} <br />
            <span className="text-green-400">{firstName}</span> <br />
            <span className="text-green-400">{lastName}</span>
          </h1>
          <p className="font-mono max-w-md text-zinc-400">
            {tagline}
          </p>
          <div className="flex items-center gap-2 pt-4">
            <a href={cvUrl} download className="flex items-center gap-2 rounded-full border border-zinc-600 px-6 py-3 font-mono text-sm transition hover:border-green-400 hover:text-green-400">
              DOWNLOAD CV <DownloadIcon />
            </a>
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-600 transition hover:border-green-400 hover:text-green-400"
              >
                {iconMap[link.name]}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Your Image Component */}
        <div className="flex-shrink-0">
          {imageComponent}
        </div>
      </div>

      {/* Bottom Section: Stats Bar */}
      <div className="mt-20 md:mt-24 pt-12 border-t border-zinc-800 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
        {stats.map((stat) => (
          <StatItem key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default HeroCard;