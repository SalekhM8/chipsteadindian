import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-chipstead-cream pt-32 pb-24 px-6 md:px-12">
      <SectionTitle subtitle="Our Story">
        Thirty-eight years of feeding the people we love.
      </SectionTitle>

      <div className="max-w-4xl mx-auto space-y-12">
        <div className="relative h-[50vh] w-full border-dishoom p-2 bg-chipstead-cream">
          <div className="relative h-full w-full border border-black/10 overflow-hidden">
            <Image
              src="/story.png"
              alt="Inside Chipstead Tandoori"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover sepia-[20%] contrast-125"
            />
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-chipstead-black/80 leading-relaxed text-center space-y-8">
          <p className="first-letter:text-5xl first-letter:mr-2 first-letter:float-left">
            Chipstead Tandoori opened its doors in 1988 off the station parade
            in the heart of the village. What began as a small, family-run
            restaurant quickly became something the community held close — a
            place where Friday nights turned into long, laughter-filled
            evenings, and where the smell of fresh naan became a familiar
            comfort to the streets of Chipstead.
          </p>
          <p>
            The recipes have never changed — because they&apos;ve never needed
            to. Passed down and protected with quiet pride, they carry the
            depth and honesty of the South Asian cooking traditions they come
            from. The Tarka Daal still simmers for 24 hours. The tandoor still
            runs from first light. The marinades are still freshly ground each
            morning. We cook the way we always have — slowly, carefully, and
            with real heart.
          </p>
          <p>
            Over the last four decades, we&apos;ve had the honour of feeding
            four generations of families across Chipstead, Coulsdon, Purley,
            Banstead, and Kingswood. Some of our regulars have been with us
            since that very first year. Whether you&apos;re joining us for a
            quiet dinner, a big family celebration, or ordering in on a rainy
            evening, you&apos;re always welcome at our takeaway. That
            hasn&apos;t changed either — and it never will.
          </p>
        </div>

        <div className="text-center pt-12 space-y-6">
          <h3 className="text-3xl italic">The Family</h3>
          <p className="font-sans text-xs tracking-[0.2em] uppercase opacity-60 font-bold">
            Family-run since 1988 · 34 Chipstead Station Parade, Chipstead,
            Coulsdon, Surrey CR5 3TF
          </p>
          <div className="flex justify-center items-center gap-4 dishoom-button uppercase pt-2">
            <a
              href="tel:01737551219"
              className="hover:text-chipstead-red transition-colors"
            >
              01737 551 219
            </a>
            <span className="opacity-30">·</span>
            <a
              href="tel:01737556401"
              className="hover:text-chipstead-red transition-colors"
            >
              01737 556 401
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
