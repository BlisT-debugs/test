'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

type Job = {
  id: number;
  title: string;
  description: string;
  department: string;
  location: string;
  job_type: string;
  salary_range: string;
};

export default function JobList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    dept: '',
    time: '',
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/jobs/', {
          cache: 'no-store',
        });
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error('Failed to fetch jobs', err);
      }
    };

    fetchJobs();
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const clearFilters = () =>
    setFilters({ type: '', location: '', dept: '', time: '' });

  const filtered = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (filters.type === '' || job.job_type === filters.type) &&
      (filters.location === '' || job.location === filters.location) &&
      (filters.dept === '' || job.department === filters.dept)
    );
  });

  const allTypes = [...new Set(jobs.map((j) => j.job_type))];
  const allLocations = [...new Set(jobs.map((j) => j.location))];
  const allDepts = [...new Set(jobs.map((j) => j.department))];
  const allTimes: string[] = []; // remove or connect if your model has "time"

  return (
    <section id="jobs" className="bg-[#f9f9f9] py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#231f20]">Job Openings</h2>

      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        {/* Filters */}
        <div className="grid gap-4 md:grid-cols-5 mb-6">
          <div className="relative col-span-2">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#007BB5]"
            />
          </div>

          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="border px-4 py-2 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#007BB5]"
          >
            <option value="">Workplace type</option>
            {allTypes.map((type, i) => <option key={i} value={type}>{type}</option>)}
          </select>

          <select
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            className="border px-4 py-2 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#007BB5]"
          >
            <option value="">Location</option>
            {allLocations.map((loc, i) => <option key={i} value={loc}>{loc}</option>)}
          </select>

          <select
            name="dept"
            value={filters.dept}
            onChange={handleFilterChange}
            className="border px-4 py-2 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#007BB5]"
          >
            <option value="">Department</option>
            {allDepts.map((d, i) => <option key={i} value={d}>{d}</option>)}
          </select>

          <select
            name="time"
            value={filters.time}
            onChange={handleFilterChange}
            className="border px-4 py-2 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#007BB5]"
          >
            <option value="">Work type</option>
            {allTimes.map((t, i) => <option key={i} value={t}>{t}</option>)}
          </select>
        </div>

        <div className="flex justify-end mb-4">
          <button onClick={clearFilters} className="text-sm text-gray-600 hover:underline">
            🔄 Clear filters
          </button>
        </div>

        {/* Job list */}
        <div className="divide-y divide-gray-200">
          {filtered.map((job, idx) => (
            <div key={idx} className="py-6 grid grid-cols-1 md:grid-cols-5 gap-4 text-base md:text-lg">
              <div className="font-semibold text-[#007BB5] hover:underline cursor-pointer">{job.title}</div>
              <div className="text-gray-800">{job.job_type}</div>
              <div className="text-gray-800">{job.location}</div>
              <div className="text-gray-800">{job.department}</div>
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="text-center py-8 text-gray-500 text-lg">No matching jobs found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
