import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const rotatingWords = ['generate', 'test', 'perfect', 'manage'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  async function handleSubmit (e: React.FormEvent) {
    e.preventDefault();
    // Confetti effect with a mix of vibrant colors, including more yellow tones
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: [
        '#26ccff', // bright blue
        '#a25afd', // purple
        '#ff5e7e', // coral pink
        '#88ff5a', // lime green
        '#fcff42', // bright yellow
        '#ff4f81', // hot pink
        '#42f4ff',  // cyan
        '#ffd700',  // golden yellow
        '#ffff00',  // pure yellow
        '#ffe135'   // banana yellow
      ]
    });

    // Here you would typically integrate with your email service
    setStatus('You\'ve joined our waitlist! We\'ll reach out when we\'re live for testing.');
    setEmail('');

    await fetch('/api/emails', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Sam'
      })
    })


  }

  return (
    <div className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-20">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Announcement Banner */}
          <div className="mb-8 md:mb-4 inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-6 py-2 text-sm font-medium text-primary">
            <span className="mr-2">📣</span>
            <span>Version 1.0 will be live 4/26</span>
          </div>

          <h1 className="text-4xl tracking-tight font-extrabold text-foreground sm:text-6xl md:text-7xl leading-tight text-center">
            <span className="block mb-3 md:mb-2 relative">
              <span>Instantly</span>
              <span className="relative inline-block overflow-visible align-bottom ml-4" style={{ minWidth: '240px', height: '120px', verticalAlign: 'bottom', position: 'relative' }}>
                {rotatingWords.map((word, index) => (
                  <span
                    key={word}
                    className={`text-primary absolute left-0 w-full text-left`}
                    style={{
                      transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: `translateY(${((index - currentIndex + rotatingWords.length) % rotatingWords.length) * 25}%)`,
                      opacity: index === currentIndex ? 1 : 0,
                      willChange: 'transform, opacity',
                      bottom: '0px',
                      position: 'absolute',
                      left: '0',
                      right: '0',
                      overflow: 'visible'
                    }}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </span>
            <span className="block mt-4 md:mt-0">
              your API docs all in one place
            </span>
          </h1>
          <p className="mt-8 md:mt-6 max-w-3xl mx-auto text-lg md:text-2xl text-muted-foreground leading-relaxed px-4">
            Devscribe boosts your team's efficiency by automating and managing your API documentation with ease.
          </p>
          
          {/* Email Signup Form */}
          <div className="mt-12 max-w-xl mx-auto px-4">
            {/* <form onSubmit={console.log(email); handleSubmit;} className="flex flex-col sm:flex-row gap-4 justify-center"> */}
            <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => {
                    e.preventDefault(); // Prevent default form submission
                    console.log(email);
                    handleSubmit(e);
                  }}>
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-6 py-3 rounded-lg bg-secondary text-secondary-foreground border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:outline hover:outline-2 hover:outline-white text-lg"
                />
              </div>
              <div className="rainbow-button">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 whitespace-nowrap text-lg font-medium"
                >
                  Get updates
                </button>
              </div>
            </form>
            {status && (
              <p className="mt-4 text-base text-primary animate-fade-in">
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// Add this to your index.css or a new styles file
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`;
document.head.appendChild(style); 