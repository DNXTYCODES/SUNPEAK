import React from 'react';
import { FaLinkedin, FaSun, FaSolarPanel, FaTools, FaUserGraduate, FaLightbulb } from 'react-icons/fa';
import Title from './Title';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Mr Abraham',
      role: 'CEO & Founder',
      bio: `Renewable energy expert with 15+ years in solar solutions. Founded SunPeak to empower Nigerian communities through sustainable energy. NERC-certified energy consultant.`,
      expertise: ['Strategic Planning', 'Government Compliance', 'Sustainable Development'],
      // photo: assets.solar6,
      photo: assets.solar6,
      linkedin: '#'
    },
    // {
    //   id: 2,
    //   name: 'Chidi Nwankwo',
    //   role: 'Chief Engineer',
    //   bio: `Licensed solar engineer with expertise in large-scale installations. Oversees quality control for all projects. Certified in NECO and IEEE standards.`,
    //   expertise: ['System Design', 'Quality Assurance', 'Technical Training'],
    //   photo: 'team-engineer.jpg',
    //   linkedin: '#'
    // },
    // {
    //   id: 3,
    //   name: 'Zainab Adekunle',
    //   role: 'Training Director',
    //   bio: `Solar education specialist developing our certification programs. 8+ years experience in vocational technical training across West Africa.`,
    //   expertise: ['Curriculum Design', 'Certification Programs', 'Skill Development'],
    //   photo: 'team-training.jpg',
    //   linkedin: '#'
    // },
    // {
    //   id: 4,
    //   name: 'Emeka Okoro',
    //   role: 'Field Operations',
    //   bio: `Leads installation teams across Nigeria. Certified in solar safety standards and project management. 200+ successful installations completed.`,
    //   expertise: ['Team Management', 'Safety Protocols', 'Logistics'],
    //   photo: 'team-field.jpg',
    //   linkedin: '#'
    // }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg)]" itemScope itemType="https://schema.org/Organization">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          {/* <Title text1="ENERGY" text2="LEADERS" /> */}
          
            <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
          <p className="mt-4 text-xl text-[var(--text-muted)]">
            The team powering Nigeria's solar revolution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <article 
              key={member.id}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm p-6 hover:shadow-glow transition-all"
              itemScope
              itemType="https://schema.org/Person"
            >
              <div className="relative group mb-4">
                <img 
                  // src={`/team/${member.photo}`} 
                  src={`${member.photo}`} 
                  alt={`${member.name} - Solar Expert at SunPeak`}
                  className="w-full h-64 object-cover rounded-lg"
                  loading="lazy"
                  width="400"
                  height="400"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary-dark)] opacity-0 group-hover:opacity-90 transition-opacity rounded-lg flex items-end p-4">
                  <div className="space-y-2 text-[var(--text)]">
                    {member.expertise.map((skill, index) => (
                      <span key={index} className="block text-sm">• {skill}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[var(--text)]" itemProp="name">{member.name}</h3>
              <p className="text-[var(--primary-neon)] mt-1" itemProp="jobTitle">{member.role}</p>
              <p className="text-[var(--text-muted)] mt-4 line-clamp-3" itemProp="description">{member.bio}</p>
              
              <div className="mt-6 flex gap-4">
                <a 
                  href={member.linkedin} 
                  className="text-[var(--text-muted)] hover:text-[var(--primary-neon)]"
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center bg-[var(--card-bg)] rounded-xl p-8 border border-[var(--border)] backdrop-blur-sm animate-fadeIn mb-20">
          <div className="flex justify-center gap-6 mb-6 text-[var(--primary-neon)]">
            <FaSolarPanel className="w-12 h-12" />
            <FaSun className="w-12 h-12" />
            <FaUserGraduate className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
            Join the Energy Revolution
          </h3>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto mb-6">
            Help build Nigeria's sustainable future through solar energy
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { icon: <FaTools />, text: 'Installation Technicians' },
              { icon: <FaLightbulb />, text: 'Sales Specialists' },
              { icon: <FaUserGraduate />, text: 'Training Instructors' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-[var(--text)] justify-center">
                <span className="text-[var(--primary-neon)]">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <Link
            to="/careers"
            className="inline-block px-8 py-3 bg-[var(--primary-neon)] text-[var(--bg)] rounded-lg hover:shadow-glow transition-all font-medium"
          >
            View Open Positions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;





















// import React, { useState } from 'react';
// import { FaLinkedin, FaGithub, FaTools, FaRobot, FaMicrochip, FaShippingFast } from 'react-icons/fa';
// import Title from './Title';

// const OurTeam = () => {
//   const teamMembers = [
//     {
//       id: 1,
//       name: 'Adeola Adeyemi',
//       role: 'CEO & Founder',
//       bio: `Tech visionary with 12+ years in consumer electronics. Founded Mega Gadgets in 2015 to bridge the gap between cutting-edge technology and Nigerian consumers. Oversees strategic partnerships with global brands like Samsung and Apple.`,
//       expertise: ['Product Strategy', 'Brand Partnerships', 'Market Expansion'],
//       photo: 'team-ceo.jpg'
//     },
//     {
//       id: 2,
//       name: 'Chukwudi Nwankwo',
//       role: 'CTO',
//       bio: `Full-stack developer and systems architect leading our platform development. Certified AWS Solutions Architect managing our cloud infrastructure. Drives innovation in our e-commerce platform and inventory systems.`,
//       expertise: ['Cloud Computing', 'AI Integration', 'System Security'],
//       photo: 'team-cto.jpg'
//     },
//     {
//       id: 3,
//       name: 'Zainab Bello',
//       role: 'Product Manager',
//       bio: `Consumer tech specialist with a knack for identifying emerging trends. Manages product selection from 50+ international suppliers. Oversees quality control and warranty programs for all devices.`,
//       expertise: ['Market Research', 'Quality Assurance', 'Supplier Relations'],
//       photo: 'team-pm.jpg'
//     },
//     {
//       id: 4,
//       name: 'Emeka Okoro',
//       role: 'Customer Experience Lead',
//       bio: `Leads our 24/7 support team with 8 years in tech customer service. Implemented our award-winning satisfaction guarantee program. Certified in CompTIA A+ and customer experience management.`,
//       expertise: ['Technical Support', 'Service Design', 'Customer Retention'],
//       photo: 'team-cx.jpg'
//     }
//   ];

//   return (
//     <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <Title text1={"TECH"} text2={"PIONEERS"} />
//           <p className="mt-4 text-xl text-gray-600">
//             The minds behind Nigeria's fastest-growing gadget marketplace
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {teamMembers.map((member) => (
//             <div key={member.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
//               <div className="relative group">
//                 <img 
//                   src={`/team/${member.photo}`} 
//                   alt={member.name}
//                   className="w-full h-64 object-cover rounded-lg mb-4"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-80 transition-opacity rounded-lg flex items-end p-4">
//                   <div className="space-y-2">
//                     {member.expertise.map((skill, index) => (
//                       <span key={index} className="block text-sm text-white/80">• {skill}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
              
//               <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
//               <p className="text-blue-600 mt-1">{member.role}</p>
//               <p className="text-gray-600 mt-4 line-clamp-3">{member.bio}</p>
              
//               <div className="mt-6 flex gap-4 text-gray-400">
//                 <a href="#" className="hover:text-blue-600">
//                   <FaLinkedin className="w-6 h-6" />
//                 </a>
//                 <a href="#" className="hover:text-gray-800">
//                   <FaGithub className="w-6 h-6" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 text-center bg-white rounded-xl p-8 shadow-sm">
//           <div className="flex justify-center gap-6 mb-6">
//             <FaMicrochip className="w-12 h-12 text-blue-600" />
//             <FaRobot className="w-12 h-12 text-green-600" />
//             <FaShippingFast className="w-12 h-12 text-purple-600" />
//           </div>
//           <h3 className="text-2xl font-bold text-gray-900 mb-4">
//             Join Our Tech Revolution
//           </h3>
//           <p className="text-gray-600 max-w-2xl mx-auto mb-6">
//             We're building Africa's most innovative tech marketplace. Looking for:
//           </p>
//           <div className="grid md:grid-cols-3 gap-4 mb-8">
//             <div className="flex items-center gap-2 text-gray-600">
//               <FaTools className="text-blue-500" />
//               <span>QA Engineers</span>
//             </div>
//             <div className="flex items-center gap-2 text-gray-600">
//               <FaRobot className="text-green-500" />
//               <span>AI Specialists</span>
//             </div>
//             <div className="flex items-center gap-2 text-gray-600">
//               <FaShippingFast className="text-purple-500" />
//               <span>Logistics Experts</span>
//             </div>
//           </div>
//           <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
//             Explore Careers
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurTeam;


