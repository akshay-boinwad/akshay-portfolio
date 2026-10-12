import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Mail,
  Download,
  BrainCircuit,
  Code2,
  Database,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const skills = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "SQL",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "React",
  "FastAPI",
  "PostgreSQL",
  "JavaScript",
  "Git & GitHub",
];

const projects = [
  {
    number: "01",
    category: "AI / CAREER TECHNOLOGY",
    title: "CareerAI",
    live: "https://ai-career-platform-mu.vercel.app/",
    description:
      "An AI-powered career platform designed to analyze resumes, identify skill gaps, recommend suitable jobs, and support interview preparation.",
    technologies: ["React", "FastAPI", "Python", "PostgreSQL"],
    icon: BrainCircuit,
    color: "violet",
    github: "https://github.com/akshay-boinwad/ai-career-platform",
  },
  {
    number: "02",
    category: "AI / AGRICULTURE",
    title: "Agentic Future Farming",
    status: "IN DEVELOPMENT",
    description:
      "A smart agriculture ecosystem concept focused on helping farmers access crop guidance, agricultural resources, and intelligent farming support.",
    technologies: ["React Native", "Expo", "AI/ML"],
    icon: Sparkles,
    color: "green",
    github: "",
  },
  {
    number: "03",
    category: "WEB DEVELOPMENT",
    title: "FixIt",
    description:
      "A web-based service platform designed to help users find and connect with repair and maintenance services.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    icon: Database,
    color: "blue",
    github: "https://github.com/akshay-boinwad/FixIt-Civic-Issue-Reporting-System",
  },
];

function SectionHeading({ label, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="brand">
        <span className="brand-mark">A.</span>
        <span>AKSHAY<span className="brand-muted">.DEV</span></span>
      </a>

      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact" className="nav-contact">
          Let's Talk <ArrowRight size={15} />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-container">
      <div className="hero-copy">
        <motion.div
          className="availability"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="status-dot" />
          B.TECH STUDENT · CLASS OF 2027
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Building ideas
          <br />
          with <span className="gradient-text">intelligence.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hi, I'm <strong>Akshay</strong> — an aspiring AI/ML Engineer
          passionate about machine learning, data-driven solutions, and
          building useful software.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <a href="#projects" className="button button-primary">
            Explore Projects <ArrowRight size={17} />
          </a>

          <a href="#contact" className="button button-secondary">
            Get in Touch <Mail size={17} />
          </a>

          <a
            href="/resume.pdf"
            download="Akshay_Boinwad_Resume.pdf"
            className="button button-secondary"
          >
            <Download size={17} />
            Download Resume
          </a>
        </motion.div>

        <div className="hero-socials">
  <a
    href="https://github.com/akshay-boinwad"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    title="GitHub"
  >
    <Code2 size={21} />
  </a>

  <a
    href="https://www.linkedin.com/in/akshay-boinwad/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
    title="LinkedIn"
  >
    <span className="linkedin-icon">in</span>
  </a>

  <span className="social-divider" />

  <span className="location-label">Based in India 🇮🇳</span>
</div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit orbit-three" />

        <div className="brain-core">
          <BrainCircuit size={76} strokeWidth={1.2} />
        </div>

        <div className="floating-card card-python">
          <Code2 size={18} />
          <span>Python</span>
        </div>

        <div className="floating-card card-ml">
          <BrainCircuit size={18} />
          <span>Machine Learning</span>
        </div>

        <div className="floating-card card-data">
          <Database size={18} />
          <span>Data Science</span>
        </div>

        <div className="visual-caption">
          <span className="caption-line" />
          <span>CURIOUS MIND. CONTINUOUS LEARNING.</span>
        </div>
      </motion.div>

      <a href="#about" className="scroll-indicator">
        <ArrowDown size={15} /> SCROLL TO EXPLORE
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="content-section section-container">
      <SectionHeading
        label="01 / ABOUT ME"
        title="Curiosity into capability."
        description="I enjoy learning how intelligent systems work and turning technical ideas into practical projects."
      />

      <div className="about-grid">
        <div className="about-card about-main">
          <span className="about-icon">
            <BrainCircuit size={25} />
          </span>
          <h3>Learning by building.</h3>
          <p>
            I'm pursuing a B.Tech in Artificial Intelligence and Machine
            Learning. My interests include machine learning, data analysis,
            backend development, and full-stack applications.
          </p>
          <p>
            I believe the best way to improve is to build projects, solve
            problems, and keep experimenting with new technologies.
          </p>
        </div>

        <div className="about-card">
          <span className="about-icon">
            <Code2 size={25} />
          </span>
          <h3>Development</h3>
          <p>Building web applications, APIs, and database-backed systems.</p>
        </div>

        <div className="about-card">
          <span className="about-icon">
            <Database size={25} />
          </span>
          <h3>Data & AI</h3>
          <p>Exploring data analysis, machine learning, and intelligent solutions.</p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="content-section section-container">
      <SectionHeading
        label="02 / TECH STACK"
        title="Tools of my trade."
        description="Technologies I'm learning and using to build projects."
      />

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-chip"
            key={skill}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 4) * 0.06 }}
          >
            <span className="skill-indicator" />
            {skill}
          </motion.div>
        ))}
      </div>

      <p className="skills-note">
        My toolkit continues to grow as I learn and build new projects.
      </p>
    </section>
  );
}


