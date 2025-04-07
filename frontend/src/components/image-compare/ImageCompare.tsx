import React, { useState, useRef } from 'react';

interface ImageCompareProps {
  beforeImage: string;
  afterImage: string;
}

const ImageCompare: React.FC<ImageCompareProps> = ({ 
  beforeImage, 
  afterImage
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden" id="product">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={containerRef}
          className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[600px] overflow-hidden rounded-2xl shadow-3xl border-4 border-border"
        >
          {/* Before Image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-top" 
            style={{ 
              backgroundImage: `url(${beforeImage})`,
              backgroundPosition: 'top left',
              backgroundSize: 'cover',
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
            }}
          />

          {/* After Image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-top" 
            style={{ 
              backgroundImage: `url(${afterImage})`,
              backgroundPosition: 'top left',
              backgroundSize: 'cover',
              clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`
            }}
          />

          {/* Slider */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-primary/50 left-1/2 transform -translate-x-1/2"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              w-12 h-12 md:w-16 md:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-6 h-6 md:w-8 md:h-8 rotate-90" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4" 
                />
              </svg>
            </div>
          </div>

          {/* Range Input */}
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderPosition} 
            onChange={handleSliderChange}
            className="absolute w-full h-full top-0 left-0 z-10 opacity-0 cursor-pointer"
            aria-label="Image comparison slider"
          />
        </div>

        {/* Slider Guide */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
              <span className="text-sm text-foreground">Slide left to see Standard Documentation</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-foreground">Slide right to see Devscribe Documentation</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCompare; 