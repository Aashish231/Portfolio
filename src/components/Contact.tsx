'use client'

import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-indigo-500 mt-1 mr-3"></i>
                <span>Kushma-12, Parbat, Nepal</span>
              </li>
              
              <li className="flex items-start">
                <i className="fas fa-envelope text-indigo-500 mt-1 mr-3"></i>
                <span>ashishlamichhane890@gmail.com</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/ashish-lamichhane/" className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:bg-indigo-200 transition">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.facebook.com/ashish.lamichhane.90/" className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:bg-indigo-200 transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://x.com/AshishLami890" className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:bg-indigo-200 transition">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/Aashish231" className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:bg-indigo-200 transition">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
              </div>
              <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 