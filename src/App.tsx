import React from 'react';
import {
  User,
  GraduationCap,
  Briefcase,
  Database,
  Brain,
  Mail,
  ExternalLink,
  Github,
  Linkedin,
  ChevronDown,
  Star,
  Award,
  ArrowRight,
  Shield,
  ShieldAlert,
  Bug,
  Terminal,
  FileSearch,
  Cpu,
  TrendingUp,
} from 'lucide-react';

function App() {
  const [selectedProject, setSelectedProject] = React.useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      id: 'threatlens',
      title: 'ThreatLens — Automated Malware Intelligence Pipeline',
      shortDescription:
        'An automated threat intelligence and malware analysis pipeline that accepts binary files, performs multi-stage static/dynamic analysis (SHA256, VirusTotal API, UPX detection, FLOSS strings, YARA scanning), and leverages Groq AI & LangGraph to generate interactive HTML executive threat intelligence reports.',
      fullDescription:
        'ThreatLens is an automated threat intelligence and malware analysis pipeline built to streamline the SOC triage process. It accepts binary files and performs multi-stage static and dynamic analysis including SHA256 hashing, VirusTotal API reputation lookups, UPX packer detection, Mandiant FLOSS string extraction, and YARA rule scanning. The pipeline leverages Groq AI and LangGraph to synthesize analysis results into interactive HTML executive threat intelligence reports, enabling analysts to quickly understand and respond to potential threats. The Streamlit-based web interface makes it easy to upload samples and review generated reports in a user-friendly format.',
      technologies: ['Python', 'LangGraph', 'Groq AI', 'YARA', 'VirusTotal API', 'Streamlit', 'Mandiant FLOSS'],
      features: [
        'SHA256 hashing and file fingerprinting for sample identification',
        'VirusTotal API integration for reputation and detection lookups',
        'UPX packer detection and automatic unpacking',
        'Mandiant FLOSS string extraction for obfuscated strings',
        'YARA rule scanning for known malware pattern matching',
        'Groq AI & LangGraph integration for automated report generation',
        'Interactive HTML executive threat intelligence reports',
        'Streamlit-based web interface for easy file upload and analysis',
      ],
      metrics: {
        analysis: 'Multi-Stage Static & Dynamic',
        ai: 'Groq AI + LangGraph',
        interface: 'Streamlit Web App',
      },
      images: [
        'https://images.pexels.com/photos/5380666/pexels-photo-5380666.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'https://images.pexels.com/photos/5935787/pexels-photo-5935787.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'https://images.pexels.com/photos/9951077/pexels-photo-9951077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      ],
      highlightBadge: 'Automated Pipeline',
      demoUrl: '#',
      codeUrl: 'https://github.com/AhmedELNajjar-dev/Threat-Lens',
    },
    {
      id: 'nids',
      title: 'ML-Powered Network Intrusion Detection System (NIDS)',
      shortDescription:
        'A real-time cybersecurity dashboard for intrusion detection featuring an ML classification model (Random Forest trained on 26 network flow features) and a live Red Team vs. Blue Team attack simulator (DoS, Port Scanning, Benign traffic) with auto-updating visual alert timelines.',
      fullDescription:
        'This project is a real-time cybersecurity dashboard for network intrusion detection. It features a Machine Learning classification model using Random Forest, trained on 26 network flow features to classify traffic as DoS, Port Scanning, or Benign. The dashboard includes a live Red Team vs. Blue Team attack simulator that generates realistic network traffic patterns and displays auto-updating visual alert timelines. Built with Streamlit and Plotly, it provides real-time traffic monitoring, pulse alert notifications, network flow analysis, and attack timeline visualization — giving security analysts an interactive tool for understanding and detecting network-based attacks.',
      technologies: ['Python', 'Streamlit', 'Random Forest', 'Plotly', 'Scikit-Learn', 'Network Security'],
      features: [
        'Real-time network traffic monitoring and classification',
        'Random Forest ML model trained on 26 network flow features',
        'Red Team vs. Blue Team live attack simulator',
        'DoS, Port Scanning, and Benign traffic classification',
        'Pulse alert notifications for detected threats',
        'Network flow analysis with feature breakdown',
        'Auto-updating attack timeline visualization',
        'Interactive Streamlit dashboard with Plotly charts',
      ],
      metrics: {
        model: 'Random Forest (26 features)',
        simulation: 'Red/Blue Team',
        interface: 'Streamlit Dashboard',
      },
      images: [
        'https://images.pexels.com/photos/5380618/pexels-photo-5380618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      ],
      highlightBadge: 'Red/Blue Simulator',
      demoUrl: '#',
      codeUrl: 'https://github.com/AhmedELNajjar-dev',
    },
    {
      id: 'recommendation-engine',
      title: 'Movie Collaborative Recommendation System',
      shortDescription:
        'A movie recommendation system using collaborative filtering to suggest films based on user preferences and previous ratings.',
      fullDescription:
        'This project implements a comprehensive movie recommendation system using collaborative filtering to suggest films based on user preferences and previous ratings. The system is divided into two main components: Data Preprocessing & Model Training, and a User Interface built with Flask. The data preprocessing involves cleaning raw datasets (movies.csv, ratings.csv), creating pivot tables mapping users to movie ratings, handling missing values, and filtering out low-activity users/movies. The system converts datasets into sparse matrices for efficiency and trains a K-Nearest Neighbors (KNN) model with cosine similarity to identify similar movies. The Flask-based UI allows users to enter a movie title and receive 10 personalized recommendations displayed dynamically.',
      technologies: ['Python', 'Flask', 'KNN', 'Pandas', 'NumPy', 'Scikit-learn', 'HTML', 'Matplotlib', 'Scipy'],
      features: [
        'Data preprocessing and cleaning of raw movie datasets',
        'User-movie pivot table creation with missing value handling',
        'Sparse matrix optimization for memory efficiency',
        'KNN model training with cosine similarity',
        'Flask web interface for movie recommendations',
        'Model serialization using Pickle for reuse',
        'Dynamic recommendation display system',
      ],
      metrics: {
        recommendations: '10 movies',
        algorithm: 'KNN + Cosine Similarity',
        interface: 'Flask Web App',
      },
      images: ['/images/1.png', '/images/2.png', '/images/3.png', '/images/4.png', '/images/5.png'],
      highlightBadge: 'ML & AI',
      demoUrl: '#',
      codeUrl: 'https://github.com/AhmedELNajjar-dev/Movie-recommendation-system-main',
    },
    {
      id: 'database-management',
      title: 'Gym Management System',
      shortDescription:
        'A comprehensive web-based database-driven application designed to streamline and automate daily operations of a fitness center.',
      fullDescription:
        'The Gym Management System is a web-based database-driven application designed to streamline and automate the daily operations of a fitness center. The project leverages MySQL for database management and PHP for backend integration, ensuring efficient storage, retrieval, and manipulation of gym-related data. The main objective is to eliminate inefficiencies of manual record-keeping and provide a centralized platform where administrators, trainers, and members can interact seamlessly. The system ensures secure authentication for administrators, allows trainers to manage their clients effectively, and supports members in tracking their workouts, diets, and participation in gym activities. Built with normalized MySQL database to reduce redundancy and enforced with primary and foreign key constraints.',
      technologies: ['MySQL', 'PHP', 'HTML', 'CSS', 'Database Design', 'SQL', 'CRUD Operations'],
      features: [
        'Secure admin authentication and management dashboard',
        'Member Management: Register, update, search, and delete gym member records while maintaining trainer assignments and workout/diet tracking',
        'Trainer Management: Add, update, or delete trainer profiles and oversee exercises, diet plans, and classes',
        'Class Scheduling: Create and assign fitness classes with cost, duration, and member participation tracking',
        'Diet & Exercise Tracking: Assign and monitor personalized routines for each member',
        'Supplement Management: Maintain inventory, stock levels, categories, and expiration dates',
        'Contact & Communication: Member inquiry and feedback system',
        'Parameterized queries for SQL injection prevention',
      ],
      metrics: {
        database: 'MySQL Normalized',
        security: 'SQL Injection Protected',
        operations: 'Full CRUD Support',
      },
      images: [
        '/images/DB1.jpg',
        '/images/DB2.jpg',
        '/images/DB3.png',
        '/images/DB4.png',
        '/images/DB5.png',
        '/images/DB6.jpg',
        '/images/DB7.jpg',
      ],
      highlightBadge: 'Database Design',
      demoUrl: '#',
      codeUrl: 'https://github.com/AhmedELNajjar-dev/Database-Gym-Management-System',
    },
  ];

  const ProjectModal = ({
    project,
    onClose,
  }: {
    project: (typeof projects)[0];
    onClose: () => void;
  }) => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const handleBackdropClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleBackdropClick}
      >
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Fixed close button */}
          <button
            onClick={onClose}
            className="fixed top-4 right-4 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-lg z-10 text-xl font-bold"
          >
            ×
          </button>

          <div className="relative group">
            <img
              src={project.images[currentImageIndex]}
              alt={project.title}
              className="w-full h-96 md:h-[500px] object-contain bg-gray-100 rounded-t-2xl"
            />

            {/* Image Navigation */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  →
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Image Counter */}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              </>
            )}
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{project.fullDescription}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Metrics</h3>
                <div className="space-y-3">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="font-semibold text-sky-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {project.demoUrl === '#' ? (
                <div className="bg-slate-100 border border-slate-300 text-slate-800 px-6 py-3 rounded-lg font-semibold flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo: Check GitHub repo documentation
                </div>
              ) : (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Demo
                </a>
              )}
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center"
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-white">Ahmed Mamdouh El Najjar</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-blue-400 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-blue-400 transition-colors">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'><g fill=\'none\' fill-rule=\'evenodd\'><g fill=\'%23FFFFFF\' fill-opacity=\'0.1\'><circle cx=\'30\' cy=\'30\' r=\'1\'/><circle cx=\'10\' cy=\'10\' r=\'0.5\'/><circle cx=\'50\' cy=\'10\' r=\'0.5\'/><circle cx=\'10\' cy=\'50\' r=\'0.5\'/><circle cx=\'50\' cy=\'50\' r=\'0.5\'/><circle cx=\'20\' cy=\'30\' r=\'0.3\'/><circle cx=\'40\' cy=\'30\' r=\'0.3\'/><circle cx=\'30\' cy=\'15\' r=\'0.3\'/><circle cx=\'30\' cy=\'45\' r=\'0.3\'/></g></g></svg>')] opacity-80"
          />

          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-sky-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Ahmed Mamdouh</span> <span className="text-sky-400">El Najjar</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Cyber Security SOC Analyst | Incident Response &amp; Data-Driven Security
          </p>
          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Specializing in real-time threat detection, digital forensics, incident triage, and AI-driven security
            pipelines.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-blue-500/50"
            >
              Hire Me
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="border-2 border-gray-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-200 transform hover:-translate-y-1"
            >
              View Projects
            </button>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-300" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                  <img
                    src="/images/Personal_PIC.jpg"
                    alt="Ahmed Mamdouh El Najjar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-900">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Hi, I'm Ahmed Mamdouh, a Computer Engineering student at Helwan University specializing in Cyber
                Security Operations, Incident Response, and Threat Intelligence. I focus on detecting network
                intrusions, analyzing malware artifacts, and automating SOC triage workflows. Combining a strong
                technical background in networking, OS internals (Windows/Linux), Database Design, Data Science, and
                Machine Learning, I build intelligent defensive systems that help organizations monitor, investigate,
                and remediate active cyber threats.
              </p>

              <div className="bg-gradient-to-br from-gray-800 to-blue-900/50 p-8 rounded-2xl mt-8 border border-gray-700">
                <div className="flex items-center mb-4">
                  <User className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Quick Facts</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-600 rounded-full mr-3"></span>
                    Computer Engineering Student (Helwan University)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-600 rounded-full mr-3"></span>
                    SOC Analyst &amp; Incident Response Trainee (DEPI)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-600 rounded-full mr-3"></span>
                    Data Science &amp; Machine Learning Practitioner
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-600 rounded-full mr-3"></span>
                    Malware Analysis &amp; Forensics Enthusiast
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Education</h2>
          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-700">
            <div className="flex items-start">
              <div className="bg-blue-900/50 p-3 rounded-lg mr-6 border border-blue-700">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">B.Sc. in Computer Engineering</h3>
                <p className="text-blue-600 font-semibold mb-2">Faculty of Engineering, Helwan University</p>
                <p className="text-gray-300 mb-4">Computer and Systems Department (Expected 2027)</p>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-white mb-2">Relevant Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-900/50 text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-700">Cyber Security Incident Response</span>
                    <span className="bg-slate-900/50 text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-700">Digital Forensics</span>
                    <span className="bg-slate-900/50 text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-700">Network Protocols &amp; Security</span>
                    <span className="bg-slate-900/50 text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-700">OS Fundamentals (Windows &amp; Linux)</span>
                    <span className="bg-slate-900/50 text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-700">Machine Learning</span>
                    <span className="bg-slate-900/50 text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-700">Data Science</span>
                    <span className="bg-slate-900/50 text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-700">SIEM Operations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills &amp; Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
              <ShieldAlert className="w-8 h-8 text-sky-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Security Operations &amp; IR</h3>
              <ul className="text-gray-300 space-y-1">
                <li>Incident Response &amp; Triage</li>
                <li>Digital Forensics (Windows Registry, Memory)</li>
                <li>Log Analysis &amp; Event Correlation</li>
                <li>Malware Analysis (Static &amp; Dynamic)</li>
                <li>Threat Intelligence &amp; IOC Extraction</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 p-6 rounded-2xl border border-blue-700/50">
              <Brain className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Data Science &amp; Machine Learning</h3>
              <ul className="text-gray-300 space-y-1">
                <li>Data Preprocessing &amp; Cleaning</li>
                <li>Feature Engineering &amp; Exploratory Data Analysis</li>
                <li>Classification, Regression &amp; KNN Algorithms</li>
                <li>Model Deployment (API / Web Integration)</li>
                <li>Database Design &amp; Query Optimization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-2xl border border-gray-700/50">
              <Terminal className="w-8 h-8 text-gray-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Cybersecurity Tools</h3>
              <ul className="text-gray-300 space-y-1">
                <li>Wireshark</li>
                <li>YARA &amp; FLOSS</li>
                <li>VirusTotal API</li>
                <li>Splunk &amp; SIEM Tools</li>
                <li>Volatility</li>
                <li>Ollama &amp; LangGraph (AI SOC Automation)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/50 p-6 rounded-2xl border border-cyan-700/50">
              <Database className="w-8 h-8 text-cyan-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Data, Backend &amp; Web Tools</h3>
              <ul className="text-gray-300 space-y-1">
                <li>Python (Security &amp; Data Scripting)</li>
                <li>Pandas, NumPy, Scikit-learn</li>
                <li>SQL, MySQL, FastAPI, Flask</li>
                <li>Bash / Linux Command Line</li>
                <li>HTML / CSS / JS &amp; Web Basics</li>
                <li>Matplotlib &amp; Data Visualization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Work Experience</h2>
          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-700">
            <div className="flex items-start">
              <div className="bg-green-900/50 p-3 rounded-lg mr-6 border border-green-700">
                <Briefcase className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Cyber Security Incident Response Trainee &amp; Freelance Data Specialist</h3>
                <p className="text-green-600 font-semibold mb-4">Digital Egypt Pioneers Initiative (DEPI) &amp; Freelance</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Conducted end-to-end incident analysis, threat triage, and malware investigation across simulated enterprise networks.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Performed digital forensics, memory analysis, and log correlation on TryHackMe and LetsDefend labs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Developed ML-driven intrusion detection systems and automated threat intelligence pipelines using Python and local LLMs (Ollama).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Built and deployed machine learning models, database schemas, and analytical web applications for freelance clients.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Services Offered</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-6 rounded-2xl hover:shadow-lg transition-shadow border border-slate-700/50">
              <div className="bg-sky-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <ShieldAlert className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Incident Response &amp; Threat Triage</h3>
              <p className="text-gray-300">Triage security alerts (phishing, C2 communication, unauthorized access) and deliver actionable remediation steps.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 p-6 rounded-2xl hover:shadow-lg transition-shadow border border-blue-700/50">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileSearch className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Digital Forensics &amp; Log Analysis</h3>
              <p className="text-gray-300">Perform forensic memory dumps, Windows Registry analysis, and packet-level network analysis (Wireshark).</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-2xl hover:shadow-lg transition-shadow border border-gray-700/50">
              <div className="bg-gray-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Bug className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Automated Malware Analysis &amp; Intelligence</h3>
              <p className="text-gray-300">Extract IOCs, conduct static PE header inspection, UPX packer checks, and run YARA rule scans.</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/50 p-6 rounded-2xl hover:shadow-lg transition-shadow border border-cyan-700/50">
              <div className="bg-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Data Science, ML &amp; Database Solutions</h3>
              <p className="text-gray-300">Build custom machine learning models, predictive pipelines, recommendation systems, and optimized database schemas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div key={project.id} className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700">
                <div className="relative">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-48 object-cover border-b border-gray-700"
                  />
                  <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-300 border border-gray-700">
                    Project {index + 1}
                  </div>
                  {project.highlightBadge && (
                    <div className="absolute top-4 left-4 bg-sky-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white border border-sky-500">
                      {project.highlightBadge}
                    </div>
                  )}
                  {project.images.length > 1 && (
                    <div className="absolute bottom-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                      +{project.images.length - 1} more
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{project.shortDescription}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="bg-slate-900/50 text-slate-300 px-2 py-1 rounded text-sm font-medium border border-slate-700">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-800 text-gray-400 px-2 py-1 rounded text-sm border border-gray-600">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span>{Object.values(project.metrics)[0]}</span>
                    </div>
                    <button
                      onClick={() => setSelectedProject(project.id)}
                      className="bg-sky-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-sky-700 transition-colors flex items-center"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-300 mb-4">Interested in seeing more projects or discussing a collaboration?</p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors border border-sky-500"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-900/50 to-amber-800/50 p-6 rounded-2xl border border-amber-700/50">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-amber-600 mr-3" />
                <h3 className="text-xl font-semibold text-white">Project Excellence</h3>
              </div>
              <p className="text-gray-300">Delivered multiple cybersecurity, data science, and freelance projects successfully with high client satisfaction ratings.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-slate-600 mr-3" />
                <h3 className="text-xl font-semibold text-white">Academic &amp; Professional Recognition</h3>
              </div>
              <p className="text-gray-300">Recognized for excellence in Cyber Security Incident Response, Machine Learning projects, and innovative security automation solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-sky-400/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Build Something Secure &amp; Intelligent Together</h2>
          <p className="text-xl text-gray-300 mb-8">
            Reach out to me for collaborations, freelance projects, or full-time opportunities. I'm always excited to
            work on challenging cybersecurity and data science problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="mailto:ahmedmamdouhelnajjar@hotmail.com"
              className="bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center shadow-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              ahmedmamdouhelnajjar@hotmail.com
            </a>
            <div className="flex gap-4">
              <a
                href="https://github.com/AhmedELNajjar-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors border border-gray-600"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-el-najjar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-700 text-white p-3 rounded-lg hover:bg-sky-600 transition-colors border border-sky-600"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <p className="text-gray-300">
            Available for SOC Analyst, Incident Response, Data Science, and Machine Learning opportunities.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">&copy; 2026 Ahmed Mamdouh Sadek. All rights reserved.</p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={projects.find((p) => p.id === selectedProject)!}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;
