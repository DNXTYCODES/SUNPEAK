import React, { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaChalkboardTeacher, FaCertificate, FaImages } from 'react-icons/fa';

const TrainingPrograms = () => {
  const [activeGallery, setActiveGallery] = useState(null);
  
  const courses = [
    {
      title: 'Solar Installation Certification',
      topics: [
        'Photovoltaic System Fundamentals',
        'Electrical Safety Standards',
        'Panel Mounting Techniques',
        'System Commissioning',
        'Troubleshooting & Maintenance'
      ],
      icon: <FaChalkboardTeacher className="text-4xl text-[var(--primary-neon)]" />
    },
    {
      title: 'Advanced Solar Technician',
      topics: [
        'Battery Storage Systems',
        'Hybrid System Design',
        'Inverter Configuration',
        'Grid Integration',
        'Performance Optimization'
      ],
      icon: <FaCertificate className="text-4xl text-[var(--primary-neon)]" />
    },
    {
      title: 'Solar Sales & Consulting',
      topics: [
        'Technical Product Knowledge',
        'Customer Needs Analysis',
        'System Cost Calculation',
        'Government Incentives',
        'Project Proposal Development'
      ],
      icon: <FaImages className="text-4xl text-[var(--primary-neon)]" />
    }
  ];

  const trainingGallery = [
    { 
      title: 'Installation Certification Class', 
      items: [
        { type: 'image', src: '/training1.jpg', caption: 'Hands-on panel installation training' },
        { type: 'image', src: '/training2.jpg', caption: 'Students practicing wiring techniques' },
        { type: 'video', src: 'https://www.youtube.com/embed/ABC123', caption: 'Instructor demonstrating safety procedures' }
      ] 
    },
    { 
      title: 'Advanced Technician Workshop', 
      items: [
        { type: 'image', src: '/training3.jpg', caption: 'Battery system configuration' },
        { type: 'video', src: 'https://www.youtube.com/embed/DEF456', caption: 'Inverter troubleshooting session' },
        { type: 'image', src: '/training4.jpg', caption: 'Graduates receiving certificates' }
      ] 
    },
    { 
      title: 'Sales Training Session', 
      items: [
        { type: 'image', src: '/training5.jpg', caption: 'Customer consultation roleplay' },
        { type: 'image', src: '/training6.jpg', caption: 'Group discussion on market strategies' },
        { type: 'video', src: 'https://www.youtube.com/embed/GHI789', caption: 'Expert sharing sales techniques' }
      ] 
    }
  ];

  return (
    <section className="bg-[var(--bg)] min-h-screen" itemScope itemType="https://schema.org/EducationalOccupationalProgram">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
            Professional Solar Training Programs
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
            Become a certified solar energy specialist through our hands-on courses
          </p>
        </div>

        {/* Course Catalog */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--primary-neon)] transition-colors"
            >
              <div className="text-center mb-6">{course.icon}</div>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">{course.title}</h2>
              
              <ul className="space-y-3 mb-6">
                {course.topics.map((topic, idx) => (
                  <li 
                    key={idx}
                    className="flex items-center gap-2 text-[var(--text-muted)]"
                  >
                    <span className="text-[var(--primary-neon)]">▹</span>
                    {topic}
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-[var(--primary-neon)/10] rounded-lg">
                <p className="text-sm text-[var(--text-muted)] flex items-center gap-2">
                  <span className="text-[var(--primary-neon)]">⚠️</span>
                  Contact us for next available session
                </p>
                <a
                  href="https://wa.me/2348118532900"
                  className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary-neon)] text-[var(--bg)] rounded-lg font-medium hover:shadow-glow"
                >
                  <FaWhatsapp /> Get Class Schedule
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Training Gallery */}
        <div className="mb-16 border-t border-[var(--border)] pt-12">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-8 text-center">
            Our Training Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainingGallery.map((gallery, index) => (
              <div 
                key={index}
                className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card-bg)] cursor-pointer hover:border-[var(--primary-neon)] transition-all"
                onClick={() => setActiveGallery(index)}
              >
                <div className="aspect-video bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-xl font-bold text-white">{gallery.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-1 absolute inset-0">
                    {gallery.items.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="bg-gray-300 border-2 border-white">
                        {item.type === 'image' ? (
                          <div className="bg-gray-200 w-full h-full" />
                        ) : (
                          <div className="bg-red-200 w-full h-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Modal */}
        {activeGallery !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="bg-[var(--card-bg)] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-[var(--border)] flex justify-between items-center">
                <h3 className="text-2xl font-bold text-[var(--text)]">
                  {trainingGallery[activeGallery].title}
                </h3>
                <button 
                  onClick={() => setActiveGallery(null)}
                  className="text-[var(--text-muted)] hover:text-[var(--primary-neon)]"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                {trainingGallery[activeGallery].items.map((item, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden">
                    <div className="aspect-video bg-gray-800 relative">
                      {item.type === 'image' ? (
                        <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                          <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                          <svg className="w-16 h-16 text-[var(--primary-neon)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-[var(--text-muted)] p-2">
                      {item.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="text-center border-t border-[var(--border)] pt-12">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-6">
            Get Training Schedule & Enrollment Info
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <a
              href="https://wa.me/2348118532900"
              className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--primary-neon)] transition-colors group"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-[var(--primary-neon)/10] rounded-full group-hover:bg-[var(--primary-neon)] transition-colors">
                  <FaWhatsapp className="text-3xl text-[var(--primary-neon)] group-hover:text-[var(--bg)]" />
                </div>
                <span className="text-[var(--text)] font-semibold">WhatsApp Inquiry</span>
                <span className="text-sm text-[var(--text-muted)]">Fastest Response</span>
              </div>
            </a>

            <a
              href="tel:+2348118532900"
              className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--primary-neon)] transition-colors group"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-[var(--primary-neon)/10] rounded-full group-hover:bg-[var(--primary-neon)] transition-colors">
                  <FaPhoneAlt className="text-3xl text-[var(--primary-neon)] group-hover:text-[var(--bg)]" />
                </div>
                <span className="text-[var(--text)] font-semibold">Direct Call</span>
                <span className="text-sm text-[var(--text-muted)]">+234 811 853 2900</span>
              </div>
            </a>

            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-[var(--primary-neon)/10] rounded-full">
                  <FaChalkboardTeacher className="text-3xl text-[var(--primary-neon)]" />
                </div>
                <span className="text-[var(--text)] font-semibold">Flexible Scheduling</span>
                <span className="text-sm text-[var(--text-muted)]">Corporate & Group Training Available</span>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-[var(--primary-neon)/10] rounded-lg max-w-2xl mx-auto">
            <p className="text-[var(--text-muted)] text-left">
              ⚠️ Training sessions are scheduled based on demand and instructor availability. To get the next available dates:
              <ul className="list-disc pl-5 mt-2">
                <li>Contact us directly via WhatsApp or phone</li>
                <li>Specify which certification you're interested in</li>
                <li>Our team will provide upcoming session options</li>
                <li>Corporate training can be scheduled at your convenience</li>
              </ul>
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 border-t border-[var(--border)] pt-12">
          <h3 className="text-2xl font-bold text-[var(--text)] mb-6 text-center">Training FAQs</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 border border-[var(--border)] rounded-xl bg-[var(--card-bg)]">
              <p className="font-bold text-[var(--text)] mb-2">How do I register for training?</p>
              <p className="text-[var(--text-muted)]">
                Contact us directly via WhatsApp or phone to begin your registration process. 
                Our team will guide you through enrollment and provide current session options.
              </p>
            </div>
            <div className="p-6 border border-[var(--border)] rounded-xl bg-[var(--card-bg)]">
              <p className="font-bold text-[var(--text)] mb-2">What are the prerequisites?</p>
              <p className="text-[var(--text-muted)]">
                Basic technical knowledge is helpful but not required. We provide all necessary training materials.
                Our courses are designed for both beginners and experienced professionals.
              </p>
            </div>
            <div className="p-6 border border-[var(--border)] rounded-xl bg-[var(--card-bg)]">
              <p className="font-bold text-[var(--text)] mb-2">Is certification provided?</p>
              <p className="text-[var(--text-muted)]">
                Yes, all participants receive a Sun Peak Energy certification upon successful completion.
                Our certifications are recognized throughout Nigeria's solar industry.
              </p>
            </div>
            <div className="p-6 border border-[var(--border)] rounded-xl bg-[var(--card-bg)]">
              <p className="font-bold text-[var(--text)] mb-2">Can I schedule private training?</p>
              <p className="text-[var(--text-muted)]">
                Absolutely! We offer customized training for companies and groups. 
                Contact us to discuss your specific needs and schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;






























// import React from 'react';
// import { FaWhatsapp, FaPhoneAlt, FaRegCalendarCheck, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa';

// const TrainingPrograms = () => {
//   const courses = [
//     {
//       title: 'Solar Installation Certification',
//       duration: '6 Weeks',
//       topics: [
//         'Photovoltaic System Fundamentals',
//         'Electrical Safety Standards',
//         'Panel Mounting Techniques',
//         'System Commissioning'
//       ],
//       icon: <FaChalkboardTeacher className="text-4xl text-[var(--primary-neon)]" />
//     },
//     {
//       title: 'Maintenance Technician',
//       duration: '4 Weeks',
//       topics: [
//         'Troubleshooting Techniques',
//         'Battery Maintenance',
//         'Inverter Repair',
//         'Performance Optimization'
//       ],
//       icon: <FaCertificate className="text-4xl text-[var(--primary-neon)]" />
//     },
//     {
//       title: 'Solar Sales Professional',
//       duration: '3 Weeks',
//       topics: [
//         'Technical Product Knowledge',
//         'Customer Needs Analysis',
//         'System Cost Calculation',
//         'Government Incentives'
//       ],
//       icon: <FaRegCalendarCheck className="text-4xl text-[var(--primary-neon)]" />
//     }
//   ];

//   return (
//     <section className="bg-[var(--bg)] min-h-screen" itemScope itemType="https://schema.org/EducationalOccupationalProgram">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="text-center mb-16 animate-fadeIn">
//           <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
//             Professional Solar Training Programs
//           </h1>
//           <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
//             Become a certified solar energy specialist through our hands-on courses
//           </p>
//         </div>

//         {/* Course Catalog */}
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {courses.map((course, index) => (
//             <div 
//               key={index}
//               className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--primary-neon)] transition-colors"
//             >
//               <div className="text-center mb-6">{course.icon}</div>
//               <h2 className="text-2xl font-bold text-[var(--text)] mb-4">{course.title}</h2>
//               <div className="flex items-center gap-2 text-[var(--primary-neon)] mb-4">
//                 <FaRegCalendarCheck />
//                 <span>{course.duration} Intensive Training</span>
//               </div>
              
//               <ul className="space-y-3 mb-6">
//                 {course.topics.map((topic, idx) => (
//                   <li 
//                     key={idx}
//                     className="flex items-center gap-2 text-[var(--text-muted)]"
//                   >
//                     <span className="text-[var(--primary-neon)]">▹</span>
//                     {topic}
//                   </li>
//                 ))}
//               </ul>

//               <div className="mt-6 p-4 bg-[var(--primary-neon)/10] rounded-lg">
//                 <p className="text-sm text-[var(--text-muted)] flex items-center gap-2">
//                   <span className="text-[var(--primary-neon)]">⚠️</span>
//                   Next schedule available upon request
//                 </p>
//                 <a
//                   href="https://wa.me/2348060771104"
//                   className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary-neon)] text-[var(--bg)] rounded-lg font-medium hover:shadow-glow"
//                 >
//                   <FaWhatsapp /> Get Schedule
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Contact Section */}
//         <div className="text-center border-t border-[var(--border)] pt-12">
//           <h2 className="text-3xl font-bold text-[var(--text)] mb-6">
//             Get Training Schedule & Enrollment Info
//           </h2>
          
//           <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
//             <a
//               href="https://wa.me/2348060771104"
//               className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--primary-neon)] transition-colors"
//             >
//               <div className="flex flex-col items-center gap-3">
//                 <FaWhatsapp className="text-3xl text-[var(--primary-neon)]" />
//                 <span className="text-[var(--text)]">WhatsApp Inquiry</span>
//                 <span className="text-sm text-[var(--text-muted)]">Fastest Response</span>
//               </div>
//             </a>

//             <a
//               href="tel:+2348060771104"
//               className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--primary-neon)] transition-colors"
//             >
//               <div className="flex flex-col items-center gap-3">
//                 <FaPhoneAlt className="text-3xl text-[var(--primary-neon)]" />
//                 <span className="text-[var(--text)]">Direct Call</span>
//                 <span className="text-sm text-[var(--text-muted)]">+234 806 077 1104</span>
//               </div>
//             </a>

//             <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
//               <div className="flex flex-col items-center gap-3">
//                 <FaRegCalendarCheck className="text-3xl text-[var(--primary-neon)]" />
//                 <span className="text-[var(--text)]">Flexible Scheduling</span>
//                 <span className="text-sm text-[var(--text-muted)]">Corporate & Group Training Available</span>
//               </div>
//             </div>
//           </div>

//           <div className="mt-8 p-4 bg-[var(--primary-neon)/10] rounded-lg max-w-2xl mx-auto">
//             <p className="text-[var(--text-muted)]">
//               ⚠️ All training dates are confirmed through direct communication to ensure:
//               <ul className="list-disc pl-5 mt-2 text-left">
//                 <li>Class availability confirmation</li>
//                 <li>Personalized enrollment guidance</li>
//                 <li>Latest curriculum updates</li>
//               </ul>
//             </p>
//           </div>
//         </div>

//         {/* FAQ */}
//         <div className="mt-16 border-t border-[var(--border)] pt-12">
//           <h3 className="text-2xl font-bold text-[var(--text)] mb-6">Common Training Questions</h3>
//           <div className="space-y-4 text-[var(--text-muted)]">
//             <div className="p-4 border border-[var(--border)] rounded-lg">
//               <p className="font-medium text-[var(--text)]">How do I register for training?</p>
//               <p className="mt-2">Contact us directly via WhatsApp or phone to begin your registration process and receive current schedule options</p>
//             </div>
//             <div className="p-4 border border-[var(--border)] rounded-lg">
//               <p className="font-medium text-[var(--text)]">What are the requirements?</p>
//               <p className="mt-2">Basic technical knowledge preferred but not mandatory - we provide all necessary training materials</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrainingPrograms;