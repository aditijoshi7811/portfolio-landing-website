import React, { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';
import Tooltip from '../Tooltip/Tooltip';
import { EyeIcon } from 'lucide-react';
import {FacebookIcon, InstagramIcon, GithubIcon, LinkedInIcon, Portolio} from './HeroCardIcons';


const iconMap = { facebook: <FacebookIcon />, instagram: <InstagramIcon />, github: <GithubIcon /> , linkedin: <LinkedInIcon />, portfolio: <Portolio /> };

// --- NEW Animated StatItem Sub-component ---
const StatItem = ({ value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animate only once

  useEffect(() => {
    if (isInView) {
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
    <section className="hero-card min-h-screen text-zinc-300 p-8 sm:pb-9 md:p-16 md:pt-0 md:pb-16 lg:p-24 lg:pt-0 lg:pb-0 flex flex-col justify-center">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-16">
        
        {/* Left Column: Bio and Links */}
        <div className="flex flex-1 flex-col gap-5 items-center text-center lg:items-start md:text-left">
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
            {/* --- WRAP DOWNLOAD BUTTON WITH TOOLTIP --- */}
            <Tooltip text="View my CV">
              <a href={cvUrl} target='_blank' rel="noreferrer" className="flex items-center gap-2 rounded-full border border-zinc-600 px-6 py-3 font-mono text-sm transition hover:border-green-400 hover:text-green-400">
                View CV <EyeIcon/>
              </a>
            </Tooltip>
            
            {/* --- WRAP SOCIAL LINKS WITH TOOLTIP --- */}
            {socialLinks.map((link) => (
              <Tooltip key={link.name} text={`${link.name}`}>
                <a 
                  href={link.url} 
                  target={link.url.startsWith('#') ? '_self' : '_blank'}
                  rel={link.url.startsWith('#') ? undefined : 'noopener noreferrer'} 
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-600 transition hover:border-green-400 hover:text-green-400"
                >
                  {iconMap[link.name]}
                </a>
              </Tooltip>
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