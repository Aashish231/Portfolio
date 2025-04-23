'use client'

import React from 'react'

export default function Achievements() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Achievements</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Item 1 */}
            <div className="timeline-item mb-8 pl-12 relative">
              <div className="absolute left-0 top-0 bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                <i className="fas fa-trophy"></i>
              </div>
              <h3 className="text-xl font-semibold">Winner - Pokhara Idea Mart 2023</h3>
              <p className="text-indigo-600 mb-2">Business Promotion Center, Pokhara</p>
              <p className="text-gray-600">Won the competition with an innovative idea.</p>
            </div>
            
            {/* Timeline Item 2 */}
            <div className="timeline-item mb-8 pl-12 relative">
              <div className="absolute left-0 top-0 bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                <i className="fas fa-medal"></i>
              </div>
              <h3 className="text-xl font-semibold">Semi Finalist - Dopper Change Maker Challenge</h3>
              <p className="text-indigo-600 mb-2">Himalayan Climate Initiative (2019)</p>
              <p className="text-gray-600">Co-researched on "Bio-Plastic" project.</p>
            </div>
            
            {/* Timeline Item 3 */}
            <div className="timeline-item mb-8 pl-12 relative">
              <div className="absolute left-0 top-0 bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                <i className="fas fa-robot"></i>
              </div>
              <h3 className="text-xl font-semibold">Participant - Yantra Robotics Competitions</h3>
              <p className="text-indigo-600 mb-2">Robotics Association of Nepal (2015-2016)</p>
              <p className="text-gray-600">Participated in multiple national and international robotics competitions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 