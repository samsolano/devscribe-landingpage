import React from 'react';
import GroupImage from '../../lib/Group 19.png';

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border" id="contact">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-16">
          <div className="space-y-4 md:max-w-lg">
            <img
              src={GroupImage}
              alt="Devscribe Logo"
              className="h-8 w-auto filter brightness-100"
            />
            <p className="text-muted-foreground text-base leading-relaxed">
              Instantly generate, test, and perfect your API docs with Devscribe
            </p>
          </div>
          <div className="md:mt-0">
            <ul className="flex flex-wrap gap-6 justify-center md:justify-end">
              <li>
                <a href="#product" className="text-base text-muted-foreground hover:text-foreground transition-colors">
                  Product
                </a>
              </li>
              <li>
                <a href="#features" className="text-base text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <button className="text-base text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 