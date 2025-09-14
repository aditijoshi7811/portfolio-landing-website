import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/aditijoshi7811', // <-- Replace with your URL
      icon: <Github className="h-6 w-6" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aditi-joshi-463680166/', // <-- Replace with your URL
      icon: <Linkedin className="h-6 w-6" />,
    }
  ];

  return (
    <footer className="text-zinc-400 font-mono">
      <div className="lg:mx-8 md:mx-4 sm:mx-0 py-8">
        {/* Top section with name and social links */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-zinc-700 pb-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-xl font-bold text-white hover:text-green-400 transition-colors">
              Aditi Joshi
            </p>
            <p className="text-sm text-zinc-500">Senior Software Developer</p>
          </div>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="hover:text-green-400 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-zinc-500">
            &copy; {currentYear} Aditi Joshi. All rights reserved.
          </p>
          <p className="text-sm text-zinc-500">
            Built with <span className="text-cyan-400">React</span> & <span className="text-sky-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;