import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, DollarSign, Target, Search, Filter, GraduationCap, Briefcase, MapPin } from 'lucide-react';

const PlacementsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJobArea, setSelectedJobArea] = useState('All');
  const [selectedBatch, setSelectedBatch] = useState('All');
  const [selectedCompany, setSelectedCompany] = useState('All');

  // Job areas for filtering
  const jobAreas = [
    'All',
    'Banking & Finance',
    'Information Technology',
    'Marketing & Sales',
    'Consulting',
    'Telecommunications',
    'FMCG',
    'Education',
    'Healthcare',
    'Manufacturing',
  ];

  const batches = ['All', '2025', '2024', '2023', '2022'];
  
  const companies = [
    'All',
    'Nabil Bank',
    'NIC Asia',
    'Deloitte Nepal',
    'Unilever Nepal',
    'WorldLink Communications',
    'Ncell',
    'Sunrise Bank',
    'Himalayan Bank',
  ];

  // Student placements data with more details
  const studentPlacements = [
    {
      id: 1,
      name: 'Aarav Sharma',
      image: 'https://i.pravatar.cc/150?img=11',
      program: 'BBA',
      batch: '2025',
      company: 'Nabil Bank',
      position: 'Management Trainee',
      salary: 'NPR 8 Lakhs/year',
      jobArea: 'Banking & Finance',
      location: 'Kathmandu',
      achievement: 'Batch Topper, Student Council President',
      admissionSecured: null,
    },
    {
      id: 2,
      name: 'Priya Adhikari',
      image: 'https://i.pravatar.cc/150?img=47',
      program: 'B.Sc. CSIT',
      batch: '2025',
      company: 'Deloitte Nepal',
      position: 'Software Engineer',
      salary: 'NPR 12 Lakhs/year',
      jobArea: 'Information Technology',
      location: 'Kathmandu',
      achievement: 'Best Final Year Project, Hackathon Winner',
      admissionSecured: null,
    },
    {
      id: 3,
      name: 'Bikash Thapa',
      image: 'https://i.pravatar.cc/150?img=33',
      program: 'BCA',
      batch: '2024',
      company: 'WorldLink Communications',
      position: 'Junior Developer',
      salary: 'NPR 6 Lakhs/year',
      jobArea: 'Telecommunications',
      location: 'Lalitpur',
      achievement: 'Tech Club President, 3 Internships',
      admissionSecured: null,
    },
    {
      id: 4,
      name: 'Srijana KC',
      image: 'https://i.pravatar.cc/150?img=25',
      program: 'MBA',
      batch: '2025',
      company: 'Unilever Nepal',
      position: 'Marketing Executive',
      salary: 'NPR 10 Lakhs/year',
      jobArea: 'Marketing & Sales',
      location: 'Kathmandu',
      achievement: "Best Marketing Project, Dean's List",
      admissionSecured: null,
    },
    {
      id: 5,
      name: 'Rajesh Gurung',
      image: 'https://i.pravatar.cc/150?img=12',
      program: 'BBA',
      batch: '2024',
      company: 'NIC Asia Bank',
      position: 'Banking Officer',
      salary: 'NPR 7 Lakhs/year',
      jobArea: 'Banking & Finance',
      location: 'Pokhara',
      achievement: 'Finance Club Secretary',
      admissionSecured: null,
    },
    {
      id: 6,
      name: 'Anita Rai',
      image: 'https://i.pravatar.cc/150?img=28',
      program: 'B.Sc. CSIT',
      batch: '2024',
      company: 'Ncell',
      position: 'Network Engineer',
      salary: 'NPR 9 Lakhs/year',
      jobArea: 'Telecommunications',
      location: 'Kathmandu',
      achievement: 'Research Paper Published',
      admissionSecured: null,
    },
    {
      id: 7,
      name: 'Suresh Maharjan',
      image: 'https://i.pravatar.cc/150?img=15',
      program: 'MBA',
      batch: '2023',
      company: null,
      position: null,
      salary: null,
      jobArea: 'Education',
      location: 'Melbourne',
      achievement: 'Gold Medalist',
      admissionSecured: 'University of Melbourne - MBA',
    },
    {
      id: 8,
      name: 'Kabita Shrestha',
      image: 'https://i.pravatar.cc/150?img=45',
      program: 'BBA',
      batch: '2023',
      company: null,
      position: null,
      salary: null,
      jobArea: 'Banking & Finance',
      location: 'Toronto',
      achievement: 'Outstanding Academic Performance',
      admissionSecured: 'University of Toronto - MSc Finance',
    },
  ];

  // Filter students based on search and filters
  const filteredStudents = studentPlacements.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (student.company && student.company.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (student.admissionSecured && student.admissionSecured.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesJobArea = selectedJobArea === 'All' || student.jobArea === selectedJobArea;
    const matchesBatch = selectedBatch === 'All' || student.batch === selectedBatch;
    const matchesCompany = selectedCompany === 'All' || student.company === selectedCompany;

    return matchesSearch && matchesJobArea && matchesBatch && matchesCompany;
  });

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-[#252872] mb-2">Placement Overview</h2>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            label: 'Placement Rate',
            value: '92%',
            color: 'text-green-600 bg-green-50',
          },
          {
            label: 'Avg. Package',
            value: 'NPR 6L',
            color: 'text-blue-600 bg-blue-50',
          },
          {
            label: 'Highest Package',
            value: 'NPR 18L',
            color: 'text-purple-600 bg-purple-50',
          },
          {
            label: 'Recruiting Companies',
            value: '50+',
            color: 'text-amber-600 bg-amber-50',
          },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
          >
            <div className="text-3xl font-bold text-[#252872] mb-1">{stat.value}</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-[#252872]" />
          <h3 className="text-lg font-bold text-[#252872]">Search & Filter Placements</h3>
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, program, company, or university..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#252872] focus:border-transparent"
            />
          </div>
        </div>

        {/* Filter Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Job Area Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Job Area
            </label>
            <select
              value={selectedJobArea}
              onChange={(e) => setSelectedJobArea(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#252872] focus:border-transparent"
            >
              {jobAreas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          {/* Batch Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Batch Year
            </label>
            <select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#252872] focus:border-transparent"
            >
              {batches.map((batch) => (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              ))}
            </select>
          </div>

          {/* Company Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Company
            </label>
            <select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#252872] focus:border-transparent"
            >
              {companies.map((company) => (
                <option key={company} value={company}>
                  {company}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters Display */}
        {(selectedJobArea !== 'All' || selectedBatch !== 'All' || selectedCompany !== 'All' || searchTerm) && (
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-sm text-gray-600">Active filters:</span>
            {selectedJobArea !== 'All' && (
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                {selectedJobArea}
              </span>
            )}
            {selectedBatch !== 'All' && (
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                Batch {selectedBatch}
              </span>
            )}
            {selectedCompany !== 'All' && (
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                {selectedCompany}
              </span>
            )}
            {searchTerm && (
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                "{searchTerm}"
              </span>
            )}
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedJobArea('All');
                setSelectedBatch('All');
                setSelectedCompany('All');
              }}
              className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium hover:bg-red-200 transition-colors"
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* Student Placements */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-[#252872]">
            Student Profiles ({filteredStudents.length})
          </h3>
        </div>

        {filteredStudents.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
            <p className="text-gray-500">No students found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredStudents.map((student, i) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                {/* Student Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-100 shadow-sm">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#252872] text-lg mb-1">
                      {student.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>{student.program} - {student.batch} Batch</span>
                    </div>
                  </div>
                </div>

                {/* Placement Details */}
                <div className="space-y-3">
                  {/* Job Area Badge */}
                  <div>
                    <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold">
                      {student.jobArea}
                    </span>
                  </div>

                  {/* Company/Organization OR Admission Secured */}
                  {student.company ? (
                    <>
                      <div className="flex items-start gap-2">
                        <Building className="w-4 h-4 text-[#d91f22] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {student.company}
                          </p>
                          <p className="text-xs text-gray-500">{student.position}</p>
                        </div>
                      </div>

                      {/* Salary */}
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm font-bold text-green-600">
                          {student.salary}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">Secured Admission</p>
                        <p className="text-sm font-semibold text-purple-700">
                          {student.admissionSecured}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Location */}
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="text-xs text-gray-600">{student.location}</span>
                  </div>

                  {/* Achievement */}
                  <div className="flex items-start gap-2 pt-2 border-t border-gray-100">
                    <Target className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-gray-600">{student.achievement}</p>
                  </div>
                </div>

                {/* View Profile Button */}
                <button className="w-full mt-4 px-4 py-2 bg-[#252872] text-white rounded-xl hover:bg-[#1a1d4f] transition-colors text-sm font-semibold">
                  View Full Profile
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Top Recruiters */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h3 className="font-bold text-[#252872] mb-4">Top Recruiters</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            'Nabil Bank',
            'NIC Asia',
            'Deloitte Nepal',
            'Unilever',
            'Ncell',
            'WorldLink',
          ].map((company, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="w-10 h-10 bg-white rounded-lg mx-auto mb-2 flex items-center justify-center text-lg shadow-sm">
                🏢
              </div>
              <p className="text-xs font-medium text-gray-600">{company}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementsSection;