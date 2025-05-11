export const PostVote = async (VoteData: {
  userId: string | undefined;
  postId: string;
  upVote: boolean;
}) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user_vote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(VoteData),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Failed to fetch post");
    }
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Error(error.message);
    }
    return Error("An unknown error occurred");
  }
};
