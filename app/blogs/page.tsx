import TestCard from "@/components/testCard";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <TestCard
        followerCount={100}
        name="Jahed"
        isActive
        isPro
        website="this is our website"
      />
    </div>
  );
};

export default BlogPage;
