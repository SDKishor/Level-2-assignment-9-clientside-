"use client";

import { ImageCarousel } from "@/components/modules/home/imageCarousel";
import { PopularSection } from "@/components/modules/home/popularSection";
import { PremiumSection } from "@/components/modules/home/premiumSection";
import { ArrowRight } from "lucide-react";

export default function Home() {
  // const { user } = useUser();

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
      <PremiumSection />
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className=" bg-background py-8 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-2 h-10 bg-primary rounded-full mr-3"></span>
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Classic Street Foods",
                  description:
                    "Chotpoti, fuchka, rolls, kababs, burgers — all under one roof.",
                },
                {
                  title: "Fusion Dishes",
                  description:
                    "Creative twists on traditional favorites for adventurous foodies.",
                },
                {
                  title: "Online Ordering",
                  description:
                    "Easy-to-use platform to order your favorite snacks anytime.",
                },
                {
                  title: "Fast Delivery",
                  description:
                    "We deliver hot and fresh street food to your doorstep in minutes.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-accent mb-1">
                      {item.title}
                    </h3>
                    <p className="text-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-6">
            <div className=" bg-background py-8 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-2 h-10 bg-primary rounded-full mr-3"></span>
                Authentic Flavors
              </h2>
              <p className="px-4">
                We use traditional recipes and ingredients to serve the real
                taste of street food. We only show you authentic street food.
              </p>
            </div>
            <div className=" bg-background py-8 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-2 h-10 bg-primary rounded-full mr-3"></span>
                Hygienic & Fresh
              </h2>
              <p className="px-4">post are verified hygienic and fresh food.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
