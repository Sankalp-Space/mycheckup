import React from 'react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-visible">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-6 py-12 max-w-2xl">
        
        {/* Video container with enhanced styling */}
        <div className='flex justify-center w-full mb-6'>
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur-lg opacity-75 animate-pulse"></div>
            <video 
              src="./coming.mp4" 
              className='relative w-full h-72 object-cover rounded-2xl shadow-2xl border border-white border-opacity-10 backdrop-blur'
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>

        {/* Text content */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold leading-relaxed bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent animate-pulse">
            Coming Soon
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            Something amazing is brewing. We're working hard to bring you an extraordinary experience.
          </p>
          
          {/* Animated dots */}
          <div className="flex justify-center gap-2 pt-4">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-8 text-center">
          <p className="text-sm md:text-base text-gray-400 mb-4">Stay tuned for updates</p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
