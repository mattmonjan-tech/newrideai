import React, { useState, useEffect } from 'react';
import { Bus, CheckCircle2, ArrowRight, Upload, X, FileText, Tablet, Scan, Cable, Check, Zap, Navigation, Printer, Mail, Map, Brain, DollarSign, Wrench, Lock, LayoutDashboard, User, AlertCircle, Shield } from 'lucide-react';
import { RECOMMENDED_HARDWARE } from '../constants';
import { SubscriptionTier } from '../types';

// --- INTERACTIVE HERO DEMO ---
export const InteractiveHeroDemo = () => {
  const [progress, setProgress] = useState(65);
  const [eta, setEta] = useState(5);
  const [showAlert, setShowAlert] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
        setProgress(p => {
            if (p >= 100) return 0;
            return p + 0.2;
        });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const alertTimer = setInterval(() => {
        setShowAlert(prev => !prev);
    }, 5000);
    return () => clearInterval(alertTimer);
  }, []);
  
  useEffect(() => {
      setEta(Math.max(1, Math.ceil(8 * (1 - progress/100))));
  }, [progress]);

  return (
    <div className="relative h-[450px] lg:h-[600px] w-full flex items-center justify-center">
       <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M10,10 Q40,40 60,10 T90,50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-600" />
               <path d="M10,80 Q40,50 60,80 T90,40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-600" />
               <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 2" className="text-slate-400" />
           </svg>
       </div>

       <div className="relative z-20 w-72 md:w-80 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-5 transform transition-all hover:scale-105 duration-500 animate-in fade-in slide-in-from-bottom-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                        <Bus size={20} />
                    </div>
                    <div>
                        <p className="font-bold text-slate-800 leading-tight">Bus #42</p>
                        <p className="text-xs text-slate-500 font-medium">Route 101 • AM Run</p>
                    </div>
                </div>
                <div className="animate-pulse">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-500 ring-4 ring-green-100"></span>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between text-xs font-bold text-slate-600 uppercase tracking-wide">
                    <span>Route Progress</span>
                    <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-100 ease-linear shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="flex justify-between items-center pt-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Navigation size={16} className="text-blue-500" />
                        <span className="font-medium">Next: Oak St</span>
                    </div>
                    <div className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded border border-blue-100">
                        {eta} min away
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-slate-100">
                <div className="text-center p-2 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors">
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Speed</p>
                    <p className="text-lg font-bold text-slate-700">42 <span className="text-xs font-normal text-slate-400">mph</span></p>
                </div>
                <div className="text-center p-2 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors">
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Occupancy</p>
                    <p className="text-lg font-bold text-slate-700">48<span className="text-slate-400 text-sm">/60</span></p>
                </div>
            </div>
       </div>

       <div className={`absolute top-10 -left-2 md:left-0 w-64 bg-slate-800 text-white rounded-xl shadow-2xl p-4 z-30 transition-all duration-700 transform border border-slate-700 ${showAlert ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 pointer-events-none'}`}>
            <div className="flex items-start gap-3">
                <div className="bg-amber-500/20 p-2 rounded-lg text-amber-500 shrink-0">
                    <Zap size={18} />
                </div>
                <div>
                    <p className="text-sm font-bold text-amber-400 mb-1 flex items-center gap-2">AI Optimization <span className="text-[9px] bg-amber-500 text-slate-900 px-1 rounded">NEW</span></p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                        Traffic detected on I-10. Rerouting via Skyline Dr saved 12 minutes.
                    </p>
                </div>
            </div>
       </div>

       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl -z-10 opacity-60"></div>
    </div>
  );
};

// --- FEATURES SECTION ---
const FEATURES_DATA = [
    {
        icon: Map,
        title: "Real-time GPS Fleet Tracking",
        desc: "Live location updates with 1-second latency. Visualize your entire district fleet on a single dashboard with traffic overlays."
    },
    {
        icon: Brain,
        title: "AI Route Optimization",
        desc: "Gemini-powered algorithms analyze traffic patterns and ridership data to suggest more efficient routes, saving fuel and time."
    },
    {
        icon: Shield,
        title: "RFID Student Ridership",
        desc: "Know exactly when and where students board and disembark. Automated notifications sent to parents for peace of mind."
    },
    {
        icon: Wrench,
        title: "Maintenance Console",
        desc: "Digital ticketing system for mechanics. Drivers can report issues from the app, and shop crews can track repair progress."
    },
    {
        icon: DollarSign,
        title: "Budget & Financial Intelligence",
        desc: "Track operational expenses and project ROI. Use our sandbox tools to simulate savings from electrification and efficiency."
    },
    {
        icon: Tablet,
        title: "Legacy Fleet Retrofit",
        desc: "Turn older buses into smart vehicles with our Driver Kiosk App and cost-effective hardware integration kits."
    }
];

