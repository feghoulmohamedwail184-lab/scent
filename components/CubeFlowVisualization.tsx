import React from 'react';

const CubeFlowVisualization: React.FC = () => {
  return (
    <div className="w-full h-96 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg p-8 relative overflow-hidden">
      {/* Flow streamlines */}
      <svg className="w-full h-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
        {/* Incoming flow lines */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#60a5fa" />
          </marker>
        </defs>
        
        {/* Background flow lines */}
        {[80, 120, 160, 200, 240, 280, 320].map((y, i) => (
          <line
            key={`flow-${i}`}
            x1="0"
            y1={y}
            x2="250"
            y2={y}
            stroke="#60a5fa"
            strokeWidth="2"
            strokeDasharray="5,5"
            markerEnd="url(#arrowhead)"
            opacity="0.6"
          />
        ))}
        
        {/* Channel walls */}
        <line x1="0" y1="50" x2="800" y2="50" stroke="#94a3b8" strokeWidth="3" />
        <line x1="0" y1="350" x2="800" y2="350" stroke="#94a3b8" strokeWidth="3" />
        
        {/* Wall-mounted cube */}
        <rect
          x="300"
          y="250"
          width="100"
          height="100"
          fill="#1e293b"
          stroke="#f59e0b"
          strokeWidth="3"
        />
        
        {/* Cube 3D effect */}
        <polygon
          points="300,250 350,220 450,220 400,250"
          fill="#334155"
          stroke="#f59e0b"
          strokeWidth="2"
        />
        <polygon
          points="400,250 450,220 450,320 400,350"
          fill="#475569"
          stroke="#f59e0b"
          strokeWidth="2"
        />
        
        {/* Horseshoe vortex (upstream) */}
        <path
          d="M 280 320 Q 260 300 260 280 Q 260 260 280 250"
          fill="none"
          stroke="#ef4444"
          strokeWidth="3"
          opacity="0.8"
        />
        <path
          d="M 280 330 Q 250 310 250 280 Q 250 250 280 240"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
          opacity="0.6"
        />
        
        {/* Flow over top */}
        <path
          d="M 250 200 Q 300 180 350 220 Q 380 240 450 220"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
        
        {/* Separation bubble on top */}
        <ellipse
          cx="350"
          cy="235"
          rx="30"
          ry="15"
          fill="none"
          stroke="#a855f7"
          strokeWidth="2"
          strokeDasharray="3,3"
        />
        
        {/* Side vortices */}
        <path
          d="M 400 280 Q 420 280 420 300 Q 420 320 400 320"
          fill="none"
          stroke="#ec4899"
          strokeWidth="2"
          opacity="0.7"
        />
        
        {/* Wake region */}
        <ellipse
          cx="500"
          cy="300"
          rx="80"
          ry="50"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.6"
        />
        
        {/* Recirculation in wake */}
        <path
          d="M 420 280 Q 480 270 520 280 Q 540 290 520 310 Q 480 330 420 320"
          fill="none"
          stroke="#a855f7"
          strokeWidth="2"
        />
        <circle cx="470" cy="295" r="3" fill="#a855f7" />
        
        {/* Downstream flow recovery */}
        {[260, 280, 300, 320].map((y, i) => (
          <line
            key={`downstream-${i}`}
            x1="600"
            y1={y}
            x2="800"
            y2={y}
            stroke="#60a5fa"
            strokeWidth="2"
            strokeDasharray="5,5"
            markerEnd="url(#arrowhead)"
            opacity="0.5"
          />
        ))}
        
        {/* Labels */}
        <text x="100" y="30" fill="#e2e8f0" fontSize="14" fontWeight="bold">Inlet Flow</text>
        <text x="350" y="380" fill="#f59e0b" fontSize="16" fontWeight="bold" textAnchor="middle">Cube (H)</text>
        <text x="200" y="290" fill="#ef4444" fontSize="12">Horseshoe Vortex</text>
        <text x="500" y="340" fill="#8b5cf6" fontSize="12">Wake Region</text>
        <text x="320" y="210" fill="#a855f7" fontSize="11">Separation</text>
        <text x="650" y="250" fill="#e2e8f0" fontSize="12">Flow Recovery</text>
      </svg>
      
      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-slate-800 bg-opacity-90 p-3 rounded-lg text-xs">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-4 h-0.5 bg-blue-400"></div>
          <span className="text-gray-200">Main Flow</span>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-4 h-0.5 bg-red-500"></div>
          <span className="text-gray-200">Horseshoe Vortex</span>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-4 h-0.5 bg-purple-500"></div>
          <span className="text-gray-200">Recirculation</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-pink-500"></div>
          <span className="text-gray-200">Side Vortices</span>
        </div>
      </div>
    </div>
  );
};

export default CubeFlowVisualization;
