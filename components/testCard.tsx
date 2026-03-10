import { ProfileProps } from "@/interfaces/profileCard.interface";
import React from "react";

const TestCard: React.FC<ProfileProps> = ({
  name,
  followerCount,
  isPro,
  status,
  website,
  onMessageClick,
  isActive,
}) => {
  return (
    <div className="w-80 bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
      <div className="flex flex-col items-center">
        {/* Boolean Check: Show 'PRO' badge only if isPro is true */}
        <div className="relative">
          <div className="h-20 w-20 bg-indigo-100 rounded-full flex items-center justify-center text-2xl font-bold text-indigo-600">
            {name.charAt(0)}
          </div>
          {isPro && (
            <span className="absolute -top-1 -right-1 bg-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
              Pro
            </span>
          )}
        </div>

        <h3 className="mt-4 text-lg font-bold text-slate-800">{name}</h3>

        {/* Number Formatting */}
        <p className="text-slate-500 text-sm">
          {followerCount.toLocaleString()} Followers
        </p>

        {/* Optional Property Check */}
        {website && (
          <a
            href={website}
            className="text-blue-500 text-xs mt-1 hover:underline"
          >
            Visit Website
          </a>
        )}

        <div className="flex gap-3 mt-6 w-full">
          {/* Function Call: Triggering the passed-in function */}
          <button
            onClick={onMessageClick}
            className="flex-1 px-4 py-2 bg-slate-900 text-white text-sm rounded-lg hover:bg-slate-800 transition"
          >
            Message
          </button>

          <button className="px-4 py-2 border border-slate-200 text-sm rounded-lg hover:bg-slate-50 transition">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
