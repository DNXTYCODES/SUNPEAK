import React, { useState } from "react";
import { assets } from "../assets/assets";

const Testimonials = () => {
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  
  const testimonials = [
    {
      name: "Adebayo Okon",
      role: "Homeowner",
      text: "SunPeak transformed our power situation completely. From 2 hours of electricity daily to 24/7 solar power - life changing!",
      image: assets.solar7,
      location: "Uselu, Benin",
      date: "2024-03-15",
      rating: 5
    },
    {
      name: "Ngozi Chukwu",
      role: "Restaurant Owner",
      text: "Our diesel costs dropped 80% after solar installation. Best investment for our Benin restaurant!",
      image: assets.solar8,
      location: "Ugbowo, Benin",
      date: "2024-02-28",
      rating: 5
    },
    {
      name: "Emeka Industries",
      role: "Manufacturing Company",
      text: "1MW solar plant installed with zero downtime. Professional team that understood industrial needs in Edo State.",
      image: assets.solar2,
      location: "Sapele Road, Benin",
      date: "2024-01-10",
      rating: 5
    },
  ];

  const videoTestimonials = [
    { id: 1, embedId: "hS4PWUW0nlM", title: "SunPeak solar customer testimonial from Benin, Edo State", location: "Benin City, Edo State" },
    { id: 2, embedId: "x5s6uIw1bo8", title: "SunPeak solar customer testimonial from Benin, Edo State", location: "Benin City, Edo State" },
    { id: 3, embedId: "bMQpewdkK5U", title: "SunPeak solar customer testimonial from Benin, Edo State", location: "Benin City, Edo State" },
    { id: 4, embedId: "rOVx_LYw8xU", title: "SunPeak solar customer testimonial from Benin, Edo State", location: "Benin City, Edo State" },
    { id: 5, embedId: "JZcr7Ao0m00", title: "SunPeak solar customer testimonial from Benin, Edo State", location: "Benin City, Edo State" },
    { id: 6, embedId: "1Y_oPW1GCEI", title: "SunPeak solar customer testimonial from Benin, Edo State", location: "Benin City, Edo State" },
    { id: 7, embedId: "hXqBafV6wL8", title: "SunPeak solar customer testimonial from Benin, Edo State", location: "Benin City, Edo State" },
  ];

  const photoTestimonials = [
    { id: 1, image: assets.solar1, caption: "Residential installation in Uselu, Benin" },
    { id: 2, image: assets.solar2, caption: "Commercial installation at Sapele Road" },
    { id: 3, image: assets.solar3, caption: "Industrial solar plant" },
    { id: 4, image: assets.solar4, caption: "Home solar system" },
    { id: 5, image: assets.solar5, caption: "Restaurant solar setup" },
    { id: 6, image: assets.solar6, caption: "Solar installation at a manufacturing plant" },
    { id: 7, image: assets.solar7, caption: "Homeowner enjoying 24/7 power" },
    { id: 8, image: assets.solar8, caption: "Before and after solar installation" },
    { id: 9, image: assets.solar9, caption: "Solar panels on residential roof" },
    { id: 10, image: assets.solar10, caption: "Large-scale commercial installation" },
  ];

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg)]"
      itemScope
      itemType="https://schema.org/Review"
    >
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Customer Testimonials - SunPeak Solar Benin",
          "description": "Real customer experiences with SunPeak solar installations in Benin, Edo State",
          "review": testimonials.map(testimonial => ({
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": testimonial.name
            },
            "datePublished": testimonial.date,
            "reviewBody": testimonial.text,
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": testimonial.rating,
              "bestRating": 5
            },
            "locationCreated": testimonial.location
          }))
        })}
      </script>

      <div className="max-w-7xl mx-auto">
        <h2
          id="testimonials-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--text)] animate-fadeIn"
        >
          Solar Success Stories from <span className="text-[var(--primary-neon)]">Benin</span>
        </h2>

        {/* VIDEO TESTIMONIALS AT THE TOP */}
        <div className="space-y-16 mb-20">
          {/* First video always visible */}
          <div className="max-w-4xl mx-auto animate-fadeIn" itemScope itemType="https://schema.org/VideoObject">
            <h3 className="sr-only" itemProp="name">Customer testimonial from Benin</h3>
            <meta itemProp="description" content="SunPeak solar installation testimonial from satisfied customer in Benin" />
            <meta itemProp="uploadDate" content="2024-04-10" />
            <meta itemProp="thumbnailUrl" content={assets.videoThumbnail} />
            <meta itemProp="contentUrl" content={`https://www.youtube.com/embed/${videoTestimonials[0].embedId}`} />
            
            <div className="aspect-video bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--border)]">
              <div className="relative w-full pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoTestimonials[0].embedId}`}
                  title={videoTestimonials[0].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  itemProp="embedUrl"
                ></iframe>
              </div>
            </div>
            <p className="mt-4 text-center text-[var(--text-muted)]" itemProp="locationCreated">
              {videoTestimonials[0].location}
            </p>
          </div>

          {/* Toggle button */}
          <div className="text-center">
            <button
              onClick={() => setShowAllVideos(!showAllVideos)}
              className="px-6 py-3 bg-[var(--bg)] text-[var(--text)] rounded-full font-medium hover:bg-[var(--primary-dark)] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-neon)] shadow-lg"
              aria-expanded={showAllVideos}
              aria-controls="additional-videos"
            >
              {showAllVideos ? (
                <span className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Show Fewer Videos
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Show More Videos
                </span>
              )}
            </button>
          </div>

          {/* Additional videos - conditionally shown */}
          <div 
            id="additional-videos" 
            className={`space-y-16 ${showAllVideos ? 'block' : 'hidden'}`}
            aria-hidden={!showAllVideos}
          >
            {videoTestimonials.slice(1).map(video => (
              <div key={video.id} className="max-w-4xl mx-auto animate-fadeIn" itemScope itemType="https://schema.org/VideoObject">
                <h3 className="sr-only" itemProp="name">Customer testimonial from Benin</h3>
                <meta itemProp="description" content="SunPeak solar installation testimonial from satisfied customer in Benin" />
                <meta itemProp="uploadDate" content="2024-04-10" />
                <meta itemProp="thumbnailUrl" content={assets.videoThumbnail} />
                <meta itemProp="contentUrl" content={`https://www.youtube.com/embed/${video.embedId}`} />
                
                <div className="aspect-video bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--border)]">
                  <div className="relative w-full pb-[56.25%] h-0">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      itemProp="embedUrl"
                    ></iframe>
                  </div>
                </div>
                <p className="mt-4 text-center text-[var(--text-muted)]" itemProp="locationCreated">
                  {video.location}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PHOTO TESTIMONIALS SECTION */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[var(--text)] animate-fadeIn">
            Project <span className="text-[var(--primary-neon)]">Photos</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {photoTestimonials.slice(0, showAllPhotos ? photoTestimonials.length : 5).map(photo => (
              <div 
                key={photo.id}
                className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card-bg)] shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[var(--primary-neon)] cursor-pointer"
              >
                <img
                  src={photo.image}
                  alt={photo.caption}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
          
          {photoTestimonials.length > 5 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllPhotos(!showAllPhotos)}
                className="px-6 py-3 bg-[var(--bg)] text-[var(--text)] rounded-full font-medium hover:bg-[var(--primary-dark)] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-neon)] shadow-lg"
                aria-expanded={showAllPhotos}
              >
                {showAllPhotos ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Show Fewer Photos
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Show More Photos
                  </span>
                )}
              </button>
            </div>
          )}
        </div>

        {/* TEXT REVIEWS BELOW VIDEOS AND PHOTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm animate-fadeIn transition-all duration-300 hover:shadow-lg hover:border-[var(--primary-neon)]"
              style={{ animationDelay: `${index * 0.1}s` }}
              itemScope
              itemProp="review"
              itemType="https://schema.org/Review"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}, ${testimonial.role} in ${testimonial.location}`}
                  className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-[var(--primary-neon)]"
                  loading="lazy"
                  width="80"
                  height="80"
                  itemProp="image"
                />
                <span className="text-sm text-[var(--text-muted)]" itemProp="locationCreated">
                  {testimonial.location}
                </span>
              </div>

              <blockquote
                className="text-lg text-[var(--text)] mb-6 italic relative pl-6"
                itemProp="reviewBody"
              >
                <span className="absolute left-0 top-0 text-4xl text-[var(--primary-neon)]]">"</span>
                {testimonial.text}
              </blockquote>

              <div
                className="text-center"
                itemScope
                itemType="https://schema.org/Person"
                itemProp="author"
              >
                <h3 className="font-bold text-[var(--text)] text-xl" itemProp="name">
                  {testimonial.name}
                </h3>
                <p
                  className="text-sm text-[var(--text-muted)] mt-1"
                  itemProp="jobTitle"
                >
                  {testimonial.role}
                </p>
              </div>

              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <meta itemProp="datePublished" content={testimonial.date} />
              <div
                itemProp="reviewRating"
                itemScope
                itemType="https://schema.org/Rating"
              >
                <meta itemProp="ratingValue" content={testimonial.rating} />
                <meta itemProp="bestRating" content="5" />
              </div>
            </article>
          ))}
        </div>

        {/* Hidden SEO content */}
        <div className="sr-only" aria-hidden="true">
          <p>Solar customer reviews Benin | Solar installation testimonials Edo | SunPeak success stories Nigeria</p>
          <p>Solar panel reviews Benin City | Solar system feedback | Solar company ratings Edo State</p>
          <p>Best solar installer in Benin | Top rated solar company | Solar power testimonials</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;





















// import React, { useState } from "react";
// import { assets } from "../assets/assets";

// const Testimonials = () => {
//   const [showAllVideos, setShowAllVideos] = useState(false);
  
//   const testimonials = [
//     {
//       name: "Adebayo Okon",
//       role: "Homeowner",
//       text: "SunPeak transformed our power situation completely. From 2 hours of electricity daily to 24/7 solar power - life changing!",
//       image: assets.solar7,
//       location: "Uselu, Benin",
//       date: "2024-03-15",
//       rating: 5
//     },
//     {
//       name: "Ngozi Chukwu",
//       role: "Restaurant Owner",
//       text: "Our diesel costs dropped 80% after solar installation. Best investment for our Benin restaurant!",
//       image: assets.solar8,
//       location: "Ugbowo, Benin",
//       date: "2024-02-28",
//       rating: 5
//     },
//     {
//       name: "Emeka Industries",
//       role: "Manufacturing Company",
//       text: "1MW solar plant installed with zero downtime. Professional team that understood industrial needs in Edo State.",
//       image: assets.solar2,
//       location: "Sapele Road, Benin",
//       date: "2024-01-10",
//       rating: 5
//     },
//   ];

//   const videoTestimonials = [
//     { id: 1, embedId: "hS4PWUW0nlM", title: "SunPeak solar customer testimonial from Benin, Edo State", location: "Benin City, Edo State" },
//     { id: 2, embedId: "x5s6uIw1bo8", title: "SunPeak solar customer testimonial from Benin, Edo State", location: "Benin City, Edo State" },
//     { id: 3, embedId: "bMQpewdkK5U", title: "SunPeak solar customer testimonial from Benin, Edo State", location: "Benin City, Edo State" },
//     { id: 4, embedId: "rOVx_LYw8xU", title: "SunPeak solar customer testimonial from Benin, Edo State", location: "Benin City, Edo State" },
//     { id: 5, embedId: "JZcr7Ao0m00", title: "SunPeak solar customer testimonial from Benin, Edo State", location: "Benin City, Edo State" },
//     { id: 6, embedId: "1Y_oPW1GCEI", title: "SunPeak solar customer testimonial from Benin, Edo State", location: "Benin City, Edo State" },
//     { id: 7, embedId: "hXqBafV6wL8", title: "SunPeak solar customer testimonial from Benin, Edo State", location: "Benin City, Edo State" },
//   ];

//   return (
//     <section
//       aria-labelledby="testimonials-heading"
//       className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg)]"
//       itemScope
//       itemType="https://schema.org/Review"
//     >
//       <script type="application/ld+json">
//         {JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "WebPage",
//           "name": "Customer Testimonials - SunPeak Solar Benin",
//           "description": "Real customer experiences with SunPeak solar installations in Benin, Edo State",
//           "review": testimonials.map(testimonial => ({
//             "@type": "Review",
//             "author": {
//               "@type": "Person",
//               "name": testimonial.name
//             },
//             "datePublished": testimonial.date,
//             "reviewBody": testimonial.text,
//             "reviewRating": {
//               "@type": "Rating",
//               "ratingValue": testimonial.rating,
//               "bestRating": 5
//             },
//             "locationCreated": testimonial.location
//           }))
//         })}
//       </script>

//       <div className="max-w-7xl mx-auto">
//         <h2
//           id="testimonials-heading"
//           className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--text)] animate-fadeIn"
//         >
//           Solar Success Stories from <span className="text-[var(--primary-neon)]">Benin</span>
//         </h2>

//         {/* VIDEO TESTIMONIALS AT THE TOP */}
//         <div className="space-y-16 mb-20">
//           {/* First video always visible */}
//           <div className="max-w-4xl mx-auto animate-fadeIn" itemScope itemType="https://schema.org/VideoObject">
//             <h3 className="sr-only" itemProp="name">Customer testimonial from Benin</h3>
//             <meta itemProp="description" content="SunPeak solar installation testimonial from satisfied customer in Benin" />
//             <meta itemProp="uploadDate" content="2024-04-10" />
//             <meta itemProp="thumbnailUrl" content={assets.videoThumbnail} />
//             <meta itemProp="contentUrl" content={`https://www.youtube.com/embed/${videoTestimonials[0].embedId}`} />
            
//             <div className="aspect-video bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--border)]">
//               <div className="relative w-full pb-[56.25%] h-0">
//                 <iframe
//                   className="absolute top-0 left-0 w-full h-full"
//                   src={`https://www.youtube.com/embed/${videoTestimonials[0].embedId}`}
//                   title={videoTestimonials[0].title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   itemProp="embedUrl"
//                 ></iframe>
//               </div>
//             </div>
//             <p className="mt-4 text-center text-[var(--text-muted)]" itemProp="locationCreated">
//               {videoTestimonials[0].location}
//             </p>
//           </div>

//           {/* Toggle button */}
//           <div className="text-center">
//             <button
//               onClick={() => setShowAllVideos(!showAllVideos)}
//               className="px-6 py-3 bg-[var(--bg)] text-[var(--text)]  rounded-full font-medium hover:bg-[var(--primary-dark)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-neon)] shadow-lg"
//               aria-expanded={showAllVideos}
//               aria-controls="additional-videos"
//             >
//               {showAllVideos ? (
//                 <span className="flex items-center justify-center gap-2">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
//                   </svg>
//                   Show Fewer Videos
//                 </span>
//               ) : (
//                 <span className="flex items-center justify-center gap-2">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                   Show More Videos
//                 </span>
//               )}
//             </button>
//           </div>

//           {/* Additional videos - conditionally shown */}
//           <div 
//             id="additional-videos" 
//             className={`space-y-16 ${showAllVideos ? 'block' : 'hidden'}`}
//             aria-hidden={!showAllVideos}
//           >
//             {videoTestimonials.slice(1).map(video => (
//               <div key={video.id} className="max-w-4xl mx-auto animate-fadeIn" itemScope itemType="https://schema.org/VideoObject">
//                 <h3 className="sr-only" itemProp="name">Customer testimonial from Benin</h3>
//                 <meta itemProp="description" content="SunPeak solar installation testimonial from satisfied customer in Benin" />
//                 <meta itemProp="uploadDate" content="2024-04-10" />
//                 <meta itemProp="thumbnailUrl" content={assets.videoThumbnail} />
//                 <meta itemProp="contentUrl" content={`https://www.youtube.com/embed/${video.embedId}`} />
                
//                 <div className="aspect-video bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--border)]">
//                   <div className="relative w-full pb-[56.25%] h-0">
//                     <iframe
//                       className="absolute top-0 left-0 w-full h-full"
//                       src={`https://www.youtube.com/embed/${video.embedId}`}
//                       title={video.title}
//                       frameBorder="0"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowFullScreen
//                       itemProp="embedUrl"
//                     ></iframe>
//                   </div>
//                 </div>
//                 <p className="mt-4 text-center text-[var(--text-muted)]" itemProp="locationCreated">
//                   {video.location}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* TEXT REVIEWS BELOW VIDEOS */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <article
//               key={index}
//               className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm animate-fadeIn transition-all duration-300 hover:shadow-lg hover:border-[var(--primary-neon)]"
//               style={{ animationDelay: `${index * 0.1}s` }}
//               itemScope
//               itemProp="review"
//               itemType="https://schema.org/Review"
//             >
//               <div className="flex flex-col items-center text-center mb-6">
//                 <img
//                   src={testimonial.image}
//                   alt={`${testimonial.name}, ${testimonial.role} in ${testimonial.location}`}
//                   className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-[var(--primary-neon)]"
//                   loading="lazy"
//                   width="80"
//                   height="80"
//                   itemProp="image"
//                 />
//                 <span className="text-sm text-[var(--text-muted)]" itemProp="locationCreated">
//                   {testimonial.location}
//                 </span>
//               </div>

//               <blockquote
//                 className="text-lg text-[var(--text)] mb-6 italic relative pl-6"
//                 itemProp="reviewBody"
//               >
//                 <span className="absolute left-0 top-0 text-4xl text-[var(--primary-neon)]]">"</span>
//                 {testimonial.text}
//               </blockquote>

//               <div
//                 className="text-center"
//                 itemScope
//                 itemType="https://schema.org/Person"
//                 itemProp="author"
//               >
//                 <h3 className="font-bold text-[var(--text)] text-xl" itemProp="name">
//                   {testimonial.name}
//                 </h3>
//                 <p
//                   className="text-sm text-[var(--text-muted)] mt-1"
//                   itemProp="jobTitle"
//                 >
//                   {testimonial.role}
//                 </p>
//               </div>

//               <div className="flex justify-center mt-4">
//                 {[...Array(5)].map((_, i) => (
//                   <svg
//                     key={i}
//                     className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>

//               <meta itemProp="datePublished" content={testimonial.date} />
//               <div
//                 itemProp="reviewRating"
//                 itemScope
//                 itemType="https://schema.org/Rating"
//               >
//                 <meta itemProp="ratingValue" content={testimonial.rating} />
//                 <meta itemProp="bestRating" content="5" />
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Hidden SEO content */}
//         <div className="sr-only" aria-hidden="true">
//           <p>Solar customer reviews Benin | Solar installation testimonials Edo | SunPeak success stories Nigeria</p>
//           <p>Solar panel reviews Benin City | Solar system feedback | Solar company ratings Edo State</p>
//           <p>Best solar installer in Benin | Top rated solar company | Solar power testimonials</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;






















// import React, { useState } from "react";
// import { assets } from "../assets/assets";

// const Testimonials = () => {
//   const [showAllVideos, setShowAllVideos] = useState(false);
  
//   const testimonials = [
//     {
//       name: "Adebayo Okon",
//       role: "Homeowner",
//       text: "SunPeak transformed our power situation completely. From 2 hours of electricity daily to 24/7 solar power - life changing!",
//       image: assets.solar7,
//       location: "Uselu, Benin",
//       date: "2024-03-15",
//       rating: 5
//     },
//     {
//       name: "Ngozi Chukwu",
//       role: "Restaurant Owner",
//       text: "Our diesel costs dropped 80% after solar installation. Best investment for our Benin restaurant!",
//       image: assets.solar8,
//       location: "Ugbowo, Benin",
//       date: "2024-02-28",
//       rating: 5
//     },
//     {
//       name: "Emeka Industries",
//       role: "Manufacturing Company",
//       text: "1MW solar plant installed with zero downtime. Professional team that understood industrial needs in Edo State.",
//       image: assets.solar2,
//       location: "Sapele Road, Benin",
//       date: "2024-01-10",
//       rating: 5
//     },
//   ];

//   const videoTestimonials = [
//     { id: 1, embedId: "hS4PWUW0nlM", title: "SunPeak solar customer testimonial from Benin, Edo State", location: "Benin City, Edo State" },
//     { id: 2, embedId: "x5s6uIw1bo8", title: "SunPeak solar customer testimonial from Benin, Edo State", location: "Benin City, Edo State" },
//     { id: 3, embedId: "bMQpewdkK5U", title: "SunPeak solar customer testimonial from Benin, Edo State", location: "Benin City, Edo State" },
//     { id: 4, embedId: "rOVx_LYw8xU", title: "SunPeak solar customer testimonial from Benin, Edo State", location: "Benin City, Edo State" },
//     { id: 5, embedId: "JZcr7Ao0m00", title: "SunPeak solar customer testimonial from Benin, Edo State", location: "Benin City, Edo State" },
//     { id: 6, embedId: "1Y_oPW1GCEI", title: "SunPeak solar customer testimonial from Benin, Edo State", location: "Benin City, Edo State" },
//     { id: 7, embedId: "hXqBafV6wL8", title: "SunPeak solar customer testimonial from Benin, Edo State", location: "Benin City, Edo State" },
//   ];

//   return (
//     <section
//       aria-labelledby="testimonials-heading"
//       className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg)]"
//       itemScope
//       itemType="https://schema.org/Review"
//     >
//       <script type="application/ld+json">
//         {JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "WebPage",
//           "name": "Customer Testimonials - SunPeak Solar Benin",
//           "description": "Real customer experiences with SunPeak solar installations in Benin, Edo State",
//           "review": testimonials.map(testimonial => ({
//             "@type": "Review",
//             "author": {
//               "@type": "Person",
//               "name": testimonial.name
//             },
//             "datePublished": testimonial.date,
//             "reviewBody": testimonial.text,
//             "reviewRating": {
//               "@type": "Rating",
//               "ratingValue": testimonial.rating,
//               "bestRating": 5
//             },
//             "locationCreated": testimonial.location
//           }))
//         })}
//       </script>

//       <div className="max-w-7xl mx-auto">
//         <h2
//           id="testimonials-heading"
//           className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--text)] animate-fadeIn"
//         >
//           Solar Success Stories from <span className="text-[var(--primary-neon)]">Benin</span>
//         </h2>

//         {/* VIDEO TESTIMONIALS AT THE TOP */}
//         <div className="space-y-16 mb-20">
//           {/* First video always visible */}
//           <div className="max-w-4xl mx-auto animate-fadeIn" itemScope itemType="https://schema.org/VideoObject">
//             <h3 className="sr-only" itemProp="name">Customer testimonial from Benin</h3>
//             <meta itemProp="description" content="SunPeak solar installation testimonial from satisfied customer in Benin" />
//             <meta itemProp="uploadDate" content="2024-04-10" />
//             <meta itemProp="thumbnailUrl" content={assets.videoThumbnail} />
//             <meta itemProp="contentUrl" content={`https://www.youtube.com/embed/${videoTestimonials[0].embedId}`} />
            
//             <div className="aspect-video bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--border)]">
//               <div className="relative w-full pb-[56.25%] h-0">
//                 <iframe
//                   className="absolute top-0 left-0 w-full h-full"
//                   src={`https://www.youtube.com/embed/${videoTestimonials[0].embedId}`}
//                   title={videoTestimonials[0].title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   itemProp="embedUrl"
//                 ></iframe>
//               </div>
//             </div>
//             <p className="mt-4 text-center text-[var(--text-muted)]" itemProp="locationCreated">
//               {videoTestimonials[0].location}
//             </p>
//           </div>

//           {/* Toggle button */}
//           <div className="text-center">
//             <button
//               onClick={() => setShowAllVideos(!showAllVideos)}
//               className="px-6 py-3 bg-[var(--primary)] text-white rounded-full font-medium hover:bg-[var(--primary-dark)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-neon)] shadow-lg"
//               aria-expanded={showAllVideos}
//               aria-controls="additional-videos"
//             >
//               {showAllVideos ? (
//                 <span className="flex items-center justify-center gap-2">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
//                   </svg>
//                   Show Fewer Videos
//                 </span>
//               ) : (
//                 <span className="flex items-center justify-center gap-2">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                   Show More Videos
//                 </span>
//               )}
//             </button>
//           </div>

//           {/* Additional videos - conditionally shown */}
//           <div 
//             id="additional-videos" 
//             className={`space-y-16 ${showAllVideos ? 'block' : 'hidden'}`}
//             aria-hidden={!showAllVideos}
//           >
//             {videoTestimonials.slice(1).map(video => (
//               <div key={video.id} className="max-w-4xl mx-auto animate-fadeIn" itemScope itemType="https://schema.org/VideoObject">
//                 <h3 className="sr-only" itemProp="name">Customer testimonial from Benin</h3>
//                 <meta itemProp="description" content="SunPeak solar installation testimonial from satisfied customer in Benin" />
//                 <meta itemProp="uploadDate" content="2024-04-10" />
//                 <meta itemProp="thumbnailUrl" content={assets.videoThumbnail} />
//                 <meta itemProp="contentUrl" content={`https://www.youtube.com/embed/${video.embedId}`} />
                
//                 <div className="aspect-video bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--border)]">
//                   <div className="relative w-full pb-[56.25%] h-0">
//                     <iframe
//                       className="absolute top-0 left-0 w-full h-full"
//                       src={`https://www.youtube.com/embed/${video.embedId}`}
//                       title={video.title}
//                       frameBorder="0"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowFullScreen
//                       itemProp="embedUrl"
//                     ></iframe>
//                   </div>
//                 </div>
//                 <p className="mt-4 text-center text-[var(--text-muted)]" itemProp="locationCreated">
//                   {video.location}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* TEXT REVIEWS BELOW VIDEOS */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <article
//               key={index}
//               className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm animate-fadeIn transition-all duration-300 hover:shadow-lg hover:border-[var(--primary-neon)]"
//               style={{ animationDelay: `${index * 0.1}s` }}
//               itemScope
//               itemProp="review"
//               itemType="https://schema.org/Review"
//             >
//               <div className="flex flex-col items-center text-center mb-6">
//                 <img
//                   src={testimonial.image}
//                   alt={`${testimonial.name}, ${testimonial.role} in ${testimonial.location}`}
//                   className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-[var(--primary-neon)]"
//                   loading="lazy"
//                   width="80"
//                   height="80"
//                   itemProp="image"
//                 />
//                 <span className="text-sm text-[var(--text-muted)]" itemProp="locationCreated">
//                   {testimonial.location}
//                 </span>
//               </div>

//               <blockquote
//                 className="text-lg text-[var(--text)] mb-6 italic relative pl-6"
//                 itemProp="reviewBody"
//               >
//                 <span className="absolute left-0 top-0 text-4xl text-[var(--primary-neon)]]">"</span>
//                 {testimonial.text}
//               </blockquote>

//               <div
//                 className="text-center"
//                 itemScope
//                 itemType="https://schema.org/Person"
//                 itemProp="author"
//               >
//                 <h3 className="font-bold text-[var(--text)] text-xl" itemProp="name">
//                   {testimonial.name}
//                 </h3>
//                 <p
//                   className="text-sm text-[var(--text-muted)] mt-1"
//                   itemProp="jobTitle"
//                 >
//                   {testimonial.role}
//                 </p>
//               </div>

//               <div className="flex justify-center mt-4">
//                 {[...Array(5)].map((_, i) => (
//                   <svg
//                     key={i}
//                     className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>

//               <meta itemProp="datePublished" content={testimonial.date} />
//               <div
//                 itemProp="reviewRating"
//                 itemScope
//                 itemType="https://schema.org/Rating"
//               >
//                 <meta itemProp="ratingValue" content={testimonial.rating} />
//                 <meta itemProp="bestRating" content="5" />
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Hidden SEO content */}
//         <div className="sr-only" aria-hidden="true">
//           <p>Solar customer reviews Benin | Solar installation testimonials Edo | SunPeak success stories Nigeria</p>
//           <p>Solar panel reviews Benin City | Solar system feedback | Solar company ratings Edo State</p>
//           <p>Best solar installer in Benin | Top rated solar company | Solar power testimonials</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;




























