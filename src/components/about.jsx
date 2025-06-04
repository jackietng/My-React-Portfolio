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
          Hi, I’m Jackie — a junior full stack developer with a background in education, insurance, and public service. I create thoughtful, scalable web applications with React, Node.js, and a deep love for clean, purposeful code.

          I’m passionate about tech that uplifts, simplifies, and empowers — especially for families, educators, and everyday users. When I’m not coding, I’m parenting with intention, learning languages, kickboxing, or cooking up something (literally and figuratively).

          I believe in writing software the way I live life: with clarity, kindness, and curiosity. Let’s build something that matters.
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