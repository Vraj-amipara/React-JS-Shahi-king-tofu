
import React from 'react';
import { History, Target, Leaf, Sparkle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Indian Spice Market" />
          <div className="absolute inset-0 bg-emerald-950/70"></div>
        </div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-6xl font-serif font-bold mb-4">Our Royal Legacy</h1>
          <p className="text-xl text-amber-300 italic">Bridging Heritage and Health Since 2018</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 space-y-32">
        {/* Brand Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold text-emerald-900">The Birth of a Kingdom</h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              Shahi King Tofu was founded on the belief that healthy eating shouldn't feel like a compromise. Inspired by the royal kitchens of the Mughals—who were masters of flavor—we set out to create a modern plant-based protein that carries the same richness and sophistication.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Based in the heart of India, we spent years perfecting a tofu-making process that eliminates the bitter aftertaste often associated with soy, resulting in a product that's as smooth as malai and as nutritious as a superfood.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/88/Chen_Mapo_Tofu.jpg" className="rounded-2xl h-64 w-full object-cover" alt="Crafting Tofu" />
            <img src="https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/how_to_keep_your_gallbladder_happy_slideshow/1800ss_thinkstock_rf_tofu_stirfry.jpg" className="rounded-2xl h-64 w-full object-cover mt-12" alt="Smoked Tofu" />
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: History, title: "Heritage", desc: "Rooted in authentic Indian culinary techniques." },
            { icon: Target, title: "Precision", desc: "Every batch is tested for consistency and quality." },
            { icon: Leaf, title: "Nature", desc: "100% Organic, non-GMO sourcing is our religion." },
            { icon: Sparkle, title: "Hygiene", desc: "Medical-grade processing for ultimate safety." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm text-center">
              <item.icon className="w-10 h-10 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-emerald-900 mb-2">{item.title}</h3>
              <p className="text-stone-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <section className="bg-emerald-900 rounded-[3rem] p-12 lg:p-24 text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">From Farm to Throne</h2>
            <p className="text-stone-400">Our meticulous 4-step processing ensures royal quality.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-amber-500/20 z-0"></div>
            {[
              { step: "01", title: "Sourcing", desc: "Selecting high-protein soybeans from local farms." },
              { step: "02", title: "Extraction", desc: "Gentle cold-press milk extraction for better flavor." },
              { step: "03", title: "Setting", desc: "Natural coagulation using fruit-based enzymes." },
              { step: "04", title: "Packaging", desc: "Vacuum sealed in biodegradable royal canisters." }
            ].map((s, idx) => (
              <div key={idx} className="relative z-10 text-center space-y-4">
                <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center mx-auto text-emerald-900 font-bold text-xl ring-8 ring-emerald-900">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="text-stone-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