// import React from "react";
// import { assets } from "../assets/assets";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: "Adebayo Okon",
//       role: "Homeowner",
//       text: "SunPeak transformed our power situation completely. From 2 hours of electricity daily to 24/7 solar power - life changing!",
//       image: assets.solar7,
//       location: "Uselu, Benin",
//       date: "2024-03-15",
//       rating: 5
//     },
//     {
//       name: "Ngozi Chukwu",
//       role: "Restaurant Owner",
//       text: "Our diesel costs dropped 80% after solar installation. Best investment for our Benin restaurant!",
//       image: assets.solar8,
//       location: "Ugbowo, Benin",
//       date: "2024-02-28",
//       rating: 5
//     },
//     {
//       name: "Emeka Industries",
//       role: "Manufacturing Company",
//       text: "1MW solar plant installed with zero downtime. Professional team that understood industrial needs in Edo State.",
//       image: assets.solar2,
//       location: "Sapele Road, Benin",
//       date: "2024-01-10",
//       rating: 5
//     },
//   ];

//   return (
//     <section
//       aria-labelledby="testimonials-heading"
//       className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg)]"
//       itemScope
//       itemType="https://schema.org/Review"
//     >
//       <script type="application/ld+json">
//         {JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "WebPage",
//           "name": "Customer Testimonials - SunPeak Solar Benin",
//           "description": "Real customer experiences with SunPeak solar installations in Benin, Edo State",
//           "review": testimonials.map(testimonial => ({
//             "@type": "Review",
//             "author": {
//               "@type": "Person",
//               "name": testimonial.name
//             },
//             "datePublished": testimonial.date,
//             "reviewBody": testimonial.text,
//             "reviewRating": {
//               "@type": "Rating",
//               "ratingValue": testimonial.rating,
//               "bestRating": 5
//             },
//             "locationCreated": testimonial.location
//           }))
//         })}
//       </script>

