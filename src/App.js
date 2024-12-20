import React, { useState, useEffect, useRef } from "react";
import {
  Hexagon,
  ChevronDown,
  Globe,
  Users,
  Shield,
  Clock,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
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
        before:bg-gradient-to-r before:from-blue-50/50 before:to-transparent 
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

  // Reference for the Contact Us section
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the Contact Us section
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Enhanced Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white/80 backdrop-blur-xl shadow-lg py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Convert Service
            </h1>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <header className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2)_0%,transparent_70%)]" />
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-10">
              <div className="space-y-6">
                <div className="inline-block px-6 py-2 bg-blue-500/20 rounded-full backdrop-blur-xl border border-blue-400/20">
                  <span className="text-blue-200 font-medium">About Us</span>
                </div>
                <h1 className="text-6xl font-bold leading-tight tracking-tight">
                  For Services and{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                    Consultations
                  </span>
                </h1>
              </div>
              <p className="text-xl text-blue-100/90 leading-relaxed">
                Convert Service Company is a premier trading company in Egypt, building lasting partnerships 
                through excellence in service delivery and exceeding expectations.
              </p>
              <div className="flex gap-6">
                <button onClick={scrollToContact} 
                  className="group bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold 
                    hover:bg-blue-50 transition-all duration-300 hover:shadow-xl 
                    hover:shadow-white/20 flex items-center gap-3">
                  Get Started
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            <div className="hidden lg:block backdrop-blur-xl bg-white/5 rounded-3xl p-10 border border-white/10">
              <div className="space-y-8">
                <p className="text-white text-lg leading-relaxed">
                  We create commercial flows, import and export products,
                  arranging and managing international projects with our
                  partners, supported by our extensive network.
                </p>
                <p className="text-white text-lg leading-relaxed">
                  Our numerous competencies allow us to respond to the needs of
                  industries looking for a new market. We look forward to
                  welcoming you and enhancing your business presence in Japan.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="text-white/60 text-sm">Scroll to explore</span>
          <ChevronDown className="text-white/80 animate-bounce w-6 h-6" />
        </div>
      </header>

      {/* Enhanced Features Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.1)_0%,transparent_60%)]" />
        <div className="container mx-auto px-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold leading-tight mb-4">
              Our Focus
            </h2>
            <p className="text-gray-600 text-lg mb-16">
              Delivering excellence through innovation and strategic partnerships
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Foster Growth",
                desc: "Convert service company focuses to foster growth and promote enduring business ties with its client.",
              },
              {
                icon: Users,
                title: "Customer Responsiveness",
                desc: "Customer responsiveness and commitment is the driving force in our quest for excellence.",
              },
              {
                icon: Shield,
                title: "Effective Supply Chain",
                desc: "An effective supply chain manager - Right from sourcing supply of material at the doorstep of the customer in all Oil & Gas Items.",
              },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <Card key={idx}>
                <CardContent className="relative group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full 
                    -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                  <Icon className="w-14 h-14 text-blue-600 mb-6 transition-transform duration-500 
                    group-hover:scale-110 group-hover:rotate-6" />
                  <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Business Lines Section */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.3)_0%,transparent_70%)]" />
        <div className="container mx-auto px-8 relative z-10">
          <h2 className="text-5xl font-bold mb-20 text-center">
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
                <div className="flex items-center gap-4 mb-3">
                  <Hexagon
                    className={`transition-all duration-500 ${
                      activeIndex === index
                        ? "text-blue-300 scale-125"
                        : "text-blue-500"
                    }`}
                  />
                  <span className="font-semibold text-lg">{business}</span>
                </div>
                <div
                  className={`h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full transition-all duration-500 ${
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

      {/* Enhanced Mission Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1)_0%,transparent_60%)]" />
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              Delivering excellence through innovation and unwavering commitment
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Market leadership in defend market segments",
              "Providing quality products & reliable services",
              "Professional marketing partnership",
              "Customer-centric approach",
            ].map((mission, idx) => (
              <Card key={idx}>
                <CardContent>
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center 
                      group-hover:bg-blue-600 transition-all duration-500 group-hover:rotate-12">
                      <Clock className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">{mission}</h3>
                      <p className="text-gray-600 leading-relaxed">
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

      {/* Enhanced Contact Section */}
      <section
        ref={contactRef}
        className="py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.3)_0%,transparent_70%)]" />
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8">Contact Us</h2>
            <p className="text-xl mb-16 text-blue-100/90">
              If you have questions or need more information, we're here to help.
              Reach out through any of the following channels.
            </p>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-blue-100/80">
                  Bldg 2107, Army Buildings,
                  <br />
                  Zahraa Nasr City, Cairo, Egypt
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-blue-100/80">
                  (+2) 02 410 4999
                  <br />
                  (+2) 0100 052 5699
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold">Email</h3>
                <a href="mailto:info@convert-svc.com" className="text-blue-300 hover:text-blue-200 transition-colors">
                  info@convert-svc.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0  opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Convert Service</h3>
              <p className="text-gray-400">For Services and Consultations</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;
