// import sustain1 from '/assets/sustain1.mp4'
import genai from '/assets/genai.png';
import '../App.css';
import bgImage from '/assets/classes-bg.png';

const Content = () => {
  const styles = {
    backgroundImage: `url(${bgImage})`
  }
  return (
    <section className='flex justify-center items-center w-full h-auto' style={styles}>
      <div className='relative my-6 w-[60vw] h-auto'>
        <h4 class='mx-auto my-[3vw] max-w-[900px] font-body font-semibold text-center text-green-300 text-primary-600 xl:text-[66px] leading-none'>
          Revolutionize Waste Disposal with AI
        </h4>
        <p className='my-4 text-2xl text-black text-center break-normal'>
          Verdura leverages the power of Google’s Gemini AI to transform how you
          handle waste. By simply uploading an image, our intelligent system
          identifies the type of waste, assesses its environmental impact, and
          offers actionable tips for sustainable disposal. Together, we can make
          recycling smarter, reduce pollution, and move toward a circular
          economy where waste becomes a resource.
        </p>
        <div class='gen-im'>
          <img
            src={genai}
            className='justify-center items-center mx-auto rounded-[2em] w-[21vw] h-[21vw] img-btn'
          />
        </div>
        {/* <video
          autoPlay
          loop
          muted
          className='border rounded-[10em] w-[60vw] h-[40vw] object-fill'
        >
          <source src={sustain1} type='video/mp4' />
        </video> */}
        <p className='my-14 text-2xl text-black text-center break-normal'>
          Ready to make a difference? Take the first step toward a cleaner,
          greener future with EcoLens. Let’s reduce waste, promote recycling,
          and protect our planet.
        </p>
      </div>
    </section>
  )
}

export default Content