//       <div className="max-w-7xl mx-auto">
//         <h2
//           id="testimonials-heading"
//           className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--text)] animate-fadeIn"
//         >
//           Solar Success Stories from <span className="text-[var(--primary-neon)]">Benin</span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <article
//               key={index}
//               className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm animate-fadeIn"
//               style={{ animationDelay: `${index * 0.1}s` }}
//               itemScope
//               itemProp="review"
//               itemType="https://schema.org/Review"
//             >
//               <div className="flex flex-col items-center text-center mb-6">
//                 <img
//                   src={testimonial.image}
//                   alt={`${testimonial.name}, ${testimonial.role} in ${testimonial.location}`}
//                   className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-[var(--primary-neon)]"
//                   loading="lazy"
//                   width="80"
//                   height="80"
//                   itemProp="image"
//                 />
//                 <span className="text-sm text-[var(--text-muted)]" itemProp="locationCreated">
//                   {testimonial.location}
//                 </span>
//               </div>

//               <blockquote
//                 className="text-lg text-[var(--text)] mb-6"
//                 itemProp="reviewBody"
//               >
//                 "{testimonial.text}"
//               </blockquote>

//               <div
//                 className="text-center"
//                 itemScope
//                 itemType="https://schema.org/Person"
//                 itemProp="author"
//               >
//                 <h3 className="font-bold text-[var(--text)]" itemProp="name">
//                   {testimonial.name}
//                 </h3>
//                 <p
//                   className="text-sm text-[var(--text-muted)]"
//                   itemProp="jobTitle"
//                 >
//                   {testimonial.role}
//                 </p>
//               </div>

