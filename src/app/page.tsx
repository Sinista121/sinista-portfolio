"use client";

import React from "react";
import {
  FaUser,
  FaProjectDiagram,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRust,
  SiGo,
  SiFirebase,
} from "react-icons/si";

const projects = [
  {
    title: "Modern Portfolio",
    description:
      "A sleek, responsive portfolio built with Next.js and Tailwind CSS.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "E-commerce Platform",
    description: "Fullstack e-commerce app using React, Next.js, and MongoDB.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Task Management App",
    description:
      "Productivity app with drag-and-drop functionality and team collaboration features.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather application with 5-day forecasts and location search.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
];

const skills = [
  {
    name: "React.js",
    Icon: SiReact,
    colors: "bg-blue-600/20 text-blue-400 border-blue-500",
  },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    colors: "bg-black/20 text-white border-gray-400",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    colors: "bg-blue-800/20 text-blue-300 border-blue-600",
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    colors: "bg-green-700/20 text-green-400 border-green-600",
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    colors: "bg-cyan-600/20 text-cyan-300 border-cyan-500",
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    colors: "bg-green-800/20 text-green-300 border-green-700",
  },
  {
    name: "PostgreSQL",
    Icon: SiPostgresql,
    colors: "bg-blue-900/20 text-blue-200 border-blue-800",
  },
  {
    name: "Firebase",
    Icon: SiFirebase,
    colors: "bg-orange-600/20 text-orange-300 border-orange-500",
  },
  {
    name: "Python",
    Icon: SiPython,
    colors: "bg-yellow-600/20 text-yellow-300 border-yellow-500",
  },
  {
    name: "Rust",
    Icon: SiRust,
    colors: "bg-orange-800/20 text-orange-200 border-orange-700",
  },
  {
    name: "Go",
    Icon: SiGo,
    colors: "bg-blue-500/20 text-blue-200 border-blue-400",
  },
];

const timeline = [
  {
    title: "Started Coding",
    description: "2020 - Built discord bots and sites",
  },
  {
    title: "High School",
    description: "Graduated 2024 - Computer Science focus",
  },
  {
    title: "First Paid Project",
    description: "2024 - Developed client website",
  },
  {
    title: "College",
    description: "Started 2025 - Computer Science major",
  },
  {
    title: "Open Source Contribution",
    description: "2025 - Contributed to React libraries",
  },
];

