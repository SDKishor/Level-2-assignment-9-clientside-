"use client";

import CheckIcon from "@/app/assets/svgs/CheckIcon";
import XIcon from "@/app/assets/svgs/XIcon";
import { useUser } from "@/context/UserContext";
import Link from "next/link";
import React from "react";

export const FreePlanCard = () => {
  const { user } = useUser();

  const isPremium = user?.isPremiumUser;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
        <p className="text-4xl font-bold text-primary">
          00.00 ৳<span className="text-lg text-gray-500">/Lifetime</span>
        </p>
      </div>

      <ul className="space-y-4 mb-8">
        <li className="flex items-center">
          <CheckIcon />
          Basic search functionality
        </li>
        <li className="flex items-center">
          <CheckIcon />
          Read reviews
        </li>
        <li className="flex items-center">
          <CheckIcon />
          Save up to 5 favorite spots
        </li>
        <li className="flex items-center text-gray-400">
          <XIcon />
          Submit reviews
        </li>
        <li className="flex items-center text-gray-400">
          <XIcon />
          Premium search filters
        </li>
        <li className="flex items-center text-gray-400">
          <XIcon />
          Priority support
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
        <div className="block w-full text-center bg-gray-200 text-gray-800 py-3 rounded-lg  transition-colors cursor-default">
          Your Current Plan
        </div>
      )}
      {user && isPremium && (
        <div className="block w-full text-center bg-gray-200 text-gray-800 py-3 rounded-lg  transition-colors cursor-default">
          You are a <span className="text-primary">Premium User</span>
        </div>
      )}
    </div>
  );
};
