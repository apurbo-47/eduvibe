const features = [
  {
    title: "Performance",
    text: "Optimized rendering and smooth motion.",
  },
  {
    title: "Interaction",
    text: "Scroll driven storytelling experience.",
  },
  {
    title: "Responsive",
    text: "Desktop cinematic, mobile friendly.",
  },
];

export default function FeatureCards() {
  return (
    <div className="space-y-6">
      {features.map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>

          <p className="text-zinc-400">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
