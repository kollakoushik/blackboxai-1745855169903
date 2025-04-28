import React from 'react';

const plans = [
  {
    name: 'April Promo',
    price: '$35/wk',
    features: [
      'Search and Curation across 1m+ jobs, every 48 hours',
      'Up to 20 approved job apps/week - human based, no bots, company websites only',
      'Additional apps at $1.5/application',
      'Dedicated application analyst',
      'Up to 10 search criteria & 5 job titles included',
    ],
  },
  {
    name: 'Starter',
    price: '$50/wk',
    features: [],
  },
  {
    name: 'Plus',
    price: '$100/wk',
    features: [
      'Everything in Promo plan',
      'Resume review and feedback report - format and storytelling',
      'Dedicated search specialist',
      'Up to 50 applications/week',
      'Additional apps $1.5/application',
      'Analyst support with 6 hour SLA / PST hours',
    ],
  },
  {
    name: 'Advanced',
    price: '$150/wk',
    features: [
      'Everything in Starter',
      'Up to 75 apps/week',
      'Apply to upto 15 job titles',
      'Analyst support (6-hour SLA)',
      'Dedicated application team on Pacific hours',
      'Custom Resumes & CL\'s',
      'Support for complex search criteria',
      'Up to 20 customized applications/week',
      'Senior advanced application team w/ resume specialist',
      'Access to Founder, CEO and Executive coaches',
    ],
  },
];

const ServicePlans = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Job Application Service Plans</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {plans.map(({ name, price, features }) => (
            <div key={name} className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-2xl font-bold mb-4">{price}</p>
              {features.length > 0 ? (
                <ul className="mb-4 list-disc list-inside text-gray-700 flex-grow">
                  {features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 mb-4">Details coming soon</p>
              )}
              <a
                href="https://www.mobiusengine.ai/plans"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition text-center"
              >
                Sign up now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePlans;
