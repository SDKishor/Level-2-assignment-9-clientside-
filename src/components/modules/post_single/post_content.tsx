"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { PostVote } from "@/services/voteService";
import { ArrowDown, ArrowUp, Gem, MapPin, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";

export const Postcontent = (postData: {
  post: {
    id: string;
    title: string;
    content: string;
    image: string;
    location: string;
    price: number;
    ratingAvg: number;
    upvotes: number;
    downvotes: number;
    isPremiumPost: boolean;
  };
}) => {
  const { post } = postData;
  const totalVotes = post.upvotes + post.downvotes;
  const user = useUser();
  const [upVotes, setUpVotes] = React.useState(post.upvotes);
  const [downVotes, setDownVotes] = React.useState(post.downvotes);

  const handleUPVote = async () => {
    const data = {
      userId: user.user?.id,
      postId: post.id,
      upVote: true,
    };

    const res = await PostVote(data);

    if (res?.success) {
      toast.success("Vote successfully");
      setUpVotes((prev) => prev + 1);
      setDownVotes((prev) => prev - 1);
    } else {
      toast.error(res?.message || "Failed to post comment");
    }
  };
  const handleDOWNVote = async () => {
    const data = {
      userId: user.user?.id,
      postId: post.id,
      upVote: false,
    };

    const res = await PostVote(data);

    if (res?.success) {
      toast.success("Vote successfully");
      setUpVotes((prev) => prev - 1);
      setDownVotes((prev) => prev + 1);
    } else {
      toast.error(res?.message || "Failed to post comment");
    }
  };
  return (
    <div className="flex items-center w-full  gap-8 my-10">
      <div className=" flex-1 ">
        <div className="relative aspect-[4/3]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
      </div>
      <div className="flex-1 flex flex-col gap-6   my">
        <h1 className="text-3xl font-bold text-primary">{post.title}</h1>
        <p className="text-lg text-gray-700">{post.content}</p>

        <div className="flex items-center gap-2 justify-between ">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-rose-600" />
            <span className="truncate">{post.location}</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`size-6 ${
                  i < post.ratingAvg
                    ? "fill-amber-400 stroke-amber-400"
                    : "fill-muted stroke-muted"
                }`}
              />
            ))}
          </div>
        </div>

        <h2 className="font-semibold text-3xl w-full ">
          ${post.price.toFixed(2)}
        </h2>

        {/* divider */}
        <div className="w-full h-[1px] bg-gray-300 my-4"></div>

        <div className="flex items-center justify-between">
          <div className="flex gap-5">
            <Button
              onClick={() => handleUPVote()}
              variant={"ghost"}
              className="flex items-center gap-1 text-primary py-6 cursor-pointer"
            >
              <ArrowUp className="size-10 font-bold " />
              <h2 className="text-4xl font-bold ">{upVotes}</h2>
            </Button>
            {/* dividor */}
            <div className="w-[1px] h-10 bg-gray-300 mx-4"></div>
            {/* dividor */}

            <Button
              onClick={() => handleDOWNVote()}
              variant={"ghost"}
              className="flex items-center gap-1 text-primary py-6 cursor-pointer"
            >
              <ArrowDown className="size-10 font-bold " />
              <h2 className="text-4xl font-bold ">{downVotes}</h2>
            </Button>
          </div>
          <p className="text-lg text-muted-foreground">
            {totalVotes >= 0 ? "+" : "-"}
            {Math.abs(totalVotes)} votes
          </p>
        </div>
      </div>
    </div>
  );
};
