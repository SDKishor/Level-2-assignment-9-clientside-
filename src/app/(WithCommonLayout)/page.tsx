"use client";

import { ImageCarousel } from "@/components/modules/home/imageCarousel";
import { PopularSection } from "@/components/modules/home/popularSection";

import { useUser } from "@/context/UserContext";

export default function Home() {
  const { user } = useUser();
  console.log(user);

  const carouselItems = [
    {
      title: "BBQ STEAK",
      imageUrl:
        "https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Mexican Tacos",
      imageUrl:
        "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Dubble Patty Hamburger",
      imageUrl:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="">
      <ImageCarousel items={carouselItems} />
      <div className="my-10 max-w-xl mx-auto text-center space-y-4  ">
        <h1 className="text-5xl font-bold text-primary ">StreetEats</h1>
        <p className="text-lg text-gray-700">
          Welcome to StreetEats, your ultimate destination for discovering the
          best street food around you.
        </p>
      </div>
      <PopularSection />
    </div>
  );
}
