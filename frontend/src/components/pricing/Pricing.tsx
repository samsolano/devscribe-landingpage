import React, { useState } from 'react';

interface TeamSize {
  size: number;
  multiplier: number;
}

interface BasePlan {
  name: 'Personal' | 'Startup' | 'Professional' | 'Enterprise';
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

interface StandardPlan extends BasePlan {
  name: 'Personal';
  monthlyPrice: string;
  yearlyPrice: string;
}

interface TeamPlan extends BasePlan {
  name: 'Startup' | 'Professional';
  baseMonthlyPrice: number;
  baseYearlyPrice: number;
  teamSizes: TeamSize[];
}

interface EnterprisePlan extends BasePlan {
  name: 'Enterprise';
  monthlyPrice: string;
  yearlyPrice: string;
}

type Plan = StandardPlan | TeamPlan | EnterprisePlan;

const plans: Plan[] = [
  {
    name: 'Personal',
    monthlyPrice: '$0',
    yearlyPrice: '$0',
    description: 'Perfect for getting started',
    features: [
      'Single user',
      'Custom domain',
      'Text editor',
      'Github integration',
      'API testing playground',
      'Basic themes',
      'Example code snippets',
    ],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Startup',
    baseMonthlyPrice: 180,
    baseYearlyPrice: 150,
    teamSizes: [
      { size: 5, multiplier: 1 },
      { size: 10, multiplier: 1.417 },
      { size: 15, multiplier: 1.833 },
    ],
    description: 'Great for small teams and startups',
    features: [
      'Everything in Personal +',
      'Documentation generation',
      'Custom Branding',
      'Chat assist search',
      'Basic analytics',
    ],
    cta: 'Start with Startup',
    popular: false,
  },
  {
    name: 'Professional',
    baseMonthlyPrice: 650,
    baseYearlyPrice: 550,
    teamSizes: [
      { size: 20, multiplier: 1 },
      { size: 30, multiplier: 1.4 },
      { size: 40, multiplier: 1.8 },
    ],
    description: 'Ideal for growing businesses',
    features: [
      'Everything in Startup +',
      'Removed Devscribed branding',
      'Priority email & chat support',
      'Increased chat assist credits',
      'Advanced analytics',
    ],
    cta: 'Go Professional',
    popular: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 'Custom Pricing',
    yearlyPrice: 'Custom Pricing',
    description: 'For large organizations',
    features: [
      'Everything in Professional +',
      'Unlimited team members',
      'End user authentication',
      'Custom analytics',
      '24/7 phone & chat support',
      'Enterprise integrations',
      'Dedicated account manager',
      'SSO Login',
      'SLA guarantees',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedTeamSizes, setSelectedTeamSizes] = useState({
    Startup: 5,
    Professional: 20,
  });

  const getPrice = (plan: Plan): string => {
    if (plan.name === 'Personal' || plan.name === 'Enterprise') {
      return isYearly ? plan.yearlyPrice : plan.monthlyPrice;
    }

    const teamPlan = plan as TeamPlan;
    const selectedSize = teamPlan.teamSizes.find(
      (option) => option.size === selectedTeamSizes[plan.name]
    );
    const basePrice = isYearly ? teamPlan.baseYearlyPrice : teamPlan.baseMonthlyPrice;
    return `$${Math.round(basePrice * (selectedSize?.multiplier || 1))}`;
  };

  const handleTeamSizeChange = (planName: 'Startup' | 'Professional', size: number) => {
    setSelectedTeamSizes((prev) => ({
      ...prev,
      [planName]: size,
    }));
  };

  return (
    <div className="relative py-24 bg-background" id="pricing">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Choose the perfect plan for your business needs
          </p>
          
          {/* Billing Toggle */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className={`text-sm ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 bg-secondary"
            >
              <span
                className={`${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-primary transition-transform`}
              />
            </button>
            <span className={`text-sm ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly <span className="text-primary font-medium">(Save up to 15%)</span>
            </span>
          </div>
        </div>

        <div className="mt-20 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-xl backdrop-blur-sm border ${
                plan.popular
                  ? 'bg-primary/10 border-primary shadow-[0_0_15px_rgba(var(--primary),0.3)] z-10'
                  : 'bg-card/50 border-border'
              } p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(var(--primary),0.2)]`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                  <span className="inline-flex rounded-full bg-primary px-4 py-1 text-sm font-semibold tracking-wide text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                    Popular
                  </span>
                </div>
              )}

              <div className="flex-1">
                <h3 className={`text-2xl font-semibold ${plan.popular ? 'text-primary' : 'text-foreground'}`}>
                  {plan.name}
                </h3>

                <p className={`mt-4 flex items-baseline ${plan.popular ? 'text-primary' : 'text-foreground'}`}>
                  <span className={`${plan.name === 'Enterprise' ? 'text-3xl' : 'text-5xl'} font-extrabold tracking-tight`}>
                    {getPrice(plan)}
                  </span>
                  <span className={`ml-1 ${plan.name === 'Enterprise' ? 'text-3xl text-foreground font-extrabold' : 'text-xl text-muted-foreground font-semibold'}`}>
                    {plan.name === 'Enterprise' ? '' : '/month'}
                  </span>
                </p>
                
                {/* Team Size Selector */}
                {(plan.name === 'Startup' || plan.name === 'Professional') && (
                  <div className="mt-4">
                    <label className="text-sm text-muted-foreground">Team Size:</label>
                    <div className="mt-2 flex gap-2">
                      {plan.teamSizes.map((option) => (
                        <button
                          key={option.size}
                          onClick={() => handleTeamSizeChange(plan.name, option.size)}
                          className={`px-3 py-1 rounded-md text-sm transition-all ${
                            selectedTeamSizes[plan.name] === option.size
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                          }`}
                        >
                          {option.size} users
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {(plan.name === 'Startup' || plan.name === 'Professional') && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    Up to {selectedTeamSizes[plan.name]} team members
                  </p>
                )}

                <p className="mt-6 text-base text-muted-foreground">
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className={`flex-shrink-0 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-muted-foreground">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-8 w-full rounded-md px-4 py-2 text-base font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.5)] hover:shadow-[0_0_25px_rgba(var(--primary),0.65)] hover:bg-primary/90'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing; 