export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white px-6 py-20">

      {/* ===== Hero Section ===== */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold">
          Our Language Solutions
        </h1>
        <p className="mt-6 text-blue-200 text-lg">
          Project Teja delivers professional translation, transcription,
          and voice solutions focused on Indian languages with accuracy,
          speed, and cultural understanding.
        </p>
      </div>

      {/* ===== Services Section ===== */}
      <div className="mt-20 grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">

        {/* Translation */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            🌐 Translation Services
          </h2>
          <p className="text-blue-100">
            Accurate and context-aware translation across major Indian
            languages. Ideal for business documents, websites, media
            content, and multilingual communication needs.
          </p>
        </div>

        {/* Transcription */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            🎙️ Transcription Services
          </h2>
          <p className="text-blue-100">
            Convert audio and video content into clean, structured,
            and high-quality text across multiple regional languages.
            Suitable for interviews, meetings, podcasts, and media.
          </p>
        </div>

        {/* Dubbing */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            🎧 Dubbing & Voiceover
          </h2>
          <p className="text-blue-100">
            Professional voiceover and dubbing services tailored for
            regional audiences. Perfect for films, advertisements,
            educational content, and digital platforms.
          </p>
        </div>

      </div>

      {/* ===== Why Choose Teja ===== */}
      <div className="mt-28 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Why Choose Project Teja?
        </h2>

        <div className="grid gap-6 md:grid-cols-2 text-blue-200">
          <p>✔ Focused expertise in Indian languages</p>
          <p>✔ High accuracy with contextual understanding</p>
          <p>✔ Fast turnaround time</p>
          <p>✔ Secure and confidential data handling</p>
        </div>
      </div>

      {/* ===== Call To Action ===== */}
      <div className="mt-24 text-center">
        <h3 className="text-2xl font-semibold">
          Need Language Support?
        </h3>
        <p className="text-blue-200 mt-3">
          Contact our team to discuss your requirements and get started.
        </p>

        <a
          href="/contact"
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-medium transition"
        >
          Contact Us
        </a>
      </div>

    </div>
  );
}
