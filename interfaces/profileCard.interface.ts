import { Dispatch, SetStateAction } from "react";

export interface ProfileProps {
  name: string;
  followerCount: number;
  isPro?: boolean;
  status?: "online" | "offline";
  website?: string;
  onMessageClick?: () => void; // A function that returns nothing (void)
  onFollow?: (id: number) => void; // A function that takes an argument
  setActive?: Dispatch<SetStateAction<boolean>>;
  isActive?: boolean;
}
