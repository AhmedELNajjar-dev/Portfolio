import React from 'react';
import { 
  User, 
  GraduationCap, 
  Code, 
  Briefcase, 
  Settings, 
  Database, 
  Brain, 
  Mail, 
  ExternalLink,
  Github,
  Linkedin,
  ChevronDown,
  Star,
  Award,
  Target,
  ArrowRight,
  Calendar,
  Users,
  TrendingUp
} from 'lucide-react';

function App() {
  const [selectedProject, setSelectedProject] = React.useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      id: 'recommendation-engine',
      title: 'Movie Collaborative Recommendation System',
      shortDescription: 'A movie recommendation system using collaborative filtering to suggest films based on user preferences and previous ratings.',
      fullDescription: 'This project implements a comprehensive movie recommendation system using collaborative filtering to suggest films based on user preferences and previous ratings. The system is divided into two main components: Data Preprocessing & Model Training, and a User Interface built with Flask. The data preprocessing involves cleaning raw datasets (movies.csv, ratings.csv), creating pivot tables mapping users to movie ratings, handling missing values, and filtering out low-activity users/movies. The system converts datasets into sparse matrices for efficiency and trains a K-Nearest Neighbors (KNN) model with cosine similarity to identify similar movies. The Flask-based UI allows users to enter a movie title and receive 10 personalized recommendations displayed dynamically.',
      technologies: ['Python', 'Flask', 'KNN', 'Pandas', 'NumPy', 'Scikit-learn', 'HTML', 'Matplotlib', 'Scipy'],
      features: [
        'Data preprocessing and cleaning of raw movie datasets',
        'User-movie pivot table creation with missing value handling',
        'Sparse matrix optimization for memory efficiency',
        'KNN model training with cosine similarity',
        'Flask web interface for movie recommendations',
        'Model serialization using Pickle for reuse',
        'Dynamic recommendation display system'
      ],
      metrics: {
        recommendations: '10 movies',
        algorithm: 'KNN + Cosine Similarity',
        interface: 'Flask Web App'
      },
      images: [
        '/images/1.png',
        '/images/2.png',
        '/images/3.png',
        '/images/4.png',
        '/images/5.png'
      ],
      demoUrl: '#',
      codeUrl: 'https://github.com/AhmedELNajjar-dev/Movie-recommendation-system-main'
    },
    {
      id: 'database-management',
      title: 'Gym Management System',
      shortDescription: 'A comprehensive web-based database-driven application designed to streamline and automate daily operations of a fitness center.',
      fullDescription: 'The Gym Management System is a web-based database-driven application designed to streamline and automate the daily operations of a fitness center. The project leverages MySQL for database management and PHP for backend integration, ensuring efficient storage, retrieval, and manipulation of gym-related data. The main objective is to eliminate inefficiencies of manual record-keeping and provide a centralized platform where administrators, trainers, and members can interact seamlessly. The system ensures secure authentication for administrators, allows trainers to manage their clients effectively, and supports members in tracking their workouts, diets, and participation in gym activities. Built with normalized MySQL database to reduce redundancy and enforced with primary and foreign key constraints.',
      technologies: ['MySQL', 'PHP', 'HTML', 'CSS', 'Database Design', 'SQL', 'CRUD Operations'],
      features: [
        'Secure admin authentication and management dashboard',
        'Member Management: Register, update, search, and delete gym member records while maintaining trainer assignments and workout/diet tracking',
        'Trainer Management: Add, update, or delete trainer profiles and oversee exercises, diet plans, and classes',
        'Class Scheduling: Create and assign fitness classes with cost, duration, and member participation tracking',
        'Diet & Exercise Tracking: Assign and monitor personalized routines for each member',
        'Supplement Management: Maintain inventory, stock levels, categories, and expiration dates',
        'Contact & Communication: Member inquiry and feedback system',
        'Parameterized queries for SQL injection prevention'
      ],
      metrics: {
        database: 'MySQL Normalized',
        security: 'SQL Injection Protected',
        operations: 'Full CRUD Support'
      },
      images: [
        'src/Images/DB1.jpg',
        'src/images/DB2.jpg',
        'src/images/DB3.png',
        'src/images/DB4.png',
        'src/images/DB5.png',
        'src/images/DB6.jpg',
        'src/images/DB7.jpg'
      ],
      demoUrl: '#',
      codeUrl: 'https://github.com/AhmedELNajjar-dev/Database-Gym-Management-System'
    },
    
  ];

  const ProjectModal = ({ project, onClose }: { project: typeof projects[0], onClose: () => void }) => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    
    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };
    
    const prevImage = () => {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };
    
    return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
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
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
          >
            ×
          </button>
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
                    <span className="font-semibold text-blue-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4">
            <a 
              href={project.demoUrl}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Demo
            </a>
            <a 
              href={project.codeUrl}
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
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900">Ahmed Mamdouh El Najjar</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0">
          <div
  className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><g fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;><g fill=&quot;%233B82F6&quot; fill-opacity=&quot;0.05&quot;><circle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/><circle cx=&quot;10&quot; cy=&quot;10&quot; r=&quot;1&quot;/><circle cx=&quot;50&quot; cy=&quot;10&quot; r=&quot;1&quot;/><circle cx=&quot;10&quot; cy=&quot;50&quot; r=&quot;1&quot;/><circle cx=&quot;50&quot; cy=&quot;50&quot; r=&quot;1&quot;/></g></g></svg>')] opacity-50"
