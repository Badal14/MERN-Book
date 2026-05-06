import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineTicket, HiCheck } from 'react-icons/hi';
import bookPic from "../assets/awardbooks.png";

const PromoBanner = () => {
  const [copied, setCopied] = useState(false);
  const promoCode = "READMORE20";

  const handleCopy = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='my-24 py-16 px-4 lg:px-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden shadow-2xl'>
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400 opacity-20 rounded-full blur-2xl"></div>

      <div className='relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 max-w-7xl mx-auto'>
        
        <div className='md:w-1/2 text-white'>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-bold uppercase tracking-widest mb-6">
            <HiOutlineTicket className="w-5 h-5 text-yellow-300" />
            Limited Time Offer
          </div>
          
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6'>
            Get 20% Off Your Next Purchase!
          </h2>
          
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-light">
            Discover award-winning fiction, gripping biographies, and insightful educational books. Use our exclusive promo code below at checkout.
          </p>

          {/* Promo Code Box */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative flex items-center bg-white rounded-2xl p-1.5 shadow-2xl">
                <div className="px-6 py-4 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 flex items-center justify-center">
                  <span className="font-mono text-2xl md:text-3xl font-black text-gray-800 tracking-widest">{promoCode}</span>
                </div>
                <button 
                  onClick={handleCopy}
                  className={`ml-3 px-6 py-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 min-w-[140px] shadow-lg ${copied ? 'bg-green-500 hover:bg-green-600 shadow-green-500/40' : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-purple-500/40'}`}
                >
                  {copied ? (
                    <>
                      <HiCheck className="w-6 h-6" />
                      Copied!
                    </>
                  ) : (
                    'Copy Code'
                  )}
                </button>
              </div>
            </div>
            
            <Link to="/shop" className="mt-4 sm:mt-0 text-white font-bold text-lg underline decoration-2 underline-offset-8 decoration-yellow-400 hover:text-yellow-300 transition-colors">
              Shop Now →
            </Link>
          </div>
        </div>

        <div className='md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0'>
          <img 
            src={bookPic} 
            alt="Award Winning Books" 
            className='w-80 md:w-96 lg:w-[32rem] object-contain drop-shadow-2xl transform hover:scale-105 hover:-rotate-2 transition duration-500'
          />
        </div>
        
      </div>
    </div>
  )
}

export default PromoBanner;