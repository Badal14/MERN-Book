import React from "react";
import { HiUser, HiMail, HiOutlineLibrary, HiOutlineLightBulb, HiOutlineUserGroup } from "react-icons/hi";

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/C:/Users/badal/.gemini/antigravity/brain/5528844e-f699-4548-b18d-a3ee7b49b7ce/bookstore_about_hero_1778062204619.png" 
            alt="About Hero" 
            className="w-full h-full object-cover opacity-60 dark:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Our Story, <span className="text-blue-600 dark:text-blue-400">Your Journey</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed">
            We are more than just a bookstore. We are a sanctuary for thinkers, dreamers, and seekers of knowledge.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-blue-600 pl-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Founded in 2024, our platform was born from a simple belief: that everyone should have access to life-changing literature. We've curated a collection that spans continents and centuries, ensuring that every reader finds their voice within our digital shelves.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="flex flex-col items-center p-6 bg-blue-50 dark:bg-gray-800 rounded-2xl text-center">
                <HiOutlineLibrary className="w-10 h-10 text-blue-600 mb-3" />
                <span className="font-bold text-gray-900 dark:text-white">10k+ Books</span>
              </div>
              <div className="flex flex-col items-center p-6 bg-green-50 dark:bg-gray-800 rounded-2xl text-center">
                <HiOutlineUserGroup className="w-10 h-10 text-green-600 mb-3" />
                <span className="font-bold text-gray-900 dark:text-white">5k+ Readers</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-10 rounded-3xl relative overflow-hidden group">
            <HiOutlineLightBulb className="absolute -top-10 -right-10 w-40 h-40 text-blue-100 dark:text-gray-700 transform group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg italic">
              "To become the world's most accessible gateway to human wisdom, bridging the gap between traditional publishing and the digital age."
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet the Visionaries</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "John Doe", role: "CEO & Founder", color: "blue" },
              { name: "Jane Smith", role: "Lead Developer", color: "green" },
              { name: "Mark Johnson", role: "Creative Director", color: "yellow" }
            ].map((member, idx) => (
              <div key={idx} className="group relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className={`w-20 h-20 bg-${member.color}-100 dark:bg-${member.color}-900/30 rounded-2xl flex items-center justify-center mb-6`}>
                  <HiUser className={`w-10 h-10 text-${member.color}-600 dark:text-${member.color}-400`} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Dedicated to revolutionizing how we interact with stories.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact & CTA Section */}
        <section className="bg-gray-900 dark:bg-blue-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start your next chapter?</h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
                Join our community of thousands of readers and discover why we're the fastest growing bookstore platform in the world.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/sign-up" className="px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl hover:bg-blue-50 transition-colors shadow-lg">
                  Join for Free
                </a>
                <a href="mailto:support@bookstore.com" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors flex items-center gap-2">
                  <HiMail className="w-5 h-5" />
                  Contact Support
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white/10 rounded-3xl backdrop-blur-sm p-4 flex flex-col justify-center items-center text-white text-center">
                <span className="text-3xl font-black mb-1">24/7</span>
                <span className="text-xs uppercase tracking-widest opacity-70">Support</span>
              </div>
              <div className="aspect-square bg-blue-500/20 rounded-3xl backdrop-blur-sm p-4 flex flex-col justify-center items-center text-white text-center">
                <span className="text-3xl font-black mb-1">Safe</span>
                <span className="text-xs uppercase tracking-widest opacity-70">Checkout</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