export const FeaturesSection = () => (
    <section id="features" className="py-24 bg-white relative z-10">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to run a smarter fleet.</h2>
                  <p className="text-slate-500 max-w-2xl mx-auto">
                      From the depot to the drop-off zone, RideSmart integrates every aspect of student transportation into one cohesive platform.
                  </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {FEATURES_DATA.map((feature, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:bg-white transition-all duration-300 group">
                          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              <feature.icon size={24} />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                          <p className="text-slate-500 leading-relaxed">
                              {feature.desc}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
    </section>
);

// --- PRICING SECTION ---
export const PricingSection = ({ onQuoteRequest }: { onQuoteRequest: () => void }) => (
    <section id="pricing" className="py-24 bg-slate-50 border-t border-slate-200 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Competitive Education Pricing</h2>
                  <p className="text-slate-500 max-w-2xl mx-auto">
                      Transparent, flat-rate pricing designed for K-12 budgets. Compare against legacy providers like Samsara, Zonar, and Transfinder.
                  </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                  {/* The Basic Bus */}
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col">
                      <div className="mb-6">
                          <h3 className="text-xl font-bold text-slate-900">The Basic Bus</h3>
                          <p className="text-slate-500 text-sm mt-2">Essential GPS tracking & student safety.</p>
                      </div>
                      <div className="mb-6">
                          <p className="text-2xl font-bold text-slate-900">Contact for Pricing</p>
                          <p className="text-xs text-slate-400 mt-1">Tailored to your district size</p>
                      </div>
                      <ul className="space-y-4 mb-8 flex-1">
                          <li className="flex items-center gap-2 text-sm text-slate-700"><Check size={16} className="text-blue-500" /> Live GPS Tracking</li>
                          <li className="flex items-center gap-2 text-sm text-slate-700"><Check size={16} className="text-blue-500" /> Real-time Ridership (RFID)</li>
                          <li className="flex items-center gap-2 text-sm text-slate-700"><Check size={16} className="text-blue-500" /> Speeding & Safety Alerts</li>
                      </ul>
                      <button onClick={onQuoteRequest} className="w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 transition-colors">Request Quote</button>
                  </div>

                   {/* The Better Bus */}
                   <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col">
                      <div className="mb-6">
                          <h3 className="text-xl font-bold text-slate-900">The Better Bus</h3>
                          <p className="text-slate-500 text-sm mt-2">Full parent communication suite.</p>
                      </div>
                      <div className="mb-6">
                          <p className="text-2xl font-bold text-slate-900">Contact for Pricing</p>
                          <p className="text-xs text-slate-400 mt-1">Tailored to your district size</p>
                      </div>
                      <ul className="space-y-4 mb-8 flex-1">
                          <li className="flex items-center gap-2 text-sm text-slate-700"><Check size={16} className="text-blue-600" /> <strong>Everything in Basic Bus</strong></li>
                          <li className="flex items-center gap-2 text-sm text-slate-700"><Check size={16} className="text-blue-600" /> Parent Mobile App</li>
                          <li className="flex items-center gap-2 text-sm text-slate-700"><Check size={16} className="text-blue-600" /> Automated Delay Notifications</li>
                          <li className="flex items-center gap-2 text-sm text-slate-700"><Check size={16} className="text-blue-600" /> Tablet Kiosk Mode</li>
                          <li className="flex items-center gap-2 text-sm text-slate-700"><Check size={16} className="text-blue-600" /> Hardware Configuration</li>
                      </ul>
                      <button onClick={onQuoteRequest} className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">Request Quote</button>
                  </div>

                  {/* The Best Bus */}
                  <div className="bg-slate-900 rounded-2xl shadow-xl border border-slate-800 p-8 flex flex-col text-white relative transform scale-105 z-10">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-purple-500/30">
                          Best Value
                      </div>
                      <div className="mb-6">
                          <h3 className="text-xl font-bold text-white">The Best Bus</h3>
                          <p className="text-slate-400 text-sm mt-2">Total fleet automation & AI logistics.</p>
                      </div>
                      <div className="mb-6">
                          <p className="text-2xl font-bold text-white">Contact for Pricing</p>
                          <p className="text-xs text-slate-500 mt-1">Tailored to your district size</p>
                      </div>
                      <ul className="space-y-4 mb-8 flex-1">
                          <li className="flex items-center gap-2 text-sm text-slate-300"><Check size={16} className="text-purple-500" /> <strong>Everything in Better Bus</strong></li>
                          <li className="flex items-center gap-2 text-sm text-slate-300"><Check size={16} className="text-purple-500" /> AI Route Optimization</li>
                          <li className="flex items-center gap-2 text-sm text-slate-300"><Check size={16} className="text-purple-500" /> Special Events & Field Trips</li>
                          <li className="flex items-center gap-2 text-sm text-slate-300"><Check size={16} className="text-purple-500" /> Logistics Analysis</li>
                          <li className="flex items-center gap-2 text-sm text-slate-300"><Check size={16} className="text-purple-500" /> Dedicated Success Manager</li>
                      </ul>
                      <button onClick={onQuoteRequest} className="w-full py-3 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20">Request Quote</button>
                  </div>
              </div>
          </div>
    </section>
);

// --- FOOTER SECTION ---
export const FooterSection = ({ onLogin }: { onLogin: () => void }) => (
    <footer className="bg-slate-900 text-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                    <div className="bg-blue-600 p-1.5 rounded text-white">
                        <Bus size={20} />
                    </div>
                    <span className="text-lg font-bold">RideSmart.ai</span>
                </div>
                <p className="text-slate-400 max-w-xs text-sm leading-relaxed">
                    Empowering school districts with next-generation logistics and safety tools.
                </p>
            </div>
            <div>
                <h4 className="font-bold mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                    <li><a href="#" className="hover:text-white">Ridership Tracking</a></li>
                    <li><a href="#" className="hover:text-white">Fleet Management</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                    <li><a href="#" className="hover:text-white">About Us</a></li>
                    <li><button onClick={onLogin} className="hover:text-white">Admin Portal</button></li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 mt-8 border-t border-slate-800 text-center text-xs text-slate-500">
            © 2024 RideSmart AI Technologies. All rights reserved.
        </div>
    </footer>
);
