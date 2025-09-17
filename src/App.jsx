import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMoon, FiSun, FiMail, FiPhone, FiGithub, FiLinkedin, FiChevronDown, FiMenu } from "react-icons/fi";

// Single-file React portfolio for Ashish Kumar
// Usage: replace src/App.jsx (or src/main.jsx component) with this file's default export

const social = {
  linkedin: "https://www.linkedin.com/in/ashish15x/",
  github: "https://github.com/ashish15x",
  leetcode: "https://leetcode.com/u/ashish15x/",
  email: "ashish15x@gmail.com",
  phone: "+91 7070128551",
};

const experiences = [
  {
    company: "Hughes Systique Pvt. Ltd.",
    role: "Associate Software Engineer",
    date: "Dec 2024 – Present",
    bullets: [
      "Engineered and deployed an AI-assistant for a client’s full-stack web app.",
      "Fine-tuned LLMs, improving model accuracy by 30%.",
      "Built semantic search service using embeddings.",
      "Designed chat UI with real-time API integration, improving support efficiency by 40%.",
    ],
  },
  {
    company: "Hughes Systique Pvt. Ltd.",
    role: "Associate Software Engineer Trainee",
    date: "Jan 2024 – Dec 2024",
    bullets: [
      "Optimized Vue.js + Node.js app, reducing latency by 60%.",
      "Created a reusable Vuetify component library to speed up development by 20%.",
      "Applied full-stack training by crafting a MERN-based product.",
    ],
  },
];

