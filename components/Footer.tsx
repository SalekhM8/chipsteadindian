import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#faf8f2] text-black pt-24 pb-12 px-6 md:px-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="md:col-span-1">
          <h3 className="font-serif text-2xl mb-6">Chipstead Tandoori</h3>
          <p className="font-sans text-sm opacity-60 leading-relaxed mb-6">
            Authentic Indian cuisine delivered to your door. Serving Chipstead, Coulsdon, Purley, Banstead & Kingswood.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-50 transition-opacity"><Facebook size={20} /></a>
            <a href="#" className="hover:opacity-50 transition-opacity"><Twitter size={20} /></a>
            <a href="#" className="hover:opacity-50 transition-opacity"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-1">
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase mb-6 opacity-40">Explore</h4>
          <ul className="space-y-4 font-serif text-lg">
            <li><Link href="/" className="hover:underline decoration-1 underline-offset-4">Home</Link></li>
            <li><Link href="/menu" className="hover:underline decoration-1 underline-offset-4">Menus</Link></li>
            <li><Link href="/order" className="hover:underline decoration-1 underline-offset-4">Order Online</Link></li>
            <li><Link href="/contact" className="hover:underline decoration-1 underline-offset-4">Contact</Link></li>
          </ul>
        </div>

        {/* Legal / Extra */}
        <div className="md:col-span-1">
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase mb-6 opacity-40">Legal</h4>
          <ul className="space-y-4 font-serif text-lg">
            <li><Link href="#" className="hover:underline decoration-1 underline-offset-4">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:underline decoration-1 underline-offset-4">Terms of Service</Link></li>
            <li><Link href="#" className="hover:underline decoration-1 underline-offset-4">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-1">
           <h4 className="font-sans text-xs tracking-[0.2em] uppercase mb-6 opacity-40">Newsletter</h4>
           <p className="font-serif italic text-lg mb-6">
             Subscribe for updates, offers, and stories from our kitchen.
           </p>
           <form className="flex border-b border-black pb-2">
             <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent w-full outline-none font-sans text-sm placeholder:text-black/40"
             />
             <button type="button" className="font-sans text-xs tracking-[0.2em] uppercase hover:opacity-60">
               Subscribe
             </button>
           </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-xs font-sans opacity-40 tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Chipstead Tandoori. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed with love</p>
      </div>
    </footer>
  );
}



