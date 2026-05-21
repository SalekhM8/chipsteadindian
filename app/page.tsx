import Hero from "@/components/Hero";
import ParallaxCard from "@/components/ParallaxCard";
import SectionTitle from "@/components/SectionTitle";
import StoryHighlight from "@/components/StoryHighlight";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-chipstead-cream selection:bg-chipstead-red selection:text-white">
      <Hero />

      <SectionTitle subtitle="Est. 1988">
        <>
          &ldquo;Chipstead Tandoori is a love letter to the timeless flavours
          of South Asia —
          <br className="hidden md:inline" /> and to the people of Surrey
          who&apos;ve made it their own.&rdquo;
        </>
      </SectionTitle>

      <StoryHighlight />

      {/* Menu Section */}
      <ParallaxCard
        imageSrc="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2070&auto=format&fit=crop"
        title="Our Menus"
        subtitle="Breakfast, Lunch & Dinner"
        link="/menu"
        linkText="View Menus"
      />

      <SectionTitle subtitle="The Kitchen">
        From the fire of the tandoor to the slow warmth of the curry pot —
        every dish carries a story of craft and care.
      </SectionTitle>

      {/* Order Section */}
      <ParallaxCard
        imageSrc="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop"
        title="Your favourite, at home."
        subtitle="Takeaway & Delivery"
        link="https://chipsteadtandoori.app4food.co.uk"
        linkText="Order Now"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="bg-chipstead-black text-chipstead-cream p-12 md:p-24 flex flex-col justify-center items-center text-center border-y border-white/10">
          <h3 className="dishoom-nav mb-6 text-chipstead-gold tracking-[0.3em] uppercase">
            Delivery Areas
          </h3>
          <p className="dishoom-h2 text-white mb-8 tracking-[0.1em] normal-case font-serif">
            Coulsdon, Purley, <br /> Banstead &amp; Kingswood
          </p>
          <div className="w-12 h-px bg-white/20 mb-8" />
          <p className="dishoom-body text-white/60 max-w-xs mb-12">
            We deliver across Coulsdon, Purley, Banstead, and Kingswood —
            bringing the warmth of Chipstead Tandoori straight to your door.
          </p>
          <a
            href="https://chipsteadtandoori.app4food.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="dishoom-button text-white border border-white/30 px-8 py-4 hover:bg-white hover:text-chipstead-black transition-all duration-300 uppercase"
          >
            Check Eligibility
          </a>
        </div>
        <div className="relative h-[60vh] md:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop"
            alt="Whole spices"
            className="object-cover grayscale-[20%] contrast-125"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
        </div>
      </div>

      <SectionTitle subtitle="Visit Us">
        Pull up a chair. You&apos;re always welcome here.
      </SectionTitle>

      <div className="pb-24">
        {/* Contact Section */}
        <ParallaxCard
          imageSrc="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
          title="Contact Us"
          subtitle="Get in Touch"
          link="tel:01737551219"
          linkText="Call 01737 551 219"
        />
      </div>
    </main>
  );
}