/>

          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Ahmed Mamdouh <span className="text-blue-600">El Najjar</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Data Scientist | Machine Learning & AI Developer
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Hire Me
          </button>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hi, I'm Ahmed Mamdouh, a Data Scientist with a Computer Engineering background from Helwan University. 
                I specialize in turning raw data into actionable insights and building AI models that solve real-world problems. 
                With experience in database design, data preprocessing, and deploying machine learning models, I act as the 
                bridge between raw data and practical solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm passionate about creating impactful projects, from recommendation systems to predictive analytics, 
                always with the goal of helping businesses and individuals make smarter decisions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Quick Facts</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Computer Engineering Student
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Freelance Data Scientist
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  AI & ML Specialist
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Database Design Expert
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-6">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">B.Sc. in Computer Engineering</h3>
                <p className="text-blue-600 font-semibold mb-2">Faculty of Engineering, Helwan University</p>
                <p className="text-gray-600 mb-4">Computer and Systems Department (Ongoing)</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Relevant Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Data Science</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Artificial Intelligence</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Electronic Measurements & Sensors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
              <Code className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Programming</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Python</li>
                <li>SQL</li>
                <li>HTML/CSS</li>
                <li>React</li>
                <li>FastAPI</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl">
              <Brain className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Machine Learning</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Data Cleaning</li>
                <li>Preprocessing</li>
                <li>Feature Engineering</li>
                <li>KNN Algorithm</li>
                <li>Recommendation Systems</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
              <Settings className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tools & Libraries</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Pandas</li>
                <li>NumPy</li>
                <li>Scikit-learn</li>
                <li>Flask</li>
                <li>Matplotlib</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
              <Database className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Other Skills</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Database Design</li>
                <li>Data Visualization</li>
                <li>Model Deployment</li>
                <li>API Development</li>
                <li>Web Applications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Work Experience</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-lg mr-6">
                <Briefcase className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Freelance Data Scientist</h3>
                <p className="text-green-600 font-semibold mb-4">Upwork & Khamsat</p>
                <p className="text-gray-600 leading-relaxed">
                  Helping startups and data-driven companies build predictive and analytical models, 
                  from data preprocessing to deployment. Successfully delivered multiple projects 
                  involving machine learning model development, database optimization, and AI-powered solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Services Offered</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Cleaning & Preprocessing</h3>
              <p className="text-gray-600">Transform raw, messy data into clean, structured datasets ready for analysis and modeling.</p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">ML Model Development</h3>
              <p className="text-gray-600">Build custom machine learning models tailored to your specific business needs and objectives.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Recommendations</h3>
              <p className="text-gray-600">Develop intelligent recommendation systems that personalize user experiences and drive engagement.</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Analytics</h3>
              <p className="text-gray-600">Forecast trends and outcomes using advanced statistical models and machine learning techniques.</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Model Deployment</h3>
              <p className="text-gray-600">Deploy machine learning models as web APIs and applications for real-world use.</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Database Design & Optimization</h3>
              <p className="text-gray-600">Design efficient database schemas and optimize queries for better performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                    Project {index + 1}
                  </div>
                  {project.images.length > 1 && (
                    <div className="absolute bottom-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                      +{project.images.length - 1} more
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span>{Object.values(project.metrics)[0]}</span>
                    </div>
                    <button 
                      onClick={() => setSelectedProject(project.id)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center"
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
            <p className="text-gray-600 mb-4">Interested in seeing more projects or discussing a collaboration?</p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-yellow-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Project Excellence</h3>
              </div>
              <p className="text-gray-600">Delivered multiple academic and freelance projects successfully with high client satisfaction ratings.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Academic Recognition</h3>
              </div>
              <p className="text-gray-600">Recognized by instructors for excellence in Machine Learning course projects and innovative solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Build Something Intelligent Together</h2>
          <p className="text-xl text-blue-100 mb-8">
            Reach out to me for collaborations or freelance projects. I'm always excited to work on challenging data science problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="mailto:ahmed.mamdouh.sadek@example.com" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              ahmedmamdouhelnajjar@hotmail.com
            </a>
            <div className="flex gap-4">
  <a 
    href="https://github.com/AhmedELNajjar-dev" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors"
  >
    <Github className="w-5 h-5" />
  </a>
  <a 
    href="https://www.linkedin.com/in/ahmed-el-najjar" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors"
  >
    <Linkedin className="w-5 h-5" />
  </a>
</div>
          </div>
          
          <p className="text-blue-100">
            Available for freelance projects and full-time opportunities
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2024 Ahmed Mamdouh Sadek. All rights reserved.</p>
        </div>
      </footer>
      
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={projects.find(p => p.id === selectedProject)!} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}

export default App;