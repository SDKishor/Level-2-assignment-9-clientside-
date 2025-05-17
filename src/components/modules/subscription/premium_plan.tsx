"use client";
import CheckIcon from "@/app/assets/svgs/CheckIcon";
import { useUser } from "@/context/UserContext";
import Link from "next/link";
import React from "react";

export const PremiumPlanCard = () => {
  const { user } = useUser();

  const isPremium = user?.isPremiumUser;

  return (
    <div className="bg-primary/90 rounded-lg shadow-lg p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-yellow-400 text-primary px-4 py-1 text-sm font-bold rotate-45 translate-x-8 translate-y-4">
        Most Popular
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
        <p className="text-4xl font-bold text-white">
          1000.00 ৳<span className="text-lg text-orange-200">/Lifetime</span>
        </p>
      </div>

      <ul className="space-y-4 mb-8 text-orange-50">
        <li className="flex items-center">
          <CheckIcon />
          Unlimited favorite spots
        </li>
        <li className="flex items-center">
          <CheckIcon />
          Submit unlimited reviews
        </li>
        <li className="flex items-center">
          <CheckIcon />
          Advanced search filters
        </li>
        <li className="flex items-center">
          <CheckIcon />
          Premium member badge
        </li>
        <li className="flex items-center">
          <CheckIcon />
          24/7 Priority support
        </li>
        <li className="flex items-center">
          <CheckIcon />
          Early access to new features
        </li>
      </ul>

      {!user && (
        <Link
          href="/register"
          className="block w-full text-center bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Get Started
        </Link>
      )}
      {user && !isPremium && (
        <Link
          href="/premium"
          className="block w-full text-center bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Upgrade to Premium
        </Link>
      )}
      {user && isPremium && (
        <div className="block w-full text-center bg-gray-200 text-gray-800 py-3 rounded-lg  transition-colors cursor-default">
          Your Current Plan
        </div>
      )}
    </div>
  );
};
