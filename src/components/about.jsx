// src/components/about.jsx
import React from 'react';

function About() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <img
            src="/images/profile.jpg" // Add your photo path here
            alt="Developer"
            className="w-48 h-48 shadow-lg mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800">About Me</h1>
        </div>
        
        <div className="prose lg:prose-lg mx-auto">
          <p className="text-gray-600 leading-relaxed mb-4">
            Hello!  
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
          My name is Jacqueline Nguyen. I also go by "Jackie." I was a Financial Aid Specialist with over 6 years of experience in reviewing financial aid regulations and data for both university and community college students. I am now a proud stay-at-home mom with a vivacious 1-year-old. My empathy, eargerness to learn, and curiosity allow me to understand and question applications both from the user and technical perspective. In addition to learning coding, I also enjoy exploring new foods and reading in my free time.
          </p>
                            
          <p className="text-gray-600 leading-relaxed mb-4">
            Please feel free to check out my portfolio or send me a message if you want to connect. 😊
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;