//               <meta itemProp="datePublished" content={testimonial.date} />
//               <div
//                 itemProp="reviewRating"
//                 itemScope
//                 itemType="https://schema.org/Rating"
//               >
//                 <meta itemProp="ratingValue" content={testimonial.rating} />
//                 <meta itemProp="bestRating" content="5" />
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Video Testimonial Section */}
//         <div className="mt-16 max-w-4xl mx-auto animate-fadeIn" itemScope itemType="https://schema.org/VideoObject">
//           <h3 className="sr-only" itemProp="name">Customer testimonial from Benin</h3>
//           <meta itemProp="description" content="SunPeak solar installation testimonial from satisfied customer in Benin" />
//           <meta itemProp="uploadDate" content="2024-04-10" />
//           <meta itemProp="thumbnailUrl" content={assets.videoThumbnail} />
//           <meta itemProp="contentUrl" content="https://www.youtube.com/embed/yiBVUAGrl48" />
          
//           <div className="aspect-video bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--border)]">
//             <div className="relative w-full pb-[56.25%] h-0">
//               <iframe
//                 className="absolute top-0 left-0 w-full h-full"
//                 src="https://www.youtube.com/embed/hS4PWUW0nlM"
//                 title="SunPeak solar customer testimonial from Benin, Edo State"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 itemProp="embedUrl"
//               ></iframe>
//             </div>
//           </div>
//           <p className="mt-4 text-center text-[var(--text-muted)]" itemProp="locationCreated">
//             Benin City, Edo State
//           </p>
//         </div>

