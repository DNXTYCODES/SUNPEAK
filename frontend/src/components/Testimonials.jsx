import React from 'react';
import { assets } from '../assets/assets';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Adebayo Okon',
      role: 'Homeowner, Lagos',
      text: 'SunPeak transformed our power situation completely. From 2 hours of electricity daily to 24/7 solar power - life changing!',
      image: assets.solar7,
      location: 'Victoria Island, Lagos'
    },
    {
      name: 'Ngozi Chukwu',
      role: 'Restaurant Owner',
      text: 'Our diesel costs dropped 80% after solar installation. Best investment for our Abuja restaurant!',
      image: assets.solar8,
      location: 'Garki, Abuja'
    },
    {
      name: 'Emeka Industries',
      role: 'Manufacturing Company',
      text: '1MW solar plant installed with zero downtime. Professional team that understood industrial needs.',
      image: assets.solar2 ,
      location: 'Onne, Rivers State'
    }
  ];

  return (
    <section 
      aria-labelledby="testimonials-heading"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg)]"
      itemScope
      itemType="https://schema.org/Review"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          id="testimonials-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--text)] animate-fadeIn"
        >
          Nigerian Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article 
              key={index}
              className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
              itemScope
              itemProp="review"
              itemType="https://schema.org/Review"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <img 
                  // src={`/clients/${testimonial.image}`} 
                  src={`${testimonial.image}`} 
                  alt={testimonial.name} 
                  className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-[var(--primary-neon)]"
                  loading="lazy"
                  width="80"
                  height="80"
                />
                {/* <img 
                  src="/nigeria-flag.svg" 
                  alt="Nigerian flag" 
                  className="w-6 h-6 mb-2" 
                  aria-hidden="true"
                /> */}
                <span className="text-sm text-[var(--text-muted)]">
                  {testimonial.location}
                </span>
              </div>

              <blockquote className="text-lg text-[var(--text)] mb-6" itemProp="reviewBody">
                "{testimonial.text}"
              </blockquote>

              <div className="text-center" itemScope itemType="https://schema.org/Person" itemProp="author">
                <h3 className="font-bold text-[var(--text)]" itemProp="name">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-[var(--text-muted)]" itemProp="jobTitle">
                  {testimonial.role}
                </p>
              </div>

              <meta itemProp="datePublished" content="2023-08-20" />
              <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" className="hidden">
                <meta itemProp="ratingValue" content="5" />
                <meta itemProp="bestRating" content="5" />
              </div>
            </article>
          ))}
        </div>

        {/* Video Testimonial Section */}
        <div className="mt-16 max-w-4xl mx-auto animate-fadeIn">
          <div className="aspect-video bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--border)]">
            <video 
              controls 
              className="w-full h-full object-cover"
              poster="/video-thumbnail.jpg"
              aria-label="Customer testimonial video from Ugbowo"
            >
              {/* <source src="/testimonial-kano.mp4" type="video/mp4" /> */}
              <source src={assets.solarvid2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="mt-4 text-center text-[var(--text-muted)]">
            Mr David - Ugbowo
          </p>
        </div>

        {/* <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-[var(--primary-neon)] text-[var(--primary-neon)] rounded-lg hover:bg-[var(--primary-neon)/10] transition-colors font-medium">
            Share Your Story
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;























// import React from 'react';
// import { FaQuoteLeft, FaStar } from 'react-icons/fa';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: "Ngozi Okonkwo",
//       role: "Pro Gamer (Lagos)",
//       text: "DolfTech's gaming laptop is fire! My new ASUS ROG handles FIFA 23 and Warzone at max settings with no lag. 144Hz display na real game changer. Delivery reach me same day for Lagos - no wahala!",
//       rating: 5,
//       image: "https://via.placeholder.com/80"
//     },
//     {
//       name: "Chinedu Adebayo",
//       role: "Content Creator (Abuja)",
//       text: "This MSI Katana from DolfTech dey crush 4K video edits and stream PUBG Mobile at 120FPS. Their tech guy help me pick the RTX 4060 version. Only small heating after 6 hours streaming, but na 5-star quality!",
//       rating: 5,
//       image: "https://via.placeholder.com/80"
//     },
//     {
//       name: "Amina Bello",
//       role: "Computer Science Student (PH)",
//       text: "I never believe say I fit get HP Victus with GTX 1650 for this price! DolfTech's payment plan make am possible. E dey run AutoCAD and Valorant smoothly. Their Abuja showroom staff sabi answer all my questions!",
//       rating: 5,
//       image: "https://via.placeholder.com/80"
//     }
// ];
//   const StarRating = ({ rating }) => {
//     return (
//       <div className="flex gap-1 text-yellow-400">
//         {[...Array(5)].map((_, index) => (
//           <FaStar key={index} className={index < rating ? 'fill-current' : 'fill-gray-300'} />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
//           What Our Customers Say
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="mb-4">
//                 <StarRating rating={testimonial.rating} />
//               </div>
              
//               <FaQuoteLeft className="text-3xl text-blue-600 mb-4" />
              
//               <p className="text-gray-600 mb-6">{testimonial.text}</p>
              
//               <div className="flex items-center gap-4">
//                 <img 
//                   src={testimonial.image} 
//                   alt={testimonial.name} 
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div>
//                   <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
//                   <p className="text-sm text-gray-500">{testimonial.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center gap-2 mt-12">
//           {testimonials.map((_, index) => (
//             <button 
//               key={index}
//               className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-600 transition-colors"
//               aria-label={`Testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;