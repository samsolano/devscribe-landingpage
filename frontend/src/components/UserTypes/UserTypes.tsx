import React, { useState, useEffect } from 'react';

const userTypes = [
  {
    title: 'AI Agents',
    description: 'Agents who need to understand the API and use it to complete tasks',
    gradientClass: 'group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:via-rose-500 group-hover:to-fuchsia-500',
    glowColor: 'pink-400'
  },
  {
    title: 'Devs',
    description: 'Technical users who need detailed API references and code examples',
    gradientClass: 'group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:via-green-500 group-hover:to-teal-500',
    glowColor: 'emerald-400'
  },
  {
    title: 'Managers',
    description: 'Decision makers who need high-level API understanding and business value',
    gradientClass: 'group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-cyan-500 group-hover:to-sky-500',
    glowColor: 'blue-400'
  }
];

const UserTypes = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRotating) {
        setActiveIndex((prevIndex) => {
          if (prevIndex === null) return 0;
          return (prevIndex + 1) % userTypes.length;
        });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isRotating]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setIsRotating(false);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsRotating(true);
  };

  return (
    <div className="relative py-24 bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-4">
            API docs for every single user
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Our docs are designed to be read by any user, regardless of their role or technical expertise.
          </p>
        </div>
        <div className="flex justify-center space-x-16 items-center relative pb-40 mx-auto max-w-6xl">
          {userTypes.map((type, index) => (
            <div 
              key={index} 
              className={`
                group 
                relative 
                cursor-pointer 
                transform 
                transition-all 
                duration-500
                ${hoveredIndex === index ? '-translate-y-4' : ''}
                ${isRotating && activeIndex === index ? '-translate-y-4' : ''}
              `}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <span className={`
                text-7xl 
                font-black 
                text-foreground/100
                transition-all 
                duration-500
                relative
                inline-block
                bg-clip-text
                ${((!isRotating && hoveredIndex === index) || (isRotating && activeIndex === index)) ? 'text-transparent' : ''}
                bg-[size:400%]
                animate-text-shimmer
                ${((!isRotating && hoveredIndex === index) || (isRotating && activeIndex === index)) ? `bg-gradient-to-r ${
                  type.glowColor === 'emerald-400' ? 'from-emerald-400 via-green-500 to-teal-500' :
                  type.glowColor === 'blue-400' ? 'from-blue-400 via-cyan-500 to-sky-500' :
                  'from-pink-400 via-rose-500 to-fuchsia-500'
                }` : ''}
                ${((!isRotating && hoveredIndex === index) || (isRotating && activeIndex === index)) ? `drop-shadow-[0_0_20px_rgba(${
                  type.glowColor === 'emerald-400' ? '5,150,105' :
                  type.glowColor === 'blue-400' ? '59,130,246' :
                  type.glowColor === 'pink-400' ? '244,114,182' : '0,0,0'
                },0.5)]` : ''}
                ${((!isRotating && hoveredIndex === index) || (isRotating && activeIndex === index)) ? 'scale-110' : ''}
                pb-4
              `}
              style={{
                backgroundSize: '200% auto',
                animation: 'shimmer 3s linear infinite'
              }}
              >
                {type.title}
              </span>
              <div className={`
                absolute 
                left-1/2 
                -translate-x-1/2 
                top-full 
                mt-6 
                z-50 
                transition-all 
                duration-300 
                ease-in-out
                bg-black/90
                backdrop-blur-md 
                border 
                border-border 
                rounded-xl 
                p-4 
                text-center 
                max-w-md 
                w-[500px]
                shadow-2xl
                transform 
                ${((!isRotating && hoveredIndex === index) || (isRotating && activeIndex === index)) ? 'opacity-100 translate-y-2' : 'opacity-0'}
              `}>
                <p className="text-white/80 text-base leading-relaxed">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Add this at the end of your CSS or in your Tailwind config
const style = document.createElement('style');
style.textContent = `
  @keyframes shimmer {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;
document.head.appendChild(style);

export default UserTypes;