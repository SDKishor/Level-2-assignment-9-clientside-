import { PostCard } from "@/components/shared/postCard";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import React from "react";

const dummyPosts = [
  {
    id: "1",
    title: "Luxury Beachfront Villa",
    content:
      "Experience the ultimate luxury in this stunning beachfront villa with breathtaking ocean views.",
    location: "Malibu, California",
    price: 1200.0,
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    ratingAvg: 5,
    upvotes: 150,
    downvotes: 10,
    isPremiumPost: true,
  },
  {
    id: "2",
    title: "Cozy Mountain Cabin",
    content:
      "Escape to the mountains in this charming cabin surrounded by nature and tranquility.",
    location: "Aspen, Colorado",
    price: 300.0,
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    ratingAvg: 4,
    upvotes: 80,
    downvotes: 5,
    isPremiumPost: false,
  },
];

export const PopularSection = () => {
  const user = useUser();

  return (
    <section className="bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary">
            Popular Food Spots
          </h1>

          <Link href={"/posts"}>
            <Button variant={"link"} size={"lg"}>
              View More
              <ArrowRight className=" size-5" />
            </Button>
          </Link>
        </div>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {dummyPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                premiumUser={user.user?.isPremiumUser}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
