import { useUser } from "@/context/UserContext";

export default function Home() {
  const user = useUser();
  console.log(user);
  return (
    <div className="">
      <h1>Welcome to homepage</h1>
    </div>
  );
}