//         {/* Video Testimonial Section */}
//         <div className="mt-16 max-w-4xl mx-auto animate-fadeIn" itemScope itemType="https://schema.org/VideoObject">
//           <h3 className="sr-only" itemProp="name">Customer testimonial from Benin</h3>
//           <meta itemProp="description" content="SunPeak solar installation testimonial from satisfied customer in Benin" />
//           <meta itemProp="uploadDate" content="2024-04-10" />
//           <meta itemProp="thumbnailUrl" content={assets.videoThumbnail} />
//           <meta itemProp="contentUrl" content="https://www.youtube.com/embed/x5s6uIw1bo8" />
          
//           <div className="aspect-video bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--border)]">
//             <div className="relative w-full pb-[56.25%] h-0">
//               <iframe
//                 className="absolute top-0 left-0 w-full h-full"
//                 src="https://www.youtube.com/embed/x5s6uIw1bo8"
//                 title="SunPeak solar customer testimonial from Benin, Edo State"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 itemProp="embedUrl"
//               ></iframe>
//             </div>
//           </div>
//           <p className="mt-4 text-center text-[var(--text-muted)]" itemProp="locationCreated">
//             Benin City, Edo State
//           </p>
//         </div>

//         {/* Video Testimonial Section */}
//         <div className="mt-16 max-w-4xl mx-auto animate-fadeIn" itemScope itemType="https://schema.org/VideoObject">
//           <h3 className="sr-only" itemProp="name">Customer testimonial from Benin</h3>
//           <meta itemProp="description" content="SunPeak solar installation testimonial from satisfied customer in Benin" />
//           <meta itemProp="uploadDate" content="2024-04-10" />
//           <meta itemProp="thumbnailUrl" content={assets.videoThumbnail} />
//           <meta itemProp="contentUrl" content="https://www.youtube.com/embed/bMQpewdkK5U" />
          
