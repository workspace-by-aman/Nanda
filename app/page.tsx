import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full bg-white text-gray-800">
      {/* ================= HEADER ================= */}
      <header className="w-full border-b sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Image src="/logo.png" alt="Nanda Logo" width={50} height={50} />

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="font-bold">Home</a>
            <a href="#about" className="font-bold">About Us</a>
            <a href="#stores" className="font-bold">Our Stores</a>
            <a href="#products" className="font-bold">Products</a>
          </nav>

          <button className="bg-green-800 text-white px-5 py-2 rounded-full text-sm">
            Call Us
          </button>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative h-[500px] flex items-center justify-center text-center">
        <Image src="/banner.jpg" alt="Banner" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-white/70" />

        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-3">Fresh & Organic</h1>
          <p className="mb-6 text-lg">Farm to Table Excellence</p>
          <a href="#stores" className="bg-green-800 text-white px-6 py-3 rounded">
            Find A Store
          </a>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center" id="about">
        <h2 className="text-3xl font-bold mb-4">About Nanda</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12" >
          We’re committed to bringing you the freshest fruits & groceries
          from local farms to your table.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative h-48 rounded overflow-hidden">
              <Image src="/banner.jpg" alt="Feature" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= VISIT OUR STORES ================= */}
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-3xl font-bold mb-2" id="stores">Visit Our Stores</h2>
        <p className="text-gray-600 mb-10">
          Find a Nanda – Fruiterers & Grocers near you.
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative h-48 border rounded">
              <Image src="/banner.jpg" alt="Store" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-2" id="products">Featured Products</h2>
        <p className="text-gray-600 mb-10">
          Explore our wide range of fresh fruits and organic groceries
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="relative h-40 border rounded">
              <Image src="/banner.jpg" alt="Product" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= GET IN TOUCH ================= */}
      {/* ================= GET IN TOUCH ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Have questions? We’d love to hear from you. Give us a call!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
            {/* Visit Us */}
            <div className="flex gap-3">
              <span className="text-red-500 text-lg">📍</span>
              <div>
                <h4 className="font-semibold mb-1">Visit Us</h4>
                <p>Shop No. 45, City Centre</p>
                <p>Ludhiana, Punjab</p>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex gap-3">
              <span className="text-green-600 text-lg">📞</span>
              <div>
                <h4 className="font-semibold mb-1">Call Us</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex gap-3">
              <span className="text-yellow-500 text-lg">✉️</span>
              <div>
                <h4 className="font-semibold mb-1">Email Us</h4>
                <p>support@nanda.com</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex gap-3">
              <span className="text-blue-500 text-lg">⏰</span>
              <div>
                <h4 className="font-semibold mb-1">Business Hours</h4>
                <p>Mon – Sun</p>
                <p>8:00 AM – 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
