import { Button } from "@/components/ui/button"
import Link from "next/link"

function Page() {
  return (
    <div>
      <header className="flex justify-between items-center p-4 w-full bg-black text-white">
        <h1 className="text-3xl">Sign In Naurial</h1>
        <Link href={"/"}>Home</Link>  
      </header>
      <main className="w-full p-10 flex justify-center">
        <Button className="cursor-pointer">Let's go started</Button>
      </main>
    </div>
  )
}
export default Page