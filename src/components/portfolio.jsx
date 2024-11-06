// src/components/portfolio.jsx
import React from 'react';
import Project from './project';

function Portfolio() {
  const projects = [
    {
      title: "Weather Dashboard",
      description: "This weather dashboard application helps vacationers plan and pick their destinations accordingly by showing real-time weather forecasts for up to 5 days.",
      Technologies: "HTML, Javascript, Node.js with Express.js and Weather Data using OpenWeather API",
      image: "/images/weather_app.jpg", 
      deployedLink: "https://weather-dashboard-application-ikgn.onrender.com",
      githubLink: "https://github.com/jackietng/Weather-Dashboard-Application"
    }    
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;