import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransferNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const API_KEY = "a184699af92e42fdb8f2e7c19b0a15c1"; // NewsAPI key

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=soccer+transfer&pageSize=10&page=${page}&sortBy=publishedAt&apiKey=${API_KEY}`
      );
      
      setArticles(response.data.articles);
      setError(null);
    } catch (err) {
      setError('Failed to fetch news. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Latest Soccer News & Transfers
        </h1>

        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {article.urlToImage && (
                <img
                  className="w-full h-48 object-cover"
                  src={article.urlToImage}
                  alt={article.title}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x200?text=News+Image';
                  }}
                />
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </span>
                  <span className="text-sm text-gray-500">{article.source.name}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 line-clamp-3">
                  {article.description}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read full article →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => setPage(prev => Math.max(1, prev - 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setPage(prev => prev + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </div>
<footer className="text-center text-sm text-gray-500 mt-4">
  News data provided by <a href="https://newsapi.org" target="_blank" rel="noopener">NewsAPI.org</a>
</footer>
    </div>
  );
};

export default TransferNews;

























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FiSearch, FiFilter, FiShare2, FiAlertCircle } from 'react-icons/fi';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// const TransferNews = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [selectedLeagues, setSelectedLeagues] = useState([40, 41, 42, 43]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortBy, setSortBy] = useState('date');

//   // API Configuration
//   const API_KEY = "7e70d5eb05eaef75411a77612dc32a6a"
//   const LEAGUE_IDS = {
//     40: 'Championship',
//     41: 'League One',
//     42: 'League Two',
//     43: 'National League'
//   };

//   // Cache configuration
//   const CACHE_KEY = `transferNews-${selectedLeagues.join(',')}-${sortBy}`;
//   const CACHE_EXPIRY = 30 * 60 * 1000; // 30 minutes

//   const fetchArticles = async (page = 1, reset = false) => {
//     try {
//       setLoading(true);
      
//       // Check cache first
//       const cachedData = localStorage.getItem(CACHE_KEY);
//       if (cachedData && Date.now() - JSON.parse(cachedData).timestamp < CACHE_EXPIRY) {
//         const data = JSON.parse(cachedData);
//         setArticles(reset ? data.articles : [...articles, ...data.articles]);
//         setHasMore(data.hasMore);
//         return;
//       }

//       const response = await axios.get('https://v3.football.api-sports.io/articles', {
//         params: {
//           league: selectedLeagues.join(','),
//           page,
//           search: searchQuery,
//           order: sortBy === 'date' ? 'desc' : 'asc'
//         },
//         headers: {
//           'x-apisports-key': API_KEY,
//           'x-rapidapi-host': 'v3.football.api-sports.io'
//         }
//       });

//       const newArticles = response.data.response || [];
//       const totalArticles = response.data.paging?.total || 0;
      
//       // Update cache
//       localStorage.setItem(CACHE_KEY, JSON.stringify({
//         articles: newArticles,
//         hasMore: page * 20 < totalArticles,
//         timestamp: Date.now()
//       }));

//       setArticles(prev => reset ? newArticles : [...prev, ...newArticles]);
//       setHasMore(page * 20 < totalArticles);
//       setError(null);
//     } catch (err) {
//       handleApiError(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleApiError = (err) => {
//     if (err.response?.status === 429) {
//       setError('API rate limit reached. Please try again later.');
//     } else {
//       setError('Failed to fetch news. Please try again.');
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setPage(1);
//     fetchArticles(1, true);
//   };

//   const handleLeagueFilter = (leagueId) => {
//     setSelectedLeagues(prev => 
//       prev.includes(leagueId) 
//         ? prev.filter(id => id !== leagueId) 
//         : [...prev, leagueId]
//     );
//   };

//   const getClubLogo = (teamName) => {
//     return `https://via.placeholder.com/40x40?text=${teamName?.substring(0,2)}`;
//   };

//   useEffect(() => {
//     fetchArticles(1, true);
//   }, [selectedLeagues, sortBy]);

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Filters Section */}
//         <div className="mb-8 space-y-4">
//           <h1 className="text-3xl font-bold text-gray-900">
//             Lower League Transfer News
//           </h1>

//           <form onSubmit={handleSearch} className="flex gap-4">
//             <div className="relative flex-1">
//               <FiSearch className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search transfers..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-10 pr-4 py-2 w-full rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             >
//               Search
//             </button>
//           </form>

//           <div className="flex flex-wrap gap-4 items-center">
//             <div className="flex items-center gap-2">
//               <FiFilter className="text-gray-600" />
//               <span className="text-gray-700">Filter by:</span>
//             </div>
//             {Object.entries(LEAGUE_IDS).map(([id, name]) => (
//               <button
//                 key={id}
//                 onClick={() => handleLeagueFilter(Number(id))}
//                 className={`px-3 py-1 rounded-full ${
//                   selectedLeagues.includes(Number(id))
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-200 hover:bg-gray-300'
//                 }`}
//               >
//                 {name}
//               </button>
//             ))}
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="ml-4 px-3 py-1 rounded-lg border"
//             >
//               <option value="date">Sort by Date</option>
//               <option value="relevance">Sort by Relevance</option>
//             </select>
//           </div>
//         </div>

//         {/* Error Handling */}
//         {error && (
//           <div className="bg-red-100 p-4 rounded-lg mb-4 flex items-center gap-2">
//             <FiAlertCircle className="text-red-600" />
//             <span className="text-red-700">{error}</span>
//             <button
//               onClick={() => fetchArticles(page)}
//               className="ml-4 px-3 py-1 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg"
//             >
//               Retry
//             </button>
//           </div>
//         )}

