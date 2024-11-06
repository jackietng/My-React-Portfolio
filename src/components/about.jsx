// src/components/About.jsx
import React from 'react';

function About() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <img
            src="/images/ProfilePic.jpg" // Add your photo path here
            alt="Developer"
            className="w-48 h-48 rounded-full shadow-lg mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800">About Me</h1>
        </div>
        
        <div className="prose lg:prose-lg mx-auto">
          <p className="text-gray-600 leading-relaxed mb-4">
            Hello! My name is Jacqueline Nguyen. I also go by "Jackie". I am a Financial Aid Specialist with over 6 years of experience in reviewing financial aid regulations and data for both university and community college students. My empathy, eargerness to learn, and curiosity allow me to understand and question applications both from the user and technical perspective. In addition to learning coding, I also enjoy exploring new foods and reading in my free time. 
          </p>
                            
          <p className="text-gray-600 leading-relaxed">
            Please feel free to check out my portfolio or reach out if you'd like to connect!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;