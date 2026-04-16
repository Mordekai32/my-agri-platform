import React from 'react';
import { Leaf, ShoppingCart, BarChart3, Globe, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

const AgriPlatform = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      {/* Navigation */}
      <nav className="bg-white border-b border-green-100 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-green-600 p-2 rounded-lg">
            <Leaf className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold text-green-800 tracking-tight">Agri-Platforms</span>
        </div>
        <div className="hidden md:flex gap-8 text-slate-600 font-medium">
          <a href="#" className="hover:text-green-600 transition-colors">Marketplace</a>
          <a href="#" className="hover:text-green-600 transition-colors">Knowledge Hub</a>
          <a href="#" className="hover:text-green-600 transition-colors">Logistics</a>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold transition-all">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="container mx-auto px-6 py-16 text-center md:text-left md:flex items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Modernizing <span className="text-green-600">Agriculture</span> through Digital Innovation.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Connecting farmers directly with profitable markets and real-time data to enhance productivity across the continent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-green-700 transition-all">
                Register as Farmer
              </button>
              <button className="bg-white border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition-all">
                Browse Products
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-green-100 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
               <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="w-48 h-48 text-green-200" />
               </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="bg-white py-20 border-y border-slate-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Core Platform Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <FeatureCard 
                icon={<ShoppingCart className="text-green-600" />}
                title="Digital Marketplace"
                desc="Direct connection between farmers and buyers, eliminating costly intermediaries."
              />
              <FeatureCard 
                icon={<BarChart3 className="text-green-600" />}
                title="Real-time Pricing"
                desc="Access live market data to ensure fair trade and transparent pricing."
              />
              <FeatureCard 
                icon={<ShieldCheck className="text-green-600" />}
                title="Secure Orders"
                desc="JWT protected transactions and encrypted communication for all users."
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-slate-950 text-slate-400 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 mb-6">
                <Leaf className="text-green-500 w-7 h-7" />
                <span className="text-2xl font-bold text-white tracking-tight">Agri-Platforms</span>
              </div>
              <p className="text-sm leading-relaxed max-w-sm mb-6">
                Leading the digital transformation of African agriculture by bridging the gap between field and market.
              </p>
              <div className="flex flex-col gap-1">
                 <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Follow us</span>
                 <p className="text-white font-medium">Instagram: <span className="text-green-500">blaise_320</span></p>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Explore</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-green-400 transition-colors">Marketplace</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Knowledge Hub</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Logistics</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-green-500 mt-0.5" /> 
                  <span>mordekai893@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-green-500 mt-0.5" /> 
                  <span>+250 796381024</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-green-500 mt-0.5" /> 
                  <span>Kigali, Rwanda</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Stay Updated</h4>
              <p className="text-xs mb-4">Subscribe for market insights and updates.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 w-full focus:ring-2 focus:ring-green-500 outline-none transition-all text-sm"
                />
                <button className="bg-green-600 text-white px-5 py-2.5 rounded-xl hover:bg-green-500 font-bold transition-all text-sm">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs text-slate-500 font-medium">
              © {new Date().getFullYear()} Agri-Platforms. Proudly serving the agricultural community.
            </div>
            <div className="px-5 py-2 bg-slate-900 rounded-full border border-slate-800">
              <p className="text-xs font-medium text-slate-400">
                Developed by <span className="text-white">UKOBUKEYE Mordekai</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-8 rounded-3xl bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group">
    <div className="bg-green-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
      {React.cloneElement(icon, { className: "w-7 h-7" })}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
  </div>
);

export default AgriPlatform;
