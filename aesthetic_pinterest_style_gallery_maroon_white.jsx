export default function AestheticGallery() {
  const cards = [
    {
      title: 'Minimal Workspace',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop',
      desc: 'Clean and calm workspace inspiration.'
    },
    {
      title: 'Soft Fashion',
      image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop',
      desc: 'Elegant maroon and neutral outfit aesthetics.'
    },
    {
      title: 'Cafe Mood',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop',
      desc: 'Warm coffee corners and cozy vibes.'
    },
    {
      title: 'Travel Journal',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
      desc: 'Dreamy travel and photography inspiration.'
    },
    {
      title: 'Study Aesthetic',
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop',
      desc: 'Productive study setup with soft tones.'
    },
    {
      title: 'Creative Desk',
      image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1200&auto=format&fit=crop',
      desc: 'Creative inspiration for students and artists.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#5b1020] font-sans">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#e6d7dc] px-6 py-4 flex items-center justify-between shadow-sm">
        <div>
          <h1 className="text-3xl font-bold tracking-wide">Aesthetica</h1>
          <p className="text-sm text-[#7a3948]">Pinterest-style inspiration board</p>
        </div>

        <div className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Search aesthetics..."
            className="px-4 py-2 rounded-full border border-[#d8b6bf] focus:outline-none focus:ring-2 focus:ring-[#7a1f35] w-64"
          />
          <button className="bg-[#7a1f35] text-white px-5 py-2 rounded-full hover:scale-105 transition-all shadow-md">
            Explore
          </button>
        </div>
      </header>

      <section className="text-center py-14 px-6 bg-gradient-to-b from-[#fff7f8] to-white">
        <h2 className="text-5xl font-bold mb-4">Discover Aesthetic Inspiration</h2>
        <p className="max-w-2xl mx-auto text-lg text-[#6b3a47]">
          A clean Pinterest-inspired gallery with a luxurious white and maroon aesthetic theme.
        </p>
      </section>

      <main className="columns-1 sm:columns-2 lg:columns-3 gap-6 px-6 pb-16 space-y-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="break-inside-avoid rounded-3xl overflow-hidden bg-white border border-[#ecd9df] shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
              <p className="text-[#6b3a47] mb-4">{card.desc}</p>

              <div className="flex justify-between items-center">
                <button className="bg-[#7a1f35] text-white px-4 py-2 rounded-full hover:bg-[#5b1020] transition-all">
                  Save
                </button>

                <button className="border border-[#7a1f35] text-[#7a1f35] px-4 py-2 rounded-full hover:bg-[#fff0f3] transition-all">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

      <footer className="border-t border-[#ead4da] py-6 text-center text-[#7a3948] bg-[#fff8f9]">
        <p>Designed with a minimal maroon & white aesthetic ✨</p>
      </footer>
    </div>
  );
}
