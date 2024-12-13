import React, { useEffect } from 'react'
import greenery from '/assets/greenery.mp4'

const Heading = () => {

  return (
    <section className='w-full'>
      <div className='relative flex flex-col justify-center items-center w-full h-[40vw]'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='absolute w-full h-[40vw] object-cover'
        >
          <source src={greenery} type='video/mp4' />
        </video>
        <h1 className='relative max-w-[80vw] font-bold font-heading text-[4vw] text-blue-100 text-center break-normal'>
          Harness the power of{' '}
          <span className='font-bold text-yellow-200'>Verdura</span> to
          revolutionize waste management
        </h1>
        <button
          onClick={() => window.open('https://verdura-app.streamlit.app/')}
          // onClick={pythonCode}
          className='relative border-[#007bff] border-2 bg-[#007bff] hover:bg-transparent px-8 py-4 rounded-lg font-bold text-3xl text-white hover:text-[#007bff] transition-all duration-300 ease-in-out'
        >
          Get started
        </button>
      </div>
    </section>
  )
}

export default Heading

// import React from 'react';
// import greenery from '/assets/greenery.mp4';

// const Heading = () => {
//   return (
//     <section className="w-full">
//       <div className="relative flex flex-col justify-center items-center w-full h-[40vw]">
//         {/* Background video */}
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute w-full h-full object-cover"
//         >
//           <source src={greenery} type="video/mp4" />
//         </video>

//         {/* Overlay text */}
//         <h1 className="relative z-10 max-w-[80vw] font-bold font-heading text-[4vw] text-blue-100 text-center">
//           Harness the power of{' '}
//           <span className="font-bold text-yellow-200">Verdura</span> to
//           revolutionize waste management
//         </h1>

//         {/* Button placed below */}
//         <button
//           onClick={() => window.open('https://ecolens-olm.streamlit.app/')}
//           className="relative z-10 border-[#007bff] border-2 bg-[#007bff] hover:bg-transparent mt-8 px-6 py-3 rounded-tr-lg rounded-bl-lg font-bold text-white hover:text-[#007bff] transition-all duration-300 ease-in-out"
//         >
//           Get started
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Heading;
