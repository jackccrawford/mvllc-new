'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; content: React.ReactNode } | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const openModal = (title: string, contentType: 'tos' | 'privacy' | 'license') => {
    let content: React.ReactNode;
    
    if (contentType === 'tos') {
      content = (
        <div className="text-gray-300">
          <h2 className="text-xl font-bold mb-4">Terms of Service</h2>
          <p className="mb-4"><strong>Effective Date:</strong> April 1, 2026</p>
          <p className="mb-4"><strong>Managed Ventures LLC</strong> operates this website. By using this website, you agree to these terms.</p>

          <h3 className="text-lg font-semibold mb-2">Our Ventures</h3>
          <p className="mb-4"><strong>mVara</strong> (mvara.ai) is our AI memory and intelligence platform. RELAY is a commercial product requiring a separate license agreement.</p>
          <p className="mb-4"><strong>AgentDoor</strong> (agentdoor.ai) hosts our open source tools under the MIT License, including Geniuz, Clawmark, Token Scout, and Sendblue MCP.</p>

          <h3 className="text-lg font-semibold mb-2">Website Content</h3>
          <p className="mb-4">The website design, text, graphics, and logos are owned by Managed Ventures LLC and may not be reproduced without permission.</p>

          <h3 className="text-lg font-semibold mb-2">Disclaimer</h3>
          <p className="mb-4">All content is provided &quot;as-is&quot; without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>

          <h3 className="text-lg font-semibold mb-2">Limitation of Liability</h3>
          <p className="mb-4">To the maximum extent permitted by law, Managed Ventures LLC shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website.</p>

          <h3 className="text-lg font-semibold mb-2">Governing Law</h3>
          <p className="mb-4">These terms are governed by the laws of the State of California. Any disputes shall be resolved through mediation, and if unresolved, by binding arbitration administered by JAMS in Scottsdale, Arizona.</p>

          <p className="mb-4">
            Managed Ventures LLC<br />
            Email: <a href="mailto:legal@managedv.com" className="text-primary hover:underline">legal@managedv.com</a>
          </p>
        </div>
      );
    } else if (contentType === 'privacy') {
      content = (
        <div className="text-gray-300">
          <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
          <p className="mb-4"><strong>Effective Date:</strong> April 1, 2026</p>
          <p className="mb-4"><strong>Managed Ventures LLC</strong> operates this website.</p>

          <h3 className="text-lg font-semibold mb-2">What We Collect</h3>
          <p className="mb-4">This website does not use cookies, tracking pixels, or analytics services. We do not create user accounts. If you contact us, we collect only the information you provide (name, email, message).</p>

          <h3 className="text-lg font-semibold mb-2">What We Don&apos;t Do</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>We do not track visitors to this website.</li>
            <li>We do not use cookies.</li>
            <li>We do not sell data.</li>
            <li>We do not use your data to train AI models.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Your Rights</h3>
          <p className="mb-4">You may request access to, correction of, or deletion of any personal information we hold about you by emailing legal@managedv.com. California residents have additional rights under the CCPA. We do not sell personal information.</p>

          <h3 className="text-lg font-semibold mb-2">Security</h3>
          <p className="mb-4">We use standard security practices to protect any information you provide. However, no method of transmission over the internet is completely secure.</p>

          <p className="mb-4">
            Managed Ventures LLC<br />
            Email: <a href="mailto:legal@managedv.com" className="text-primary hover:underline">legal@managedv.com</a>
          </p>
        </div>
      );
    } else if (contentType === 'license') {
      content = (
        <div className="text-gray-300">
          <h2 className="text-xl font-bold mb-4">Software Licensing</h2>
          <p className="mb-4">Copyright &copy; 2026 Managed Ventures LLC. All Rights Reserved.</p>

          <h3 className="text-lg font-semibold mb-2">Open Source (MIT License)</h3>
          <p className="mb-4">The following products are available under the MIT License at github.com/jackccrawford: Geniuz, Clawmark, Token Scout, Sendblue MCP. Full license text is available in each repository.</p>

          <h3 className="text-lg font-semibold mb-2">Commercial Products</h3>
          <p className="mb-4">RELAY is a proprietary commercial product owned by Managed Ventures LLC. RELAY is not open source and requires a separate written license agreement. For licensing inquiries, contact legal@managedv.com.</p>

          <h3 className="text-lg font-semibold mb-2">Website</h3>
          <p className="mb-4">All website content, design, and branding are proprietary and may not be reproduced without written permission.</p>

          <p className="mb-4">
            Managed Ventures LLC<br />
            18291 N Pima Rd, Suite 110-411<br />
            Scottsdale, AZ 85255<br />
            <a href="mailto:legal@managedv.com" className="text-primary hover:underline">legal@managedv.com</a>
          </p>
        </div>
      );
    }
    
    setModalContent({ title, content });
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
  };
  
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = ''; // Re-enable scrolling
  };
  
  // Close mobile menu on scroll with debounce
  useEffect(() => {
    let scrollTimer: ReturnType<typeof setTimeout>;
    
    const handleScroll = () => {
      if (mobileMenuOpen) {
        // Clear any existing timer
        clearTimeout(scrollTimer);
        
        // Set a new timer to close the menu after a short delay
        scrollTimer = setTimeout(() => {
          setMobileMenuOpen(false);
        }, 150); // 150ms delay before closing
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener and any pending timers when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, [mobileMenuOpen]);
  
  // Handle clicks outside the modal to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };
    
    if (modalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalOpen]);
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800/90 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-primary flex items-center gap-2">
            <Image src="/images/mvlogo.png" alt="ManagedV AI Ventures Logo" width={32} height={32} className="h-8" />
            <span>ManagedV</span>
          </a>
          <div className="hamburger md:hidden">
            <button 
              className="p-2" 
              aria-label="Menu"
              onClick={toggleMobileMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-gray-800/90 backdrop-blur-sm p-4 md:hidden">
              <ul className="flex flex-col space-y-4 items-end pr-4">
                <li><a href="#about" className="hover:text-primary block py-2" onClick={() => setMobileMenuOpen(false)}>About</a></li>
                <li><a href="#approach" className="hover:text-primary block py-2" onClick={() => setMobileMenuOpen(false)}>Approach</a></li>
                <li><a href="#contact" className="hover:text-primary block py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
              </ul>
            </div>
          )}
          <ul className="nav-menu hidden md:flex space-x-4">
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#approach" className="hover:text-primary">Approach</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col min-h-screen pt-16">
        <div id="about" className="flex flex-col items-center justify-center min-h-screen px-4 pt-16 sm:pt-24 relative z-10">
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
            className="w-full max-w-2xl mx-auto relative mt-8 grid md:grid-cols-2 gap-6"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-lg h-full">
                <div className="flex items-center justify-between mb-4">
                  <a href="https://mvara.ai" target="_blank" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                    <Image src="/images/mvara-logo-white.svg" alt="mVara Logo" width={32} height={32} className="h-8 w-auto" priority />
                  </a>
                  <a
                    href="https://mvara.ai"
                    target="_blank"
                    className="bg-blue-600 hover:bg-purple-500 text-white font-medium px-3 py-1.5 rounded-md transition-all hover:shadow-lg active:scale-95 text-sm whitespace-nowrap"
                  >
                    mvara.ai
                  </a>
                </div>
                <p className="text-gray-700 text-sm">
                  AI memory and intelligence infrastructure. RELAY gives teams persistent, shared knowledge that their AI remembers across every session.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-lg h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-gray-900">AgentDoor</span>
                  <a
                    href="https://agentdoor.ai"
                    target="_blank"
                    className="bg-gray-900 hover:bg-gray-700 text-white font-medium px-3 py-1.5 rounded-md transition-all hover:shadow-lg active:scale-95 text-sm whitespace-nowrap"
                  >
                    agentdoor.ai
                  </a>
                </div>
                <p className="text-gray-700 text-sm">
                  Open source tools for AI agents. Geniuz, Clawmark, Token Scout, and more — free on GitHub.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12"
          >
            <a href="#contact" className="bg-primary hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg inline-block transition-all hover:shadow-lg active:bg-yellow-500 active:scale-95">
             Explore your next venture!
            </a>
          </motion.div>
        </div>

        <section id="approach" className="pt-16 pb-16 px-4 bg-gray-900/50 backdrop-blur-sm">
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
                <p className="text-gray-400">Transform your cutting-edge AI concept into a market-ready venture</p>
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
                <p className="text-gray-400">Push the boundaries of what&apos;s possible with AI</p>
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
                <p className="text-gray-400">Accelerate growth with proven AI expertise</p>
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
              className="contact-button bg-primary hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg inline-flex items-center justify-center transition-all hover:shadow-lg active:bg-yellow-500 active:scale-95 duration-200 gap-2"
            >
              @jackccrawford
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </section>
      </main>

      <footer className="w-full py-8 px-4 border-t border-gray-800 bg-gray-800/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row justify-between w-full">
            <p className="text-center md:text-left text-sm text-gray-500">
              Managed Ventures LLC • Scottsdale, AZ
            </p>
            <div className="flex flex-wrap justify-center md:justify-end mt-4 md:mt-0 gap-4">
              <button 
                onClick={() => openModal('Terms of Service', 'tos')} 
                className="text-xs text-gray-500 hover:text-primary transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => openModal('Privacy Policy', 'privacy')} 
                className="text-xs text-gray-500 hover:text-primary transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => openModal('License', 'license')} 
                className="text-xs text-gray-500 hover:text-primary transition-colors"
              >
                License
              </button>
            </div>
          </div>

        </div>
      </footer>
      {/* Modal for legal documents */}
      {modalOpen && modalContent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div 
            ref={modalRef}
            className="bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl w-full max-w-3xl max-h-[80vh] flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-xl font-semibold text-white">{modalContent.title}</h2>
              <button 
                onClick={closeModal} 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4">
              {modalContent.content}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
