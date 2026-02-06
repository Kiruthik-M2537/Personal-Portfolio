import React from 'react';

/* --- ICONS --- */
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden">
      
      {/* Background Grid Effect */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2d3748 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent cursor-pointer">
            MK<span className="text-teal-500">.</span>
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-40 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Open to Opportunities
            </div>
            
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Building digital <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
                  experiences.
                </span>
              </h1>
              <p className="mt-6 text-xl text-slate-400 leading-relaxed max-w-lg">
                I'm <strong className="text-white">Kiruthik M</strong>, a Computer Science Engineer crafting scalable web apps and exploring the depths of Java & Programming.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-black font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                View My Work
              </a>
              <a href="https://github.com/Kiruthik-M2537" target="_blank" rel="noreferrer" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 backdrop-blur-sm transition-all flex items-center gap-2 hover:border-white/20">
                <GithubIcon /> GitHub
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative group perspective-1000 max-w-md mx-auto lg:mr-0">
             {/* Decorative blob behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-purple-600 rounded-[2rem] blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#111] aspect-[4/5] shadow-2xl transform transition duration-500 group-hover:rotate-1">
              {/* Replace src with your actual photo path */}
              <img 
                src="/profile.jpeg" 
                alt="Kiruthik M" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-xl p-4 rounded-xl border border-white/10 flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
                  <CodeIcon />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Education</p>
                  <p className="text-sm font-semibold text-white">St. Joseph's College of Eng.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Education Bar */}
      <section className="py-10 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: "CGPA", value: "8.40", sub: "Current" },
             { label: "Class X", value: "91.0%", sub: "Score" },
             { label: "Class XII", value: "87.8%", sub: "Score" },
             { label: "Projects", value: "Multiple", sub: "Completed" },
           ].map((stat, i) => (
             <div key={i} className="text-center">
               <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
               <div className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
             </div>
           ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-slate-400 max-w-lg">
                A selection of projects where I've experimented with Full Stack Web Dev, AI, and System Design.
              </p>
            </div>
            <a href="https://github.com/Kiruthik-M2537" className="text-teal-400 hover:text-teal-300 flex items-center gap-2 text-sm font-medium group">
              View all repositories <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Project 1: HOPE */}
            <div className="group relative bg-[#111] rounded-2xl border border-white/10 hover:border-teal-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]">
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-teal-500/10 group-hover:bg-teal-500/0 transition-colors"></div>
                <span className="text-slate-600 font-mono text-sm">Preview: HOPE Dashboard</span>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">HOPE Dashboard</h3>
                  {/* --- REPLACE WITH YOUR ACTUAL GITHUB LINK BELOW --- */}
                  <a href="https://github.com/Kiruthik-M2537/HOPE-Interactive-educational-dashboard" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white"><GithubIcon /></a>
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  An interactive educational dashboard allowing real-time data visualization. Built to simplify complex student metrics into actionable insights.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Tailwind', 'Chart.js'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 text-teal-300 text-xs rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 2: Memo Vault */}
            <div className="group relative bg-[#111] rounded-2xl border border-white/10 hover:border-purple-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/0 transition-colors"></div>
                 <span className="text-slate-600 font-mono text-sm">Preview: Memo Vault</span>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">Memo Vault</h3>
                  {/* --- REPLACE WITH YOUR ACTUAL GITHUB LINK BELOW --- */}
                  <a href="https://github.com/Kiruthik-M2537/MemoVault" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white"><GithubIcon /></a>
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  A secure digital notebook application with data persistence. Focuses on user privacy and organized data retrieval for quick access to notes.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Encryption'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 text-purple-300 text-xs rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 3: BlueGuard (GitHub) */}
           {/* Project 3: Matsyan DeepSeekers */}
            <div className="group relative bg-[#111] rounded-2xl border border-white/10 hover:border-cyan-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/0 transition-colors"></div>
                 <span className="text-slate-600 font-mono text-sm">Preview: DeepSeekers</span>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">Matsyan DeepSeekers</h3>
                  <a href="https://github.com/Kiruthik-M2537/matsyan-DeepSeekers" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white"><GithubIcon /></a>
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Advanced marine conservation tool powered by AI. Detects and classifies aquatic life to support ecosystem monitoring and research.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['CSS', 'AI/ML', 'Open Source'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 text-cyan-300 text-xs rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Marquee Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12 text-slate-300">Technologies I Work With</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Java", "Python", "JavaScript", "React.js", "Tailwind CSS",
              "Node.js", "MySQL", "Git & GitHub", "IoT/Hardware", "Figma"
            ].map((skill, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative px-6 py-3 bg-[#151515] rounded-lg border border-white/5 text-slate-300 font-medium cursor-default">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#111] to-[#151515] p-12 rounded-3xl border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
             <MailIcon /> {/* Large decorative icon */}
          </div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Let's Build Something Together</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto">
              I'm currently looking for internships and collaborative projects. 
              If you have an idea or a role in mind, drop me a message!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="mailto:kiruthik2537@gmail.com" className="flex items-center justify-center gap-3 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-black font-bold rounded-xl transition-all hover:scale-105">
                <MailIcon /> kiruthik2537@gmail.com
              </a>
              <a href="https://linkedin.com/in/kiruthik-m-2338a4376" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 bg-[#0077b5] hover:bg-[#006396] text-white font-bold rounded-xl transition-all hover:scale-105">
                <LinkedinIcon /> LinkedIn
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 text-slate-500 text-sm">
              <p>Also active in the <span className="text-teal-400">ACM Student Chapter</span> (R&D & Events Team)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 text-center text-slate-600 text-sm">
        <p>© {new Date().getFullYear()} Kiruthik M. Crafted with React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default Portfolio;