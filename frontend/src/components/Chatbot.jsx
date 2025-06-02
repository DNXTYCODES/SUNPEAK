const Chatbot = () => (
  <div id="solar-assistant" className="min-h-screen bg-gradient-to-br from-[var(--bg)] to-[var(--card-bg)] py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4 animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[var(--primary-neon)] to-teal-400 bg-clip-text text-transparent">
          Solar Energy Assistant ⚡
          <span className="block mt-2 text-xl md:text-2xl font-medium text-[var(--text-muted)]">
            Your 24/7 Solar Expert - Instant Calculations & Smart Recommendations
          </span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <div className="badge badge-outline text-[var(--primary-neon)] border-[var(--primary-neon)]">
            <span className="h-2 w-2 bg-[var(--primary-neon)] rounded-full mr-2 animate-pulse"></span>
            Live System Analysis
          </div>
          <div className="badge badge-outline text-[var(--primary-neon)] border-[var(--primary-neon)]">
            📈 Energy Consumption Tracking
          </div>
          <div className="badge badge-outline text-[var(--primary-neon)] border-[var(--primary-neon)]">
            🔋 Battery Optimization
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary-neon)] to-teal-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative rounded-2xl bg-[var(--card-bg)] backdrop-blur-sm shadow-xl border border-[var(--border)] overflow-hidden">
          <div className="p-6 border-b border-[var(--border)]">
            <h3 className="text-lg font-semibold text-[var(--text)]">Capabilities Include:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {[
                { icon: '💰', title: 'Cost Estimation', desc: 'Appliance-based system pricing' },
                { icon: '📦', title: 'Package Matching', desc: 'Tailored solar solutions' },
                { icon: '📊', title: 'Savings Calculator', desc: 'ROI & Payback Periods' },
                { icon: '🛠️', title: 'Troubleshooting', desc: 'Diagnose system issues' },
                { icon: '🔋', title: 'Battery Analysis', desc: 'Storage needs calculation' },
                { icon: '🌞', title: 'Solar Education', desc: 'How solar works' },
                { icon: '📑', title: 'Documentation', desc: 'Permit requirements' },
                { icon: '📅', title: 'Maintenance', desc: 'Service scheduling' }
              ].map((feature, index) => (
                <div key={index} className="p-3 rounded-lg border border-[var(--border)] hover:border-[var(--primary-neon)] transition-colors">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h4 className="font-medium text-[var(--text)]">{feature.title}</h4>
                  <p className="text-sm text-[var(--text-muted)]">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <iframe
            src="https://udify.app/chat/tTA5Fgui9bw01oX3"
            className="w-full h-[500px] md:h-[600px] bg-[var(--bg)]"
            frameBorder="0"
            allow="microphone"
            loading="lazy"
            title="Solar Energy Assistant Chat Interface"
          />
        </div>
      </div>

      <div className="text-center text-[var(--text-muted)] text-sm space-y-2">
        <p>⚡ Real-time Energy Calculations • 📆 Installation Scheduling</p>
        <p>🔒 NERC-Certified Advice • 🔄 Multi-language Support</p>
        <div className="pt-4 border-t border-[var(--border)] mt-4">
          <span className="inline-block mx-2">🏢 Commercial Solutions</span>
          <span className="inline-block mx-2">🏠 Residential Plans</span>
          <span className="inline-block mx-2">🏭 Industrial Systems</span>
        </div>
      </div>
    </div>
  </div>
);

export default Chatbot;






























// const Chatbot = () => (
//   <div id="chatbot-container"  className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-[#1a1a2e] dark:to-[#16213e] py-12 px-4 sm:px-6 lg:px-8">
//     <div className="max-w-4xl mx-auto space-y-8">
//       <div className="text-center space-y-4">
//         <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#43284b] to-[#6b21a8] dark:from-purple-400 dark:to-pink-300 bg-clip-text text-transparent animate-fade-in">
//           Let's Chat! 💬
//           <span className="block mt-2 text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300">
//             Ask me anything – responses in real-time ⚡
//           </span>
//         </h2>
        
//         <div className="flex items-center justify-center space-x-2">
//           <span className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></span>
//           <p className="text-sm text-gray-500 dark:text-gray-400">Online now</p>
//         </div>
//       </div>

//       <div className="relative group">
//         <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
//         <div className="relative rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
//           <iframe
//             src="https://udify.app/chatbot/uiXzudRKMizBilPo"
//             className="w-full h-[600px] md:h-[700px] transition-all duration-300 hover:opacity-95"
//             frameBorder="0"
//             allow="microphone"
//             loading="lazy"
//           />
//         </div>
//       </div>

//       <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
//         Powered by AI • Secure conversation • 24/7 availability
//       </p>
//     </div>
//   </div>
// );

// export default Chatbot;


