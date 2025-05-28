// src/components/portfolio.jsx
import React from 'react';
import Project from './project';

function Portfolio() {
  const projects = [
    {
      title: "Weather Dashboard",
      description: "This weather dashboard application helps vacationers plan and pick their destinations accordingly by showing real-time weather forecasts for up to 5 days.",
      Technologies: "HTML, Javascript, Node.js with Express.js and Weather Data using OpenWeather API",
      image: "/images/weather-app.png", 
      deployedLink: "https://weather-dashboard-application-ikgn.onrender.com",
      githubLink: "https://github.com/jackietng/Weather-Dashboard-Application"
    }, 
    {
      title: "Knowbie",
      description: "Engaging knowledge-testing platform designed for users of all ages to test their general knowledge across various categories and track progress over time.",
      Technologies: "Front-End: React.js, TypeScript, Tailwind CSS, Recharts (for data visualization), SWR (for efficient data fetching); Back-End: Node.js, API routes, Sequelize, JWT, Bcrypt, Open Trivia API, OpenAI API",
      image: "/images/knowbie.png", 
      deployedLink: "https://knowbie.onrender.com/",
      githubLink: "https://github.com/jackietng/knowbie"
    },
    {
      title: "Bedecked",
      description: "Randomized yet customizable Magic the Gathering deck builder pulling over 90,000 cards from the Scryfall API to allow users to experience both the fun and creativity of Magic the Gathering. ",
      Technologies: "React.js, TypeScript, Node.js, PostgreSQL, Sass, Scryfall API",
      image: "/images/bedecked.png", 
      deployedLink: "https://bedecked.onrender.com/",
      githubLink: "https://github.com/jackietng/bedecked"
    },
    {
      title: "Mood Board",
      description: "A dynamic mood board application that allows users to add images and text to create personalized mood boards",
      Technologies: "HTML, CSS, and JavaScript with local storage for data persistence",
      image: "/images/mood-board.png", 
      deployedLink: "https://jackietng.github.io/Mood-Board/",
      githubLink: "https://github.com/jackietng/Mood-Board"
    },
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