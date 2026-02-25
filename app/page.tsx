'use client';

import Image from 'next/image';
import { User, Search, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Home() {
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const bgY = useTransform(scrollY, [0, 1000], [0, 200]);
  const bgScale = useTransform(scrollY, [0, 1000], [1, 1.05]);
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  
  const y1 = useTransform(scrollY, [0, 1000], [0, -80]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -180]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -40]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-black text-white text-[10px] uppercase tracking-widest text-center py-2">
        Subscribe and save 10% on your first order
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <nav className="hidden md:flex space-x-8 text-xs font-medium tracking-wide">
          <a href="#" className="hover:opacity-70 transition-opacity">Shop</a>
          <a href="#" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Efficacy</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Sustainability</a>
        </nav>
        
        <div className="text-3xl font-serif font-black tracking-tighter absolute left-1/2 -translate-x-1/2">
          KEATS
        </div>

        <div className="flex items-center space-x-6">
          <button className="hover:opacity-70 transition-opacity">
            <User className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button className="hover:opacity-70 transition-opacity">
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button className="hover:opacity-70 transition-opacity">
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>
      </header>

      <main className="flex-grow relative overflow-hidden">
        {/* Parallax Background Element */}
        <motion.div 
          style={{ y: bgY, scale: bgScale }}
          className="absolute top-0 left-0 w-full h-[120vh] -z-10 opacity-[0.03] pointer-events-none origin-top"
        >
          <Image 
            src="https://picsum.photos/seed/luxury-texture/1920/1080" 
            alt="Background texture" 
            fill 
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Hero Quote Section */}
        <motion.section 
          style={{ y: heroY, opacity: heroOpacity }}
          className="py-24 md:py-32 px-6 text-center max-w-4xl mx-auto relative"
        >
          <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
            &quot;A cashmere blanket for your epidermis&quot;
          </h1>
          <p className="text-xs uppercase tracking-[0.2em] font-medium mb-12">
            Wayne Goss
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3 border border-black text-xs uppercase tracking-widest font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-8 py-3 bg-black text-white border border-black text-xs uppercase tracking-widest font-medium hover:bg-gray-900 transition-colors flex items-center justify-center gap-2">
              Shop Skincare <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.section>

        {/* Masonry/Grid Section */}
        <section className="px-6 pb-24 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
            
            {/* Column 1 (Left) */}
            <motion.div style={{ y: y1 }} className="md:col-span-3 space-y-16 pt-12 md:pt-48">
              <div className="space-y-3">
                <div className="relative aspect-square bg-black">
                  <Image 
                    src="https://picsum.photos/seed/keats-serum-dark/600/600" 
                    alt="The Hydrating Serum" 
                    fill 
                    className="object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-xs font-serif italic text-gray-600">The Hydrating Serum</p>
              </div>
              
              <div className="space-y-3">
                <p className="text-xs font-serif italic text-gray-600">Nancy<br/>wears The Moisturising Cream</p>
                <div className="relative aspect-[3/4] bg-gray-100">
                  <Image 
                    src="https://picsum.photos/seed/keats-nancy/600/800" 
                    alt="Nancy" 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="relative aspect-square bg-gray-100">
                  <Image 
                    src="https://picsum.photos/seed/keats-cream-hand/600/600" 
                    alt="The Moisturising Cream" 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>

            {/* Column 2 (Center) */}
            <motion.div style={{ y: y2 }} className="md:col-span-5 space-y-16">
              <div className="relative">
                <div className="relative aspect-[4/5] bg-gray-100">
                  <Image 
                    src="https://picsum.photos/seed/keats-happy/800/1000" 
                    alt="Happy customer" 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Small inset image */}
                <div className="absolute -right-12 bottom-24 w-1/3 aspect-square bg-gray-200 hidden md:block z-10">
                  <Image 
                    src="https://picsum.photos/seed/keats-eye/300/300" 
                    alt="Skin detail" 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-12">
                <p className="text-xs font-serif italic text-gray-600">Kaz<br/>wears The Hydrating Serum</p>
                <div className="relative aspect-[3/4] bg-gray-100">
                  <Image 
                    src="https://picsum.photos/seed/keats-kaz/800/1066" 
                    alt="Kaz" 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>

            {/* Column 3 (Right) */}
            <motion.div style={{ y: y3 }} className="md:col-span-4 space-y-16 pt-12 md:pt-24">
              <div className="space-y-3">
                <p className="text-xs font-serif italic text-gray-600">Mercy<br/>wears The Moisturising Cream</p>
                <div className="relative aspect-[3/4] bg-black text-white p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="text-8xl font-serif leading-none mt-12">“</div>
                    <div className="relative w-3/5 aspect-square bg-gray-800 z-10">
                      <Image 
                        src="https://picsum.photos/seed/keats-mercy/400/400" 
                        alt="Mercy" 
                        fill 
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="text-8xl font-serif leading-none mt-12">”</div>
                  </div>
                  <div className="text-6xl md:text-7xl font-serif font-black tracking-tighter text-center mt-8">
                    KEATS
                  </div>
                </div>
              </div>

              <div className="relative aspect-square bg-gray-100 w-3/4 ml-auto">
                <Image 
                  src="https://picsum.photos/seed/keats-bottles-angled/600/600" 
                  alt="Products angled" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-3 pt-12">
                <p className="text-xs font-serif italic text-gray-600">The Hydrating Serum and The Moisturising Cream</p>
                <div className="relative aspect-[4/5] bg-black">
                  <Image 
                    src="https://picsum.photos/seed/keats-dark-products/600/750" 
                    alt="Products in dark" 
                    fill 
                    className="object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* As Seen In */}
        <section className="py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-[10px] uppercase tracking-widest text-center mb-12">As seen in</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
              {/* Logos placeholders */}
              <div className="font-serif text-xl font-bold">The Guardian</div>
              <div className="font-serif text-2xl tracking-widest">ELLE</div>
              <div className="font-serif text-xl font-bold">Daily Mail</div>
              <div className="font-serif text-2xl font-light tracking-widest">GLASS</div>
              <div className="font-sans text-lg tracking-widest">SHEERLUXE</div>
              <div className="font-serif text-2xl italic">YOU</div>
            </div>
          </div>
        </section>

        {/* Follow Us */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="mb-8">
            <h3 className="text-[10px] uppercase tracking-widest mb-2">Follow Us</h3>
            <p className="font-serif text-2xl italic">@wearekeats</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-[4/5] bg-gray-100">
              <Image src="https://picsum.photos/seed/insta1/400/500" alt="Instagram 1" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <Image src="https://picsum.photos/seed/insta2/400/500" alt="Instagram 2" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <Image src="https://picsum.photos/seed/insta3/400/500" alt="Instagram 3" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <Image src="https://picsum.photos/seed/insta4/400/500" alt="Instagram 4" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white pt-20 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-24">
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-widest text-gray-400">Shop</h4>
              <ul className="space-y-4 text-sm font-serif">
                <li><a href="#" className="hover:text-gray-300 transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">The Hydrating Serum</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">The Moisturising Cream</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-widest text-gray-400">Our Values</h4>
              <ul className="space-y-4 text-sm font-serif">
                <li><a href="#" className="hover:text-gray-300 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">What is Efficacy %?</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Sustainability</a></li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-widest text-gray-400">Support</h4>
              <ul className="space-y-4 text-sm font-serif">
                <li><a href="#" className="hover:text-gray-300 transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">FAQs</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-widest text-gray-400">Social</h4>
              <ul className="space-y-4 text-sm font-serif">
                <li><a href="#" className="hover:text-gray-300 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">TikTok</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-widest text-gray-400">Join our mailing list</h4>
              <form className="flex border-b border-gray-700 pb-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-transparent border-none outline-none flex-grow text-sm font-serif placeholder:text-gray-500"
                />
                <button type="submit" className="text-[10px] uppercase tracking-widest hover:text-gray-300 transition-colors">
                  Subscribe &rarr;
                </button>
              </form>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="font-serif font-black text-[15vw] leading-none tracking-tighter select-none">
              KEATS
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-[10px] uppercase tracking-widest text-gray-400 gap-4">
            <button className="border border-gray-800 px-4 py-2 hover:bg-gray-900 transition-colors flex items-center gap-2">
              United States (USD $) <span className="text-[8px]">▼</span>
            </button>
            <div className="flex gap-6">
              <span>&copy; Keats Beauty 2025</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
