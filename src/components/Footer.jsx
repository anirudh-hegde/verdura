import React from 'react'
import verdura from '/assets/verdura.png'

const Footer = () => {
  return (
    <section className='bg-black w-full'>
      <footer className='justify-center items-center bg-black p-14 md:p-1 lg:p-1 pt-[2vw] border-t-[0.01em]'>
        <div className='justify-center items-center mx-auto p-20 max-w-screen-xl text-center'>
          <a className='flex justify-center items-center' href='#'>
            <img src={verdura} alt='logo' className='w-50 h-12' />
          </a>
          <p className='my-6 text-1xl text-white-500'>
            AI-Powered Image Recognition for Waste Classification
          </p>
          <span className='text-sm text-white sm:text-center'>
            © 2024-2025{' '}
            <a href='#' className='hover:underline'>
              Verdura
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </section>
  )
}

export default Footer
