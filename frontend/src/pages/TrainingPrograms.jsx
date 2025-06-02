import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaRegCalendarCheck, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa';

const TrainingPrograms = () => {
  const courses = [
    {
      title: 'Solar Installation Certification',
      duration: '6 Weeks',
      topics: [
        'Photovoltaic System Fundamentals',
        'Electrical Safety Standards',
        'Panel Mounting Techniques',
        'System Commissioning'
      ],
      icon: <FaChalkboardTeacher className="text-4xl text-[var(--primary-neon)]" />
    },
    {
      title: 'Maintenance Technician',
      duration: '4 Weeks',
      topics: [
        'Troubleshooting Techniques',
        'Battery Maintenance',
        'Inverter Repair',
        'Performance Optimization'
      ],
      icon: <FaCertificate className="text-4xl text-[var(--primary-neon)]" />
    },
    {
      title: 'Solar Sales Professional',
      duration: '3 Weeks',
      topics: [
        'Technical Product Knowledge',
        'Customer Needs Analysis',
        'System Cost Calculation',
        'Government Incentives'
      ],
      icon: <FaRegCalendarCheck className="text-4xl text-[var(--primary-neon)]" />
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
              <div className="flex items-center gap-2 text-[var(--primary-neon)] mb-4">
                <FaRegCalendarCheck />
                <span>{course.duration} Intensive Training</span>
              </div>
              
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
                  Next schedule available upon request
                </p>
                <a
                  href="https://wa.me/2348060771104"
                  className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary-neon)] text-[var(--bg)] rounded-lg font-medium hover:shadow-glow"
                >
                  <FaWhatsapp /> Get Schedule
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center border-t border-[var(--border)] pt-12">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-6">
            Get Training Schedule & Enrollment Info
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <a
              href="https://wa.me/2348060771104"
              className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--primary-neon)] transition-colors"
            >
              <div className="flex flex-col items-center gap-3">
                <FaWhatsapp className="text-3xl text-[var(--primary-neon)]" />
                <span className="text-[var(--text)]">WhatsApp Inquiry</span>
                <span className="text-sm text-[var(--text-muted)]">Fastest Response</span>
              </div>
            </a>

            <a
              href="tel:+2348060771104"
              className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--primary-neon)] transition-colors"
            >
              <div className="flex flex-col items-center gap-3">
                <FaPhoneAlt className="text-3xl text-[var(--primary-neon)]" />
                <span className="text-[var(--text)]">Direct Call</span>
                <span className="text-sm text-[var(--text-muted)]">+234 806 077 1104</span>
              </div>
            </a>

            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
              <div className="flex flex-col items-center gap-3">
                <FaRegCalendarCheck className="text-3xl text-[var(--primary-neon)]" />
                <span className="text-[var(--text)]">Flexible Scheduling</span>
                <span className="text-sm text-[var(--text-muted)]">Corporate & Group Training Available</span>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-[var(--primary-neon)/10] rounded-lg max-w-2xl mx-auto">
            <p className="text-[var(--text-muted)]">
              ⚠️ All training dates are confirmed through direct communication to ensure:
              <ul className="list-disc pl-5 mt-2 text-left">
                <li>Class availability confirmation</li>
                <li>Personalized enrollment guidance</li>
                <li>Latest curriculum updates</li>
              </ul>
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 border-t border-[var(--border)] pt-12">
          <h3 className="text-2xl font-bold text-[var(--text)] mb-6">Common Training Questions</h3>
          <div className="space-y-4 text-[var(--text-muted)]">
            <div className="p-4 border border-[var(--border)] rounded-lg">
              <p className="font-medium text-[var(--text)]">How do I register for training?</p>
              <p className="mt-2">Contact us directly via WhatsApp or phone to begin your registration process and receive current schedule options</p>
            </div>
            <div className="p-4 border border-[var(--border)] rounded-lg">
              <p className="font-medium text-[var(--text)]">What are the requirements?</p>
              <p className="mt-2">Basic technical knowledge preferred but not mandatory - we provide all necessary training materials</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;