import React from 'react'
import verdura from '/assets/verdura.png'

const Header = () => {
  return (

    <header className='top-0 left-0 z-50 fixed border-gray-600 bg-gray-950 shadow-md px-4 sm:px-10 py-4 border-solid w-full font-[sans-serif] tracking-wide'>
      <div className='flex flex-wrap justify-between items-center gap-5 w-full'>
        <a href='#'>
          <img src={verdura} alt='logo' className='w-50 h-12'  />
        </a>
        
        <div className='flex space-x-4 max-lg:ml-auto'>
          <button
            onClick={() => window.open('https://verdura-app.streamlit.app/')}
            className='border-[#007bff] border-2 bg-[#007bff] hover:bg-transparent px-4 py-2 rounded-tr-lg rounded-bl-lg font-bold text-sm text-white hover:text-[#007bff] transition-all duration-300 ease-in-out'
          >
            Get started
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
