"use client";

import PostForm from "@/components/modules/all_post/postForm";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AllPostSection from "@/components/modules/all_post/allPostSection";
import UserPostSection from "@/components/modules/all_post/userPostSection";

export const page = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto my-12">
        <div className="flex justify-between mb-10">
          <h1 className="text-3xl font-bold text-primary ">
            Wanna Share an outstanding food spot?
          </h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button size={"lg"}>Create Post</Button>
            </DialogTrigger>
            <DialogContent className="">
              <PostForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="bg-white  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AllPostSection />
        </div>
      </div>
      <div className=" px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <UserPostSection />
        </div>
      </div>
    </>
  );
};

export default page;
