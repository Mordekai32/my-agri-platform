import React, { useState } from 'react';
import { Leaf, ShoppingCart, BarChart3, Globe, ShieldCheck, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

const AgriPlatform = () => {
  const [language, setLanguage] = useState('english');

  // Language translations
  const translations = {
    kinyarwanda: {
      nav: {
        marketplace: "Isoko",
        knowledgeHub: "Ubumenyi",
        logistics: "Ibikorwa byo Gutwara"
      },
      hero: {
        title1: "Kuvugurura",
        title2: "Ubuhinzi",
        title3: "binyuze mu ikoranabuhanga",
        description: "Guha abahinzi uruhare rwo guhura n'isoko ry'inyungu n'amakuru y'igihe nyacyo mu kongera umusaruro ku mugabane wacu.",
        farmerBtn: "Iyandikishe nk'Umuhinzi",
        browseBtn: "Sakura ibicuruzwa"
      },
      features: {
        title: "Ibikorwa Nyamukuru bya Platifomu",
        marketplace: {
          title: "Isoko rya Digitali",
          desc: "Guhuza abahinzi n'abaguzi mu buryo butaziguye, bikavana abadohoozi batari ngombwa."
        },
        pricing: {
          title: "Ibiciro mu gihe nyacyo",
          desc: "Kubona amakuru y'isoko ya gihe nyacyo kugira ngo habeho ubucuruzi bufite ubutabera n'amakuru y'ibiciro."
        },
        secure: {
          title: "Amabwiriza Afite Umutekano",
          desc: "Ibikorwa byo kugura bigenzurwa na JWT n'itumanaho ryibwe ku bakoresha bose."
        }
      },
      footer: {
        description: "Kuyobora impinduka za digitali mu buhinzi bwa Afurika mu guhuza umurima n'isoko.",
        followUs: "Dukurikire",
        explore: "Sakura",
        marketplace: "Isoko",
        knowledgeHub: "Ubumenyi",
        logistics: "Ibikorwa byo Gutwara",
        aboutUs: "Ibyerekeye Wewe",
        contact: "Twandikire",
        stayUpdated: "Komeza Umenyewe",
        subscribe: "Andikisha kuri newsletter yacu kugira n'ubone amakuru y'isoko.",
        join: "Injira",
        copyright: "Dukorera umuryango w'abahinzi mu bwizigiro.",
        developedBy: "Yakozwe na"
      }
    },
    english: {
      nav: {
        marketplace: "Marketplace",
        knowledgeHub: "Knowledge Hub",
        logistics: "Logistics"
      },
      hero: {
        title1: "Modernizing",
        title2: "Agriculture",
        title3: "through Digital Innovation.",
        description: "Connecting farmers directly with profitable markets and real-time data to enhance productivity across the continent.",
        farmerBtn: "Register as Farmer",
        browseBtn: "Browse Products"
      },
      features: {
        title: "Core Platform Capabilities",
        marketplace: {
          title: "Digital Marketplace",
          desc: "Direct connection between farmers and buyers, eliminating costly intermediaries."
        },
        pricing: {
          title: "Real-time Pricing",
          desc: "Access live market data to ensure fair trade and transparent pricing."
        },
        secure: {
          title: "Secure Orders",
          desc: "JWT protected transactions and encrypted communication for all users."
        }
      },
      footer: {
        description: "Leading the digital transformation of African agriculture by bridging the gap between field and market.",
        followUs: "Follow us",
        explore: "Explore",
        marketplace: "Marketplace",
        knowledgeHub: "Knowledge Hub",
        logistics: "Logistics",
        aboutUs: "About Us",
        contact: "Contact",
        stayUpdated: "Stay Updated",
        subscribe: "Subscribe for market insights and updates.",
        join: "Join",
        copyright: "Proudly serving the agricultural community.",
        developedBy: "Developed by"
      }
    },
    francais: {
      nav: {
        marketplace: "Marché",
        knowledgeHub: "Centre de Connaissances",
        logistics: "Logistique"
      },
      hero: {
        title1: "Moderniser",
        title2: "l'Agriculture",
        title3: "grâce à l'Innovation Numérique.",
        description: "Connecter directement les agriculteurs aux marchés rentables et aux données en temps réel pour améliorer la productivité à travers le continent.",
        farmerBtn: "S'inscrire comme Agriculteur",
        browseBtn: "Parcourir les Produits"
      },
      features: {
        title: "Capacités Principales de la Plateforme",
        marketplace: {
          title: "Marché Numérique",
          desc: "Connexion directe entre agriculteurs et acheteurs, éliminant les intermédiaires coûteux."
        },
        pricing: {
          title: "Tarification en Temps Réel",
          desc: "Accédez aux données du marché en direct pour garantir des échanges équitables et des prix transparents."
        },
        secure: {
          title: "Commandes Sécurisées",
          desc: "Transactions protégées par JWT et communication cryptée pour tous les utilisateurs."
        }
      },
      footer: {
        description: "Leader de la transformation numérique de l'agriculture africaine en comblant le fossé entre le champ et le marché.",
        followUs: "Suivez-nous",
        explore: "Explorer",
        marketplace: "Marché",
        knowledgeHub: "Centre de Connaissances",
        logistics: "Logistique",
        aboutUs: "À Propos",
        contact: "Contact",
        stayUpdated: "Restez Informé",
        subscribe: "Abonnez-vous pour des informations et mises à jour du marché.",
        join: "Rejoindre",
        copyright: "Au service de la communauté agricole avec fierté.",
        developedBy: "Développé par"
      }
    }
  };

  const t = translations[language];

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
          <a href="#" className="hover:text-green-600 transition-colors">{t.nav.marketplace}</a>
          <a href="#" className="hover:text-green-600 transition-colors">{t.nav.knowledgeHub}</a>
          <a href="#" className="hover:text-green-600 transition-colors">{t.nav.logistics}</a>
        </div>
        <div className="flex gap-3">
          {/* Language Selector */}
          <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="appearance-none bg-green-50 border border-green-200 text-green-800 px-4 py-2 pr-8 rounded-full font-medium text-sm cursor-pointer hover:bg-green-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="kinyarwanda">Kinyarwanda</option>
              <option value="english">English</option>
              <option value="francais">Français</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600 w-4 h-4 pointer-events-none" />
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold transition-all">
            {t.hero.farmerBtn}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="container mx-auto px-6 py-16 text-center md:text-left md:flex items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              {t.hero.title1} <span className="text-green-600">{t.hero.title2}</span><br />
              {t.hero.title3}
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-green-700 transition-all">
                {t.hero.farmerBtn}
              </button>
              <button className="bg-white border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition-all">
                {t.hero.browseBtn}
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
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">{t.features.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <FeatureCard 
                icon={<ShoppingCart className="text-green-600" />}
                title={t.features.marketplace.title}
                desc={t.features.marketplace.desc}
              />
              <FeatureCard 
                icon={<BarChart3 className="text-green-600" />}
                title={t.features.pricing.title}
                desc={t.features.pricing.desc}
              />
              <FeatureCard 
                icon={<ShieldCheck className="text-green-600" />}
                title={t.features.secure.title}
                desc={t.features.secure.desc}
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
                {t.footer.description}
              </p>
              <div className="flex flex-col gap-1">
                 <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">{t.footer.followUs}</span>
                 <p className="text-white font-medium">Instagram: <span className="text-green-500">blaise_320</span></p>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">{t.footer.explore}</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-green-400 transition-colors">{t.footer.marketplace}</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">{t.footer.knowledgeHub}</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">{t.footer.logistics}</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">{t.footer.aboutUs}</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">{t.footer.contact}</h4>
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
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">{t.footer.stayUpdated}</h4>
              <p className="text-xs mb-4">{t.footer.subscribe}</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 w-full focus:ring-2 focus:ring-green-500 outline-none transition-all text-sm"
                />
                <button className="bg-green-600 text-white px-5 py-2.5 rounded-xl hover:bg-green-500 font-bold transition-all text-sm">
                  {t.footer.join}
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs text-slate-500 font-medium">
              © {new Date().getFullYear()} Agri-Platforms. {t.footer.copyright}
            </div>
            <div className="px-5 py-2 bg-slate-900 rounded-full border border-slate-800">
              <p className="text-xs font-medium text-slate-400">
                {t.footer.developedBy} <span className="text-white">UKOBUKEYE Mordekai</span>
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
