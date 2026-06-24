import { RefObject } from "react";

interface Props {
  landingRef: RefObject<HTMLDivElement | null>;
}

export default function FeatureLanding({ landingRef }: Props) {
  return (
    <div
      ref={landingRef}
      className="
        relative
        h-[650px]
        rounded-[40px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
      "
    >
      <div className="absolute inset-6 rounded-[32px] border border-dashed border-white/20" />

      <div className="absolute bottom-8 left-8">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Landing Zone
        </p>

        <h3 className="mt-2 text-3xl font-bold">Product Details</h3>
      </div>
    </div>
  );
}
