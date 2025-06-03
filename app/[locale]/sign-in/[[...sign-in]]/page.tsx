import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex justify-center items-center">
      <SignIn />
    </main>
  );
}