//           <div className="aspect-video bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--border)]">
//             <div className="relative w-full pb-[56.25%] h-0">
//               <iframe
//                 className="absolute top-0 left-0 w-full h-full"
//                 src="https://www.youtube.com/embed/bMQpewdkK5U"
//                 title="SunPeak solar customer testimonial from Benin, Edo State"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 itemProp="embedUrl"
//               ></iframe>
//             </div>
//           </div>
//           <p className="mt-4 text-center text-[var(--text-muted)]" itemProp="locationCreated">
//             Benin City, Edo State
//           </p>
//         </div>

//         {/* Video Testimonial Section */}
//         <div className="mt-16 max-w-4xl mx-auto animate-fadeIn" itemScope itemType="https://schema.org/VideoObject">
//           <h3 className="sr-only" itemProp="name">Customer testimonial from Benin</h3>
//           <meta itemProp="description" content="SunPeak solar installation testimonial from satisfied customer in Benin" />
//           <meta itemProp="uploadDate" content="2024-04-10" />
//           <meta itemProp="thumbnailUrl" content={assets.videoThumbnail} />
//           <meta itemProp="contentUrl" content="https://www.youtube.com/embed/rOVx_LYw8xU" />
          
//           <div className="aspect-video bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--border)]">
//             <div className="relative w-full pb-[56.25%] h-0">
//               <iframe
//                 className="absolute top-0 left-0 w-full h-full"
//                 src="https://www.youtube.com/embed/rOVx_LYw8xU"
//                 title="SunPeak solar customer testimonial from Benin, Edo State"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 itemProp="embedUrl"
//               ></iframe>
//             </div>
//           </div>
//           <p className="mt-4 text-center text-[var(--text-muted)]" itemProp="locationCreated">
//             Benin City, Edo State
//           </p>
//         </div>

