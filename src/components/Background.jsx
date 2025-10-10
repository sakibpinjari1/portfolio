import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 bg-black">
      {/* Matrix-style animated background */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>

        {/* Matrix characters overlay */}
        <div className="absolute inset-0 pointer-events-none matrix-overlay">
          <div className="text-green-400 font-mono text-xs leading-none whitespace-pre-line break-all h-full overflow-hidden select-none">
            {Array.from({ length: 60 }, (_, rowIndex) =>
              Array.from({ length: 120 }, (_, colIndex) =>
                Math.random() > 0.95 ? String.fromCharCode(33 + Math.floor(Math.random() * 94)) : ' '
              ).join('')
            ).join('\n')}
          </div>
        </div>

        {/* Connecting lines pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="matrix-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#00ff88" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#matrix-grid)" />
        </svg>
      </div>
    </div>
  );
};

export default Background;