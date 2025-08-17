interface GardenLogoProps {
  className?: string;
}

export function GardenLogo({ className = "w-6 h-6" }: GardenLogoProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main leaf shape */}
      <path 
        d="M12 4 C16 4, 20 8, 20 12 C20 16, 16 20, 12 20 C8 16, 8 8, 12 4 Z" 
        fill="#10b981"
        stroke="#065f46" 
        strokeWidth="1"
      />
      
      {/* Leaf gradient overlay for depth */}
      <path 
        d="M12 4 C15 5, 18 8, 18 12 C18 15, 15 18, 12 20 C10 16, 10 8, 12 4 Z" 
        fill="#34d399"
        opacity="0.7"
      />
      
      {/* Central vein */}
      <path 
        d="M12 4 L12 20" 
        stroke="#065f46" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      
      {/* Side veins */}
      <path 
        d="M12 8 Q15 9, 16 11" 
        stroke="#065f46" 
        strokeWidth="0.8" 
        strokeLinecap="round"
        opacity="0.6"
      />
      <path 
        d="M12 10 Q15 11, 17 13" 
        stroke="#065f46" 
        strokeWidth="0.8" 
        strokeLinecap="round"
        opacity="0.6"
      />
      <path 
        d="M12 13 Q15 14, 16.5 16" 
        stroke="#065f46" 
        strokeWidth="0.8" 
        strokeLinecap="round"
        opacity="0.6"
      />
      
      {/* Left side veins */}
      <path 
        d="M12 8 Q9 9, 8 11" 
        stroke="#065f46" 
        strokeWidth="0.8" 
        strokeLinecap="round"
        opacity="0.6"
      />
      <path 
        d="M12 10 Q9 11, 7 13" 
        stroke="#065f46" 
        strokeWidth="0.8" 
        strokeLinecap="round"
        opacity="0.6"
      />
      <path 
        d="M12 13 Q9 14, 7.5 16" 
        stroke="#065f46" 
        strokeWidth="0.8" 
        strokeLinecap="round"
        opacity="0.6"
      />
      
      {/* Highlight on left edge for 3D effect */}
      <path 
        d="M12 4 C10 6, 9 9, 9 12 C9 15, 10 18, 12 20 C11 18, 10 15, 10 12 C10 9, 11 6, 12 4 Z" 
        fill="#6ee7b7"
        opacity="0.4"
      />
    </svg>
  );
}