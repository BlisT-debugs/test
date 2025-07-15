'use client'

export default function Hero() {
  return (
    <section className="bg-white text-center py-20">
      <img src="/logo.png" alt="Dhobi G Logo" className="w-20 mx-auto mb-6" />

      <h1 className="text-4xl md:text-5xl font-extrabold text-[#231f20] mb-4">
        Careers at Dhobi G
      </h1>

      <p className="text-lg text-[#444] mb-6">
        Join India’s fastest-growing smart laundry service.
      </p>

      <a
        href="#jobs"
        className="inline-block bg-[#007BB5] text-white font-medium px-6 py-3 rounded hover:bg-[#0091d1] transition"
      >
        View Openings
      </a>
    </section>
  )
}
