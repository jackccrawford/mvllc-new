'use client'

import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-primary flex items-center gap-2">
            <img src="/images/mvlogo.png" alt="ManagedV Logo" className="h-8" />
            <span>ManagedV</span>
          </a>
          <div className="hamburger md:hidden">
            <button className="p-2" aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <ul className="nav-menu hidden md:flex space-x-4">
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#approach" className="hover:text-primary">Approach</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col min-h-screen pt-16">
        <div id="about" className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Building
              <span className="text-primary block">AI-First Ventures</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Turning visionary AI concepts into market-changing realities
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full max-w-xl mx-auto relative mt-8"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gray-900/90 border border-gray-800 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-primary">mVara.ai</h2>
                  <a href="https://mvara.ai" target="_blank" className="text-primary text-sm">
                    Coming Soon <span className="ml-2">→</span>
                  </a>
                </div>
                <p className="text-gray-400 mb-4">
                  Experience the future of leadership planning through advanced AI digital twins
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">AI Platform</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Digital Twin</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Enterprise</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12"
          >
            <a href="#contact" className="bg-primary hover:bg-primary/90 text-black font-bold px-8 py-3 rounded-lg inline-block">
              Start Building →
            </a>
          </motion.div>
        </div>

        <section id="approach" className="py-16 px-4 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <svg className="w-12 h-12 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <h3 className="text-xl font-semibold mb-2">Launch</h3>
                <p className="text-gray-400">Transforming cutting-edge AI concepts into market-ready ventures</p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <svg className="w-12 h-12 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
                <h3 className="text-xl font-semibold mb-2">Innovate</h3>
                <p className="text-gray-400">Pushing the boundaries of what's possible with AI</p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <svg className="w-12 h-12 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <h3 className="text-xl font-semibold mb-2">Scale</h3>
                <p className="text-gray-400">Accelerating growth with proven AI expertise</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
            <p className="text-lg text-gray-400 mb-8">Ready to build something extraordinary with AI?</p>
            <a
              href="https://x.com/jackccrawford"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button bg-primary hover:bg-primary/90 text-black font-bold px-8 py-3 rounded-lg inline-flex items-center justify-center transition-colors duration-200 gap-2"
            >
              @jackccrawford
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </section>
      </main>

      <footer className="w-full py-8 px-4 border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left text-sm text-gray-500">
            Managed Ventures LLC • San Francisco, CA
          </p>
          <p className="text-sm text-gray-500">
            We respect your privacy. This site does not use cookies or tracking technologies.
          </p>
        </div>
      </footer>
    </div>
  )
}
