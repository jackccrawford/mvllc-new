export default function StaticSite() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div id="particle-background" className="fixed inset-0" />

      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-[#4DFFD2]">
            ManagedV
          </a>
          <div className="hamburger md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul className="nav-menu hidden md:flex space-x-4">
            <li>
              <a href="#about" className="hover:text-[#4DFFD2]">
                About
              </a>
            </li>
            <li>
              <a href="#approach" className="hover:text-[#4DFFD2]">
                Our Approach
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#4DFFD2]">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content sections will go here */}

      <main className="flex flex-col min-h-screen pt-16">
        {/* We can continue with the rest of the content sections */}
      </main>
    </div>
  )
}

