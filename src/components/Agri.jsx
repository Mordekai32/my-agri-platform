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
            <div className="relative w-full max-w-md aspect-square bg-green-100 rounded-3xl overflow-hidden shadow-2xl">
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
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Leaf className="text-green-500 w-6 h-6" />
                <span className="text-xl font-bold text-white">Agri-Platforms</span>
              </div>
              <p className="text-sm leading-relaxed">
                Empowering the agricultural sector through smart technology and direct market access.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-green-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Marketplace</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-2"><Mail size={16} /> mordekai893@gmail.com</li>
                <li className="flex items-center gap-2"><Phone size={16} /> +250 796381024</li>
                <li className="flex items-center gap-2"><MapPin size={16} /> Kigali, Rwanda</li>
                {/* Added Instagram as text here */}
                <li className="text-slate-400 pt-2">Instagram: <span className="text-green-500">blaise_320</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-slate-800 border-none rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Agri-Platforms. All rights reserved.
            </p>
            <div className="flex flex-col items-center md:items-end">
              <p className="text-sm font-medium text-slate-400">
                Developed by <span className="text-green-500">UKOBUKEYE Mordekai</span>
              </p>
              {/* Also added to the attribution section for clarity */}
              <p className="text-xs text-slate-500">IG: blaise_320</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-8 rounded-2xl bg-slate-50 hover:shadow-xl transition-shadow border border-slate-100">
    <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export default AgriPlatform;
