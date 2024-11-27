
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x:200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x:0 }}
      viewport={{ once: true }}
    className='flex flex-col items-center justify-center container mx-auto
    p-14  md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='
      underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate about properties; dedicated to you vision</p>
    <div className='flex flex-col md:flex-row items-center
     md:items-start md:gap-20'>
<img src={assets.brand_img} className='w-full md:w-1/2 max-w-lg' alt="" />
   <div className='flex flex-col items-center md:items-start mt-10 text-grey-600'>
    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full zxl:pr-28'>
   <div>
    <p className='text-4xl font-medium text-gray-800'>10+</p>
    <p> Years of experiance </p>
   </div>
   <div>
    <p className='text-4xl font-medium text-gray-800'>10+</p>
    <p> ptojecy completed </p>
   </div>
   <div>
    <p className='text-4xl font-medium text-gray-800'>10+</p>
    <p> ongoing projets  </p>
   </div>
   <div>
    <p className='text-4xl font-medium text-gray-800'>10+</p>
    <p> projet delivered </p>
   </div>
    </div>
    <p className='my-10 max-w-lg'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, 
      vero enim reiciendis id maxime, non quas beatae omnis suscipit 
      deleniti similique doloremque tenetur.
       Incidunt molestiae quidem adipisci fugiat, alias facere?
    </p>
    <button className='bg-blue-500 px-8 py-3 rounded'>Learn more </button>
   </div>
   </div>
    </motion.div>
  )
}

export default About
