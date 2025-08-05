import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { artistInfo } from '../mock';
import '../styles/artworld.css';
import artistImage from '../assets/244aed_243cb7d5809a4c139f2ed3e941b368c5~mv2_d_3360_5040_s_4_2.webp';

const AboutPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="aboutpage">
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

            {/* About Section */}
            <section className="section-spacing-large">
                <div className="container-artworld">
                    <div className="max-w-3xl mx-auto text-center">
                        <img
                            src={artistImage}
                            alt="Artist portrait"
                            className="mx-auto rounded-full shadow-lg mb-6 fade-in-up"
                            style={{ width: '180px', height: '180px', objectFit: 'cover' }}
                        />
                        <div className="body-text max-w-2xl mx-auto mt-6 fade-in-up fade-in-up-delay-2" style={{ textAlign: 'left' }}>
                            <p>
                                Norwegian born Mina Paasche (1988) holds a Bachelor of Fine Arts from The Art Academy in Trondheim (NTNU) and a Master of Fine Arts from The Art Academy in Bergen (KMD). She also has a Master in Social Work from Aalborg University in Copenhagen (AAU) and a Bachelor from University College Copenhagen (KP). Previously, she has studied art at Holbæk Art Academy and photography and VJ at Engelsholm College of Art and Music in Denmark.
                            </p>
                            <p>
                                Paasche works within the field of artistic research and combines art, cultural probes, ethnography and technology. She has worked in various media including film, video, sound, installation, painting, photography and live performances which have been exhibited at a number of exhibitions both national and internationally at performance and media arts festivals, institutions and galleries.
                            </p> <br/>
                            <p>
                                <strong>Selected references:</strong><br />
                                Room 61, KMD, Bergen (2023), The sculptural garden, College of engineering, design, art & technology, Makerere University, Kampala, Uganda (2022). Pride Art, Copenhagen Pride, Nytorv, Copenhagen, Denmark (2022), SKAP 2022, Sabanci University, Faculty of Arts and Social Sciences, Istanbul, Turkey (2022), Khalil Sakakini Cultural Center, Ramallah, Palestine (2022), Meta.Morph, Trondheim (2022), FLASH, light Biennale, Helsinki (2021), Factory Light Festival, Asker (2021), The Spring Exhibition at Kunsthall Charlottenborg, Copenhagen (2021), Ars Electronica Festival in Linz, Austria (2020), Aarhus Artspace (2020), Gallery Monitor, Gothenburg (2020), Rosendal Teater, Trondheim (2020), Den Frie Utstillings Bygning, Copenhagen (2019, 2016), CPH:DOX Audio:visual (2019), Louisiana Museum of Modern Art (2018), Carpark festival (2018), Plugout festival (2017), modstrøm festival (2017).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section-spacing-large bg-gray-50">
                <div className="container-artworld text-center">
                    <h2 className="artist-name mb-6">Want to collaborate?</h2>
                    <p className="body-text mb-8 max-w-xl mx-auto">
                        I'm open to new projects, exhibitions, and creative partnerships. Reach out to start a conversation.
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

export default AboutPage;