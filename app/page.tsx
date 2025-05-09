"use client";

import { petsPost } from "@/placeholder/pets-post";

import { Feed, FadeContent } from "@/components/";
import { Stories } from "@/components/Dashboard/Stories/Stories";

export default function Home() {
  return (
    <div className="mx-auto ml-0 space-y-3 md:space-y-5 xl:ml-24 xl:max-w-2xl">
      <Stories />

      {petsPost.map((post) => (
        <FadeContent key={post.id} blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
          <Feed post={post} />
        </FadeContent>
      ))}
    </div>
  );
}
