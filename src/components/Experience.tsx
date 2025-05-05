'use client'

import React from 'react'

export default function Experience() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md card-hover transition">
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <i className="fas fa-laptop-code text-indigo-600"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Co-Founder and CTO </h3>
                <p className="text-indigo-600 mb-2">Tulsi Foods and Beverage Pvt. Ltd. (Present) </p>
                
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md card-hover transition">
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <i className="fas fa-laptop-code text-indigo-600"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Electronic Engineer</h3>
                <p className="text-indigo-600 mb-2">Yarsa Tech Pvt. Ltd. (July 2023 - Present)</p>
                <p className="text-gray-600">Working on electronic engineering projects and solutions.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md card-hover transition">
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <i className="fas fa-chalkboard-teacher text-indigo-600"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Basic Electronic Instructor</h3>
                <p className="text-indigo-600 mb-2">SOS Vocational Training Center (May 2023 - Present)</p>
                <p className="text-gray-600">Teaching basic electronics to students.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md card-hover transition">
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <i className="fas fa-desktop text-indigo-600"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Computer Teacher</h3>
                <p className="text-indigo-600 mb-2">New Model Secondary School (Dec 2021 - Apr 2022)</p>
                <p className="text-gray-600">Taught basic level computer courses to students.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 