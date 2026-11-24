import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import {
  FiAward,
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiPhone,
  FiX,
} from "react-icons/fi";
import profileImg from "./assets/dp.jpeg";

const social = {
  linkedin: "https://www.linkedin.com/in/ashish15x/",
  github: "https://github.com/ashish15x",
  leetcode: "https://leetcode.com/u/ashish15x/",
  email: "ashish15x@gmail.com",
  phone: "+91 7070128551",
};

const roles = ["Full-Stack AI Engineer", "RAG systems builder", "Next.js + Python", "Product-minded engineer"];

const experiences = [
  {
    company: "Hughes Systique Pvt. Ltd.",
    role: "Fullstack AI Engineer",
    date: "January 2024 – Present",
    location: "Gurugram, Haryana",
    bullets: [
      "Built full-stack apps with Next.js, React, Node.js, and PostgreSQL for scalable SaaS workflows.",
      "Deployed GenAI RAG pipelines for semantic search, improving retrieval efficiency.",
      "Optimized RESTful APIs and backend services to significantly reduce response latency.",
      "Developed responsive Next.js/React frontends with SSR to improve user engagement and reduce manual effort.",
      "Engineered embedding pipelines and cosine similarity ranking for high-accuracy semantic search.",
      "Awarded Best Presenter and Innovation Catalyst at the company hackathon for AI-driven solutions.",
    ],
  },
  {
    company: "HighRadius",
    role: "Product and Engineering Intern",
    date: "May 2023 – June 2023",
    location: "Bhubaneswar, Odisha",
    bullets: [
      "Designed features for a B2B AI-enabled Fintech platform, successfully delivering all tasks within sprint timelines.",
      "Built machine learning pipelines on financial records for automated payment prediction.",
      "Translated product requirements into scalable React components and REST APIs to accelerate feature delivery.",
    ],
  },
];

const projects = [
  {
    title: "ArchSync",
    date: "December 2025",
    link: "https://archsync.netlify.app",
    githubLink: "https://github.com/ashish15x/ArchSync",
    desc: "AI-driven platform to capture and analyze team architectural knowledge using LLM embeddings and vector search, reducing misalignment by 30%. Implemented semantic search and consensus analysis using Google Gemini embeddings (768-dim), pgvector, and cosine similarity, processing 1,000+ queries with real-time insights. Developed full-stack system using Next.js, TypeScript, Tailwind CSS, and Supabase PostgreSQL; won internal company hackathon among 10 teams.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Google Gemini", "pgvector"],
    accent: "from-[#fde8e1] to-[#fff8f0]",
  },
  {
    title: "Sneakhub",
    date: "March 2024 – April 2024",
    desc: "Full-stack e-commerce web application with responsive React.js frontend, achieving a 90+ Lighthouse performance score. Constructed robust RESTful backend APIs using Spring Boot for reliable data handling. Managed efficient SQL database operations, maintaining data integrity and optimizing retrieval. Integrated core e-commerce functionalities, including product browsing, cart, and order processing.",
    tags: ["React.js", "Spring Boot", "SQL", "RESTful APIs"],
    accent: "from-[#dff3ec] to-[#fff8f0]",
  },
  {
    title: "AI Enabled Fintech B2B Invoice Management Application",
    date: "May 2023 – June 2023",
    desc: "Architected and implemented a full-stack AI-enabled Fintech B2B Invoice Management application using machine learning models to accurately predict order amounts, improving forecasting capabilities for business transactions. Made robust backend using Java and SQL for data management, handling 10,000+ invoice records.",
    tags: ["ML", "Java", "SQL", "React"],
    accent: "from-[#e4f0fb] to-[#fff8f0]",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "C++", "SQL"],
    tone: "bg-[#fde8e1]",
  },
  {
    title: "Frameworks & tools",
    items: ["Next.js", "React.js", "Vue.js", "Node.js", "Express.js", "Spring Boot", "PostgreSQL", "MongoDB", "Kafka", "Tailwind CSS", "Docker", "Git"],
    tone: "bg-[#dff3ec]",
  },
  {
    title: "Cloud & AI",
    items: ["AWS", "GCP", "Kubernetes", "LLMs", "RAG", "LangChain", "LangGraph", "LlamaIndex", "Vector DBs", "Embeddings"],
    tone: "bg-[#e4f0fb]",
  },
];