//         {/* Video Testimonial Section */}
//         <div className="mt-16 max-w-4xl mx-auto animate-fadeIn" itemScope itemType="https://schema.org/VideoObject">
//           <h3 className="sr-only" itemProp="name">Customer testimonial from Benin</h3>
//           <meta itemProp="description" content="SunPeak solar installation testimonial from satisfied customer in Benin" />
//           <meta itemProp="uploadDate" content="2024-04-10" />
//           <meta itemProp="thumbnailUrl" content={assets.videoThumbnail} />
//           <meta itemProp="contentUrl" content="https://www.youtube.com/embed/JZcr7Ao0m00" />
          
//           <div className="aspect-video bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--border)]">
//             <div className="relative w-full pb-[56.25%] h-0">
//               <iframe
//                 className="absolute top-0 left-0 w-full h-full"
//                 src="https://www.youtube.com/embed/JZcr7Ao0m00"
//                 title="SunPeak solar customer testimonial from Benin, Edo State"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 itemProp="embedUrl"
//               ></iframe>
//             </div>
//           </div>
//           <p className="mt-4 text-center text-[var(--text-muted)]" itemProp="locationCreated">
//             Benin City, Edo State
//           </p>
//         </div>

//         {/* Video Testimonial Section */}
//         <div className="mt-16 max-w-4xl mx-auto animate-fadeIn" itemScope itemType="https://schema.org/VideoObject">
//           <h3 className="sr-only" itemProp="name">Customer testimonial from Benin</h3>
//           <meta itemProp="description" content="SunPeak solar installation testimonial from satisfied customer in Benin" />
//           <meta itemProp="uploadDate" content="2024-04-10" />
//           <meta itemProp="thumbnailUrl" content={assets.videoThumbnail} />
//           <meta itemProp="contentUrl" content="https://www.youtube.com/embed/yiBVUAGrl48" />
          
