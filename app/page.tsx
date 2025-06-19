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
          <p className="mb-4">Welcome to Managed Ventures</p>
          <p className="mb-4">These terms and conditions outline the rules and regulations for the use of the Managed Ventures Website, located at https://managedv.com.</p>
          <p className="mb-4">By accessing this website we assume you accept these terms and conditions. Do not continue to use the website if you do not agree to take all of the terms and conditions stated on this page.</p>
          
          <h3 className="text-lg font-semibold mb-2">License</h3>
          <p className="mb-4">Unless otherwise stated, Managed Ventures LLC and/or its licensors own the intellectual property rights for all material on the website. All intellectual property rights are reserved. You may access this content for your own personal use subjected to restrictions set in these terms and conditions.</p>
          
          <h3 className="text-lg font-semibold mb-2">User Obligations</h3>
          <p className="mb-4">You must not:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Republish material from the Managed Ventures website</li>
            <li>Sell, rent or sub-license material from the website</li>
            <li>Reproduce, duplicate or copy material from the website</li>
            <li>Redistribute content from the website</li>
          </ul>
          
          <h3 className="text-lg font-semibold mb-2">Disclaimer</h3>
          <p className="mb-4">
            The information and services on the website are provided on an 'as is' basis. Managed Ventures LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p className="mb-4">
            Further, Managed Ventures LLC does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">Governing Law</h3>
          <p className="mb-4">These terms and conditions are governed by and construed in accordance with the laws of Arizona, USA and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        </div>
      );
    } else if (contentType === 'privacy') {
      content = (
        <div className="text-gray-300">
          <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
          <p className="mb-4"><strong>Effective Date:</strong> June 1, 2024</p>
          <p className="mb-4"><strong>Managed Ventures</strong> ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website managedv.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
          
          <h3 className="text-lg font-semibold mb-2">1. Information We Collect</h3>
          <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
          
          <h4 className="text-md font-semibold mb-2">Personal Data</h4>
          <p className="mb-4">Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</p>
          
          <h4 className="text-md font-semibold mb-2">Derivative Data</h4>
          <p className="mb-4">Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</p>
          
          <h4 className="text-md font-semibold mb-2">Financial Data</h4>
          <p className="mb-4">Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.</p>
          
          <h3 className="text-lg font-semibold mb-2">2. Use of Your Information</h3>
          <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Create and manage your account.</li>
            <li>Process your transactions and send you related information, including purchase confirmations and invoices.</li>
            <li>Administer sweepstakes, promotions, and contests.</li>
            <li>Request feedback and contact you about your use of the Site.</li>
            <li>Resolve disputes and troubleshoot problems.</li>
            <li>Respond to product and customer service requests.</li>
            <li>Send you a newsletter.</li>
            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
          </ul>
          
          <h3 className="text-lg font-semibold mb-2">3. Contact Us</h3>
          <p className="mb-4">If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <p className="mb-4">
            Managed Ventures<br />
            Email: legal@managedv.com
          </p>
        </div>
      );
    } else if (contentType === 'license') {
      content = (
        <div className="text-gray-300">
          <h2 className="text-xl font-bold mb-4">PROPRIETARY LICENSE AGREEMENT</h2>
          <p className="mb-4">Copyright © 2025 Managed Ventures LLC. All Rights Reserved.</p>
          
          <p className="mb-4">
            This software and its documentation, including all content, code, design, and associated materials (the "Software"), are the confidential and proprietary information of Managed Ventures LLC ("Company").
          </p>
          
          <p className="mb-4">
            This proprietary license agreement ("Agreement") governs the use of the Software. By accessing, downloading, installing, copying, or otherwise using the Software, you agree to be bound by the terms of this Agreement.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">1. OWNERSHIP</h3>
          <p className="mb-4">
            All right, title, and interest in and to the Software, including all intellectual property rights, are and shall remain the exclusive property of the Company. The Software is protected by copyright, trade secret, and other intellectual property laws.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">2. LICENSE GRANT</h3>
          <p className="mb-4">
            Subject to the terms and conditions of this Agreement, the Company grants you a limited, non-transferable, non-sublicensable, revocable license to use the Software solely for your internal business purposes.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">3. RESTRICTIONS</h3>
          <p className="mb-4">You shall not, and shall not permit any third party to:</p>
          <p className="mb-4">
            a) Copy, modify, adapt, translate, or create derivative works of the Software;<br />
            b) Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of the Software;<br />
            c) Rent, lease, distribute, sell, resell, assign, or otherwise transfer rights to the Software;<br />
            d) Remove any proprietary notices or labels from the Software;<br />
            e) Use the Software for any purpose not expressly permitted by this Agreement.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">4. CONFIDENTIALITY</h3>
          <p className="mb-4">
            The Software contains valuable trade secrets and proprietary information of the Company. You shall maintain the confidentiality of the Software and shall not disclose the Software to any third party without the prior written consent of the Company.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">5. WARRANTY DISCLAIMER</h3>
          <p className="mb-4">
            THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. THE COMPANY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WITHOUT LIMITATION ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">6. LIMITATION OF LIABILITY</h3>
          <p className="mb-4">
            IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOST PROFITS, LOSS OF USE, LOSS OF DATA, OR BUSINESS INTERRUPTION, ARISING OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THIS AGREEMENT.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">7. TERMINATION</h3>
          <p className="mb-4">
            This Agreement shall continue until terminated. The Company may terminate this Agreement at any time if you breach any provision of this Agreement. Upon termination, you shall cease all use of the Software and destroy all copies of the Software in your possession or control.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">8. GENERAL</h3>
          <p className="mb-4">
            This Agreement shall be governed by and construed in accordance with the laws of the United States and the State of California, without giving effect to any principles of conflicts of law. Any dispute arising out of or relating to this Agreement shall be subject to the exclusive jurisdiction of the state and federal courts located in California.
          </p>
          
          <p className="mb-4">
            Managed Ventures LLC<br />
            18291 N Pima Rd, Suite 110-411<br />
            Scottsdale, AZ 85258<br />
            legal@managedv.com
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
            <Image src="/images/mvlogo.png" alt="ManagedV Logo" width={32} height={32} className="h-8" />
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <a href="https://mvara.ai" target="_blank" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                    <Image src="/images/mvara-logo-white.svg" alt="mVara Logo" width={32} height={32} className="h-8 w-auto" priority />
                  </a>
                  <a 
                    href="https://mvara.ai" 
                    target="_blank" 
                    className="bg-blue-600 hover:bg-purple-500 text-white font-medium px-4 py-2 rounded-md transition-all hover:shadow-lg active:bg-purple-600 active:scale-95"
                  >
                    Transform Your Enterprise
                  </a>
                </div>
                <p className="text-gray-700 mb-4">
                  Our flagship venture helping executives transform knowledge work through AI advisory and Windsurf-powered solutions that deliver 3x ROI within the first year
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
