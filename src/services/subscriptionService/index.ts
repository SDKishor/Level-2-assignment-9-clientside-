"use server";
import { cookies } from "next/headers";

export const subscription = async (userData: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/subscription`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${
            (await cookies()).get("accessToken")!.value
          }`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    const data = await res.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Error(error.message);
    }
    return Error("An unknown error occurred");
  }
};

export const verifyPayment = async () => {
  try {
    const infoRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/subscription/user`,
      {
        method: "Get",
        headers: {
          Authorization: `Bearer ${
            (await cookies()).get("accessToken")!.value
          }`,
          "Content-Type": "application/json",
        },
      }
    );

    const subscriptionData = await infoRes.json();

    if (subscriptionData?.success) {
      const VerifyRes = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/subscription/verify/${subscriptionData.data.sp_order_id}`,
        {
          method: "Get",
          headers: {
            Authorization: `Bearer ${
              (await cookies()).get("accessToken")!.value
            }`,
            "Content-Type": "application/json",
          },
        }
      );

      const verifyData = await VerifyRes.json();
      return verifyData;
    } else {
      throw new Error("No subscription found");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Error(error.message);
    }
    return Error("An unknown error occurred");
  }
};
