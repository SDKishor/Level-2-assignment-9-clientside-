import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SubscriptionForm from "@/components/modules/subscription/SubscriptionForm";

const PremiumPage = () => {
  return (
    <div className=" py-8 min-h-screen mx-2 lg:mx-0">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Premium Membership
        </h1>

        {/* Subscription Form */}
        <Card className=" border-y-4 border-primary shadow-lg">
          <CardHeader>
            <CardTitle>Premium Membership</CardTitle>
            <CardDescription>
              Get unlimited access to all premium features for only 1000 Taka
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SubscriptionForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PremiumPage;
