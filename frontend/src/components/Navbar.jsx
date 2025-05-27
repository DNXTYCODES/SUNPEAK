import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About_Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/collection' },
    { name: 'Solar_Packages', path: '/solarpackages' },
    { name: 'Training', path: '/training' },
    { name: 'Solar_Calculator', path: '/solarcalculator' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-[var(--bg)/70]' : 'backdrop-blur-none'} border-b border-[var(--border)]`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 relative">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 group animate-fadeIn z-50"
            >
              <img 
                src={assets.sunpeaklogo} 
                alt="Sun Peak Energy Solutions" 
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold text-[var(--primary-neon)] font-['Orbitron']">
                SunPeak
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {menuItems.map((item, index) => (
                  <li key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => 
                        `px-3 py-2 text-sm font-medium transition-colors
                        ${isActive 
                          ? 'text-[var(--primary-neon)] border-b-2 border-[var(--primary-neon)]' 
                          : 'text-[var(--text)] hover:text-[var(--primary-neon)]'}`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 ml-6">
                <button className="px-4 py-2 bg-[var(--primary-neon)] text-[var(--secondary-dark)] rounded-lg font-bold hover:shadow-glow transition-all">
                  Get Free Quote
                </button>
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-[var(--primary-neon)/10] transition-colors"
                >
                  {theme === 'dark' ? '🌞' : '🌙'}
                </button>
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center gap-4">
              <button 
                onClick={toggleTheme}
                className="text-sm font-medium text-[var(--text)] px-3 py-1 rounded-lg hover:bg-[var(--primary-neon)/10] transition-colors"
              >
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-[var(--text)] hover:bg-[var(--primary-neon)/10]"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-[var(--bg)/95] backdrop-blur-2xl pt-20">
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="text-2xl font-bold text-[var(--primary-neon)]">Menu</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-[var(--text)] hover:text-[var(--primary-neon)]"
              >
                ✕
              </button>
            </div>

            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index} className="animate-fadeIn">
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => 
                      `block px-4 py-3 rounded-lg transition-colors
                      ${isActive 
                        ? 'bg-[var(--primary-neon)] text-[var(--secondary-dark)]' 
                        : 'text-[var(--text)] hover:bg-[var(--primary-neon)/10]'}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-4">
              <button className="w-full py-3 bg-[var(--primary-neon)] text-[var(--secondary-dark)] rounded-lg font-bold hover:shadow-glow">
                Referral Sign-Up
              </button>
              <button className="w-full py-3 border-2 border-[var(--primary-neon)] text-[var(--primary-neon)] rounded-lg font-bold hover:shadow-glow">
                Training Enrollment
              </button>
              <button 
                onClick={toggleTheme}
                className="w-full py-3 text-[var(--text)] rounded-lg font-bold hover:bg-[var(--primary-neon)/10] transition-colors"
              >
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden behind navbar */}
      <div className="h-20 w-full"></div>
    </>
  );
};

export default Navbar;



































// import React, { useState, useEffect } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { assets } from '../assets/assets';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [theme, setTheme] = useState('dark');

//   const menuItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About_Us', path: '/about' },
//     { name: 'Services', path: '/services' },
//     { name: 'Products', path: '/collection' },
//     { name: 'Solar_Packages', path: '/solarpackages' },
//     { name: 'Training', path: '/training' },
//     { name: 'Solar_Calculator', path: '/solarcalculator' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleTheme = () => {
//     setTheme(prev => prev === 'dark' ? 'light' : 'dark');
//     document.body.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
//   };

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-transparent' : 'bg-transparent'} `}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* <div className="flex items-center justify-between h-20 absolute inset-0 bg-[var(--bg)/95] backdrop-blur-xl"> */}
//         <div className="flex items-center justify-between h-20 absolute inset-0 bg-[var(--bg)/95] backdrop-blur-xl">
//           {/* Logo */}
//           <Link 
//             to="/" 
//             className="flex items-center gap-2 group animate-fadeIn"
//           >
//             <img 
//               src={assets.sunpeaklogo} 
//               alt="Sun Peak Energy Solutions" 
//               className="h-10 w-10"
//             />
//             <span className="text-2xl font-bold text-[var(--primary-neon)] font-['Orbitron']">
//               SunPeak
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-8">
//             <ul className="flex items-center gap-6">
//               {menuItems.map((item, index) => (
//                 <li key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
//                   <NavLink
//                     to={item.path}
//                     className={({ isActive }) => 
//                       `px-3 py-2 text-sm font-medium transition-colors
//                       ${isActive 
//                         ? 'text-[var(--primary-neon)] border-b-2 border-[var(--primary-neon)]' 
//                         : 'text-[var(--text)] hover:text-[var(--primary-neon)]'}`
//                     }
//                   >
//                     {item.name}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>

//             <div className="flex items-center gap-4 ml-6">
//               <button className="px-4 py-2 bg-[var(--primary-neon)] text-[var(--secondary-dark)] rounded-lg font-bold hover:shadow-glow transition-all">
//                 Get Free Quote
//               </button>
//               <button 
//                 onClick={toggleTheme}
//                 className="p-2 rounded-lg hover:bg-[var(--primary-neon)/10] transition-colors"
//               >
//                 {theme === 'dark' ? '🌞' : '🌙'}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden flex items-center gap-4">
//             <button 
//               onClick={toggleTheme}
//               className="p-2 text-sm font-medium text-[var(--text)] lg:hidden"
//             >
//               {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
//             </button>
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 rounded-lg text-[var(--text)] hover:bg-[var(--primary-neon)/10]"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`lg:hidden fixed inset-0 z-40 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//         <div className="absolute inset-0 bg-[var(--bg)/95] backdrop-blur-xl">
//           <div className="flex flex-col h-full p-6">
//             <div className="flex justify-between items-center mb-8">
//               <span className="text-2xl font-bold text-[var(--primary-neon)]">Menu</span>
//               <button 
//                 onClick={() => setIsMenuOpen(false)}
//                 className="p-2 text-[var(--text)] hover:text-[var(--primary-neon)]"
//               >
//                 ✕
//               </button>
//             </div>

//             <ul className="space-y-4">
//               {menuItems.map((item, index) => (
//                 <li key={index} className="animate-fadeIn">
//                   <NavLink
//                     to={item.path}
//                     onClick={() => setIsMenuOpen(false)}
//                     className={({ isActive }) => 
//                       `block px-4 py-3 rounded-lg transition-colors
//                       ${isActive 
//                         ? 'bg-[var(--primary-neon)] text-[var(--secondary-dark)]' 
//                         : 'text-[var(--text)] hover:bg-[var(--primary-neon)/10]'}`
//                     }
//                   >
//                     {item.name}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-8 space-y-4">
//               <button className="w-full py-3 bg-[var(--primary-neon)] text-[var(--secondary-dark)] rounded-lg font-bold">
//                 Referral Sign-Up
//               </button>
//               <button className="w-full py-3 border-2 border-[var(--primary-neon)] text-[var(--primary-neon)] rounded-lg font-bold">
//                 Training Enrollment
//               </button>
//               <button 
//                 onClick={toggleTheme}
//                 className="w-full py-3 text-[var(--text)] rounded-lg font-bold hover:bg-[var(--primary-neon)/10] transition-colors"
//               >
//                 {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
