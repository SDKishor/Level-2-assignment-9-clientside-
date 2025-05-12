import { PostCard } from "@/components/shared/postCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
    isPremiumPost: true,
  },
];

export const PremiumSection = () => {
  const user = useUser();
  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary">
            Premium Food Spots
          </h1>

          <Link href={"/posts"}>
            <Button variant={"link"} size={"lg"}>
              View More
              <ArrowRight className=" size-5" />
            </Button>
          </Link>
        </div>
        {user.user?.isPremiumUser ? (
          <div className=" mt-4">
            <p className="text-lg text-gray-700">
              Enjoy your premium access to exclusive food spots!
            </p>
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
        ) : (
          <div className=" mt-4">
            <Card className="bg-white/80 p-4 rounded-lg ">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="">
                  <h3 className="text-2xl font-bold mb-2">
                    Unlock Premium content
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Upgrade to premium for more exclusive content!
                  </p>
                </div>
                <Link href={"/subscription"}>
                  <Button variant={"default"} className=" " size={"lg"}>
                    Upgrade Now
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-semibold">Premium Membership</h3>

                <div className="sm:text-right">
                  <p className="font-bold text-xl">1000৳</p>
                  <p className="text-xs text-muted-foreground">
                    One-time payment
                  </p>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};
