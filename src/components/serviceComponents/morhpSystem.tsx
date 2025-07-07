import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Microscope, Shield, Beaker } from "lucide-react"

export default function WaterSystemMorph() {
  const [activeSystem, setActiveSystem] = useState(0)
  const morphRef = useRef<HTMLDivElement>(null)
  const pathRefs = useRef<(SVGPathElement | null)[]>([])
  const particleRefs = useRef<(SVGCircleElement | null)[]>([])
  const systemLabelRef = useRef<HTMLDivElement>(null)

  const waterSystems = [
    {
      id: "residential",
      name: "Residential System",
      description: "Single-family homes and small apartments",
      color: "#3B82F6",
      paths: [
        "M 50 150 L 150 150 L 150 100 L 250 100 L 250 150 L 350 150",
        "M 150 150 L 150 200 L 200 200 L 200 250",
        "M 250 150 L 250 200 L 300 200",
      ],
      connections: [
        { x: 50, y: 150, label: "Main Supply" },
        { x: 150, y: 100, label: "Kitchen" },
        { x: 250, y: 100, label: "Bathroom" },
        { x: 200, y: 250, label: "Laundry" },
        { x: 300, y: 200, label: "Garden" },
      ],
    },
    {
      id: "commercial",
      name: "Commercial Building",
      description: "Office buildings and retail spaces",
      color: "#10B981",
      paths: [
        "M 50 150 L 100 150 L 100 80 L 200 80 L 200 50 L 350 50",
        "M 100 150 L 100 220 L 200 220 L 200 280 L 350 280",
        "M 200 80 L 200 150 L 300 150 L 300 200",
        "M 200 220 L 250 220 L 250 180 L 320 180",
      ],
      connections: [
        { x: 50, y: 150, label: "Main Supply" },
        { x: 350, y: 50, label: "Floor 3" },
        { x: 300, y: 150, label: "Floor 2" },
        { x: 320, y: 180, label: "Floor 1" },
        { x: 350, y: 280, label: "Basement" },
      ],
    },
    {
      id: "industrial",
      name: "Industrial Complex",
      description: "Manufacturing and processing facilities",
      color: "#F59E0B",
      paths: [
        "M 50 150 L 120 150 L 120 80 L 200 80 L 200 50 L 280 50 L 280 100 L 350 100",
        "M 120 150 L 120 220 L 180 220 L 180 280 L 250 280 L 250 250 L 350 250",
        "M 200 80 L 200 150 L 280 150 L 280 200 L 320 200",
        "M 180 220 L 240 220 L 240 180 L 300 180 L 300 130",
        "M 280 150 L 330 150 L 330 120",
      ],
      connections: [
        { x: 50, y: 150, label: "Main Supply" },
        { x: 350, y: 100, label: "Production A" },
        { x: 320, y: 200, label: "Production B" },
        { x: 300, y: 130, label: "Cooling System" },
        { x: 330, y: 120, label: "Steam Generation" },
        { x: 350, y: 250, label: "Waste Treatment" },
      ],
    },
    {
      id: "healthcare",
      name: "Healthcare Facility",
      description: "Hospitals and medical centers",
      color: "#EF4444",
      paths: [
        "M 50 150 L 100 150 L 100 70 L 180 70 L 180 40 L 280 40 L 280 80 L 350 80",
        "M 100 150 L 100 230 L 160 230 L 160 290 L 240 290 L 240 260 L 350 260",
        "M 180 70 L 180 150 L 260 150 L 260 120 L 320 120",
        "M 160 230 L 220 230 L 220 190 L 290 190 L 290 160",
        "M 260 150 L 310 150 L 310 200 L 340 200",
        "M 220 230 L 270 230 L 270 210",
      ],
      connections: [
        { x: 50, y: 150, label: "Main Supply" },
        { x: 350, y: 80, label: "OR Suites" },
        { x: 320, y: 120, label: "ICU" },
        { x: 290, y: 160, label: "Patient Rooms" },
        { x: 340, y: 200, label: "Laboratory" },
        { x: 270, y: 210, label: "Sterilization" },
        { x: 350, y: 260, label: "Emergency" },
      ],
    },
  ]

  useEffect(() => {
    if (!morphRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: morphRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    // Initial animation
    pathRefs.current.forEach((path, index) => {
      if (path) {
        tl.fromTo(
          path,
          {
            strokeDasharray: "0 1000",
            opacity: 0,
          },
          {
            strokeDasharray: "1000 0",
            opacity: 0.8,
            duration: 1.5,
            ease: "power2.inOut",
          },
          index * 0.2,
        )
      }
    })

    return () => {
      tl.kill()
    }
  }, [])

  const morphToSystem = (systemIndex: number) => {
    if (systemIndex === activeSystem) return

    const currentSystem = waterSystems[activeSystem]
    const targetSystem = waterSystems[systemIndex]

    const tl = gsap.timeline()

    // Fade out particles
    particleRefs.current.forEach((particle) => {
      if (particle) {
        tl.to(particle, { opacity: 0, duration: 0.3 }, 0)
      }
    })

    // Morph paths
    pathRefs.current.forEach((path, index) => {
      if (path && targetSystem.paths[index]) {
        tl.to(
          path,
          {
            morphSVG: targetSystem.paths[index],
            stroke: targetSystem.color,
            duration: 1.5,
            ease: "power2.inOut",
          },
          0.3,
        )
      } else if (path && !targetSystem.paths[index]) {
        // Fade out extra paths
        tl.to(path, { opacity: 0, duration: 0.5 }, 0.3)
      }
    })

    // Add new paths if target has more
    if (targetSystem.paths.length > currentSystem.paths.length) {
      for (let i = currentSystem.paths.length; i < targetSystem.paths.length; i++) {
        const path = pathRefs.current[i]
        if (path) {
          tl.fromTo(
            path,
            {
              d: currentSystem.paths[0], // Start from first path
              opacity: 0,
              stroke: currentSystem.color,
            },
            {
              d: targetSystem.paths[i],
              opacity: 0.8,
              stroke: targetSystem.color,
              duration: 1.5,
              ease: "power2.inOut",
            },
            0.3,
          )
        }
      }
    }

    // Update system label
    if (systemLabelRef.current) {
      tl.to(systemLabelRef.current, { opacity: 0, y: -10, duration: 0.3 }, 0)
      tl.to(systemLabelRef.current, { opacity: 1, y: 0, duration: 0.3 }, 1.5)
    }

    // Restart particle animations
    tl.call(
      () => {
        particleRefs.current.forEach((particle, index) => {
          if (particle && pathRefs.current[index] && targetSystem.paths[index]) {
            gsap.fromTo(
              particle,
              { opacity: 0 },
              {
                opacity: 1,
                duration: 0.5,
                motionPath: {
                  path: pathRefs.current[index],
                  alignOrigin: [0.5, 0.5],
                },
                ease: "none",
                repeat: -1,
                repeatDelay: 1,
              },
            )
          }
        })
      },
      [],
      1.8,
    )

    setActiveSystem(systemIndex)
  }

  const currentSystem = waterSystems[activeSystem]

  return (
    <div ref={morphRef} className="relative w-full bg-gray-50 rounded-xl px-6 py-12">
      <div className="text-center mb-6">
        <div ref={systemLabelRef}>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentSystem.name}</h3>
          <p className="text-gray-600">{currentSystem.description}</p>
        </div>
      </div>

      {/* System Type Selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {waterSystems.map((system, index) => (
          <button
            key={system.id}
            onClick={() => morphToSystem(index)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeSystem === index
                ? "text-white shadow-lg transform scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
            }`}
            style={{
              backgroundColor: activeSystem === index ? system.color : undefined,
            }}
          >
            {system.name}
          </button>
        ))}
      </div>

      {/* SVG Morphing Area */}
      <div className="relative h-80 bg-white rounded-lg shadow-inner overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320">
          {/* Background grid */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E7EB" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Morphing paths */}
          {Array.from({ length: Math.max(...waterSystems.map((s) => s.paths.length)) }).map((_, index) => (
            <g key={index}>
              <path
                ref={(el) => { pathRefs.current[index] = el }}
                d={currentSystem.paths[index] || currentSystem.paths[0]}
                stroke={currentSystem.color}
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={currentSystem.paths[index] ? 0.8 : 0}
                style={{
                  filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))",
                }}
              />
              {/* Moving particles */}
              <circle
                ref={(el) => { particleRefs.current[index] = el }}
                r="4"
                fill={currentSystem.color}
                opacity="0"
                style={{
                  filter: "drop-shadow(0 0 6px rgba(59, 130, 246, 0.6))",
                }}
              />
            </g>
          ))}

          {/* Connection points */}
          {currentSystem.connections.map((connection, index) => (
            <g key={`${currentSystem.id}-${index}`}>
              <circle
                cx={connection.x}
                cy={connection.y}
                r="8"
                fill={currentSystem.color}
                opacity="0.9"
                className="animate-pulse"
              />
              <circle
                cx={connection.x}
                cy={connection.y}
                r="12"
                fill="none"
                stroke={currentSystem.color}
                strokeWidth="2"
                opacity="0.5"
              />
              <text
                x={connection.x}
                y={connection.y - 20}
                textAnchor="middle"
                className="text-xs font-medium fill-gray-700"
              >
                {connection.label}
              </text>
            </g>
          ))}
        </svg>

        {/* System complexity indicator */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <div className="text-sm font-medium text-gray-700 mb-1">System Complexity</div>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((level) => (
              <div
                key={level}
                className={`w-3 h-3 rounded-full ${level <= currentSystem.paths.length ? "bg-current" : "bg-gray-200"}`}
                style={{ color: currentSystem.color }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Service Adaptation Info */}
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="flex items-center mb-2">
            <Microscope className="h-5 w-5 mr-2" style={{ color: currentSystem.color }} />
            <span className="font-medium text-gray-900">Testing Protocol</span>
          </div>
          <p className="text-sm text-gray-600">
            {activeSystem === 0 && "Basic residential testing with focus on drinking water quality"}
            {activeSystem === 1 && "Enhanced commercial testing including HVAC and cooling systems"}
            {activeSystem === 2 && "Comprehensive industrial testing with process water analysis"}
            {activeSystem === 3 && "Critical healthcare testing with sterile water requirements"}
          </p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="flex items-center mb-2">
            <Shield className="h-5 w-5 mr-2" style={{ color: currentSystem.color }} />
            <span className="font-medium text-gray-900">Risk Assessment</span>
          </div>
          <p className="text-sm text-gray-600">
            {activeSystem === 0 && "Standard residential risk evaluation and prevention"}
            {activeSystem === 1 && "Multi-zone commercial risk assessment and management"}
            {activeSystem === 2 && "Complex industrial risk analysis with process integration"}
            {activeSystem === 3 && "Critical healthcare risk management with patient safety focus"}
          </p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="flex items-center mb-2">
            <Beaker className="h-5 w-5 mr-2" style={{ color: currentSystem.color }} />
            <span className="font-medium text-gray-900">Control Measures</span>
          </div>
          <p className="text-sm text-gray-600">
            {activeSystem === 0 && "Simple control systems for home water safety"}
            {activeSystem === 1 && "Advanced commercial control with automated monitoring"}
            {activeSystem === 2 && "Industrial-grade control systems with process optimization"}
            {activeSystem === 3 && "Medical-grade control systems with redundant safety measures"}
          </p>
        </div>
      </div>
    </div>
  )
}