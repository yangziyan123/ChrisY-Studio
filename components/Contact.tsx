import React, { useState } from 'react';
import FadeIn from './FadeIn';
import Button from './Button';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {

  // ⭐ 新增：用来控制弹窗
  const [popupImage, setPopupImage] = useState<string | null>(null);

  const [toastVisible, setToastVisible] = useState(false);

  return (
    <section id="contact" className="py-24 bg-studio-black relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute -right-1/4 top-1/4 w-1/2 h-1/2 bg-zinc-800/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Info Column */}
          <div className="lg:w-1/2">
            <FadeIn direction="right">
              <h2 className="text-5xl md:text-7xl font-serif mb-8">Let's Create Together.</h2>
              <p className="text-xl text-zinc-400 mb-12 font-light">
                Have a project in mind? We are currently accepting bookings for the upcoming season. Reach out to discuss your vision.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-zinc-500 mb-2">Studio</h4>
                  <p className="text-white">
                    Room 523, Building 8 <br />
                    East Campus, Soochow University <br />  
                    Gusu District, Suzhou  <br />
                    Jiangsu Province 215000  <br />
                  </p>
                </div>
                  <div className="flex gap-4">
                    {SOCIAL_LINKS.map((link) => (
                      <div key={link.platform} className="relative group">
                        <button
                          onClick={() => {
                            if (link.type === 'wechat') setPopupImage('/wechat-qrcode.jpg');
                            if (link.type === 'douyin') setPopupImage('/douyin-qrcode.jpg');

                            if (link.type === 'email') {
                              navigator.clipboard.writeText("yangziyan0708@foxmail.com");
                              setToastVisible(true);
                              setTimeout(() => setToastVisible(false), 2000); // 2秒自动消失
                            }
                          }}
                          className="p-2 border border-zinc-800 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                        >
                          <link.icon size={20} />
                        </button>

                        {/* ⭐ Tooltip：只有 email 的时候才显示 */}
                        {link.type === "email" && (
                          <span className="
                            absolute left-1/2 -translate-x-1/2 -top-6
                            bg-black text-white text-xs px-3 py-1 rounded opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                          ">
                            yangziyan0708@foxmail.com
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
              </div>
            </FadeIn>
          </div>

          {/* Form Column */}
          <div className="lg:w-1/2">
            <FadeIn direction="left" delay={200}>
              <form className="space-y-8 bg-zinc-900/30 p-8 md:p-12 backdrop-blur-sm border border-zinc-800">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative z-0">
                    <input 
                      type="text" 
                      id="name" 
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-white peer" 
                      placeholder=" " 
                      required 
                    />
                    <label 
                      htmlFor="name" 
                      className="absolute text-sm text-zinc-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-zinc-500"
                    >
                      Your Name
                    </label>
                  </div>

                  <div className="relative z-0">
                    <input 
                      type="email" 
                      id="email" 
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-white peer" 
                      placeholder=" " 
                      required 
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute text-sm text-zinc-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-zinc-500"
                    >
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative z-0">
                  <select 
                    id="service" 
                    className="block py-2.5 px-0 w-full text-sm text-zinc-400 bg-transparent border-0 border-b border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-white focus:text-white peer"
                  >
                    <option className="bg-zinc-900">Select Service...</option>
                    <option className="bg-zinc-900">Portrait Starter</option>
                    <option className="bg-zinc-900">Portrait Deluxe</option>
                    <option className="bg-zinc-900">Portrait Premium</option>
                    <option className="bg-zinc-900">Other</option>
                  </select>
                </div>

                <div className="relative z-0">
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-white peer resize-none" 
                    placeholder=" " 
                    required
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute text-sm text-zinc-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-zinc-500"
                  >
                    Tell us about your project
                  </label>
                </div>

                <Button type="submit" variant="primary" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* ⭐ 新增：图片弹窗 Popup */}
      {popupImage && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setPopupImage(null)}
        >
          <div className="bg-white p-4 rounded-xl popup-animate">
            <img src={popupImage} alt="popup" className="w-64 h-auto rounded" />
          </div>
        </div>
      )}

      {/* 🎉 Copy Success Toast */}
      {toastVisible && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 
                        bg-black text-white px-6 py-3 rounded-full shadow-xl
                        text-sm font-medium flex items-center gap-2
                        animate-fade-in-up z-50">

          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" 
              d="M5 13l4 4L19 7" />
          </svg>

          Email copied to clipboard!
        </div>
      )}

    </section>
  );
};

export default Contact;
