import sustain1 from '/assets/sustain1.mp4'
import bgImage from '/assets/classes-bg.png'
const Display = () => {
  const styles = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // backgroundColor: 'transparent'
  }
  return (
    <section
      className='flex justify-center items-center border-b-[0.01vw] w-full h-full'
      style={styles}
    >
      <div className='my-20 w-[60vw] h-[40vw]'>
        <h2 className='mx-auto max-w-[900px] font-body font-semibld text-center text-green-300 text-primary-600 xl:text-[66px] leading-none'>
          GreenAir accelerates decarbonization
        </h2>
        {/* <img
          src={genai}
          className='justify-center items-center'
        /> */}
        <video
          autoPlay
          loop
          muted
          className='justify-center items-center mx-auto my-10 border rounded-[1em] w-[60vw] h-[30vw] object-cover'
        >
          <source src={sustain1} type='video/mp4' />
        </video>
      </div>
    </section>
  )
}

export default Display
