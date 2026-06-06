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

          <h3 className="text-lg font-semibold mb-2">Our Brands</h3>
          <p className="mb-4"><strong>mVara</strong> (mvara.ai) is our operating company. It delivers AI transformation engagements built on our memory infrastructure.</p>
          <p className="mb-4"><strong>Geniuz</strong> (geniuz.life) is our open-source product. It is released under the MIT License and runs on the user&apos;s own machine.</p>
          <p className="mb-4"><strong>AgentDoor</strong> (agentdoor.ai) is an open-source tools collection.</p>

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
            18291 N Pima Rd, Suite 110-411<br />
            Scottsdale, AZ 85255<br />
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
            18291 N Pima Rd, Suite 110-411<br />
            Scottsdale, AZ 85255<br />
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
          <p className="mb-4"><strong>Geniuz</strong> is available under the MIT License at <a href="https://github.com/jackccrawford/geniuz" target="_blank" rel="noopener" className="text-primary hover:underline">github.com/jackccrawford/geniuz</a>. Additional open-source tools are available at <a href="https://github.com/jackccrawford" target="_blank" rel="noopener" className="text-primary hover:underline">github.com/jackccrawford</a>. Full license text is available in each repository.</p>

          <h3 className="text-lg font-semibold mb-2">Commercial Engagements</h3>
          <p className="mb-4">mVara (mvara.ai) provides AI transformation engagements built on the Geniuz substrate. Engagement terms are scoped per partnership. For inquiries, contact <a href="mailto:legal@managedv.com" className="text-primary hover:underline">legal@managedv.com</a>.</p>

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
                <li><a href="#contact" className="hover:text-primary block py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
              </ul>
            </div>
          )}
          <ul className="nav-menu hidden md:flex space-x-4">
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col min-h-screen pt-16">
        <div id="about" className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-16 sm:pt-24 overflow-hidden">
          {/* Hero video background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none motion-reduce:hidden"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Gradient overlay keeps headline and cards readable while letting more of the video show. */}
          <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-gray-900/65 via-gray-900/25 to-gray-900/80"></div>

          {/* Content sits above the video and overlay */}
          <div className="relative z-10 flex flex-col items-center w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Building
              <span className="text-primary block">AI-native operating companies.</span>
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              Managed Ventures LLC is the holding entity behind mVara and Geniuz.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full max-w-2xl mx-auto relative mt-8 grid md:grid-cols-2 gap-6"
          >
            <a href="https://mvara.ai" target="_blank" className="relative group block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-lg h-full group-hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <Image src="/images/mvara-wordmark-light-bg.png" alt="mVara" width={120} height={32} className="h-7 w-auto" priority />
                </div>
                <p className="text-gray-700 text-sm">
                  Operating company. AI deployment for established firms, scaled by AI itself. Persistent memory infrastructure running on the customer&apos;s own machines.
                </p>
              </div>
            </a>

            <a href="https://geniuz.life" target="_blank" className="relative group block">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-lg h-full group-hover:shadow-xl transition-shadow">
                <div className="mb-4 flex items-center gap-3">
                  <Image src="/images/geniuz-icon.svg" alt="Geniuz" width={44} height={44} className="rounded-lg" />
                  <span
                    className="text-gray-900 tracking-tight inline-flex items-baseline"
                    style={{ fontFamily: '"Newsreader", Georgia, serif', fontWeight: 600, fontSize: '26px', lineHeight: 1, gap: '6px' }}
                  >
                    Geniuz
                    <span style={{ display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%', background: '#CF5535', alignSelf: 'center' }} />
                  </span>
                </div>
                <p className="text-gray-700 text-sm">
                  Open-source persistent memory for AI agents. MIT-licensed, runs on your own machine. The substrate that lets your AI keep what mattered, across every session.
                </p>
              </div>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-sm text-gray-500 mt-8"
          >
            Also at <a href="https://agentdoor.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary underline underline-offset-2 transition-colors">agentdoor.ai</a> &middot; an open-source tools collection in progress.
          </motion.p>
          </div>
        </div>

        <section id="thesis" className="py-20 px-4 bg-gray-800/40 border-y border-white/10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
                Managed Ventures&rsquo; Thesis
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
                AI is moving to relationships.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10 md:gap-12">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">Persistent memory.</h3>
                <p className="text-gray-400 leading-relaxed">
                  Default cloud AI starts every session from zero. The companies we hold build on memory that survives session, compute, and substrate boundaries.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">Local-first by architecture.</h3>
                <p className="text-gray-400 leading-relaxed">
                  The products we ship run on the customer&apos;s own machine. Sovereignty is structural, not a marketing claim.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">Open at the substrate.</h3>
                <p className="text-gray-400 leading-relaxed">
                  Memory infrastructure is too foundational to rent. Geniuz is MIT-licensed so anyone can verify it, fork it, or run it without us.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
            <p className="text-lg text-gray-400 mb-8">For partnership and engagement inquiries.</p>
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
              Managed Ventures LLC • 18291 N Pima Rd Ste 110-411, Scottsdale, AZ 85255
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