export default function Home() {
  return (
    <main className="bg-[#2d2d2d] min-h-screen text-[#ededed] font-sans!">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[80vh] h-[80vh] aspect-square rounded-full bg-gradient-to-br from-white/20 to-white/5 blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative flex flex-col items-center justify-center z-10">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-[#ededed] tracking-tight font-handwriting!">
            Sinista
          </h1>
          <h2 className="text-xl sm:text-2xl mb-6 font-medium text-white">
            Fullstack Developer &mdash; React & Next.js Specialist
          </h2>
          <p className="max-w-xl text-center text-white mb-8">
            I craft robust, scalable web applications with a focus on modern
            JavaScript, React, and Next.js. Let{"'"}s build something amazing
            together.
          </p>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-[#232323] text-[#ededed] font-semibold shadow-lg border border-[#444] transition backdrop-blur-sm hover:shadow-white/20 hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Let{"'"}s Talk
          </a>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative -mb-px h-24 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full rotate-180"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity="0.25"
            className="fill-[#232323]"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity="0.5"
            className="fill-[#232323]"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-[#232323]"
          />
        </svg>
      </div>

      {/* About Section */}
      <section id="about" className="bg-[#232323] pt-0 px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
            <FaUser /> About Me
          </h3>
          <p className="text-white text-lg mb-8">
            Hi, I{"'"}m Sinista, a passionate fullstack developer with a knack for
            building performant and user-friendly web solutions. My expertise
            lies in React and Next.js, but I love exploring new technologies and
            best practices. I thrive on challenges and am always eager to
            collaborate on exciting projects.
          </p>
          <h4 className="text-xl font-bold mb-5 mt-12 text-white">My Journey</h4>
          <div className="space-y-4 relative pl-8 border-l border-[#444]">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute w-4 h-4 bg-[#ededed] rounded-full -left-[2.4rem] top-1 border-4 border-[#232323]"></div>
                <h5 className="text-lg font-semibold text-white">
                  {item.title}
                </h5>
                <p className="text-[#bdbdbd]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#444] to-transparent my-8"></div>

      {/* Skills Section */}
      <section id="skills" className="bg-[#2d2d2d] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
            <FaCode /> Skills
          </h3>
          <ul className="flex flex-wrap gap-4">
            {skills.map(({ name, Icon, colors }, idx) => (
              <li
                key={idx}
                className={`px-4 py-2 rounded-full font-medium shadow flex items-center border ${colors}`}
              >
                <Icon className="mr-2" />
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Divider */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#444] to-transparent my-8"></div>

      {/* Projects Section */}
      <section id="projects" className="bg-[#232323] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
            <FaProjectDiagram />
            Projects
          </h3>
          <div className="grid gap-8 sm:grid-cols-2">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2d2d2d] rounded-xl shadow-lg p-6 hover:shadow-lg hover:shadow-[#444]/40 transition border border-[#444] group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-10 h-10 flex items-center justify-center bg-[#232323] rounded-bl-xl rounded-tr-xl transition-all duration-300 group-hover:bg-[#444] group-hover:w-12 group-hover:h-12 z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#ededed] transition-transform group-hover:scale-110"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </div>
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h4>
                <p className="text-white mb-4">{project.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#444] to-transparent my-8"></div>

      {/* Contact Section */}
      <section id="contact" className="bg-[#2d2d2d] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-2 text-white flex items-center gap-2">
            <FaEnvelope /> Contact
          </h3>
          <p className="text-[#bdbdbd] mb-8">
            Let{"'"}s connect! Feel free to reach out for collaborations, questions,
            or just to say hi.
          </p>
          <div className="w-full rounded-2xl border border-[#444] bg-[#232323] backdrop-blur-lg shadow-2xl p-8 flex flex-col gap-6 relative">
            <form className="flex flex-col gap-6">
              <div className="flex flex-row items-start gap-5">
                <span className="text-[#ededed] text-xl flex items-start pt-3">
                  <FaUser />
                </span>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-2 rounded-lg bg-white/5 text-[#ededed] focus:outline-none focus:ring-2 focus:ring-[#444] border border-[#444] w-full placeholder-[#bdbdbd] transition"
                />
              </div>
              <div className="flex flex-row items-start gap-5">
                <span className="text-[#ededed] text-xl flex items-start pt-3">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 rounded-lg bg-white/5 text-[#ededed] focus:outline-none focus:ring-2 focus:ring-[#444] border border-[#444] w-full placeholder-[#bdbdbd] transition"
                />
              </div>
              <div className="flex flex-row items-start gap-5">
                <span className="text-[#ededed] text-xl flex items-start pt-3">
                  <FaCode />
                </span>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="px-4 py-2 rounded-lg bg-white/5 text-[#ededed] focus:outline-none focus:ring-2 focus:ring-[#444] border border-[#444] w-full placeholder-[#bdbdbd] transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 mt-5 rounded-full bg-white/5 hover:bg-[#444] text-[#ededed] font-semibold shadow-lg border border-[#444] transition focus:outline-none focus:ring-2 focus:ring-[#ededed]/40 focus:ring-offset-2 focus:ring-offset-[#232323]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Floating Social Blob */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="backdrop-blur-xl bg-transparent rounded-full shadow-lg flex flex-col items-center gap-4 p-4 border border-[#444] transition-transform duration-200 hover:scale-105 hover:shadow-white/20">
          <a
            href="https://github.com/Sinista121"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#bdbdbd] text-2xl transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#bdbdbd] text-2xl transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </main>
  );
}
