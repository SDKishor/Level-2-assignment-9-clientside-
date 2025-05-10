"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PartyPopper } from "lucide-react";
import { useRouter } from "next/navigation";

export function PremiumCard() {
  const router = useRouter();

  return (
    <Card className="max-w-md mx-auto bg-gradient-to-br from-rose-50/80 to-white-50/80 backdrop-blur-sm border-rose-100 shadow-lg">
      <CardHeader className="items-center space-y-4">
        <div className="bg-gradient-to-r from-primary to-rose-500 text-white px-4 py-4 rounded-full text-sm font-bold tracking-wide shadow-sm text-center">
          PREMIUM MEMBER
        </div>
        <div className="flex items-center justify-center">
          <PartyPopper className="size-14 text-rose-500 animate-bounce" />
        </div>
      </CardHeader>

      <CardContent className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-amber-900">
          Welcome to Premium! 🎉
        </h2>
        <p className="text-amber-800 text-sm leading-relaxed">
          You&apos;ve unlocked exclusive features, priority support, and special
          content. Thank you for joining our premium community!
        </p>
      </CardContent>

      <CardFooter className="flex justify-center">
        <Button
          onClick={() => router.push("/")}
          className="bg-gradient-to-r from-primary to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white shadow-lg transition-all cursor-pointer"
        >
          Return Home
        </Button>
      </CardFooter>
    </Card>
  );
}