function Experience() {
  const experiences = [
    {
      role: "Front-End Development Intern",
      company: "Cognifyz Technologies",
      duration: "Sep 2026 – Oct 2026",
      description:
        "Completed a front-end development internship focused on building responsive and interactive web interfaces.",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Sass"],
      status: "COMPLETED INTERNSHIP",
    },
    {
      role: "AI/ML Virtual Intern",
      company: "Google AI/ML Virtual Internship",
      duration: "Jan 2026 – Mar 2026",
      description:
        "Add a short description of the AI/ML training, tasks, and projects you actually completed during this internship.",
      skills: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn"],
      status: "VIRTUAL INTERNSHIP",
    },
  ];

  return (
    <section id="experience" className="content-section section-container">
      <SectionHeading
        label="03 / EXPERIENCE"
        title="Learning through experience."
        description="Internship experiences that support my growth in software development and AI/ML."
      />

      <div className="experience-list">
        {experiences.map((experience, index) => (
          <motion.article
            className="experience-card"
            key={`${experience.company}-${experience.role}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <div className="experience-marker">
              <span />
            </div>

            <div className="experience-content">
              <div className="experience-meta">
                <span className="eyebrow">{experience.status}</span>
                <span className="experience-duration">{experience.duration}</span>
              </div>

              <h3>{experience.role}</h3>
              <h4>{experience.company}</h4>
              <p>{experience.description}</p>

              <div className="technology-list">
                {experience.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="content-section section-container">
      <SectionHeading
        label="03 / SELECTED WORK"
        title="Projects with purpose."
        description="A selection of projects that reflect my interests in AI, software, and data."
      />

      <div className="projects-grid">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.article
              className="project-card"
              key={project.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
            >
              <div className="project-top">
                <span className={`project-icon ${project.color}`}>
                  <Icon size={25} />
                </span>
                <span className="project-number">{project.number}</span>
              </div>

              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="technology-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              {project.live && (
                <a
                  className="project-link"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo <ExternalLink size={15} />
                </a>
              )}

              {project.github && (
                <a
                  className="project-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub <ExternalLink size={15} />
                </a>
              )}

              {project.status && (
                <span className="project-link project-link-muted">
                  {project.status} <ArrowRight size={15} />
                </span>
              )}

              {!project.github && !project.live && !project.status && (
                <span className="project-link project-link-muted">
                  Project showcase <ArrowRight size={15} />
                </span>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section section-container">
      <div className="contact-card">
        <span className="eyebrow">04 / CONTACT</span>
        <h2>
          Let's build something
          <br />
          <span className="gradient-text">meaningful.</span>
        </h2>
        <p>
          Interested in AI/ML, software development, or collaborating on a
          project? I'd love to connect.
        </p>

        <div className="contact-actions">
  <a
    className="button button-primary"
    href="https://mail.google.com/mail/?view=cm&fs=1&to=akshayashokboinwad@gmail.com"
  >
    <Mail size={18} />
    Email Me
  </a>

  <a
    className="button button-secondary"
    href="https://github.com/akshay-boinwad"
    target="_blank"
    rel="noreferrer"
  >
    <Code2 size={18} />
    GitHub
  </a>

  <a
    className="button button-secondary"
    href="https://www.linkedin.com/in/akshay-boinwad/"
    target="_blank"
    rel="noreferrer"
  >
    <span className="linkedin-icon">in</span>
    LinkedIn
  </a>
</div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer section-container">
      <a href="#home" className="brand">
        <span className="brand-mark">A.</span>
        <span>AKSHAY<span className="brand-muted">.DEV</span></span>
      </a>

      <p>Designed & built with curiosity.</p>
      <a href="#home" className="back-to-top">
        Back to top ↑
      </a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}