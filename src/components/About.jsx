import React from 'react'

const About = () => {
  return (
    <section className='flex justify-center items-center border-t-[0.01em] w-full h-auto'>
      <div className='mt-10px w-[60vw] h-auto'>
        <h4 className='mx-auto my-[3vw] max-w-[900px] font-body font-semibold text-center text-green-300 text-primary-600 xl:text-[66px] leading-none'>
          About Verdura
        </h4>
        <p className='text-2xl text-black text-left break-normal'>
        Verdura uses Google's Gemini AI to analyze uploaded images, classify them, and offer insights on recyclability, environmental impacts, 
        and suggestions for proper waste management. By leveraging AI’s image recognition capabilities, the app provides users with immediate 
        feedback on the type of waste in the image and how it should be processed. This approach aims to increase recycling rates, reduce environmental 
        pollution, and contribute to a circular economy model where waste and economic growth can be decoupled.
        
        The application includes a simple interface where users can upload images of waste items, and based on the AI analysis, they receive detailed feedback. 
        This feedback not only classifies waste but also suggests sustainable waste disposal methods, providing educational value and practical tips.
        </p>
      </div>
    </section>
  )
}

export default About