//         {/* Articles List */}
//         <InfiniteScroll
//           dataLength={articles.length}
//           next={() => fetchArticles(page + 1)}
//           hasMore={hasMore}
//           loader={<LoadingSkeleton />}
//           endMessage={
//             <p className="text-center text-gray-500 mt-8">
//               No more transfer news to show
//             </p>
//           }
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {articles.map((article, index) => (
//               <article 
//                 key={`${article.id}-${index}`}
//                 className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div className="p-4">
//                   <div className="flex items-center gap-3 mb-3">
//                     <img 
//                       src={getClubLogo(article.team)}
//                       alt="Club logo"
//                       className="w-10 h-10 rounded-full"
//                     />
//                     <div>
//                       <h2 className="font-semibold text-gray-900">
//                         {article.title}
//                       </h2>
//                       <div className="flex gap-2 mt-1">
//                         {article.tags?.map((tag, i) => (
//                           <Badge key={i}>
//                             {tag}
//                           </Badge>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   {article.image && (
//                     <img
//                       src={article.image}
//                       alt={article.title}
//                       className="w-full h-48 object-cover rounded-lg mb-4"
//                       loading="lazy"
//                     />
//                   )}

//                   <p className="text-gray-600 line-clamp-3 mb-4">
//                     {article.content}
//                   </p>

//                   <div className="flex items-center justify-between">
//                     <div className="text-sm text-gray-500">
//                       {new Date(article.date).toLocaleDateString()}
//                     </div>
//                     <button
//                       onClick={() => navigator.share?.({
//                         title: article.title,
//                         url: article.link
//                       })}
//                       className="text-gray-500 hover:text-blue-600"
//                     >
//                       <FiShare2 />
//                     </button>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </InfiniteScroll>

//         {/* Empty State */}
//         {!loading && articles.length === 0 && (
//           <div className="text-center py-12 text-gray-500">
//             No transfer news found matching your criteria
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Loading Skeleton Component
// const LoadingSkeleton = () => (
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//     {[...Array(6)].map((_, i) => (
//       <div key={i} className="bg-white rounded-xl p-4">
//         <Skeleton height={192} className="mb-4 rounded-lg" />
//         <div className="flex items-center gap-3 mb-3">
//           <Skeleton circle width={40} height={40} />
//           <div className="flex-1">
//             <Skeleton height={20} width="80%" />
//             <div className="flex gap-2 mt-2">
//               <Skeleton width={60} height={20} />
//               <Skeleton width={60} height={20} />
//             </div>
//           </div>
//         </div>
//         <Skeleton count={3} />
//       </div>
//     ))}
//   </div>
// );

// // Badge Component
// const Badge = ({ children }) => (
//   <span className="inline-block px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">
//     {children}
//   </span>
// );

// export default TransferNews;












// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const TransferNews = () => {
// //   const [news, setNews] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [page, setPage] = useState(1);

// //   // const API_KEY = process.env.REACT_APP_NEWSAPI_KEY;
// //   const API_KEY = "a184699af92e42fdb8f2e7c19b0a15c1"
// //   const LEAGUES = ['Championship', 'League One', 'League Two', 'National League'];

// //   useEffect(() => {
// //     const fetchNews = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await axios.get(
// //           `https://newsapi.org/v2/everything?q=${encodeURIComponent(
// //             `(${LEAGUES.join(' OR ')}) AND (transfer OR signing)`
// //           )}&sortBy=publishedAt&pageSize=20&page=${page}&apiKey=${API_KEY}`
// //         );
        
// //         setNews(response.data.articles);
// //         setError(null);
// //       } catch (err) {
// //         setError('Failed to fetch news. Please try again later.');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchNews();
// //   }, [page]);

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-7xl mx-auto">
// //         <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
// //           Lower League Transfer News
// //         </h1>

// //         {loading && (
// //           <div className="flex justify-center items-center h-64">
// //             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
// //           </div>
// //         )}

// //         {error && (
// //           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
// //             {error}
// //           </div>
// //         )}

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {news.map((article, index) => (
// //             <div
// //               key={index}
// //               className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
// //             >
// //               {article.urlToImage && (
// //                 <img
// //                   className="w-full h-48 object-cover"
// //                   src={article.urlToImage}
// //                   alt={article.title}
// //                   onError={(e) => {
// //                     e.target.src = 'https://via.placeholder.com/400x200?text=No+Image';
// //                   }}
// //                 />
// //               )}
// //               <div className="p-6">
// //                 <div className="flex items-center justify-between mb-2">
// //                   <span className="text-sm text-gray-500">
// //                     {new Date(article.publishedAt).toLocaleDateString()}
// //                   </span>
// //                   <span className="text-sm text-gray-500">{article.source.name}</span>
// //                 </div>
// //                 <h2 className="text-xl font-semibold text-gray-900 mb-2">
// //                   {article.title}
// //                 </h2>
// //                 <p className="text-gray-600 line-clamp-3">
// //                   {article.description}
// //                 </p>
// //                 <a
// //                   href={article.url}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
// //                 >
// //                   Read full article →
// //                 </a>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="mt-8 flex justify-center gap-4">
// //           <button
// //             onClick={() => setPage(prev => Math.max(1, prev - 1))}
// //             disabled={page === 1}
// //             className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
// //           >
// //             Previous
// //           </button>
// //           <button
// //             onClick={() => setPage(prev => prev + 1)}
// //             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
// //           >
// //             Next
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TransferNews;