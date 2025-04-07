import React from 'react';

const features = [
  {
    name: 'Documentation Generation',
    devscribe: true,
    Mintlify: false,
    Scalar: false,
    ReDoc: false,
  },
  {
    name: 'Text Editing',
    devscribe: true,
    Mintlify: true,
    Scalar: false,
    ReDoc: false,
  },
  {
    name: 'API Testing Playground',
    devscribe: true,
    Mintlify: true,
    Scalar: true,
    ReDoc: false,
  },
  {
    name: 'Custom Themes',
    devscribe: true,
    Mintlify: false,
    Scalar: false,
    ReDoc: true,
  },
  {
    name: 'Github Repo Integration',
    devscribe: true,
    Mintlify: true,
    Scalar: false,
    ReDoc: true,
  },
  {
    name: 'Chat Assist Search',
    devscribe: true,
    Mintlify: true,
    Scalar: false,
    ReDoc: false,
  },
  {
    name: 'Example Code Snippets',
    devscribe: true,
    Mintlify: true,
    Scalar: true,
    ReDoc: true,
  },
  {
    name: 'Toggle Reading Styles',
    devscribe: true,
    Mintlify: false,
    Scalar: false,
    ReDoc: false,
  },
];

const FeatureComparison = () => {
  return (
    <div className="relative py-24 bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Compare with the Competition
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            See how Devscribe stands out from other API documentation platforms
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 px-6 text-left text-foreground font-semibold">Features</th>
                <th className="py-4 px-6 text-center text-foreground font-semibold">Devscribe</th>
                <th className="py-4 px-6 text-center text-foreground font-semibold">Mintlify</th>
                <th className="py-4 px-6 text-center text-foreground font-semibold">Scalar</th>
                <th className="py-4 px-6 text-center text-foreground font-semibold">ReDoc</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr 
                  key={index}
                  className={`border-b border-border ${
                    index % 2 === 0 ? 'bg-card/50' : 'bg-background'
                  }`}
                >
                  <td className="py-4 px-6 text-foreground">{feature.name}</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    {feature.Mintlify ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-destructive/20 text-destructive">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {feature.Scalar ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-destructive/20 text-destructive">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {feature.ReDoc ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-destructive/20 text-destructive">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeatureComparison; 