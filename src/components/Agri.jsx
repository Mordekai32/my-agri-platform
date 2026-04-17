import React, { useState, useEffect } from 'react';
import { Leaf, ShoppingCart, BarChart3, Globe, ShieldCheck, Mail, Phone, MapPin, ChevronDown, Map, ExternalLink, Code, Menu, X, ArrowRight, Star, Users, TrendingUp, Award, CheckCircle, Sparkles, Zap, Heart, Sun, Cloud, Layers, Cpu, Database, Lock, Smartphone, CloudRain, Wind, Droplet, Thermometer } from 'lucide-react';

const AgriPlatform = () => {
  const [language, setLanguage] = useState('english');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          desc: "Kubona amakuru y'isoko ryo mu Rwanda n'Afurika ya gihe nyacyo kugira ngo habeho ubucuruzi bufite ubutabera n'amakuru y'ibiciro."
        },
        secure: {
          title: "Amabwiriza Afite Umutekano",
          desc: "Ibikorwa byo kugura bigenzurwa na JWT n'itumanaho ryibwe ku bakoresha bose bo mu Rwanda n'Afurika yose."
        }
      },
      stats: {
        farmers: "Abahinzi",
        countries: "Ibihugu",
        products: "Ibicuruzwa",
        satisfaction: "Kunyurwa"
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
      cta: {
        title: "Witeguye guhindura ubuhinzi bwawe?",
        description: "Injira muri za hambere 1,000 z'abahinzi bo mu Rwanda n'Afurika bahuza umurima wabo n'isoko",
        button: "Tangira Ubu"
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
      stats: {
        farmers: "Farmers",
        countries: "Countries",
        products: "Products",
        satisfaction: "Satisfaction"
      },
      africaSection: {
        title: "Connecting Africa from Rwanda",
        description: "Our platform bridges the gap between Rwandan farmers and markets across the African continent",
        expanding: "More countries coming in 2026",
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
      cta: {
        title: "Ready to Transform Your Farming?",
        description: "Join 1,000+ farmers across Rwanda & Africa connecting to markets",
        button: "Get Started"
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
      stats: {
        farmers: "Agriculteurs",
        countries: "Pays",
        products: "Produits",
        satisfaction: "Satisfaction"
      },
      africaSection: {
        title: "Connecter l'Afrique depuis le Rwanda",
        description: "Notre plateforme comble le fossé entre les agriculteurs rwandais et les marchés à travers le continent africain",
        expanding: "Plus de pays à venir en 2026",
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
      cta: {
        title: "Prêt à Transformer Votre Agriculture?",
        description: "Rejoignez 1 000+ agriculteurs au Rwanda & Afrique connectés aux marchés",
        button: "Commencer"
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
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation - Clean White */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-white shadow-sm'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-2.5 rounded-2xl shadow-lg">
                <Leaf className="text-white w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900 tracking-tight">Agri-Platforms</span>
                <div className="flex items-center gap-1 mt-0.5">
                  <Sparkles className="w-3 h-3 text-green-600" />
                  <span className="text-[10px] font-bold bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Rwanda • Africa</span>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:flex gap-8 text-gray-600 font-medium">
              {['marketplace', 'knowledgeHub', 'logistics'].map((item) => (
                <a key={item} href="#" className="relative group">
                  <span className="hover:text-green-600 transition-colors">{t.nav[item]}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
            
            <div className="hidden lg:flex gap-3">
              <div className="relative">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2 pr-8 rounded-xl font-medium text-sm cursor-pointer hover:bg-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="kinyarwanda">🇷🇼 Kinyarwanda</option>
                  <option value="english">🇬🇧 English</option>
                  <option value="francais">🇫🇷 Français</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 w-4 h-4 pointer-events-none" />
              </div>
              <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg transform hover:scale-105">
                {t.hero.farmerBtn}
              </button>
            </div>

            <button className="lg:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-100">
              <div className="flex flex-col gap-3">
                {['marketplace', 'knowledgeHub', 'logistics'].map((item) => (
                  <a key={item} href="#" className="text-gray-600 font-medium py-2 hover:text-green-600 transition-colors">
                    {t.nav[item]}
                  </a>
                ))}
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2 rounded-xl font-medium text-sm"
                >
                  <option value="kinyarwanda">🇷🇼 Kinyarwanda</option>
                  <option value="english">🇬🇧 English</option>
                  <option value="francais">🇫🇷 Français</option>
                </select>
                <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-xl font-semibold">
                  {t.hero.farmerBtn}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Clean & Modern */}
      <main className="pt-32">
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-gray-50">
          <div className="container mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-semibold">{t.hero.badge}</span>
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                  {t.hero.title1} <span className="text-green-600">{t.hero.title2}</span><br />
                  <span className="text-gray-800">{t.hero.title3}</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                  {t.hero.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                    {t.hero.farmerBtn}
                    <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="bg-white border-2 border-green-200 text-green-600 px-8 py-4 rounded-2xl font-bold hover:bg-green-50 hover:border-green-300 transition-all hover:scale-105">
                    {t.hero.browseBtn}
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-3xl p-8 shadow-2xl">
                    <div className="text-center">
                      <div className="relative inline-block mb-6">
                        <div className="bg-white p-8 rounded-full shadow-xl">
                          <Globe className="w-20 h-20 text-green-600" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-2xl font-bold text-gray-900">🇷🇼 {t.hero.rwandaText}</p>
                        <p className="text-green-600">{t.hero.heartOfAfrica}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Clean Cards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, value: "10,000+", label: t.stats.farmers, color: "from-blue-500 to-blue-600", bg: "bg-blue-50" },
                { icon: Globe, value: "15+", label: t.stats.countries, color: "from-green-500 to-green-600", bg: "bg-green-50" },
                { icon: ShoppingCart, value: "50K+", label: t.stats.products, color: "from-orange-500 to-orange-600", bg: "bg-orange-50" },
                { icon: Star, value: "98%", label: t.stats.satisfaction, color: "from-yellow-500 to-yellow-600", bg: "bg-yellow-50" }
              ].map((stat, idx) => (
                <div key={idx} className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4 shadow-md`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Grid - Modern Cards */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Why Choose Us</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t.features.title}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t.features.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<ShoppingCart />}
                title={t.features.marketplace.title}
                desc={t.features.marketplace.desc}
                color="from-green-500 to-green-600"
                bg="bg-green-50"
              />
              <FeatureCard 
                icon={<BarChart3 />}
                title={t.features.pricing.title}
                desc={t.features.pricing.desc}
                color="from-blue-500 to-blue-600"
                bg="bg-blue-50"
              />
              <FeatureCard 
                icon={<ShieldCheck />}
                title={t.features.secure.title}
                desc={t.features.secure.desc}
                color="from-purple-500 to-purple-600"
                bg="bg-purple-50"
              />
            </div>
          </div>
        </section>

        {/* Africa Map Section - Clean Design */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t.africaSection.title}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t.africaSection.description}</p>
            </div>
            
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto border border-gray-100">
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {countries.map((country, idx) => (
                  <span key={country.name} className="group px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:bg-green-50 hover:border-green-300 hover:text-green-700 hover:scale-105 transition-all cursor-pointer">
                    {country.code} {country.name}
                  </span>
                ))}
              </div>
              <div className="text-center">
                <div className="inline-flex p-4 bg-white rounded-full mb-4 shadow-md">
                  <Cloud className="w-10 h-10 text-green-600" />
                </div>
                <p className="text-sm text-gray-600 font-medium">{t.africaSection.expanding}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Compact */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 text-center relative">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex p-2 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">{t.cta.title}</h2>
              <p className="text-green-100 text-base mb-6">{t.cta.description}</p>
              <button className="group bg-white text-green-600 px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm">
                {t.cta.button}
                <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Clean Dark */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-xl">
                  <Leaf className="text-white w-6 h-6" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white tracking-tight">Agri-Platforms</span>
                  <div className="flex items-center gap-1 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-green-400">Rwanda</span>
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-sm mb-6">
                {t.footer.description}
              </p>
              <div>
                <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">{t.footer.followUs}</span>
                <p className="text-white font-medium mt-2">Instagram: <span className="text-green-400 hover:text-green-300 transition">@{t.footer.instagram}</span></p>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">{t.footer.explore}</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">{t.footer.marketplace}</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">{t.footer.knowledgeHub}</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">{t.footer.logistics}</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">{t.footer.aboutUs}</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">{t.footer.contact}</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-green-400" /> 
                  <span>mordekai893@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-green-400" /> 
                  <span>+250 796381024</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-green-400" /> 
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
                  className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 w-full focus:ring-2 focus:ring-green-500 outline-none transition-all text-sm text-white placeholder-gray-500"
                />
                <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-5 py-2.5 rounded-xl hover:shadow-lg font-bold transition-all hover:scale-105 text-sm">
                  {t.footer.join}
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <a 
                href="https://mordekai.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl transition-all duration-300 border border-gray-700 group-hover:border-green-500"
              >
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-lg">
                  <Code className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-green-400 font-semibold uppercase tracking-wider">{t.footer.portfolio}</p>
                  <p className="text-sm font-medium flex items-center gap-2">
                    mordekai.vercel.app
                    <ExternalLink className="w-3 h-3 text-green-400" />
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-gray-500">
              © {new Date().getFullYear()} Agri-Platforms. {t.footer.copyright}
            </div>
            <div className="px-4 py-1.5 bg-gray-800 rounded-full border border-gray-700">
              <p className="text-xs text-gray-400">
                {t.footer.developedBy} <span className="text-white font-semibold">UKOBUKEYE Mordekai</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc, color, bg }) => (
  <div className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${color} mb-6 shadow-md`}>
      {React.cloneElement(icon, { className: "w-6 h-6 text-white" })}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
  </div>
);

export default AgriPlatform;
