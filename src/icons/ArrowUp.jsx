import React from 'react'

const ArrowUp = ({ size = 16, color = '#fff' }) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
   >
      <path d="M18 15l-6-6-6 6" />
   </svg>
)

export default ArrowUp
