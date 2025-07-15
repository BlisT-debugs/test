'use client'

export default function ApplyForm() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#231f20]">Apply for a Role</h2>

      <form className="max-w-xl mx-auto text-left space-y-6">
        <input
          type="text"
          placeholder="Your Full Name"
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-base text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#007BB5]"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-base text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#007BB5]"
        />

        <input
          type="text"
          placeholder="Role You’re Applying For"
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-base text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#007BB5]"
        />

        <input
          type="file"
          className="text-sm text-gray-600"
        />

        <button
          type="submit"
          className="bg-[#007BB5] text-white px-6 py-3 rounded-md hover:bg-[#005f91] transition"
        >
          Submit Application
        </button>
      </form>
    </section>
  )
}
