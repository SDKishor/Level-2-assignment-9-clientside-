export const getPostById = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Failed to fetch post");
    }
    return data.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Error(error.message);
    }
    return Error("An unknown error occurred");
  }
};

export const CreatePost = async (postData: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/posts/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
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
