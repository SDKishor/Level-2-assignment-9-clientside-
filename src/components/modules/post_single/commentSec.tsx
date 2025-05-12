/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUser } from "@/context/UserContext";
import { getAllComments, postComment } from "@/services/commentServide";
import { zodResolver } from "@hookform/resolvers/zod";
import { Ghost } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export function CommentSec({
  commentdata,
  postId,
}: {
  commentdata: any;
  postId: string;
}): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState(commentdata);

  const user = useUser();

  const formSchema = z.object({
    comment: z.string().min(2, "Name must be at least 2 characters"),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    const newComment = {
      userId: user.user?.id,
      postId: postId,
      comment: data.comment,
    };
    const res = await postComment(newComment);

    console.log(res);

    if (res?.success) {
      console.log("comment posted successfully");
      const comments = await getAllComments(postId);
      if (comments?.success) {
        setComment(comments.data);
        toast.success("Comment posted successfully");
        form.reset();
        setIsLoading(false);
      } else {
        setIsLoading(false);
        toast.error(comments?.message || "Failed to fetch comments");
      }
    } else {
      setIsLoading(false);
      toast.error(res?.message || "Failed to post comment");
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-primary">Comments</h1>
      {comment.length > 0 &&
        comment.map((comment: { id: string; comment: string }) => (
          <div
            key={comment.id}
            className="flex flex-col  gap-4 my-4 p-4 bg-gray-100 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <Ghost className="h-6 w-6 text-gray-500" />
              <p className="text-sm text-gray-700">{comment.comment}</p>
            </div>
          </div>
        ))}

      {/* comment form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-1/2 my-10"
        >
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>comment</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Write your comment here..."
                    {...field}
                    className="h-20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="cursor-pointer"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              <>Comment</>
            )}
          </Button>
        </form>
      </Form>
    </>
  );
}
