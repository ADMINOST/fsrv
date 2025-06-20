import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { ArrowRight, Zap, Leaf, Shield, Star, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

// Import assets
import logoImage from './assets/trillion-fsrv-logo.png';
import heroImage from './assets/trillion-fsrv-hero.jpg';
import technologyImage from './assets/trillion-fsrv-technology.jpg';

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logoImage} alt="Trillion FSRV" className="h-8 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('vehicles')}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Vehicles
                </button>
                <button 
                  onClick={() => scrollToSection('technology')}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Technology
                </button>
                <button 
                  onClick={() => scrollToSection('company')}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Company
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">Test Drive</Button>
              <Button size="sm" className="pulse-glow">Order Now</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              The Future of Driving is
              <span className="block text-accent"> Self-Sustaining</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Never Stop. Never Charge. Never Compromise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 energy-glow">
                Experience Trillion FSRV
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-black">
                Learn the Technology
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">Revolutionary Technology</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Self-Recharging Innovation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our breakthrough technology combines multiple energy sources to create vehicles that recharge themselves while driving, parking, and even when stationary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={technologyImage} 
                alt="Self-Recharging Technology" 
                className="w-full rounded-lg shadow-2xl float-animation"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-lg">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Kinetic Energy Recovery</h3>
                  <p className="text-muted-foreground">
                    Advanced regenerative systems capture energy from braking, acceleration, and wheel rotation to continuously recharge the battery.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-lg">
                  <Leaf className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Integrated Solar Panels</h3>
                  <p className="text-muted-foreground">
                    Ultra-efficient solar cells seamlessly integrated into the vehicle's body and roof provide continuous energy generation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-lg">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Energy Management</h3>
                  <p className="text-muted-foreground">
                    AI-powered systems optimize energy distribution and storage, ensuring maximum efficiency and range.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section id="vehicles" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">Our Fleet</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Trillion FSRV Models</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of transportation with our lineup of self-recharging electric vehicles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20"></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">FSRV Sedan</h3>
                <p className="text-muted-foreground mb-4">
                  Luxury meets efficiency in our flagship sedan with unlimited range capability.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span>Range</span>
                    <span className="font-semibold">Unlimited*</span>
                  </div>
                  <div className="flex justify-between">
                    <span>0-60 mph</span>
                    <span className="font-semibold">2.8s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Top Speed</span>
                    <span className="font-semibold">200 mph</span>
                  </div>
                </div>
                <Button className="w-full">Configure</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20"></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">FSRV SUV</h3>
                <p className="text-muted-foreground mb-4">
                  Spacious family vehicle with advanced self-recharging technology.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span>Range</span>
                    <span className="font-semibold">Unlimited*</span>
                  </div>
                  <div className="flex justify-between">
                    <span>0-60 mph</span>
                    <span className="font-semibold">3.2s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Seating</span>
                    <span className="font-semibold">7 Seats</span>
                  </div>
                </div>
                <Button className="w-full">Configure</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20"></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">FSRV Sport</h3>
                <p className="text-muted-foreground mb-4">
                  High-performance sports car with revolutionary energy systems.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span>Range</span>
                    <span className="font-semibold">Unlimited*</span>
                  </div>
                  <div className="flex justify-between">
                    <span>0-60 mph</span>
                    <span className="font-semibold">2.1s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Top Speed</span>
                    <span className="font-semibold">250 mph</span>
                  </div>
                </div>
                <Button className="w-full">Configure</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary text-primary-foreground">Our Mission</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Redefining Transportation</h2>
              <p className="text-xl text-muted-foreground mb-8">
                At Trillion FSRV, we believe the future of transportation should be limitless. Our revolutionary self-recharging technology eliminates range anxiety and charging infrastructure dependencies, creating truly autonomous energy systems for vehicles.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Patents Filed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Engineers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$2B</div>
                  <div className="text-sm text-muted-foreground">Funding Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2025</div>
                  <div className="text-sm text-muted-foreground">First Delivery</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-accent text-accent-foreground p-2 rounded-lg">
                    <Star className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Innovation First</h3>
                </div>
                <p className="text-muted-foreground">
                  We push the boundaries of what's possible in automotive technology, creating solutions that seemed impossible just years ago.
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-accent text-accent-foreground p-2 rounded-lg">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Sustainable Future</h3>
                </div>
                <p className="text-muted-foreground">
                  Our commitment to environmental sustainability drives every decision, from design to manufacturing to end-of-life recycling.
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-accent text-accent-foreground p-2 rounded-lg">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Safety Excellence</h3>
                </div>
                <p className="text-muted-foreground">
                  Advanced safety systems and rigorous testing ensure our vehicles meet the highest safety standards in the industry.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-primary text-primary-foreground">Get Started</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience the Future Today</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Reserve your Trillion FSRV vehicle and be among the first to experience unlimited range driving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4 pulse-glow">
              Reserve Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Schedule Test Drive
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            *Unlimited range under optimal conditions with self-recharging technology active
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={logoImage} alt="Trillion FSRV" className="h-8 w-auto mb-4" />
              <p className="text-muted-foreground">
                Pioneering the future of self-recharging electric vehicles.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Vehicles</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>FSRV Sedan</li>
                <li>FSRV SUV</li>
                <li>FSRV Sport</li>
                <li>Compare Models</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Technology</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Self-Recharging System</li>
                <li>Solar Integration</li>
                <li>Energy Management</li>
                <li>Safety Features</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Press</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Trillion FSRV. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

