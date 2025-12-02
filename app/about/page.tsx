import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-chipstead-cream pt-32 pb-24 px-6 md:px-12">
      <SectionTitle subtitle="Our Story">
        A family tradition of authentic flavors.
      </SectionTitle>

      <div className="max-w-4xl mx-auto space-y-12">
        <div className="relative h-[50vh] w-full border-dishoom p-2 bg-chipstead-cream">
           <div className="relative h-full w-full border border-black/10 overflow-hidden">
             <Image
               src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop"
               alt="Restaurant Atmosphere"
               fill
               className="object-cover sepia-[20%] contrast-125"
             />
           </div>
        </div>

        <div className="prose prose-lg max-w-none font-serif-body text-chipstead-black/80 leading-relaxed text-center">
          <p className="first-letter:text-5xl first-letter:font-serif-heading first-letter:mr-2 first-letter:float-left">
            For over 30 years, Chipstead Tandoori has been a cornerstone of the community, 
            serving authentic, soul-warming South Asian cuisine to the locals of Surrey. 
            As a family-run establishment, we believe that food is more than just sustenance—it is a way to bring people together.
          </p>
          <p>
            Our recipes have been passed down through generations, preserving the traditional cooking methods 
            that give our dishes their distinct depth and character. From the slow-simmered richness of our curries 
            to the charred perfection of our tandoori grills, every plate that leaves our kitchen is a testament to our heritage.
          </p>
          <p>
            We take pride in satisfying the palates of our neighbors in Chipstead, Coulsdon, Purley, Banstead, and Kingswood. 
            Whether you are joining us for a meal or enjoying our food at home, we promise an experience that is warm, welcoming, and truly authentic.
          </p>
        </div>
        
        <div className="text-center pt-12">
           <h3 className="font-serif-heading text-3xl italic mb-4">The Family</h3>
           <p className="font-sans text-xs tracking-[0.2em] uppercase opacity-60 font-bold">Est. 1990</p>
        </div>
      </div>
    </main>
  );
}

