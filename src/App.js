import React, { useState, useEffect, useRef } from "react";
import {
  Hexagon,
  ChevronDown,
  Globe,
  Users,
  Shield,
  Clock,
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Enhanced Navbar with Glassmorphism */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1
              className={`text-2xl font-bold transition-colors duration-500 ${
                scrolled ? "text-blue-900" : "text-white"
              }`}
            >
              Convert Service
            </h1>
            {/* <div className="flex gap-8">
              {["About", "Services", "Mission", "Contact"].map((item) => (
                <button
                  key={item}
                  className={`transition-all duration-300 hover:text-blue-500 relative group ${
                    scrolled ? "text-gray-700" : "text-white"
                  }`}
                  onClick={scrollToContact} // Add scroll behavior
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div> */}
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <header className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600" />
        <div className="absolute inset-0 opacity-30 bg-cover bg-center" />
        <div className="absolute inset-0 bg-blue-900/50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full backdrop-blur-sm">
                  <span className="text-blue-200">About Us</span>
                </div>
                <h1 className="text-5xl font-bold leading-tight animate-fade-in">
                  For Services and Consultations
                </h1>
              </div>
              <p className="text-xl opacity-90 leading-relaxed">
                Convert Service Company is a trading company in Egypt. We
                established longer and closer working Relationships with our
                clients and suppliers not only provide immediate and reliable
                services but to continually exceed expectations and goals. ​
              </p>
              <div className="flex gap-4">
                <button  onClick={scrollToContact} className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:shadow-white/20">
                  Get Started
                </button>
            
              </div>
            </div>
            <div className="hidden md:block backdrop-blur-sm bg-white/5 rounded-2xl p-8">
              <li className="text-white  text-lg opacity-90 leading-relaxed">
                We create commercial flows, import and export products,
                  arranging and managing international projects with our
                  partners. Supported our network
                  {"\n"}
              </li>
              <br></br>
           
              <li className="text-white text-lg opacity-90 leading-relaxed">
                   Our numerous competencies allow us to respond to the needs of
                  industries looking for a new market. We look forward to
                  welcoming you to our company and work to develop and enhance
                  your current business in Japan.
              </li>
            </div>
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce w-8 h-8" />
      </header>

      {/* Enhanced Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl mb-4 font-bold leading-tight animate-fade-in">
            Our Focus
          </h1>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Foster Growth",
                desc: "Convert service company focuses to foster growth and promote enduring business ties with its client. ​",
              },
              {
                icon: Users,
                title: "Customer responsiveness",
                desc: "Customer responsiveness and commitment is the driving force in the quest for excellence. ​​",
              },
              {
                icon: Shield,
                title: "Effective Supply Chain",
                desc: "An effective supply chain manager - Right from sourcing supply of material at the doorstep of the customer in all Oil & Gas Items.​",
              },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <Card key={idx}>
                <CardContent className="relative group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                  <Icon className="w-12 h-12 text-blue-600 mb-4 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Business Lines Section */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10 bg-cover bg-center" />
          <div className="absolute inset-0 bg-blue-900/90 backdrop-blur-sm" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Our Lines of Business
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Hexagon
                    className={`transition-all duration-300 ${
                      activeIndex === index
                        ? "text-blue-300 scale-110"
                        : "text-blue-500"
                    }`}
                  />
                  <span className="font-semibold">{business}</span>
                </div>
                <div
                  className={`h-1 bg-blue-500 transition-all duration-300 ${
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
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Delivering excellence through innovation and commitment
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
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 group-hover:rotate-12">
                      <Clock className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{mission}</h3>
                      <p className="text-gray-600">
                        Committed to excellence in every aspect of our service
                        delivery
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section
        ref={contactRef} // Assign ref to Contact Us section
        className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0  opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8">Contact Us​</h2>
          <p className="text-xl mb-12 opacity-90">
            If you have a question about us, need more information, or want to
            suggest, please use any of the following options to contact us. ​
          </p>
          <p className="text-gray-400">
            Bldg 2107, Army Buildings, Zahraa Nasr City, Cairo, Egypt <br />
            Phone: (+2) 02 410 4999 <br />
            Mobile: (+2) 0100 052 5699 <br />
            Email:{" "}
            <a href="mailto:info@convert-svc.com" className="text-blue-400">
              info@convert-svc.com
            </a>
          </p>
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
