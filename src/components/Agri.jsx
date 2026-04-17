import React, { useState } from 'react';
import { Leaf, ShoppingCart, BarChart3, Globe, ShieldCheck, Mail, Phone, MapPin, ChevronDown, Map, Heart, ExternalLink, Code } from 'lucide-react';

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
        description: "Guha abahinzi bo mu Rwanda n'Afurika uruhare rwo guhura n'isoko ry'inyungu n'amakuru y'igihe nyacyo mu kongera umusaruro ku mugabane wacu.",
        farmerBtn: "Iyandikishe nk'Umuhinzi",
        browseBtn: "Sakura ibicuruzwa",
        badge: "🇷🇼 Rwanda • 🌍 Afurika",
        rwandaText: "Rwanda",
        heartOfAfrica: "Umutima wa Afurika"
      },
      features: {
        title: "Ibikorwa Nyamukuru bya Platifomu",
        subtitle: "Guha abahinzi bo mu Rwanda n'Afurika ibisubizo bya digitale biri mu iterambere",
        marketplace: {
          title: "Isoko rya Digitali",
          desc: "Guhuza abahinzi bo mu Rwanda n'Abanyafurika n'abaguzi mu buryo buziguye, bikavanaho abadohozi batari ngombwa."
        },
        pricing: {
          title: "Ibiciro mu gihe nyacyo",
          desc: "Kubona amakuru y'isoko ryo mu Rwanda n'Afurika y'igihe nyacyo kugira ngo habeho ubucuruzi bufite ubutabera n'amakuru y'ibiciro."
        },
        secure: {
          title: "Amabwiriza Afite Umutekano",
          desc: "Ibikorwa byo kugura bigenzurwa na JWT n'itumanaho ryibwe ku bakoresha bose bo mu Rwanda n'Afurika yose."
        }
      },
      africaSection: {
        title: "Guhuza Afurika Duhereye mu Rwanda",
        description: "Platifomu yacu ihuza abahinzi b'Abanyarwanda n'amasoko yo muri Afurika yose",
        expanding: "Tugana mu bindi bihugu bya Afurika muri 2026",
        countries: {
          rwanda: "Rwanda",
          kenya: "Kenya",
          uganda: "Uganda",
          tanzania: "Tanzania",
          burundi: "Burundi",
          drc: "DRC",
          nigeria: "Nigeria",
          southAfrica: "Afurika y'Epfo"
        }
      },
      footer: {
        description: "Kuyobora impinduka za digitali mu buhinzi bwa Afurika, itangirira mu Rwanda, mu guhuza umurima n'isoko.",
        followUs: "Dukurikire",
        explore: "Sakura",
        marketplace: "Isoko",
        knowledgeHub: "Ubumenyi",
        logistics: "Ibikorwa byo Gutwara",
        aboutUs: "Ibyerekeye Wewe",
        contact: "Twandikire",
        stayUpdated: "Komeza Umenyewe",
        subscribe: "Andikisha kuri newsletter yacu kugira n'ubone amakuru y'isoko ryo mu Rwanda n'Afurika.",
        join: "Injira",
        copyright: "Dukorera umuryango w'abahinzi mu Rwanda n'Afurika hose mu bwizigiro.",
        developedBy: "Yakozwe na",
        portfolio: "Porotifoliye ya Developer",
        emailPlaceholder: "Aderesi ya imeri",
        instagram: "blaise_320"
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
        description: "Connecting farmers across Rwanda and Africa directly with profitable markets and real-time data to enhance productivity across the continent.",
        farmerBtn: "Register as Farmer",
        browseBtn: "Browse Products",
        badge: "🇷🇼 Rwanda • 🌍 Africa",
        rwandaText: "Rwanda",
        heartOfAfrica: "Heart of Africa"
      },
      features: {
        title: "Core Platform Capabilities",
        subtitle: "Empowering Rwandan and African farmers with cutting-edge digital solutions",
        marketplace: {
          title: "Digital Marketplace",
          desc: "Direct connection between Rwandan & African farmers and buyers, eliminating costly intermediaries."
        },
        pricing: {
          title: "Real-time Pricing",
          desc: "Access live market data from Rwanda and across Africa to ensure fair trade and transparent pricing."
        },
        secure: {
          title: "Secure Orders",
          desc: "JWT protected transactions and encrypted communication for all farmers and buyers in Rwanda & Africa."
        }
      },
      africaSection: {
        title: "Connecting Africa from Rwanda",
        description: "Our platform bridges the gap between Rwandan farmers and markets across the African continent",
        expanding: "Expanding to more African countries in 2026",
        countries: {
          rwanda: "Rwanda",
          kenya: "Kenya",
          uganda: "Uganda",
          tanzania: "Tanzania",
          burundi: "Burundi",
          drc: "DRC",
          nigeria: "Nigeria",
          southAfrica: "South Africa"
        }
      },
      footer: {
        description: "Leading the digital transformation of African agriculture, starting from Rwanda, by bridging the gap between field and market.",
        followUs: "Follow us",
        explore: "Explore",
        marketplace: "Marketplace",
        knowledgeHub: "Knowledge Hub",
        logistics: "Logistics",
        aboutUs: "About Us",
        contact: "Contact",
        stayUpdated: "Stay Updated",
        subscribe: "Subscribe for market insights from Rwanda and across Africa.",
        join: "Join",
        copyright: "Proudly serving the agricultural community in Rwanda and across Africa.",
        developedBy: "Developed by",
        portfolio: "Developer Portfolio",
        emailPlaceholder: "Email address",
        instagram: "blaise_320"
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
        description: "Connecter directement les agriculteurs du Rwanda et d'Afrique aux marchés rentables et aux données en temps réel pour améliorer la productivité à travers le continent.",
        farmerBtn: "S'inscrire comme Agriculteur",
        browseBtn: "Parcourir les Produits",
        badge: "🇷🇼 Rwanda • 🌍 Afrique",
        rwandaText: "Rwanda",
        heartOfAfrica: "Cœur de l'Afrique"
      },
      features: {
        title: "Capacités Principales de la Plateforme",
        subtitle: "Autonomiser les agriculteurs rwandais et africains avec des solutions numériques de pointe",
        marketplace: {
          title: "Marché Numérique",
          desc: "Connexion directe entre agriculteurs rwandais et africains et acheteurs, éliminant les intermédiaires coûteux."
        },
        pricing: {
          title: "Tarification en Temps Réel",
          desc: "Accédez aux données du marché en direct du Rwanda et d'Afrique pour garantir des échanges équitables et des prix transparents."
        },
        secure: {
          title: "Commandes Sécurisées",
          desc: "Transactions protégées par JWT et communication cryptée pour tous les agriculteurs au Rwanda et en Afrique."
        }
      },
      africaSection: {
        title: "Connecter l'Afrique depuis le Rwanda",
        description: "Notre plateforme comble le fossé entre les agriculteurs rwandais et les marchés à travers le continent africain",
        expanding: "Expansion vers d'autres pays africains en 2026",
        countries: {
          rwanda: "Rwanda",
          kenya: "Kenya",
          uganda: "Ouganda",
          tanzania: "Tanzanie",
          burundi: "Burundi",
          drc: "RDC",
          nigeria: "Nigéria",
          southAfrica: "Afrique du Sud"
        }
      },
      footer: {
        description: "Leader de la transformation numérique de l'agriculture africaine, à partir du Rwanda, en comblant le fossé entre le champ et le marché.",
        followUs: "Suivez-nous",
        explore: "Explorer",
        marketplace: "Marché",
        knowledgeHub: "Centre de Connaissances",
        logistics: "Logistique",
        aboutUs: "À Propos",
        contact: "Contact",
        stayUpdated: "Restez Informé",
        subscribe: "Abonnez-vous pour des informations du marché du Rwanda et d'Afrique.",
        join: "Rejoindre",
        copyright: "Au service de la communauté agricole au Rwanda et à travers l'Afrique avec fierté.",
        developedBy: "Développé par",
        portfolio: "Portfolio du Développeur",
        emailPlaceholder: "Adresse e-mail",
        instagram: "blaise_320"
      }
    }
  };

  const t = translations[language];

  // Country list with translations
  const countries = [
    { code: '🇷🇼', name: t.africaSection.countries.rwanda },
    { code: '🇰🇪', name: t.africaSection.countries.kenya },
    { code: '🇺🇬', name: t.africaSection.countries.uganda },
    { code: '🇹🇿', name: t.africaSection.countries.tanzania },
    { code: '🇧🇮', name: t.africaSection.countries.burundi },
    { code: '🇨🇩', name: t.africaSection.countries.drc },
    { code: '🇳🇬', name: t.africaSection.countries.nigeria },
    { code: '🇿🇦', name: t.africaSection.countries.southAfrica }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      {/* Navigation */}
      <nav className="bg-white border-b border-green-100 px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-green-600 p-2 rounded-lg">
            <Leaf className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold text-green-800 tracking-tight">Agri-Platforms</span>
          <span className="ml-2 text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full">Rwanda • Africa</span>
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
            {/* Rwanda & Africa Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
              <Map className="w-4 h-4" />
              <span className="text-sm font-semibold">{t.hero.badge}</span>
            </div>
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
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-green-100 to-green-50 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <Globe className="w-32 h-32 text-green-300 mb-4" />
                <div className="text-center">
                  <p className="text-green-700 font-bold text-lg">🇷🇼 {t.hero.rwandaText}</p>
                  <p className="text-green-600 text-sm">{t.hero.heartOfAfrica}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="bg-white py-20 border-y border-slate-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">{t.features.title}</h2>
            <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
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

        {/* Africa Map Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.africaSection.title}</h2>
            <p className="text-slate-500 mb-12 max-w-2xl mx-auto">
              {t.africaSection.description}
            </p>
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {countries.map(country => (
                  <span key={country.name} className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    {country.code} {country.name}
                  </span>
                ))}
              </div>
              <div className="text-green-600">
                <Globe className="w-24 h-24 mx-auto mb-4 text-green-500" />
                <p className="text-slate-600">{t.africaSection.expanding}</p>
              </div>
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
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded-full">Rwanda</span>
              </div>
              <p className="text-sm leading-relaxed max-w-sm mb-6">
                {t.footer.description}
              </p>
              <div className="flex flex-col gap-1">
                 <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">{t.footer.followUs}</span>
                 <p className="text-white font-medium">Instagram: <span className="text-green-500">{t.footer.instagram}</span></p>
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
                  placeholder={t.footer.emailPlaceholder} 
                  className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 w-full focus:ring-2 focus:ring-green-500 outline-none transition-all text-sm"
                />
                <button className="bg-green-600 text-white px-5 py-2.5 rounded-xl hover:bg-green-500 font-bold transition-all text-sm">
                  {t.footer.join}
                </button>
              </div>
            </div>
          </div>

          {/* Developer Portfolio Section - Enhanced Design */}
          <div className="mb-10 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <a 
                href="https://mordekai.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl transition-all duration-300 border border-slate-700 group-hover:border-green-500"
              >
                <div className="bg-gradient-to-r from-green-600 to-emerald-500 p-2 rounded-xl">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-green-400 font-semibold uppercase tracking-wider">{t.footer.portfolio}</p>
                  <p className="text-sm font-bold flex items-center gap-2">
                    mordekai.vercel.app
                    <ExternalLink className="w-4 h-4 text-green-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs text-slate-500 font-medium flex items-center gap-2">
              <span>🇷🇼</span>
              © {new Date().getFullYear()} Agri-Platforms. {t.footer.copyright}
              <span>🌍</span>
            </div>
            <div className="px-5 py-2 bg-slate-900 rounded-full border border-slate-800 hover:border-green-500/50 transition-colors">
              <p className="text-xs font-medium text-slate-400">
                {t.footer.developedBy} <span className="text-white font-semibold">UKOBUKEYE Mordekai</span>
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
