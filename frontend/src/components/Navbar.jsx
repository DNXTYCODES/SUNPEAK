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
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    document.body.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-lg bg-[var(--bg)/50] lg:backdrop-blur-none lg:bg-transparent ${scrolled ? 'lg:backdrop-blur-lg lg:bg-[var(--bg)/50]' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group animate-fadeIn"
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

          {/* Mobile Buttons */}
          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-[var(--primary-neon)/10] transition-colors text-sm font-medium text-[var(--text)]"
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

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-[var(--bg)/95] backdrop-blur-xl">
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
              <button className="w-full py-3 bg-[var(--primary-neon)] text-[var(--secondary-dark)] rounded-lg font-bold">
                Referral Sign-Up
              </button>
              <button className="w-full py-3 border-2 border-[var(--primary-neon)] text-[var(--primary-neon)] rounded-lg font-bold">
                Training Enrollment
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
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
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-transparent' : 'bg-transparent'}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
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
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-transparent' : 'bg-transparent'}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
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

//           {/* Mobile Controls */}
//           <div className="lg:hidden flex items-center gap-4">
//             <button 
//               onClick={toggleTheme}
//               className="p-2 text-sm font-medium text-[var(--text)] hover:text-[var(--primary-neon)] transition-colors"
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
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





























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
//     // <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--bg)] backdrop-blur-lg border-b border-[var(--border)]' : 'bg-transparent'}`}>
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-transparent' : 'bg-transparent'}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
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
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="lg:hidden p-2 rounded-lg text-[var(--text)] hover:bg-[var(--primary-neon)/10]"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
//             </svg>
//           </button>
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
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






















// import React, { useContext, useState } from 'react'
// import {assets} from '../assets/assets'
// import { Link, NavLink } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {

//     const [visible,setVisible] = useState(false);

//     const {setShowSearch , getCartCount , navigate, token, setToken, setCartItems} = useContext(ShopContext);

//     const logout = () => {
//         navigate('/login')
//         localStorage.removeItem('token')
//         setToken('')
//         setCartItems({})
//     }

//   return (
//     <div className='flex items-center justify-between py-5 font-medium'>
      
//       <Link to='/'>
      
//       <h2 className="text-2xl font-bold text-center text-[#43284b]">
//         {/* <span className='text-[#ff956f]'>DOLF</span> */}
//         DOLFTECH
//       </h2>
//       </Link>

//       <ul className='hidden sm:flex gap-5 text-sm text-[white]'>
// {/*         
//         <NavLink to='/' className='flex flex-col items-center gap-1'>
//             <p>HOME</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink> */}
//         <NavLink to='/services' className='flex flex-col items-center gap-1 text-black'>
//             <p>SERVICES</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-black-700 hidden' />
//         </NavLink>
//         <NavLink to='/collection' className='flex flex-col items-center gap-1 text-black'>
//             <p>PRODUCTS</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-black-700 hidden' />
//         </NavLink>
//         <NavLink to='/about' className='flex flex-col items-center gap-1 text-black'>
//             <p>ABOUT</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-black-700 hidden' />
//         </NavLink>
//         <NavLink to='/contact' className='flex flex-col items-center gap-1 text-black'>
//             <p>CONTACT</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-black-700 hidden' />
//         </NavLink>
//         {/* <NavLink to='/sporstnews' className='flex flex-col items-center gap-1 text-black'>
//             <p>NEWS AND UPDATES</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-black-700 hidden' />
//         </NavLink> */}

//       </ul>

//       <div className='flex items-center gap-6'>
//             <img onClick={()=> { setShowSearch(true); navigate('/collection') }} src={assets.search_icon} className='w-5 cursor-pointer' alt="search luxury watches" />
            
//             <div className='group relative'>
//                 {/* <img onClick={()=> token ? null : navigate('/login') } className='w-5 cursor-pointer' src={assets.profile_icon} alt="wristwatch enthusiast profile" /> */}
//                 {/* Dropdown Menu */}
//                 {token && 
//                 <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
//                     <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded'>
//                         {/* <p className='cursor-pointer hover:text-white'>My Profile</p> */}
//                         <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
//                         <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
//                     </div>
//                 </div>}
//             </div> 
//             {/* <Link to='/cart' className='relative'>
//                 <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
//                 <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
//             </Link>  */}
//             <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" /> 
//       </div>

//         {/* Sidebar menu for small screens */}
//         <div className={`z-[99] absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
//                 <div className='flex flex-col text-gray-600'>
//                     <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
//                         <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
//                         <p>Back</p>
//                     </div>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/services'>SERVICES</NavLink>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>PRODUCTS</NavLink>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
//                     {/* <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/sporstnews'>NEWS AND UPDATES</NavLink> */}
//                 </div>
//         </div>

//     </div>
//   )
// }

// export default Navbar