const projects = [
  {
    title: "Sneakhub",
    date: "Mar 2024",
    desc: "Full-stack e-commerce app with responsive React frontend and Spring Boot backend. Achieved 90+ Lighthouse performance.",
    tags: ["React", "Spring Boot", "SQL"],
  },
  {
    title: "AI Enabled Fintech Invoice Management",
    date: "May 2023",
    desc: "AI-enabled B2B invoice prediction app using ML, Java, and SQL to handle 10k+ records.",
    tags: ["ML", "Java", "SQL"],
  },
  {
    title: "House Price Prediction",
    date: "Feb 2023",
    desc: "Machine learning model to forecast house prices with ~95% accuracy.",
    tags: ["Python", "ML", "Data"],
  },
];

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans">
      <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md">AK</div>
            <h1 className="text-xl font-bold tracking-tight">Ashish Kumar</h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-base font-medium">About</a>
            <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-base font-medium">Experience</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-base font-medium">Projects</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-base font-medium">Contact</a>

            <button
              onClick={() => setDark((s) => !s)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle dark mode"
            >
              {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setDark((s) => !s)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle dark mode"
            >
              {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen((s) => !s)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Open mobile menu"
            >
              <FiMenu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <motion.nav
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 overflow-hidden shadow-md absolute w-full top-[68px] z-40"
      >
        <div className="flex flex-col items-start px-6 py-4 space-y-4">
          <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-lg font-medium w-full" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#experience" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-lg font-medium w-full" onClick={() => setMobileMenuOpen(false)}>Experience</a>
          <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-lg font-medium w-full" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-lg font-medium w-full" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      </motion.nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <h2 className="text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900 dark:text-gray-100 mb-4">
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Ashish Kumar</span>.
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Full-stack developer with experience in machine learning, passionate about building scalable applications and collaborating on impactful projects. Let’s connect!
            </p>

            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
              >
                <FiLinkedin size={20} /> LinkedIn
              </a>

              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
              >
                <FiGithub size={20} /> GitHub
              </a>

              <a
                href={social.leetcode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
              >
                LeetCode
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 text-base text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <FiMail size={18} /> <a href={`mailto:${social.email}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{social.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone size={18} /> <a href={`tel:${social.phone}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{social.phone}</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            {/* Animated Avatar Placeholder */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-700 dark:to-purple-800 flex items-center justify-center overflow-hidden shadow-2xl border-4 border-white dark:border-gray-900 mr-20">
              <img src="https://media.licdn.com/dms/image/v2/D4D03AQGVjAYXjCJeQg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705389296811?e=1760572800&v=beta&t=jOqQMf_SaVoC9GZ1V54d6wsQe8o-vu5PxIRx6zJD0gw" alt="Ashish Kumar Animated Avatar" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20 lg:py-28 text-gray-700 dark:text-gray-300">
          <motion.h3 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h3>
          <motion.p className="text-lg leading-relaxed max-w-4xl mx-auto text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
           I build full-stack solutions that combine robust backends with intuitive, responsive frontends. My experience spans JavaScript frameworks, scalable APIs, relational databases, and machine learning integrations. In my current role, I’m developing a production-grade application with Vue.js, Node.js, and PostgreSQL, where I engineered a machine learning–powered chatbot to deliver smarter, real-time interactions. Beyond coding, I focus on optimizing performance, ensuring reliability, and exploring how AI can enhance modern web applications.
          </motion.p>

          <motion.div
            className="bg-gradient-to-br from-indigo-50 dark:from-gray-800 to-purple-50 dark:to-gray-900 rounded-3xl p-10 shadow-xl border border-gray-100 dark:border-gray-800 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Quick Facts</h3>
            <ul className="grid grid-cols-1 gap-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
  <li className="flex items-start">
    <strong className="w-30 text-gray-800 dark:text-gray-200 flex-shrink-0">Education:</strong>
    <span>B.E. Computer Science, KIIT (2020–2024) — CGPA 8.93</span>
  </li>
  <li className="flex items-start">
    <strong className="w-30 text-gray-800 dark:text-gray-200 flex-shrink-0">Languages:</strong>
    <span>C++, Java, Python, JavaScript, SQL</span>
  </li>
  <li className="flex items-start">
    <strong className="w-30 text-gray-800 dark:text-gray-200 flex-shrink-0">Tech Stack:</strong>
    <span>React.js, Vue.js, Angular, Node.js, Spring Boot, MongoDB, Docker, AWS</span>
  </li>
  <li className="flex items-start">
    <strong className="w-30 text-gray-800 dark:text-gray-200 flex-shrink-0">Certifications:</strong>
    <span>Google Cloud Digital Leader; AWS Academy Certification</span>
  </li>
</ul>

          </motion.div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900 rounded-3xl p-10 lg:p-16 shadow-xl border border-gray-100 dark:border-gray-800">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">My Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="p-8 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-950 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-2xl text-gray-900 dark:text-gray-100 mb-3">Languages</h4>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">C++, Java, Python, JavaScript, SQL, TypeScript</p>
            </motion.div>
            <motion.div
              className="p-8 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-950 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-2xl text-gray-900 dark:text-gray-100 mb-3">Frameworks & Tools</h4>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">React.js, Node.js, Spring Boot, Next.js, Docker, Git, RESTful APIs, Tailwind CSS</p>
            </motion.div>
            <motion.div
              className="p-8 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-950 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-2xl text-gray-900 dark:text-gray-100 mb-3">Cloud & AI</h4>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">AWS, GCP (Google Cloud Digital Leader), Azure, Kubernetes, LLMs, Machine Learning, Data Science</p>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20 lg:py-28">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
            <motion.h3 className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center sm:text-left"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h3>
            <motion.a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 sm:mt-0 text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-2 text-lg font-medium"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              View all projects <FiGithub size={20} />
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, index) => (
              <motion.article
                key={p.title}
                className="p-8 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-950 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-start mb-4 flex-grow">
                  <h4 className="font-bold text-xl text-gray-900 dark:text-gray-100 mb-2">{p.title}</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{p.date}</span>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-grow">{p.desc}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900 rounded-3xl p-10 lg:p-16 shadow-xl border border-gray-100 dark:border-gray-800">
          <motion.h3 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h3>
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + index}
                className="p-8 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-950 shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h4 className="font-bold text-xl text-gray-900 dark:text-gray-100">{exp.role}</h4>
                    <p className="text-md text-gray-600 dark:text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">{exp.date}</span>
                </div>
                <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300 space-y-2 marker:text-indigo-600 dark:marker:text-indigo-400">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="py-20 lg:py-28">
          <motion.h3 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Certifications
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="p-8 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-950 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" alt="Google Cloud" className="w-16 h-16 mb-4" />
              <h4 className="font-bold text-xl text-gray-900 dark:text-gray-100">Google Cloud Digital Leader</h4>
              <p className="text-base text-gray-600 dark:text-gray-400 mt-2">Issued: May 2024</p>
            </motion.div>
            <motion.div
              className="p-8 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-950 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" alt="AWS" className="w-16 h-16 mb-4" />
              <h4 className="font-bold text-xl text-gray-900 dark:text-gray-100">AWS Academy Certification</h4>
              <p className="text-base text-gray-600 dark:text-gray-400 mt-2">Issued: April 2023</p>
            </motion.div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900 rounded-3xl p-10 lg:p-16 shadow-xl border border-gray-100 dark:border-gray-800">
          <motion.h3 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get in touch
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="p-8 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-950 shadow-md flex flex-col justify-between h-full"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                <h4 className="font-bold text-2xl text-gray-900 dark:text-gray-100 mb-4">Contact Information</h4>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">Feel free to reach out to me through email or phone. I'm always open to new opportunities and collaborations!</p>
                <p className="mt-6 text-lg">Email: <a className="text-indigo-600 dark:text-indigo-400 hover:underline transition-colors" href={`mailto:${social.email}`}>{social.email}</a></p>
                <p className="mt-2 text-lg">Phone: <a className="text-indigo-600 dark:text-indigo-400 hover:underline transition-colors" href={`tel:${social.phone}`}>{social.phone}</a></p>
              </div>
              <div className="mt-8 flex gap-5">
                <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><FiGithub size={28} /></a>
                <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><FiLinkedin size={28} /></a>
                <a href={social.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">LC</a>
              </div>
            </motion.div>

            <motion.form
              className="p-8 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-950 shadow-md flex flex-col gap-6 h-full"
              action="https://formspree.io/f/myzdayrz" // Replace 'your_form_id' with your actual Formspree form ID
              method="POST"
            >
              <h4 className="font-bold text-2xl text-gray-900 dark:text-gray-100 mb-2">Send a Message</h4>
              <input
                className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all w-full"
                placeholder="Your name" required name="name"
              />
              <input
                className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all w-full"
                placeholder="Your email" type="email" required name="email"
              />
              <textarea
                className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 h-40 resize-y focus:ring-2 focus:ring-indigo-500 outline-none transition-all w-full"
                placeholder="Your message" required name="message"
              />
              <button
                className="mt-4 px-8 py-4 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-md text-lg w-full"
                type="submit"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </section>

      </main>

      <footer className="mt-20 py-10 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <p className="text-center sm:text-left mb-4 sm:mb-0">© {new Date().getFullYear()} Ashish Kumar. All rights reserved.</p>
          <div className="flex items-center gap-6 text-base">
            <a href={social.github} target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">GitHub</a>
            <a href={social.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">LinkedIn</a>
            <a href={`mailto:${social.email}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}