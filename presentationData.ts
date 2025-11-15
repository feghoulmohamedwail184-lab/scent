export interface Slide {
  id: number;
  title: string;
  content: string[];
  type: 'title' | 'content' | 'two-column' | 'visual' | 'conclusion';
  leftColumn?: string[];
  rightColumn?: string[];
  visual?: string;
  equations?: string[];
}

export const slides: Slide[] = [
  {
    id: 1,
    type: 'title',
    title: 'LES Numerical Study of Reynolds Number Effects on Flow over a Wall-Mounted Cube in a Channel',
    content: [
      'A Computational Fluid Dynamics Investigation',
      'Large Eddy Simulation Approach'
    ]
  },
  {
    id: 2,
    type: 'content',
    title: 'Introduction',
    content: [
      '• Flow over bluff bodies is fundamental in fluid mechanics',
      '• Wall-mounted cube represents simplified building/obstacle geometry',
      '• Reynolds number (Re) significantly affects flow characteristics',
      '• Understanding these effects is crucial for:',
      '  - Urban aerodynamics',
      '  - Building design',
      '  - Pollutant dispersion',
      '  - Heat transfer applications'
    ]
  },
  {
    id: 3,
    type: 'content',
    title: 'What is Large Eddy Simulation (LES)?',
    content: [
      '• Advanced turbulence modeling technique',
      '• Directly resolves large-scale turbulent structures',
      '• Models small-scale (subgrid) turbulence',
      '• More accurate than RANS, less expensive than DNS',
      '• Particularly effective for complex geometries',
      '• Captures unsteady flow features and vortex dynamics'
    ]
  },
  {
    id: 4,
    type: 'content',
    title: 'Reynolds Number (Re)',
    content: [
      '• Dimensionless parameter characterizing flow regime',
      '• Ratio of inertial forces to viscous forces',
      '',
      '• Where:',
      '  - U = characteristic velocity',
      '  - L = characteristic length (cube height)',
      '  - ν = kinematic viscosity',
      '',
      '• Higher Re → more turbulent flow',
      '• Critical parameter for flow similarity'
    ],
    equations: ['Re = UL/ν']
  },
  {
    id: 5,
    type: 'content',
    title: 'Problem Setup',
    content: [
      '• Geometry: Cube mounted on channel bottom wall',
      '• Cube height (H) used as characteristic length',
      '• Channel dimensions: typically 20H × 6H × 6H',
      '• Cube positioned to allow flow development',
      '• Boundary conditions:',
      '  - Inlet: Uniform or turbulent velocity profile',
      '  - Outlet: Convective/pressure outlet',
      '  - Walls: No-slip condition',
      '  - Top: Slip or symmetry condition'
    ]
  },
  {
    id: 6,
    type: 'visual',
    title: 'Flow Regions Around the Cube',
    content: [
      '1. Upstream horseshoe vortex',
      '2. Flow separation at leading edge',
      '3. Recirculation zone on top surface',
      '4. Side edge vortices',
      '5. Wake region behind cube',
      '6. Reattachment downstream'
    ],
    visual: 'cube-flow'
  },
  {
    id: 7,
    type: 'two-column',
    title: 'Numerical Methodology',
    leftColumn: [
      'Governing Equations:',
      '• Filtered Navier-Stokes equations',
      '• Continuity equation',
      '• Subgrid-scale (SGS) model',
      '',
      'SGS Models Used:',
      '• Smagorinsky model',
      '• Dynamic Smagorinsky',
      '• WALE model'
    ],
    rightColumn: [
      'Numerical Schemes:',
      '• Spatial: 2nd order central difference',
      '• Temporal: 2nd order implicit',
      '• Pressure-velocity: PISO/SIMPLE',
      '',
      'Grid Resolution:',
      '• Fine mesh near walls (y+ < 1)',
      '• Refined around cube edges',
      '• Total cells: 5-20 million'
    ],
    content: []
  },
  {
    id: 8,
    type: 'content',
    title: 'Reynolds Number Cases Studied',
    content: [
      '• Low Re (Re = 1,000 - 5,000):',
      '  - Laminar to transitional flow',
      '  - Steady wake structures',
      '',
      '• Moderate Re (Re = 10,000 - 40,000):',
      '  - Fully turbulent flow',
      '  - Unsteady vortex shedding',
      '',
      '• High Re (Re > 100,000):',
      '  - Highly turbulent',
      '  - Complex wake dynamics',
      '  - Reynolds number independence approached'
    ]
  },
  {
    id: 9,
    type: 'content',
    title: 'Key Results: Velocity Field',
    content: [
      '• Upstream velocity reduction increases with Re',
      '• Horseshoe vortex intensity strengthens with Re',
      '• Recirculation zone length behind cube:',
      '  - Increases with Re up to Re ≈ 40,000',
      '  - Becomes relatively constant at higher Re',
      '',
      '• Top surface separation bubble:',
      '  - More pronounced at higher Re',
      '  - Reattachment point moves downstream',
      '',
      '• Wake recovery distance increases with Re'
    ]
  },
  {
    id: 10,
    type: 'content',
    title: 'Key Results: Pressure Distribution',
    content: [
      '• Stagnation pressure at front face',
      '• Strong suction on top and side edges',
      '• Low pressure in wake region',
      '',
      '• Pressure coefficient (Cp) trends:',
      '  - Front face: Cp decreases slightly with Re',
      '  - Top surface: Suction peak increases with Re',
      '  - Rear face: Base pressure becomes more negative',
      '',
      '• Drag coefficient (Cd):',
      '  - Decreases with increasing Re',
      '  - Approaches constant value at high Re'
    ]
  },
  {
    id: 11,
    type: 'content',
    title: 'Key Results: Turbulence Characteristics',
    content: [
      '• Turbulent kinetic energy (TKE):',
      '  - Peak values in shear layers',
      '  - Increases with Re in wake region',
      '  - Maximum near cube edges and wake',
      '',
      '• Reynolds stresses:',
      '  - Anisotropic distribution',
      '  - Stronger in separated regions',
      '',
      '• Vortex shedding frequency:',
      '  - Strouhal number (St = fH/U) ≈ 0.12-0.15',
      '  - Relatively independent of Re at high Re'
    ]
  },
  {
    id: 12,
    type: 'two-column',
    title: 'Comparison with Experiments',
    leftColumn: [
      'Good Agreement:',
      '• Mean velocity profiles',
      '• Recirculation zone length',
      '• Pressure distribution',
      '• Drag coefficients',
      '',
      'Validation Data:',
      '• PIV measurements',
      '• Hot-wire anemometry',
      '• Pressure taps'
    ],
    rightColumn: [
      'LES Advantages:',
      '• Captures unsteady features',
      '• Resolves large-scale vortices',
      '• Better than RANS for separated flows',
      '',
      'Challenges:',
      '• Computational cost',
      '• Grid resolution requirements',
      '• Near-wall treatment'
    ],
    content: []
  },
  {
    id: 13,
    type: 'content',
    title: 'Practical Implications',
    content: [
      '• Building Aerodynamics:',
      '  - Wind load predictions',
      '  - Pedestrian comfort assessment',
      '',
      '• Urban Planning:',
      '  - Pollutant dispersion modeling',
      '  - Ventilation strategies',
      '',
      '• Heat Transfer:',
      '  - Cooling system design',
      '  - Thermal management',
      '',
      '• Industrial Applications:',
      '  - Flow control devices',
      '  - Optimization of bluff body shapes'
    ]
  },
  {
    id: 14,
    type: 'conclusion',
    title: 'Conclusions',
    content: [
      '• LES successfully captures Reynolds number effects on flow over wall-mounted cube',
      '',
      '• Key findings:',
      '  - Flow becomes more turbulent and complex with increasing Re',
      '  - Wake length and turbulence intensity increase with Re',
      '  - Drag coefficient decreases and approaches constant at high Re',
      '  - Reynolds number independence observed above Re ≈ 40,000',
      '',
      '• LES provides detailed insights into:',
      '  - Vortex dynamics and turbulent structures',
      '  - Unsteady flow features',
      '  - Complex flow separation and reattachment',
      '',
      '• Results valuable for engineering applications and validation of turbulence models'
    ]
  },
  {
    id: 15,
    type: 'content',
    title: 'Future Work',
    content: [
      '• Extended Reynolds number range studies',
      '',
      '• Different cube aspect ratios and orientations',
      '',
      '• Multiple cube configurations (arrays)',
      '',
      '• Thermal effects and heat transfer analysis',
      '',
      '• Machine learning integration for flow prediction',
      '',
      '• Optimization studies for drag reduction',
      '',
      '• Real-world geometry applications'
    ]
  },
  {
    id: 16,
    type: 'title',
    title: 'Thank You',
    content: [
      'Questions?',
      '',
      'LES Numerical Study of Reynolds Number Effects',
      'on Flow over a Wall-Mounted Cube in a Channel'
    ]
  }
];
