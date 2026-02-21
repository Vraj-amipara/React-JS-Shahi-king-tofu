
import React from 'react';
import { Mail, Phone, MessageSquare, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-serif font-bold text-emerald-900 mb-6">Connect with Royalty</h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Whether you have a bulk order request or just want to share your Shahi experience, we are here to listen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-stone-100">
            <h2 className="text-2xl font-serif font-bold text-emerald-900 mb-8">Send us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-emerald-900 uppercase">Your Name</label>
                  <input type="text" className="w-full p-4 bg-stone-50 border border-stone-100 rounded-xl outline-none focus:ring-2 ring-amber-500/20" placeholder="Maharaja Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-emerald-900 uppercase">Email Address</label>
                  <input type="email" className="w-full p-4 bg-stone-50 border border-stone-100 rounded-xl outline-none focus:ring-2 ring-amber-500/20" placeholder="name@royal.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-emerald-900 uppercase">Subject</label>
                <select className="w-full p-4 bg-stone-50 border border-stone-100 rounded-xl outline-none focus:ring-2 ring-amber-500/20 appearance-none">
                  <option>General Inquiry</option>
                  <option>Wholesale / Bulk Orders</option>
                  <option>Feedback & Suggestions</option>
                  <option>Partnerships</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-emerald-900 uppercase">Message</label>
                <textarea className="w-full p-4 bg-stone-50 border border-stone-100 rounded-xl outline-none focus:ring-2 ring-amber-500/20 h-40" placeholder="Your message here..."></textarea>
              </div>
              <button className="w-full py-5 bg-emerald-900 text-white font-bold rounded-xl flex items-center justify-center hover:bg-emerald-800 transition-all">
                <Send className="w-5 h-5 mr-3" /> Send Royal Envoy
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-emerald-900 mb-8">Reach Us Directly</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-100 text-amber-600 rounded-xl"><Phone className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-emerald-950">Call Us</h4>
                    <p className="text-stone-500 text-sm">+91 1800 555 786</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl"><MessageSquare className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-emerald-950">WhatsApp</h4>
                    <p className="text-stone-500 text-sm">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><Mail className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-emerald-950">Email Support</h4>
                    <p className="text-stone-500 text-sm">support@shahitofu.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-stone-100 text-stone-600 rounded-xl"><Clock className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-emerald-950">Business Hours</h4>
                    <p className="text-stone-500 text-sm">9 AM - 8 PM (Mon-Sat)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-stone-200 h-80 grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.334399274!2d75.78493303649667!3d22.721457187122143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b4493b1%3A0xad31ef2cfc9e2ad5!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
