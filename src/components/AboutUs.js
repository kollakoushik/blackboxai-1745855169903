import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <img
              src="https://static.wixstatic.com/media/5bc310_4e0b1ef9b859423da8016acc403cb337~mv2.png/v1/fill/w_124,h_218,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pro%203.png"
              alt="Ashwin - Founder"
              className="mx-auto md:mx-0 rounded-lg shadow-lg w-48 h-auto"
            />
            <h3 className="text-xl font-semibold mt-4">Ashwin</h3>
            <p className="text-gray-700 mt-2">
              Founder of mobiusengine.ai. Accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. Formerly at Google and JP Morgan. MBA from Yale University.
            </p>
            <a
              href="https://www.linkedin.com/in/agrawalashwin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Ashwin's LinkedIn
            </a>
          </div>
          <div className="text-center md:text-left">
            <img
              src="https://static.wixstatic.com/media/41ecaa_b58e267d5c894607b3235816f7171d92~mv2.jpeg/v1/fill/w_157,h_157,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-02-24%20at%206_03_02%20PM.jpeg"
              alt="Nicole - Executive Coach"
              className="mx-auto md:mx-0 rounded-full shadow-lg w-40 h-40 object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">Nicole</h3>
            <p className="text-gray-700 mt-2">
              Executive coach specializing in resume builds and career advisory. B.S. in Business Administration from UC Berkeley with 7+ years in AI-driven product strategy.
            </p>
            <a
              href="https://www.linkedin.com/in/nicole-lau-01414517/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Nicole's LinkedIn
            </a>
          </div>
        </div>
        <div className="text-center mt-10">
          <a
            href="https://www.mobiusengine.ai/about-us"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-semibold"
          >
            Learn more about our Board of Advisors
          </a>
        </div>
        <div className="text-center mt-6">
          <a
            href="https://www.linkedin.com/company/mobiusservices"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-semibold"
          >
            Follow us on our Linkedin page
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
