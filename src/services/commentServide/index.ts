export const postComment = async (reqdata: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqdata),
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

export const getAllComments = async (postId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/comments/${postId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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
