"use client";
import React, { useState, useEffect } from "react";
import {
  Search,
  Clock,
  DollarSign,
  Users,
  Award,
  Send,
} from "lucide-react";

const CareersPage = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    type: "",
    location: "",
    dept: "",
    time: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
    coverLetter: "",
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/jobs/", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const clearFilters = () => {
    setFilters({ type: "", location: "", dept: "", time: "" });
  };

  const handleInputChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) =>
        form.append(key, value)
      );

      const res = await fetch("http://localhost:8000/api/apply/", {
        method: "POST",
        body: form,
      });

      if (!res.ok) throw new Error("Submission failed");

      alert("Application submitted!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        resume: null,
        coverLetter: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    }
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (filters.type === "" || job.job_type === filters.type) &&
      (filters.location === "" || job.location === filters.location) &&
      (filters.dept === "" || job.department === filters.dept)
    );
  });

  const allTypes = [...new Set(jobs.map((j) => j.job_type))];
  const allLocations = [...new Set(jobs.map((j) => j.location))];
  const allDepts = [...new Set(jobs.map((j) => j.department))];

  const benefits = [
    {
      title: "Flexible Hours",
      description: "Work when you’re most productive.",
      icon: Clock,
    },
    {
      title: "Growth Opportunities",
      description: "We promote from within.",
      icon: Award,
    },
    {
      title: "Team Culture",
      description: "Collaborative and supportive environment.",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen pt-22 bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#077bb0] to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
            Build your career with the leading laundry service provider
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-delay-2">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm">Team Members</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">Locations</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-2xl font-bold">5★</div>
              <div className="text-sm">Workplace Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a company that values its employees and invests in their
              growth and success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-[#077bb0] to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Filter + List */}
      <section id="jobs" className="bg-[#f9f9f9] py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#231f20]">
          Job Openings
        </h2>

        <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          {/* Filters */}
          <div className="grid gap-4 md:grid-cols-5 mb-6">
            {/* Search */}
            <div className="relative col-span-2">
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search jobs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <select
              name="type"
              value={filters.type}
              onChange={handleFilterChange}
              className="border px-4 py-2 rounded-md bg-white"
            >
              <option value="">Workplace type</option>
              {allTypes.map((type, i) => (
                <option key={i} value={type}>{type}</option>
              ))}
            </select>

            <select
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              className="border px-4 py-2 rounded-md bg-white"
            >
              <option value="">Location</option>
              {allLocations.map((loc, i) => (
                <option key={i} value={loc}>{loc}</option>
              ))}
            </select>

            <select
              name="dept"
              value={filters.dept}
              onChange={handleFilterChange}
              className="border px-4 py-2 rounded-md bg-white"
            >
              <option value="">Department</option>
              {allDepts.map((dept, i) => (
                <option key={i} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          <div className="flex justify-end mb-4">
            <button onClick={clearFilters} className="text-sm text-gray-600 hover:underline">
              🔄 Clear filters
            </button>
          </div>

          {/* Jobs */}
          <div className="divide-y divide-gray-200">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="py-6 grid grid-cols-1 md:grid-cols-5 gap-4"
              >
                <div className="font-semibold text-[#007BB5]">{job.title}</div>
                <div>{job.job_type}</div>
                <div>{job.location}</div>
                <div>{job.department}</div>
                <div>{job.salary_range}</div>
              </div>
            ))}

            {filteredJobs.length === 0 && (
              <p className="text-center py-8 text-gray-500 text-lg">
                No matching jobs found.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Apply for a Position</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-xl border"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="border px-4 py-3 rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="border px-4 py-3 rounded-md"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="border px-4 py-3 rounded-md"
              />
              <select
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                required
                className="border px-4 py-3 rounded-md"
              >
                <option value="">Select a position</option>
                {jobs.map((job) => (
                  <option key={job.id} value={job.title}>{job.title}</option>
                ))}
              </select>
            </div>

            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleInputChange}
              required
              className="mt-6 border px-4 py-3 rounded-md w-full"
            />

            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              placeholder="Cover letter"
              rows={4}
              className="mt-6 border px-4 py-3 rounded-md w-full"
            />

            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#077bb0] to-blue-600 text-white py-3 px-6 rounded-md hover:scale-105 transition flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#077bb0] to-blue-600 py-20 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Don't see the perfect position? Send us your resume and we'll keep
          you in mind for future opportunities.
        </p>
        <button className="bg-white text-[#077bb0] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition hover:scale-105">
          Send General Application
        </button>
      </div>

      {/* Simple animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s forwards;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s forwards;
        }
      `}</style>
    </div>
  );
};

export default CareersPage;
