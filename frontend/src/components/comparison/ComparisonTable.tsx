import React from 'react';

interface ComparisonItem {
  feature: string;
  ourProduct: boolean | string;
  mintlify: boolean | string;
  scalar: boolean | string;
  redoc: boolean | string;
}

const comparisonData: ComparisonItem[] = [
  {
    feature: 'Feature 1',
    ourProduct: true,
    mintlify: false,
    scalar: true,
    redoc: false
  },
  {
    feature: 'Feature 2',
    ourProduct: 'Advanced',
    mintlify: 'Basic',
    scalar: 'Intermediate',
    redoc: 'Basic'
  },
  // Add more comparison items here
];

const ComparisonTable: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Product Comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left">Features</th>
              <th className="border p-3 text-center">Our Product</th>
              <th className="border p-3 text-center">Mintlify</th>
              <th className="border p-3 text-center">Scalar</th>
              <th className="border p-3 text-center">ReDoc</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border p-3">{item.feature}</td>
                <td className="border p-3 text-center">
                  {typeof item.ourProduct === 'boolean' 
                    ? (item.ourProduct ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    ) : '✗') 
                    : item.ourProduct}
                </td>
                <td className="border p-3 text-center">
                  {typeof item.mintlify === 'boolean' 
                    ? (item.mintlify ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    ) : '✗') 
                    : item.mintlify}
                </td>
                <td className="border p-3 text-center">
                  {typeof item.scalar === 'boolean' 
                    ? (item.scalar ? '✓' : '✗') 
                    : item.scalar}
                </td>
                <td className="border p-3 text-center">
                  {typeof item.redoc === 'boolean' 
                    ? (item.redoc ? '✓' : '✗') 
                    : item.redoc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable; 