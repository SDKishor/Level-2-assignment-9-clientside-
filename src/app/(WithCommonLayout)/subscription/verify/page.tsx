import { PremiumCard } from "@/components/modules/subscription/premium_card";
import { verifyPayment } from "@/services/subscriptionService";
import React from "react";

export const VerifyPage = async () => {
  const info = await verifyPayment();

  console.log(info.success);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <PremiumCard />
    </div>
  );
};

export default VerifyPage;
