import React from 'react';

const ResumeCoaching = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Resume Building & Coaching</h2>
        <p className="mb-8 text-lg">
          Schedule a call with us to discuss more
        </p>
        <div className="bg-gray-100 rounded-lg p-8 text-left">
          <h3 className="text-xl font-semibold mb-4">Resume Rebuild</h3>
          <p className="text-lg font-bold mb-2">$1000 one-time</p>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>Rebuild your resume to position you in the strongest possible way toward a seniority, specific company, industry, or function</li>
            <li>Coaching sessions - 3x / 30 minutes</li>
            <li>Best for Senior to VP level positioning</li>
            <li>Focus is on storytelling rather than moving words and format around</li>
            <li>Work directly with our co-founder who has 20+ years of leadership experience at Google and JP Morgan</li>
            <li>Work with our Executive coach (UC Berkeley, 10+ years of executive experience)</li>
            <li>Resume Rebuild portfolio available upon request</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">Interview Prep</h3>
          <p className="text-lg font-bold mb-2">$500 one-time</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Two 45-minute sessions with our co-founder, who has hired/coached 100's at Google, JP Morgan, and Reuters</li>
            <li>Targeted and real-time interview feedback</li>
            <li>Focus on clarity, confidence, empathy, communicating value</li>
            <li>Senior to executive roles, both technical and non technical</li>
          </ul>
        </div>
        <div className="mt-8">
          <a
            href="https://www.mobiusengine.ai/plans"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Sign up now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeCoaching;
