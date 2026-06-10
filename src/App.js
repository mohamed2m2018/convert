import { useState, useRef } from "react";
import {
  Hexagon,
  Globe,
  Users,
  Shield,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  Target,
  Heart,
  Handshake,
  BarChart3,
} from "lucide-react";

const Card = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`
        bg-white rounded-2xl shadow-lg
        transition-all duration-500
        hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1
        overflow-hidden
        border border-gray-100
        relative
        before:absolute before:inset-x-0 before:top-0 before:h-1
        before:bg-gradient-to-r before:from-green-500 before:to-emerald-400
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

const CardContent = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`
        relative z-10
        p-6 sm:p-8
        space-y-4
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

const Website = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50 overflow-x-hidden selection:bg-green-200 selection:text-green-900">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl shadow-lg border-b border-green-100/50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3">
              <img
                src="https://i.postimg.cc/RhrFmL6n/logo-no-background.png"
                alt="Logo"
                className="w-14 h-14 object-contain"
              />
              <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent truncate">
                Convert Service
              </h1>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-green-50 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-600" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600" />
              )}
            </button>

            <div className="hidden lg:flex items-center">
              <button
                onClick={scrollToContact}
                className="px-6 py-2.5 text-sm font-semibold text-green-700 bg-green-50 rounded-full
                  hover:bg-green-100 hover:shadow-lg hover:shadow-green-200/50
                  transition-all duration-300 border border-green-200/50"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`
          lg:hidden absolute w-full bg-white/95 backdrop-blur-lg shadow-lg transition-all duration-300
          ${mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'}
        `}>
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
            <button
              onClick={scrollToContact}
              className="block w-full text-left px-4 py-3 text-sm font-semibold text-green-700 hover:bg-green-50 rounded-xl transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-900 to-green-800" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.2)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(52,211,153,0.15)_0%,transparent_60%)]" />
        {/* Floating decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="space-y-4">
                <div className="inline-block px-4 py-1.5 bg-green-500/20 rounded-full backdrop-blur-xl border border-green-400/20">
                  <span className="text-sm sm:text-base text-green-200 font-medium">About Us</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
                  For Services and{" "}
                  <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                    Consultations
                  </span>
                </h1>
              </div>
              <p className="text-base sm:text-lg text-green-100/90 leading-relaxed max-w-xl">
                Convert Service Company is a premier trading company in Egypt, building lasting partnerships
                through excellence in service delivery and exceeding expectations.
              </p>
              <p className="text-base sm:text-lg text-green-100/90 leading-relaxed max-w-xl">
                We create commercial flows, import and export products, arranging and managing international projects with our partners. Supported by our network, we are able to integrate all these functions with our fruitful experience.
              </p>
              <div className="flex gap-4 pt-2">
                <button onClick={scrollToContact}
                  className="group bg-white text-green-900 px-8 py-3.5 rounded-2xl font-semibold
                    hover:bg-green-50 transition-all duration-300 hover:shadow-2xl
                    hover:shadow-white/20 flex items-center gap-2 text-base">
                  Get Started
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            <div className="my-10 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-3xl blur-2xl" />
              <img
                src="https://i.postimg.cc/qvqmfs8L/Screenshot-2024-12-21-at-9-33-10-AM.png"
                alt="Hero"
                className="w-full h-auto rounded-2xl shadow-2xl relative z-10 border border-white/10"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.1)_0%,transparent_60%)]" />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-green-100 rounded-full mb-4">
              <span className="text-sm font-medium text-green-700">What We Do</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-gray-900">
              Our Focus
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-10">
              Delivering excellence through innovation and strategic partnerships
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Foster Growth",
                desc: "Convert service company focuses to foster growth and promote enduring business ties with its client.",
                image: "https://i.postimg.cc/zB8KNNsr/Screenshot-2024-12-21-at-9-35-34-AM.png"
              },
              {
                icon: Users,
                title: "Customer Responsiveness",
                desc: "Customer responsiveness and commitment is the driving force in our quest for excellence.",
                image: "https://i.postimg.cc/RVNf4XDN/Screenshot-2024-12-21-at-9-36-16-AM.png"
              },
              {
                icon: Shield,
                title: "Effective Supply Chain",
                desc: "An effective supply chain manager - Right from sourcing supply of material at the doorstep of the customer in all Oil & Gas Items.",
                image: "https://i.postimg.cc/TYdy3QNr/Screenshot-2024-12-21-at-10-12-42-AM.png"
              },
            ].map(({ icon: Icon, title, desc, image }, idx) => (
              <Card key={idx} className="group">
                <CardContent>
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover rounded-xl mb-4 transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-2">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                      <Icon className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Lines Section */}
      <section className="py-24 bg-gradient-to-br from-green-900 via-emerald-900 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.3)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(52,211,153,0.15)_0%,transparent_60%)]" />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-4">
              <span className="text-sm font-medium text-green-200">What We Offer</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Our Lines of Business
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              "Collection on Behave",
              "Transportation",
              "Commodity Chemical",
              "Safety Equipment",
              "Filtration Products",
              "Mud Chemicals",
              "Hazard Waste Management",
              "Chemical Injection Skid",
              "General Supplies",
            ].map((business, index) => (
              <div
                key={index}
                className="group cursor-pointer transition-all duration-500"
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10
                  hover:bg-white/20 hover:border-green-400/30 hover:shadow-lg hover:shadow-green-500/10
                  transition-all duration-500 hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-2">
                    <Hexagon
                      className={`w-4 h-4 transition-all duration-500 ${
                        activeIndex === index
                          ? "text-green-300 scale-125"
                          : "text-green-500"
                      }`}
                    />
                    <span className="text-sm sm:text-base font-medium">{business}</span>
                  </div>
                  <div
                    className={`h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full transition-all duration-500 ${
                      activeIndex === index
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(16,185,129,0.1)_0%,transparent_60%)]" />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-3 py-1 bg-green-100 rounded-full mb-4">
              <span className="text-sm font-medium text-green-700">Our Purpose</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Mission</h2>
            <p className="text-base sm:text-lg text-gray-600">
              Delivering excellence through innovation and unwavering commitment
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {icon: Target, key: "Market leadership", value: "Being market leader in defend market segments."},
              {icon: Heart, key: "Customer Satisfaction", value: "Being the preferred supplier of our customers, with our products exceeding their quality requirements."},
              {icon: Handshake, key: "Professional marketing partnership", value: "Becoming professional marketing partner for our principals to meet the objectives of sales, market information, and customer service."},
              {icon: BarChart3, key: "Timely Information", value: "Giving timely information to the customers regarding trends of the market dynamics."}
            ].map(({icon: Icon, key, value}, idx) => (
              <Card key={idx} className="group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors flex-shrink-0">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900">{key}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {value}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-gradient-to-br from-green-900 via-emerald-900 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.3)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(52,211,153,0.15)_0%,transparent_60%)]" />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-4">
              <span className="text-sm font-medium text-green-200">Get in Touch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-base sm:text-lg mb-12 text-green-100/90 max-w-2xl mx-auto">
              If you have questions or need more information, we're here to help.
              Reach out through any of the following channels.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold mb-3">Address</h3>
                <p className="text-sm text-green-100/80 leading-relaxed">
                  Bldg 2107, Army Buildings,
                  <br />
                  Zahraa Nasr City, Cairo
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold mb-3">Phone</h3>
                <p className="text-sm text-green-100/80 leading-relaxed">
                  (+2) 02 410 4999
                  <br />
                  (+2) 0100 052 5699
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold mb-3">Email</h3>
                <a href="mailto:info@convert-svc.com" className="text-sm text-blue-300 hover:text-blue-200 transition-colors">
                  info@convert-svc.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white relative overflow-hidden">
        <div className="border-t border-white/10" />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://i.postimg.cc/RhrFmL6n/logo-no-background.png"
                alt="Logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">Convert Service</h3>
                <p className="text-sm text-gray-400">For Services and Consultations</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Convert Service. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;