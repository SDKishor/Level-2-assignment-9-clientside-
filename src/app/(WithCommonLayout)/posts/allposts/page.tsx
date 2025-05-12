"use client";
import { PostCard } from "@/components/shared/postCard";
import { useUser } from "@/context/UserContext";
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

const AllPage = () => {
  const user = useUser();

  return (
    <div className=" px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
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
    </div>
  );
};

export default AllPage;
