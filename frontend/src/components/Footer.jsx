import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h2 className="text-blue-600 font-bold text-3xl mb-4 tracking-tight">MORENT</h2>
            <p className="text-gray-400 text-sm font-medium leading-loose max-w-xs">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-bold text-xl mb-6">About</h3>
            <ul className="space-y-4 text-gray-400 font-medium text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">How it works</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Featured</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Partnership</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Business Relation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold text-xl mb-6">Community</h3>
            <ul className="space-y-4 text-gray-400 font-medium text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Podcast</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Invite a friend</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold text-xl mb-6">Socials</h3>
            <ul className="space-y-4 text-gray-400 font-medium text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-900 font-bold text-sm order-2 md:order-1">
            ©2022 MORENT. All rights reserved
          </p>
          <div className="flex gap-10 text-gray-900 font-bold text-sm order-1 md:order-2">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy & Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms & Condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
