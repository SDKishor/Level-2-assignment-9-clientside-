// components/recipe-card.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Gem } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface postCardProps {
  post: {
    id: string;
    title: string;
    content: string;
    location: string;
    price: number;
    image: string;
    ratingAvg: number;
    upvotes: number;
    downvotes: number;
    isPremiumPost: boolean;
  };
  premiumUser: boolean | undefined;
}

export function PostCard({ post, premiumUser }: postCardProps) {
  const totalVotes = post.upvotes - post.downvotes;

  return (
    <Link href={`/posts/${post.id}`} className="cursor-pointer">
      <Card className="hover:shadow-lg transition-shadow duration-200 p-0 relative">
        {!premiumUser && post.isPremiumPost && (
          <div className="absolute z-30 h-full w-full bg-gradient-to-t from-white to-transparent">
            <div className="w-full h-7/12 bg-gradient-to-t from-primary/90 to-transparent"></div>
            <div className="w-full h-5/12 bg-primary/90"></div>
          </div>
        )}

        <div className="relative aspect-[4/3]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-t-lg"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+yHgAFWAJp08sG7wAAAABJRU5ErkJggg=="
          />

          {post.isPremiumPost && (
            <Badge className="absolute top-2 right-2 bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700">
              <Gem className="h-4 w-4 mr-1" />
              Premium
            </Badge>
          )}
        </div>

        <CardHeader>
          <CardTitle className="truncate">{post.title}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 pb-6">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {post.content}
          </p>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-rose-600" />
              <span className="truncate">{post.location}</span>
            </div>
            <span className="font-semibold ">
              <span className="text-xl">৳ </span>
              {post.price.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < post.ratingAvg
                      ? "fill-amber-400 stroke-amber-400"
                      : "fill-muted stroke-muted"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {totalVotes >= 0 ? "+" : "-"}
              {Math.abs(totalVotes)} votes
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
