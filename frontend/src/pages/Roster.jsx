import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import PlayerItem from '../components/PlayerItem';

const Roster = () => {
  const { players, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    strongFoot: [],
    nationality: [],
    position: [],
    status: [],
    minAge: '',
    maxAge: '',
    minHeight: '',
    maxHeight: '',
    minWeight: '',
    maxWeight: '',
  });

  const toggleFilter = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value],
    }));
  };

  const applyFilter = () => {
    let filtered = [...players];

    if (players.length === 0) return;

    // Search filter
    if (showSearch && search) {
      filtered = filtered.filter((player) =>
        player.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Strong Foot filter
    if (filters.strongFoot.length > 0) {
      filtered = filtered.filter((player) =>
        filters.strongFoot.includes(player.strongerFoot)
      );
    }

    // Nationality filter
    if (filters.nationality.length > 0) {
      filtered = filtered.filter((player) =>
        filters.nationality.includes(player.nationality)
      );
    }

    // Position filter
    if (filters.position.length > 0) {
      filtered = filtered.filter((player) =>
        filters.position.includes(player.position)
      );
    }

    // Status filter
    if (filters.status.length > 0) {
      filtered = filtered.filter((player) => {
        if (filters.status.includes('free')) return !player.currentClub;
        if (filters.status.includes('contracted')) return !!player.currentClub;
        return true;
      });
    }

    // Numeric filters
    const numericFilters = [
      { field: 'age', min: filters.minAge, max: filters.maxAge },
      { field: 'height', min: filters.minHeight, max: filters.maxHeight },
      { field: 'weight', min: filters.minWeight, max: filters.maxWeight },
    ];

    numericFilters.forEach(({ field, min, max }) => {
      if (min) filtered = filtered.filter((p) => p[field] >= Number(min));
      if (max) filtered = filtered.filter((p) => p[field] <= Number(max));
    });

    setFilteredPlayers(filtered);
    setIsLoading(false);
  };

  useEffect(() => {
    if (players.length > 0) {
      applyFilter();
    } else {
      setIsLoading(true);
    }
  }, [filters, search, showSearch, players]);

  // Get unique filter options
  const nationalities = [...new Set(players.map((p) => p.nationality))].sort();
  const positions = [...new Set(players.map((p) => p.position))].sort();

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Sidebar */}
      <div className='min-w-60 bg-white p-4 shadow-sm'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-xl font-semibold'>Filters</h2>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className='sm:hidden text-gray-500 hover:text-gray-700'
          >
            {showFilter ? '▲' : '▼'}
          </button>
        </div>

        <div className={`space-y-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          {/* Status Filter */}
          <div className='border-b pb-4'>
            <h3 className='font-medium mb-3'>Player Status</h3>
            <div className='space-y-2 text-sm'>
              {['Free Agent', 'Contracted'].map((status) => (
                <label key={status} className='flex items-center gap-2'>
                  <input
                    type="checkbox"
                    value={status.toLowerCase()}
                    onChange={(e) => toggleFilter('status', e.target.value)}
                    className='form-checkbox'
                  />
                  {status}
                </label>
              ))}
            </div>
          </div>

          {/* Position Filter */}
          <div className='border-b pb-4'>
            <h3 className='font-medium mb-3'>Position</h3>
            <div className='space-y-2 text-sm'>
              {positions.map((position) => (
                <label key={position} className='flex items-center gap-2'>
                  <input
                    type="checkbox"
                    value={position}
                    onChange={(e) => toggleFilter('position', e.target.value)}
                    className='form-checkbox'
                  />
                  {position}
                </label>
              ))}
            </div>
          </div>

          {/* Nationality Filter */}
          <div className='border-b pb-4'>
            <h3 className='font-medium mb-3'>Nationality</h3>
            <div className='space-y-2 text-sm'>
              {nationalities.map((nation) => (
                <label key={nation} className='flex items-center gap-2'>
                  <input
                    type="checkbox"
                    value={nation}
                    onChange={(e) => toggleFilter('nationality', e.target.value)}
                    className='form-checkbox'
                  />
                  {nation}
                </label>
              ))}
            </div>
          </div>

          {/* Numeric Filters */}
          <div className='space-y-4'>
            <div className='border-b pb-4'>
              <h3 className='font-medium mb-3'>Age Range</h3>
              <div className='flex gap-2'>
                <input
                  type="number"
                  placeholder="Min"
                  className='w-full p-2 border rounded'
                  onChange={(e) => setFilters((prev) => ({ ...prev, minAge: e.target.value }))}
                />
                <input
                  type="number"
                  placeholder="Max"
                  className='w-full p-2 border rounded'
                  onChange={(e) => setFilters((prev) => ({ ...prev, maxAge: e.target.value }))}
                />
              </div>
            </div>

            <div className='border-b pb-4'>
              <h3 className='font-medium mb-3'>Height (cm)</h3>
              <div className='flex gap-2'>
                <input
                  type="number"
                  placeholder="Min"
                  className='w-full p-2 border rounded'
                  onChange={(e) => setFilters((prev) => ({ ...prev, minHeight: e.target.value }))}
                />
                <input
                  type="number"
                  placeholder="Max"
                  className='w-full p-2 border rounded'
                  onChange={(e) => setFilters((prev) => ({ ...prev, maxHeight: e.target.value }))}
                />
              </div>
            </div>

            <div className='border-b pb-4'>
              <h3 className='font-medium mb-3'>Weight (kg)</h3>
              <div className='flex gap-2'>
                <input
                  type="number"
                  placeholder="Min"
                  className='w-full p-2 border rounded'
                  onChange={(e) => setFilters((prev) => ({ ...prev, minWeight: e.target.value }))}
                />
                <input
                  type="number"
                  placeholder="Max"
                  className='w-full p-2 border rounded'
                  onChange={(e) => setFilters((prev) => ({ ...prev, maxWeight: e.target.value }))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Player Grid */}
      <div className='flex-1 p-4'>
        <div className='mb-8'>
          <Title text1='TEAM' text2='ROSTER' />
          <p className='text-gray-500 mt-2'>
            {isLoading ? 'Loading...' : `Showing ${filteredPlayers.length} players`}
          </p>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center my-20">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 rounded-full bg-black animate-spin">
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <p className="mt-6 text-xl text-gray-600 font-medium">
              Loading Team Roster...
            </p>
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {filteredPlayers.map((player) => (
              <PlayerItem
                key={player._id}
                id={player._id}
                name={player.name}
                profileImage={player.profileImage}
                position={player.position}
                nationality={player.nationality}
                currentClub={player.currentClub}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Roster;






















// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import PlayerItem from '../components/PlayerItem';

// const Roster = () => {
//   const { players, search, showSearch } = useContext(ShopContext);
//   const [showFilter, setShowFilter] = useState(false);
//   const [filteredPlayers, setFilteredPlayers] = useState([]);
//   const [filters, setFilters] = useState({
//     strongFoot: [],
//     nationality: [],
//     position: [],
//     status: [],
//     minAge: '',
//     maxAge: '',
//     minHeight: '',
//     maxHeight: '',
//     minWeight: '',
//     maxWeight: '',
//   });

//   const toggleFilter = (filterType, value) => {
//     setFilters((prev) => ({
//       ...prev,
//       [filterType]: prev[filterType].includes(value)
//         ? prev[filterType].filter((item) => item !== value)
//         : [...prev[filterType], value],
//     }));
//   };

//   const applyFilter = () => {
//     let filtered = [...players];

//     // Search filter
//     if (showSearch && search) {
//       filtered = filtered.filter((player) =>
//         player.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     // Strong Foot filter
//     if (filters.strongFoot.length > 0) {
//       filtered = filtered.filter((player) =>
//         filters.strongFoot.includes(player.strongerFoot)
//       );
//     }

//     // Nationality filter
//     if (filters.nationality.length > 0) {
//       filtered = filtered.filter((player) =>
//         filters.nationality.includes(player.nationality)
//       );
//     }

//     // Position filter
//     if (filters.position.length > 0) {
//       filtered = filtered.filter((player) =>
//         filters.position.includes(player.position)
//       );
//     }

//     // Status filter
//     if (filters.status.length > 0) {
//       filtered = filtered.filter((player) => {
//         if (filters.status.includes('free')) return !player.currentClub;
//         if (filters.status.includes('contracted')) return !!player.currentClub;
//         return true;
//       });
//     }

//     // Numeric filters
//     const numericFilters = [
//       { field: 'age', min: filters.minAge, max: filters.maxAge },
//       { field: 'height', min: filters.minHeight, max: filters.maxHeight },
//       { field: 'weight', min: filters.minWeight, max: filters.maxWeight },
//     ];

//     numericFilters.forEach(({ field, min, max }) => {
//       if (min) filtered = filtered.filter((p) => p[field] >= Number(min));
//       if (max) filtered = filtered.filter((p) => p[field] <= Number(max));
//     });

//     setFilteredPlayers(filtered);
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [filters, search, showSearch, players]);

//   // Get unique filter options
//   const nationalities = [...new Set(players.map((p) => p.nationality))].sort();
//   const positions = [...new Set(players.map((p) => p.position))].sort();

//   return (
//     <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
//       {/* Filter Sidebar */}
//       <div className='min-w-60 bg-white p-4 shadow-sm'>
//         <div className='flex items-center justify-between mb-6'>
//           <h2 className='text-xl font-semibold'>Filters</h2>
//           <button
//             onClick={() => setShowFilter(!showFilter)}
//             className='sm:hidden text-gray-500 hover:text-gray-700'
//           >
//             {showFilter ? '▲' : '▼'}
//           </button>
//         </div>

//         <div className={`space-y-6 ${showFilter ? '' : 'hidden'} sm:block`}>
//           {/* Status Filter */}
//           <div className='border-b pb-4'>
//             <h3 className='font-medium mb-3'>Player Status</h3>
//             <div className='space-y-2 text-sm'>
//               {['Free Agent', 'Contracted'].map((status) => (
//                 <label key={status} className='flex items-center gap-2'>
//                   <input
//                     type="checkbox"
//                     value={status.toLowerCase()}
//                     onChange={(e) => toggleFilter('status', e.target.value)}
//                     className='form-checkbox'
//                   />
//                   {status}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Position Filter */}
//           <div className='border-b pb-4'>
//             <h3 className='font-medium mb-3'>Position</h3>
//             <div className='space-y-2 text-sm'>
//               {positions.map((position) => (
//                 <label key={position} className='flex items-center gap-2'>
//                   <input
//                     type="checkbox"
//                     value={position}
//                     onChange={(e) => toggleFilter('position', e.target.value)}
//                     className='form-checkbox'
//                   />
//                   {position}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Nationality Filter */}
//           <div className='border-b pb-4'>
//             <h3 className='font-medium mb-3'>Nationality</h3>
//             <div className='space-y-2 text-sm'>
//               {nationalities.map((nation) => (
//                 <label key={nation} className='flex items-center gap-2'>
//                   <input
//                     type="checkbox"
//                     value={nation}
//                     onChange={(e) => toggleFilter('nationality', e.target.value)}
//                     className='form-checkbox'
//                   />
//                   {nation}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Numeric Filters */}
//           <div className='space-y-4'>
//             <div className='border-b pb-4'>
//               <h3 className='font-medium mb-3'>Age Range</h3>
//               <div className='flex gap-2'>
//                 <input
//                   type="number"
//                   placeholder="Min"
//                   className='w-full p-2 border rounded'
//                   onChange={(e) => setFilters((prev) => ({ ...prev, minAge: e.target.value }))}
//                 />
//                 <input
//                   type="number"
//                   placeholder="Max"
//                   className='w-full p-2 border rounded'
//                   onChange={(e) => setFilters((prev) => ({ ...prev, maxAge: e.target.value }))}
//                 />
//               </div>
//             </div>

//             <div className='border-b pb-4'>
//               <h3 className='font-medium mb-3'>Height (cm)</h3>
//               <div className='flex gap-2'>
//                 <input
//                   type="number"
//                   placeholder="Min"
//                   className='w-full p-2 border rounded'
//                   onChange={(e) => setFilters((prev) => ({ ...prev, minHeight: e.target.value }))}
//                 />
//                 <input
//                   type="number"
//                   placeholder="Max"
//                   className='w-full p-2 border rounded'
//                   onChange={(e) => setFilters((prev) => ({ ...prev, maxHeight: e.target.value }))}
//                 />
//               </div>
//             </div>

//             <div className='border-b pb-4'>
//               <h3 className='font-medium mb-3'>Weight (kg)</h3>
//               <div className='flex gap-2'>
//                 <input
//                   type="number"
//                   placeholder="Min"
//                   className='w-full p-2 border rounded'
//                   onChange={(e) => setFilters((prev) => ({ ...prev, minWeight: e.target.value }))}
//                 />
//                 <input
//                   type="number"
//                   placeholder="Max"
//                   className='w-full p-2 border rounded'
//                   onChange={(e) => setFilters((prev) => ({ ...prev, maxWeight: e.target.value }))}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Player Grid */}
//       <div className='flex-1 p-4'>
//         <div className='mb-8'>
//           <Title text1='TEAM' text2='ROSTER' />
//           <p className='text-gray-500 mt-2'>
//             Showing {filteredPlayers.length} players
//           </p>
//         </div>

//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
//           {filteredPlayers.map((player) => (
//             <PlayerItem
//               key={player._id}
//               id={player._id}
//               name={player.name}
//               profileImage={player.profileImage}
//               position={player.position}
//               nationality={player.nationality}
//               currentClub={player.currentClub}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Roster;