const marqueeItems = [
  "Next.js", "Python", "RAG", "PostgreSQL", "LangChain", "TypeScript", "AWS", "Docker", "pgvector", "React", "Node.js", "Gemini",
];

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function Magnetic({ children, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 14 });
  const springY = useSpring(y, { stiffness: 180, damping: 14 });

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.28);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.28);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ index, children }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-sm tracking-[0.22em] uppercase text-[#8a7468]">
      <span className="font-semibold text-[#e25c3b]">{index}</span>
      <span className="h-px w-10 bg-[#e25c3b]/50" />
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 180]);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll("a, button, input, textarea");
    const on = () => setHovering(true);
    const off = () => setHovering(false);
    nodes.forEach((n) => {
      n.addEventListener("mouseenter", on);
      n.addEventListener("mouseleave", off);
    });
    return () => {
      nodes.forEach((n) => {
        n.removeEventListener("mouseenter", on);
        n.removeEventListener("mouseleave", off);
      });
    };
  }, [menuOpen]);

  const doubledMarquee = useMemo(() => [...marqueeItems, ...marqueeItems], []);

  return (
    <div className="mesh relative min-h-screen font-sans text-ink">
      <div className="grain" />
      <motion.div className="fixed top-0 left-0 right-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-[#e25c3b] via-[#e0a03a] to-[#2f8a78]" style={{ scaleX: progress }} />

      <motion.div
        className="cursor-dot pointer-events-none fixed z-[80] hidden md:block h-2.5 w-2.5 rounded-full bg-[#e25c3b]"
        animate={{ x: cursor.x - 5, y: cursor.y - 5 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.2 }}
      />
      <motion.div
        className="cursor-ring pointer-events-none fixed z-[80] hidden md:block rounded-full border border-[#e25c3b]/70"
        animate={{
          x: cursor.x - (hovering ? 22 : 16),
          y: cursor.y - (hovering ? 22 : 16),
          width: hovering ? 44 : 32,
          height: hovering ? 44 : 32,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
      />

      <motion.div style={{ y: blobY }} className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 blob bg-[#fde8e1] blur-2xl opacity-80" />
      <div className="pointer-events-none absolute top-40 right-[-80px] h-80 w-80 blob bg-[#dff3ec] blur-2xl opacity-70 float-slow" />

      <header className="sticky top-0 z-50">
        <div className="mx-auto mt-3 max-w-6xl px-4">
          <div className="flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-4 py-2.5 shadow-[0_10px_40px_rgba(44,34,28,0.06)] backdrop-blur-xl">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#2c221c] text-sm font-semibold text-[#fff8f0]">AK</span>
              <span className="font-display text-lg font-semibold tracking-tight">Ashish Kumar</span>
            </a>
            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-[#6d5f56] transition hover:bg-[#fff1e8] hover:text-[#2c221c]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <Magnetic>
                <a
                  href="#contact"
                  className="hidden rounded-full bg-[#e25c3b] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#cc4d2f] sm:inline-flex"
                >
                  Let’s talk
                </a>
              </Magnetic>
              <button
                className="grid h-10 w-10 place-items-center rounded-full bg-[#fff1e8] text-[#2c221c] md:hidden"
                onClick={() => setMenuOpen((s) => !s)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-4 top-[76px] z-50 rounded-3xl border border-white/80 bg-white/90 p-5 shadow-xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-3 py-3 text-lg font-medium hover:bg-[#fff1e8]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="top" className="relative z-10 mx-auto max-w-6xl px-4 pb-8">
        <section className="grid items-center gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e25c3b]/20 bg-white/70 px-3 py-1.5 text-sm text-[#6d5f56] shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2f8a78] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#2f8a78]" />
              </span>
              Open to thoughtful collaborations
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display text-5xl leading-[1.05] font-semibold tracking-tight text-[#2c221c] sm:text-6xl lg:text-7xl">
              Building calm,
              <br />
              intelligent products
              <br />
              that actually ship.
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-5 h-8 overflow-hidden text-lg text-[#e25c3b] sm:text-xl">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roles[roleIndex]}
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -18, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-5 max-w-xl text-lg leading-relaxed text-[#6d5f56]">
              Full-Stack AI Engineer specializing in scalable web apps and AI-powered systems. I build production-ready products using Next.js, Python, PostgreSQL, and modern cloud technologies—leveraging RAG and LLMs to create intelligent automation.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Magnetic>
                <a href={social.linkedin} target="_blank" rel="noreferrer" className="shine inline-flex items-center gap-2 rounded-full bg-[#2c221c] px-5 py-3 text-sm font-semibold text-white">
                  <FiLinkedin /> LinkedIn <FiArrowUpRight />
                </a>
              </Magnetic>
              <Magnetic>
                <a href={social.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#2c221c]/12 bg-white/80 px-5 py-3 text-sm font-semibold text-[#2c221c] shadow-sm">
                  <FiGithub /> GitHub
                </a>
              </Magnetic>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-5 text-sm text-[#6d5f56]">
              <a href={`mailto:${social.email}`} className="inline-flex items-center gap-2 hover:text-[#e25c3b]">
                <FiMail /> {social.email}
              </a>
              <a href={`tel:${social.phone}`} className="inline-flex items-center gap-2 hover:text-[#e25c3b]">
                <FiPhone /> {social.phone}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-6 blob bg-gradient-to-br from-[#fde8e1] via-[#dff3ec] to-[#e4f0fb]" />
            <div className="relative overflow-hidden rounded-[2.2rem] border-[6px] border-white shadow-[0_30px_80px_rgba(44,34,28,0.12)]">
              <img src={profileImg} alt="Ashish Kumar" className="h-[420px] w-full object-cover" />
            </div>
            <motion.div
              className="absolute -left-6 top-6 rounded-2xl bg-white/90 px-3 py-2 text-sm shadow-lg backdrop-blur"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              RAG · Vector search
            </motion.div>
            <motion.div
              className="absolute -right-4 bottom-10 rounded-2xl bg-[#2c221c] px-3 py-2 text-sm text-white shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Next.js · PostgreSQL
            </motion.div>
            <motion.div
              className="absolute right-8 -top-4 rounded-full bg-[#e0a03a] px-3 py-1.5 text-xs font-semibold text-[#2c221c] shadow"
              animate={{ rotate: [ -4, 4, -4 ] }}
              transition={{ duration: 3.4, repeat: Infinity }}
            >
              Hackathon winner
            </motion.div>
          </motion.div>
        </section>

        <div className="-mx-4 mb-8 overflow-hidden border-y border-[#2c221c]/8 bg-white/40 py-4">
          <div className="marquee-track gap-10 px-4 text-sm font-semibold tracking-[0.18em] uppercase text-[#8a7468]">
            {doubledMarquee.map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-10">
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-[#e25c3b]" />
              </span>
            ))}
          </div>
        </div>

        <section id="about" className="scroll-mt-28 py-20">
          <SectionLabel index="01">About</SectionLabel>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="font-display max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Engineering at the intersection of product, systems, and generative AI.
          </motion.h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-[#6d5f56]"
            >
              I build full-stack AI solutions that combine robust backends with intuitive, responsive frontends. With 3+ years of experience, my background spans modern web frameworks, scalable APIs, relational databases, and generative AI integrations. In my current work, I develop production-grade applications using Next.js, Python, and PostgreSQL, where I design Retrieval-Augmented Generation (RAG) pipelines using LLMs, embeddings, and vector databases to power intelligent search and automation. Beyond coding, I focus on optimizing performance, ensuring system reliability, and exploring how AI can enhance modern web applications.
            </motion.p>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["3+", "Years building"],
                ["2", "Product teams"],
                ["8.93", "CGPA at KIIT"],
                ["1st", "Hackathon prize"],
              ].map(([n, l], i) => (
                <motion.div
                  key={l}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-3xl bg-white/80 p-5 shadow-[0_12px_30px_rgba(44,34,28,0.05)]"
                >
                  <p className="font-display text-3xl font-semibold text-[#e25c3b]">{n}</p>
                  <p className="mt-1 text-sm text-[#6d5f56]">{l}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 grid gap-4 rounded-[2rem] bg-white/75 p-6 shadow-[0_20px_50px_rgba(44,34,28,0.06)] sm:grid-cols-2"
          >
            {[
              ["Education", "B.E. Computer Science, KIIT (2020–2024) — CGPA 8.93"],
              ["Languages", "C++, Java, Python, TypeScript, JavaScript, SQL"],
              ["Tech stack", "Next.js, React.js, Vue.js, Node.js, Spring Boot, PostgreSQL, MongoDB, AWS, GCP, Docker, Kubernetes"],
              ["AI & LLM", "RAG, LLMs, Guardrails, LangChain, LangGraph, LlamaIndex, Vector Databases, Prompt Engineering, Embeddings"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl bg-[#fff8f0] p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[#e25c3b]">{k}</p>
                <p className="mt-2 text-[#2c221c]">{v}</p>
              </div>
            ))}
          </motion.div>
        </section>

        <section id="skills" className="scroll-mt-28 py-16">
          <SectionLabel index="02">Expertise</SectionLabel>
          <h2 className="font-display mb-10 text-4xl font-semibold tracking-tight sm:text-5xl">A toolkit for shipping AI products.</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={`${group.tone} shine rounded-[2rem] p-7 shadow-[0_16px_40px_rgba(44,34,28,0.06)]`}
              >
                <h3 className="font-display text-2xl font-semibold">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full bg-white/70 px-3 py-1.5 text-sm text-[#2c221c]">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-28 py-16">
          <SectionLabel index="03">Experience</SectionLabel>
          <h2 className="font-display mb-12 text-4xl font-semibold tracking-tight sm:text-5xl">Where the work happened.</h2>
          <div className="relative space-y-8 before:absolute before:top-3 before:bottom-3 before:left-[11px] before:w-px before:bg-gradient-to-b before:from-[#e25c3b] before:to-[#2f8a78] md:before:left-[15px]">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="relative pl-10 md:pl-12"
              >
                <span className="absolute left-0 top-3 h-6 w-6 rounded-full border-4 border-white bg-[#e25c3b] shadow" />
                <div className="rounded-[1.8rem] bg-white/80 p-7 shadow-[0_16px_40px_rgba(44,34,28,0.06)]">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-semibold">{exp.role}</h3>
                      <p className="text-[#e25c3b]">{exp.company}</p>
                      <p className="mt-1 inline-flex items-center gap-1 text-sm text-[#6d5f56]">
                        <FiMapPin /> {exp.location}
                      </p>
                    </div>
                    <span className="rounded-full bg-[#fff1e8] px-3 py-1 text-sm text-[#6d5f56]">{exp.date}</span>
                  </div>
                  <ul className="mt-5 space-y-2.5 text-[#6d5f56]">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#2f8a78]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-28 py-16">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <SectionLabel index="04">Selected work</SectionLabel>
              <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Projects with a pulse.</h2>
            </div>
            <a href={social.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#e25c3b]">
              All on GitHub <FiGithub />
            </a>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((p, index) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ delay: index * 0.08 }}
                className={`shine rounded-[2rem] bg-gradient-to-br ${p.accent} p-7 shadow-[0_18px_45px_rgba(44,34,28,0.07)] ${index === 0 ? "lg:col-span-2" : ""}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-[#8a7468]">{p.date}</p>
                    <h3 className="font-display mt-1 text-2xl font-semibold sm:text-3xl">{p.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    {p.githubLink && (
                      <a href={p.githubLink} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-white/80" aria-label="GitHub">
                        <FiGithub />
                      </a>
                    )}
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-[#2c221c] text-white" aria-label="Live project">
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
                <p className={`mt-4 leading-relaxed text-[#6d5f56] ${index === 0 ? "max-w-3xl" : ""}`}>{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="certifications" className="scroll-mt-28 py-16">
          <SectionLabel index="05">Credentials</SectionLabel>
          <h2 className="font-display mb-10 text-4xl font-semibold tracking-tight sm:text-5xl">Certifications</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Google Cloud Digital Leader Certification",
                date: "May 2024 – June 2024",
                href: "https://drive.google.com/file/d/1SDxkXgPB5hisN_bCIzsLCSK7ckw6Y2vS/view?usp=sharing",
                logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
                tone: "bg-[#e4f0fb]",
              },
              {
                title: "AWS Academy Certification",
                date: "April 2023 – May 2023",
                href: "https://drive.google.com/file/d/1kQSfnep12pAziJgpYvoRb5S1CBidZxP8/view?usp=sharing",
                logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
                tone: "bg-[#fff1e8]",
              },
            ].map((c, i) => (
              <motion.a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, rotate: i === 0 ? -1 : 1 }}
                className={`${c.tone} flex items-center gap-5 rounded-[1.8rem] p-6 shadow-[0_16px_40px_rgba(44,34,28,0.06)]`}
              >
                <img src={c.logo} alt="" className="h-14 w-14" />
                <div>
                  <h3 className="font-display text-xl font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm text-[#6d5f56]">{c.date}</p>
                  <p className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#e25c3b]">
                    <FiAward /> View certificate
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 py-16">
          <SectionLabel index="06">Contact</SectionLabel>
          <h2 className="font-display mb-10 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">Let’s make something quietly excellent.</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] bg-[#2c221c] p-8 text-[#fff8f0]"
            >
              <p className="text-lg leading-relaxed text-[#efe4d8]">
                Feel free to reach out through email or phone. I’m always open to new opportunities and collaborations.
              </p>
              <div className="mt-8 space-y-3">
                <a href={`mailto:${social.email}`} className="block text-xl hover:text-[#e0a03a]">{social.email}</a>
                <a href={`tel:${social.phone}`} className="block text-xl hover:text-[#e0a03a]">{social.phone}</a>
              </div>
              <div className="mt-10 flex gap-3">
                <a href={social.github} target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-full bg-white/10">
                  <FiGithub size={22} />
                </a>
                <a href={social.linkedin} target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-full bg-white/10">
                  <FiLinkedin size={22} />
                </a>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 rounded-[2rem] bg-white/80 p-8 shadow-[0_18px_45px_rgba(44,34,28,0.07)]"
              action="https://formspree.io/f/myzdayrz"
              method="POST"
            >
              <input className="rounded-2xl border border-[#2c221c]/10 bg-[#fff8f0] p-4 outline-none transition focus:border-[#e25c3b]" placeholder="Your name" required name="name" />
              <input className="rounded-2xl border border-[#2c221c]/10 bg-[#fff8f0] p-4 outline-none transition focus:border-[#e25c3b]" placeholder="Your email" type="email" required name="email" />
              <textarea className="h-36 resize-y rounded-2xl border border-[#2c221c]/10 bg-[#fff8f0] p-4 outline-none transition focus:border-[#e25c3b]" placeholder="Your message" required name="message" />
              <Magnetic>
                <button className="w-full rounded-full bg-[#e25c3b] px-6 py-4 text-lg font-semibold text-white transition hover:bg-[#cc4d2f]" type="submit">
                  Send message
                </button>
              </Magnetic>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mt-8 border-t border-[#2c221c]/8 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-[#6d5f56] sm:flex-row">
          <p>© {new Date().getFullYear()} Ashish Kumar. Crafted with a little extra motion.</p>
          <div className="flex gap-5">
            <a href={social.github} target="_blank" rel="noreferrer" className="hover:text-[#e25c3b]">GitHub</a>
            <a href={social.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#e25c3b]">LinkedIn</a>
            <a href={`mailto:${social.email}`} className="hover:text-[#e25c3b]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
