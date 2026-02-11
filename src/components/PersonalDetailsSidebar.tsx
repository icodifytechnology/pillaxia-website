'use client'

import { User, GraduationCap, MapPin, Calendar } from 'lucide-react'
export function PersonalDetailsSidebar() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-[#252872] px-6 py-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl" />
        <h3 className="text-white font-bold text-lg relative z-10">
          Personal Details
        </h3>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
          <div className="w-14 h-14 bg-gradient-to-br from-[#252872] to-[#3a3d9e] rounded-full flex items-center justify-center text-white shadow-md">
            <User className="w-7 h-7" />
          </div>
          <div>
            <p className="font-bold text-[#252872] text-lg">Suzan Thapa</p>
            <p className="text-xs text-gray-400">Member since 2024</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Calendar className="w-4 h-4 text-[#d91f22] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">
                Age
              </p>
              <p className="text-sm font-semibold text-[#252872]">30</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <GraduationCap className="w-4 h-4 text-[#d91f22] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">
                Education
              </p>
              <p className="text-sm font-semibold text-[#252872]">
                Engineering, Masters
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#d91f22] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">
                Address
              </p>
              <p className="text-sm font-semibold text-[#252872]">
                Kathmandu, Kathmandu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
