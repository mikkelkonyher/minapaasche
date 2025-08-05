
import { Link } from 'react-router-dom';
import { artistInfo, projectCategories, projects } from '../mock';
import '../styles/artworld.css';
import React, { useState } from 'react';

const HomePage = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  // Group projects by category
  const projectsByCategory = projectCategories.map(category => ({
    ...category,
    projects: projects.filter(project => project.category === category.id)
  }));

  return (
    <div className="homepage">
      {/* Header */}
      <header className="section-spacing">
        <div className="container-artworld">
          <nav className="flex justify-between items-center relative">
            <Link to="/" className="nav-link">
              {artistInfo.name}
            </Link>
            {/* Burger button for mobile */}
            <button
                className="md:hidden flex flex-col justify-center items-center w-8 h-8"
                onClick={() => setMenuOpen(open => !open)}
                aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
            {/* Desktop menu */}
            <div className="hidden md:flex gap-8">
              <Link to="/" className="nav-link">Work</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </div>
            {/* Mobile menu */}
            {menuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md flex flex-col gap-4 p-4 md:hidden z-50">
                  <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Work</Link>
                  <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
                  <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
                </div>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-spacing-large">
        <div className="container-artworld">
          <div className="text-center">
            <h1 className="hero-title fade-in-up">
              {artistInfo.name}
            </h1>
            <p className="artist-name mt-4 fade-in-up fade-in-up-delay-1">
              {artistInfo.title} • {artistInfo.location}
            </p>
            <p className="body-text max-w-2xl mx-auto mt-6 fade-in-up fade-in-up-delay-2">
              {artistInfo.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Projects by Category */}
      {projectsByCategory.map((category, categoryIndex) => (
        <section key={category.id} className="section-spacing-large">
          <div className="container-artworld">
            <div className="text-center mb-12">
              <h2 className="artist-name">{category.name}</h2>
              <p className="body-text mt-4 max-w-xl mx-auto">
                {category.description}
              </p>
            </div>
            
            <div className="artist-grid">
              {category.projects.map((project, projectIndex) => (
                <Link 
                  key={project.id}
                  to={`/project/${project.id}`}
                  className={`project-card fade-in-up fade-in-up-delay-${(projectIndex % 3) + 1}`}
                >
                  <div className="project-card-image image-overlay">
                    <img 
                      src={project.coverImage} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="project-card-content">
                    <div className="flex items-center justify-between mb-2">
                      <span className="type-indicator">{project.year}</span>
                      <span className="caption-text">{project.medium}</span>
                    </div>
                    <h3 className="artist-name text-lg">{project.title}</h3>
                    <p className="caption-text mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="section-spacing-large bg-gray-50">
        <div className="container-artworld text-center">
          <h2 className="artist-name mb-6">Interested in my work?</h2>
          <p className="body-text mb-8 max-w-xl mx-auto">
            I'm always open to new projects and collaborations. Let's discuss how we can work together.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-spacing bg-gray-900 text-white">
        <div className="container-artworld">
          <div className="text-center">
            <p className="caption-text text-gray-400">
              © {new Date().getFullYear()} {artistInfo.name}. All rights reserved.
            </p>
            <div className="social-links mt-6">
              <a 
                href={artistInfo.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link border-gray-600 text-gray-400 hover:border-white hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href={artistInfo.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link border-gray-600 text-gray-400 hover:border-white hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href={artistInfo.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link border-gray-600 text-gray-400 hover:border-white hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;