import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Rocket,
  Sparkles,
} from "lucide-react";
import "./styles.css";

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  stack: string[];
};

type Project = {
  name: string;
  description: string;
  stack: string[];
  liveLink?: string;
  githubLink?: string;
};

type Certificate = {
  title: string;
  issuer: string;
  status: string;
};

const profile = {
  name: "Abdullah Al Faiyaz",
  title: "Full Stack Web Developer",
  location: "Germany",
  email: "abdullaalfaiyaz@gmail.com",
  phone: "+49 157 35611264",
  whatsapp: "https://wa.me/4915735611264",
  linkedin: "https://www.linkedin.com/in/abdullah-al-faiyaz/e",
  github: "https://github.com/AAFaiyaz",
  summary:
    "Full Stack Web Developer with 3 years of professional experience building scalable web applications, responsive interfaces, API-driven products, and WordPress solutions. Specialized in React, Express, TypeScript, and PostgreSQL, with additional experience in PHP, JavaScript, MySQL, and modern CMS development.",
};

const lookingFor = [
  "Open to full-stack developer positions in Germany and international remote roles.",
  "Currently residing in Germany and available for local, hybrid, or remote opportunities.",
  "Completed a Master’s degree and ready to contribute to modern web product teams.",
  "Interested in React, TypeScript, Express, PostgreSQL, WordPress, and product-focused web development roles.",
];

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Express.js",
  "Node.js",
  "PostgreSQL",
  "MySQL",
  "PHP",
  "WordPress",
  "REST APIs",
  "Reusable Components",
  "Responsive UI",
  "Git",
  "Agile Collaboration",
  "Testing",
  "Performance Optimization",
];

const experiences: Experience[] = [
  {
    company: "YOYABA Technologies",
    role: "Web Developer",
    period: "Jan 2024 – July 2025",
    description:
      "Developed modern web features and supported WordPress, CMS, and React-based client projects across more than 10 small to large-scale websites and web applications.",
    highlights: [
      "Worked on 10+ small to large projects, including client websites, landing pages, CMS solutions, and frontend features.",
      "Implemented responsive UI components and reusable sections to deliver projects faster and more consistently.",
      "Worked with React, JavaScript, WordPress, PHP, MySQL, and database-driven websites.",
      "Improved maintainability by writing clean, reusable, and structured code for production projects.",
    ],
    stack: [
      "React",
      "JavaScript",
      "WordPress",
      "PHP",
      "MySQL",
      "CMS Development",
    ],
  },
  {
    company: "TeamViewer",
    role: "Web Developer",
    period: "Jan 2022 – Jun 2023",
    description:
      "Worked on TeamViewer’s website and contributed to web development tasks across WordPress, JavaScript, PHP, MySQL, and React-based interfaces in a professional product and marketing environment.",
    highlights: [
      "Built and maintained responsive website pages, reusable content blocks, and frontend components.",
      "Worked with WordPress, PHP, JavaScript, MySQL, and React-based development workflows.",
      "Improved page maintainability and development speed by working with structured, reusable blocks.",
      "Collaborated with cross-functional teams to improve website quality, performance, and consistency.",
    ],
    stack: [
      "WordPress",
      "PHP",
      "JavaScript",
      "MySQL",
      "React",
      "Reusable Blocks",
    ],
  },
];

