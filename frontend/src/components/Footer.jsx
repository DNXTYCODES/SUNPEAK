import React from "react";
import { assets } from "../assets/assets";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Brand Info */}
          <div className="space-y-4">
            <img 
              src={assets.sunpeaklogo} 
              className="w-40 mb-4" 
              alt="Sun Peak Energy Solutions Logo" 
            />
            <p className="text-[var(--text-muted)]">
              Powering Nigeria's future with sustainable solar energy solutions since 2015.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://wa.me/2348134553751" className="text-[var(--text-muted)] hover:text-[var(--primary-neon)]">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://instagram.com/sunpeak.ng" className="text-[var(--text-muted)] hover:text-[var(--primary-neon)]">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com/sunpeak_ng" className="text-[var(--text-muted)] hover:text-[var(--primary-neon)]">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com/company/sunpeak" className="text-[var(--text-muted)] hover:text-[var(--primary-neon)]">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[var(--text)]">Quick Links</h3>
            <ul className="space-y-2 text-[var(--text-muted)]">
              <li><a href="/about" className="hover:text-[var(--primary-neon)]">About Us</a></li>
              <li><a href="/services" className="hover:text-[var(--primary-neon)]">Services</a></li>
              <li><a href="/training" className="hover:text-[var(--primary-neon)]">Training</a></li>
              <li><a href="/contact" className="hover:text-[var(--primary-neon)]">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[var(--text)]">Support</h3>
            <ul className="space-y-2 text-[var(--text-muted)]">
              <li><a href="/faq" className="hover:text-[var(--primary-neon)]">FAQs</a></li>
              <li><a href="/support" className="hover:text-[var(--primary-neon)]">Installation Support</a></li>
              <li><a href="/warranty" className="hover:text-[var(--primary-neon)]">Warranty</a></li>
              <li><a href="/privacy" className="hover:text-[var(--primary-neon)]">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[var(--text)]">Contact</h3>
            <ul className="space-y-2 text-[var(--text-muted)]">
              <li>
                <a href="tel:+2348134553751" className="hover:text-[var(--primary-neon)]">
                  +234 813 455 3751
                </a>
              </li>
              <li>
                <a href="mailto:info@sunpeak.ng" className="hover:text-[var(--primary-neon)]">
                  info@sunpeak.ng
                </a>
              </li>
              <li>27 First East Circular Road,</li>
              <li>Benin, Edo</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)] mt-12 pt-8 text-center text-[var(--text-muted)]">
          <p className="mb-2">
            © {new Date().getFullYear()} Sun Peak Energy Solutions. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <span>NERC Certified</span>
            <span>•</span>
            <span>ISO 9001 Certified</span>
            <span>•</span>
            <span>Solar Energy Memberships</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
































// import React from "react";
// import { assets } from "../assets/assets";
// import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="bg-gray-50 border-t">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
//           {/* Brand Info */}
//           <div className="space-y-4">
//             <img 
//               src={assets.blogo} 
//               className="w-40 mb-4" 
//               alt="Mega Gadgets Logo" 
//             />
//             <p className="text-gray-600">
//               Your trusted source for premium electronics and tech accessories in Nigeria.
//             </p>
//             <div className="flex gap-4 mt-4">
//               <a href="https://wa.me/2348118532900" className="text-gray-500 hover:text-blue-600">
//                 <FaWhatsapp size={24} />
//               </a>
//               <a href="https://instagram.com/dolftech.ng" className="text-gray-500 hover:text-pink-600">
//                 <FaInstagram size={24} />
//               </a>
//               <a href="https://x.com/fabianoflagos?s=21" className="text-gray-500 hover:text-blue-400">
//                 <FaTwitter size={24} />
//               </a>
//               {/* <a href="#" className="text-gray-500 hover:text-blue-700">
//                 <FaLinkedin size={24} />
//               </a> */}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Company</h3>
//             <ul className="space-y-2 text-gray-600">
//               <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
//               <li><a href="/collection" className="hover:text-blue-600">Products</a></li>
//               {/* <li><a href="/blog" className="hover:text-blue-600">Blog</a></li> */}
//               <li><a href="/contact" className="hover:text-blue-600">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* Customer Service */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Support</h3>
//             <ul className="space-y-2 text-gray-600">
//               <li><a href="/faq" className="hover:text-blue-600">FAQs</a></li>
//               <li><a href="/shipping" className="hover:text-blue-600">Shipping Policy</a></li>
//               <li><a href="/returns" className="hover:text-blue-600">Returns & Warranty</a></li>
//               <li><a href="/terms" className="hover:text-blue-600">Terms of Service</a></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact</h3>
//             <ul className="space-y-2 text-gray-600">
//               <li>
//                 <a href="tel:+2349087654321" className="hover:text-blue-600">
//                   +234 811 853 2900
//                 </a>
//               </li>
//               <li>
//                 <a href="mailto:dolftech@gmail.com" className="hover:text-blue-600">
//                   dolftech@gmail.com
//                 </a>
//               </li>
//               <li>9 Ositelu street</li>
//               <li>Computer Village, Ikeja, Lagos</li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t mt-12 pt-8 text-center text-gray-600">
//           <p className="mb-2">
//             © {new Date().getFullYear()} Dolftech. All rights reserved.
//           </p>
//           <div className="flex justify-center gap-4 text-sm">
//             <span>Secure Payments</span>
//             <span>•</span>
//             <span>SSL Certified</span>
//             <span>•</span>
//             <span>PCIDSS Compliant</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

