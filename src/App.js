
import React, { useState, useEffect, useRef } from "react";
import {
  Hexagon,
  Globe,
  Users,
  Shield,
  Clock,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
} from "lucide-react";

const Card = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`
        bg-white rounded-xl shadow-lg 
        transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
        overflow-hidden
        border border-gray-100
        relative
        before:absolute before:inset-0 
        before:bg-gradient-to-r before:from-green-50/50 before:to-transparent 
        before:opacity-0 hover:before:opacity-100
        before:transition-opacity before:duration-300
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
        bg-gradient-to-br from-transparent to-white/50
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

const Website = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50 overflow-x-hidden">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          true 
            ? "bg-white/80 backdrop-blur-xl shadow-lg py-2" 
            : "bg-transparent py-4"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="https://i.postimg.cc/RhrFmL6n/logo-no-background.png" 
                alt="Logo" 
                className="w-12 h-12 object-contain"
              />
              <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent truncate">
                Convert Service
              </h1>
            </div>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1"
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
                className="text-sm text-green-600 font-semibold hover:text-green-600 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`
          lg:hidden absolute w-full bg-white/95 backdrop-blur-lg shadow-lg transition-all duration-300
          ${mobileMenuOpen ? 'max-h-96 py-2' : 'max-h-0 overflow-hidden'}
        `}>
          <div className="w-full max-w-7xl mx-auto px-3">
            <button
              onClick={scrollToContact}
              className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-green-50 rounded-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-900 to-green-800" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.2)_0%,transparent_70%)]" />
        <div className="w-full max-w-7xl mx-auto px-3 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div className="text-white space-y-4">
              <div className="space-y-3">
                <div className="inline-block px-3 py-1 bg-green-500/20 rounded-full backdrop-blur-xl border border-green-400/20">
                  <span className="text-xs sm:text-sm text-green-200">About Us</span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
                  For Services and{" "}
                  <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                    Consultations
                  </span>
                </h1>
              </div>
              <p className="text-sm sm:text-base text-green-100/90 leading-relaxed">
                Convert Service Company is a premier trading company in Egypt, building lasting partnerships 
                through excellence in service delivery and exceeding expectations.
              </p>
              <p className="text-sm sm:text-base text-green-100/90 leading-relaxed">
                We create commercial flows, import and export products, arranging and managing international projects with our partners. Supported by our network, we are able to integrate all these functions with our fruitful experience.
              </p>
              <div className="flex gap-3">
                <button onClick={scrollToContact} 
                  className="group bg-white text-green-900 px-4 py-2 rounded-xl font-semibold 
                    hover:bg-green-50 transition-all duration-300 hover:shadow-xl 
                    hover:shadow-white/20 flex items-center gap-2 text-sm">
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            <div className="mt-10">
              <img 
                src="https://i.postimg.cc/qvqmfs8L/Screenshot-2024-12-21-at-9-33-10-AM.png" 
                alt="Hero"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.1)_0%,transparent_60%)]" />
        <div className="w-full max-w-7xl mx-auto px-3">
          <div className="max-w-xl">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-3">
              Our Focus
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Delivering excellence through innovation and strategic partnerships
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                    className="w-full h-40 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-4">
                    <Icon className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Lines Section */}
      <section className="py-32 bg-gradient-to-br from-green-900 via-emerald-900 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.3)_0%,transparent_70%)]" />
        <div className="container w-full max-w-7xl mx-auto px-3 relative z-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-20 text-center">
            Our Lines of Business
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
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
                className="group cursor-pointer transform transition-all duration-500"
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="flex items-center gap-2">
                  <Hexagon
                    className={`w-4 h-4 transition-all duration-500 ${
                      activeIndex === index
                        ? "text-green-300 scale-125"
                        : "text-green-500"
                    }`}
                  />
                  <span className="text-sm font-medium">{business}</span>
                </div>
                <div
                  className={`h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full transition-all duration-500 ${
                    activeIndex === index
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(16,185,129,0.1)_0%,transparent_60%)]" />
        <div className="w-full max-w-7xl mx-auto px-3">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">Our Mission</h2>
            <p className="text-sm sm:text-base text-gray-600">
              Delivering excellence through innovation and unwavering commitment
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Market leadership in defend market segments",
              "Providing quality products & reliable services",
              "Professional marketing partnership",
              "Customer-centric approach",
            ].map((mission, idx) => (
              <Card key={idx} className="group">
                <CardContent>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <Clock className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-2">{mission}</h3>
                      <p className="text-sm text-gray-600">
                        Committed to excellence in every aspect of our service delivery,
                        ensuring the highest standards of quality and reliability.
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
      <section ref={contactRef} className="py-12 bg-gradient-to-br from-green-900 via-emerald-900 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.3)_0%,transparent_70%)]" />
        <div className="w-full max-w-7xl mx-auto px-3 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-sm sm:text-base mb-8 text-green-100/90">
              If you have questions or need more information, we're here to help.
              Reach out through any of the following channels.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-sm text-blue-100/80">
                  Bldg 2107, Army Buildings,
                  <br />
                  Zahraa Nasr City, Cairo
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-sm text-blue-100/80">
                  (+2) 02 410 4999
                  <br />
                  (+2) 0100 052 5699
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">Email</h3>
                <a href="mailto:info@convert-svc.com" className="text-sm text-blue-300 hover:text-blue-200 transition-colors">
                  info@convert-svc.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-3 relative z-10">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold">Convert Service</h3>
            <p className="text-sm text-gray-400">For Services and Consultations</p>
          </div>
        </div>
      </footer>
    </div>
  );

};

export default Website;
