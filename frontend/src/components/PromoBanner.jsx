import React from 'react'
import { Link } from 'react-router-dom'
import bookPic from "../assets/awardbooks.png"

const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold leading-snug'>2023 National Awards for Fiction Shortlists</h2>
                <Link to="/shop" className="mt-12 block"><button className="bg-blue-700 px-6 py-2 text-white rounded font-medium hover:bg-black transition-all ease-in duration-200">Get Promo Code</button></Link>
            </div>

            <div>
                <img src={bookPic} className='w-96'/>
            </div>
        </div>
    </div>
  )
}

export default PromoBanner