export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center">
      <span className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
        Premium Experience
      </span>

      <h1 className="mb-6 text-6xl font-bold leading-tight">
        Scroll Driven
        <br />
        Product Story
      </h1>

      <p className="mb-10 max-w-xl text-lg text-zinc-400">
        A cinematic product experience powered by Framer Motion.
      </p>

      <div className="flex gap-4">
        <button className="rounded-full bg-white px-8 py-4 text-black">
          Buy Now
        </button>

        <button className="rounded-full border border-white/20 px-8 py-4">
          Learn More
        </button>
      </div>
    </div>
  );
}
