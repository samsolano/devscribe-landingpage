import React from 'react';

const SupportSection = () => {
  return (
    <section className="relative py-16 bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Want to contribute?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are looking to build Devscribe with the exact specifications that you need. Contact us to become a co-creator of Devscribe.
          </p>
          <div className="mt-8">
            <a
              href="https://shadcnblocks.com"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors duration-300"
            >
              Contact us today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection; 