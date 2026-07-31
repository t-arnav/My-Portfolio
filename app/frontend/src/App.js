import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes, FaGraduationCap, FaCode, FaCloud, FaTools, FaBriefcase, FaCertificate, FaExternalLinkAlt, FaChevronUp, FaGithub, FaHandPaper, FaServer } from 'react-icons/fa';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Show scroll to top button
      setShowScrollTop(window.pageYOffset > 400);

      // Update active section
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold gradient-text">Arnav Tripathi</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`nav-link text-gray-300 hover:text-white px-3 py-2 text-sm font-medium ${
                      activeSection === item.toLowerCase() ? 'active text-blue-400' : ''
                    }`}
                    data-testid={`nav-${item.toLowerCase()}-link`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
                data-testid="mobile-menu-button"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 rounded ${
                    activeSection === item.toLowerCase() ? 'text-blue-400 bg-slate-700' : ''
                  }`}
                  data-testid={`mobile-nav-${item.toLowerCase()}-link`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="section pt-24" data-testid="hero-section">
        <div className="max-w-7xl mx-auto animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Portrait Image */}
            <div className="flex justify-center md:justify-end order-2 md:order-1">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <img
                  src="/arnav.jpeg"
                  alt="Arnav Tripathi"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-blue-400/30"
                  data-testid="hero-portrait"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left order-1 md:order-2 mb-6">
              <p className="text-blue-400 text-sm md:text-base font-medium mb-4" data-testid="hero-greeting">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl font-bold mb-4" data-testid="hero-name">
                ARNAV TRIPATHI
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold gradient-text mb-6" data-testid="hero-title">
                Computer Science Student & Software Developer
              </h2>
              <p className="text-gray-400 text-lg md:text-xl mb-8" data-testid="hero-description">
                Passionate about building robust backend systems and exploring cloud technologies. 
                Specializing in Java, Spring Boot, and Google Cloud Platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-8">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="btn-primary px-8 py-3 rounded-lg font-semibold text-white"
                  data-testid="view-work-button"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-secondary px-8 py-3 rounded-lg font-semibold text-white"
                  data-testid="contact-me-button"
                >
                  Contact Me
                </button>
              </div>

              <div className="flex justify-center md:justify-start gap-6">
                <a
                  href="https://linkedin.com/in/arnavtripathiiii25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  data-testid="hero-linkedin-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href="mailto:arnav2506tripathi@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  data-testid="hero-email-link"
                  aria-label="Email"
                >
                  <FaEnvelope size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-alt" data-testid="about-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" data-testid="about-heading">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8 animate-slide-up">
              <div className="flex items-center gap-3 mb-4">
                <FaGraduationCap className="text-blue-400 text-3xl" />
                <h3 className="text-2xl font-semibold" data-testid="education-heading">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="text-xl font-semibold text-gray-200" data-testid="degree-name">
                  Bachelor of Technology
                </p>
                <p className="text-gray-300" data-testid="major">Computer Science and Engineering</p>
                <p className="text-blue-400 font-medium" data-testid="university">
                  Galgotias College of Engineering and Technology
                </p>
                <p className="text-gray-400" data-testid="location">Noida, India</p>
                <p className="text-gray-400" data-testid="duration">Oct 2023 - June 2027</p>
                <p className="text-gray-400" data-testid="gpa">GPA: 6.75/10</p>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 animate-slide-up">
              <h3 className="text-2xl font-semibold mb-4" data-testid="about-me-heading">Who I Am</h3>
              <div className="space-y-4 text-gray-300">
                <p data-testid="about-paragraph-1">
                  I'm a dedicated Computer Science student with a strong passion for backend development 
                  and cloud technologies. Currently pursuing my B.Tech at Galgotias College of Engineering 
                  and Technology, I specialize in building scalable applications using Java and Spring Boot.
                </p>
                <p data-testid="about-paragraph-2">
                  My experience includes coordinating technical initiatives at GFG Campus Body and 
                  conducting quality assurance testing for Nothing Technology Limited. I'm constantly 
                  exploring new technologies and contributing to the developer community.
                </p>
                <p data-testid="about-paragraph-3">
                  I believe in writing clean, maintainable code and following best practices in 
                  software development. Always eager to learn and take on new challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-alt bg-slate-900/50" data-testid="skills-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" data-testid="skills-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="glass rounded-2xl p-8 card-hover" data-testid="programming-skills-card">
              <div className="flex items-center gap-3 mb-6">
                <FaCode className="text-blue-400 text-3xl" />
                <h3 className="text-xl font-semibold" data-testid="programming-heading">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Java', 'Python', 'SQL', 'Spring Boot', 'REST APIs'].map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-4 py-2 rounded-full text-sm font-medium"
                    data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud Technologies */}
            <div className="glass rounded-2xl p-8 card-hover" data-testid="cloud-skills-card">
              <div className="flex items-center gap-3 mb-6">
                <FaCloud className="text-blue-400 text-3xl" />
                <h3 className="text-xl font-semibold" data-testid="cloud-heading">Cloud Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Google Cloud Platform', 'BigQuery', 'Looker', 'Vertex AI', 'Firebase', 'Cloud Monitoring'].map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-4 py-2 rounded-full text-sm font-medium"
                    data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Competencies */}
            <div className="glass rounded-2xl p-8 card-hover" data-testid="core-skills-card">
              <div className="flex items-center gap-3 mb-6">
                <FaTools className="text-blue-400 text-3xl" />
                <h3 className="text-xl font-semibold" data-testid="core-heading">Core Competencies</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Software Testing', 'Database Management', 'Operating Systems', 'DevOps', 'Data Structures', 'Algorithms'].map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-4 py-2 rounded-full text-sm font-medium"
                    data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-alt" data-testid="experience-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" data-testid="experience-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <div className="space-y-8">
            {/* Experience 1 */}
            <div className="glass rounded-2xl p-8 card-hover" data-testid="experience-gfg-card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-2" data-testid="experience-gfg-title">
                    Creative Team Coordinator
                  </h3>
                  <p className="text-xl text-gray-200 mb-2" data-testid="experience-gfg-company">
                    GFG Campus Body - GCET Noida
                  </p>
                  <p className="text-gray-400 flex items-center gap-2" data-testid="experience-gfg-location">
                    <FaMapMarkerAlt /> Greater Noida, India
                  </p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0" data-testid="experience-gfg-duration">
                  Nov 2024 - Aug 2025
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3" data-testid="experience-gfg-responsibility-1">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Lead creative initiatives and technical content development for campus community of 500+ students</span>
                </li>
                <li className="flex gap-3" data-testid="experience-gfg-responsibility-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Coordinate technical workshops and coding events, promoting collaborative learning and skill development</span>
                </li>
                <li className="flex gap-3" data-testid="experience-gfg-responsibility-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Manage cross-functional team collaboration to deliver engaging educational content and community programs</span>
                </li>
                <li className="flex gap-3" data-testid="experience-gfg-responsibility-4">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Drive student engagement through innovative problem-solving sessions and technical challenges</span>
                </li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="glass rounded-2xl p-8 card-hover" data-testid="experience-nothing-card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-2" data-testid="experience-nothing-title">
                    Beta Testing Program Participant
                  </h3>
                  <p className="text-xl text-gray-200 mb-2" data-testid="experience-nothing-company">
                    Nothing Technology Limited
                  </p>
                  <p className="text-gray-400 flex items-center gap-2" data-testid="experience-nothing-location">
                    <FaMapMarkerAlt /> Remote
                  </p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0" data-testid="experience-nothing-duration">
                  Dec 2024 - June 2025
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3" data-testid="experience-nothing-responsibility-1">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Conducted comprehensive quality assurance testing on Android-based operating systems for unreleased smartphone devices</span>
                </li>
                <li className="flex gap-3" data-testid="experience-nothing-responsibility-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Identified, documented, and reported critical bugs and system vulnerabilities using structured log analysis</span>
                </li>
                <li className="flex gap-3" data-testid="experience-nothing-responsibility-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Collaborated with engineering teams to verify bug fixes and validate system improvements across software updates</span>
                </li>
                <li className="flex gap-3" data-testid="experience-nothing-responsibility-4">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Demonstrated attention to detail and systematic approach to software testing and quality assurance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-alt bg-slate-900/50" data-testid="projects-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" data-testid="projects-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid md:grid-cols-1 gap-8">
            {/* PMIS Portal Project */}
            <div className="glass rounded-2xl p-8 card-hover" data-testid="project-pmis-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-2" data-testid="project-pmis-title">
                    PMIS – Placement Management Information System
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://pmis-app.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 flex items-center gap-2 transition-colors"
                      data-testid="project-pmis-live-link"
                    >
                      <FaExternalLinkAlt size={14} /> Live Demo
                    </a>
                    <a
                      href="https://github.com/t-arnav/PMIS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 flex items-center gap-2 transition-colors"
                      data-testid="project-pmis-github-link"
                    >
                      <FaGithub size={16} /> GitHub
                    </a>
                  </div>
                </div>
                <FaServer className="text-blue-400 text-3xl" />
              </div>

              <p className="text-gray-300 mb-6" data-testid="project-pmis-description">
                A full-stack placement portal built end-to-end and deployed to production, serving as one of
                my primary resume-anchor projects.
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-200">Key Features:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex gap-3" data-testid="project-pmis-feature-1">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Built a full-stack web application using Node.js, Express, MongoDB, and EJS templating</span>
                  </li>
                  <li className="flex gap-3" data-testid="project-pmis-feature-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Deployed the application live to Render with a connected MongoDB Atlas database</span>
                  </li>
                  <li className="flex gap-3" data-testid="project-pmis-feature-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Debugged and resolved production environment variable mismatches and MongoDB Atlas connection string issues during deployment</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Express', 'MongoDB', 'EJS'].map((tech) => (
                  <span
                    key={tech}
                    className="skill-tag px-4 py-2 rounded-full text-sm font-medium"
                    data-testid={`project-pmis-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Hand Gesture Control Project */}
            <div className="glass rounded-2xl p-8 card-hover" data-testid="project-gesture-control-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-2" data-testid="project-gesture-control-title">
                    Hand Gesture Control System
                  </h3>
                </div>
                <FaHandPaper className="text-blue-400 text-3xl" />
              </div>

              <p className="text-gray-300 mb-6" data-testid="project-gesture-control-description">
                A computer-vision project that lets you control your computer through hand gestures alone,
                built and refined using OpenCV and MediaPipe.
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-200">Key Features:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex gap-3" data-testid="project-gesture-control-feature-1">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Used OpenCV and MediaPipe for real-time hand tracking and landmark detection via webcam</span>
                  </li>
                  <li className="flex gap-3" data-testid="project-gesture-control-feature-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Mapped recognized hand gestures to mouse movement and click actions</span>
                  </li>
                  <li className="flex gap-3" data-testid="project-gesture-control-feature-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Extended gesture mappings to trigger Windows system-level controls</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Python', 'OpenCV', 'MediaPipe'].map((tech) => (
                  <span
                    key={tech}
                    className="skill-tag px-4 py-2 rounded-full text-sm font-medium"
                    data-testid={`project-gesture-control-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-8 card-hover" data-testid="project-shortyurl-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-2" data-testid="project-shortyurl-title">
                    ShortyURL – Backend Based URL Shortener
                  </h3>
                  <p className="text-gray-400" data-testid="project-shortyurl-duration">Nov 2025 - Mar 2026</p>
                </div>
                <FaBriefcase className="text-blue-400 text-3xl" />
              </div>

              <p className="text-gray-300 mb-6" data-testid="project-shortyurl-description">
                A comprehensive backend service designed to generate short URLs and redirect users to original URLs 
                with robust error handling and standardized API responses.
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-200">Key Features:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex gap-3" data-testid="project-shortyurl-feature-1">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Built a backend service to generate short URLs and redirect users to original URLs</span>
                  </li>
                  <li className="flex gap-3" data-testid="project-shortyurl-feature-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Designed structured API responses using a reusable ResponseBuilder utility</span>
                  </li>
                  <li className="flex gap-3" data-testid="project-shortyurl-feature-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Implemented centralized error handling using custom exceptions and standardized API error models</span>
                  </li>
                  <li className="flex gap-3" data-testid="project-shortyurl-feature-4">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Developed unit tests with JUnit and Mockito for response and exception workflows</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Java', 'Spring Boot', 'REST APIs', 'JUnit', 'Mockito'].map((tech) => (
                  <span
                    key={tech}
                    className="skill-tag px-4 py-2 rounded-full text-sm font-medium"
                    data-testid={`project-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-alt" data-testid="certifications-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" data-testid="certifications-heading">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 card-hover text-center" data-testid="certification-oracle-card">
              <FaCertificate className="text-blue-400 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-200" data-testid="certification-oracle-title">
                Oracle Cloud Infrastructure 2025
              </h3>
              <p className="text-blue-400 font-medium mb-2" data-testid="certification-oracle-subtitle">
                Certified AI Foundations Associate
              </p>
              <p className="text-gray-400" data-testid="certification-oracle-issuer">Oracle</p>
            </div>

            <div className="glass rounded-2xl p-8 card-hover text-center" data-testid="certification-deloitte-card">
              <FaCertificate className="text-blue-400 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-200" data-testid="certification-deloitte-title">
                Technology Job Simulation
              </h3>
              <p className="text-blue-400 font-medium mb-2" data-testid="certification-deloitte-subtitle">
                Deloitte Australia
              </p>
              <p className="text-gray-400" data-testid="certification-deloitte-issuer">Deloitte</p>
            </div>

            <div className="glass rounded-2xl p-8 card-hover text-center" data-testid="certification-gdg-card">
              <FaCertificate className="text-blue-400 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-200" data-testid="certification-gdg-title">
                GDG Solution Challenge
              </h3>
              <p className="text-blue-400 font-medium mb-2" data-testid="certification-gdg-subtitle">
                Participant
              </p>
              <p className="text-gray-400" data-testid="certification-gdg-issuer">Google Developer Groups</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-alt bg-slate-900/50" data-testid="contact-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" data-testid="contact-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg mb-12" data-testid="contact-description">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. 
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="mailto:arnav2506tripathi@gmail.com"
              className="glass rounded-2xl p-8 card-hover block"
              data-testid="contact-email-card"
            >
              <FaEnvelope className="text-blue-400 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2" data-testid="contact-email-label">Email</h3>
              <p className="text-gray-400 break-all" data-testid="contact-email-value">arnav2506tripathi@gmail.com</p>
            </a>

            <a
              href="https://linkedin.com/in/arnavtripathiiii25"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-8 card-hover block"
              data-testid="contact-linkedin-card"
            >
              <FaLinkedin className="text-blue-400 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2" data-testid="contact-linkedin-label">LinkedIn</h3>
              <p className="text-gray-400 flex items-center justify-center gap-2" data-testid="contact-linkedin-value">
                Connect with me <FaExternalLinkAlt size={14} />
              </p>
            </a>

            <div className="glass rounded-2xl p-8 block" data-testid="contact-location-card">
              <FaMapMarkerAlt className="text-blue-400 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2" data-testid="contact-location-label">Location</h3>
              <p className="text-gray-400" data-testid="contact-location-value">Lucknow, Uttar Pradesh, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8" data-testid="footer">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://linkedin.com/in/arnavtripathiiii25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              data-testid="footer-linkedin-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:arnav2506tripathi@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              data-testid="footer-email-link"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
          <p className="text-gray-400" data-testid="footer-copyright">
            © 2025 Arnav Tripathi. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all z-50"
          data-testid="scroll-to-top-button"
          aria-label="Scroll to top"
        >
          <FaChevronUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;