//           <div className="aspect-video bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--border)]">
//             <div className="relative w-full pb-[56.25%] h-0">
//               <iframe
//                 className="absolute top-0 left-0 w-full h-full"
//                 src="https://www.youtube.com/embed/1Y_oPW1GCEI"
//                 title="SunPeak solar customer testimonial from Benin, Edo State"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 itemProp="embedUrl"
//               ></iframe>
//             </div>
//           </div>
//           <p className="mt-4 text-center text-[var(--text-muted)]" itemProp="locationCreated">
//             Benin City, Edo State
//           </p>
//         </div>

//         {/* Video Testimonial Section */}
//         <div className="mt-16 max-w-4xl mx-auto animate-fadeIn" itemScope itemType="https://schema.org/VideoObject">
//           <h3 className="sr-only" itemProp="name">Customer testimonial from Benin</h3>
//           <meta itemProp="description" content="SunPeak solar installation testimonial from satisfied customer in Benin" />
//           <meta itemProp="uploadDate" content="2024-04-10" />
//           <meta itemProp="thumbnailUrl" content={assets.videoThumbnail} />
//           <meta itemProp="contentUrl" content="https://www.youtube.com/embed/yiBVUAGrl48" />
          
//           <div className="aspect-video bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--border)]">
//             <div className="relative w-full pb-[56.25%] h-0">
//               <iframe
//                 className="absolute top-0 left-0 w-full h-full"
//                 src="https://www.youtube.com/embed/hXqBafV6wL8"
//                 title="SunPeak solar customer testimonial from Benin, Edo State"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 itemProp="embedUrl"
//               ></iframe>
//             </div>
//           </div>
//           <p className="mt-4 text-center text-[var(--text-muted)]" itemProp="locationCreated">
//             Benin City, Edo State
//           </p>
//         </div>







//         {/* Hidden SEO content */}
//         <div className="sr-only" aria-hidden="true">
//           <p>Solar customer reviews Benin | Solar installation testimonials Edo | SunPeak success stories Nigeria</p>
//           <p>Solar panel reviews Benin City | Solar system feedback | Solar company ratings Edo State</p>
//           <p>Best solar installer in Benin | Top rated solar company | Solar power testimonials</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


