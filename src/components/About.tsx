'use client'

import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">Personal Information</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-birthday-cake text-indigo-500 mt-1 mr-3"></i>
                <span><strong>Date of Birth:</strong> 7 April 1999</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-passport text-indigo-500 mt-1 mr-3"></i>
                <span><strong>Nationality:</strong> Nepali</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-home text-indigo-500 mt-1 mr-3"></i>
                <span><strong>Address:</strong> Kusma-12, Parbat, Nepal</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-indigo-500 mt-1 mr-3"></i>
                <span><strong>Email:</strong> ashishlamichhane890@gmail.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt text-indigo-500 mt-1 mr-3"></i>
                <span><strong>Phone:</strong> 9846881000, 9804152239</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">Education</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-medium">Bachelor in Electrical and Electronics Engineering</h4>
                <p className="text-gray-600">Pokhara University (2016-2022)</p>
              </li>
              <li>
                <h4 className="font-medium">10+2 HSEB</h4>
                <p className="text-gray-600">Kaski Modernized Academy (2016)</p>
              </li>
              <li>
                <h4 className="font-medium">S.L.C</h4>
                <p className="text-gray-600">Kaski Modernized Academy (2014)</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 