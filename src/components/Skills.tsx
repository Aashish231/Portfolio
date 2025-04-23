'use client'

import React from 'react'

export default function Skills() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">Technical Skills</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>MATLAB</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Microsoft Office</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Adobe Photoshop</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Arduino UNO</span>
                  <span>88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">Languages</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>English</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Nepali</span>
                  <span>100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Hindi</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mt-8 mb-4 text-indigo-600">Leadership</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-check text-indigo-500 mt-1 mr-2"></i>
                <span>President - Robotics Club Pokhara University (2019-2020)</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-indigo-500 mt-1 mr-2"></i>
                <span>Campus Director - Hult Prize Pokhara University (2020-2021)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 