const projects: Project[] = [
  {
    name: "Crypto Dash",
    description:
      "A real-time cryptocurrency dashboard that presents live market data, price movements, and searchable coin information using the CoinGecko API. Built with a responsive interface, interactive charts, and filtering features to help users quickly explore and compare crypto assets.",
    stack: ["React", "Chart.js", "Tailwind CSS", "CoinGecko API"],
    liveLink: "https://crypto-dash-zeta-orcin.vercel.app/",
    githubLink: "https://github.com/your-username/crypto-dash",
  },
  {
    name: "Second Book",
    description:
      "E-commerce platform for used books with separate admin, user, and seller routes, product management, and payment integration.",
    stack: ["React", "Express", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    name: "WriteRight",
    description:
      "AI writing assistant with rewriting, summarization, grammar checking, and tone conversion features.",
    stack: ["React", "Express", "OpenAI API", "Node.js", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    name: "Islamic Prayer Time Extension",
    description:
      "Chrome extension that shows current and next prayer time with automatic updates every minute.",
    stack: ["React", "Tailwind CSS", "Moment.js", "Aladhan API"],
    liveLink: "#",
    githubLink: "#",
  },
];

const services = [
  {
    icon: <Code2 aria-hidden="true" />,
    title: "Frontend Development",
    text: "Responsive React and TypeScript interfaces, reusable components, landing pages, dashboards, and API-connected user experiences.",
  },
  {
    icon: <Database aria-hidden="true" />,
    title: "Backend & API Development",
    text: "Express.js APIs, authentication flows, database-backed features, PostgreSQL/MySQL integration, and clean backend structure.",
  },
  {
    icon: <Layers aria-hidden="true" />,
    title: "WordPress & CMS Websites",
    text: "WordPress development, PHP customization, reusable website blocks, CMS pages, performance improvements, and production support.",
  },
];

const certificates: Certificate[] = [
  {
    title: "React Frontend Development",
    issuer: "Udemy",
    status: "Course completed",
  },
  {
    title: "Backend Development with Node.js and Express",
    issuer: "Udemy",
    status: "Course completed",
  },
];

const focusCards = [
  {
    icon: <Code2 aria-hidden="true" />,
    title: "Frontend Engineering",
    text: "React, TypeScript, reusable components, responsive interfaces, API integration, and clean UI architecture.",
  },
  {
    icon: <Database aria-hidden="true" />,
    title: "Backend Development",
    text: "Express.js, REST APIs, PostgreSQL, MySQL, authentication flows, and database-backed web applications.",
  },
  {
    icon: <BriefcaseBusiness aria-hidden="true" />,
    title: "CMS & Web Platforms",
    text: "WordPress, PHP, theme customization, content-driven websites, performance improvements, and production support.",
  },
];

function App() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#home">
            {profile.name}
          </a>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles size={18} /> Open to full-stack roles in Germany and
              remote
            </p>
            <h1>{profile.title}</h1>
            <p className="lead">{profile.summary}</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Contact Me <ArrowUpRight size={18} />
              </a>

              <button
                className="button secondary"
                onClick={() => window.print()}
              >
                <Download size={18} /> Print / Save PDF
              </button>
            </div>
          </div>

          <aside className="profile-card" aria-label="Profile summary">
            <div className="avatar">
              <img src="/faiyaz.jpg" alt="Abdullah Al Faiyaz" />
            </div>
            <h2>{profile.name}</h2>
            <p>{profile.title}</p>
            <div className="quick-facts">
              <span>
                <MapPin size={16} /> Currently residing in Germany
              </span>
              <span>
                <GraduationCap size={16} /> Master’s degree completed
              </span>
              <span>
                <BriefcaseBusiness size={16} /> 3 years experience
              </span>
              <span>
                <Code2 size={16} /> React · Express · TypeScript
              </span>
            </div>
          </aside>
        </div>
      </section>

      {/* <section className="section looking-section" id="looking">
        <div className="section-heading center">
          <p className="eyebrow">What I am looking for</p>
          <h2>
            Open to full-stack positions locally in Germany and remotely
            worldwide.
          </h2>
          <p className="muted">
            I am looking for a role where I can contribute to modern web
            products, build reusable features, and grow with a collaborative
            engineering team.
          </p>
        </div>
        <div className="looking-grid">
          {lookingFor.map((item) => (
            <article className="looking-card" key={item}>
              <Rocket size={20} aria-hidden="true" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section> */}

      <section className="section focus-section" aria-labelledby="focus-title">
        <div className="section-heading">
          <p className="eyebrow">What I do</p>
          <h2 id="focus-title">
            I build reliable, modern, and maintainable web applications.
          </h2>
        </div>
        <div className="focus-grid">
          {focusCards.map((card) => (
            <article className="focus-card" key={card.title}>
              <div className="icon-wrap">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section two-column" id="experience">
        <div className="section-heading sticky-heading">
          <p className="eyebrow">Experience</p>
          <h2>Professional experience</h2>
          <p className="muted">
            3 years total: TeamViewer from 2022 January to 2023 July and YOYABA
            Technologies from January 2024 to June 2025.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((item) => (
            <article className="experience-card" key={item.company}>
              <div className="experience-topline">
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                </div>
                <span className="period">{item.period}</span>
              </div>
              <p>{item.description}</p>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="tag-list">
                {item.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading center">
          <p className="eyebrow">Technical skills</p>
          <h2>Technologies I work with</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading center">
          <p className="eyebrow">Selected projects</p>
          <h2>Practical full-stack and frontend projects</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.liveLink && project.liveLink !== "#" && (
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <Github size={16} /> GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* <section className="section" id="certificates">
        <div className="section-heading center">
          <p className="eyebrow">Certificates</p>
          <h2>Courses and continuous learning</h2>
        </div>
        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <article className="certificate-card" key={certificate.title}>
              <div className="icon-wrap">
                <Award aria-hidden="true" />
              </div>
              <h3>{certificate.title}</h3>
              <p>{certificate.issuer}</p>
              <span>{certificate.status}</span>
            </article>
          ))}
        </div>
      </section> */}

      <section className="section" id="services">
        <div className="section-heading center">
          <p className="eyebrow">Services I provide</p>
          <h2>How I can help your team or business</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="icon-wrap">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2>Let’s build something useful.</h2>
          <p className="muted">
            I am open to full-stack, React, WordPress, and web developer
            opportunities in Germany and internationally remote.
          </p>
        </div>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>
            <Mail size={18} /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            <Phone size={18} /> {profile.phone}
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> WhatsApp
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <ExternalLink size={18} /> LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={18} /> GitHub
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
