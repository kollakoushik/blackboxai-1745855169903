import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
        Land job interviews 10x faster
      </h1>
      <div className="max-w-4xl mx-auto text-left space-y-4 text-lg md:text-xl">
        <p><strong>Step 1:</strong> Submit Intake Form</p>
        <p><strong>Step 2:</strong> We do the search and curation for list of jobs</p>
        <p><strong>Step 3:</strong> You approve, we do the tedious part (applying)</p>
        <p><strong>Step 4:</strong> You get the interviews</p>
      </div>
      <div className="mt-10">
        <img
          src="https://static.wixstatic.com/media/41ecaa_ece949177dc14b438c5b2501ca635540~mv2.png/v1/crop/x_0,y_93,w_1592,h_2061/fill/w_173,h_224,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-10-15%20at%205_26_08%20PM.png"
          alt="Mobius Engine process"
          className="mx-auto rounded-lg shadow-lg max-w-xs"
        />
      </div>
      <div className="mt-8">
        <a
          href="https://drive.google.com/file/d/1v-LCTCc3yMW3gAGHXbrwNYs4C0C7oblf/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Download our free E-Book
        </a>
      </div>
    </section>
  );
};

export default Hero;
