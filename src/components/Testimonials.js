import React from 'react';

const testimonials = [
  {
    name: 'Holly',
    role: 'Senior Executive',
    feedback: 'Got over 10 job interviews and an offer she accepted',
  },
  {
    name: 'Joshua',
    role: 'Senior Software Engineer',
    feedback: 'Accepted an offer',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What our clients have to say</h2>
        <div className="space-y-8">
          {testimonials.map(({ name, role, feedback }) => (
            <div key={name} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg italic mb-4">"{feedback}"</p>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-gray-600">{role}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a
            href="https://www.reddit.com/r/mobiusengine/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-semibold"
          >
            More customer testimonials at our Linkedin page
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
